export const aboutPageMetadata = {
  title: {
    absolute: "Über NATURCHEM – Messungen, Studien und Genehmigungsunterlagen"
  },
  description:
    "An accredited measurement and consulting company — a team under the professional supervision of Ing. František Hezina. Measurements, studies and permitting documentation for industry, investors and public authorities — more than 36 years of experience."
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
      "We are a team of measurement and environmental specialists under the professional supervision of Ing. František Hezina. We provide measurements, studies and permitting documentation — for industry, investors, designers and public authorities."
  },
  trustBandHeading: "Glaubwürdigkeit und Berechtigungen",
  statsAriaLabel: "Erfahrung in Zahlen",
  whoWeAre: {
    title: "Wer wir sind",
    paragraphs: [
      "NATURCHEM, s.r.o. is an accredited measurement and consulting company. We carry out measurements and prepare studies from Havlíčkův Brod, České Budějovice and Prague; we handle field projects throughout the Czech Republic.",
      "The technical side of every project is managed by a team under the supervision of Ing. František Hezina — from scoping through to deliverables for authorities. We work for industrial facilities, investors, designers and public authorities.",
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
    "Ing. František Hezina is responsible for the technical side of projects — managing director, professional supervision, court-appointed expert, authorised person for emission measurements, expert reports, dispersion studies, greenhouse gas emission verification and EIA notifications.",
  team: {
    title: "Team"
  },
  personSchema: {
    jobTitle: "Geschäftsführer, professionelle Betreuung von Projekten"
  },
  breadcrumbSchema: {
    home: "Heim"
  }
} as const;
