import { site, verticals } from "@/lib/site";

/**
 * Global Organization + WebSite structured data.
 * Rich, entity-dense schema so search engines AND LLMs can resolve
 * "Promax Global" as a known entity and cite it accurately.
 */
export default function JsonLd() {
  const data = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.name,
      legalName: site.legalName,
      url: site.url,
      slogan: site.tagline,
      description: site.description,
      email: site.contact.email,
      telephone: site.contact.phone,
      logo: `${site.url}/brand/promax-logo-color.png`,
      foundingLocation: "Abu Dhabi, United Arab Emirates",
      areaServed: ["AE", "GCC", "Africa", "India", "Asia"],
      knowsAbout: verticals.map((v) => v.title),
      address: {
        "@type": "PostalAddress",
        streetAddress: "Alia Tower 05, Corniche",
        addressLocality: "Abu Dhabi",
        addressCountry: "AE",
        postOfficeBoxNumber: "54300",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        email: site.contact.email,
        telephone: site.contact.phone,
        areaServed: "Worldwide",
        availableLanguage: ["en", "ar"],
      },
      // TODO: add verified profile URLs (LinkedIn, Crunchbase, registry,
      // Wikidata) here as `sameAs` — the strongest AI entity-trust signal.
      // sameAs: ["https://www.linkedin.com/company/..."],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      name: site.name,
      url: site.url,
      publisher: { "@id": `${site.url}/#organization` },
    },
  ];
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
