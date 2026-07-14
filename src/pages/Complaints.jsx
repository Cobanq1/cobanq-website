import { complaints } from "../content";

export default function Complaints() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-2xl px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-navy-950 sm:text-5xl">
          {complaints.heading}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-navy-950/60">{complaints.intro}</p>

        <div className="mt-10 space-y-6">
          {complaints.steps.map((step) => (
            <div key={step.title} className="rounded-2xl border border-navy-950/10 p-6">
              <h3 className="text-base font-bold text-navy-950">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-950/60">{step.description}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs leading-relaxed text-navy-950/35">
          {complaints.placeholderNote}
        </p>
      </div>
    </section>
  );
}
