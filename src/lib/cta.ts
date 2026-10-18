/** Globální a kontextové texty výzev k akci na webu NATURCHEM. */

import { contactCategoryUrl, contactFormHref, contactUrl } from "@/lib/contact-url";

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
    text: "Pošlete nám svůj požadavek nebo podklady. Navrhneme postup pro Vaši zakázku.",
    primaryLabel: "Kontaktovat NATURCHEM",
    primaryHref: contactFormHref
  },
  uncertain: {
    text: "Pošlete nám rozhodnutí, výzvu nebo popis záměru. Navrhneme vhodný rozsah měření, studie nebo dokumentace.",
    primaryLabel: "Poslat podklady k posouzení",
    primaryHref: contactUrl("Nejsem si jistý")
  },
  servicesIndex: {
    text: "Pošlete rozhodnutí úřadu, provozní řád nebo popis technologie. Doporučíme správný rozsah měření nebo studie.",
    primaryLabel: globalCta,
    primaryHref: contactFormHref
  },
  accreditation: {
    text: "Pošlete nám popis zdroje nebo pracoviště. Navrhneme rozsah měření a připravíme nabídku.",
    primaryLabel: "Kontaktovat NATURCHEM",
    primaryHref: contactFormHref,
    secondaryLabel: "Přehled služeb",
    secondaryHref: "/sluzby"
  },
  cooperation: {
    text: "Pro Váš provoz nebo projekt navrhneme měření, studie i dokumentaci. Pošlete nám zadání.",
    primaryLabel: "Kontaktovat NATURCHEM",
    primaryHref: contactFormHref,
    secondaryLabel: "Přehled služeb",
    secondaryHref: "/sluzby"
  },
  training: {
    text: "Obsah školení přizpůsobíme typu provozu, rozsahu chemických látek a skupině zaměstnanců.",
    primaryLabel: "Poptat školení",
    primaryHref: contactUrl("Školení chemického zákona / chemické legislativy")
  },
  measurement: {
    text: "Pošlete nám popis technologie, požadavek úřadu nebo dostupné podklady. Navrhneme měření, odběry a potřebné odborné studie.",
    primaryLabel: "Poptat měření",
    primaryHref: contactUrl("Měření emisí"),
    secondaryLabel: "Akreditace a oprávnění",
    secondaryHref: "/akreditace-autorizace-dokumenty"
  },
  reference: {
    text: "Máte podobný provoz nebo požadavek úřadu? Pošlete výzvu, povolení nebo stručný popis — navrhneme rozsah a termín.",
    primaryLabel: "Poslat podklady k posouzení",
    primaryHref: contactUrl("Nejsem si jistý")
  },
  sectorIndex: {
    text: "Pošlete nám popis technologie, požadavek úřadu nebo projekt. Navrhneme potřebná měření, studie a dokumentaci.",
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
    primaryHref: contactFormHref
  },
  poradna: {
    text: "Pošlete rozhodnutí, výzvu nebo stručný popis situace. Na základě podkladů navrhneme další postup.",
    primaryLabel: "Kontaktovat NATURCHEM",
    primaryHref: contactFormHref
  },
  equipment: {
    text: "Měřicí techniku vybereme podle Vašeho zdroje, pracoviště a sledovaných parametrů. Pošlete nám zadání nebo výzvu úřadu.",
    primaryLabel: "Poptat měření",
    primaryHref: contactUrl("Nejsem si jistý"),
    secondaryLabel: "Akreditace a rozsah laboratoře",
    secondaryHref: "/akreditace-autorizace-dokumenty"
  },
  sales: {
    text: "Máte zájem o přístroj nebo příslušenství z naší nabídky? Napište typ přístroje, parametry nebo přiložte poptávku — připravíme nabídku.",
    primaryLabel: "Poptat přístroj",
    primaryHref: contactCategoryUrl("pristroj"),
    secondaryLabel: "Laboratorní služby — měření emisí",
    secondaryHref: "/sluzby/mereni-emisi"
  }
} as const satisfies Record<string, PageCtaStripProps>;
