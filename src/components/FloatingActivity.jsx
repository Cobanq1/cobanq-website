import { useEffect, useRef, useState } from "react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { liveActivity } from "../content";
import Flag from "./Flag";

// Scattered ambient badges across the hero background — each slot runs
// its own independent, randomly-timed show/hide loop so several are
// popping in and out at once, at different spots, continuously.
// Illustrative only (see the note in content.js) — no live backend.
// Kept strictly to the top/bottom strips — the middle band is where the
// actual hero content (headline, paragraph, wallet card) lives, and its
// exact edges shift with viewport width, so anything placed there risks
// overlapping text at some screen size. Top/bottom stay clear at any width.
const slots = [
  { top: "5%", left: "6%" },
  { top: "4%", left: "24%" },
  { top: "8%", left: "44%" },
  { top: "5%", left: "64%" },
  { top: "10%", left: "84%" },
  { top: "88%", left: "8%" },
  { top: "92%", left: "26%" },
  { top: "85%", left: "46%" },
  { top: "90%", left: "66%" },
  { top: "86%", left: "88%" },
];

const COOLDOWN_MS = 60000;

function randomBetween(min, max) {
  return min + Math.random() * (max - min);
}

// Shared across every badge so no two slots show the same person/amount
// at once, and — as long as the pool has enough untapped entries — the
// same one won't reappear within a minute of last being shown.
function pickItem({ recentlyUsed, currentlyVisible, lastOwnIndex }) {
  const now = Date.now();
  const notVisible = liveActivity
    .map((_, i) => i)
    .filter((i) => !currentlyVisible.current.has(i));

  const fresh = notVisible.filter(
    (i) => !recentlyUsed.current.has(i) || now - recentlyUsed.current.get(i) > COOLDOWN_MS
  );

  let pool = fresh.length > 0 ? fresh : notVisible;
  if (pool.length > 1) pool = pool.filter((i) => i !== lastOwnIndex);
  if (pool.length === 0) pool = liveActivity.map((_, i) => i);

  const chosen = pool[Math.floor(Math.random() * pool.length)];
  recentlyUsed.current.set(chosen, now);
  return chosen;
}

function FloatingBadge({ style, delayOffset, recentlyUsed, currentlyVisible }) {
  const [visible, setVisible] = useState(false);
  const [itemIndex, setItemIndex] = useState(null);
  const lastOwnIndex = useRef(null);

  useEffect(() => {
    let timer;
    if (!visible) {
      timer = setTimeout(
        () => {
          const chosen = pickItem({ recentlyUsed, currentlyVisible, lastOwnIndex: lastOwnIndex.current });
          lastOwnIndex.current = chosen;
          currentlyVisible.current.add(chosen);
          setItemIndex(chosen);
          setVisible(true);
        },
        delayOffset + randomBetween(3000, 7000)
      );
    } else {
      timer = setTimeout(() => {
        if (itemIndex !== null) currentlyVisible.current.delete(itemIndex);
        setVisible(false);
      }, randomBetween(2500, 3500));
    }
    return () => clearTimeout(timer);
    // delayOffset only matters for the very first cycle
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  if (itemIndex === null) return null;

  const item = liveActivity[itemIndex];
  const isReceived = item.direction === "received";
  const Icon = isReceived ? ArrowDownRight : ArrowUpRight;

  return (
    <div
      className={`absolute hidden -translate-x-1/2 -translate-y-1/2 transition-all duration-500 lg:block ${
        visible ? "scale-100 opacity-100" : "scale-90 opacity-0"
      }`}
      style={style}
      aria-hidden={!visible}
    >
      <div className="flex items-center gap-2 whitespace-nowrap rounded-full bg-white px-3.5 py-2 text-xs font-semibold shadow-xl">
        <Flag code={item.countryCode} className="h-3.5 w-5 rounded-sm" />
        <span className="text-navy-950/70">{item.name}</span>
        <span className={`flex items-center gap-0.5 ${isReceived ? "text-emerald-600" : "text-navy-950"}`}>
          <Icon size={11} />
          {item.amount}
        </span>
      </div>
    </div>
  );
}

export default function FloatingActivity() {
  const recentlyUsed = useRef(new Map());
  const currentlyVisible = useRef(new Set());

  return (
    <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
      {slots.map((slot, i) => (
        <FloatingBadge
          key={i}
          style={slot}
          delayOffset={i * 700}
          recentlyUsed={recentlyUsed}
          currentlyVisible={currentlyVisible}
        />
      ))}
    </div>
  );
}
