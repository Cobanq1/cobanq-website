import { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { Button } from "./ui";
import { site } from "../site";

/**
 * Netlify Forms submitter.
 *
 * Netlify registers forms by scanning the HTML it receives at build time, and
 * a React app renders its forms in JavaScript where that scanner can't see
 * them. index.html therefore carries a hidden static copy of each form —
 * KEEP THE `name` AND FIELD NAMES BELOW IN SYNC WITH THOSE COPIES, or
 * submissions will 404.
 *
 * Where the submissions land is set in Netlify:
 *   Site configuration → Forms → Form notifications → add an email address.
 */

const encode = (data) =>
  Object.keys(data)
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(data[k])}`)
    .join("&");

const inputCls =
  "w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-[15px] text-ink-900 " +
  "placeholder:text-ink-400 transition focus:border-gold-400 focus:outline-none " +
  "focus:ring-4 focus:ring-gold-400/15";

function Field({ field, value, onChange }) {
  const { name, label, type = "text", placeholder, options, required, help, full } = field;
  const id = `f-${name}`;

  return (
    <div className={full ? "sm:col-span-2" : ""}>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-ink-800">
        {label} {required && <span className="text-gold-600">*</span>}
      </label>

      {type === "textarea" ? (
        <textarea
          id={id}
          name={name}
          rows={5}
          required={required}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(name, e.target.value)}
          className={inputCls}
        />
      ) : type === "select" ? (
        <select
          id={id}
          name={name}
          required={required}
          value={value}
          onChange={(e) => onChange(name, e.target.value)}
          className={inputCls}
        >
          <option value="">Please choose…</option>
          {options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      ) : type === "checkboxes" ? (
        <>
          <div className="grid gap-2 sm:grid-cols-2">
            {options.map((o) => {
              const selected = value ? value.split(", ").includes(o) : false;
              return (
                <label
                  key={o}
                  className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-sm transition ${
                    selected
                      ? "border-gold-400 bg-gold-400/10 text-ink-900"
                      : "border-ink-200 text-ink-600 hover:border-ink-400"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={selected}
                    onChange={() => {
                      const current = value ? value.split(", ").filter(Boolean) : [];
                      const next = selected ? current.filter((c) => c !== o) : [...current, o];
                      onChange(name, next.join(", "));
                    }}
                    className="h-4 w-4 accent-[#d29a2d]"
                  />
                  {o}
                </label>
              );
            })}
          </div>
          {/* The joined value is what actually gets posted. */}
          <input type="hidden" name={name} value={value} />
        </>
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(name, e.target.value)}
          className={inputCls}
        />
      )}

      {help && <p className="mt-2 text-xs text-ink-500">{help}</p>}
    </div>
  );
}

export default function EnquiryForm({ formName, fields, submitLabel = "Send enquiry", successNote }) {
  const [values, setValues] = useState(() =>
    Object.fromEntries(fields.map((f) => [f.name, ""])),
  );
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const onChange = (name, v) => setValues((prev) => ({ ...prev, [name]: v }));

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": formName, ...values }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-ink-200 bg-ink-50 p-8 text-center">
        <CheckCircle2 className="mx-auto h-11 w-11 text-gold-500" strokeWidth={1.8} />
        <h3 className="mt-4 text-xl text-ink-900">Thank you — we've got it.</h3>
        <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-ink-500">
          {successNote || "We'll come back to you as soon as we can."} If it's urgent, call{" "}
          {site.contactName} on{" "}
          <a href={`tel:${site.phoneLink}`} className="font-semibold text-ink-900 underline">
            {site.phone}
          </a>
          .
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
      className="rounded-2xl border border-ink-200 bg-white p-6 shadow-[0_24px_60px_-40px_rgba(11,18,27,0.5)] sm:p-8"
    >
      <input type="hidden" name="form-name" value={formName} />
      <p className="hidden">
        <label>
          Leave this empty: <input name="bot-field" />
        </label>
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map((f) => (
          <Field key={f.name} field={f} value={values[f.name]} onChange={onChange} />
        ))}
      </div>

      {status === "error" && (
        <p className="mt-5 flex items-start gap-2 rounded-xl bg-red-50 p-4 text-sm text-red-800">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          Sorry — that didn't send. Please call {site.phone} and we'll take the details over the
          phone.
        </p>
      )}

      <div className="mt-7 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
        <Button type="submit" size="lg" disabled={status === "sending"}>
          {status === "sending" && <Loader2 className="h-4 w-4 animate-spin" />}
          {status === "sending" ? "Sending…" : submitLabel}
        </Button>
        <p className="text-xs leading-relaxed text-ink-500">
          We only use your details to answer your enquiry. See our{" "}
          <Link to="/privacy" className="underline hover:text-ink-900">
            privacy policy
          </Link>
          .
        </p>
      </div>
    </form>
  );
}
