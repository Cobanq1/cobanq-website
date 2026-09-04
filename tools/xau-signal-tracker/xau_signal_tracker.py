"""
XAU/USD Signal Tracker
-----------------------
Pulls recent XAUUSD price bars, flags sharp intraday spikes, and cross-references
those spikes against a macro economic calendar + recent news to help explain
*why* a move happened.

For each spike it also pulls the dollar index and the US 10-year yield over the
same minute. Both are normally inversely correlated with gold, so their reaction
separates a macro-driven move (dollar/rates moved, gold followed) from a
gold-specific one (gold moved alone).

Data sources (all free-tier):
  - Price bars:         Twelve Data  (https://twelvedata.com)
  - Economic calendar:  Finnhub      (https://finnhub.io)
  - News headlines:     Finnhub      (https://finnhub.io)

Setup:
  1. pip install -r requirements.txt
  2. Copy .env.example to .env and fill in your free API keys
  3. Run: python xau_signal_tracker.py

Free tier notes (check current limits on each provider's site before relying on this):
  - Twelve Data free tier: ~800 requests/day, 8 requests/min, intraday bars available
  - Finnhub free tier: 60 calls/min, includes economic calendar + company/general news
"""

import os
import sys
from datetime import datetime, timedelta, timezone

import requests
from dotenv import load_dotenv

load_dotenv()

TWELVE_DATA_KEY = os.getenv("TWELVE_DATA_API_KEY")
FINNHUB_KEY = os.getenv("FINNHUB_API_KEY")

SYMBOL = "XAU/USD"
INTERVAL = "1min"
OUTPUT_SIZE = 500           # number of recent bars to pull
SPIKE_THRESHOLD_PCT = 0.15  # flag a bar as a "spike" if abs % move exceeds this
EVENT_WINDOW_MINUTES = 15   # how close a calendar event must be to a spike to be linked

# Correlated drivers checked alongside gold: (symbol, label, phrase for an inverse move).
# Both normally move inversely to gold. Set to [] to skip these extra API calls.
# If your Twelve Data plan doesn't cover an index symbol, swap in a tradeable proxy
# (e.g. "UUP" for the dollar, "IEF" for the 10-year) — see the README.
CONTEXT_SYMBOLS = [
    ("DXY", "Dollar index", "dollar-driven"),
    ("TNX", "US 10Y yield", "rates-driven"),
]
CONTEXT_MATCH_MINUTES = 3    # how far from a spike a context bar may be and still count
CONTEXT_FLAT_PCT = 0.02      # context moves smaller than this are treated as "flat"


def require_keys():
    missing = [name for name, val in [
        ("TWELVE_DATA_API_KEY", TWELVE_DATA_KEY),
        ("FINNHUB_API_KEY", FINNHUB_KEY),
    ] if not val]
    if missing:
        print(f"Missing API key(s) in .env: {', '.join(missing)}")
        print("Get free keys at https://twelvedata.com and https://finnhub.io")
        sys.exit(1)


def parse_utc(value, fmt=None):
    """Parse a timestamp string as UTC, returning None if it isn't parseable."""
    if not value:
        return None
    try:
        dt = datetime.strptime(value, fmt) if fmt else datetime.fromisoformat(value)
    except (TypeError, ValueError):
        return None
    return dt if dt.tzinfo else dt.replace(tzinfo=timezone.utc)


def fetch_bars(symbol=SYMBOL):
    """Pull recent INTERVAL bars for `symbol` from Twelve Data."""
    url = "https://api.twelvedata.com/time_series"
    params = {
        "symbol": symbol,
        "interval": INTERVAL,
        "outputsize": OUTPUT_SIZE,
        "apikey": TWELVE_DATA_KEY,
        "timezone": "UTC",
    }
    resp = requests.get(url, params=params, timeout=20)
    resp.raise_for_status()
    data = resp.json()

    if data.get("status") == "error":
        raise RuntimeError(f"Twelve Data error for {symbol}: {data.get('message')}")

    bars = data.get("values") or []
    bars.sort(key=lambda b: b["datetime"])  # oldest -> newest
    return bars


