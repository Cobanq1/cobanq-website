import { LifeBuoy, Building2, ShieldCheck, Mail, MapPin } from "lucide-react";
import { contact, site } from "../content";
import EnquiryForm from "../components/EnquiryForm";
import PersonPhoto from "../components/PersonPhoto";

const icons = { LifeBuoy, Building2, ShieldCheck };
const personSeeds = {
  "Support Center": "Support Agent",
  "Business & Partnerships": "Partnerships Manager",
  "Regulatory & Compliance": "Compliance Officer",
};

const contactFields = [
  { name: "name", label: "Name", autoComplete: "name", wide: true },
  { name: "email", label: "Email", type: "email", autoComplete: "email", wide: true },
  { name: "message", label: "Message", type: "textarea", wide: true },
];

export default function Contact() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-navy-950 sm:text-5xl">
          {contact.heading}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-navy-950/60">{contact.subhead}</p>
      </div>

      <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-5 px-6 sm:grid-cols-3 lg:px-8">
        {contact.cards.map((card) => {
          const Icon = icons[card.icon];
          return (
            <div key={card.title} className="rounded-2xl border border-navy-950/10 p-6">
              <div className="relative inline-flex">
                <PersonPhoto seed={personSeeds[card.title]} size={44} />
                <div className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand-500 text-white ring-2 ring-white">
                  <Icon size={10} />
                </div>
              </div>
              <h3 className="mt-4 text-sm font-bold text-navy-950">{card.title}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-navy-950/60">{card.description}</p>
            </div>
          );
        })}
      </div>

      <div className="mx-auto mt-14 grid max-w-5xl gap-10 px-6 lg:grid-cols-2 lg:px-8">
        <EnquiryForm
          formName="contact"
          fields={contactFields}
          submitLabel="Send message"
          successHeading="Message sent"
          successBody="Thanks — we'll reply by email."
        />

        <div className="flex flex-col justify-center gap-6">
          <div className="flex items-start gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-950 text-white">
              <Mail size={18} />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-navy-950/40">
                Email
              </p>
              <p className="mt-1 text-sm font-semibold text-navy-950">{contact.email}</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-950 text-white">
              <MapPin size={18} />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-navy-950/40">
                Registered office
              </p>
              <p className="mt-1 max-w-xs text-sm font-semibold text-navy-950">{contact.address}</p>
            </div>
          </div>
          <p className="text-xs leading-relaxed text-navy-950/40">
            {site.legalName} is regulated by the Financial Conduct Authority (FCA), registration
            no. {site.fcaNumber}. {site.name} is not a bank.
          </p>
        </div>
      </div>
    </section>
  );
}
