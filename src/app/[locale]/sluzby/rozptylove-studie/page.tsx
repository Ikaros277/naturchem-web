import { createInlineServicePageExports } from "@/lib/render-inline-service-page";

const czech = {
  slug: "sluzby/rozptylove-studie",
  faqCategoryId: "studie",
  title: "Rozptylové studie",
  intro:
    "Krajský úřad nebo **EIA** požaduje **rozptylovou studii**? Zmodelujeme **imisní příspěvky** zdrojů a dopravy — podklad pro investora, projektanta i úřad.",
  scope: [
    "Zmodelujeme imisní příspěvek stacionárních zdrojů a dopravy v areálu",
    "Posoudíme varianty provozu a technická opatření",
    "Vyhodnotíme dopady na okolní zástavbu",
    "Zpracujeme studie pro kotelny, skládky, recyklaci, bioplyn, sklářství a lakovny"
  ],
  whenNeeded: [
    "Plánujete nový záměr nebo rozšíření provozu",
    "Krajský úřad nebo **EIA** požaduje **rozptylovou studii**",
    "Potřebujete porovnat varianty technického řešení",
    "Měníte zdroj, kapacitu, palivo, dopravu nebo emisní parametry"
  ],
  practicalSituations: [
    "rozptylová studie pro nový nebo měněný zdroj znečišťování ovzduší",
    "rozptylová studie skládky, recyklačního areálu nebo kompostárny",
    "posouzení kotelny, lakovny, bioplynové stanice nebo sklářského provozu",
    "variantní posouzení kapacity, paliva, výduchu nebo dopravního zatížení",
    "studie jako příloha EIA, odborného posudku nebo povolení provozu"
  ],
  docs: [
    "parametry zdrojů a emisní údaje",
    "provozní režimy a doprava v areálu",
    "situace záměru a mapové podklady",
    "výška výduchů, teplota a rychlost spalin, technické listy filtrace a předchozí **měření emisí**"
  ],
  outputs: [
    "rozptylová studie se závěrem a doporučením",
    "variantní posouzení (pokud je součástí zadání)",
    "podklad pro investora, projektanta i úřad"
  ],
  commonMistakes: [
    "Neaktuální emisní údaje nebo provozní režimy",
    "Studie bez variantního posouzení u kapacitní změny",
    "Nedostatečné mapové a dopravní podklady"
  ],
  relatedLinks: [
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
  ]
};

const { generateMetadata, Page } = createInlineServicePageExports("rozptylove-studie", czech);
export { generateMetadata };
export default Page;
