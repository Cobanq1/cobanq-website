import { useMemo } from "react";
import Avatar, { genConfig } from "react-nice-avatar";

// Illustrated human portraits generated deterministically from a seed
// string (genConfig hashes the string), so the same name always renders
// the same person. Not real photos — used in place of plain icon symbols
// for a more engaging, human feel.
export default function PersonAvatar({ seed, size = 96, className = "" }) {
  const config = useMemo(() => genConfig(seed), [seed]);

  return (
    <Avatar
      {...config}
      shape="circle"
      className={className}
      style={{ width: size, height: size }}
    />
  );
}
