import { ShieldCheck, CalendarCheck, Globe, Building2 } from "lucide-react";
import { trustBar } from "../content";

const icons = { ShieldCheck, CalendarCheck, Globe, Building2 };

// One accent hue per badge so the strip reads warm and scannable
// instead of four identical blue tiles.
const accents = [
  "bg-emerald-50 text-emerald-600",
  "bg-violet-50 text-violet-600",
  "bg-sky-50 text-sky-600",
  "bg-amber-50 text-amber-600",
];

export default function TrustBar() {
  return (
    <section className="border-b border-navy-950/5 bg-white py-12">
      <p className="text-center text-xs font-semibold uppercase tracking-widest text-navy-950/40">
        {trustBar.heading}
      </p>

      <div className="mx-auto mt-8 grid max-w-4xl grid-cols-2 gap-4 px-6 sm:grid-cols-4 lg:px-8">
        {trustBar.badges.map((badge, i) => {
          const Icon = icons[badge.icon];
          return (
            <div
              key={badge.label}
              className="flex flex-col items-center gap-2.5 rounded-2xl border border-navy-950/10 px-4 py-5 text-center transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <span
                className={`flex h-10 w-10 items-center justify-center rounded-full ${accents[i % accents.length]}`}
              >
                <Icon size={19} />
              </span>
              <span className="text-xs font-semibold text-navy-950/70">{badge.label}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
