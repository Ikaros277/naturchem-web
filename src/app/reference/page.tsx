import type { Metadata } from "next";
import { PageHeroBand } from "@/components/PageHeroBand";
import { PageCtaStrip } from "@/components/PageCtaStrip";
import { ReferenceExamplesIndex } from "@/components/ReferenceExamplesIndex";
import { JsonLd } from "@/components/Schema";
import { pageCtaPresets } from "@/lib/cta";
import { getPageHeroTheme } from "@/lib/hero-images";
import {
  getReferenceExamplesById,
  referenceCustomersIntro,
  referenceExamplesHeading,
  referenceEyebrow,
  referenceIntro
} from "@/lib/reference-content";
import { ClientLogosGrid } from "@/components/ClientLogosGrid";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Reference a důvěra zákazníků | NATURCHEM"
  },
  description:
    "Reference NATURCHEM — 36 let na trhu, spolupráce s významnými společnostmi. Anonymizované příklady měření, studií a podkladů pro úřady.",
  alternates: { canonical: `${siteUrl}/reference/` }
};

export default function ReferencePage() {
  const examplesById = getReferenceExamplesById();

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Úvod", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Reference", item: `${siteUrl}/reference/` }
    ]
  };

  return (
    <main className="section reference-page premium-page">
      <JsonLd data={breadcrumbData} />
      <PageHeroBand
        theme={getPageHeroTheme("/reference")}
        breadcrumbs={[{ name: "Úvod", href: "/" }, { name: "Reference" }]}
      >
        <header className="premium-page-hero page-hero--photo">
          <p className="eyebrow">{referenceEyebrow}</p>
          <h1>Reference a důvěra zákazníků</h1>
          <p className="page-lead">{referenceIntro}</p>
        </header>
      </PageHeroBand>

      <section className="section content-block container page-first-section" id="zakaznici">
        <h2>Naši zákazníci</h2>
        <p className="muted section-intro">{referenceCustomersIntro}</p>
        <ClientLogosGrid expandable />
      </section>

      <section className="section content-block container" id="priklady">
        <h2>{referenceExamplesHeading}</h2>
        <ReferenceExamplesIndex examplesById={examplesById} />
      </section>

      <PageCtaStrip {...pageCtaPresets.reference} className="container" />
    </main>
  );
}
