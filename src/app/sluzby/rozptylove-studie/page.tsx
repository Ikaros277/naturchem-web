import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Rozptylové studie",
  description:
    "Rozptylové studie a modelování imisního příspěvku zdrojů. Nové technologie, změny provozu, EIA, krajské úřady.",
  alternates: { canonical: `${siteUrl}/sluzby/rozptylove-studie/` }
};

export default function Page() {
  return (
    <ServicePage
      slug="sluzby/rozptylove-studie"
      faqCategoryId="studie"
      title="Rozptylové studie"
      intro="Modelujeme imisní příspěvky zdrojů, výduchů a dopravy pro záměry, změny provozu a EIA. Studie stavíme na konkrétních emisních parametrech, variantách provozu a požadavcích povolovacího řízení. Součástí zpracování může být také návrh potřebných vstupních podkladů, koordinace návazných studií a příprava technické argumentace pro správní orgány."
      scope={[
        "modelování imisního příspěvku stacionárních zdrojů znečišťování ovzduší a dopravy",
        "varianty provozu a technická opatření",
        "posouzení dopadů na okolní zástavbu",
        "rozptylové studie pro kotelny, skládky, recyklační areály, bioplyn, sklářství a lakovny"
      ]}
      forWhom={[
        "investoři a projektanti nových záměrů nebo rozšíření provozu",
        "provozovatelé měnící emise, výšku komína nebo kapacitu zdroje",
        "žadatelé o povolení nebo účastníci EIA a zjišťovacího řízení"
      ]}
      whenNeeded={[
        "nový záměr nebo rozšíření provozu",
        "požadavek krajského úřadu nebo EIA",
        "porovnání variant technického řešení",
        "změna zdroje znečišťování ovzduší, kapacity, paliva, dopravy nebo emisních parametrů"
      ]}
      authorities={[
        "krajský úřad při povolení provozu nebo změně zdroje znečišťování ovzduší",
        "EIA a zjišťovací řízení při nových nebo kapacitně měněných záměrech",
        "ČIŽP nebo obec v situacích, kde se řeší imisní dopad na okolí"
      ]}
      practicalSituations={[
        "rozptylová studie pro nový nebo měněný zdroj znečišťování ovzduší",
        "rozptylová studie skládky, recyklačního areálu nebo kompostárny",
        "posouzení kotelny, lakovny, bioplynové stanice nebo sklářského provozu",
        "variantní posouzení kapacity, paliva, výduchu nebo dopravního zatížení",
        "studie jako příloha EIA, odborného posudku nebo povolení provozu"
      ]}
      docs={[
        "parametry zdrojů a emisní údaje",
        "provozní režimy a doprava v areálu",
        "situace záměru a mapové podklady",
        "výška výduchů, teplota a rychlost spalin, technické listy filtrace a předchozí měření emisí"
      ]}
      outputs={[
        "rozptylová studie se závěrem a doporučením",
        "variantní posouzení (pokud je součástí zadání)",
        "podklad pro investora, projektanta i úřad"
      ]}
      commonMistakes={[
        "neaktuální emisní údaje nebo provozní režimy",
        "studie bez variantního posouzení u kapacitní změny",
        "nedostatečné mapové a dopravní podklady"
      ]}
      relatedLinks={[
        {
          title: "Měření emisí",
          href: "/sluzby/mereni-emisi",
          description: "Reálná emisní data pro zdroj, výduch nebo technologii."
        },
        {
          title: "EIA a oznámení záměru",
          href: "/sluzby/eia-oznameni-zameru",
          description: "Návaznost rozptylové studie na zjišťovací řízení a povolování."
        },
        {
          title: "Odpady, skládky a recyklace",
          href: "/provozy-a-technologie/odpady-recyklace",
          description: "Typické záměry s dopravou, prašností, imisemi a kapacitními změnami."
        }
      ]}
    />
  );
}
