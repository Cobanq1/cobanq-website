// CoPay brand mark.
//
// The wordmark is the whole identity: a navy rounded rectangle with
// "CoPay" set in a high-contrast serif, reversed out in white. There is
// no separate icon — where a square is needed (favicons, app tiles) the
// glyph below reduces it to its initial in the same typeface.

export const COPAY_INK = "#01082a";

// Proportions measured from the supplied artwork.
const ASPECT = 2.24; // width / height
const RADIUS = 0.22; // corner radius as a fraction of height
const CAP = 0.52; // type size as a fraction of height

// Primary logo. `inverted` draws it white-on-navy reversed — a white
// tile with navy type — for placing on dark backgrounds.
export function CoPayWordmark({ height = 56, inverted = false, className = "" }) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center ${className}`}
      style={{
        width: height * ASPECT,
        height,
        borderRadius: height * RADIUS,
        backgroundColor: inverted ? "#ffffff" : COPAY_INK,
      }}
    >
      <span
        className="font-serif leading-none"
        style={{
          fontSize: height * CAP,
          color: inverted ? COPAY_INK : "#ffffff",
          letterSpacing: "-0.005em",
          // The serif's optical centre sits slightly above the box's.
          transform: `translateY(${height * 0.015}px)`,
        }}
      >
        CoPay
      </span>
    </span>
  );
}

// Square reduction for favicons and app tiles, where the full wordmark
// would be illegible.
export function CoPayGlyph({ size = 48, className = "" }) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center ${className}`}
      style={{
        width: size,
        height: size,
        borderRadius: size * 0.24,
        backgroundColor: COPAY_INK,
      }}
    >
      <span
        className="font-serif leading-none text-white"
        style={{ fontSize: size * 0.58, transform: `translateY(${size * 0.02}px)` }}
      >
        C
      </span>
    </span>
  );
}

export default CoPayWordmark;
