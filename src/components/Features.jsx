import { Globe, Zap, ShieldCheck, BarChart3, Wallet, Building2, ChevronDown } from "lucide-react";
import { features } from "../content";
import PersonAvatar from "./PersonAvatar";
import Flag from "./Flag";

const icons = { Globe, Zap, ShieldCheck, BarChart3, Wallet, Building2 };

// Cards that represent a specific kind of person get an illustrated
// portrait instead of a plain icon — the rest (fees, speed, security)
// stay icon-led since they're process concepts, not people.
const personSeeds = {
  "Multi-currency wallets": "Wallet Customer",
  "Send money home": "Remittance Sender",
  "Built for business": "Business Owner",
};

export default function Features() {
  const [hero, ...rest] = features.items;
  const HeroIcon = icons[hero.icon];

  return (
    <section id="features" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
            {features.heading}
          </h2>
          <p className="mt-4 text-lg text-navy-950/60">{features.subhead}</p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <div className="relative overflow-hidden rounded-3xl bg-navy-950 p-8 sm:col-span-2 sm:row-span-2 lg:col-span-2">
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-70 blur-3xl"
              style={{ background: "linear-gradient(135deg, #3b6fe0, #5b8def)" }}
            />
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.15]"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)",
                backgroundSize: "22px 22px",
              }}
            />
            <div className="relative flex h-full flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-8">
              <div className="flex h-full flex-col">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-400 to-brand-600 text-white">
                  <HeroIcon size={26} />
                </div>
                <h3 className="mt-8 text-2xl font-bold text-white">{hero.title}</h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-white/60">
                  {hero.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {["GBP", "EUR", "USD", "JPY", "AED", "PKR"].map((currency) => (
                    <span
                      key={currency}
                      className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-white/70"
                    >
                      {currency}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative mx-auto mt-10 w-full max-w-[280px] shrink-0 lg:mx-0 lg:mt-0">
                <div className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-navy-800 to-navy-950 p-5 shadow-2xl">
                  <div className="absolute -right-3 -top-3 flex items-center gap-1.5 rounded-full bg-gradient-to-r from-brand-500 to-brand-600 px-3.5 py-1.5 text-xs font-bold text-white shadow-lg">
                    <Flag code="eu" className="h-3.5 w-5 rounded-sm" />
                    EUR
                  </div>

                  <p className="text-sm font-bold text-white">Set currency</p>

                  <div className="mt-4 flex items-center justify-between border-b border-white/10 pb-3 text-xs">
                    <span className="text-white/40">Date</span>
                    <span className="font-semibold text-white/80">04/07</span>
                  </div>
                  <div className="mt-3 flex items-center justify-between text-xs">
                    <span className="text-white/40">Invoice</span>
                    <span className="font-semibold text-white/80">42481-317189</span>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {[
                      { code: "gb", label: "GBP" },
                      { code: "eu", label: "EUR" },
                      { code: "us", label: "USD" },
                    ].map((c) => (
                      <span
                        key={c.code}
                        className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[11px] font-semibold text-white/80"
                      >
                        <Flag code={c.code} className="h-3 w-4 rounded-sm" />
                        {c.label}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    tabIndex={-1}
                    className="mt-5 w-full rounded-full bg-gradient-to-r from-brand-500 to-brand-600 py-2.5 text-xs font-bold text-white shadow-lg shadow-brand-600/30"
                  >
                    Confirm
                  </button>
                </div>

                <div className="absolute -bottom-4 -left-4 flex items-center gap-2 rounded-xl bg-white px-3 py-2 text-[11px] font-semibold text-navy-950 shadow-xl">
                  <PersonAvatar seed={personSeeds[hero.title]} size={22} />
                  Priya sent €420
                </div>
              </div>
            </div>
          </div>

          {rest.map((item) => {
            const Icon = icons[item.icon];
            const seed = personSeeds[item.title];
            return (
              <div
                key={item.title}
                className="group rounded-3xl border border-navy-950/10 p-7 transition hover:-translate-y-1 hover:border-brand-500/30 hover:shadow-xl hover:shadow-navy-950/5"
              >
                {seed ? (
                  <div className="relative inline-flex">
                    <PersonAvatar seed={seed} size={48} />
                    <div className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-brand-500 text-white ring-2 ring-white">
                      <Icon size={12} />
                    </div>
                  </div>
                ) : (
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-50 to-brand-100 text-brand-600 transition group-hover:from-brand-500 group-hover:to-brand-600 group-hover:text-white">
                    <Icon size={20} />
                  </div>
                )}
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
  );
}
