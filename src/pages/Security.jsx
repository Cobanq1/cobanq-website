import { ShieldCheck, Lock, KeyRound, Fingerprint, FileCheck2, Eye } from "lucide-react";
import { security } from "../content";

const icons = { ShieldCheck, Lock, KeyRound, Fingerprint, FileCheck2, Eye };

export default function Security() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-950 py-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            background:
              "radial-gradient(600px circle at 85% 30%, rgba(91,141,239,0.3), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-brand-400">
            {security.eyebrow}
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            {security.heading}
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/60">
            {security.subhead}
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">
          {security.pillars.map((pillar) => {
            const Icon = icons[pillar.icon];
            return (
              <div key={pillar.title} className="rounded-3xl border border-navy-950/10 p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 text-white">
                  <Icon size={20} />
                </div>
                <h3 className="mt-5 text-base font-bold text-navy-950">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-950/60">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
