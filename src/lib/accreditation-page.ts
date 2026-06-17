import type { ServiceIconKey } from "@/lib/service-icons";

export const accreditationPageMetadata = {
  title: {
    absolute: "Akreditace, autorizace a odborná oprávnění | NATURCHEM"
  },
  description:
    "Přehled akreditace laboratoře NATURCHEM č. 1599, autorizací EIA, rozptylových studií, posudků a GHG. Dokumenty ke stažení."
} as const;

export const accreditationFacts = [
  "Osvědčení o akreditaci č. 562/2023",
  "Zkušební laboratoř č. 1599, útvar ME a PP",
  "ČSN EN ISO/IEC 17025:2018",
  "Platnost akreditace do 26. 10. 2028"
] as const;

export const customerBenefits: Array<{ icon: ServiceIconKey; text: string }> = [
  { icon: "ippc", text: "Výsledky dohledatelné a obhajitelné při kontrole" },
  { icon: "bezpecnostni-listy", text: "Protokoly přímo pro ČIŽP, KHS nebo stavební úřad" },
  { icon: "skoleni", text: "Odborný výklad výsledků — nejen čísla" },
  { icon: "povoleni", text: "Vždy v souladu s platným osvědčením a jeho přílohou" }
];

export const scopeGroups = [
  {
    title: "Emise ze stacionárních zdrojů",
    text: "Vzorkování, stanovení emisních složek, TOC/VOC, TZL, NOx, CO, SO₂, O₂ a související veličiny."
  },
  {
    title: "Pracovní a vnitřní ovzduší",
    text: "Prašnost, organické látky, chemické látky, aerosoly, vlákna a provozní expozice."
  },
  {
    title: "Mikroklima",
    text: "Teplota, tlak, vlhkost a rychlost proudění vzduchu v pracovním prostředí."
  },
  {
    title: "Osvětlení",
    text: "Umělé osvětlení ve vnitřním i venkovním prostředí."
  },
  {
    title: "Vibrace",
    text: "Vibrace přenášené na ruce a celkové vibrace pro hygienické a BOZP účely."
  },
  {
    title: "Hluk",
    text: "Hluk v pracovním i mimopracovním prostředí podle platných metod."
  }
] as const;

export const accreditationPageContent = {
  schemaName: "Akreditace, autorizace a odborná oprávnění",
  breadcrumbs: [
    { name: "Úvod", href: "/" },
    { name: "Akreditace a oprávnění" }
  ],
  hero: {
    eyebrow: "Důkaz odborné způsobilosti",
    title: "Akreditace, autorizace a odborná oprávnění",
    lead:
      "Výsledky z NATURCHEM obstojí při kontrole ČIŽP, KHS i v stavebním řízení — tady jsou osvědčení, která za nimi stojí."
  },
  overview: {
    factsTitle: "Základní údaje o akreditaci",
    benefitsTitle: "Co akreditace znamená pro zákazníka"
  },
  labScope: {
    title: "Akreditovaný rozsah laboratoře (ISO/IEC 17025)",
    appendixIntro: "Úplný výčet metod a analytů je v",
    appendixLinkLabel: "příloze osvědčení o akreditaci (PDF)",
    equipmentNote:
      "Laboratoř využívá analyzátory, odběrové aparatury, akustickou a vibrační techniku, luxmetry, čerpadla a laboratorní zázemí pro přípravu a vyhodnocení vzorků.",
    equipmentLinkLabel: "Vybrané přístrojové vybavení"
  },
  authorizations: {
    title: "Autorizace, oprávnění a dokumenty",
    intro:
      "EIA, rozptylové a hlukové studie nebo odborné posudky nespadají pod akreditaci laboratoře — jsou kryty samostatnými autorizacemi Ing. Heziny:",
    documentsSubheading: "Dokumenty ke stažení",
    downloadButtonLabel: "Stáhnout PDF",
    downloadAriaSuffix: "— stáhnout PDF"
  }
} as const;
