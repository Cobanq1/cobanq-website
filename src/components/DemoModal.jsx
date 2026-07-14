import Modal from "./Modal";
import { howItWorks } from "../content";

export default function DemoModal({ open, onClose }) {
  return (
    <Modal open={open} onClose={onClose} title={howItWorks.heading}>
      <p className="text-sm text-navy-950/60">{howItWorks.subhead}</p>
      <ol className="mt-6 space-y-5">
        {howItWorks.steps.map((step) => (
          <li key={step.number} className="flex gap-4">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-400 to-brand-600 text-xs font-bold text-white">
              {step.number}
            </span>
            <div>
              <p className="font-bold text-navy-950">{step.title}</p>
              <p className="mt-1 text-sm text-navy-950/60">{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </Modal>
  );
}