def find_spikes(bars):
    """Flag bars where the close-to-close % move exceeds SPIKE_THRESHOLD_PCT."""
    spikes = []
    for i in range(1, len(bars)):
        try:
            prev_close = float(bars[i - 1]["close"])
            curr_close = float(bars[i]["close"])
        except (KeyError, TypeError, ValueError):
            continue
        # Skip bad ticks: a zero/negative print is a data glitch, not a move
        if prev_close <= 0 or curr_close <= 0:
            continue
        pct_move = (curr_close - prev_close) / prev_close * 100
        if abs(pct_move) >= SPIKE_THRESHOLD_PCT:
            spikes.append({
                "datetime": bars[i]["datetime"],
                "prev_close": prev_close,
                "close": curr_close,
                "pct_move": round(pct_move, 3),
            })
    return spikes


def build_context_series(symbol):
    """Fetch `symbol` and return a clean, time-sorted [(utc_time, close)] series."""
    series = []
    for bar in fetch_bars(symbol):
        when = parse_utc(bar.get("datetime"))
        try:
            close = float(bar["close"])
        except (KeyError, TypeError, ValueError):
            continue
        if when is None or close <= 0:
            continue
        series.append((when, close))
    series.sort(key=lambda pair: pair[0])
    return series


def fetch_context_series():
    """Build a series per context symbol, skipping any the API won't serve.

    A context symbol failing (plan restriction, rate limit, bad ticker) should
    degrade the report, not kill the run — gold is the point.
    """
    context = []
    for symbol, label, driver in CONTEXT_SYMBOLS:
        try:
            series = build_context_series(symbol)
        except (requests.RequestException, RuntimeError, ValueError) as exc:
            print(f"  Skipping {label} ({symbol}): {exc}")
            continue
        print(f"  Retrieved {len(series)} {label} ({symbol}) bars.")
        context.append({"symbol": symbol, "label": label, "driver": driver, "series": series})
    return context


def context_move_at(series, when):
    """The context instrument's close-to-close % move over the bar nearest `when`.

    Returns None when nothing is close enough — which is the normal case for a
    spike outside US market hours, since gold trades far longer than these do.
    """
    best_i, best_lag = None, None
    for i, (bar_time, _) in enumerate(series):
        lag = abs((bar_time - when).total_seconds()) / 60
        if best_lag is None or lag < best_lag:
            best_i, best_lag = i, lag
    if best_i is None or best_i == 0 or best_lag > CONTEXT_MATCH_MINUTES:
        return None
    prev_close = series[best_i - 1][1]
    curr_close = series[best_i][1]
    return {
        "pct_move": round((curr_close - prev_close) / prev_close * 100, 3),
        "time": series[best_i][0].strftime("%Y-%m-%d %H:%M:%S"),
        "lag_minutes": round(best_lag, 1),
    }


def read_context(gold_pct, ctx_pct, driver):
    """Plain-English reading of a context move against the gold move."""
    if abs(ctx_pct) < CONTEXT_FLAT_PCT:
        return "flat -> move looks gold-specific, not macro"
    if (gold_pct > 0) != (ctx_pct > 0):
        return f"inverse -> consistent with a {driver} move"
    return f"same direction -> unusual, not a simple {driver} move"


def attach_context(spikes, context):
    """Annotate each spike with how the correlated drivers moved at the same time."""
    for spike in spikes:
        spike_time = parse_utc(spike["datetime"])
        readings = []
        for ctx in context:
            move = context_move_at(ctx["series"], spike_time) if spike_time else None
            readings.append({
                "label": ctx["label"],
                "symbol": ctx["symbol"],
                "move": move,
                "reading": read_context(spike["pct_move"], move["pct_move"], ctx["driver"])
                if move else None,
            })
        spike["context"] = readings
    return spikes


def fetch_economic_calendar(from_date, to_date):
    """Pull macro calendar events from Finnhub for the given date range."""
    url = "https://finnhub.io/api/v1/calendar/economic"
    params = {
        "from": from_date,
        "to": to_date,
        "token": FINNHUB_KEY,
    }
    resp = requests.get(url, params=params, timeout=20)
    resp.raise_for_status()
    data = resp.json()
    events = data.get("economicCalendar") or []
    # Focus on US events, since those move gold most
    usd_events = [e for e in events if e.get("country") == "US"]
    return usd_events


def fetch_recent_news(query="gold"):
    """Pull recent general/market news mentioning gold from Finnhub."""
    url = "https://finnhub.io/api/v1/news"
    params = {"category": "general", "token": FINNHUB_KEY}
    resp = requests.get(url, params=params, timeout=20)
    resp.raise_for_status()
    articles = resp.json()
    needle = query.lower()
    filtered = [
        a for a in articles
        if needle in ((a.get("headline") or "") + " " + (a.get("summary") or "")).lower()
    ]
    return filtered[:20]


