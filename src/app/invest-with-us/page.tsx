import type { Metadata } from "next";
import { pages } from "@/lib/content";
import { faqs } from "@/lib/faqs";
import { pageMeta } from "@/lib/seo";
import PageShell from "@/components/PageShell";
import PageSchema from "@/components/PageSchema";

export const metadata: Metadata = pageMeta({
  title: "Invest With Us",
  description: pages["invest-with-us"].metaDescription,
  path: "/invest-with-us",
});

export default function InvestWithUsPage() {
  return (
    <>
      <PageSchema
        title="Invest With Promax Global"
        description={pages["invest-with-us"].metaDescription}
        path="/invest-with-us"
        faqs={faqs["invest-with-us"]}
      />
      <PageShell content={pages["invest-with-us"]} faqs={faqs["invest-with-us"]} />
    </>
  );
}
