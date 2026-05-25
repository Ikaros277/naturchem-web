import type { Metadata } from "next";
import { SectorPage } from "@/components/SectorPage";
import { siteUrl } from "@/lib/site";

const title = "Měření pracovního prostředí a emisí ve svařovnách";
const description =
  "Oborový přehled pro svařovny: prašnost, kovy, NOx, ozon, lokální odsávání, kategorizace prací a podklady pro KHS.";
const url = `${siteUrl}/provozy-a-technologie/svarovny/`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url }
};

export default function Page() {
  return (
    <SectorPage
      title="Svařovny"
      slug="svarovny"
      intro="Svařovny obvykle řeší kombinaci faktorů pracovního prostředí: prašnost, kovy, plyny, hluk a účinnost odsávání. Měření slouží jako podklad pro kategorizaci prací i návrh technických a organizačních opatření v provozu."
      typicalProblems={[
        "neúplný přehled používaných materiálů a přídavných látek",
        "kolísání expozice podle typu svařování a směnnosti",
        "nedostatečné lokální odsávání v reálném režimu výroby",
        "chybějící propojení výsledků s BOZP a požadavky KHS"
      ]}
      docs={[
        "popis pracovních operací a směnnosti",
        "seznam materiálů a bezpečnostní listy",
        "popis odsávání, větrání a dispozičního řešení",
        "požadavky KHS nebo interní cíle BOZP"
      ]}
      process={[
        "určíme rozhodující faktory expozice pro konkrétní pracoviště",
        "nastavíme měření v reprezentativním provozním režimu",
        "vyhodnotíme výsledky ve vazbě na účel (KHS/BOZP)",
        "doporučíme praktická technická a organizační opatření"
      ]}
      outputs={[
        "protokol z měření pracovního prostředí",
        "podklad pro kategorizaci prací",
        "doporučení ke snížení expozice zaměstnanců"
      ]}
      pitfalls={[
        "měření bez znalosti směnnosti a pracovních operací",
        "neaktuální bezpečnostní listy",
        "podcenění účinnosti lokálního odsávání"
      ]}
      relatedServices={[
        { title: "Měření pracovního prostředí", href: "/pracovni-prostredi" },
        { title: "Měření emisí", href: "/mereni-emisi" },
        { title: "Měření hluku a akustika", href: "/mereni-hluku-hlukove-studie" }
      ]}
      faq={[
        {
          q: "Co je pro měření ve svařovně nejdůležitější?",
          a: "Správné určení pracovních operací, směnnosti a použitých materiálů včetně bezpečnostních listů."
        },
        {
          q: "Dá se měření použít pro KHS?",
          a: "Ano, výstup připravujeme jako podklad pro správní i interní účely."
        }
      ]}
    />
  );
}
