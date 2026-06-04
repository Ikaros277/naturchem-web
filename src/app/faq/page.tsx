import type { Metadata } from "next";
import Link from "next/link";
import { FaqPageContent } from "@/components/FaqPageContent";
import { PageCtaStrip } from "@/components/PageCtaStrip";
import { PageHeroBand } from "@/components/PageHeroBand";
import { JsonLd } from "@/components/Schema";
import { pageCtaPresets } from "@/lib/cta";
import { faqFlatItems, faqIntroCtas, faqPageIntro, faqPageSubtitle, faqPageTitle } from "@/lib/faq";
import { getPageHeroTheme } from "@/lib/hero-images";
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
    <main className="section faq-page premium-page">
      <JsonLd data={faqData} />
      <JsonLd data={breadcrumbData} />
      <PageHeroBand
        theme={getPageHeroTheme("/faq")}
        breadcrumbs={[{ name: "Úvod", href: "/" }, { name: "FAQ" }]}
      >
        <header className="premium-page-hero page-hero--photo">
          <h1>{faqPageTitle}</h1>
          <p className="faq-page-subtitle">{faqPageSubtitle}</p>
          <p className="page-lead faq-page-intro">{faqPageIntro}</p>
          <div className="btn-row faq-intro-ctas">
            {faqIntroCtas.map((cta, i) => (
              <Link
                key={cta.href}
                href={cta.href}
                className={i === 0 ? "button" : "button secondary"}
              >
                {cta.label}
              </Link>
            ))}
          </div>
        </header>
      </PageHeroBand>
      <div className="container page-first-section">
        <FaqPageContent />
        <PageCtaStrip {...pageCtaPresets.contact} />
      </div>
    </main>
  );
}
