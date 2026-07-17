import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import Reveal from "@/components/anim/Reveal";
import { img } from "@/lib/images";
import type { TeamPhotosBlock } from "./types";

/**
 * Team photo cards with a name plate over the image (Transland
 * .single-team-member): white name block + brand role tag pinned bottom-left.
 * Falls back to a monogram tile when a member has no photo.
 */
export default function TeamPhotos({
  eyebrow,
  heading,
  intro,
  members,
  bg = "bg-slate-50",
}: TeamPhotosBlock & { bg?: string }) {
  return (
    <section className={`section ${bg}`}>
      <div className="shell">
        <div className="mb-12 max-w-2xl">
          <SectionTitle ghost="People" kicker={eyebrow ?? "Leadership"} heading={heading} />
          {intro && (
            <Reveal variant="up" index={1}>
              <p className="mt-4 leading-relaxed text-slate-600">{intro}</p>
            </Reveal>
          )}
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((m, i) => {
            const initials = m.name.replace(/H\.E\.\s*/, "").split(" ").filter((w) => /[A-Z]/.test(w[0] ?? "")).map((w) => w[0]).slice(0, 2).join("");
            return (
              <Reveal key={m.name} variant="up" index={i % 3}>
                <div className="group relative h-96 overflow-hidden rounded-2xl bg-navy-900">
                  {m.photo ? (
                    <Image src={img(m.photo)} alt={`${m.name}, ${m.role}`} fill sizes="(max-width:1024px) 100vw, 33vw" className="object-cover object-top transition duration-700 group-hover:scale-105" />
                  ) : (
                    <div className="grid h-full place-items-center bg-navy font-display text-6xl font-extrabold text-white/90">{initials}</div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <h3 className="inline-block bg-white px-5 py-3 font-display text-lg font-bold uppercase text-navy">{m.name}</h3>
                    <span className="block w-fit bg-brand px-5 py-2 text-sm font-semibold text-white">{m.role}</span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
