import type { Metadata } from "next";
import { getPages, getFaqs, getUi, asLocale } from "@/lib/i18n";
import { pageMeta } from "@/lib/seo";
import PageShell from "@/components/PageShell";
import PageSchema from "@/components/PageSchema";
import InquiryForm from "@/components/InquiryForm";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = asLocale((await params).locale);
  const c = getPages(locale)["invest-with-us"];
  return pageMeta({ title: c.title, description: c.metaDescription, path: "/invest-with-us", locale });
}

export default async function InvestWithUsPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = asLocale((await params).locale);
  const content = getPages(locale)["invest-with-us"];
  const pageFaqs = getFaqs(locale)["invest-with-us"];
  const ui = getUi(locale);
  return (
    <>
      <PageSchema
        title={content.title}
        description={content.metaDescription}
        path="/invest-with-us"
        locale={locale}
        faqs={pageFaqs}
      />
      <PageShell content={content} faqs={pageFaqs} locale={locale} />
      <section id="inquiry" className="section bg-slate-50">
        <div className="shell max-w-2xl">
          <p className="eyebrow !text-brand">{ui.investSection.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-bold text-navy">{ui.investSection.heading}</h2>
          <p className="mt-3 leading-relaxed text-slate-600">{ui.investSection.para}</p>
          <div className="mt-8">
            <InquiryForm variant="invest" t={ui.inquiryForm} />
          </div>
        </div>
      </section>
    </>
  );
}
