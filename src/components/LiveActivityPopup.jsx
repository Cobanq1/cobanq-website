import { useEffect, useState } from "react";
import { ArrowDownRight, ArrowUpRight, X } from "lucide-react";
import { liveActivity } from "../content";
import Flag from "./Flag";
import PersonAvatar from "./PersonAvatar";

const VISIBLE_MS = 4000;
const GAP_MS = 3000;

export default function LiveActivityPopup() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;

    const showTimer = setTimeout(() => setVisible(true), 1200);
    return () => clearTimeout(showTimer);
    // Only runs once on mount to kick off the first popup.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dismissed]);

  useEffect(() => {
    if (!visible || dismissed) return;
    const hideTimer = setTimeout(() => setVisible(false), VISIBLE_MS);
    return () => clearTimeout(hideTimer);
  }, [visible, dismissed]);

  useEffect(() => {
    if (visible || dismissed) return;
    const nextTimer = setTimeout(() => {
      setIndex((i) => (i + 1) % liveActivity.length);
      setVisible(true);
    }, GAP_MS);
    return () => clearTimeout(nextTimer);
  }, [visible, dismissed]);

  if (dismissed) return null;

  const item = liveActivity[index];
  const isReceived = item.direction === "received";
  const Icon = isReceived ? ArrowDownRight : ArrowUpRight;

  return (
    <div
      className={`fixed bottom-6 left-6 z-40 transition-all duration-500 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
      aria-hidden={!visible}
    >
      <div className="flex items-center gap-3 rounded-2xl border border-navy-950/10 bg-white py-3 pl-3 pr-4 shadow-xl">
        <div className="relative shrink-0">
          <PersonAvatar seed={item.name} size={40} />
          <span className="absolute -bottom-1 -right-1 flex h-4 w-6 items-center justify-center overflow-hidden rounded-sm ring-2 ring-white">
            <Flag code={item.countryCode} className="h-4 w-6" />
          </span>
        </div>
        <div>
          <p className="text-xs text-navy-950/60">
            {item.name} just {isReceived ? "received" : "sent"}
          </p>
          <p
            className={`flex items-center gap-1 text-sm font-bold ${
              isReceived ? "text-emerald-600" : "text-navy-950"
            }`}
          >
            <Icon size={13} />
            {item.amount}
          </p>
        </div>
        <button
          type="button"
          onClick={() => setDismissed(true)}
          aria-label="Dismiss activity notifications"
          className="ml-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-navy-950/30 hover:bg-navy-950/5 hover:text-navy-950/60"
        >
          <X size={12} />
        </button>
      </div>
      <p className="mt-1 pl-1 text-[10px] font-semibold uppercase tracking-wide text-navy-950/25">
        Demo activity — illustrative, not real transactions
      </p>
    </div>
  );
}
