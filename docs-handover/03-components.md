# Interactive components

Behaviour that isn't obvious from a screenshot. Reference implementations
are in `reference-code/src/components/`.

## Header / navigation

Sticky white bar. Left: CoBanq wordmark + "Since 2003". Centre: nav
links. Right: "Log in" and a "Get started" pill.

**Solutions dropdown** — a 560px panel, two columns, seven items each
with a coloured icon chip, label and one-line description, plus a "See
all solutions" link. Items: Personal Money Transfers, Freelancers,
Business Payments, Payroll, White-Label, Multi-Currency Wallets,
Correspondent Banking & Partnerships.

Open on **click, not hover.** Deliberate: there's a gap between trigger
and panel, and hover-close made items unreachable. Closes on outside
click, Escape, and item click.

**Mobile** — collapses to a hamburger below `lg` (not `md`: at tablet
widths the full nav overflows).

## Footer

Five columns — brand blurb + social, Solutions, Company, Help & Support,
Countries. Below: the full regulatory statement (company number, ICO
registration, FCA firm reference, "CoBanq is not a Bank") and a copyright
line reading `2003–<current year>`.

The regulatory statement is legal text — reproduce it exactly.

## Floating activity pills (home hero)

Small pills with a flag, name and amount, scattered around the hero and
cycling every few seconds. **Entirely decorative and invented** — no live
data. Each carries a demo tag. If a live feed is ever wired up, the
invented list must be removed.

## Dashboard preview (home)

A fake product UI built in DOM — sidebar, balance cards, transaction
rows, account details. All figures, names and account numbers invented,
with a visible disclaimer. Not a screenshot; rebuild as markup so it
stays sharp.

## Audience tabs (home)

Three tabs swapping headline, description, bullets, stat and portrait.
Plain state switch with a fade.

## Customer stories (home) / Reviews (CoPay)

Auto-advancing carousel, ~5s interval, prev/next buttons and clickable
dots. Each slide fades in.

**Names and quotes are invented.** Both carry a disclaimer. Keep it until
real, permissioned testimonials exist.

## Currency demo (home features)

One feature card is interactive: a small multi-currency wallet mock where
clicking a currency switches the balance. Illustrative figures.

## Platforms marquee

Infinite horizontal scroll, CSS keyframes translating -50% over a
duplicated track. Logos load from the Simple Icons CDN at runtime; one
platform has no icon and stays text-only. Nominative use — the caption
must make clear these are places freelancers get paid *from*, not
partners.

## Calculator

Amount input + corridor select → fee, rate and recipient total.
Hardcoded indicative rates. Not connected to any FX API.

## Pricing tabs

Three audience tabs, each rendering a different pricing shape. Fee groups
collapse. Mobile switches to a stacked layout.

## White-label architecture diagram

Three columns on desktop — Your Brand card, the CoBanq circle with
arrows either side, and the Connected Capabilities list — collapsing to a
vertical stack on mobile where the column order carries the same flow.
Arrows are hidden on mobile rather than rotated.

## White-label coverage

Region cards list named markets as tag chips with a count. The 35
European markets sit behind a disclosure toggle (`aria-expanded`) because
the full list is long. Currency codes render as chips on a dark panel.

## Photography slots

Every place a person appears renders through one component that resolves
a seed name to an image file, falling back to a generated illustrated
portrait when no file exists.

**There is currently no photography.** Every face on the site today is an
illustrated avatar. See `07-outstanding.md`.

If you rebuild: keep a single indirection for people images so photos can
be swapped in later without touching layout. Seed names are listed in
`reference-code/src/assets/people/README.md`.

## Scroll behaviour

Route changes scroll to top. Hash links scroll smoothly, with
`scroll-margin-top` on targets so the sticky header doesn't overlap them.
