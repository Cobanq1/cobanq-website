# White-label configuration — UI prototype

`white-label-dashboard.html` is a **visual specification**, not production code.
Open it in any browser (double-click the file — no server, no build, no
dependencies) to see exactly what we want built in the core banking system.

## What it shows

The existing CoBanq customer dashboard shell (sidebar, top bar, dashboard) with
one new sidebar entry — **White Label** — and the whole configuration section
behind it:

| Step | Screen | What it does |
|---|---|---|
| 1 | Domain settings | Tenant picks a subdomain + root domain, we generate the DNS record set (hosting CNAME + DKIM / SPF / MX for the branded support inbox) and verify it. Per-record status, copy buttons, reset domain. |
| 2 | Branding | Five theme colours with presets, contrast check, live preview of the tenant's own banking app. |
| 3 | Files | Web logo, document logo, statement background, favicon. Drag-and-drop, 5 MB cap, previews. |
| 4 | Custom menu links | Extra sidebar items for the tenant's customers — label, URL, icon, visible / new-tab toggles, ordering. |
| 5 | Customer pricing | Phase 2. Wholesale cost vs the price the tenant charges its own customers, with live margin. |

Tick **Dev notes** in the top bar to reveal implementation notes on each screen
(validation rules, what saves when, where the API is expected).

## Ground rules for the build

- Everything in this file is client-side and in-memory. There are no API calls;
  places that need one are marked `API:` in the script or in the dev notes.
- All figures, names and account details are dummy data.
- The dashboard page is the current product, reproduced only for context — it is
  not part of the change.
- The live preview on the right is the important interaction: branding changes
  must be reflected immediately, without a save round-trip.
