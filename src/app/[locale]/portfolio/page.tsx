import Link from "next/link";
import type { Metadata } from "next";
import { getUi, getVerticals, withLocale, asLocale } from "@/lib/i18n";
import { pageMeta } from "@/lib/seo";
import Reveal from "@/components/anim/Reveal";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = asLocale((await params).locale);
  const ui = getUi(locale);
  return pageMeta({ title: ui.portfolio.heading, description: ui.portfolio.intro, path: "/portfolio", locale });
}

export default async function PortfolioPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = asLocale((await params).locale);
  const ui = getUi(locale);
  const verticals = getVerticals(locale);
  return (
    <>
      <section className="relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy to-navy-700" />
        <div className="dotted-map pointer-events-none absolute inset-0 text-white" />
        <div className="shell relative py-24 md:py-32">
          <Reveal>
            <p className="eyebrow !text-brand">{ui.portfolio.eyebrow}</p>
          </Reveal>
          <Reveal index={1}>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold md:text-5xl">{ui.portfolio.heading}</h1>
          </Reveal>
          <Reveal index={2}>
            <p className="mt-6 max-w-2xl text-lg text-slate-200">{ui.portfolio.intro}</p>
          </Reveal>
        </div>
      </section>

      <section className="section bg-white">
        <div className="shell grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {verticals.map((v, i) => (
            <Reveal key={v.slug} index={i % 3} as="div">
              <Link href={withLocale(`/portfolio/${v.slug}`, locale)} className="card group block h-full p-7">
                <div className="mb-4 h-1 w-10 rounded bg-brand transition-all duration-300 group-hover:w-16" />
                <h2 className="text-xl font-bold text-navy transition group-hover:text-brand">{v.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">{v.blurb}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                  {ui.portfolio.readMore} <span aria-hidden className="transition group-hover:translate-x-1">→</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
