import type { Metadata } from "next";
import { SectorPage } from "@/components/SectorPage";
import { siteUrl } from "@/lib/site";

const title = "Měření a podklady pro automotive a technické textilie";
const description =
  "Měření emisí, pracovního prostředí a hluku pro automotive, technické textilie a výrobní linky.";
const url = `${siteUrl}/provozy-a-technologie/automotive/`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url }
};

export default function Page() {
  return (
    <SectorPage
      title="Automotive a technické textilie"
      slug="automotive"
      intro="Ve výrobě komponent řešíte chemické látky, VOC i hluk technologií? Měření a podklady připravíme pro provoz, investora i úřad."
      typicalProblems={[
        "měření emisí z technologií a lakoven v areálu",
        "kategorizace prací a expozice chemickým látkám",
        "hluk výrobních linek a logistiky",
        "požadavky investora nebo úřadu při změně provozu"
      ]}
      docs={[
        "popis technologie a pracovních operací",
        "bezpečnostní listy a směnnost",
        "fotografie zdrojů a pracovišť",
        "požadavek úřadu, investora nebo interní audit"
      ]}
      process={[
        "vyhodnotíme účel měření nebo studie",
        "stanovíme rozsah pro emise, pracovní prostředí nebo hluk",
        "realizujeme terénní měření nebo zpracujeme studii",
        "předáme protokol s doporučením pro provoz a dokumentaci"
      ]}
      outputs={[
        "protokoly z měření emisí a pracovního prostředí",
        "podklady pro KHS a investiční tým",
        "návazné odborné posudky při změně technologie"
      ]}
      pitfalls={[
        "měření mimo reprezentativní směnu nebo operaci",
        "chybějící podklady o chemických směsích a odsávání",
        "oddělené řešení emisí a PP bez koordinace"
      ]}
      relatedServices={[
        { title: "Měření emisí", href: "/sluzby/mereni-emisi" },
        { title: "Měření pracovního prostředí", href: "/sluzby/pracovni-prostredi" },
        { title: "Měření emisí lakovny", href: "/sluzby/mereni-emisi-lakoven" }
      ]}
      faq={[
        {
          q: "Měříte i emise z lakovacích linek v automotive?",
          a: "Ano, včetně VOC/TOC a návaznosti na pracovní prostředí v lakovně."
        },
        {
          q: "Spolupracujete s projektanty a investory?",
          a: "Ano, připravujeme podklady pro technický dozor a povolovací procesy."
        }
      ]}
    />
  );
}
