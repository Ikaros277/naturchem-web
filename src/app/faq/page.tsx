import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqPageContent } from "@/components/FaqPageContent";
import { JsonLd } from "@/components/Schema";
import { faqFlatItems } from "@/lib/faq";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "FAQ – měření emisí, studie, EIA, posudky a provozní řády | NATURCHEM"
  },
  description:
    "Časté dotazy k měření emisí, pracovnímu prostředí, hluku, rozptylovým a hlukovým studiím, EIA, odborným posudkům, provozním řádům, ISPOP a podkladům pro úřady.",
  alternates: { canonical: `${siteUrl}/faq/` }
};

export default function FaqPage() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqFlatItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: [...item.paragraphs, item.tip].filter(Boolean).join(" ")
      }
    }))
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Úvod", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "FAQ", item: `${siteUrl}/faq/` }
    ]
  };

  return (
    <main className="container section faq-page">
      <JsonLd data={faqData} />
      <JsonLd data={breadcrumbData} />
      <Breadcrumbs items={[{ name: "Úvod", href: "/" }, { name: "FAQ" }]} />
      <FaqPageContent />
    </main>
  );
}
