import type { Metadata } from "next";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import { img } from "@/lib/images";
import { strategicProjects } from "@/lib/site";
import Reveal from "@/components/anim/Reveal";
import PageSchema from "@/components/PageSchema";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = pageMeta({
  title: "Strategic Projects",
  description:
    "Promax Global's Global Project Portfolio — strategic projects across port development, national infrastructure, food security, industrial development, digital infrastructure, and digital assets, delivered across international markets.",
  path: "/strategic-projects",
});

export default function StrategicProjectsPage() {
  return (
    <>
      <PageSchema
        title="Strategic Projects"
        description="A selection of strategic projects demonstrating Promax Global's expertise in developing integrated port, infrastructure, logistics, and national development solutions across international markets."
        path="/strategic-projects"
      />

      {/* ---------- Hero ---------- */}
      <section className="relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy to-navy-700" />
        <div className="dotted-map pointer-events-none absolute inset-0 text-white" />
        <div className="shell relative py-24 md:py-32">
          <Reveal eager>
            <h1 className="max-w-3xl font-display text-4xl font-extrabold leading-tight md:text-6xl">
              Projects building the future of nations
            </h1>
          </Reveal>
        </div>
      </section>

      {/* ---------- 3×3 project grid ---------- */}
      <section className="section bg-white">
        <div className="shell">
          <div className="mb-12 max-w-2xl">
            <SectionTitle
              ghost="Portfolio"
              heading={
                <>
                  Global Project <span>Portfolio</span>
                </>
              }
            />
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              A selection of strategic projects demonstrating Promax Global&apos;s expertise in
              developing integrated port, infrastructure, logistics, and national development
              solutions across international markets.
            </p>
          </div>

          {/* Full-bleed image cards (client, 2026-07-21): the image fills the card and
              the text is overlaid ON TOP over a bottom-up navy wash. Cards are display
              only — no per-project detail pages (client: content not yet provided).
              Cards whose client image is not yet supplied show a [ TBA ] tile. */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {strategicProjects.map((p, i) => {
              const location = "location" in p ? p.location : undefined;
              const pending = "imagePending" in p && p.imagePending;
              return (
                <Reveal key={p.slug} variant="up" index={i % 3} as="div">
                  <article className="group relative flex aspect-[4/5] h-full flex-col justify-end overflow-hidden rounded-2xl border border-slate-200 bg-navy-900 transition hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-[var(--shadow-card-hover)]">
                    {pending ? (
                      /* Image to be shared by the client — placeholder tile */
                      <span className="absolute inset-0 grid place-items-center bg-gradient-to-br from-navy-800 to-navy-900 text-sm font-semibold uppercase tracking-[0.25em] text-white/35">
                        [ TBA ]
                      </span>
                    ) : (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={img(p.image)}
                        alt=""
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    )}
                    {/* bottom-up navy wash keeps overlay text legible over the image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/70 to-navy-900/10" />
                    <div className="relative p-6">
                      {location && (
                        <span className="inline-block rounded-full bg-brand px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                          {location}
                        </span>
                      )}
                      <h3 className="mt-3 font-display text-xl font-bold leading-snug text-white">
                        {p.tag}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-slate-300">{p.body}</p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="bg-brand-050">
        <div className="shell flex flex-col items-start justify-between gap-6 py-16 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-3xl font-bold text-navy md:text-4xl">
              Partner with Promax Global
            </h2>
            <p className="mt-2 max-w-xl text-slate-600">
              Discuss how Promax Global can plan, structure, and deliver your next strategic
              project.
            </p>
          </div>
          <Link href="/invest-with-us" className="btn btn-primary shrink-0">
            Invest With Us
          </Link>
        </div>
      </section>
    </>
  );
}
