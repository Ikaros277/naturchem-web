export const aboutPageMetadata = {
  title: {
    absolute: "O NATURCHEM – měření, studie a povolovací podklady"
  },
  description:
    "Akreditovaná měřicí a poradenská firma — tým pod garancí Ing. Františka Heziny. Měření, studie a povolovací podklady pro průmysl, investory a veřejnou správu — déle než 36 let praxe."
} as const;

export const aboutPageContent = {
  schemaName: "O NATURCHEM",
  breadcrumbs: [
    { name: "Úvod", href: "/" },
    { name: "O NATURCHEM" }
  ],
  hero: {
    eyebrow: "Akreditovaná měřicí a poradenská firma",
    title: "O NATURCHEM",
    lead:
      "Jsme tým měřicích a environmentálních specialistů pod odbornou garancí Ing. Františka Heziny. Zajistíme měření, studie i povolovací podklady — pro průmysl, investory, projektanty i veřejnou správu."
  },
  trustBandHeading: "Důvěryhodnost a oprávnění",
  statsAriaLabel: "Zkušenosti v číslech",
  whoWeAre: {
    title: "Kdo jsme",
    paragraphs: [
      "NATURCHEM, s.r.o. je akreditovaná měřicí a poradenská firma. Měříme a zpracováváme studie z Havlíčkova Brodu, Českých Budějovic a Prahy; zakázky v terénu řešíme po celé ČR.",
      "Za odbornou stránku zakázek stojí tým pod garancí Ing. Františka Heziny — od návrhu rozsahu po výstup pro úřad. Pracujeme pro průmyslové provozy, investory, projektanty i veřejnou správu.",
      "Nejsme jen laboratoř s jedním typem výstupu. Měření, výpočty, studie i dokumentaci pro úřady vyřešíte u nás najednou — bez koordinace více dodavatelů."
    ],
    relatedLinksIntro:
      "Chcete vědět, co konkrétně umíme? Přehled služeb, typů provozů a referencí najdete v sekcích",
    relatedLinks: [
      { label: "Služby", href: "/sluzby" },
      { label: "Provozy a technologie", href: "/provozy-a-technologie" },
      { label: "Reference z praxe", href: "/reference" },
      { label: "FAQ", href: "/faq" }
    ]
  },
  guarantee: {
    title: "Odborná garance",
  },
  guaranteeCredentials:
    "Za odbornou stránku zakázek odpovídá Ing. František Hezina — jednatel, odborná garance, soudní znalec, autorizovaná osoba pro měření emisí, odborné posudky, rozptylové studie, ověřování emisí skleníkových plynů a oznámení EIA.",
  team: {
    title: "Tým"
  },
  personSchema: {
    jobTitle: "Jednatel, odborná garance zakázek"
  },
  breadcrumbSchema: {
    home: "Úvod"
  }
} as const;
