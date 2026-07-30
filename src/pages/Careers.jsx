import { BadgeCheck, CalendarClock, Banknote, TrendingUp, MapPin, Phone } from "lucide-react";
import { Container, PageHero, SectionHeading, Button } from "../components/ui";
import EnquiryForm from "../components/EnquiryForm";
import { OFFICER_FORM, officerFields } from "../forms";
import { site, roles } from "../site";

const perks = [
  {
    icon: CalendarClock,
    title: "Shifts that fit your life",
    body: "Full time, part time, weekends or nights. Tell us what you can work and we'll only call you about shifts that match.",
  },
  {
    icon: Banknote,
    title: "Paid on time, every time",
    body: "Agreed rate before you start the shift, and paid when we said we would. If a shift runs over, you're paid for the time you worked.",
  },
  {
    icon: MapPin,
    title: "Work near you",
    body: "We match officers to sites by area and travel distance, so you're not spending your wage getting there.",
  },
  {
    icon: TrendingUp,
    title: "Room to move up",
    body: "As the company grows, supervisor and site lead roles go to the officers who've shown up and done it properly.",
  },
];

const requirements = [
  "A valid SIA licence for the role you want to work (or one in progress — tell us)",
  "The right to work in the UK",
  "Two contactable references covering your recent employment",
  "A smart appearance and a professional manner on site",
  "Reliability — if you say you'll be there, you're there",
];

export default function Careers() {
  return (
    <>
      <PageHero
        eyebrow="Work with us"
        title="Got your SIA licence? Let's get you working."
        lead="We're building a bank of reliable, licensed officers we can call on as contracts come in. Register your details and we'll be in touch when work comes up in your area."
      >
        <div className="flex flex-wrap gap-3">
          <Button href="#register" size="lg">Register your details</Button>
          <Button href={`tel:${site.phoneLink}`} tone="outlineLight" size="lg">
            <Phone className="h-4 w-4" /> {site.phone}
          </Button>
        </div>
      </PageHero>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Roles we recruit for"
            title="The badges we're looking for."
            lead="Hold one of these and you're worth registering with us — even if you've only just been licensed."
          />
          <div className="mt-10 flex flex-wrap gap-3">
            {roles.map((r) => (
              <span
                key={r}
                className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-ink-50 px-5 py-3 text-sm font-medium text-ink-700"
              >
                <BadgeCheck className="h-4 w-4 text-gold-500" strokeWidth={2.1} />
                {r}
              </span>
            ))}
          </div>

          <p className="mt-8 max-w-2xl text-[15px] leading-relaxed text-ink-500">
            Newly licensed and struggling to get that first shift? Register anyway. Everyone starts
            somewhere, and we would rather train someone keen than inherit someone's bad habits.
          </p>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-ink-950 py-20 sm:py-24">
        <div className="absolute inset-0 bg-hatch" />
        <Container className="relative">
          <SectionHeading tone="light" eyebrow="Why us" title="What you get from working with us." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {perks.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition hover:border-gold-400/40"
              >
                <p.icon className="h-6 w-6 text-gold-400" strokeWidth={1.9} />
                <h3 className="mt-5 text-lg text-white">{p.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-400">{p.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-ink-50 py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading eyebrow="What we ask for" title="What you'll need." />
              <ul className="mt-8 space-y-3">
                {requirements.map((r) => (
                  <li
                    key={r}
                    className="flex items-start gap-3 rounded-xl border border-ink-200 bg-white px-5 py-4 text-[15px] leading-relaxed text-ink-700"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <SectionHeading eyebrow="What happens next" title="After you register." />
              <ol className="mt-8 space-y-6">
                {[
                  ["We check your licence", "We look your SIA licence up on the public register and confirm it covers the role you've applied for."],
                  ["We complete screening", "Identity, right to work and employment history, in line with BS 7858 principles. Have your documents ready and it's quick."],
                  ["We add you to the bank", "You go on our list for your area and the roles you can work."],
                  ["We call when work comes up", "Shift, site, hours and rate — all confirmed before you travel anywhere."],
                ].map(([title, body], i) => (
                  <li key={title} className="flex gap-5">
                    <span className="font-display text-2xl font-extrabold text-ink-200">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="font-semibold text-ink-900">{title}</p>
                      <p className="mt-1.5 text-[15px] leading-relaxed text-ink-500">{body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Container>
      </section>

      <section id="register" className="scroll-mt-24 bg-white py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <SectionHeading
                eyebrow="Register"
                title="Send us your details."
                lead="It takes two minutes. We hold your details so that when a vacancy comes up near you, you're one of the first people we ring."
              />
              <div className="mt-8 rounded-2xl border border-ink-200 bg-ink-50 p-6">
                <p className="text-sm font-semibold text-ink-900">Prefer to talk?</p>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-500">
                  Call or WhatsApp {site.contactName} on{" "}
                  <a href={`tel:${site.phoneLink}`} className="font-semibold text-ink-900 underline">
                    {site.phone}
                  </a>
                  . Have your SIA licence number to hand.
                </p>
              </div>
            </div>

            <EnquiryForm
              formName={OFFICER_FORM}
              fields={officerFields}
              submitLabel="Register my details"
              successNote="Your details are with us. We'll check your licence and get in touch when work comes up in your area."
            />
          </div>
        </Container>
      </section>
    </>
  );
}
