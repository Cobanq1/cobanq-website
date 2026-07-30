import { useState } from "react";
import { Users, Building2, Landmark, ArrowRight, CheckCircle2 } from "lucide-react";
import { audienceTabs } from "../content";
import PersonPhoto from "./PersonPhoto";
import SmartLink from "./SmartLink";

const icons = { Users, Building2, Landmark };
const avatarSeeds = {
  individuals: "Individual Customer",
  business: "Business Owner",
  partners: "Partnerships Manager",
};

export default function AudienceTabs() {
  const [activeId, setActiveId] = useState(audienceTabs[0].id);
  const active = audienceTabs.find((tab) => tab.id === activeId);

  return (
    <section className="bg-navy-950/[0.02] py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <h2 className="text-center text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
          Who CoBanq is built for
        </h2>

        <div className="mx-auto mt-10 flex max-w-xl flex-wrap justify-center gap-2 rounded-full bg-white p-1.5 shadow-sm">
          {audienceTabs.map((tab) => {
            const Icon = icons[tab.icon];
            const isActive = tab.id === activeId;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveId(tab.id)}
                className={`flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition ${
                  isActive
                    ? "bg-navy-950 text-white shadow"
                    : "text-navy-950/60 hover:text-navy-950"
                }`}
              >
                <Icon size={15} />
                {tab.label}
              </button>
            );
          })}
        </div>

        <div
          key={active.id}
          className="mt-10 grid animate-[fadeIn_0.4s_ease] gap-8 rounded-3xl bg-white p-10 shadow-sm sm:grid-cols-2 sm:p-12"
        >
          <div>
            <PersonPhoto seed={avatarSeeds[active.id]} size={56} />
            <h3 className="mt-4 text-2xl font-bold text-navy-950">{active.headline}</h3>
            <p className="mt-4 text-sm leading-relaxed text-navy-950/60">{active.description}</p>
            <SmartLink
              to={active.cta.to}
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/30 transition hover:from-brand-400 hover:to-brand-500"
            >
              {active.cta.label}
              <ArrowRight size={15} />
            </SmartLink>
          </div>

          <ul className="flex flex-col justify-center gap-4">
            {active.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3 text-sm text-navy-950/70">
                <CheckCircle2 className="mt-0.5 shrink-0 text-brand-500" size={18} />
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
