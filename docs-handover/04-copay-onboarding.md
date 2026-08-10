# CoPay onboarding flow

Route: `/onboarding/remittance`
Copy: `remittanceOnboarding` in `copy/content.js`
Screenshots: `screenshots/onboarding/step-1` … `step-8`

A seven-step signup, modelled on Remitly's web flow, ending in a summary
screen. **No site header or footer** — it is a focused flow.

## Layout

Split screen from `lg` up:

- **Left (36%, max 448px)** — CoPay ink panel with radial gradients.
  Reversed CoPay wordmark and "powered by CoBanq" at top, a serif
  headline and supporting line vertically centred, "© CoBanq" at the
  bottom.
- **Right** — header bar (back link, "Step N of 7", close ✕) with a
  progress bar hugging its lower edge; the question area; and a sticky
  footer holding the primary button plus a
  "🔒 Regulated · Encrypted · Secure" line.

Below `lg` the brand panel is hidden and a compact CoPay wordmark appears
in the header instead.

Progress bar width = `currentStep / 7`, gradient fill, 500ms transition.

## Interaction rules

- Question steps require a selection before the footer button enables.
- Selecting an option does **not** auto-advance — the user presses
  Continue. (An earlier build auto-advanced; it was too fast to confirm
  what you'd picked.)
- Back is available from step 2 onward; on step 1 the close button exits
  to `/send-money`.
- Answers persist when moving back and forth.
- `?to=<country-code>` pre-selects the destination — this is how the
  CoPay send card deep-links in.

## The steps

**1 — Create your profile.** Segmented "Log in / Sign up" control (Log in
routes to the existing account system), first name, last name, email with
a mail icon, password with a show/hide toggle and an 8-character minimum,
then Terms/Privacy microcopy. Footer button submits the form.

**2 — Select your account type.** Two option cards: "Send as yourself"
and "Send as a business". Choosing business reveals a callout explaining
business payments run on CoBanq rather than CoPay, and the footer button
changes to route to the CoBanq business onboarding. CoPay is
personal-only — this branch must not continue into the flow.

**3 — Where do you want to send money?** The **From** field is locked to
United Kingdom with a padlock and the note "Sending is available from the
UK only" — CoPay only supports sending from the UK, so this must not be
editable. **To** is a select of supported corridors plus "Another
country", with three popular-country flag shortcuts (Pakistan, India,
Philippines) below.

**4 — How should your recipient get the money?** Bank deposit, cash
pickup, mobile wallet, or not sure yet.

**5 — What will you mostly send money for?** Family support, bills,
education, savings/property, gifts, or other. Framed as a regulatory
question that won't limit what they can do.

**6 — What's your main source of income?** Salary, self-employed,
savings/investments, pension/benefits, or other. Compliance question.

**7 — How much do you expect to send each month?** Under £250, £250–£1k,
£1k–£3k, over £3k.

**8 — Welcome summary** (not counted in the step total). Tick badge,
"Welcome to CoPay, <first name>!", a summary table of every answer
including "Sending from: United Kingdom", a "Start your first transfer"
button, and a link back to CoPay.

## Important

This flow **collects answers but does not create an account.** Nothing is
transmitted; the final button links out to the existing signup system.
Steps 5–7 are worded as compliance questions, so if you wire this to a
real onboarding backend, the answers need to actually reach the KYC
process rather than being discarded — otherwise the page is asking
questions under a false premise.

Password handling, identity verification and document upload are all
**out of scope** for this flow as built.
