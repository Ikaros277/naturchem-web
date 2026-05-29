import type { Metadata } from "next";
import { SectorPage } from "@/components/SectorPage";
import { siteUrl } from "@/lib/site";

const title = "Měření a podklady pro dřevozpracující provozy";
const description =
  "Měření emisí, prašnosti, hluku a pracovního prostředí pro pily, truhlárny, sušárny a kotelny na biomasu.";
const url = `${siteUrl}/provozy-a-technologie/drevozpracujici/`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url }
};

export default function Page() {
  return (
    <SectorPage
      title="Dřevozpracující provozy"
      slug="drevozpracujici"
      intro="Řešíme měření emisí, prašnosti, hluku a provozní podklady pro pily, truhlárny, výrobu nábytku, odsávání pilin, kotelny na biomasu a související technologie. Výstupy připravujeme pro provozovatele, KHS, krajské úřady i povolovací řízení."
      typicalProblems={[
        "měření emisí ze spalování biomasy a technologických výduchů",
        "prašnost u drticích linek a odsávacích systémů",
        "hluk provozu a dopravy v areálu",
        "aktualizace povolení a provozní dokumentace"
      ]}
      docs={[
        "popis technologie, paliva a provozního režimu",
        "fotografie zdrojů, výduchů a pracovišť",
        "požadavek úřadu nebo interní cíl měření",
        "provozní řád a rozhodnutí, pokud existují"
      ]}
      process={[
        "upřesníme účel výstupu pro provoz, úřad nebo investora",
        "stanovíme rozsah měření emisí a/nebo pracovního prostředí",
        "provedeme terénní měření v reprezentativním režimu",
        "předáme protokol nebo studii s doporučením dalšího postupu"
      ]}
      outputs={[
        "protokoly z měření emisí a pracovního prostředí",
        "podklady pro KHS a krajské úřady",
        "návazné odborné posudky nebo provozní řády"
      ]}
      pitfalls={[
        "měření mimo reprezentativní provoz sušárny nebo kotle",
        "nedostatečný popis technologie a palivové skladby",
        "oddělené řešení emisí a prašnosti bez společného kontextu"
      ]}
      relatedServices={[
        { title: "Měření emisí", href: "/sluzby/mereni-emisi" },
        { title: "Měření pracovního prostředí", href: "/sluzby/pracovni-prostredi" },
        { title: "Měření emisí dřevozpracujících provozů", href: "/sluzby/mereni-emisi-drevozpracujicich-provoze" }
      ]}
      faq={[
        {
          q: "Řešíte i sušárny dřeva a biomasu?",
          a: "Ano, včetně měření emisí ze sušáren a spalovacích zdrojů v areálu."
        },
        {
          q: "Lze kombinovat měření emisí a pracovního prostředí?",
          a: "Ano, často navrhujeme společný postup podle technologie a požadovaného výstupu."
        }
      ]}
    />
  );
}
