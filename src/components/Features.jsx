import { Globe, Zap, ShieldCheck, BarChart3, Wallet, Building2 } from "lucide-react";
import { features } from "../content";

const icons = { Globe, Zap, ShieldCheck, BarChart3, Wallet, Building2 };

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
            <div className="relative flex h-full flex-col">
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
          </div>

          {rest.map((item) => {
            const Icon = icons[item.icon];
            return (
              <div
                key={item.title}
                className="group rounded-3xl border border-navy-950/10 p-7 transition hover:-translate-y-1 hover:border-brand-500/30 hover:shadow-xl hover:shadow-navy-950/5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-50 to-brand-100 text-brand-600 transition group-hover:from-brand-500 group-hover:to-brand-600 group-hover:text-white">
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
  );
}
