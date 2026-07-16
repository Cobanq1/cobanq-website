// Bhejo brand mark, recreated as inline SVG from the supplied logo:
// a solid blue circle with a white up-right arrow, and a lowercase
// sans-serif "bhejo" wordmark.
const BHEJO_BLUE = "#1D6FC0";

export function BhejoMark({ size = 48 }) {
  return (
    <svg viewBox="0 0 48 48" width={size} height={size} aria-hidden="true">
      <circle cx="24" cy="24" r="24" fill={BHEJO_BLUE} />
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
export default function BhejoLogo({ markSize = 64, dark = false, className = "" }) {
  return (
    <div className={`flex flex-col items-center gap-3 ${className}`}>
      <BhejoMark size={markSize} />
      <span
        className={`text-4xl font-bold lowercase tracking-tight sm:text-5xl ${
          dark ? "text-white" : "text-navy-950"
        }`}
      >
        bhejo
      </span>
    </div>
  );
}
