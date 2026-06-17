export const aboutPageMetadata = {
  title: {
    absolute: "About NATURCHEM – measurements, studies and permitting documentation"
  },
  description:
    "An accredited measurement and consulting company — a team under the professional supervision of Ing. František Hezina. Measurements, studies and permitting documentation for industry, investors and public authorities — more than 36 years of experience."
} as const;

export const aboutPageContent = {
  schemaName: "About NATURCHEM",
  breadcrumbs: [
    { name: "Home", href: "/" },
    { name: "About NATURCHEM" }
  ],
  hero: {
    eyebrow: "Accredited measurement and consulting company",
    title: "About NATURCHEM",
    lead:
      "We are a team of measurement and environmental specialists under the professional supervision of Ing. František Hezina. We provide measurements, studies and permitting documentation — for industry, investors, designers and public authorities."
  },
  trustBandHeading: "Credibility and authorisations",
  statsAriaLabel: "Experience in numbers",
  whoWeAre: {
    title: "Who we are",
    paragraphs: [
      "NATURCHEM, s.r.o. is an accredited measurement and consulting company. We carry out measurements and prepare studies from Havlíčkův Brod, České Budějovice and Prague; we handle field projects throughout the Czech Republic.",
      "The technical side of every project is managed by a team under the supervision of Ing. František Hezina — from scoping through to deliverables for authorities. We work for industrial facilities, investors, designers and public authorities.",
      "We are not just a laboratory with a single type of output. Measurements, calculations, studies and documentation for authorities can all be handled with us — without coordinating multiple suppliers."
    ],
    relatedLinksIntro:
      "Want to know what we can do in practice? You will find an overview of services, facility types and references in the sections",
    relatedLinks: [
      { label: "Services", href: "/sluzby" },
      { label: "Facilities and technologies", href: "/provozy-a-technologie" },
      { label: "Case references", href: "/reference" },
      { label: "FAQ", href: "/faq" }
    ]
  },
  guarantee: {
    title: "Professional supervision"
  },
  guaranteeCredentials:
    "Ing. František Hezina is responsible for the technical side of projects — managing director, professional supervision, court-appointed expert, authorised person for emission measurements, expert reports, dispersion studies, greenhouse gas emission verification and EIA notifications.",
  team: {
    title: "Team"
  },
  personSchema: {
    jobTitle: "Managing director, professional supervision of projects"
  },
  breadcrumbSchema: {
    home: "Home"
  }
} as const;
