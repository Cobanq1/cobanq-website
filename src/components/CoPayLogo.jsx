// CoPay brand marks, traced from the supplied logo sheet.
//
// The app icon is a rounded square holding three dots on a 45° diagonal
// that grow as they travel — "sent, arriving home". The primary logo is
// the wordmark set in a high-contrast serif inside a navy stadium pill.
// Geometry and colours below are measured from the source artwork.

export const COPAY_INK = "#01082a";
export const COPAY_BLUE = "#2b71ad";
export const COPAY_BLUE_DEEP = "#1d5085";
export const COPAY_PAPER = "#f6f9fb";

// The three dots, as fractions of a 100-unit square.
export const COPAY_DOTS = [
  { cx: 27.6, cy: 27.6, r: 4.4, fill: COPAY_BLUE_DEEP },
  { cx: 46.0, cy: 46.0, r: 7.3, fill: COPAY_BLUE },
  { cx: 67.7, cy: 67.7, r: 12.2, fill: COPAY_PAPER },
];

// App icon — dots on the navy tile.
export function CoPayMark({ size = 48, className = "" }) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
    >
      <rect width="100" height="100" rx="21" fill={COPAY_INK} />
      {COPAY_DOTS.map((dot) => (
        <circle key={dot.r} cx={dot.cx} cy={dot.cy} r={dot.r} fill={dot.fill} />
      ))}
    </svg>
  );
}

// The dots on their own — used as a section motif and as a "money in
// transit" indicator, without the enclosing tile.
export function CoPayDots({ size = 40, className = "", light = false }) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
    >
      {COPAY_DOTS.map((dot) => (
        <circle
          key={dot.r}
          cx={dot.cx}
          cy={dot.cy}
          r={dot.r}
          fill={dot.fill === COPAY_PAPER && !light ? COPAY_INK : dot.fill}
        />
      ))}
    </svg>
  );
}

// Primary logo — wordmark in a stadium pill. `inverted` draws the pill in
// white with navy type, for use on dark backgrounds.
export function CoPayWordmark({ height = 56, inverted = false, className = "" }) {
  const width = height * 2.164; // measured aspect ratio of the source pill

  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-full ${className}`}
      style={{
        width,
        height,
        backgroundColor: inverted ? "#ffffff" : COPAY_INK,
      }}
    >
      <span
        className="font-serif font-semibold leading-none"
        style={{
          fontSize: height * 0.54,
          color: inverted ? COPAY_INK : "#ffffff",
          // The source wordmark sits optically centred, slightly tight.
          letterSpacing: "-0.01em",
          transform: `translateY(${height * 0.02}px)`,
        }}
      >
        CoPay
      </span>
    </span>
  );
}

// Icon + wordmark lockup, for page headers.
export default function CoPayLogo({ height = 44, inverted = false, className = "" }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <CoPayMark size={height} />
      <CoPayWordmark height={height} inverted={inverted} />
    </span>
  );
}
