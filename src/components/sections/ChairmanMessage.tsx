import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import Reveal from "@/components/anim/Reveal";
import { img } from "@/lib/images";
import type { ChairmanBlock } from "./types";

/**
 * Chairman's Message — photo left, bilingual scripts right (Arabic RTL above
 * English), per the client doc's layout. Replaces the generic team grid.
 *
 * ponytail: the Arabic is a marketing draft of the English — swap in the
 * group's official Arabic copy (and H.E.'s high-res portrait) when supplied.
 */
export default function ChairmanMessage({
  eyebrow,
  heading,
  photo,
  name,
  role,
  arabic,
  english,
  bg = "bg-white",
}: ChairmanBlock & { bg?: string }) {
  return (
    <section className={`section ${bg}`}>
      <div className="shell grid items-start gap-12 lg:grid-cols-[5fr_7fr]">
        <Reveal variant="left">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-navy-900 shadow-[var(--shadow-card-hover)]">
            {photo ? (
              <Image
                src={img(photo)}
                alt={`${name}, ${role}`}
                fill
                sizes="(max-width:1024px) 100vw, 40vw"
                className="object-cover object-top"
              />
            ) : null}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-900/80 to-transparent p-6">
              <p className="font-display text-lg font-bold text-white">{name}</p>
              <p className="text-sm font-semibold uppercase tracking-wide text-brand">{role}</p>
            </div>
          </div>
        </Reveal>

        <div>
          <SectionTitle ghost="Message" kicker={eyebrow ?? "Chairman's Message"} heading={heading} />
          <Reveal variant="up" index={1}>
            <p dir="rtl" lang="ar" className="mt-6 border-r-2 border-brand pr-5 text-lg leading-loose text-navy">
              {arabic}
            </p>
          </Reveal>
          <Reveal variant="up" index={2}>
            <p className="mt-6 leading-relaxed text-slate-600">{english}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
