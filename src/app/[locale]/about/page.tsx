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
  const c = getPages(locale)["about"];
  return pageMeta({ title: c.title, description: c.metaDescription, path: "/about", locale });
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = asLocale((await params).locale);
  const content = getPages(locale)["about"];
  const pageFaqs = getFaqs(locale).about;
  return (
    <>
      <PageSchema
        title={content.title}
        description={content.metaDescription}
        path="/about"
        locale={locale}
        faqs={pageFaqs}
      />
      <PageShell content={content} faqs={pageFaqs} locale={locale} />
    </>
  );
}