def correlate_spikes_with_events(spikes, events):
    """For each spike, find any economic calendar events within EVENT_WINDOW_MINUTES."""
    results = []
    for spike in spikes:
        spike_time = parse_utc(spike["datetime"])
        if spike_time is None:
            results.append({**spike, "nearby_events": []})
            continue
        nearby = []
        for e in events:
            event_time_str = e.get("time")
            event_time = parse_utc(event_time_str, "%Y-%m-%d %H:%M:%S")
            if event_time is None:
                continue
            delta_minutes = abs((spike_time - event_time).total_seconds()) / 60
            if delta_minutes <= EVENT_WINDOW_MINUTES:
                nearby.append({
                    "event": e.get("event"),
                    "time": event_time_str,
                    "actual": e.get("actual"),
                    "estimate": e.get("estimate"),
                    "previous": e.get("prev"),
                    "impact": e.get("impact"),
                })
        results.append({**spike, "nearby_events": nearby})
    return results


def print_report(correlated_spikes, news):
    print("\n" + "=" * 70)
    print("XAU/USD SIGNAL REPORT")
    print("=" * 70)

    if not correlated_spikes:
        print(f"\nNo spikes >= {SPIKE_THRESHOLD_PCT}% found in the pulled window.")
    for s in correlated_spikes:
        direction = "UP" if s["pct_move"] > 0 else "DOWN"
        print(f"\n[{s['datetime']}] {direction} {s['pct_move']}%  "
              f"({s['prev_close']} -> {s['close']})")
        if s["nearby_events"]:
            for e in s["nearby_events"]:
                print(f"    -> Likely driver: {e['event']} at {e['time']} "
                      f"(actual={e['actual']}, est={e['estimate']}, prev={e['previous']})")
        else:
            print("    -> No scheduled US macro event within window; check news/headlines below.")
        for c in s.get("context", []):
            if c["move"] is None:
                print(f"       {c['label']}: no bar within {CONTEXT_MATCH_MINUTES}min "
                      f"(market likely closed)")
            else:
                print(f"       {c['label']}: {c['move']['pct_move']:+}%  {c['reading']}")

    print("\n" + "-" * 70)
    print("RECENT GOLD-RELATED HEADLINES")
    print("-" * 70)
    if not news:
        print("No gold-related headlines returned in this pull.")
    for n in news:
        ts = datetime.fromtimestamp(n.get("datetime", 0), tz=timezone.utc).strftime("%Y-%m-%d %H:%M UTC")
        headline = n.get("headline") or n.get("summary") or "(no headline)"
        print(f"[{ts}] {headline}  ({n.get('source')})")


def main():
    require_keys()

    print("Fetching XAU/USD price bars...")
    bars = fetch_bars()
    print(f"  Retrieved {len(bars)} bars.")

    print("Scanning for spikes...")
    spikes = find_spikes(bars)
    print(f"  Found {len(spikes)} spikes >= {SPIKE_THRESHOLD_PCT}%.")

    context = []
    if spikes and CONTEXT_SYMBOLS:
        print("Fetching correlated drivers (dollar, yields)...")
        context = fetch_context_series()
        spikes = attach_context(spikes, context)

    if bars:
        oldest = parse_utc(bars[0]["datetime"]) or datetime.now(timezone.utc)
        newest = parse_utc(bars[-1]["datetime"]) or datetime.now(timezone.utc)
        from_date = (oldest - timedelta(days=1)).strftime("%Y-%m-%d")
        to_date = (newest + timedelta(days=1)).strftime("%Y-%m-%d")
    else:
        today = datetime.now(timezone.utc)
        from_date = (today - timedelta(days=1)).strftime("%Y-%m-%d")
        to_date = today.strftime("%Y-%m-%d")

    print("Fetching US economic calendar...")
    events = fetch_economic_calendar(from_date, to_date)
    print(f"  Retrieved {len(events)} US events.")

    print("Correlating spikes with events...")
    correlated = correlate_spikes_with_events(spikes, events)

    print("Fetching recent gold-related news...")
    news = fetch_recent_news()
    print(f"  Retrieved {len(news)} matching headlines.")

    print_report(correlated, news)


if __name__ == "__main__":
    main()
