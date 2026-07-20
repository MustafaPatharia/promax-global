import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { pages } from "@/lib/content";
import { faqs } from "@/lib/faqs";
import { pageMeta } from "@/lib/seo";
import PageShell from "@/components/PageShell";
import PageSchema from "@/components/PageSchema";
import { portfolioSubPages, verticals } from "@/lib/site";

/**
 * Level-2 portfolio pages (e.g. /portfolio/ports-logistics/management-services).
 * Driven entirely by `portfolioSubPages` in lib/site + a matching "<slug>/<sub>"
 * key in lib/content — adding the remaining portfolios' sub-pages is a data
 * change in those two files, no new route code.
 */
export function generateStaticParams() {
  return Object.entries(portfolioSubPages).flatMap(([slug, subs]) =>
    subs.map((s) => ({ slug, sub: s.slug }))
  );
}

const lookup = (slug: string, sub: string) => {
  const parent = verticals.find((v) => v.slug === slug);
  const isKnown = portfolioSubPages[slug]?.some((s) => s.slug === sub);
  const content = pages[`${slug}/${sub}`];
  return parent && isKnown && content ? { parent, content } : null;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; sub: string }>;
}): Promise<Metadata> {
  const { slug, sub } = await params;
  const found = lookup(slug, sub);
  if (!found) return {};
  return pageMeta({
    title: `${found.content.title} — ${found.parent.title}`,
    description: found.content.metaDescription,
    path: `/portfolio/${slug}/${sub}`,
  });
}

export default async function PortfolioSubPage({
  params,
}: {
  params: Promise<{ slug: string; sub: string }>;
}) {
  const { slug, sub } = await params;
  const found = lookup(slug, sub);
  if (!found) notFound();
  const { parent, content } = found;
  const pageFaqs = faqs[`${slug}/${sub}`];

  return (
    <>
      <PageSchema
        title={`${content.title} — ${parent.title}`}
        description={content.metaDescription}
        path={`/portfolio/${slug}/${sub}`}
        breadcrumb={[
          { name: "Portfolio", path: "/portfolio" },
          { name: parent.title, path: `/portfolio/${slug}` },
        ]}
        faqs={pageFaqs}
        isService
      />
      {/* noCta: client 00:43:53 — "No call to action in the pages" (portfolio). */}
      <PageShell content={content} faqs={pageFaqs} noCta />
    </>
  );
}
