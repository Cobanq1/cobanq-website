# Forms and email

Three enquiry forms. All share one component in the reference
(`reference-code/src/components/EnquiryForm.jsx`).

| Form | Page | Form name | Fields |
|---|---|---|---|
| Business enquiry | `/business-enquiry` | `business-enquiry` | name, company, email, phone, interest, corridors, volume, message |
| White-label enquiry | `/white-label` | `white-label-enquiry` | name, company, email, website, volume, message |
| General contact | `/contact` | `contact` | name, email, message |

Each has a hidden `bot-field` honeypot.

## How they currently submit

The site is fully static, so there is no server. The reference posts
url-encoded form data to `/` with a `form-name` field — the **Netlify
Forms** convention. Netlify captures the submission and can email it on.

Because Netlify detects forms by scanning deployed HTML, and never sees a
form React renders at runtime, `index.html` carries hidden static copies
of all three forms purely for detection. If you keep this approach, those
hidden forms must stay in sync with the real ones.

**If you deploy on Netlify:** set the destination address under
Site configuration → Forms → Notifications. Until that is set,
submissions are captured in the dashboard but nobody is emailed.

**If you deploy anywhere else:** Netlify Forms won't exist and the POST
will fail. Replace it with whatever suits your stack — a serverless
function sending via SES/Postmark/SendGrid, a form service, or your own
endpoint. The component already handles failure: it shows an error and
offers a `mailto:` fallback to support@cobanq.com, so a misconfiguration
degrades rather than silently swallowing enquiries.

Only the submission call needs replacing — markup, validation and success
states are host-agnostic.

## Behaviour to preserve

- Submit disables the button and shows a sending state.
- Success replaces the form with a confirmation panel; no navigation.
- Failure shows an inline error **and** the direct email address. Never
  fail silently — these are sales enquiries.
- Required fields enforced natively; optional fields labelled
  "(optional)" in the label text.

## Where enquiries should go

Not yet decided — confirm with the client. Candidates: a shared
partnerships inbox, or `support@cobanq.com`. Business and white-label
enquiries plausibly want a different destination from general support.

The white-label page also publishes the phone number **020 8175 2519**
(from the brochure) as a call CTA in the hero and closing section.

## Other outbound links

- **"Get started" / "Log in"** across the site point at
  `site.onboardingUrl` in `copy/content.js`, currently the old preview
  domain. **Must be repointed** before launch — see `07-outstanding.md`.
- The standalone CoPay onboarding build links back to the main site via
  one constant, for the same reason.
