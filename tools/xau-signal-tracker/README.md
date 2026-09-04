# XAU/USD Signal Tracker

Pulls recent 1-minute XAU/USD price bars, flags sharp spikes, and cross-references each
spike against a US economic calendar (CPI, NFP, FOMC, etc.), the dollar index, the US
10-year yield, and recent gold-related news headlines — so you can see what likely caused
a move like the one you were looking at on your TradingView chart.

## Setup

```bash
cd tools/xau-signal-tracker
pip install -r requirements.txt
cp .env.example .env
# edit .env and paste in your free API keys
python xau_signal_tracker.py
```

### Free API keys needed

- **Twelve Data** (price bars): https://twelvedata.com — free tier gives ~800 requests/day
  and intraday (1min) bars for forex/metals.
- **Finnhub** (economic calendar + news): https://finnhub.io — free tier gives 60 calls/min
  and includes the US economic calendar and general market news.

Both have free tiers as of writing, but check current limits/terms on their sites — free-tier
allowances change.

## What it does

1. Fetches the last 500 one-minute XAU/USD bars.
2. Flags any bar where price moved >= 0.15% from the previous close (tune `SPIKE_THRESHOLD_PCT`
   in the script).
3. Pulls the US economic calendar for the same date range.
4. For each spike, checks whether a scheduled US macro event (CPI, NFP, Fed decision, etc.)
   landed within 15 minutes of it (`EVENT_WINDOW_MINUTES`).
5. For each spike, pulls the dollar index and US 10-year yield over the same minute and
   reports how they moved (`CONTEXT_SYMBOLS`).
6. Pulls recent general news and filters for anything mentioning gold, as a secondary signal
   for spikes with no matching calendar event.
7. Prints a plain-text report.

## Reading the dollar/yields line

Both the dollar and the 10-year yield are normally **inversely** correlated with gold, so
their reaction is what separates a macro move from a gold-specific one:

```
[2026-09-04 12:30:00] UP 0.314%  (3501.0 -> 3512.0)
    -> Likely driver: CPI m/m at 2026-09-04 12:30:00 (actual=0.4, est=0.2, prev=0.3)
       Dollar index: -0.101%  inverse -> consistent with a dollar-driven move
       US 10Y yield: +0.714%  same direction -> unusual, not a simple rates-driven move
```

- **inverse** — gold moved with the macro backdrop; the dollar/rates reaction explains it.
- **flat** (move under `CONTEXT_FLAT_PCT`) — gold moved on its own; look to the headlines.
- **same direction** — worth a closer look; gold and the dollar rising together usually
  means something other than a rate expectation is driving it.

Two limits worth knowing:

- **These instruments keep US market hours; gold doesn't.** Spikes outside roughly
  14:30–21:00 UTC will show `no bar within 3min (market likely closed)`. That's expected,
  not a failure — it just means this particular cross-check is unavailable overnight.
- **Twelve Data plans differ on index symbols.** If `DXY` or `TNX` aren't served on your
  plan, the script prints a skip line and carries on with gold. Swap in tradeable proxies
  in `CONTEXT_SYMBOLS` — `UUP` for the dollar, `IEF` or `TLT` for the long end (note these
  are bond *prices*, which move inversely to yields, so the reading flips).

Each context symbol costs one extra Twelve Data request per run, and they're only fetched
when at least one spike was found. Set `CONTEXT_SYMBOLS = []` to turn the whole thing off.

## Tuning it

- Lower `SPIKE_THRESHOLD_PCT` to catch smaller moves, raise it to focus only on the biggest ones.
- Widen `EVENT_WINDOW_MINUTES` if you want to catch events that had a delayed market reaction.
  Note that widening it also means one release gets attributed to more spikes — including
  the retrace a few minutes later. Proximity is not causation here.
- Swap `INTERVAL` to `"5min"` or `"15min"` if you want fewer, larger bars.

## Ideas for extending this

- Save output to CSV/JSON instead of just printing, so you can build a running log of
  spike-to-event correlations over time.
- Add a Slack/Discord webhook to alert you the moment a live spike happens.
- Swap Finnhub's calendar for Trading Economics' if you want more detail per event
  (forecast revisions, surprise index, etc.) — it also has a free tier.

## Running this continuously

For a live tracker rather than a one-off report, wrap `main()` in a loop with a `time.sleep()`,
or set this up as a scheduled task (cron, or a GitHub Action) that runs every few minutes during
market hours and pushes alerts somewhere you'll see them.
