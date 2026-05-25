import type { Metadata } from "next";
import { SectorPage } from "@/components/SectorPage";
import { siteUrl } from "@/lib/site";

const title = "Měření emisí a odborné podklady pro sklářské provozy";
const description =
  "Oborový přehled pro sklářství: pecní zdroje, měřicí místa, filtrace, provozní režimy a návaznost na povolovací podklady.";
const url = `${siteUrl}/provozy-a-technologie/sklarstvi/`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url }
};

export default function Page() {
  return (
    <SectorPage
      title="Sklářské provozy"
      slug="sklarstvi"
      intro="Sklářské provozy mají specifický tepelný a technologický režim, který významně ovlivňuje měření emisí i interpretaci výsledků. Důležité je správně nastavit režim měření a technicky posoudit měřicí místa."
      typicalProblems={[
        "nestabilní nebo cyklický provoz pecí během měření",
        "omezená dostupnost měřicích míst",
        "nejasná návaznost mezi výsledky měření a provozní dokumentací",
        "podcenění vazby na filtrační a odlučovací zařízení"
      ]}
      docs={[
        "technický popis pece a navazující technologie",
        "provozní řád a relevantní požadavky rozhodnutí",
        "fotodokumentace výduchů a měřicích míst",
        "popis plánovaného provozního režimu při měření"
      ]}
      process={[
        "vyhodnotíme technologické podmínky a cíle měření",
        "ověříme měřicí místa a režim realizace",
        "provedeme měření emisí a doprovodných veličin",
        "zpracujeme výstup s komentářem pro provoz i správní účely"
      ]}
      outputs={[
        "protokol z měření emisí",
        "vyhodnocení provozních souvislostí",
        "odborné doporučení k návazným krokům"
      ]}
      pitfalls={[
        "měření bez reprezentativního režimu pecí",
        "nedostatečný popis technických podmínek zdroje",
        "neúplná dokumentace pro návazné řízení"
      ]}
      relatedServices={[
        { title: "Měření emisí", href: "/mereni-emisi" },
        { title: "Rozptylové studie", href: "/rozptylove-studie" },
        { title: "EIA a oznámení záměru", href: "/eia-oznameni-zameru" }
      ]}
      faq={[
        {
          q: "Proč je u skláren důležitý režim pece při měření?",
          a: "Výsledky emisí jsou výrazně závislé na konkrétním technologickém režimu, proto je nutné měřit reprezentativně."
        },
        {
          q: "Pomůžete i s podklady pro úřad?",
          a: "Ano, výstupy připravujeme tak, aby byly použitelné v provozu i ve správní komunikaci."
        }
      ]}
    />
  );
}
