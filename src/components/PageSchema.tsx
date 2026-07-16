import { site } from "@/lib/site";
import type { Faq } from "@/lib/faqs";

/**
 * Per-page structured data: BreadcrumbList + Service + optional FAQPage.
 * Service ties the page to the Organization; FAQPage feeds both Google
 * rich results and LLM answer-extraction.
 */
export default function PageSchema({
  title,
  description,
  path,
  breadcrumb = [],
  faqs,
  isService = false,
}: {
  title: string;
  description: string;
  path: string;
  breadcrumb?: { name: string; path: string }[];
  faqs?: Faq[];
  isService?: boolean;
}) {
  const url = `${site.url}${path}`;
  const data: Record<string, unknown>[] = [];

  const trail = [{ name: "Home", path: "/" }, ...breadcrumb, { name: title, path }];
  data.push({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${site.url}${c.path}`,
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
