import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageCtaStrip } from "@/components/PageCtaStrip";
import { SectorGroupsIndex } from "@/components/SectorGroupsIndex";
import { JsonLd } from "@/components/Schema";
import { pageCtaPresets } from "@/lib/cta";
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

const sectorGroups = [
  {
    title: "Průmysl a výroba",
    description: "Výrobní technologie, povrchové úpravy, svařovny, sklářství a dřevozpracující provozy.",
    hrefs: [
      "/provozy-a-technologie/lakovny",
      "/provozy-a-technologie/svarovny",
      "/provozy-a-technologie/sklarstvi",
      "/provozy-a-technologie/drevozpracujici",
      "/provozy-a-technologie/automotive"
    ]
  },
  {
    title: "Energetika a zdroje emisí",
    description: "Kotelny, spalovací zdroje, kogenerace, bioplyn a navazující emisní povinnosti.",
    hrefs: ["/provozy-a-technologie/kotelny", "/provozy-a-technologie/bioplyn-biometan"]
  },
  {
    title: "Odpady a recyklace",
    description: "Skládky, recyklační areály, kompostárny a zařízení s dopady na hluk, ovzduší a EIA.",
    hrefs: ["/provozy-a-technologie/odpady-recyklace"]
  },
  {
    title: "Zemědělství a potravinářství",
    description: "Zemědělské areály, sušárny, provozy s emisemi, hlukem, pracovní expozicí a pachy.",
    hrefs: ["/provozy-a-technologie/zemedelske-provozy"]
  },
  {
    title: "Budovy, VZT a technologie",
    description: "VZT, chlazení, tepelná čerpadla, čisté prostory a technologie v objektech.",
    hrefs: ["/provozy-a-technologie/tepelna-cerpadla-vzt", "/sluzby/pracovni-prostredi"]
  },
  {
    title: "Stavební a investiční záměry",
    description: "Záměry v přípravě, změny technologií, EIA, hluk, rozptyl a podklady pro řízení.",
    hrefs: [
      "/provozy-a-technologie/automotive",
      "/provozy-a-technologie/odpady-recyklace",
      "/provozy-a-technologie/tepelna-cerpadla-vzt"
    ]
  }
] as const;

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
      <div className="container">
        <Breadcrumbs items={[{ name: "Úvod", href: "/" }, { name: provozyNavLabel }]} />
        <header className="premium-page-hero">
          <p className="eyebrow">Rozcestník podle provozu</p>
          <h1>Provozy a technologie, pro které zajišťujeme měření, studie a povolovací podklady</h1>
          <p className="page-lead">
            Každý provoz má jiné emisní, hlukové, hygienické a povolovací souvislosti. Proto služby
            NATURCHEM řadíme také podle typů technologií, které zákazníci skutečně řeší v praxi.
          </p>
          <p>
            Inspiraci z praxe najdete v{" "}
            <Link href="/reference">referencích a vybraných zkušenostech</Link>.
          </p>
        </header>
      </div>

      <SectorGroupsIndex groups={sectorGroups} sectors={sectors} />

      <section className="section content-block container" aria-labelledby="sector-cta-heading">
        <h2 id="sector-cta-heading">Nejste si jistí, kam váš provoz zařadit?</h2>
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
