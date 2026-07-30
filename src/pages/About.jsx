import { about, site } from "../content";
import TrustStats from "../components/TrustStats";
import PersonPhoto from "../components/PersonPhoto";

const teamSeeds = ["CoBanq Compliance Lead", "CoBanq Legal Counsel", "CoBanq Regulatory Officer"];

export default function About() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-950 py-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            background:
              "radial-gradient(600px circle at 80% 20%, rgba(91,141,239,0.3), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            {about.heading}{" "}
            <span className="bg-gradient-to-r from-brand-400 to-brand-500 bg-clip-text text-transparent">
              {about.headingAccent}
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/60">{about.intro}</p>
        </div>
      </section>

      <TrustStats />

      <section className="border-t border-navy-950/5 bg-white py-20">
        <div className="mx-auto grid max-w-5xl gap-10 px-6 lg:grid-cols-[220px_1fr] lg:px-8">
          <div className="flex h-56 flex-col items-center justify-center gap-4 rounded-3xl bg-navy-950 lg:h-full">
            <div className="flex -space-x-4">
              {teamSeeds.map((seed) => (
                <PersonPhoto
                  key={seed}
                  seed={seed}
                  size={56}
                  className="ring-4 ring-navy-950"
                />
              ))}
            </div>
            <p className="px-4 text-center text-xs font-semibold text-white/40">
              Our compliance &amp; legal team
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-navy-950">
              {about.licensing.heading}
            </h2>
            <div className="mt-5 space-y-4">
              {about.licensing.paragraphs.map((p, i) => (
                <p key={i} className="text-sm leading-relaxed text-navy-950/70">
                  {p}
                </p>
              ))}
            </div>

            <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-navy-950/10 pt-8 sm:grid-cols-3">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-widest text-navy-950/40">
                  FCA Registration
                </dt>
                <dd className="mt-1 text-sm font-bold text-navy-950">{site.fcaNumber}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-widest text-navy-950/40">
                  Company No.
                </dt>
                <dd className="mt-1 text-sm font-bold text-navy-950">{site.companyNumber}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-widest text-navy-950/40">
                  Founded
                </dt>
                <dd className="mt-1 text-sm font-bold text-navy-950">2003</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}
