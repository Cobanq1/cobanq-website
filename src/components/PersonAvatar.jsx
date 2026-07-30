import { useMemo } from "react";
import Avatar, { genConfig } from "react-nice-avatar";

// Illustrated human portraits generated deterministically from a seed
// string (genConfig hashes the string), so the same name always renders
// the same person. Not real photos — used in place of plain icon symbols
// for a more engaging, human feel.
//
// Face/hair/eyes/etc. stay randomized per seed for variety, but we pin
// background and shirt color to a small brand-tinted palette instead of
// the library's full rainbow default — keeps every portrait on-brand
// instead of clashing oranges/pinks/greens next to our navy/blue theme.
const bgPalette = ["#E0DDFF", "#D2EFF3", "#EEF4FF", "#DCE8FF"];

function pickFromSeed(seed, options) {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
  return options[hash % options.length];
}

export default function PersonAvatar({ seed, size = 96, className = "" }) {
  // A missing seed used to throw here and blank the whole page; fall back
  // to a fixed one so a bad lookup costs a face, not the route.
  const safeSeed = seed || "CoBanq Customer";
  const config = useMemo(
    () => ({
      ...genConfig(safeSeed),
      bgColor: pickFromSeed(safeSeed, bgPalette),
      shirtColor: "#3b6fe0",
    }),
    [safeSeed]
  );

  return (
    <Avatar
      {...config}
      shape="circle"
      className={className}
      style={{ width: size, height: size }}
    />
  );
}
