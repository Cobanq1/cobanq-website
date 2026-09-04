# XAU/USD Signal Tracker

Pulls recent 1-minute XAU/USD price bars, flags sharp spikes, and cross-references each
spike against a US economic calendar (CPI, NFP, FOMC, etc.) and recent gold-related news
headlines — so you can see what likely caused a move like the one you were looking at on
your TradingView chart.

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
5. Pulls recent general news and filters for anything mentioning gold, as a secondary signal
   for spikes with no matching calendar event.
6. Prints a plain-text report.

## Tuning it

- Lower `SPIKE_THRESHOLD_PCT` to catch smaller moves, raise it to focus only on the biggest ones.
- Widen `EVENT_WINDOW_MINUTES` if you want to catch events that had a delayed market reaction.
- Swap `INTERVAL` to `"5min"` or `"15min"` if you want fewer, larger bars.

## Ideas for extending this

- Save output to CSV/JSON instead of just printing, so you can build a running log of
  spike-to-event correlations over time.
- Add a Slack/Discord webhook to alert you the moment a live spike happens.
- Add DXY (dollar index) and US 10-year yield bars alongside gold, since both are leading
  correlated drivers of XAU/USD moves.
- Swap Finnhub's calendar for Trading Economics' if you want more detail per event
  (forecast revisions, surprise index, etc.) — it also has a free tier.

## Running this continuously

For a live tracker rather than a one-off report, wrap `main()` in a loop with a `time.sleep()`,
or set this up as a scheduled task (cron, or a GitHub Action) that runs every few minutes during
market hours and pushes alerts somewhere you'll see them.
