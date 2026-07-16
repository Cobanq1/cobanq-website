import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ArrowRight, Laptop, Building2, Users } from "lucide-react";
import { pricing } from "../content";

const categoryIcons = { freelancers: Laptop, business: Building2, payroll: Users };

// Medal-style accents for the Bronze/Gold/Platinum packages; the free
// freelancer plan uses the brand blue.
const tierStyles = {
  free: {
    badge: "bg-brand-50 text-brand-600",
    ring: "border-brand-500 shadow-xl shadow-brand-500/10 ring-2 ring-brand-500/15",
    dot: "#3b6fe0",
  },
  bronze: {
    badge: "bg-[#f7ede2] text-[#8a5a2a]",
    ring: "",
    dot: "#b08d57",
  },
  gold: {
    badge: "bg-[#f8f1e1] text-[#9c7a2e]",
    ring: "border-[#c9a24b] shadow-xl shadow-[#c9a24b]/15 ring-2 ring-[#c9a24b]/20",
    dot: "#c9a24b",
  },
  platinum: {
    badge: "bg-slate-100 text-slate-600",
    ring: "",
    dot: "#94a3b8",
  },
};

function PricingCard({ plan }) {
  const [openSection, setOpenSection] = useState(0);
  const tier = tierStyles[plan.tier] || tierStyles.free;

  return (
    <div
      className={`flex w-full flex-col rounded-3xl border bg-white transition ${
        plan.featured ? tier.ring : "border-navy-950/10"
      }`}
    >
      <div className="border-b border-navy-950/10 p-7">
        <div className="flex items-center justify-between">
          <span
            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide ${tier.badge}`}
          >
            <span className="h-2 w-2 rounded-full" style={{ background: tier.dot }} />
            {plan.name}
          </span>
          {plan.featured && plan.tier !== "free" && (
            <span className="text-[11px] font-bold uppercase tracking-wide text-navy-950/40">
              Most popular
            </span>
          )}
        </div>
        <p className="mt-3 min-h-[42px] text-sm leading-relaxed text-navy-950/60">
          {plan.description}
        </p>
        <div className="mt-4 flex items-baseline gap-1.5">
          <span className="font-mono text-3xl font-bold text-navy-950">{plan.monthlyFee}</span>
          {plan.monthlyFee !== "Free" && <span className="text-xs text-navy-950/50">/ month</span>}
        </div>
        <p className="mt-1 text-xs text-navy-950/40">{plan.monthlyFeeNote}</p>
        {plan.headlineFee && (
          <div className="mt-4 flex items-center justify-between rounded-xl bg-navy-950/[0.04] px-4 py-2.5">
            <span className="text-xs font-semibold text-navy-950/60">
              {plan.headlineFee.label}
            </span>
            <span className="font-mono text-sm font-bold text-navy-950">
              {plan.headlineFee.value}
            </span>
          </div>
        )}
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
                    <div key={row.label} className="flex items-start justify-between gap-4 text-xs">
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

      <div className="p-5">
        <Link
          to="/contact"
          className={`block rounded-full py-3 text-center text-sm font-bold transition ${
            plan.featured
              ? "bg-gradient-to-r from-brand-500 to-brand-600 text-white shadow-lg shadow-brand-600/30 hover:from-brand-400 hover:to-brand-500"
              : "border border-navy-950/15 text-navy-950 hover:border-navy-950/40"
          }`}
        >
          Get started
        </Link>
      </div>
    </div>
  );
}

export default function Pricing() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);
  const category = pricing.categories[activeCategory];

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

        <div className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-2 px-6">
          {pricing.categories.map((cat, i) => {
            const Icon = categoryIcons[cat.id];
            const active = i === activeCategory;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(i)}
                className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                  active
                    ? "bg-navy-950 text-white shadow-lg"
                    : "border border-navy-950/15 text-navy-950/60 hover:border-navy-950/40 hover:text-navy-950"
                }`}
              >
                <Icon size={15} />
                {cat.label}
              </button>
            );
          })}
        </div>

        <p key={category.id} className="mt-6 animate-[fadeIn_.3s_ease] text-center text-sm text-navy-950/50">
          {category.blurb}
        </p>

        <div
          key={`${category.id}-cards`}
          className={`mx-auto mt-10 grid max-w-6xl animate-[fadeIn_.35s_ease] grid-cols-1 gap-6 px-6 lg:px-8 ${
            category.plans.length === 1 ? "lg:max-w-md" : "lg:grid-cols-3"
          }`}
        >
          {category.plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-6xl px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-4 rounded-2xl bg-navy-950 p-6 sm:flex-row sm:items-center">
            <div>
              <p className="text-sm font-bold text-white">{category.salesCta.threshold}</p>
              <p className="mt-1 text-xs text-white/60">{category.salesCta.description}</p>
            </div>
            <Link
              to="/contact"
              className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-white px-5 py-2.5 text-xs font-bold text-navy-950 transition hover:bg-brand-50"
            >
              Talk to Sales
              <ArrowRight size={13} />
            </Link>
          </div>

          <p className="mt-8 whitespace-pre-line border-t border-navy-950/10 pt-6 text-xs leading-relaxed text-navy-950/40">
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
