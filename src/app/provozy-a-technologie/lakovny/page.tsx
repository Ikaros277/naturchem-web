import type { Metadata } from "next";
import { SectorPage } from "@/components/SectorPage";
import { siteUrl } from "@/lib/site";

const title = "Měření emisí a pracovního prostředí v lakovnách";
const description =
  "Oborový přehled pro lakovny: VOC/TOC, odsávání, filtrace, pracovní expozice a podklady pro KÚ/ČIŽP/KHS.";
const url = `${siteUrl}/provozy-a-technologie/lakovny/`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url }
};

export default function Page() {
  return (
    <SectorPage
      title="Lakovny"
      slug="lakovny"
      intro="Lakovny řeší souběžně emise do ovzduší, pracovní expozici chemickým látkám i návaznost na provozní řád. Správné nastavení měření VOC/TOC a pracovního prostředí je klíčové pro provozní jistotu i komunikaci s úřady."
      typicalProblems={[
        "kolísání emisí podle režimu nanášení a vytvrzování",
        "nedostatečné nebo nerovnoměrné odsávání",
        "chybějící návaznost na provozní řád a požadavky KÚ/ČIŽP",
        "neúplné podklady k používaným rozpouštědlům a směsím"
      ]}
      docs={[
        "technické a bezpečnostní listy používaných nátěrových hmot",
        "popis technologie, režim linek a kapacity",
        "fotografie výduchů, filtrů a měřicích míst",
        "aktuální rozhodnutí úřadu nebo interní cíl měření"
      ]}
      process={[
        "vyhodnotíme technologii lakovny, provozní režimy a účel měření",
        "stanovíme rozsah pro emise (VOC/TOC, doprovodné veličiny) a pracoviště",
        "realizujeme měření v reprezentativních podmínkách",
        "zpracujeme protokol a doporučíme praktická opatření"
      ]}
      outputs={[
        "protokol z měření emisí a/nebo pracovního prostředí",
        "odborný komentář k výsledkům a rizikovým bodům provozu",
        "podklad pro správní řízení nebo interní technická opatření"
      ]}
      pitfalls={[
        "měření mimo reálný provozní režim",
        "neaktuální podklady k chemickým látkám",
        "podcenění technického stavu odsávání a filtrace"
      ]}
      relatedServices={[
        { title: "Měření emisí", href: "/mereni-emisi" },
        { title: "Měření pracovního prostředí", href: "/pracovni-prostredi" },
        { title: "Rozptylové studie", href: "/rozptylove-studie" }
      ]}
      faq={[
        {
          q: "Kdy v lakovně řešit VOC/TOC měření?",
          a: "Nejčastěji při plnění podmínek provozního řádu, změně technologie nebo požadavku úřadu."
        },
        {
          q: "Je potřeba řešit i pracovní prostředí?",
          a: "Ano, lakovny často vyžadují kombinaci emisního měření a posouzení expozice zaměstnanců."
        }
      ]}
    />
  );
}
