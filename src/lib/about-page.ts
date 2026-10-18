export const aboutPageMetadata = {
  title: {
    absolute: "O společnosti NATURCHEM"
  },
  description:
    "Akreditovaná laboratoř pod garancí Ing. Františka Heziny. Tým, historie a odborné zázemí — více než 36 let praxe."
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
  trustBandHeading: "Naše odborná oprávnění",
  statsAriaLabel: "Zkušenosti v číslech",
  whoWeAre: {
    title: "Kdo jsme",
    paragraphs: [
      "Jsme akreditovaná měřicí a poradenská firma. Z Havlíčkova Brodu, Českých Budějovic a Prahy zajišťujeme zakázky po celé České republice.",
      "Zakázky vedeme pod odbornou garancí Ing. Františka Heziny, od návrhu měření či studie po předání výsledků. Pracujeme pro průmyslové provozy, investory, projektanty i veřejnou správu.",
      "V jednom týmu zajišťujeme měření, výpočty, studie i dokumentaci pro úřady. Koordinaci jednotlivých odborných podkladů převezmeme za Vás."
    ],
    relatedLinksIntro:
      "Prohlédněte si naše služby, zkušenosti a reference:",
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
    "Za odborné vedení zakázek odpovídá Ing. František Hezina — jednatel, soudní znalec a autorizovaná osoba pro měření emisí, odborné posudky, rozptylové studie a oznámení EIA.",
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
