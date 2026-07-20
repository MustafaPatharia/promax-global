import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { pages } from "@/lib/content";
import { faqs } from "@/lib/faqs";
import { pageMeta } from "@/lib/seo";
import PageShell from "@/components/PageShell";
import PageSchema from "@/components/PageSchema";
import { portfolioSlugs } from "@/lib/site";

export function generateStaticParams() {
  return portfolioSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = pages[slug];
  if (!c) return {};
  return pageMeta({ title: c.title, description: c.metaDescription, path: `/portfolio/${slug}` });
}

export default async function DivisionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const content = pages[slug];
  if (!content || !(portfolioSlugs as readonly string[]).includes(slug)) notFound();
  const pageFaqs = faqs[slug];
  return (
    <>
      <PageSchema
        title={content.title}
        description={content.metaDescription}
        path={`/portfolio/${slug}`}
        breadcrumb={[{ name: "Portfolio", path: "/portfolio" }]}
        faqs={pageFaqs}
        isService
      />
      {/* noCta: client 00:43:53 — "No call to action in the pages" (portfolio). */}
      <PageShell content={content} faqs={pageFaqs} noCta />
    </>
  );
}
