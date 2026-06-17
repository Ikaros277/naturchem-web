import type { Metadata } from "next";
import { SectorPage } from "@/components/SectorPage";
import { siteUrl } from "@/lib/site";

const title = "Hluková posouzení pro tepelná čerpadla a VZT";
const description =
  "Posouzení hluku technologií tepelného čerpadla a vzduchotechniky pro kolaudace, stížnosti i návrh technických opatření.";
const url = `${siteUrl}/provozy-a-technologie/tepelna-cerpadla-vzt/`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url }
};

export default function Page() {
  return (
    <SectorPage
      title="Tepelná čerpadla a VZT"
      slug="tepelna-cerpadla-vzt"
      intro="Instalujete venkovní jednotku nebo VZT a řešíte hluk vůči sousedům? Posoudíme scénáře denního i nočního režimu ještě před kolaudací."
      typicalProblems={[
        "nevhodné umístění venkovní jednotky vůči zástavbě",
        "podcenění nočního režimu provozu",
        "nejasný rozdíl mezi verifikačním měřením a studií",
        "neúčinná opatření bez analýzy dominantního zdroje"
      ]}
      docs={[
        "technické listy tepelného čerpadla / VZT",
        "situace umístění zdroje vůči okolním objektům",
        "provozní režimy zařízení (den/noc)",
        "požadavek kolaudace nebo správního orgánu"
      ]}
      process={[
        "upřesníme, zda je vhodné měření, studie nebo kombinace obou",
        "nastavíme metodiku a klíčové scénáře provozu",
        "provedeme měření nebo modelové posouzení",
        "doporučíme technická opatření a předáme podklad pro řízení"
      ]}
      outputs={[
        "protokol z měření hluku nebo hluková studie",
        "vyhodnocení dopadu na okolí",
        "doporučení protihlukových opatření pro realizaci"
      ]}
      pitfalls={[
        "měření mimo reprezentativní režim technologie",
        "absence vstupů pro noční provoz",
        "technické řešení bez ověření účinnosti"
      ]}
      relatedServices={[
        { title: "Měření hluku a hlukové studie", href: "/sluzby/mereni-hluku" },
        { title: "Hlukové studie", href: "/sluzby/hlukove-studie" },
        { title: "Kontakt", href: "/kontakt" }
      ]}
      faq={[
        {
          q: "Postačuje u tepelného čerpadla vždy pouze měření?",
          a: "Ne vždy. U nových záměrů je často vhodnější nebo nutná hluková studie před realizací."
        },
        {
          q: "Řešíte i návrh opatření?",
          a: "Ano, navrhujeme technická i organizační opatření podle dominantních zdrojů hluku."
        }
      ]}
    />
  );
}
