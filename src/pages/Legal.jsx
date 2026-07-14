import { legalPages } from "../content";

export default function Legal({ page }) {
  const data = legalPages[page];
  if (!data) return null;

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-2xl px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-navy-950 sm:text-5xl">
          {data.heading}
        </h1>
        <p className="mt-3 text-sm text-navy-950/40">{data.updated}</p>

        <div className="mt-10 space-y-8">
          {data.sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-lg font-bold text-navy-950">{section.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-navy-950/60">{section.body}</p>
            </div>
          ))}
        </div>

        <p className="mt-12 rounded-xl bg-navy-950/[0.03] p-4 text-xs leading-relaxed text-navy-950/40">
          This page is placeholder legal copy generated for this redesign — it is not real legal
          advice or binding terms. Replace it with text reviewed by your legal/compliance team
          before launch.
        </p>
      </div>
    </section>
  );
}
