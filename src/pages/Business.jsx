import { Link } from "react-router-dom";
import { TrendingUp, Landmark, Blocks, ArrowRight, CheckCircle2, Link2 } from "lucide-react";
import { business } from "../content";
import PersonPhoto from "../components/PersonPhoto";

const icons = { TrendingUp, Landmark, Blocks };
const personSeeds = {
  B2B: "Business Owner",
  "Correspondent Banking Partnerships": "Partnerships Manager",
  "Fintech Collaborations": "Fintech Founder",
};

export default function Business() {

  return (
    <>
      <section className="bg-navy-950/[0.02] py-20">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5 text-xs font-semibold text-brand-600">
            {business.eyebrow}
          </span>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-navy-950 sm:text-5xl">
            {business.heading}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-navy-950/60">{business.subhead}</p>
        </div>

        <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-6 px-6 sm:grid-cols-3 lg:px-8">
          {business.cards.map((card) => {
            const Icon = icons[card.icon];
            return (
              <div key={card.title} className="rounded-3xl bg-white p-8 shadow-sm">
                <div className="relative inline-flex">
                  <PersonPhoto seed={personSeeds[card.title]} size={52} />
                  <div className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-brand-500 text-white ring-2 ring-white">
                    <Icon size={12} />
                  </div>
                </div>
                <h3 className="mt-6 text-lg font-bold text-navy-950">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-950/60">{card.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
              {business.whyPartner.heading}
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-navy-950/60">
              {business.whyPartner.paragraph}
            </p>
            <ul className="mt-7 space-y-3">
              {business.whyPartner.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-navy-950/70">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-brand-500" size={18} />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-navy-950 p-10">
            <div
              className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full opacity-60 blur-3xl"
              style={{ background: "linear-gradient(135deg, #3b6fe0, #5b8def)" }}
            />
            <div className="relative flex h-full flex-col items-center justify-center gap-6 py-10 text-center">
              <div className="flex items-center">
                <PersonPhoto seed="CoBanq Partnerships Lead" size={72} className="ring-4 ring-navy-950" />
                <div className="z-10 -mx-2 flex h-9 w-9 items-center justify-center rounded-full bg-brand-500 text-white ring-4 ring-navy-950">
                  <Link2 size={16} />
                </div>
                <PersonPhoto seed="Partner Institution Lead" size={72} className="ring-4 ring-navy-950" />
              </div>
              <p className="text-2xl font-bold text-white">30+ payout corridors</p>
              <p className="max-w-xs text-sm text-white/50">
                And a partnerships team dedicated to helping you launch and grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy-950 py-16">
        <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
            {business.cta.heading}
          </h2>
          <p className="mt-3 text-white/60">{business.cta.subhead}</p>
          <Link
            to={business.cta.primaryCtaTo}
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-brand-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/30 transition hover:from-brand-400 hover:to-brand-500"
          >
            {business.cta.primaryCta}
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
