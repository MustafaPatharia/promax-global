import { site } from "@/lib/site";
import type { Faq } from "@/lib/faqs";
import { getNav, withLocale, type Locale } from "@/lib/i18n";

/**
 * Per-page structured data: BreadcrumbList + Service + optional FAQPage.
 * Service ties the page to the Organization; FAQPage feeds both Google
 * rich results and LLM answer-extraction.
 */
export default function PageSchema({
  title,
  description,
  path,
  locale,
  breadcrumb = [],
  faqs,
  isService = false,
}: {
  title: string;
  description: string;
  path: string;
  locale: Locale;
  breadcrumb?: { name: string; path: string }[];
  faqs?: Faq[];
  isService?: boolean;
}) {
  const loc = (p: string) => `${site.url}${withLocale(p, locale)}`;
  const url = loc(path);
  const homeName = getNav(locale)[0]?.label ?? "Home";
  const data: Record<string, unknown>[] = [];

  const trail = [{ name: homeName, path: "/" }, ...breadcrumb, { name: title, path }];
  data.push({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: loc(c.path),
    })),
  });

  if (isService) {
    data.push({
      "@context": "https://schema.org",
      "@type": "Service",
      name: title,
      description,
      url,
      serviceType: title,
      provider: { "@type": "Organization", "@id": `${site.url}/#organization`, name: site.name },
      areaServed: ["AE", "GCC", "Africa", "India", "Asia"],
    });
  }

  if (faqs?.length) {
    data.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
