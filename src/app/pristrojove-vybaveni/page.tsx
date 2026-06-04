import type { Metadata } from "next";
import { EquipmentAccordion } from "@/components/EquipmentAccordion";
import { PageCtaStrip } from "@/components/PageCtaStrip";
import { PageHeroBand } from "@/components/PageHeroBand";
import { JsonLd } from "@/components/Schema";
import { pageCtaPresets } from "@/lib/cta";
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

const equipmentGroups = [
  {
    title: "Měření emisí a odběry ze stacionárních zdrojů",
    text: "Analyzátory, izokinetické odběrové sestavy, sondy a úprava vzorku pro terénní měření emisí.",
    items: [
      "analyzátor plynných složek HORIBA pro CO, SO₂, NO/NO₂ a O₂",
      "FID / TOC / VOC analyzátory typ 2005",
      "přenosný analyzátor spalin AFRISO Multilyzer STX",
      "izokinetická odběrová aparatura APEX MC-170-DIGITAL",
      "souprava pro měření TZL AMS Analytica AIR CUBE HE ISO",
      "odběrové a izokinetické sondy AMS Analytica",
      "integrované izokinetické sondy s Pitotovou trubicí a teplotním čidlem",
      "Pitotovy trubice a převodníky tlakové diference Delta Ohm / Senseca",
      "laboratorní a membránové plynoměry",
      "kalibrátory průtoku SXF2024-6000",
      "Peltierovy chladiče a úpravny vzorku",
      "vyhřívané odběrové hadice",
      "kalibrační plyny pro emisní analyzátory"
    ]
  },
  {
    title: "Pracovní prostředí, odběry a mikroklima",
    text: "Systémy pro měření fyzikálních faktorů, odběry chemických látek, prachu a provozních expozic.",
    items: [
      "multifunkční měřicí systémy Delta Ohm / Senseca DO9847",
      "teplotní, vlhkostní a tlaková čidla Delta Ohm / Senseca",
      "kulové teploměry pro tepelnou zátěž",
      "anemometry a snímače proudění vzduchu",
      "osobní odběrová čerpadla SKC AirChek",
      "odběrová čerpadla FCG-5H",
      "AIR CUBE COM2-TH",
      "vybavení pro odběry prachu, kovů a chemických látek v pracovním ovzduší"
    ]
  },
  {
    title: "Hluk, vibrace a akustika",
    text: "Akustická a vibrační technika pro pracovní prostředí a mimopracovní prostředí.",
    items: [
      "zvukoměr SVAN 979",
      "akustický kalibrátor Delta Ohm HD 2020",
      "analyzátor vibrací Delta Ohm HD2030",
      "kalibrátor vibrací Delta Ohm HD2060",
      "zdroj bílého a růžového šumu Ntek OMNI 4 HP",
      "zesilovač AMG mini Ion+"
    ]
  },
  {
    title: "Osvětlení a fyzikální faktory",
    text: "Vybavení pro osvětlení, orientační kontrolu prostředí a doplňkovou diagnostiku provozních podmínek.",
    items: [
      "luxmetr GOSSEN Mavolux 5032 C USB",
      "světelná čidla Delta Ohm LP 471 PHOT / RAD / LUM",
      "laserový čítač částic Trotec PC 200",
      "termokamera FLIR TG267",
      "laserový dálkoměr",
      "provozní anemometry Trotec"
    ]
  },
  {
    title: "Laboratorní a podpůrné zázemí",
    text: "Zázemí pro přípravu, transport, sušení, ochranu a vyhodnocení vzorků navazující na terénní práci.",
    items: [
      "analytické váhy RADWAG AS 62.R2",
      "kalibrační závaží KERN & Sohn",
      "sušárna Memmert UM200",
      "exsikátory pro sušení filtrů",
      "ultrazvuková lázeň",
      "odměrné laboratorní sklo",
      "laboratorní vymražovací zařízení",
      "vybavení pro transport, přípravu a ochranu vzorků"
    ]
  }
] as const;

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

      <section className="section container page-first-section">
        <EquipmentAccordion groups={equipmentGroups} />
      </section>

      <section className="section content-block container">
        <PageCtaStrip {...pageCtaPresets.measurement} />
      </section>
    </main>
  );
}
