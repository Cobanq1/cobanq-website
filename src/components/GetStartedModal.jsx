import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Modal from "./Modal";
import { nav } from "../content";

export default function GetStartedModal({ open, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setSubmitted(false);
      setEmail("");
    }, 300);
  };

  return (
    <Modal open={open} onClose={handleClose} title={submitted ? undefined : nav.signupLabel}>
      {submitted ? (
        <div className="flex flex-col items-center py-4 text-center">
          <CheckCircle2 className="text-brand-500" size={48} />
          <h3 className="mt-4 text-xl font-bold text-navy-950">You're on the list</h3>
          <p className="mt-2 text-sm text-navy-950/60">
            This is a placeholder form — wire it up to your real signup flow whenever it's
            ready. We'll pretend {email || "your email"} just got a wallet.
          </p>
          <button
            type="button"
            onClick={handleClose}
            className="mt-6 rounded-full bg-navy-950 px-6 py-2.5 text-sm font-semibold text-white"
          >
            Close
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <p className="text-sm text-navy-950/60">
            Enter your email to start opening your Cobanq wallet. This form is a placeholder —
            connect it to your real signup process later.
          </p>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="mt-5 w-full rounded-xl border border-navy-950/15 px-4 py-3 text-sm outline-none transition focus:border-brand-500"
          />
          <button
            type="submit"
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-brand-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/30 transition hover:from-brand-400 hover:to-brand-500"
          >
            Continue
            <ArrowRight size={16} />
          </button>
        </form>
      )}
    </Modal>
  );
}
