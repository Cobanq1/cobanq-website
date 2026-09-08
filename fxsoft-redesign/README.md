# FX Soft — website redesign (developer handover)

A redesign of **thefxsoft.com** as a single self-contained HTML file.

## What this is

`index.html` — the whole site in one file. No build step, no npm install,
no framework. Open it in a browser and it works.

The only external request is the Google Fonts stylesheet in `<head>`.
Everything else — layout, icons, illustrations, animation — is inline CSS,
inline SVG and ~150 lines of vanilla JavaScript.

## Structure

The five pages of the current site are folded into one scrolling page with
anchor navigation:

| Current site      | Here                          |
|-------------------|-------------------------------|
| `index.html`      | Hero + pillars                |
| `services.html`   | `#platform` and `#capabilities` |
| `about_us.html`   | `#about`                      |
| `pricing.html`    | `#pricing`                    |
| `contact_us.html` | `#contact`                    |

If the business prefers separate pages, split at the `<section>` boundaries —
each one is self-contained and the nav hrefs become page URLs.

## What the developer needs to do

Search the file for `TODO:` — there are six:

1. **Logo** — swap the inline SVG wordmark (used twice: header and footer)
   for the real asset at `/assets/img/logo_with_slogan.svg`.
2. **Imagery** — the product screenshots are CSS/HTML mockups. Replace with
   real screenshots of the platform if any exist.
3. **Contact form** — currently intercepted by JS and shows a success state
   only. Point it at a real endpoint (Formspree, Netlify Forms, or your API)
   and delete the interceptor in section 7 of the script.
4. **Client login** — the header CTA and footer link go to `#contact`.
   Point them at `/fxsoft/`.
5. **Legal pages** — privacy, terms and cookies are `href="#"`.
6. **Contact details** — office addresses and phone numbers were taken from
   the current site. Confirm them, and add an email address (the current
   site does not publish one).

## Content notes

Copy comes from the existing site, edited for grammar. The originals had
typos that should not be carried forward — "award wining", "man more",
"unique bled of services", "E-PAYMENTS HANDELING", and a literal
"(paragraph)" left in the 24/7 support section.

No numbers were invented. The stats row uses only facts the current site
states: founded 2014, London, 24/7 support, three channels. If you want
"500+ clients" or "£Xbn processed", someone has to supply real figures.

Pricing shows no prices, matching the current site's position that pricing
is quoted on request. The three segments (Start-up / Growth / Enterprise)
come from the site's own line about serving "start-ups, large enterprises
or enterprises that are already established" — **the business should confirm
what belongs in each tier before launch.**

## Technical notes

- **Responsive** at 1440 / 1080 / 920 / 620px breakpoints. Verified with no
  horizontal overflow at 1440px and 390px.
- **Accessibility** — semantic landmarks, skip link, labelled form fields,
  `aria-expanded` on the mobile menu, visible focus rings, decorative SVG
  marked `aria-hidden`.
- **Motion** — scroll reveals, counting stats, marquee, hero parallax and
  the floating chips all use `IntersectionObserver` / CSS. Everything is
  disabled under `prefers-reduced-motion: reduce`.
- **No-JS** — the page is fully readable with JavaScript off; only the
  mobile menu and form need it.
- **Print stylesheet** included.

Design tokens live in one `:root` block at the top of the `<style>` —
change brand colours there and they propagate.
