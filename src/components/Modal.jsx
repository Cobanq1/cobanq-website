import { useEffect } from "react";
import { X } from "lucide-react";

export default function Modal({ open, onClose, children, title }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-950/60 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-3xl bg-white p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-navy-950/5 text-navy-950/60 transition hover:bg-navy-950/10"
        >
          <X size={18} />
        </button>
        {title && <h3 className="text-xl font-bold text-navy-950">{title}</h3>}
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
}
