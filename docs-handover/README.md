# CoBanq website — developer handover pack

Everything needed to build the CoBanq marketing site, including the CoPay
remittance sub-brand and its signup flow.

A complete working reference implementation is included (React + Vite +
Tailwind). You are free to rebuild in any stack — the reference is there
so behaviour and styling are never ambiguous. When a spec here and the
reference code disagree, **the reference code is correct**.

## What's in the pack

```
README.md                  You are here — read this first
01-design-system.md        Colours, type, spacing, component styles
02-pages.md                Every page, section by section
03-components.md           Interactive behaviour (nav, sliders, forms)
04-copay-onboarding.md     The 7-step CoPay signup flow, screen by screen
05-forms-and-email.md      How the enquiry forms work and what they need
06-hosting.md              Deployment requirements (host-agnostic)
07-outstanding.md          What is NOT finished — read before quoting
copy/content.js            ALL site copy in one file, as structured data
copy/content.json          The same copy as plain JSON
reference-code/            Full working implementation
assets/                    Logo files (SVG)
screenshots/
  desktop/                 Full-page captures at 1440px
  mobile/                  Full-page captures at 390px
  onboarding/              All 8 screens of the CoPay signup flow
```

## The fastest way to understand the site

1. Open `screenshots/desktop/home.png`, then `solutions.png`,
   `white-label.png`, then `copay-send-money.png`. That is the shape of
   the whole thing.
2. Skim `07-outstanding.md` so you know what is placeholder before you
   quote or start.
3. Run the reference build (below) and click around — faster than reading
   any spec.

## Running the reference implementation

Requires Node 20+.

```bash
cd reference-code
npm install
npm run dev      # http://localhost:5173
npm run build    # static output in dist/
npm run lint
```

The build output is a plain static site: HTML, CSS, JS, and images. No
server-side code, no database, no API. Nothing needs a backend except the
enquiry forms — see `05-forms-and-email.md`.

## Two brands, one site

- **CoBanq** — the parent. Navy and blue, geometric sans headings.
  Business payments, wallets, payroll, freelancers, white-label,
  partnerships.
- **CoPay** — the consumer remittance product, "powered by CoBanq".
  Lives at `/send-money` and `/onboarding/remittance`. Its own palette
  (near-black navy), its own serif treatment, its own logo. It should
  feel like a sibling brand, not a section.

Do not merge the two visual systems. `01-design-system.md` keeps them
separate on purpose.

## Content

`copy/content.js` holds every string on the site — headings, body copy,
FAQs, legal text, nav labels, corridor lists, pricing tables. It is a
plain JavaScript module of nested objects; `copy/content.json` is the
same data as JSON for CMS import.

If you are building on a CMS, this file is your content model. Everything
in it is intended to be editable by a non-developer after launch.

## Source documents

The white-label page is built directly from the official **CoBanq
White-Label Brochure**. That brochure is the source of truth for its
claims, its numbers, and — importantly — its carefully hedged regulatory
phrasing. See the compliance note in `02-pages.md`.
