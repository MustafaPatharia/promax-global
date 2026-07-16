import type { Metadata } from "next";
import { pages } from "@/lib/content";
import { faqs } from "@/lib/faqs";
import { pageMeta } from "@/lib/seo";
import PageShell from "@/components/PageShell";
import PageSchema from "@/components/PageSchema";

export const metadata: Metadata = pageMeta({
  title: "About Us",
  description: pages["about"].metaDescription,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageSchema
        title="About Promax Global"
        description={pages["about"].metaDescription}
        path="/about"
        faqs={faqs.about}
      />
      <PageShell content={pages["about"]} faqs={faqs.about} />
    </>
  );
}
