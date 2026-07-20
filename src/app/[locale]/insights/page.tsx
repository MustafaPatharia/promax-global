import type { Metadata } from "next";
import { getPages, getFaqs, asLocale } from "@/lib/i18n";
import { pageMeta } from "@/lib/seo";
import PageShell from "@/components/PageShell";
import PageSchema from "@/components/PageSchema";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = asLocale((await params).locale);
  const c = getPages(locale)["insights"];
  return pageMeta({ title: c.title, description: c.metaDescription, path: "/insights", locale });
}

export default async function InsightsPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = asLocale((await params).locale);
  const content = getPages(locale)["insights"];
  const pageFaqs = getFaqs(locale)["insights"];
  return (
    <>
      <PageSchema
        title={content.title}
        description={content.metaDescription}
        path="/insights"
        locale={locale}
        faqs={pageFaqs}
      />
      <PageShell content={content} faqs={pageFaqs} locale={locale} />
    </>
  );
}
