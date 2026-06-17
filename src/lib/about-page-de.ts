export const aboutPageMetadata = {
  title: {
    absolute: "Über NATURCHEM – Messungen, Studien und Genehmigungsunterlagen"
  },
  description:
    "Ein akkreditiertes Mess- und Beratungsunternehmen – ein Team unter der professionellen Aufsicht von Ing. František Hezina. Messungen, Studien und Genehmigungsunterlagen für Industrie, Investoren und Behörden – mehr als 36 Jahre Erfahrung."
} as const;

export const aboutPageContent = {
  schemaName: "Über NATURCHEM",
  breadcrumbs: [
    { name: "Heim", href: "/" },
    { name: "Über NATURCHEM" }
  ],
  hero: {
    eyebrow: "Akkreditiertes Mess- und Beratungsunternehmen",
    title: "Über NATURCHEM",
    lead:
      "Wir sind ein Team von Mess- und Umweltspezialisten unter der professionellen Aufsicht von Ing. František Hezina. Wir erstellen Messungen, Studien und Genehmigungsunterlagen – für Industrie, Investoren, Planer und Behörden."
  },
  trustBandHeading: "Glaubwürdigkeit und Berechtigungen",
  statsAriaLabel: "Erfahrung in Zahlen",
  whoWeAre: {
    title: "Wer wir sind",
    paragraphs: [
      "NATURCHEM, s.r.o. ist ein akkreditiertes Mess- und Beratungsunternehmen. Wir führen Messungen durch und erstellen Studien in Havlíčkův Brod, České Budějovice und Prag; Wir wickeln Feldprojekte in der gesamten Tschechischen Republik ab.",
      "Die technische Seite jedes Projekts wird von einem Team unter der Aufsicht von Ing. František Hezina verwaltet – vom Scoping bis hin zu den Ergebnissen für die Behörden. Wir arbeiten für Industrieanlagen, Investoren, Planer und Behörden.",
      "Wir sind nicht nur ein Labor mit einer einzigen Ausgabeart. Messungen, Berechnungen, Studien und Dokumentationen für Behörden können mit uns abgewickelt werden – ohne die Koordination mehrerer Lieferanten."
    ],
    relatedLinksIntro:
      "Möchten Sie wissen, was wir in der Praxis tun können? Eine Übersicht über Leistungen, Einrichtungsarten und Referenzen finden Sie in den Rubriken",
    relatedLinks: [
      { label: "Dienstleistungen", href: "/sluzby" },
      { label: "Einrichtungen und Technologien", href: "/provozy-a-technologie" },
      { label: "Fallreferenzen", href: "/reference" },
      { label: "FAQ", href: "/faq" }
    ]
  },
  guarantee: {
    title: "Professionelle Betreuung"
  },
  guaranteeCredentials:
    "Ing. František Hezina ist für die technische Seite der Projekte verantwortlich – Geschäftsführer, Fachaufsicht, gerichtlich bestellter Sachverständiger, bevollmächtigte Person für Emissionsmessungen, Gutachten, Ausbreitungsstudien, Überprüfung der Treibhausgasemissionen und EIA-Meldungen.",
  team: {
    title: "Unser Team"
  },
  personSchema: {
    jobTitle: "Geschäftsführer, professionelle Betreuung von Projekten"
  },
  breadcrumbSchema: {
    home: "Heim"
  }
} as const;
