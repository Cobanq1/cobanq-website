import { ArrowRight, PlayCircle, ArrowUpRight, Globe2 } from "lucide-react";
import { hero, site } from "../content";

export default function Hero({ onWatchDemo }) {
  return (
    <section id="top" className="relative overflow-hidden bg-navy-950">
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
            <Globe2 size={14} />
            {hero.eyebrow}
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
            {hero.headline}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
            {hero.subhead}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={site.onboardingUrl}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-brand-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/30 transition hover:from-brand-400 hover:to-brand-500"
            >
              {hero.primaryCta}
              <ArrowRight size={16} />
            </a>
            <button
              type="button"
              onClick={onWatchDemo}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <PlayCircle size={18} />
              {hero.secondaryCta}
            </button>
          </div>

          <p className="mt-5 text-xs font-medium uppercase tracking-wide text-white/40">
            {hero.microcopy}
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:justify-self-end">
          <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
            <div className="rounded-2xl bg-gradient-to-br from-navy-700 via-navy-800 to-navy-950 p-6 text-white shadow-xl">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-widest text-white/50">
                  Available balance
                </span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-500 text-xs font-bold">
                  C
                </span>
              </div>
              <p className="mt-4 text-3xl font-bold tracking-tight">$48,210.55</p>
              <p className="mt-1 text-xs text-white/40">USD • Multi-currency account</p>
              <div className="mt-6 flex gap-2 text-[10px] font-mono tracking-widest text-white/40">
                <span>4291</span>
                <span>••••</span>
                <span>••••</span>
                <span>0071</span>
              </div>
            </div>

            <div className="mt-4 space-y-3">
              {[
                { name: "Client payment — Berlin", amount: "+€2,450.00" },
                { name: "Payout to bank", amount: "-$1,200.00" },
              ].map((row) => (
                <div
                  key={row.name}
                  className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3 text-sm text-white/80"
                >
                  <span>{row.name}</span>
                  <span className="font-semibold text-white">{row.amount}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute -bottom-6 -left-6 flex items-center gap-2 rounded-2xl bg-white px-4 py-3 text-xs font-semibold text-navy-950 shadow-xl">
            <ArrowUpRight size={16} className="text-brand-500" />
            Sent in 24 hrs
          </div>
        </div>
      </div>
    </section>
  );
}
