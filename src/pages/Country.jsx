import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { ArrowRight, ChevronDown, MapPin, Wallet } from "lucide-react";
import { countries } from "../content";

export default function Country({ slug }) {
  const { openGetStarted } = useOutletContext();
  const [openIndex, setOpenIndex] = useState(0);
  const country = countries[slug];

  if (!country) return null;

  return (
    <>
      <section className="relative overflow-hidden bg-navy-950 py-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            background:
              "radial-gradient(600px circle at 85% 20%, rgba(91,141,239,0.3), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-brand-400">
            <span className="text-base leading-none">{country.flag}</span>
            Local corridor
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            {country.heading}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/60">{country.subhead}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={openGetStarted}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-brand-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/30 transition hover:from-brand-400 hover:to-brand-500"
            >
              Send to {country.name}
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
            {country.heroStats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-extrabold text-white sm:text-3xl">{stat.value}</p>
                <p className="mt-1 text-xs text-white/50">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-5xl gap-10 px-6 sm:grid-cols-2 lg:px-8">
          <div className="rounded-3xl border border-navy-950/10 p-8">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
              <Wallet size={20} />
            </div>
            <h3 className="mt-5 text-lg font-bold text-navy-950">Payout methods</h3>
            <ul className="mt-4 space-y-2">
              {country.payoutMethods.map((method) => (
                <li key={method} className="text-sm text-navy-950/60">
                  {method}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-navy-950/10 p-8">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
              <MapPin size={20} />
            </div>
            <h3 className="mt-5 text-lg font-bold text-navy-950">Popular destinations</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {country.popularCities.map((city) => (
                <span
                  key={city}
                  className="rounded-full bg-navy-950/5 px-3 py-1 text-xs font-semibold text-navy-950/60"
                >
                  {city}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy-950/[0.02] py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-navy-950 sm:text-3xl">
            {country.name} transfer FAQs
          </h2>

          <div className="mt-8 space-y-3">
            {country.faqItems.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={item.q}
                  className={`rounded-2xl border bg-white transition ${
                    isOpen ? "border-brand-500" : "border-navy-950/10"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm font-bold text-navy-950">{item.q}</span>
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-navy-950 text-white transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <ChevronDown size={15} />
                    </span>
                  </button>
                  {isOpen && (
                    <p className="px-6 pb-5 text-sm leading-relaxed text-navy-950/60">{item.a}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
