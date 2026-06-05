import type { Metadata } from "next";
import Link from "next/link";

import { EquipmentAccordion } from "@/components/EquipmentAccordion";
import { PageCtaStrip } from "@/components/PageCtaStrip";
import { PageHeroBand } from "@/components/PageHeroBand";
import { JsonLd } from "@/components/Schema";
import { pageCtaPresets } from "@/lib/cta";
import {
  equipmentGroups,
  equipmentSectionHeading,
  equipmentSectionIntro
} from "@/lib/equipment-content";
import { getPageHeroTheme } from "@/lib/hero-images";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Přístrojové vybavení NATURCHEM"
  },
  description:
    "Přehled vybraného přístrojového vybavení NATURCHEM pro měření emisí, pracovního prostředí, hluku, vibrací, osvětlení, mikroklimatu a odběry vzorků.",
  alternates: { canonical: `${siteUrl}/pristrojove-vybaveni/` }
};

export default function Page() {
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Úvod", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Přístrojové vybavení", item: `${siteUrl}/pristrojove-vybaveni/` }
    ]
  };

  const webPageData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Přístrojové vybavení NATURCHEM",
    url: `${siteUrl}/pristrojove-vybaveni/`,
    description: metadata.description
  };

  return (
    <main className="section premium-page equipment-page">
      <JsonLd data={breadcrumbData} />
      <JsonLd data={webPageData} />
      <PageHeroBand
        theme={getPageHeroTheme("/pristrojove-vybaveni")}
        breadcrumbs={[{ name: "Úvod", href: "/" }, { name: "Přístrojové vybavení" }]}
      >
        <header className="premium-page-hero page-hero--photo">
          <p className="eyebrow">Technické zázemí laboratoře</p>
          <h1>Přístrojové vybavení NATURCHEM</h1>
          <p className="page-lead">
            Měření a odběry podložené přístrojovým zázemím laboratoře — emise, pracovní prostředí,
            hluk i příprava vzorků pro protokol nebo studii u ČIŽP a KHS.
          </p>
        </header>
      </PageHeroBand>

      <section
        className="section content-block container page-first-section"
        aria-labelledby="equipment-index-intro-heading"
      >
        <h2 id="equipment-index-intro-heading">{equipmentSectionHeading}</h2>
        <p>{equipmentSectionIntro}</p>
        <p className="muted">
          Úplný akreditovaný rozsah metod najdete na stránce{" "}
          <Link href="/akreditace-autorizace-dokumenty">Akreditace a oprávnění</Link>.
        </p>
      </section>

      <EquipmentAccordion groups={equipmentGroups} />

      <PageCtaStrip {...pageCtaPresets.equipment} className="container" />
    </main>
  );
}
