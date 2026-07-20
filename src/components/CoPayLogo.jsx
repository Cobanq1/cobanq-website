// CoPay brand mark — a solid blue circle with a white up-right arrow
// (carried over from the original supplied logo), and a camel-case
// "CoPay" wordmark styled like the CoBanq parent brand.
const COPAY_BLUE = "#1D6FC0";

export function CoPayMark({ size = 48 }) {
  return (
    <svg viewBox="0 0 48 48" width={size} height={size} aria-hidden="true">
      <circle cx="24" cy="24" r="24" fill={COPAY_BLUE} />
      <path
        d="M17 31 L30.5 17.5 M20.5 17.5 H30.5 V27.5"
        stroke="#fff"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

// Stacked lockup — mark above wordmark, for page heroes.
export default function CoPayLogo({ markSize = 64, dark = false, className = "" }) {
  return (
    <div className={`flex flex-col items-center gap-3 ${className}`}>
      <CoPayMark size={markSize} />
      <span
        className={`text-4xl font-bold tracking-tight sm:text-5xl ${
          dark ? "text-white" : "text-navy-950"
        }`}
      >
        CoPay
      </span>
    </div>
  );
}
