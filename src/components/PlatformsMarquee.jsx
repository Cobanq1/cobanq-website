import { platformsMarquee } from "../content";

// Platform marks + names, framed as where users get paid from (nominative
// use, not a partnership claim — see content.js note). Marks load from the
// Simple Icons CDN in the visitor's browser; if one fails to load it hides
// itself and the text name still shows.
const LOGO_COLOR = "8B93A5"; // muted slate to match the marquee's low-key tone

export default function PlatformsMarquee() {
  const loop = [...platformsMarquee.platforms, ...platformsMarquee.platforms];

  return (
    <section className="border-b border-navy-950/5 bg-white py-10">
      <p className="text-center text-xs font-semibold uppercase tracking-widest text-navy-950/40">
        {platformsMarquee.caption}
      </p>

      <div className="group mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-[marquee_24s_linear_infinite] items-center gap-12 group-hover:[animation-play-state:paused]">
          {loop.map((platform, i) => (
            <span
              key={`${platform.name}-${i}`}
              className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-navy-950/30"
            >
              {platform.slug && (
                <img
                  src={`https://cdn.simpleicons.org/${platform.slug}/${LOGO_COLOR}`}
                  alt=""
                  width={26}
                  height={26}
                  loading="lazy"
                  className="h-[26px] w-[26px] shrink-0"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              )}
              {platform.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
