# Pages

24 routes. Every one has a full-page screenshot at
`screenshots/desktop/<name>.png` and `screenshots/mobile/<name>.png`.
Copy for each lives in `copy/content.js` under the named export in
brackets.

All pages share the same header and footer (see `03-components.md`)
**except** `/onboarding/remittance`, which is a standalone focused flow
with no site chrome.

---

## `/` — Home  *(home)*

Content: `hero`, `trustBar`, `platformsMarquee`, `liveActivity`, `stats`,
`dashboardPreview`, `audienceTabs`, `features`, `howItWorks`,
`customerStories`, `ctaBanner`

1. **Hero** — dark. Headline, subhead, two CTAs, avatar stack. Right: a
   mocked account dashboard card. Floating "live activity" pills scatter
   around the hero showing invented transfers (decorative — see
   `03-components.md`).
2. **Trust bar** — FCA regulated, Established 2003, 30+ payout corridors,
   UK-based Canary Wharf.
3. **Platforms marquee** — scrolling row of platforms freelancers get
   paid from. Nominative use, not partnerships. Keep the caption.
4. **Dashboard preview** — mocked product UI built in DOM, not an image.
   Carries a visible "demo dashboard" disclaimer.
5. **Audience tabs** — individuals / business / partners.
6. **Features** — alternating rows; one card is an interactive currency
   demo.
7. **How it works** — three numbered steps.
8. **Customer stories** — auto-advancing slideshow. **Illustrative, not
   real customers** — the disclaimer must stay.
9. **CTA banner** — dark closing call to action.

## `/solutions` — All solutions  *(solutions)*

Content: `solutions`

Dark hero with four company stats → a "not sure which you need?" chooser
grid where each quoted phrase jumps to a section (or routes to
`/white-label`) → six alternating full-width spreads, one per solution,
each with portrait, icon, audience label, title, tagline, description,
feature list, tag row and CTA → shared "what every solution runs on"
section → closing CTA.

## `/send-money` — CoPay  *(copay-send-money)*  **CoPay branding**

Content: `sendMoney`, `countryCorridors`, `howItWorks`

1. **Hero** — CoPay ink background. Reversed CoPay wordmark, serif
   headline "Send money home.", italic accent line, trust chips. Right:
   the send card (from-country locked to United Kingdom). Below:
   corridor flag strip.
2. **Journey band** — three growing dots on a dashed line: You send → On
   its way → Delivered home.
3. **Why families choose CoPay** — four benefit cards.
4. **How it works** — three steps, serif numerals.
5. **Reviews** — dark auto-advancing carousel. **Illustrative** —
   disclaimer must stay.
6. **Corridors grid** + accepted payment methods.
7. **Closing CTA** — ink panel, reversed wordmark.

The send card's country select is real: choosing a country and pressing
the CTA opens `/onboarding/remittance?to=<code>` pre-selected.

## `/white-label`  *(white-label)*

Content: `whiteLabel`

**Built directly from the official CoBanq White-Label Brochure.** The
brochure is the source of truth for this page's claims and numbers.

1. **Hero** — "Your Brand. / Global Financial Infrastructure." with the
   capability strip (Banking | FX | Payments | P2P Remittances), a phone
   CTA, and four stats: 2003, 80+ destination countries, 43 payout
   currencies, 3 payout methods.
2. **At a glance** — 23+ years, API-led, white-label, connected.
3. **White-label architecture** — the brochure's signature diagram:
   Your Brand → CoBanq → Connected Capabilities (banking networks, FX,
   payment rails, global payout), a three-column summary strip, then the
   **safeguarding bar (ClearBank / FSCS)**.
4. **Three capability pillars**, alternating light/dark:
   - GBP banking & payments — Receive / Convert / Pay / B2B
   - FX & multi-currency — Balance / FX / Payment
   - P2P remittances — Quote / Select / Send / Track, plus the three
     payout methods (bank transfer, mobile wallet, cash pickup)
5. **Network coverage** — named markets by region, a collapsible list of
   the 35 European markets, and all 43 payout currency codes.
6. **Customer journey** — Receive → Convert → Pay → Remit → Deliver.
7. **Use cases** — eight cards.
8. **Why CoBanq** — six cards.
9. **Closing + pricing + enquiry form** — no price list (quoted per
   programme), the phone number, and the white-label enquiry form.
10. **FAQ** — six questions, closing with the FSCS note.

### Compliance notes for this page

The brochure's hedged phrasing — "supported", "eligible", "approved",
"subject to applicable scheme limits" — is deliberate regulated-marketing
language. **Do not tighten it into absolute claims.** "Send eligible
local GBP payments through the UK Faster Payments network" must not
become "send GBP payments instantly".

The **safeguarding and FSCS wording is compliance copy** and appears in
three places (architecture bar, FAQ, end of page). Reproduce verbatim.

There is deliberately **no pricing table**.

## `/business`  *(business)*

Content: `business`

Hero, three offer cards with portraits, a partnerships panel, and a
closing CTA routing to `/business-enquiry` (**not** to signup).

## `/business-enquiry`  *(business-enquiry)*

Content: `businessEnquiry`

Two columns: left has what CoBanq helps with, a response-time line, and
email/office details; right has the business enquiry form. See
`05-forms-and-email.md`.

## `/freelancers`, `/payroll`, `/wallets`

Content: `freelancers`, `payroll`, `wallets`

Same shape each: hero, benefit grid, supporting section, CTA. The wallets
page notes that wallets are a business product and routes individuals to
CoPay.

## `/pricing`  *(pricing)*

Content: `pricing`

Three audience tabs — Freelancers & IT, Business Enterprise, Payroll
Companies. Two different layouts, selected by the category's `layout`
field:

- **Card layout** (freelancers) — one card per plan with collapsible fee
  sections.
- **Comparison layout** (`layout: "comparison"`, Business Enterprise and
  Payroll Companies) — three plan cards over a single grouped comparison
  table, competitor-style. On mobile the three columns won't fit, so a
  Bronze/Gold/Platinum selector switches which column the table shows.

Both comparison tabs come from official schedules and are
**authoritative**:

- **Business Enterprise** — *CoBanq Standard Pricing for Corporates*
  (GBP Banking & FX Pricing Schedule). Monthly account fee headline;
  groups are Account & FX, Faster Payments, CHAPS & Bacs, International;
  Bacs footnote plus five pricing notes. Platinum FX is deliberately
  "TBA".
- **Payroll Companies** — *CoBanq Payroll Pricing*. Per-employee-payout
  headline; groups are Faster Payments, CHAPS & Bacs, International; one
  pricing note. **This schedule publishes no monthly account fee**, so
  the page must not imply one exists or that there isn't one.

Neither should change except from a new schedule.

Freelancer rates are **not** confirmed — see `07-outstanding.md`.

## `/calculator`  *(calculator)*

Interactive transfer estimate. Rates are **indicative and hardcoded**;
not connected to a live FX feed.

## `/about`, `/faq`, `/contact`, `/security`, `/careers`, `/press`

Content: matching exports. Standard company pages.

## `/complaints`, `/accessibility`

Regulatory and statutory content — do not reword without compliance
sign-off.

## `/terms`, `/privacy`, `/cookies`

Content: `legal` — one component rendering three documents by key.
**Legal copy. Reproduce verbatim.**

## `/pk` — Pakistan corridor  *(country-pakistan)*

Content: `countryPages.pk`

A country landing-page template designed to be duplicated per corridor —
adding a country should mean a content entry and a route, not a new page.

## `/onboarding/remittance`

See `04-copay-onboarding.md`.
