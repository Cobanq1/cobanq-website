import PersonAvatar from "./PersonAvatar";
import { getPersonPhoto } from "../lib/people";

// One slot for "a picture of a person", used everywhere the site shows one.
//
// It resolves `seed` against the files in src/assets/people/ — a seed of
// "Remittance Sender" looks for `remittance-sender.jpg`. If the file is
// there you get the photograph; if it isn't you get the site's illustrated
// portrait, so pages look finished with a partial set or none at all.
// `photo` overrides the lookup with an explicit path when you need one.
export default function PersonPhoto({
  seed,
  photo,
  alt,
  size = 96,
  className = "",
  rounded = "rounded-full",
  fill = false,
}) {
  const src = photo || getPersonPhoto(seed);

  if (src) {
    return (
      <img
        src={src}
        alt={alt || ""}
        loading="lazy"
        className={`object-cover ${rounded} ${fill ? "h-full w-full" : ""} ${className}`}
        style={fill ? undefined : { width: size, height: size }}
      />
    );
  }

  if (fill) {
    return (
      <span
        className={`flex items-center justify-center bg-gradient-to-br from-brand-50 to-brand-100 ${rounded} ${className}`}
      >
        <PersonAvatar seed={seed} size={size} />
      </span>
    );
  }

  return <PersonAvatar seed={seed} size={size} className={`${rounded} ${className}`} />;
}
