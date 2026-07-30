# Photography slots

Drop real photos of people in this folder and point the site at them — no
component changes needed.

Every place the site shows a person renders through
`src/components/PersonPhoto.jsx`. It uses a real image when it has one and
falls back to the site's illustrated portrait when it doesn't, so pages
look finished either way.

## Adding a photo

1. Save the file here, e.g. `public/people/copay-sender.jpg`.
2. Set the matching `photo` field in `src/content.js` to `/people/copay-sender.jpg`.

The `photo` fields currently live on `solutions.items[]`. They're empty
strings, which is what triggers the illustrated fallback.

## Recommended

- Landscape, ~4:3, at least 1200px wide — the cards crop to `object-cover`.
- Keep files under ~300KB; they're served as-is, not optimised at build time.
- Write a real `alt` description if the image carries meaning.

## A note on generated images

If these are AI-generated rather than photographs of actual customers,
don't caption them as named customers or attach testimonials to them. The
site's review carousel already carries a disclaimer that its names and
quotes are illustrative; keep imagery on the same footing.
