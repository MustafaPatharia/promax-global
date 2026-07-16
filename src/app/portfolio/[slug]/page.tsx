import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { pages } from "@/lib/content";
import { faqs } from "@/lib/faqs";
import { pageMeta } from "@/lib/seo";
import PageShell from "@/components/PageShell";
import PageSchema from "@/components/PageSchema";

const divisionSlugs = [
  "port-management",
  "port-advisory",
  "infrastructure",
  "strategic-equipment",
  "skills-education",
  "trade-hub",
  "technology-fintech",
  "smart-energy",
  "strategic-projects",
];

export function generateStaticParams() {
  return divisionSlugs.map((slug) => ({ slug }));
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
  if (!content || !divisionSlugs.includes(slug)) notFound();
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
      <PageShell content={content} faqs={pageFaqs} />
    </>
  );
}
