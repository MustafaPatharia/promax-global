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
  const c = getPages(locale)["why-us"];
  return pageMeta({ title: c.title, description: c.metaDescription, path: "/why-us", locale });
}

export default async function WhyUsPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = asLocale((await params).locale);
  const content = getPages(locale)["why-us"];
  const pageFaqs = getFaqs(locale)["why-us"];
  return (
    <>
      <PageSchema
        title={content.title}
        description={content.metaDescription}
        path="/why-us"
        locale={locale}
        faqs={pageFaqs}
        isService
      />
      <PageShell content={content} faqs={pageFaqs} locale={locale} />
    </>
  );
}
