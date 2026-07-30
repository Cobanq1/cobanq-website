import { Handshake, Clock3, ReceiptText, ClipboardList, PhoneCall, ShieldCheck } from "lucide-react";
import { Container, PageHero, SectionHeading, Button } from "../components/ui";
import EnquiryForm from "../components/EnquiryForm";
import { CLIENT_FORM, clientFields } from "../forms";
import { site, sectors, accreditation } from "../site";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Licensed and checked, every time",
    body: "Officers are verified on the SIA public register before deployment and screened to BS 7858 principles. Records are kept and available if your client audits you.",
  },
  {
    icon: Clock3,
    title: "Short notice is normal for us",
    body: "Sick cover, a contract that starts Monday, a site that suddenly needs a night guard — tell us the hours and we'll tell you straight away whether we can fill them.",
  },
  {
    icon: Handshake,
    title: "Built for subcontracting",
    body: "We already work under larger security contractors. We'll follow your assignment instructions, wear your branding where required, and report the way you need us to.",
  },
  {
    icon: ReceiptText,
    title: "Clear rates, clear invoices",
    body: "An hourly rate agreed up front, with weekend, bank holiday and night uplifts stated before anyone starts. No surprise line items.",
  },
  {
    icon: ClipboardList,
    title: "Paperwork that stands up",
    body: "Signed-in shifts, incident reports, patrol logs and handover notes — the evidence you need if something is ever disputed.",
  },
  {
    icon: PhoneCall,
    title: "One named contact",
    body: `You deal with ${site.contactName} directly. No call centre, no ticket number — a phone that gets answered.`,
  },
];

export default function Clients() {
  return (
    <>
      <PageHero
        eyebrow="For businesses & security contractors"
        title="Cover you can put your name to."
        lead="We supply licensed security staff to businesses across the UK, and take subcontract work from other security companies who need dependable people at short notice."
      >
        <Button href="#enquiry" size="lg">Get a quote</Button>
      </PageHero>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Why work with us"
            title="What you get when you put us on a site."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((r) => (
              <div key={r.title} className="rounded-2xl border border-ink-200 bg-white p-7">
                <r.icon className="h-6 w-6 text-gold-500" strokeWidth={1.9} />
                <h3 className="mt-5 text-lg text-ink-900">{r.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-500">{r.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Subcontract block — this is the commercial pitch to other providers. */}
      <section className="relative overflow-hidden bg-ink-950 py-20 sm:py-24">
        <div className="absolute inset-0 bg-hatch" />
        <div className="pointer-events-none absolute -top-24 right-0 h-80 w-80 rounded-full bg-gold-500/10 blur-[100px]" />
        <Container className="relative">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <SectionHeading
                tone="light"
                eyebrow="Subcontract partnerships"
                title="Already have the contract? We'll help you staff it."
                lead="If you're an established security company carrying more work than your rota can take, we can pick up sites, shifts or whole rotas under your contract."
              />
              <Button href="#enquiry" className="mt-8">
                Discuss a subcontract
              </Button>
            </div>
            <ul className="space-y-4">
              {[
                "Overflow and holiday cover on existing contracts",
                "Whole-site cover under your assignment instructions",
                "Specialist cover — dog units, CCTV operators, fire marshals",
                "Weekend, night and bank holiday shifts others won't take",
                "Your uniform and branding where the contract requires it",
                "Direct line to a decision maker, not an account queue",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-4 text-[15px] text-ink-200"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-12 rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-sm leading-relaxed text-ink-400">
            <strong className="text-white">Being straight with you: </strong>
            {accreditation.acsStatus}
          </p>
        </Container>
      </section>

      <section className="bg-ink-50 py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Sectors" title="Where our officers work." align="center" />
          <div className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-2.5">
            {sectors.map((s) => (
              <span
                key={s}
                className="rounded-full border border-ink-200 bg-white px-4 py-2.5 text-sm text-ink-600"
              >
                {s}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <section id="enquiry" className="scroll-mt-24 bg-white py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <SectionHeading
                eyebrow="Request a quote"
                title="Tell us what needs covering."
                lead="Fill this in and we'll come back with a rate and availability. If it's urgent, phone instead — that's always faster."
              />
              <a
                href={`tel:${site.phoneLink}`}
                className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-ink-200 bg-ink-50 px-6 py-5 transition hover:border-ink-400"
              >
                <PhoneCall className="h-5 w-5 text-gold-500" strokeWidth={2} />
                <span>
                  <span className="block text-xs uppercase tracking-[0.16em] text-ink-500">
                    {site.contactName} · {site.contactRole}
                  </span>
                  <span className="text-xl font-bold text-ink-900">{site.phone}</span>
                </span>
              </a>
            </div>

            <EnquiryForm
              formName={CLIENT_FORM}
              fields={clientFields}
              submitLabel="Send enquiry"
              successNote="We'll review the details and come back to you with availability and a rate."
            />
          </div>
        </Container>
      </section>
    </>
  );
}
