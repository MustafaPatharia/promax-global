import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import Reveal from "@/components/anim/Reveal";
import { img } from "@/lib/images";
import type { GalleryBlock } from "./types";

/**
 * Plain responsive image grid — no lightbox, no video. The lazy home for
 * assorted operational/reference imagery that isn't a headline feature card.
 * Masonry-ish via row-span on every third tile so it doesn't read as a rigid grid.
 */
export default function Gallery({
  eyebrow,
  heading,
  intro,
  images,
  bg = "bg-white",
}: GalleryBlock & { bg?: string }) {
  return (
    <section className={`section ${bg}`}>
      <div className="shell">
        <div className="mb-12 max-w-2xl">
          <SectionTitle ghost="Frames" kicker={eyebrow ?? "Gallery"} heading={heading} />
          {intro && (
            <Reveal variant="up" index={1}>
              <p className="mt-4 leading-relaxed text-slate-600">{intro}</p>
            </Reveal>
          )}
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {images.map((im, i) => (
            <Reveal key={im.src} variant="scale" index={i % 4}>
              <div className={`relative overflow-hidden rounded-2xl bg-slate-100 ring-1 ring-navy/5 ${i % 5 === 0 ? "aspect-square sm:row-span-2 sm:aspect-[3/4]" : "aspect-[4/3]"}`}>
                <Image src={img(im.src)} alt={im.alt} fill sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 25vw" className="object-cover transition duration-700 hover:scale-105" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
