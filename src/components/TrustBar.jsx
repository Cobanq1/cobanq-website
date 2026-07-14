import { trustBar } from "../content";

export default function TrustBar() {
  const loop = [...trustBar.logos, ...trustBar.logos];

  return (
    <section className="border-b border-navy-950/5 bg-white py-12">
      <p className="text-center text-xs font-semibold uppercase tracking-widest text-navy-950/40">
        {trustBar.heading}
      </p>

      <div
        className="group mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
      >
        <div className="flex w-max animate-[marquee_28s_linear_infinite] gap-16 group-hover:[animation-play-state:paused]">
          {loop.map((logo, i) => (
            <div
              key={`${logo}-${i}`}
              className="flex h-12 w-40 items-center justify-center text-center text-sm font-bold tracking-tight text-navy-950/30"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
