import type { Metadata } from "next";
import { PageHeroBand } from "@/components/PageHeroBand";
import { PageCtaStrip } from "@/components/PageCtaStrip";
import { SectorGroupsIndex } from "@/components/SectorGroupsIndex";
import { JsonLd } from "@/components/Schema";
import { pageCtaPresets } from "@/lib/cta";
import { getPageHeroTheme } from "@/lib/hero-images";
import { provozyNavLabel, sectors } from "@/lib/sectors";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Provozy a technologie – měření, studie a povolovací podklady",
  description:
    "Měření, studie a povolovací podklady pro kotelny, lakovny, bioplynové stanice, svařovny, recyklaci, zemědělské provozy, VZT a další technologie.",
  alternates: { canonical: `${siteUrl}/provozy-a-technologie/` }
};

const assessmentItems = [
  "stručný popis provozu, technologie nebo záměru",
  "účel zakázky: měření, studie, EIA, posudek, provozní řád nebo požadavek úřadu",
  "dostupná dokumentace: projekt, provozní řád, povolení provozu, technické listy",
  "údaje o provozním režimu, kapacitě, výduších, zdrojích hluku nebo dopravě",
  "fotografie technologie, výduchů, měřicích míst nebo okolí provozu",
  "případná komunikace s KHS, ČIŽP, krajským úřadem nebo stavebním úřadem"
];

export default function Page() {
  const collectionPageData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Provozy a technologie",
    url: `${siteUrl}/provozy-a-technologie/`,
    description: metadata.description
  };

  const itemListData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: sectors.map((sector, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: sector.title,
      url: `${siteUrl}${sector.href}/`.replace(/\/\/$/, "/")
    }))
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Úvod", item: siteUrl },
      { "@type": "ListItem", position: 2, name: provozyNavLabel, item: `${siteUrl}/provozy-a-technologie/` }
    ]
  };

  return (
    <main className="section sectors-index-page premium-page">
      <JsonLd data={collectionPageData} />
      <JsonLd data={itemListData} />
      <JsonLd data={breadcrumbData} />
      <PageHeroBand
        theme={getPageHeroTheme("/provozy-a-technologie")}
        breadcrumbs={[{ name: "Úvod", href: "/" }, { name: provozyNavLabel }]}
      >
        <header className="premium-page-hero page-hero--photo">
          <p className="eyebrow">Podle typu provozu</p>
          <h1>Provozy a technologie — měření, studie a podklady pro úřad</h1>
          <p className="page-lead">
            Podívejte se, pro které provozy u nás řešíme měření, studie a povolovací podklady — od
            kotelny a lakovny přes bioplyn až po recyklaci, svařovnu nebo venkovní jednotku VZT.
          </p>
        </header>
      </PageHeroBand>

      <section
        className="section content-block container page-first-section"
        aria-labelledby="sector-index-intro-heading"
      >
        <h2 id="sector-index-intro-heading">Výroba, energetika, zemědělství a další obory</h2>
        <p>
          Pracujeme napříč odvětvími — od výroby a energetiky přes odpady a recyklaci až po farmy,
          potravinářství a technologie v areálech. U každého typu provozu řešíme měření, studie i
          podklady pro úřad v kontextu konkrétní technologie, ne jen obecný seznam služeb.
        </p>
        <p className="muted">
          Najděte obor, který je vám nejblíž — u provozu uvidíte typické situace, související služby
          a jak u vás zakázka obvykle proběhne.
        </p>
      </section>

      <SectorGroupsIndex sectors={sectors} />

      <section className="section content-block container" aria-labelledby="sector-assessment-heading">
        <h2 id="sector-assessment-heading">Nejste si jistí, kam váš provoz zařadit?</h2>
        <p>
          Pošlete nám stručný popis provozu, technologii, požadavek úřadu nebo projektovou
          dokumentaci. Podle situace určíme, zda je potřeba měření, studie, odborný posudek,
          provozní řád nebo jiný podklad.
        </p>
        <h3>Co nám pomůže při prvním posouzení</h3>
        <ul className="check-list">
          {assessmentItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <PageCtaStrip {...pageCtaPresets.sectorIndex} className="container" />
    </main>
  );
}
