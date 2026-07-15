// Small inline SVG flag icons, used instead of emoji flags — emoji flags
// render as plain "PK"/"IN" text on systems without a color emoji font
// installed, which is unreliable across browsers/OSes. National flags
// aren't trademarks, so unlike company logos there's no endorsement
// concern in showing them.

const flags = {
  pk: (
    <svg viewBox="0 0 30 20" className="h-full w-full">
      <rect width="30" height="20" fill="#01411C" />
      <rect width="7.5" height="20" fill="#fff" />
      <circle cx="19.5" cy="10" r="4.5" fill="#fff" />
      <circle cx="21" cy="10" r="3.6" fill="#01411C" />
      <polygon
        points="25,6.2 25.6,8.1 27.6,8.1 26,9.3 26.6,11.2 25,10 23.4,11.2 24,9.3 22.4,8.1 24.4,8.1"
        fill="#fff"
      />
    </svg>
  ),
  in: (
    <svg viewBox="0 0 30 20" className="h-full w-full">
      <rect width="30" height="6.67" fill="#FF9933" />
      <rect y="6.67" width="30" height="6.67" fill="#fff" />
      <rect y="13.33" width="30" height="6.67" fill="#138808" />
      <circle cx="15" cy="10" r="2.4" fill="none" stroke="#000080" strokeWidth="0.4" />
      <circle cx="15" cy="10" r="0.5" fill="#000080" />
    </svg>
  ),
  ng: (
    <svg viewBox="0 0 30 20" className="h-full w-full">
      <rect width="10" height="20" fill="#008751" />
      <rect x="10" width="10" height="20" fill="#fff" />
      <rect x="20" width="10" height="20" fill="#008751" />
    </svg>
  ),
  ph: (
    <svg viewBox="0 0 30 20" className="h-full w-full">
      <rect width="30" height="10" fill="#0038A8" />
      <rect y="10" width="30" height="10" fill="#CE1126" />
      <polygon points="0,0 12,10 0,20" fill="#fff" />
      <circle cx="4.5" cy="10" r="2" fill="#FCD116" />
    </svg>
  ),
  bd: (
    <svg viewBox="0 0 30 20" className="h-full w-full">
      <rect width="30" height="20" fill="#006A4E" />
      <circle cx="13.5" cy="10" r="5.5" fill="#F42A41" />
    </svg>
  ),
  ae: (
    <svg viewBox="0 0 30 20" className="h-full w-full">
      <rect width="30" height="6.67" fill="#00732F" />
      <rect y="6.67" width="30" height="6.67" fill="#fff" />
      <rect y="13.33" width="30" height="6.67" fill="#000" />
      <rect width="9" height="20" fill="#FF0000" />
    </svg>
  ),
  gb: (
    <svg viewBox="0 0 30 20" className="h-full w-full">
      <rect width="30" height="20" fill="#00247D" />
      <polygon points="0,0 30,20 30,15 7.5,0" fill="#fff" />
      <polygon points="30,0 0,20 0,15 22.5,0" fill="#fff" />
      <polygon points="0,0 30,20 30,17.5 5,0" fill="#CF142B" />
      <polygon points="30,0 0,20 0,17.5 25,0" fill="#CF142B" />
      <rect x="12" width="6" height="20" fill="#fff" />
      <rect y="7" width="30" height="6" fill="#fff" />
      <rect x="13.2" width="3.6" height="20" fill="#CF142B" />
      <rect y="8.2" width="30" height="3.6" fill="#CF142B" />
    </svg>
  ),
  eu: (
    <svg viewBox="0 0 30 20" className="h-full w-full">
      <rect width="30" height="20" fill="#003399" />
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i / 12) * Math.PI * 2 - Math.PI / 2;
        const cx = 15 + Math.cos(angle) * 6;
        const cy = 10 + Math.sin(angle) * 6;
        return <circle key={i} cx={cx} cy={cy} r="0.7" fill="#FFCC00" />;
      })}
    </svg>
  ),
  us: (
    <svg viewBox="0 0 30 20" className="h-full w-full">
      <rect width="30" height="20" fill="#fff" />
      {Array.from({ length: 7 }).map((_, i) => (
        <rect key={i} y={(i * 2 * 20) / 13} width="30" height={20 / 13} fill="#B22234" />
      ))}
      <rect width="13" height={(7 * 20) / 13} fill="#3C3B6E" />
      {Array.from({ length: 12 }).map((_, i) => {
        const col = i % 4;
        const row = Math.floor(i / 4);
        return (
          <circle
            key={i}
            cx={2 + col * 3}
            cy={1.8 + row * 3.2}
            r="0.5"
            fill="#fff"
          />
        );
      })}
    </svg>
  ),
  jp: (
    <svg viewBox="0 0 30 20" className="h-full w-full">
      <rect width="30" height="20" fill="#fff" />
      <circle cx="15" cy="10" r="5.5" fill="#BC002D" />
    </svg>
  ),
  de: (
    <svg viewBox="0 0 30 20" className="h-full w-full">
      <rect width="30" height="6.67" fill="#000" />
      <rect y="6.67" width="30" height="6.67" fill="#DD0000" />
      <rect y="13.33" width="30" height="6.67" fill="#FFCE00" />
    </svg>
  ),
  fr: (
    <svg viewBox="0 0 30 20" className="h-full w-full">
      <rect width="10" height="20" fill="#0055A4" />
      <rect x="10" width="10" height="20" fill="#fff" />
      <rect x="20" width="10" height="20" fill="#EF4135" />
    </svg>
  ),
  ca: (
    <svg viewBox="0 0 30 20" className="h-full w-full">
      <rect width="30" height="20" fill="#fff" />
      <rect width="7.5" height="20" fill="#FF0000" />
      <rect x="22.5" width="7.5" height="20" fill="#FF0000" />
      <polygon
        points="15,4.5 16.2,7.5 19,6.7 17.5,9.3 20,10.3 17.2,11 18,14 15,12.3 12,14 12.8,11 10,10.3 12.5,9.3 11,6.7 13.8,7.5"
        fill="#FF0000"
      />
    </svg>
  ),
  au: (
    <svg viewBox="0 0 30 20" className="h-full w-full">
      <rect width="30" height="20" fill="#00247D" />
      <g transform="scale(0.5)">
        <rect width="30" height="20" fill="#00247D" />
        <polygon points="0,0 30,20 30,15 7.5,0" fill="#fff" />
        <polygon points="30,0 0,20 0,15 22.5,0" fill="#fff" />
        <polygon points="0,0 30,20 30,17.5 5,0" fill="#CF142B" />
        <polygon points="30,0 0,20 0,17.5 25,0" fill="#CF142B" />
        <rect x="12" width="6" height="20" fill="#fff" />
        <rect y="7" width="30" height="6" fill="#fff" />
        <rect x="13.2" width="3.6" height="20" fill="#CF142B" />
        <rect y="8.2" width="30" height="3.6" fill="#CF142B" />
      </g>
      {[
        [21, 5],
        [24, 10],
        [22, 15],
        [26, 3],
        [17, 15],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="0.6" fill="#fff" />
      ))}
    </svg>
  ),
  ch: (
    <svg viewBox="0 0 30 20" className="h-full w-full">
      <rect width="30" height="20" fill="#FF0000" />
      <rect x="12.5" y="6" width="5" height="8" fill="#fff" />
      <rect x="9.5" y="9" width="11" height="2" fill="#fff" />
    </svg>
  ),
};

export default function Flag({ code, className = "h-6 w-8" }) {
  const flag = flags[code?.toLowerCase()];
  return (
    <span className={`inline-block shrink-0 overflow-hidden rounded ${className}`}>
      {flag || (
        <span className="flex h-full w-full items-center justify-center bg-navy-950/10 text-[8px] font-bold text-navy-950/50">
          {code?.toUpperCase()}
        </span>
      )}
    </span>
  );
}
