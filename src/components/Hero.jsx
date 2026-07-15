import { ArrowRight, PlayCircle, ArrowUpRight, Globe2, Bell } from "lucide-react";
import { hero, site, dashboardPreview } from "../content";
import AvatarStack from "./AvatarStack";
import FloatingActivity from "./FloatingActivity";
import Flag from "./Flag";

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

      <FloatingActivity />

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

          <div className="mt-8">
            <AvatarStack dark caption="Joined by thousands of individuals and businesses" />
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:justify-self-end">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur">
            <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-5 py-3">
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-red-400/70" />
                <span className="h-2 w-2 rounded-full bg-amber-400/70" />
                <span className="h-2 w-2 rounded-full bg-emerald-400/70" />
              </div>
              <span className="text-[10px] font-semibold uppercase tracking-widest text-white/40">
                Your dashboard
              </span>
              <Bell size={13} className="text-white/30" />
            </div>

            <div className="p-5">
              <p className="text-sm font-bold text-white">
                Welcome back, {dashboardPreview.userName}!
              </p>

              <div className="mt-4 grid grid-cols-2 gap-2.5">
                {dashboardPreview.balances.slice(0, 2).map((b, i) => (
                  <div
                    key={b.code}
                    className={`rounded-xl p-3 ${
                      i === 0
                        ? "bg-gradient-to-br from-navy-700 via-navy-800 to-navy-950"
                        : "bg-white/5"
                    }`}
                  >
                    <div className="flex items-center gap-1.5">
                      <Flag code={b.countryCode} className="h-3 w-5 rounded-sm" />
                      <span className="text-[10px] font-semibold text-white/50">{b.code}</span>
                    </div>
                    <p className="mt-1.5 text-base font-bold text-white">{b.amount}</p>
                  </div>
                ))}
              </div>

              <div className="mt-3 space-y-2">
                {dashboardPreview.payments.slice(0, 2).map((p) => (
                  <div
                    key={p.ref}
                    className="flex items-center justify-between gap-2 rounded-xl bg-white/5 px-3.5 py-2.5"
                  >
                    <span className="flex items-center gap-2 truncate text-xs text-white/80">
                      <Flag code={p.countryCode} className="h-3 w-5 shrink-0 rounded-sm" />
                      <span className="truncate">{p.name}</span>
                    </span>
                    <span className="shrink-0 text-xs font-semibold text-white">{p.amount}</span>
                  </div>
                ))}
              </div>
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
