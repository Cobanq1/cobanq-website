# Interactive components

Behaviour that isn't obvious from a screenshot. Reference implementations
are in `reference-code/src/components/`.

## Header / navigation

Sticky white bar. Left: CoBanq wordmark + "Since 2003". Centre: nav
links. Right: "Log in" and a "Get started" pill.

**Solutions dropdown** — a 560px panel, two columns, seven items each
with a coloured icon chip, label and one-line description, plus a "See
all solutions" link to `/solutions`. Items: Personal Money Transfers,
Freelancers, Business Payments, Payroll, White-Label, Multi-Currency
Wallets, Correspondent Banking & Partnerships.

Open on **click, not hover.** This is deliberate: there's a gap between
the trigger and the panel, and hover-close made items unreachable.
Closes on outside click, on Escape, and on item click.

**Mobile** — the whole nav collapses to a hamburger below `lg`, with the
Solutions items shown as an indented list. Note the breakpoint is `lg`,
not `md`: at tablet widths the full nav overflows.

## Footer

Five columns — brand blurb + social, Solutions, Company, Help & Support,
Countries. Below: the full regulatory statement (company number, ICO
registration, FCA firm reference, "CoBanq is not a Bank") and a
copyright line reading `2003–<current year>`.

The regulatory statement is legal text — reproduce it exactly.

## Floating activity pills (home hero)

Small pills showing a flag, a name, and an amount, scattered around the
hero and cycling every few seconds. **Entirely decorative and invented** —
there is no live data behind them. Each carries a demo tag. If a live
feed is ever wired up, the invented list must be removed.

## Dashboard preview (home)

A fake product UI built in DOM — sidebar, balance cards, transaction
rows, account details. All figures, names, and account numbers are
invented. Carries a visible disclaimer. Not a screenshot; rebuild it as
markup so it stays sharp and themeable.

## Audience tabs (home)

Three tabs swapping headline, description, bullet list, stat and
portrait. Plain state switch, no animation beyond a fade.

## Customer stories (home) / Reviews (CoPay)

Auto-advancing carousel, ~5 second interval, with prev/next buttons and
clickable dots. Pauses on nothing currently — advancing is unconditional.
Each slide fades in.

**The names and quotes are invented.** Both carry a disclaimer. Keep it
until real, permissioned testimonials exist.

## Currency demo (home features)

One feature card is interactive: a small multi-currency wallet mock where
clicking a currency switches the displayed balance. Illustrative figures.

## Platforms marquee

Infinite horizontal scroll, CSS `@keyframes` translating -50% over a
duplicated track. Logos load from the Simple Icons CDN at runtime; one
platform has no icon and stays text-only. This is nominative use — the
caption must make clear these are places freelancers get paid *from*,
not partners.

## Calculator

Amount input + corridor select → fee, rate and recipient total.
Hardcoded indicative rates. Not connected to any FX API.

## Pricing tabs

Three audience tabs, each rendering a different pricing shape.
Fee groups are collapsible. Mobile switches to a stacked layout.

## Photography slots

Every place a person appears renders through one component that resolves
a seed name to an image file, falling back to a generated illustrated
portrait when no file exists.

**There is currently no photography.** Every face on the site today is an
illustrated avatar. See `07-outstanding.md`.

If you rebuild: keep a single indirection for people images so photos can
be swapped in later without touching layout. The seed names in use are
listed in `reference-code/src/assets/people/README.md`.

## Scroll behaviour

Route changes scroll to top. Links with a hash scroll to that element
smoothly, with `scroll-margin-top` on targets so the sticky header
doesn't overlap them.
