import type { Metadata } from "next";
import { SectorPage } from "@/components/SectorPage";
import { siteUrl } from "@/lib/site";

const title = "Měření a podklady pro zemědělské a potravinářské provozy";
const description =
  "Měření emisí, pracovního prostředí a provozních parametrů pro zemědělské areály, stáje, sušárny, bioplynové stanice a potravinářské technologie.";
const url = `${siteUrl}/provozy-a-technologie/zemedelske-provozy/`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url }
};

export default function Page() {
  return (
    <SectorPage
      title="Zemědělské provozy a sušárny"
      slug="zemedelske-provozy"
      intro="Zajišťujeme měření emisí, hluku, pracovního prostředí a odborné podklady pro zemědělské areály, stáje, sušárny, bioplynové stanice a související technologie. Výstupy připravujeme pro provozovatele, krajské úřady, ČIŽP, KHS i povolovací řízení."
      typicalProblems={[
        "nejasný rozsah měření při změně technologie nebo kapacity",
        "souběh požadavků na emise, pracovní prostředí a pachové látky",
        "nedostatečná dokumentace provozních režimů a zdrojů",
        "termínový tlak před kontrolou nebo podáním podkladů úřadu"
      ]}
      docs={[
        "popis technologie, stájí, sušáren nebo potravinářské linky",
        "provozní řád, rozhodnutí úřadu nebo interní cíl měření",
        "technické listy vstupů, paliv a používaných látek",
        "fotografie zdrojů, výduchů a pracovišť"
      ]}
      process={[
        "upřesníme účel výstupu pro provoz, KHS, krajský úřad nebo EIA",
        "stanovíme rozsah měření emisí a/nebo pracovního prostředí",
        "provedeme terénní měření v reprezentativním režimu",
        "předáme protokol nebo studii s doporučením dalšího postupu"
      ]}
      outputs={[
        "protokoly z měření emisí a pracovního prostředí",
        "podklady pro hygienické stanice a krajské úřady",
        "návazné studie nebo odborná vyjádření dle záměru"
      ]}
      pitfalls={[
        "měření mimo reprezentativní provozní režim",
        "chybějící podklady o kapacitách a technologii",
        "oddělené řešení emisí a pracovního prostředí bez společného kontextu"
      ]}
      relatedServices={[
        { title: "Měření emisí", href: "/sluzby/mereni-emisi" },
        { title: "Měření pracovního prostředí", href: "/sluzby/pracovni-prostredi" },
        { title: "EIA a oznámení záměru", href: "/sluzby/eia-oznameni-zameru" }
      ]}
      faq={[
        {
          q: "Řešíte i bioplynové stanice v zemědělském areálu?",
          a: "Ano, včetně měření emisí motorů, provozních režimů a návaznosti na povinnosti vůči orgánům ochrany ovzduší."
        },
        {
          q: "Lze kombinovat měření emisí a pracovního prostředí?",
          a: "Ano, často navrhujeme společný postup podle technologie a požadovaného výstupu pro úřad i provoz."
        }
      ]}
    />
  );
}
