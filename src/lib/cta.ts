/** Globální a kontextové texty výzev k akci na webu NATURCHEM. */

import { contactUrl } from "@/lib/contact-url";

export const globalCta = "Nezávazně poptat";

export const heroCtaMeasurement = "Poptat měření";

export const heroCtaStudy = "Poptat studii / posudek";

export const contactSubmitCta = "Odeslat poptávku";

export type PageCtaStripProps = {
  text: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  className?: string;
};

export const pageCtaPresets = {
  contact: {
    text: "Nenašli jste odpověď? Pošlete dotaz nebo podklady přímo.",
    primaryLabel: "Kontaktovat NATURCHEM",
    primaryHref: "/kontakt"
  },
  uncertain: {
    text: "Pošlete nám rozhodnutí, výzvu nebo popis záměru. Navrhneme vhodný rozsah měření, studie nebo dokumentace.",
    primaryLabel: "Poslat podklady k posouzení",
    primaryHref: contactUrl("Nejsem si jistý")
  },
  servicesIndex: {
    text: "Pošlete rozhodnutí úřadu, provozní řád nebo popis technologie. Doporučíme správný rozsah měření nebo studie.",
    primaryLabel: globalCta,
    primaryHref: "/kontakt"
  },
  accreditation: {
    text: "Potřebujete ověřit, zda vaše měření nebo studie spadají do akreditovaného rozsahu?",
    primaryLabel: "Kontaktovat NATURCHEM",
    primaryHref: "/kontakt",
    secondaryLabel: "Přehled služeb",
    secondaryHref: "/sluzby"
  },
  cooperation: {
    text: "Potřebujete poradit s rozsahem měření, studie nebo dokumentace? Napište nám — navrhneme další postup.",
    primaryLabel: "Kontaktovat NATURCHEM",
    primaryHref: "/kontakt",
    secondaryLabel: "Přehled služeb",
    secondaryHref: "/sluzby"
  },
  training: {
    text: "Obsah školení přizpůsobíme typu provozu, rozsahu chemických látek a skupině zaměstnanců.",
    primaryLabel: "Poptat školení",
    primaryHref: contactUrl("Školení chemického zákona / chemické legislativy")
  },
  measurement: {
    text: "Pošlete popis technologie, požadavek úřadu nebo dostupné podklady. Určíme potřebné měření, odběry nebo navazující studii podle účelu výstupu.",
    primaryLabel: "Poptat měření",
    primaryHref: contactUrl("Měření emisí"),
    secondaryLabel: "Akreditace a oprávnění",
    secondaryHref: "/akreditace-autorizace-dokumenty"
  },
  reference: {
    text: "Potřebujete měření, studii, EIA, provozní řád nebo podklad k úřadu? Pošlete výzvu, povolení nebo stručný popis provozu. Na základě podkladů navrhneme rozsah prací a možný termín realizace.",
    primaryLabel: "Poptat podobnou zakázku",
    primaryHref: contactUrl("Nejsem si jistý")
  },
  sectorIndex: {
    text: "Pošlete nám stručný popis provozu, technologii, požadavek úřadu nebo projektovou dokumentaci. Podle situace určíme, zda je potřeba měření, studie, odborný posudek, provozní řád nebo jiný podklad.",
    primaryLabel: "Poslat podklady k posouzení",
    primaryHref: contactUrl("Nejsem si jistý")
  },
  sectorDetail: {
    text: "Pošlete stručný popis provozu, technologii nebo požadavek úřadu. Navrhneme vhodný rozsah měření, studie nebo dokumentace.",
    primaryLabel: "Poslat podklady k posouzení",
    primaryHref: contactUrl("Nejsem si jistý"),
    secondaryLabel: "Přehled provozů",
    secondaryHref: "/provozy-a-technologie"
  },
  typicalOrders: {
    text: "Potřebujete měření, studii nebo školení? Pošlete stručný popis provozu nebo výzvu úřadu.",
    primaryLabel: globalCta,
    primaryHref: "/kontakt"
  },
  poradna: {
    text: "Pošlete rozhodnutí, výzvu nebo stručný popis situace. Na základě podkladů navrhneme další postup.",
    primaryLabel: "Kontaktovat NATURCHEM",
    primaryHref: "/kontakt"
  }
} as const satisfies Record<string, PageCtaStripProps>;
