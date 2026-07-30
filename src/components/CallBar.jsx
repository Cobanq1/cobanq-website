import { Phone, MessageCircle } from "lucide-react";
import { site } from "../site";

/**
 * Sticky call/WhatsApp bar on phones. Most enquiries to a security firm start
 * as a call, so the number stays one thumb-reach away on every page.
 */
export default function CallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-ink-950/95 backdrop-blur lg:hidden">
      <div className="grid grid-cols-2 gap-2 p-2.5">
        <a
          href={`tel:${site.phoneLink}`}
          className="flex items-center justify-center gap-2 rounded-full bg-gold-400 py-3 text-sm font-bold text-ink-950"
        >
          <Phone className="h-4 w-4" strokeWidth={2.4} /> Call now
        </a>
        {site.whatsapp ? (
          <a
            href={`https://wa.me/${site.phoneLink.replace("+", "")}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 rounded-full border border-white/25 py-3 text-sm font-bold text-white"
          >
            <MessageCircle className="h-4 w-4" strokeWidth={2.4} /> WhatsApp
          </a>
        ) : (
          <a
            href="/contact"
            className="flex items-center justify-center gap-2 rounded-full border border-white/25 py-3 text-sm font-bold text-white"
          >
            Get a quote
          </a>
        )}
      </div>
    </div>
  );
}
