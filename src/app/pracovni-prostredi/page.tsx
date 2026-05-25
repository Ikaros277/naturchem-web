import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Měření pracovního prostředí",
  description:
    "Hygienická měření: hluk, prach, chemické látky, vibrace, mikroklima a osvětlení. Podklady pro KHS a kategorizaci prací.",
  alternates: { canonical: `${siteUrl}/pracovni-prostredi/` }
};

export default function Page() {
  return (
    <ServicePage
      slug="pracovni-prostredi"
      faqCategoryId="pracovni-prostredi"
      title="Měření pracovního prostředí"
      intro="Měříme hluk, prach, chemické látky, mikroklima, osvětlení a vibrace přímo v pracovních operacích. Výstupy slouží pro KHS, kategorizaci prací, BOZP a ověření účinnosti technických opatření."
      scope={[
        "hluk, prašnost, chemické látky v pracovním ovzduší, vibrace, mikroklima a osvětlení",
        "měření expozice podle operací, směnnosti a skutečné pracovní zátěže",
        "měření pracovního prostředí ve svařovnách, lakovnách, výrobních halách i čistých prostorech",
        "podklady pro kategorizaci prací, BOZP a komunikaci s KHS"
      ]}
      forWhom={[
        "zaměstnavatelé výrobních provozů, služeb a skladů",
        "pracoviště s chemickými látkami, prachem, hlukem nebo vibracemi (svařovny, lakovny, zemědělství)",
        "organizace připravující dokumentaci pro KHS nebo interní audit BOZP"
      ]}
      whenNeeded={[
        "kategorizace prací nebo její aktualizace",
        "požadavek KHS",
        "změna technologie nebo dispozice pracoviště",
        "kolaudace, interní audit BOZP nebo ověření účinnosti odsávání a technických opatření"
      ]}
      authorities={[
        "KHS při kategorizaci prací, kontrolách pracovního prostředí a kolaudacích",
        "BOZP dokumentace zaměstnavatele a interní řízení rizik",
        "stavební řízení nebo změna užívání tam, kde se dokládají hygienické parametry pracoviště"
      ]}
      practicalSituations={[
        "měření pracovního prostředí ve svařovně při aktualizaci kategorizace prací",
        "měření prašnosti na pracovišti po změně technologie nebo odsávání",
        "měření chemických látek v pracovním ovzduší u lakování, čištění nebo výroby",
        "ověření mikroklimatu, osvětlení nebo vibrací pro BOZP a KHS",
        "podklady pro kolaudaci nebo kontrolu hygienické stanice"
      ]}
      docs={[
        "popis pracovních operací a směnnosti",
        "bezpečnostní listy používaných látek",
        "plánek pracoviště a umístění zdrojů",
        "informace o odsávání, technologii, ochranných pomůckách a počtu exponovaných pracovníků"
      ]}
      outputs={[
        "protokoly z měření s vyhodnocením",
        "podklad pro kategorizaci prací a BOZP",
        "doporučení organizačních a technických opatření"
      ]}
      commonMistakes={[
        "měření bez zohlednění směnnosti a skutečných operací",
        "zastaralá kategorizace po změně technologie",
        "neúplné bezpečnostní listy nebo popis pracoviště"
      ]}
      relatedLinks={[
        {
          title: "Měření vibrací",
          href: "/mereni-vibraci",
          description: "Vibrace přenášené na ruce i celé tělo."
        },
        {
          title: "Měření osvětlení",
          href: "/mereni-osvetleni",
          description: "Osvětlení pracovišť pro KHS a kategorizaci prací."
        },
        {
          title: "Měření mikroklimatu",
          href: "/mereni-mikroklimatu",
          description: "Teplota, vlhkost a proudění vzduchu."
        },
        {
          title: "Měření hluku a akustika",
          href: "/mereni-hluku-hlukove-studie",
          description: "Hluk na pracovišti, kolaudace, VZT a technologické zdroje."
        },
        {
          title: "Svařovny a kovovýroba",
          href: "/provozy-a-technologie/svarovny",
          description: "Prašnost, kovy, NOx, ozon, hluk a lokální odsávání."
        },
        {
          title: "Lakovny a povrchové úpravy",
          href: "/provozy-a-technologie/lakovny",
          description: "Chemické látky, VOC, technické listy a odsávání lakovacích linek."
        }
      ]}
    />
  );
}
