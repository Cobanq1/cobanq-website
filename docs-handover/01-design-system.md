# Design system

Two palettes. CoBanq is the default; CoPay applies only on `/send-money`
and `/onboarding/remittance`.

## Colour

### CoBanq (site-wide default)

| Token | Hex | Used for |
|---|---|---|
| `navy-950` | `#050b1a` | Dark section backgrounds, primary buttons, body text |
| `navy-900` | `#0a1330` | — |
| `navy-800` | `#111c42` | Primary button hover |
| `navy-700` | `#1a2a5c` | — |
| `navy-600` | `#24387a` | Dark-section gradient accents |
| `brand-50` | `#eef4ff` | Icon chip backgrounds |
| `brand-100` | `#dce8ff` | — |
| `brand-400` | `#5b8def` | Accents on dark backgrounds, eyebrow text |
| `brand-500` | `#3b6fe0` | Primary accent, gradient start, focus rings |
| `brand-600` | `#2c56c4` | Links, gradient end |
| `brand-700` | `#1e3f9e` | Link hover |

Body text is `navy-950`. Secondary text is `navy-950` at 60% opacity;
tertiary at 40–45%. Borders are `navy-950` at 8–15%. This opacity-based
approach keeps everything in one hue family — reproduce it rather than
inventing separate grey tokens.

### CoPay (remittance pages only)

| Token | Hex | Used for |
|---|---|---|
| `copay-ink` | `#01082a` | Backgrounds, logo, primary buttons |
| `copay-ink-soft` | `#0b1642` | Button hover |
| `copay-blue` | `#2b71ad` | Accent, eyebrows, active states |
| `copay-blue-deep` | `#1d5085` | Icon foregrounds |
| `copay-blue-soft` | `#e8f0f7` | Icon chip backgrounds |
| `copay-paper` | `#f4f4f6` | Light section backgrounds |

## Typography

Three families, all Google Fonts:

| Role | Family | Weights | Applied to |
|---|---|---|---|
| Body | **Inter** | 400–800 | All body copy, UI, buttons |
| Display | **Space Grotesk** | 500–700 | CoBanq `h1`–`h3` |
| Serif | **Playfair Display** | 500–700 + italic | CoPay headings, both logos |
| Numerals | **Manrope** | 600–800 | Prices, stats, big figures |

Load:

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&family=Manrope:wght@600;700;800&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500&display=swap" rel="stylesheet">
```

**Important:** Space Grotesk's heaviest weight is 700. CoBanq headings
must be capped at 700 — if a CSS `font-weight: 800` gets through, the
browser synthesises a fake bold that looks visibly wrong. The reference
enforces this with an unlayered `h1,h2,h3 { font-weight: 700 }` rule.

Heading letter-spacing is `-0.015em`. Body line-height is relaxed
(~1.6); headings are tight (~1.1).

Type scale in use: `h1` 36–60px, `h2` 30–40px, `h3` 18–24px, body 16px,
small 14px, micro 12px. Eyebrow labels are 12px, uppercase,
`letter-spacing: 0.25em`, semibold.

## Shape and depth

- **Radii:** buttons fully rounded (pill) on CoBanq; CoPay uses 16px.
  Cards 16–24px. Large feature panels 28–32px. Inputs 12–16px.
- **Shadows:** used sparingly. Cards lift on hover (`shadow-lg` + border
  colour shift). Primary buttons carry a coloured shadow: `shadow-lg`
  tinted `brand-600` at 30%.
- **Borders:** 1px at `navy-950/10`. Selected/active states use a 2px
  `brand-500` border plus a tinted background — never colour alone.

## Layout

- Content max-widths: `max-w-7xl` (1280px) for wide hero grids,
  `max-w-6xl` (1152px) for the white-label diagram sections,
  `max-w-5xl` (1024px) for most sections, `max-w-3xl` (768px) for centred
  text blocks.
- Horizontal padding: 24px mobile, 32px from `lg`.
- Section vertical rhythm: 64px mobile, 80–96px desktop.
- Breakpoints are Tailwind defaults: `sm` 640, `md` 768, `lg` 1024,
  `xl` 1280.

## Recurring patterns

**Dark hero.** Navy background with two radial gradients — one blue at
top-left, one deeper navy at bottom-right, both low opacity. Used on
home, solutions, white-label, business, CoPay. Exact values are in the
reference; copy them, they set the whole tone.

**Icon chip.** 44–48px rounded square, tinted background, coloured icon.
CoBanq uses `brand-50` / `brand-600`. On the nav dropdown each item gets
a different hue (blue, emerald, violet, amber, sky, rose) — the only
place multiple hues appear.

**Stat row.** Large Manrope figure over a small muted label. Used on
home, solutions, white-label.

**Option card.** Icon chip + bold title + muted subtitle, selectable.
Selected = 2px `brand-500` border, `brand-50` background, tick badge.
Used throughout the onboarding flow.

**Tag chip.** Small rounded pill, `navy-950/4` background, used for
country names, currency codes, industries and platform names.

## Logos

Both logos are in `assets/` and are also drawn as code in the reference
(`reference-code/src/components/CoPayLogo.jsx`).

- **CoBanq wordmark** — set in Playfair Display, followed by "Since 2003"
  in smaller italic. Plain text, not an image.
- **CoPay wordmark** — navy rounded rectangle, "CoPay" in Playfair
  Display reversed out in white. Aspect ratio 2.24:1, corner radius 22%
  of height, type at 52% of height. A reversed variant (white tile, navy
  type) is used on dark backgrounds. There is **no separate icon mark**;
  where a square is unavoidable (favicon, app tile) reduce to a "C" in
  the same serif — see `assets/copay-icon.svg`.

## Accessibility

Maintained in the reference; please keep it:

- Focus-visible outline: 2px `brand-500`, 2px offset.
- All icon-only buttons have `aria-label`.
- Selectable cards use `aria-pressed`; disclosure buttons use
  `aria-expanded`.
- Decorative SVGs are `aria-hidden`.
- Selection states never rely on colour alone — there is always a tick or
  border-weight change too.
