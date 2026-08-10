# Pages

23 routes. Every one has a full-page screenshot at
`screenshots/desktop/<name>.png` and `screenshots/mobile/<name>.png`.
Copy for each lives in `copy/content.js` under the named export in
brackets.

All pages share the same header and footer (see `03-components.md`)
**except** `/onboarding/remittance`, which is a standalone focused flow
with no site chrome.

---

## `/` — Home  *(screenshot: home)*

Content: `hero`, `trustBar`, `platformsMarquee`, `liveActivity`, `stats`,
`dashboardPreview`, `audienceTabs`, `features`, `howItWorks`,
`customerStories`, `ctaBanner`

1. **Hero** — dark. Headline, subhead, two CTAs, avatar stack with
   "joined by thousands" caption. Right side: a mocked account dashboard
   card. Floating "live activity" pills scatter around the hero showing
   invented transfers (see `03-components.md` — they are decorative).
2. **Trust bar** — four badges: FCA regulated, Established 2003, 30+
   payout corridors, UK-based Canary Wharf.
3. **Platforms marquee** — horizontally scrolling row of platform names
   freelancers get paid from. Text and logos are nominative use only,
   not partnerships. Keep the caption.
4. **Dashboard preview** — large mocked product screenshot built in DOM,
   not an image. Carries a visible "demo dashboard" disclaimer.
5. **Audience tabs** — three tabs (individuals / business / partners),
   each swapping headline, copy, bullet list and portrait.
6. **Features** — alternating feature rows; one card is an interactive
   currency demo.
7. **How it works** — three numbered steps.
8. **Customer stories** — auto-advancing slideshow. **Illustrative, not
   real customers** — the disclaimer must stay.
9. **CTA banner** — dark, closing call to action.

## `/solutions` — All solutions  *(solutions)*

Content: `solutions`

Dark hero with four company stats → a "not sure which you need?" chooser
grid where each quoted phrase jumps to a section (or routes to
`/white-label`) → six alternating full-width spreads, one per solution
(CoPay, freelancers, business payments, payroll, white-label, wallets,
partnerships) each with portrait, icon, audience label, title, tagline,
description, feature list, tag row, CTA → shared "what every solution
runs on" section → closing CTA.

Spreads alternate portrait side and background tint by index.

## `/send-money` — CoPay  *(copay-send-money)*  **CoPay branding**

Content: `sendMoney`, `countryCorridors`, `howItWorks`

1. **Hero** — CoPay ink background. Reversed CoPay wordmark, "powered by
   CoBanq", serif headline "Send money home.", italic accent line,
   subhead, three trust chips. Right: the send card (from-country locked
   to United Kingdom, to-country select, CTA). Below: corridor flag strip.
2. **Journey band** — three dots of increasing size on a dashed line:
   You send → On its way → Delivered home.
3. **Why families choose CoPay** — four benefit cards.
4. **How it works** — three steps, serif numerals.
5. **Reviews** — dark, auto-advancing carousel. **Illustrative** —
   disclaimer must stay.
6. **Corridors grid** + accepted payment methods.
7. **Closing CTA** — ink panel, reversed wordmark, two buttons.

The send card's country select is real: choosing a country and pressing
the CTA opens `/onboarding/remittance?to=<code>` with that country
pre-selected.

## `/white-label`  *(white-label)*

Content: `whiteLabel`

Dark hero with three stats → "what your programme includes" (six cards)
→ "how a programme comes together" (four numbered steps) → "who runs a
white-label programme" (four cards) → **pricing section with no price
list**, explaining programmes are quoted individually, paired with an
enquiry form → FAQ accordion (five questions).

There is deliberately no pricing table here. Do not add one.

## `/business`  *(business)*

Content: `business`

Hero, three offer cards with portraits, a partnerships panel, and a
closing CTA whose button routes to `/business-enquiry` (**not** to
signup).

## `/business-enquiry`  *(business-enquiry)*

Content: `businessEnquiry`

Two columns: left has what CoBanq helps with, a response-time line, and
email/office details; right has the business enquiry form. See
`05-forms-and-email.md`.

## `/freelancers`, `/payroll`, `/wallets`  *(freelancers, payroll, wallets)*

Content: `freelancers`, `payroll`, `wallets`

Same shape each: hero, benefit/feature grid, supporting section, CTA.
The wallets page carries a note that wallets are a business product and
routes individuals to CoPay.

## `/pricing`  *(pricing)*

Content: `pricing`

Three audience categories as tabs — Freelancers & IT, Business
Enterprise, Payroll Companies. Freelancers see a single free plan;
the other two show package tiers. Fee tables are grouped into
collapsible sections (receive / send / convert / withdraw). Large price
figures use Manrope. On mobile the comparison becomes a stacked ruler
layout.

**All rates must be confirmed before launch** — see `07-outstanding.md`.

## `/calculator`  *(calculator)*

Content: `calculator`

Interactive transfer estimate — amount in, corridor select, fee and
recipient amount out. Rates are **indicative and hardcoded**; it is not
connected to a live FX feed.

## `/about`  *(about)*

Content: `about` — company story, values, compliance/legal team row,
registered office.

## `/faq`  *(faq)*

Content: `faq` — accordion, grouped by topic.

## `/contact`  *(contact)*

Content: `contact` — three routing cards (support / business /
compliance), contact form, email and registered address.

## `/security`  *(security)*

Content: `security` — regulatory status, safeguarding, data protection.

## `/careers`, `/press`  *(careers, press)*

Content: `careers`, `press` — short pages, no open roles or releases
listed yet.

## `/complaints`  *(complaints)*

Content: `complaints` — formal complaints procedure. Regulatory content;
do not reword without compliance sign-off.

## `/accessibility`  *(accessibility)*

Content: `accessibility` — accessibility statement.

## `/terms`, `/privacy`, `/cookies`  *(legal-terms, legal-privacy, legal-cookies)*

Content: `legal` — one component rendering three documents by key.

**Legal and regulatory copy. Reproduce verbatim.**

## `/pk` — Pakistan corridor  *(country-pakistan)*

Content: `countryPages.pk`

A country landing-page template. The structure is designed to be
duplicated per corridor — adding a country should mean adding a content
entry and a route, not building a new page.

## `/onboarding/remittance`

See `04-copay-onboarding.md`.
