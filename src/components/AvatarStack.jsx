import PersonAvatar from "./PersonAvatar";

const defaultSeeds = ["Amina Yusuf", "Farhan Iqbal", "Priya Nair", "Carlos Mendes"];

export default function AvatarStack({ seeds = defaultSeeds, size = 36, caption, dark = false }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex -space-x-3">
        {seeds.map((seed) => (
          <PersonAvatar
            key={seed}
            seed={seed}
            size={size}
            className={dark ? "ring-2 ring-navy-950" : "ring-2 ring-white"}
          />
        ))}
      </div>
      {caption && (
        <p className={`text-xs font-medium ${dark ? "text-white/60" : "text-navy-950/60"}`}>
          {caption}
        </p>
      )}
    </div>
  );
}
