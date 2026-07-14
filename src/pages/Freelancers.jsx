import { useOutletContext } from "react-router-dom";
import { ArrowRight, Globe, Zap, BarChart3, Laptop, ArrowUpRight } from "lucide-react";
import { freelancers } from "../content";

const icons = { Globe, Zap, BarChart3, Laptop };

export default function Freelancers() {
  const { openGetStarted } = useOutletContext();
  const { mockup } = freelancers;

  return (
    <>
      <section className="relative overflow-hidden bg-navy-950">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(600px circle at 15% 20%, rgba(91,141,239,0.3), transparent 60%), radial-gradient(500px circle at 85% 80%, rgba(36,56,122,0.6), transparent 60%)",
          }}
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-28">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-brand-400">
              {freelancers.eyebrow}
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl">
              {freelancers.heading}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
              {freelancers.subhead}
            </p>
            <button
              type="button"
              onClick={openGetStarted}
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-brand-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/30 transition hover:from-brand-400 hover:to-brand-500"
            >
              {freelancers.cta}
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="relative mx-auto w-full max-w-sm lg:justify-self-end">
            <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
              <div className="rounded-2xl bg-gradient-to-br from-navy-700 via-navy-800 to-navy-950 p-6 text-white shadow-xl">
                <p className="text-xs font-semibold uppercase tracking-widest text-white/50">
                  {mockup.label}
                </p>
                <p className="mt-3 text-sm text-white/60">{mockup.from}</p>
                <p className="mt-2 text-3xl font-bold tracking-tight">{mockup.amount}</p>
              </div>
              <div className="mt-4 flex items-center gap-2 rounded-xl bg-white/5 px-4 py-3 text-sm text-white/80">
                <ArrowUpRight size={16} className="text-brand-400" />
                {mockup.note}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {freelancers.features.map((item) => {
              const Icon = icons[item.icon];
              return (
                <div key={item.title} className="rounded-3xl border border-navy-950/10 p-7">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 text-white">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-navy-950">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-950/60">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
