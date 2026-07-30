/**
 * Alliance Security Group logo.
 *
 * The mark is a shield holding an "A" built from two separate strokes joined
 * by a bar — two parties bridged, which is the "alliance" idea — in the brand
 * gold and steel. `variant="mark"` gives the shield on its own (favicons,
 * tight spaces); the default pairs it with the wordmark.
 */

export function LogoMark({ className = "h-10 w-10", gold = "#E7B24B", steel = "#FFFFFF" }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" fill="none">
      <defs>
        <linearGradient id="asg-shield" x1="32" y1="3" x2="32" y2="61" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1B2836" />
          <stop offset="100%" stopColor="#0B121B" />
        </linearGradient>
      </defs>
      <path
        d="M32 3 58 12v20c0 15-12 25-26 29C18 57 6 47 6 32V12L32 3Z"
        fill="url(#asg-shield)"
        stroke={gold}
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path d="M20.5 46 32 18.5" stroke={gold} strokeWidth="5.5" strokeLinecap="round" />
      <path d="M43.5 46 32 18.5" stroke={steel} strokeWidth="5.5" strokeLinecap="round" />
      <path d="M25.5 37.5h13" stroke={gold} strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

export default function Logo({ variant = "full", tone = "light", className = "" }) {
  // tone="light" = for dark backgrounds; tone="dark" = for light backgrounds.
  const title = tone === "light" ? "text-white" : "text-ink-900";
  const sub = tone === "light" ? "text-white/55" : "text-ink-500";

  if (variant === "mark") return <LogoMark className={className || "h-10 w-10"} />;

  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <LogoMark className="h-10 w-10 shrink-0" />
      <span className="flex flex-col leading-none">
        <span className={`font-display text-[15px] font-extrabold uppercase tracking-[0.16em] ${title}`}>
          Alliance
        </span>
        <span className={`mt-1 text-[9.5px] font-semibold uppercase tracking-[0.28em] ${sub}`}>
          Security Group
        </span>
      </span>
    </span>
  );
}
