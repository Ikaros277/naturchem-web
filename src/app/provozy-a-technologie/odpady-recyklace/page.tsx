import type { Metadata } from "next";
import { SectorPage } from "@/components/SectorPage";
import { siteUrl } from "@/lib/site";

const title = "Studie a měření pro zařízení odpadů a recyklace";
const description =
  "Oborový přehled pro odpady a recyklaci: prašnost, hluk, doprava, rozptyl, EIA a podklady pro povolovací řízení.";
const url = `${siteUrl}/provozy-a-technologie/odpady-recyklace/`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url }
};

export default function Page() {
  return (
    <SectorPage
      title="Odpady a recyklace"
      slug="odpady-recyklace"
      intro="Zařízení odpadů a recyklace vyžadují integrovaný pohled na hluk, prašnost, dopravu a rozptyl. Kvalitní podklad musí spojit technická data provozu s požadavky správního řízení."
      typicalProblems={[
        "kapacitní změny bez včasné aktualizace odborných podkladů",
        "kombinace technologického hluku a dopravní zátěže",
        "prašnost v areálu i v okolí zástavby",
        "nejasná návaznost na EIA a navazující povolovací procesy"
      ]}
      docs={[
        "situace areálu a okolní zástavby",
        "projektová dokumentace a kapacity zařízení",
        "provozní režimy technologie a dopravy",
        "požadavek úřadu nebo účel odborného posouzení"
      ]}
      process={[
        "vyhodnotíme rizikové oblasti záměru (hluk, prašnost, doprava, ovzduší)",
        "sestavíme kombinaci měření a studií podle cíle řízení",
        "zpracujeme odborné podklady včetně variant opatření",
        "předáme výstup použitelný pro investora i správní orgány"
      ]}
      outputs={[
        "hluková nebo rozptylová studie",
        "protokoly z návazných měření",
        "odborné doporučení k technickým a organizačním opatřením"
      ]}
      pitfalls={[
        "řešení jednotlivých témat izolovaně bez celkového kontextu",
        "neúplné vstupní údaje o technologii a dopravě",
        "pozdní zapojení odborných podkladů do projektu"
      ]}
      relatedServices={[
        { title: "Rozptylové studie", href: "/sluzby/rozptylove-studie" },
        { title: "Hlukové studie", href: "/sluzby/hlukove-studie" },
        { title: "EIA a oznámení záměru", href: "/sluzby/eia-oznameni-zameru" }
      ]}
      faq={[
        {
          q: "Co je u recyklačních areálů nejčastější problém?",
          a: "Kombinovaný dopad technologie a dopravy na hlukovou a imisní situaci okolí."
        },
        {
          q: "Lze připravit podklad i pro varianty záměru?",
          a: "Ano, standardně hodnotíme i variantní scénáře provozu a opatření."
        }
      ]}
    />
  );
}
