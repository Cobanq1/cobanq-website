import { Container, PageHero } from "../components/ui";
import { site } from "../site";

/**
 * A plain-English privacy notice covering what the site actually does:
 * two enquiry forms handled by Netlify Forms. If you add analytics, a
 * chat widget or a booking tool later, add it to the list below.
 */

const sections = [
  {
    title: "Who we are",
    body: (
      <>
        <p>
          This website is operated by {site.legalName} ("we", "us"). We are the data controller for
          the personal information you send us through this site.
        </p>
        <p>
          You can contact us about anything on this page by calling {site.contactName} on {site.phone}
          {site.email ? `, or by email at ${site.email}` : ""}.
        </p>
      </>
    ),
  },
  {
    title: "What we collect",
    body: (
      <>
        <p>We only collect what you choose to send us:</p>
        <ul>
          <li>
            <strong>Business enquiries</strong> — your name, company, email, phone number, site
            location and what you've told us about the cover you need.
          </li>
          <li>
            <strong>Officer registrations</strong> — your name, contact details, location, SIA
            licence number and expiry, the roles you can work, your availability and anything else
            you put in the notes.
          </li>
        </ul>
        <p>
          We do not use tracking or advertising cookies on this site, and we do not sell or share
          your details with anyone for marketing.
        </p>
      </>
    ),
  },
  {
    title: "Why we use it",
    body: (
      <ul>
        <li>To answer your enquiry and provide a quote (our legitimate business interest).</li>
        <li>
          To assess your registration, verify your SIA licence on the SIA public register, and
          contact you about shifts (steps taken at your request before entering a contract).
        </li>
        <li>To meet our legal and regulatory obligations as a security provider.</li>
      </ul>
    ),
  },
  {
    title: "Who sees it",
    body: (
      <>
        <p>
          Form submissions are delivered to us by Netlify, who host this website and process the
          form data on our behalf. Nobody else receives your details unless we tell you — for
          example, where a client requires us to confirm the identity and licence of an officer
          working on their site.
        </p>
      </>
    ),
  },
  {
    title: "How long we keep it",
    body: (
      <ul>
        <li>Business enquiries — up to 24 months from your last contact with us.</li>
        <li>
          Officer registrations — for as long as you want to remain on our list, and for a period
          afterwards where we are required to keep vetting records.
        </li>
        <li>Ask us to delete your details at any time and we will, unless the law requires otherwise.</li>
      </ul>
    ),
  },
  {
    title: "Your rights",
    body: (
      <>
        <p>
          You have the right to ask for a copy of the information we hold about you, to have it
          corrected or deleted, and to object to how we use it. Contact us using the details above
          and we'll deal with it within one month.
        </p>
        <p>
          If you're unhappy with how we've handled your information you can complain to the
          Information Commissioner's Office at ico.org.uk.
        </p>
      </>
    ),
  },
];

export default function Privacy() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy policy"
        lead="What we do with the details you send us through this website — in plain English."
      />
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="max-w-3xl space-y-12">
            {sections.map((s) => (
              <div key={s.title}>
                <h2 className="text-2xl text-ink-900">{s.title}</h2>
                <div className="mt-4 space-y-4 text-[16px] leading-relaxed text-ink-500 [&_li]:mt-2 [&_strong]:text-ink-800 [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-6">
                  {s.body}
                </div>
              </div>
            ))}
            <p className="border-t border-ink-100 pt-8 text-sm text-ink-400">
              Last updated {new Date().toLocaleDateString("en-GB", { month: "long", year: "numeric" })}.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
