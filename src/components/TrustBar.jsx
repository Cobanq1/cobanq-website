import { ShieldCheck, CalendarCheck, Globe, Building2 } from "lucide-react";
import { trustBar } from "../content";

const icons = { ShieldCheck, CalendarCheck, Globe, Building2 };

export default function TrustBar() {
  return (
    <section className="border-b border-navy-950/5 bg-white py-12">
      <p className="text-center text-xs font-semibold uppercase tracking-widest text-navy-950/40">
        {trustBar.heading}
      </p>

      <div className="mx-auto mt-8 grid max-w-4xl grid-cols-2 gap-4 px-6 sm:grid-cols-4 lg:px-8">
        {trustBar.badges.map((badge) => {
          const Icon = icons[badge.icon];
          return (
            <div
              key={badge.label}
              className="flex flex-col items-center gap-2 rounded-2xl border border-navy-950/10 px-4 py-5 text-center"
            >
              <Icon className="text-brand-500" size={20} />
              <span className="text-xs font-semibold text-navy-950/70">{badge.label}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
