export const whyNaturchemPageMetadata = {
  title: {
    absolute: "Why NATURCHEM | Accredited measurements and expert outputs for authorities"
  },
  description:
    "Why choose NATURCHEM: accredited testing laboratory No. 1599, EIA authorisations, experience with public health and environmental authorities, measurements and follow-up studies across the Czech Republic."
} as const;

export const whyNaturchemPageContent = {
  title: "Why NATURCHEM",
  lead:
    "NATURCHEM, s.r.o. is a Czech accredited testing laboratory and authorised body. We measure emissions, workplace environment and noise, prepare dispersion and noise studies, expert reports and EIA documentation for regional authorities, public health offices and environmental inspectorates — in one team.",
  breadcrumbLabel: "Why NATURCHEM",
  sections: {
    accreditation: {
      heading: "Accredited laboratory",
      paragraphs: [
        "We are accredited testing laboratory No. 1599 under ČSN EN ISO/IEC 17025. Accreditation certificate No. 562/2023 and the scope appendix are publicly available.",
        "The accredited scope covers emission measurements, workplace and indoor air, noise, vibration, microclimate, lighting and related sampling."
      ]
    },
    authorizations: {
      heading: "Authorisations and expert activity",
      paragraphs: [
        "We are authorised for one-off emission measurements, dispersion studies, expert reports under the Air Protection Act and GHG verification. We also hold EIA authorisation.",
        "Managing director Ing. František Hezina performs court-appointed expert activity. The combination of accreditation, authorisation and authority-facing practice reduces the risk that an output cannot be used in administrative proceedings."
      ]
    },
    authorities: {
      heading: "Knowledge of authority requirements",
      paragraphs: [
        "We prepare outputs with the end recipient in mind: operators, designers, investors, regional public health authorities, the Czech Environmental Inspectorate, regional authorities, building offices and EIA proceedings.",
        "We routinely handle inspection requests, permit application supplements, operational changes, job categorisation, ISPOP and annual emission reporting."
      ]
    },
    scope: {
      heading: "Measurements and follow-up expert outputs",
      paragraphs: [
        "From a single supplier you can obtain emission, workplace and noise measurements, dispersion or noise studies, expert reports, operating rules, EIA documentation or ISPOP support.",
        "Operators do not need to coordinate several suppliers with different scopes of authorisation."
      ]
    },
    customers: {
      heading: "Who we work for",
      items: [
        "operators of air pollution sources and industrial technologies",
        "corporate environmental managers and EHS/HSE managers",
        "manufacturing plants and industrial companies",
        "investors and designers",
        "municipalities and public sector organisations",
        "construction companies and technology suppliers"
      ]
    },
    coverage: {
      heading: "Coverage",
      paragraph:
        "We operate across the Czech Republic from Havlíčkův Brod, České Budějovice and Prague. Field measurements are scheduled according to source type, representative operating regime and notification deadlines."
    },
    proof: {
      heading: "References and typical projects",
      paragraph:
        "Over more than three decades we have worked with major industrial companies, energy operators, automotive and the public sector. See References and Typical projects for examples."
    }
  },
  links: {
    accreditation: { label: "Accreditation & authorisations", href: "/akreditace-autorizace-dokumenty" },
    services: { label: "Services overview", href: "/sluzby" },
    reference: { label: "References", href: "/reference" },
    caseStudies: { label: "Typical projects", href: "/typicke-zakazky" },
    faq: { label: "FAQ", href: "/faq" },
    contact: { label: "Contact", href: "/kontakt" }
  }
} as const;
