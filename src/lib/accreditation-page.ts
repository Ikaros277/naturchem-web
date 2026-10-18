import type { ServiceIconKey } from "@/lib/service-icons";

export const accreditationPageMetadata = {
  title: {
    absolute: "Akreditace a autorizace | NATURCHEM"
  },
  description:
    "Akreditovaný rozsah zkušební laboratoře č. 1599, autorizace EIA, rozptylové studie a odborné posudky. Osvědčení a dokumenty ke stažení."
} as const;

export const accreditationFacts = [
  "Osvědčení o akreditaci č. 562/2023",
  "Zkušební laboratoř č. 1599, útvar ME a PP",
  "ČSN EN ISO/IEC 17025:2018",
  "Platnost akreditace do 26. 10. 2028"
] as const;

export const customerBenefits: Array<{ icon: ServiceIconKey; text: string }> = [
  { icon: "ippc", text: "V protokolech uvádíme výsledky, podmínky a použité metody" },
  { icon: "bezpecnostni-listy", text: "Protokoly přímo pro ČIŽP, KHS nebo stavební úřad" },
  { icon: "skoleni", text: "Výsledky odborně vyhodnotíme a vysvětlíme" },
  { icon: "povoleni", text: "Akreditovaná měření provádíme v rozsahu platného osvědčení a jeho přílohy" }
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
    eyebrow: "Naše akreditace a autorizace",
    title: "Akreditace a odborná oprávnění",
    lead:
      "Jsme akreditovaná zkušební laboratoř č. 1599. Prohlédněte si naše osvědčení, rozsah měření a odborné autorizace."
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
      "K měření používáme analyzátory, odběrové aparatury, akustickou a vibrační techniku, luxmetry a čerpadla. Vzorky připravujeme a vyhodnocujeme v laboratorním zázemí.",
    equipmentLinkLabel: "Vybrané přístrojové vybavení"
  },
  authorizations: {
    title: "Autorizace, oprávnění a dokumenty",
    intro:
      "Akreditace laboratoře a odborné autorizace jsou různé doklady. Samostatná oprávnění Ing. Heziny uvádíme níže:",
    documentsSubheading: "Dokumenty ke stažení",
    downloadButtonLabel: "Stáhnout PDF",
    downloadAriaSuffix: "— stáhnout PDF"
  }
} as const;
