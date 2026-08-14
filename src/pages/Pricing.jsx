import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ArrowRight, Check, Laptop, Building2, Users } from "lucide-react";
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

// Big clean price like "£49" with any pence rendered small — extra-bold
// Manrope numerals, per the reference the user supplied.
function Price({ value }) {
  const match = value.match(/^([£$€]?)(\d[\d,]*)(?:\.(\d+))?$/);
  if (!match) {
    return (
      <span className="font-num text-4xl font-extrabold tracking-tight text-navy-950">
        {value}
      </span>
    );
  }
  const [, symbol, integer, decimals] = match;
  return (
    <span className="font-num font-extrabold tracking-tight text-navy-950">
      {symbol && <span className="align-top text-2xl">{symbol}</span>}
      <span className="text-5xl">{integer}</span>
      {decimals && <span className="text-lg text-navy-950/70">.{decimals}</span>}
    </span>
  );
}

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
          <Price value={plan.monthlyFee} />
          {plan.monthlyFee !== "Free" && (
            <span className="text-xs text-navy-950/50">per month</span>
          )}
        </div>
        <p className="mt-1 text-xs text-navy-950/40">{plan.monthlyFeeNote}</p>
        {plan.headlineFee && (
          <div className="mt-4 flex items-center justify-between rounded-xl bg-navy-950/[0.04] px-4 py-2.5">
            <span className="text-xs font-semibold text-navy-950/60">
              {plan.headlineFee.label}
            </span>
            <span className="font-num text-sm font-extrabold text-navy-950">
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
                      <span className="font-num shrink-0 font-bold text-brand-600">
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

// Competitor-style pricing for the corporate schedule: three plan cards
// over one full comparison table. Values come straight from the CoBanq
// Standard Pricing for Corporates schedule.
function ComparisonPricing({ category }) {
  const [active, setActive] = useState(1); // mobile column selector

  return (
    <div className="mx-auto mt-10 max-w-6xl animate-[fadeIn_.35s_ease] px-6 lg:px-8">
      {/* Plan cards */}
      <div className="grid gap-5 lg:grid-cols-3">
        {category.tiers.map((t) => {
          const tier = tierStyles[t.tier] || tierStyles.free;
          return (
            <div
              key={t.name}
              className={`rounded-3xl border bg-white p-7 transition ${
                t.featured ? tier.ring : "border-navy-950/10"
              }`}
            >
              <span
                className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide ${tier.badge}`}
              >
                <span className="h-2 w-2 rounded-full" style={{ background: tier.dot }} />
                {t.name}
              </span>
              <p className="mt-4 text-sm text-navy-950/60">{t.description}</p>
              <div className="mt-5 flex items-baseline gap-2">
                <Price value={t.monthlyFee} />
                <span className="text-sm text-navy-950/50">{t.monthlyFeeNote}</span>
              </div>
              <ul className="mt-6 grid gap-2 border-t border-navy-950/[0.08] pt-5">
                {t.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2.5 text-sm font-semibold text-navy-950/75">
                    <Check size={15} className="shrink-0 text-brand-500" strokeWidth={2.5} />
                    {h}
                  </li>
                ))}
              </ul>
              <Link
                to="/business-enquiry"
                className={`mt-7 flex w-full items-center justify-center gap-2 rounded-full py-3 text-sm font-bold transition ${
                  t.featured
                    ? "bg-navy-950 text-white hover:bg-navy-800"
                    : "border border-navy-950/15 text-navy-950 hover:bg-navy-950/[0.03]"
                }`}
              >
                Get started
                <ArrowRight size={15} />
              </Link>
            </div>
          );
        })}
      </div>

      {/* Capability strip */}
      <div className="mt-6 grid gap-px overflow-hidden rounded-2xl bg-navy-950/10 sm:grid-cols-3">
        {category.pillars.map((p) => (
          <div key={p.key} className="bg-white px-6 py-4 text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-600">{p.key}</p>
            <p className="mt-1 text-sm font-semibold text-navy-950/70">{p.title}</p>
          </div>
        ))}
      </div>

      {/* Mobile tier selector — three columns won't fit a phone */}
      <div className="mt-10 grid grid-cols-3 gap-2 lg:hidden">
        {category.tiers.map((t, i) => (
          <button
            key={t.name}
            type="button"
            onClick={() => setActive(i)}
            aria-pressed={i === active}
            className={`rounded-xl px-3 py-2.5 text-xs font-bold transition ${
              i === active
                ? "bg-navy-950 text-white"
                : "border border-navy-950/15 text-navy-950/60"
            }`}
          >
            {t.name}
          </button>
        ))}
      </div>

      {/* Comparison table */}
      <div className="mt-6 overflow-hidden rounded-3xl border border-navy-950/10">
        {/* Desktop header */}
        <div className="hidden grid-cols-[1.6fr_repeat(3,1fr)] bg-navy-950 lg:grid">
          <div className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-white/50">
            Service
          </div>
          {category.tiers.map((t) => (
            <div key={t.name} className="px-6 py-4 text-center">
              <span className="text-sm font-bold text-white">{t.name}</span>
            </div>
          ))}
        </div>

        {category.comparison.map((group) => (
          <div key={group.title}>
            <div className="border-y border-navy-950/[0.08] bg-navy-950/[0.03] px-6 py-2.5">
              <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-navy-950/50">
                {group.title}
              </p>
            </div>
            {group.rows.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-[1fr_auto] items-center gap-4 border-b border-navy-950/[0.06] px-6 py-3.5 last:border-b-0 lg:grid-cols-[1.6fr_repeat(3,1fr)] lg:gap-0"
              >
                <span className="text-sm text-navy-950/75">{row.label}</span>
                {/* Mobile: only the selected tier */}
                <span className="font-num text-sm font-bold text-navy-950 lg:hidden">
                  {row.values[active]}
                </span>
                {/* Desktop: all three */}
                {row.values.map((value, i) => (
                  <span
                    key={i}
                    className={`hidden text-center font-num text-sm font-bold lg:block ${
                      category.tiers[i].featured ? "text-navy-950" : "text-navy-950/70"
                    }`}
                  >
                    {value}
                  </span>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>

      <p className="mt-4 text-xs leading-relaxed text-navy-950/45">{category.bacsNote}</p>

      {/* Pricing notes */}
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {category.notes.map((note) => (
          <div key={note.title} className="rounded-2xl border border-navy-950/10 p-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-600">
              {note.title}
            </p>
            <p className="mt-2.5 text-sm leading-relaxed text-navy-950/60">{note.body}</p>
          </div>
        ))}
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

        {category.layout === "comparison" ? (
          <ComparisonPricing key={category.id} category={category} />
        ) : (
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
        )}

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

          {category.layout !== "comparison" && (
            <p className="mt-8 whitespace-pre-line border-t border-navy-950/10 pt-6 text-xs leading-relaxed text-navy-950/40">
              {pricing.footnote}
            </p>
          )}
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
