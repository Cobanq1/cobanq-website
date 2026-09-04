"""
XAU/USD Signal Tracker
-----------------------
Pulls recent XAUUSD price bars, flags sharp intraday spikes, and cross-references
those spikes against a macro economic calendar + recent news to help explain
*why* a move happened.

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


def fetch_price_bars():
    """Pull recent 1-minute XAU/USD bars from Twelve Data."""
    url = "https://api.twelvedata.com/time_series"
    params = {
        "symbol": SYMBOL,
        "interval": INTERVAL,
        "outputsize": OUTPUT_SIZE,
        "apikey": TWELVE_DATA_KEY,
        "timezone": "UTC",
    }
    resp = requests.get(url, params=params, timeout=20)
    resp.raise_for_status()
    data = resp.json()

    if data.get("status") == "error":
        raise RuntimeError(f"Twelve Data error: {data.get('message')}")

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
    bars = fetch_price_bars()
    print(f"  Retrieved {len(bars)} bars.")

    print("Scanning for spikes...")
    spikes = find_spikes(bars)
    print(f"  Found {len(spikes)} spikes >= {SPIKE_THRESHOLD_PCT}%.")

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
