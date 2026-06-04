import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Měření pracovního prostředí",
  description:
    "Hygienická měření: hluk, prach, chemické látky, vibrace, mikroklima a osvětlení. Podklady pro KHS a kategorizaci prací.",
  alternates: { canonical: `${siteUrl}/sluzby/pracovni-prostredi/` }
};

export default function Page() {
  return (
    <ServicePage
      slug="sluzby/pracovni-prostredi"
      faqCategoryId="pracovni-prostredi"
      title="Měření pracovního prostředí"
      intro="Potřebujete aktualizovat kategorizaci nebo máte výzvu KHS? Změříme hluk, prach, chemické látky, mikroklima, osvětlení a vibrace v provozu — výstupy pro KHS, kategorizaci prací a BOZP."
      scope={[
        "Změříme hluk, prašnost, chemické látky, vibrace, mikroklima a osvětlení podle operací a směnnosti",
        "Posoudíme expozici ve svařovnách, lakovnách, halách i čistých prostorech",
        "Vyhodnotíme výsledky v kontextu limitů a skutečné pracovní zátěže",
        "Připravíme podklady pro kategorizaci prací, BOZP a jednání s KHS"
      ]}
      whenNeeded={[
        "Potřebujete kategorizaci prací nebo její aktualizaci",
        "KHS požaduje měření pracovního prostředí",
        "Měníte technologii nebo dispozici pracoviště",
        "Probíhá kolaudace, interní audit BOZP nebo ověření odsávání a technických opatření"
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
        "Měření bez zohlednění směnnosti a skutečných operací",
        "Zastaralá kategorizace po změně technologie",
        "Neúplné bezpečnostní listy nebo popis pracoviště"
      ]}
      relatedLinks={[
        {
          title: "Měření vibrací",
          href: "/sluzby/mereni-vibraci",
          description: "Vibrace přenášené na ruce i celé tělo."
        },
        {
          title: "Měření osvětlení",
          href: "/sluzby/mereni-osvetleni",
          description: "Osvětlení pracovišť pro KHS a kategorizaci prací."
        },
        {
          title: "Měření mikroklimatu",
          href: "/sluzby/mereni-mikroklimatu",
          description: "Teplota, vlhkost a proudění vzduchu."
        },
        {
          title: "Měření hluku a akustika",
          href: "/sluzby/mereni-hluku",
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
