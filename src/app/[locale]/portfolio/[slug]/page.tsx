import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPages, getFaqs, getUi, asLocale } from "@/lib/i18n";
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
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  const locale = asLocale(rawLocale);
  const c = getPages(locale)[slug];
  if (!c) return {};
  return pageMeta({ title: c.title, description: c.metaDescription, path: `/portfolio/${slug}`, locale });
}

export default async function DivisionPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  const locale = asLocale(rawLocale);
  const content = getPages(locale)[slug];
  if (!content || !divisionSlugs.includes(slug)) notFound();
  const pageFaqs = getFaqs(locale)[slug];
  return (
    <>
      <PageSchema
        title={content.title}
        description={content.metaDescription}
        path={`/portfolio/${slug}`}
        locale={locale}
        breadcrumb={[{ name: getUi(locale).footer.portfolio, path: "/portfolio" }]}
        faqs={pageFaqs}
        isService
      />
      <PageShell content={content} faqs={pageFaqs} locale={locale} />
    </>
  );
}
