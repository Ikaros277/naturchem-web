import type { Metadata } from "next";
import { SectorPage } from "@/components/SectorPage";
import { siteUrl } from "@/lib/site";

const title = "Rozptylové a hlukové studie pro bioplyn a biometan";
const description =
  "Oborový přehled pro bioplynové stanice a biometan: ovzduší, pach, hluk, doprava a podklady pro EIA a povolování.";
const url = `${siteUrl}/provozy-a-technologie/bioplyn-biometan/`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url }
};

export default function Page() {
  return (
    <SectorPage
      title="Bioplyn a biometan"
      slug="bioplyn-biometan"
      intro="Bioplynové a biometanové projekty vyžadují koordinaci rozptylového a hlukového posouzení, dopravy i návaznosti na EIA. Důležitá je včasná příprava podkladů podle skutečného technologického řešení."
      typicalProblems={[
        "opožděné řešení rozptylu a hluku až po připomínkách úřadu",
        "neúplné vstupy o provozních režimech technologie",
        "podcenění dopravních scénářů",
        "chybějící variantní technické posouzení"
      ]}
      docs={[
        "technologické schéma a kapacity zařízení",
        "situace záměru a vztah k okolní zástavbě",
        "provozní režimy a dopravní napojení",
        "požadavek úřadu nebo účel studie"
      ]}
      process={[
        "zmapujeme rizikové oblasti záměru (ovzduší, hluk, doprava)",
        "určíme potřebné studie a podklady pro řízení",
        "zpracujeme variantní posouzení a návrh opatření",
        "předáme odborný podklad pro investora i správní orgány"
      ]}
      outputs={[
        "rozptylová a/nebo hluková studie",
        "odborná argumentace pro EIA a navazující procesy",
        "doporučení pro technickou optimalizaci záměru"
      ]}
      pitfalls={[
        "nedostatečný popis technologie a provozu",
        "oddělené řešení hluku a ovzduší bez společného kontextu",
        "neaktuální podklady při změně kapacity projektu"
      ]}
      relatedServices={[
        { title: "Rozptylové studie", href: "/rozptylove-studie" },
        { title: "Hlukové studie", href: "/hlukove-studie" },
        { title: "EIA a oznámení záměru", href: "/eia-oznameni-zameru" }
      ]}
      faq={[
        {
          q: "Kdy řešit studie u bioplynového záměru?",
          a: "Ideálně už v přípravě projektu, aby byly podklady kvalitní a řízení mělo hladší průběh."
        },
        {
          q: "Lze porovnat více variant technologie?",
          a: "Ano, připravujeme i variantní scénáře s porovnáním dopadů a navržených opatření."
        }
      ]}
    />
  );
}
