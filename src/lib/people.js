// Photo registry.
//
// Every image in src/assets/people/ is picked up automatically at build
// time and matched to the seed name used at the call site: a seed of
// "Remittance Sender" resolves to `remittance-sender.jpg` (or .png/.webp).
// Drop a correctly named file in and it appears everywhere that seed is
// used — no component or content edits. Missing files fall back to the
// site's illustrated portraits, so partial sets are fine.

const modules = import.meta.glob("../assets/people/*.{jpg,jpeg,png,webp,avif}", {
  eager: true,
  query: "?url",
  import: "default",
});

export function slugify(seed) {
  return String(seed || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

const bySlug = {};
for (const [path, url] of Object.entries(modules)) {
  const file = path.split("/").pop();
  bySlug[file.replace(/\.[^.]+$/, "").toLowerCase()] = url;
}

// Resolve a seed (or an explicit slug) to a photo URL, or undefined.
export function getPersonPhoto(seed) {
  if (!seed) return undefined;
  return bySlug[slugify(seed)];
}

// Slugs that currently have a file — handy for debugging a drop-in set.
export const availablePhotos = Object.keys(bySlug).sort();
