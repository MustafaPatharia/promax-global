import type { Metadata } from "next";
import { pages } from "@/lib/content";
import { faqs } from "@/lib/faqs";
import { pageMeta } from "@/lib/seo";
import PageShell from "@/components/PageShell";
import PageSchema from "@/components/PageSchema";

export const metadata: Metadata = pageMeta({
  title: "Work With Us",
  description: pages["work-with-us"].metaDescription,
  path: "/work-with-us",
});

export default function WorkWithUsPage() {
  return (
    <>
      <PageSchema
        title="Work With Promax Global"
        description={pages["work-with-us"].metaDescription}
        path="/work-with-us"
        faqs={faqs["work-with-us"]}
      />
      <PageShell content={pages["work-with-us"]} faqs={faqs["work-with-us"]} />
    </>
  );
}
