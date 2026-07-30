import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";

// Netlify Forms submission.
//
// The site is a static SPA, so there's no server to post to. Netlify picks
// up submissions posted as urlencoded data to any path, matched by the
// `form-name` field — provided a matching static form exists in index.html
// at deploy time for its build-time detection (see the hidden forms there).
// Set the notification email under Site configuration → Forms → Notifications.
async function submitToNetlify(formName, data) {
  const body = new URLSearchParams({ "form-name": formName, ...data });
  const res = await fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: body.toString(),
  });
  if (!res.ok) throw new Error(`Form POST failed: ${res.status}`);
}

const inputClass =
  "mt-1.5 w-full rounded-xl border border-navy-950/15 bg-white px-4 py-3 text-sm text-navy-950 outline-none transition focus:border-brand-500";

function Field({ field }) {
  const common = {
    name: field.name,
    required: field.required !== false,
    className: inputClass,
    placeholder: field.placeholder,
    autoComplete: field.autoComplete,
  };

  return (
    <label className={`block text-xs font-semibold text-navy-950/60 ${field.wide ? "sm:col-span-2" : ""}`}>
      {field.label}
      {field.type === "textarea" ? (
        <textarea {...common} rows={field.rows || 4} />
      ) : field.type === "select" ? (
        <span className="relative mt-1.5 block">
          <select
            name={field.name}
            required={field.required !== false}
            defaultValue=""
            className="w-full appearance-none rounded-xl border border-navy-950/15 bg-white px-4 py-3 text-sm text-navy-950 outline-none transition focus:border-brand-500"
          >
            <option value="" disabled>
              {field.placeholder}
            </option>
            {field.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <ChevronDown
            size={16}
            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-navy-950/40"
          />
        </span>
      ) : (
        <input type={field.type || "text"} {...common} />
      )}
    </label>
  );
}

export default function EnquiryForm({
  formName,
  fields,
  submitLabel = "Send enquiry",
  successHeading = "Thanks — we've got it",
  successBody = "Our team will come back to you by email.",
  footnote,
}) {
  const [status, setStatus] = useState("idle"); // idle | sending | done | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());
    setStatus("sending");
    try {
      await submitToNetlify(formName, data);
      setStatus("done");
    } catch {
      // Most likely running somewhere Netlify isn't handling the POST.
      setStatus("error");
    }
  };

  if (status === "done") {
    return (
      <div className="flex min-h-[420px] flex-col items-center justify-center rounded-3xl bg-navy-950/[0.03] p-10 text-center">
        <CheckCircle2 className="text-brand-500" size={46} />
        <h3 className="mt-5 text-xl font-bold text-navy-950">{successHeading}</h3>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-navy-950/60">
          {successBody}
        </p>
      </div>
    );
  }

  return (
    <form
      name={formName}
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="rounded-3xl bg-navy-950/[0.03] p-8"
    >
      {/* Netlify needs these two; the honeypot is hidden from real people. */}
      <input type="hidden" name="form-name" value={formName} />
      <p className="hidden">
        <label>
          Leave this empty: <input name="bot-field" />
        </label>
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        {fields.map((field) => (
          <Field key={field.name} field={field} />
        ))}
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-brand-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-600/30 transition hover:from-brand-400 hover:to-brand-500 disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : submitLabel}
        {status !== "sending" && <ArrowRight size={16} />}
      </button>

      {status === "error" && (
        <p className="mt-3 text-center text-xs leading-relaxed text-rose-600">
          That didn't send. Email us directly at{" "}
          <a href="mailto:support@cobanq.com" className="font-semibold underline">
            support@cobanq.com
          </a>{" "}
          and we'll pick it up from there.
        </p>
      )}

      {footnote && <p className="mt-3 text-center text-xs text-navy-950/40">{footnote}</p>}
    </form>
  );
}

// Shared "or reach us another way" block, so enquiry pages don't dead-end
// if someone would rather just email.
export function ContactFallback({ email }) {
  return (
    <p className="mt-4 text-center text-xs text-navy-950/45">
      Prefer email?{" "}
      <a href={`mailto:${email}`} className="font-semibold text-brand-600 hover:underline">
        {email}
      </a>{" "}
      ·{" "}
      <Link to="/contact" className="font-semibold text-brand-600 hover:underline">
        General contact
      </Link>
    </p>
  );
}
