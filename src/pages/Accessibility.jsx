import { CheckCircle2 } from "lucide-react";
import { accessibility } from "../content";

export default function Accessibility() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-2xl px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-navy-950 sm:text-5xl">
          {accessibility.heading}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-navy-950/60">{accessibility.intro}</p>

        <ul className="mt-8 space-y-3">
          {accessibility.commitments.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-navy-950/70">
              <CheckCircle2 className="mt-0.5 shrink-0 text-brand-500" size={18} />
              {item}
            </li>
          ))}
        </ul>

        <p className="mt-8 text-sm leading-relaxed text-navy-950/50">
          {accessibility.contactNote}
        </p>
      </div>
    </section>
  );
}
