import { Phone, MessageCircle, Mail, Clock, MapPin, UserPlus } from "lucide-react";
import { Container, PageHero, SectionHeading, Button } from "../components/ui";
import EnquiryForm from "../components/EnquiryForm";
import { CLIENT_FORM, clientFields } from "../forms";
import { site } from "../site";

export default function Contact() {
  const waNumber = site.phoneLink.replace("+", "");

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to us."
        lead={`Ask for ${site.contactName}. For anything urgent — a site that needs covering tonight, an alarm activation, a shift that's just gone down — phone rather than email.`}
      />

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <a
              href={`tel:${site.phoneLink}`}
              className="group rounded-2xl border border-ink-200 bg-ink-900 p-7 transition hover:border-gold-400"
            >
              <Phone className="h-6 w-6 text-gold-400" strokeWidth={1.9} />
              <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.2em] text-gold-400">
                Call us
              </p>
              <p className="mt-2 text-2xl font-bold text-white">{site.phone}</p>
              <p className="mt-2 text-sm text-ink-400">
                {site.contactName} · {site.contactRole}
              </p>
            </a>

            {site.whatsapp && (
              <a
                href={`https://wa.me/${waNumber}`}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-ink-200 bg-white p-7 transition hover:border-gold-400"
              >
                <MessageCircle className="h-6 w-6 text-gold-500" strokeWidth={1.9} />
                <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.2em] text-gold-600">
                  WhatsApp
                </p>
                <p className="mt-2 text-2xl font-bold text-ink-900">Message us</p>
                <p className="mt-2 text-sm text-ink-500">
                  Handy for sending site details or a licence photo.
                </p>
              </a>
            )}

            {site.email && (
              <a
                href={`mailto:${site.email}`}
                className="rounded-2xl border border-ink-200 bg-white p-7 transition hover:border-gold-400"
              >
                <Mail className="h-6 w-6 text-gold-500" strokeWidth={1.9} />
                <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.2em] text-gold-600">
                  Email
                </p>
                <p className="mt-2 break-all text-lg font-bold text-ink-900">{site.email}</p>
              </a>
            )}

            <div className="rounded-2xl border border-ink-200 bg-white p-7">
              <Clock className="h-6 w-6 text-gold-500" strokeWidth={1.9} />
              <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.2em] text-gold-600">
                Hours
              </p>
              <p className="mt-2 text-lg font-bold text-ink-900">Office 8am – 8pm, 7 days</p>
              <p className="mt-2 text-sm text-ink-500">
                Live sites and alarm response are covered 24 hours.
              </p>
            </div>

            <div className="rounded-2xl border border-ink-200 bg-white p-7">
              <MapPin className="h-6 w-6 text-gold-500" strokeWidth={1.9} />
              <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.2em] text-gold-600">
                Coverage
              </p>
              <p className="mt-2 text-lg font-bold text-ink-900">{site.coverage}</p>
            </div>

            <div className="rounded-2xl border border-dashed border-ink-300 bg-ink-50 p-7">
              <UserPlus className="h-6 w-6 text-ink-600" strokeWidth={1.9} />
              <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.2em] text-ink-500">
                Looking for work?
              </p>
              <p className="mt-2 text-lg font-bold text-ink-900">Officers register here</p>
              <Button to="/careers" tone="outlineDark" className="mt-4">
                Register your details
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-ink-50 py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionHeading
              eyebrow="Enquiry form"
              title="Or send us the details."
              lead="Tell us what you need covering and we'll come back with availability and a rate. Officers looking for shifts should use the registration form instead — it asks the right questions."
            />
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
