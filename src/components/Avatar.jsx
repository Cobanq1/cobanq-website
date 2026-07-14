// Abstract gradient "person" illustration used in place of real photos.
// Pass a different `seed` (0-4) to vary the gradient tone per person.
const gradients = [
  ["#3b6fe0", "#5b8def"],
  ["#1e3f9e", "#3b6fe0"],
  ["#24387a", "#5b8def"],
  ["#2c56c4", "#8fb3ff"],
  ["#111c42", "#3b6fe0"],
];

export default function Avatar({ seed = 0, size = 56 }) {
  const [from, to] = gradients[seed % gradients.length];
  const gradientId = `avatar-gradient-${seed}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      role="img"
      aria-hidden="true"
      className="shrink-0"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={from} />
          <stop offset="100%" stopColor={to} />
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="32" fill={`url(#${gradientId})`} />
      <circle cx="32" cy="26" r="11" fill="rgba(255,255,255,0.85)" />
      <path
        d="M12 58c2-11 10-18 20-18s18 7 20 18"
        fill="rgba(255,255,255,0.85)"
      />
    </svg>
  );
}
