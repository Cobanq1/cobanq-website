import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ArrowRight } from "lucide-react";
import { pricing } from "../content";

function VolumeRuler() {
  const { ruler } = pricing;
  return (
    <div className="mt-14">
      <p className="text-xs font-semibold uppercase tracking-widest text-navy-950/40">
        {ruler.label}
      </p>
      <div className="relative mt-7 h-10">
        <div className="absolute inset-x-0 top-4 h-1.5 overflow-hidden rounded-full bg-navy-950/10">
          <div className="flex h-full w-full">
            <div className="h-full flex-1 bg-brand-400" />
            <div className="h-full flex-1 bg-brand-500" />
            <div className="h-full flex-1 bg-brand-700" />
          </div>
        </div>
        {ruler.marks.map((mark) => (
          <div
            key={mark.label}
            className="absolute top-0 -translate-x-1/2 text-center"
            style={{ left: `${mark.position}%` }}
          >
            <div className="mx-auto h-3.5 w-0.5 bg-navy-950/30" />
            <p className="mt-2 whitespace-nowrap text-[11px] font-medium text-navy-950/50">
              <span className="sm:hidden">{mark.short}</span>
              <span className="hidden sm:inline">{mark.label}</span>
            </p>
          </div>
        ))}
        <p className="absolute left-0 top-6 text-[11px] font-medium text-navy-950/40">
          {ruler.start}
        </p>
        <p className="absolute right-0 top-6 text-right text-[11px] font-medium text-navy-950/40">
          <span className="sm:hidden">{ruler.endShort}</span>
          <span className="hidden sm:inline">{ruler.end}</span>
        </p>
      </div>
    </div>
  );
}

function PricingCard({ plan }) {
  const [openSection, setOpenSection] = useState(0);

  return (
    <div
      className={`flex flex-col rounded-3xl border bg-white transition ${
        plan.featured
          ? "border-brand-500 shadow-xl shadow-brand-500/10 ring-2 ring-brand-500/15"
          : "border-navy-950/10"
      }`}
    >
      <div className="border-b border-navy-950/10 p-7">
        {plan.featured && (
          <span className="mb-3 inline-block rounded-full bg-brand-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-brand-600">
            Recommended
          </span>
        )}
        <p className="text-xs font-bold uppercase tracking-widest text-brand-600">{plan.tag}</p>
        <h3 className="mt-2 text-2xl font-extrabold text-navy-950">{plan.name}</h3>
        <p className="mt-2 min-h-[42px] text-sm leading-relaxed text-navy-950/60">
          {plan.description}
        </p>
        <div className="mt-5 flex items-baseline gap-1.5">
          <span className="font-mono text-3xl font-bold text-navy-950">{plan.monthlyFee}</span>
          <span className="text-xs text-navy-950/50">/ month</span>
        </div>
        <p className="mt-1 text-xs text-navy-950/40">{plan.monthlyFeeNote}</p>
      </div>

      <div className="flex-1">
        {plan.sections.map((section, i) => {
          const isOpen = openSection === i;
          return (
            <div key={section.title} className="border-b border-navy-950/10 last:border-b-0">
              <button
                type="button"
                onClick={() => setOpenSection(isOpen ? -1 : i)}
                className="flex w-full items-center justify-between px-6 py-4 text-left text-sm font-bold text-navy-950"
                aria-expanded={isOpen}
              >
                {section.title}
                <ChevronDown
                  size={15}
                  className={`shrink-0 text-navy-950/40 transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isOpen && (
                <div className="space-y-2.5 px-6 pb-4">
                  {section.rows.map((row) => (
                    <div
                      key={row.label}
                      className="flex items-start justify-between gap-4 text-xs"
                    >
                      <span className="text-navy-950/60">{row.label}</span>
                      <span className="shrink-0 font-mono font-semibold text-brand-600">
                        {row.value}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className={`m-5 rounded-2xl p-4 ${plan.featured ? "bg-brand-50" : "bg-navy-950/[0.03]"}`}>
        <p className="text-[11px] font-bold uppercase tracking-wide text-brand-600">
          {plan.salesCta.threshold}
        </p>
        <p className="mt-1.5 text-xs leading-relaxed text-navy-950/70">
          {plan.salesCta.description}
        </p>
        <Link
          to="/contact"
          className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-navy-950 px-4 py-2 text-xs font-semibold text-white transition hover:bg-navy-800"
        >
          Talk to Sales
          <ArrowRight size={12} />
        </Link>
      </div>
    </div>
  );
}

export default function Pricing() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <>
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-600">
            {pricing.eyebrow}
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-navy-950 sm:text-5xl">
            {pricing.heading}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-navy-950/60">{pricing.subhead}</p>
        </div>

        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <VolumeRuler />
        </div>

        <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-6 px-6 lg:grid-cols-3 lg:px-8">
          {pricing.plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-6xl px-6 lg:px-8">
          <p className="whitespace-pre-line border-t border-navy-950/10 pt-6 text-xs leading-relaxed text-navy-950/40">
            {pricing.footnote}
          </p>
        </div>
      </section>

      <section className="bg-navy-950/[0.02] py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
            Frequently asked questions
          </h2>

          <div className="mt-10 space-y-3">
            {pricing.faq.map((item, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={item.q}
                  className={`rounded-2xl border bg-white transition ${
                    isOpen ? "border-brand-500" : "border-navy-950/10"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : i)}
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
