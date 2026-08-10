# Hosting requirements

Host-agnostic. The site is static — pick whatever suits you.

## What the site needs

1. **Static file hosting.** The build output is HTML, CSS, JS and images.
   No server runtime, no database.
2. **A catch-all rewrite to `index.html` with status 200.** The site is a
   single-page app with client-side routing. Without this, loading
   `/pricing` directly — or refreshing on it — returns 404. This is the
   single most common deployment mistake with this kind of site.
   - Netlify: `_redirects` containing `/* /index.html 200`, or the
     `netlify.toml` already in the reference.
   - Vercel: a rewrite of `/(.*)` to `/index.html`.
   - Nginx: `try_files $uri $uri/ /index.html;`
   - Apache: `mod_rewrite` fallback to `index.html`.
   (Not needed if you rebuild with server-rendered routes.)
3. **A form endpoint** — see `05-forms-and-email.md`.
4. **HTTPS**, and a redirect from the non-canonical host (www vs apex).

## Outbound requests the site makes

- **Google Fonts** — `fonts.googleapis.com`, `fonts.gstatic.com`.
- **Simple Icons CDN** — platform logos in the home-page marquee.

Both can be self-hosted instead, and probably should be: it removes the
third-party dependency, is faster, and avoids the GDPR question around
Google Fonts serving from a US endpoint. If you self-host the fonts,
keep the exact families and weights in `01-design-system.md`.

Nothing else leaves the browser. No analytics or tracking is installed —
if any is added, the cookie policy at `/cookies` needs updating to match,
and a consent banner will be required.

## Build (reference implementation)

```bash
npm install
npm run build     # → dist/
```

Node 20+. The reference builds two entry points: the main site
(`index.html`) and a standalone copy of the CoPay onboarding
(`onboarding.html`) that can be deployed separately if the flow ever
needs its own domain.

## Performance notes

- The JS bundle is ~600KB uncompressed / ~150KB gzipped. Fine, but if you
  rebuild with route-level code splitting it will improve.
- All imagery is currently SVG or DOM-drawn, so there is very little to
  optimise — that changes once photography is added. Serve those as
  WebP/AVIF with width variants.
- Fonts are the largest third-party cost; self-hosting with `font-display:
  swap` and subsetting to Latin is worth doing.

## Pre-launch checklist

- [ ] SPA catch-all redirect configured and tested by hard-refreshing a
      deep route
- [ ] Form endpoint wired and a test submission received by email
- [ ] `site.onboardingUrl` repointed away from the preview domain
- [ ] Custom domain + HTTPS + www/apex redirect
- [ ] Favicons in place (both CoBanq and CoPay variants supplied)
- [ ] Page titles and meta descriptions per route (currently one shared
      title — see `07-outstanding.md`)
- [ ] `sitemap.xml` and `robots.txt`
- [ ] Open Graph / Twitter card images
- [ ] Legal pages reviewed by compliance
- [ ] Placeholder content replaced (see `07-outstanding.md`)
