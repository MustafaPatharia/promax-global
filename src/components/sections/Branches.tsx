import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import Reveal from "@/components/anim/Reveal";
import { img } from "@/lib/images";
import type { BranchesBlock } from "./types";

/** Brand map-pin (no `pin` in Icons; `globe` is the closest but reads worse here). */
const Pin = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
    <path d="M12 21s7-6.2 7-11a7 7 0 0 0-14 0c0 4.8 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

/**
 * Regional office / presence cards (Transland .our-branch-wrapper).
 * Image branches get a photo top + white body; imageless ones fall back to a
 * navy card with a brand pin accent. "From UAE to the World."
 */
export default function Branches({
  eyebrow,
  heading,
  intro,
  branches,
  bg = "bg-slate-50",
}: BranchesBlock & { bg?: string }) {
  return (
    <section className={`section ${bg}`}>
      <div className="shell">
        <div className="mb-12 max-w-2xl">
          <SectionTitle ghost="Network" kicker={eyebrow ?? "Global presence"} heading={heading} />
          {intro && (
            <Reveal variant="up" index={1}>
              <p className="mt-4 leading-relaxed text-slate-600">{intro}</p>
            </Reveal>
          )}
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {branches.map((b, i) => (
            <Reveal key={b.region} variant="up" index={i % 3}>
              {b.image ? (
                <div className="h-full overflow-hidden rounded-2xl bg-white shadow-sm">
                  <div className="relative aspect-[16/10]">
                    <Image src={img(b.image)} alt={b.region} fill sizes="(max-width:1024px) 100vw, 33vw" className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display font-bold text-navy">{b.region}</h3>
                    {b.address && <p className="mt-1 text-sm text-slate-500">{b.address}</p>}
                    {b.detail && <p className="mt-3 text-sm text-slate-600">{b.detail}</p>}
                  </div>
                </div>
              ) : (
                <div className="h-full overflow-hidden rounded-2xl bg-navy-900 p-7 text-white">
                  <span className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-brand/15 text-brand">
                    <Pin className="h-6 w-6" />
                  </span>
                  <h3 className="font-display text-lg font-bold text-white">{b.region}</h3>
                  {b.address && <p className="mt-1 text-sm text-slate-400">{b.address}</p>}
                  {b.detail && <p className="mt-3 text-sm text-slate-300">{b.detail}</p>}
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
