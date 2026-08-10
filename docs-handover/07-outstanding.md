# Outstanding — read before quoting or launching

The site is complete as a design and build, but several things are
deliberately placeholder. Some of them are launch blockers, and a few
carry regulatory or legal risk if shipped as-is.

## Blockers — must be resolved before the site goes live

### 1. Invented testimonials

The home-page customer stories and the CoPay reviews are **invented** —
names, quotes and details were written for the design. Both carry a
visible disclaimer saying so.

Either replace them with real, permissioned testimonials, or remove the
sections. Do not quietly delete the disclaimer and keep the fake quotes —
for an FCA-regulated firm that is a straightforward compliance problem.

### 2. Placeholder figures in the dashboard mock

The home-page dashboard preview shows invented balances, transaction
IDs, an invented company name and account details. It carries a
disclaimer. Keep the disclaimer, or replace the mock with a redacted
screenshot of the real product.

### 3. Live activity pills

The floating pills on the home hero showing "Amina Y. +₦210,000" etc. are
invented and cycle on a timer. They are decorative demo content, tagged
as such. If they stay, the tag stays.

### 4. Signup and login links point at a preview domain

Every "Get started" and "Log in" button routes to `site.onboardingUrl` in
`copy/content.js`, currently a Netlify preview URL. Repoint to the real
account system.

### 5. Forms don't reach anyone yet

See `05-forms-and-email.md`. A destination address has not been decided,
and no notification is configured. Three enquiry forms currently capture
nothing you'd receive.

### 6. Pricing needs confirming

The `/pricing` page carries specific fee percentages and fixed charges
across three audience categories. These came from a supplied reference
and **have not been verified against current commercial terms.** Someone
who owns pricing must sign these off line by line.

## Content gaps

### 7. No photography

Every person on the site is a generated illustrated avatar. The intended
design uses real photography throughout.

The reference has this wired for drop-in: one component resolves a name
to an image file, so adding photos is a matter of putting correctly named
files in one folder — no layout changes.
`reference-code/src/assets/people/README.md` lists all 20 filenames,
what each shot should show, and the crop each slot uses.

If the photos are stock or AI-generated rather than real customers and
staff, don't attach them to the named testimonials — a photorealistic
face beside an invented quote reads as a real endorsement regardless of
any disclaimer.

### 8. No per-page SEO

Every route shares one `<title>` and meta description. Each page needs
its own, plus Open Graph images. Straightforward, but currently absent.

### 9. Empty careers and press pages

Both exist and are styled but list no roles or releases.

### 10. One country page

`/pk` is built as a repeatable template. Other corridors — India,
Nigeria, Philippines, Bangladesh, UAE — are referenced throughout the
site but have no landing pages yet. Adding one should be a content entry
plus a route.

## Things that are correct and should not be "fixed"

- **"FCA regulated" is never dated.** CoBanq was founded in 2003 but
  authorised later, so the two facts are kept apart deliberately. Don't
  merge them back into "FCA regulated since 2003".
- **"CoBanq is not a Bank"** appears in the footer regulatory statement.
  Required — leave it.
- **CoPay only sends from the United Kingdom.** The onboarding locks the
  from-country and says so. Not a bug.
- **Multi-currency wallets are business-only.** Individuals are routed to
  CoPay throughout. Intentional.
- **The white-label page has no price list.** Deliberate — programmes are
  quoted individually and the page ends in an enquiry form instead.
- **Platform names in the marquee are text/nominative use**, not
  partnerships. The caption wording matters.

## Known trade-offs in the reference build

- No test suite. Verification was done by driving the site in a real
  browser.
- No CMS. All copy lives in one JavaScript file, structured for easy
  migration to a CMS if the client wants to self-edit.
- No analytics or cookie banner. Adding analytics means updating
  `/cookies` and adding consent.
- Single JS bundle, no route-level code splitting.
