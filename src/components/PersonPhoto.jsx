import PersonAvatar from "./PersonAvatar";

// One slot for "a picture of a person".
//
// Pass `photo` (a path under /public, e.g. "/people/sender.jpg") and it
// renders that image. Leave it empty and it falls back to the site's
// illustrated portrait for that seed, so pages look finished before any
// photography exists — drop files in and set the paths in content.js to
// swap every face over without touching a component.
export default function PersonPhoto({
  photo,
  seed,
  alt = "",
  className = "",
  rounded = "rounded-3xl",
  avatarSize = 96,
}) {
  if (photo) {
    return (
      <img
        src={photo}
        alt={alt}
        loading="lazy"
        className={`h-full w-full object-cover ${rounded} ${className}`}
      />
    );
  }

  return (
    <span
      className={`flex items-center justify-center bg-gradient-to-br from-brand-50 to-brand-100 ${rounded} ${className}`}
    >
      <PersonAvatar seed={seed} size={avatarSize} />
    </span>
  );
}
