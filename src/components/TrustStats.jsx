import { trust } from "../content";

export default function TrustStats() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
        <span className="text-xs font-semibold uppercase tracking-widest text-brand-600">
          {trust.eyebrow}
        </span>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
          {trust.heading}
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-navy-950/60">{trust.subhead}</p>
      </div>

      <div className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-8 px-6 sm:grid-cols-4 lg:px-8">
        {trust.stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-2xl font-extrabold tracking-tight text-navy-950 sm:text-3xl">
              {stat.value}
            </p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-navy-950/40">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
