import Reveal from "@/components/anim/Reveal";
import ParallaxMedia from "@/components/anim/ParallaxMedia";
import { video, poster } from "@/lib/videos";

/**
 * Light, editorial feature band — a parallax media card beside copy. The
 * counterpoint to ScrubBand (heavy navy pinned scrub): use it so inner pages
 * don't all carry the same full-bleed dark band. Media side alternates via
 * `flip`. The clip still PLAYS (LoopVideo inside ParallaxMedia) and drifts on
 * scroll + tilts to the cursor.
 */
const base = (f: string) => f.replace(/\.mp4$/, "");

export default function SplitBand({
  src,
  heading,
  text,
  flip = false,
  bg = "bg-slate-50",
}: {
  /** Video filename in /public/videos (poster auto-derived). */
  src: string;
  eyebrow: string;
  heading: React.ReactNode;
  text: string;
  /** Put the media on the right instead of the left. */
  flip?: boolean;
  bg?: string;
}) {
  const media = (
    <Reveal variant={flip ? "right" : "left"}>
      <div className="relative">
        <ParallaxMedia
          src={video(src)}
          poster={poster(base(src))}
          className="aspect-[4/5] rounded-3xl shadow-[var(--shadow-card-hover)]"
        />
        <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-navy/10" />
      </div>
    </Reveal>
  );

  const copy = (
    <div>
      <Reveal variant="up" index={1}>
        <h2 className="text-3xl font-bold leading-tight text-navy md:text-4xl">{heading}</h2>
      </Reveal>
      <Reveal variant="up" index={2}>
        <p className="mt-5 leading-relaxed text-slate-600">{text}</p>
      </Reveal>
    </div>
  );

  return (
    <section className={`section overflow-hidden ${bg}`}>
      <div className="shell grid items-center gap-12 lg:grid-cols-2">
        {flip ? (
          <>
            {copy}
            {media}
          </>
        ) : (
          <>
            {media}
            {copy}
          </>
        )}
      </div>
    </section>
  );
}
