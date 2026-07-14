import { useState } from "react";
import { LifeBuoy, Building2, ShieldCheck, Mail, MapPin, CheckCircle2, ArrowRight } from "lucide-react";
import { contact, site } from "../content";

const icons = { LifeBuoy, Building2, ShieldCheck };

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 text-sm font-bold text-navy-950">{card.title}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-navy-950/60">{card.description}</p>
            </div>
          );
        })}
      </div>

      <div className="mx-auto mt-14 grid max-w-5xl gap-10 px-6 lg:grid-cols-2 lg:px-8">
        <div className="rounded-3xl bg-navy-950/[0.03] p-8">
          {submitted ? (
            <div className="flex h-full flex-col items-center justify-center py-10 text-center">
              <CheckCircle2 className="text-brand-500" size={44} />
              <h3 className="mt-4 text-lg font-bold text-navy-950">Message sent</h3>
              <p className="mt-2 text-sm text-navy-950/60">
                This is a placeholder form — connect it to your real inbox or support system
                whenever it's ready.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-navy-950/60">Name</label>
                <input
                  required
                  type="text"
                  className="mt-1.5 w-full rounded-xl border border-navy-950/15 px-4 py-3 text-sm outline-none transition focus:border-brand-500"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-navy-950/60">Email</label>
                <input
                  required
                  type="email"
                  className="mt-1.5 w-full rounded-xl border border-navy-950/15 px-4 py-3 text-sm outline-none transition focus:border-brand-500"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-navy-950/60">Message</label>
                <textarea
                  required
                  rows={4}
                  className="mt-1.5 w-full rounded-xl border border-navy-950/15 px-4 py-3 text-sm outline-none transition focus:border-brand-500"
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-brand-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/30 transition hover:from-brand-400 hover:to-brand-500"
              >
                Send message
                <ArrowRight size={16} />
              </button>
            </form>
          )}
        </div>

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
