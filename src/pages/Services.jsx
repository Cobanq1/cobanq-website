import { ShieldCheck, KeyRound, Cctv, Dog, Flame, Check, Phone } from "lucide-react";
import { Container, PageHero, Button } from "../components/ui";
import { services, site } from "../site";

const icons = { ShieldCheck, KeyRound, Cctv, Dog, Flame };

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Licensed security cover, five ways."
        lead="Every service below is delivered by officers holding the correct SIA licence for the role. Mix and match them across a site, or take a single service on its own."
      >
        <div className="flex flex-wrap gap-3">
          <Button to="/contact" size="lg">Request a quote</Button>
          <Button href={`tel:${site.phoneLink}`} tone="outlineLight" size="lg">
            <Phone className="h-4 w-4" /> {site.phone}
          </Button>
        </div>
      </PageHero>

      <div className="bg-white">
        {services.map((s, i) => {
          const Icon = icons[s.icon];
          const shaded = i % 2 === 1;
          return (
            <section
              key={s.slug}
              id={s.slug}
              className={`scroll-mt-24 border-b border-ink-100 py-16 sm:py-20 ${
                shaded ? "bg-ink-50" : "bg-white"
              }`}
            >
              <Container>
                <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
                  <div>
                    <div className="flex items-center gap-4">
                      <span className="inline-flex rounded-xl bg-ink-900 p-3">
                        <Icon className="h-6 w-6 text-gold-400" strokeWidth={1.9} />
                      </span>
                      <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold-600">
                        Service {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h2 className="mt-6 text-balance text-3xl leading-tight text-ink-900">{s.title}</h2>
                    <p className="mt-5 text-[17px] leading-relaxed text-ink-500">{s.blurb}</p>
                    <Button to="/contact" tone="outlineDark" className="mt-8">
                      Enquire about {s.title.toLowerCase()}
                    </Button>
                  </div>

                  <ul className="space-y-3 self-start rounded-2xl border border-ink-200 bg-white p-6 sm:p-7">
                    <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-ink-400">
                      Typically includes
                    </p>
                    {s.points.map((p) => (
                      <li key={p} className="flex gap-3 text-[15px] leading-relaxed text-ink-700">
                        <Check className="mt-0.5 h-4.5 w-4.5 shrink-0 text-gold-500" strokeWidth={2.4} />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </Container>
            </section>
          );
        })}
      </div>

      <section className="relative overflow-hidden bg-ink-950 py-20">
        <div className="absolute inset-0 bg-hatch" />
        <Container className="relative text-center">
          <h2 className="mx-auto max-w-2xl text-balance text-3xl leading-tight text-white sm:text-4xl">
            Not sure which of these you need?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-[17px] leading-relaxed text-ink-200/70">
            Describe the site and the problem. We'll tell you honestly what cover it warrants — and
            what it doesn't.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href={`tel:${site.phoneLink}`} size="lg">
              <Phone className="h-4 w-4" /> Call {site.contactName}
            </Button>
            <Button to="/contact" tone="outlineLight" size="lg">
              Send an enquiry
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
