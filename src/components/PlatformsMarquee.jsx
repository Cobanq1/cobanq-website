import { platformsMarquee } from "../content";

// Plain-text platform names, not logos — see content.js note. This isn't
// a claim of partnership, just naming platforms freelancers/sellers
// commonly get paid from.
export default function PlatformsMarquee() {
  const loop = [...platformsMarquee.platforms, ...platformsMarquee.platforms];

  return (
    <section className="border-b border-navy-950/5 bg-white py-10">
      <p className="text-center text-xs font-semibold uppercase tracking-widest text-navy-950/40">
        {platformsMarquee.caption}
      </p>

      <div className="group mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-[marquee_24s_linear_infinite] gap-10 group-hover:[animation-play-state:paused]">
          {loop.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="text-lg font-bold tracking-tight text-navy-950/25"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
