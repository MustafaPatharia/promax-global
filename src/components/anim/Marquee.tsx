/**
 * Infinite horizontal ticker of "logo" chips (partner/stakeholder row).
 * Duplicates children once so the -50% keyframe loops seamlessly. Pure CSS
 * (see .marquee in globals.css) — no JS, SSR-safe. Honest stakeholder
 * categories rendered as bordered monogram chips, template logo-row style.
 */
function chip(label: string, i: number) {
  const initials = label
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");
  return (
    <li key={i} className="mx-4 flex items-center gap-3 whitespace-nowrap rounded-xl border border-slate-200 bg-white px-5 py-3 shadow-[var(--shadow-card)]">
      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-navy text-xs font-bold text-white">
        {initials}
      </span>
      <span className="font-display text-sm font-semibold text-navy">{label}</span>
    </li>
  );
}

export default function Marquee({
  items,
  className = "",
}: {
  items: string[];
  className?: string;
}) {
  return (
    <div className={`marquee-mask ${className}`}>
      <div className="flex">
        <ul className="marquee items-center">{items.map(chip)}</ul>
        <ul className="marquee items-center" aria-hidden>
          {items.map(chip)}
        </ul>
      </div>
    </div>
  );
}
