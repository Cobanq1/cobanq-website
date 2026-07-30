import { Check, Mail, MapPin } from "lucide-react";
import { businessEnquiry, site } from "../content";
import EnquiryForm, { ContactFallback } from "../components/EnquiryForm";

const fields = [
  { name: "name", label: "Your name", autoComplete: "name" },
  { name: "company", label: "Company", autoComplete: "organization" },
  { name: "email", label: "Work email", type: "email", autoComplete: "email" },
  { name: "phone", label: "Phone (optional)", type: "tel", required: false, autoComplete: "tel" },
  {
    name: "interest",
    label: "What do you need?",
    type: "select",
    placeholder: "Select an area",
    options: [
      "Cross-border business payments",
      "Multi-currency accounts",
      "Payroll for a distributed team",
      "White-label programme",
      "Correspondent banking / partnership",
      "Something else",
    ],
    wide: true,
  },
  {
    name: "corridors",
    label: "Corridors or currencies (optional)",
    required: false,
    placeholder: "e.g. UK → Pakistan, GBP/PKR",
    wide: true,
  },
  {
    name: "volume",
    label: "Expected monthly volume",
    type: "select",
    placeholder: "Select a range",
    options: ["Under £50k", "£50k – £250k", "£250k – £1m", "More than £1m", "Not sure yet"],
    wide: true,
  },
  {
    name: "message",
    label: "Anything else we should know?",
    type: "textarea",
    required: false,
    placeholder: "Your business, where you're trading, and what you're trying to solve.",
    wide: true,
  },
];

export default function BusinessEnquiry() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-600">
          {businessEnquiry.eyebrow}
        </p>
        <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-navy-950 sm:text-5xl">
          {businessEnquiry.heading}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-navy-950/60">
          {businessEnquiry.subhead}
        </p>
      </div>

      <div className="mx-auto mt-14 grid max-w-5xl gap-12 px-6 lg:grid-cols-[1fr_1.2fr] lg:gap-16 lg:px-8">
        <div>
          <ul className="grid gap-3">
            {businessEnquiry.points.map((point) => (
              <li key={point} className="flex gap-3">
                <Check size={17} className="mt-0.5 shrink-0 text-brand-500" strokeWidth={2.5} />
                <span className="text-sm leading-relaxed text-navy-950/70">{point}</span>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-sm font-semibold text-navy-950/70">
            {businessEnquiry.responseNote}
          </p>

          <div className="mt-8 grid gap-5 border-t border-navy-950/[0.08] pt-8">
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-950 text-white">
                <Mail size={18} />
              </span>
              <div>
                <p className="text-sm font-bold text-navy-950">Email</p>
                <a
                  href={`mailto:${site.supportEmail}`}
                  className="text-sm text-brand-600 hover:underline"
                >
                  {site.supportEmail}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-950 text-white">
                <MapPin size={18} />
              </span>
              <div>
                <p className="text-sm font-bold text-navy-950">Registered office</p>
                <p className="text-sm leading-relaxed text-navy-950/60">{site.registeredAddress}</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold text-navy-950">{businessEnquiry.formHeading}</h2>
          <p className="mt-1.5 text-sm text-navy-950/55">{businessEnquiry.formSub}</p>
          <div className="mt-5">
            <EnquiryForm
              formName="business-enquiry"
              fields={fields}
              submitLabel={businessEnquiry.submit}
              successHeading={businessEnquiry.successHeading}
              successBody={businessEnquiry.successBody}
            />
            <ContactFallback email={site.supportEmail} />
          </div>
        </div>
      </div>
    </section>
  );
}
