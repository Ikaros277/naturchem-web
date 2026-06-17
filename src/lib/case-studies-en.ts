export type CaseStudy = {
  title: string;
  narrative: string;
  output: string;
};

export type CaseStudyCategory = {
  slug: string;
  title: string;
  short: string;
  serviceHref: string;
  cases: CaseStudy[];
};

export const caseStudyCategories: CaseStudyCategory[] = [
  {
    slug: "mereni-emisi",
    title: "Emission measurements",
    short: "Stationary sources, boiler plants, technologies.",
    serviceHref: "/sluzby/mereni-emisi",
    cases: [
      {
        title: "Emission measurements at a glassworks",
        narrative:
          "The operator needed to verify emissions from a process source and prepare supporting documentation for follow-up discussions with the authority. We assessed the measurement location, proposed the measurement scope, carried out measurements under representative operating conditions and prepared a report with commentary on the results.",
        output: "Emission measurement report and technical evaluation for the operator."
      },
      {
        title: "Emission measurements at a paint shop (VOC/TOC)",
        narrative:
          "After a technology upgrade, emission characteristics had to be verified. We proposed the measurement scope based on the operating rules, carried out field measurements and evaluated the results for further operational steps.",
        output: "Report with interpretation for the operator and project team."
      },
      {
        title: "Boiler plant after source modernisation",
        narrative:
          "After equipment replacement, the operator needed to document the new emission status. We verified representativeness of operation and measured key components including ancillary parameters.",
        output: "Measurement report for the authority and operational decision-making."
      }
    ]
  },
  {
    slug: "hygienicka-mereni",
    title: "Occupational hygiene measurements",
    short: "Workplace environment, job categorisation.",
    serviceHref: "/sluzby/pracovni-prostredi",
    cases: [
      {
        title: "Workplace environment in a welding shop",
        narrative:
          "The employer was addressing job categorisation for multiple positions. We designed measurement scenarios according to shift patterns, measured chemical substances and noise under real operating conditions and prepared an evaluation for occupational health and safety.",
        output: "Workplace factor reports and supporting documentation for the regional hygiene station."
      },
      {
        title: "Categorisation update in a production hall",
        narrative:
          "After a change in workplace layout, exposure had to be reassessed. We measured noise, microclimate and other factors in relation to work operations.",
        output: "Supporting documentation for updating internal records and communication with the regional hygiene station."
      },
      {
        title: "Dust exposure at a crushing line",
        narrative:
          "A technology change created a risk of increased dust exposure. We carried out personal and area measurements during representative operations and proposed mitigation measures.",
        output: "Report with recommendations for organisational and technical adjustments."
      }
    ]
  },
  {
    slug: "rozptylove-studie",
    title: "Dispersion studies",
    short: "Immissions, operating variants.",
    serviceHref: "/sluzby/rozptylove-studie",
    cases: [
      {
        title: "Dispersion study for waste management",
        narrative:
          "The investor was preparing a project and needed supporting documentation for administrative proceedings. We prepared a study linked to the technology, operating regime and transport within the site.",
        output: "Dispersion study with conclusions for the investor and the authority."
      },
      {
        title: "Capacity variants for a production plant",
        narrative:
          "Before submitting documentation, operating variants had to be compared. We carried out variant immission modelling and recommended the more technically viable solution.",
        output: "Study with variant comparison for the investor's decision."
      },
      {
        title: "Impact of a glassworks on the surroundings",
        narrative:
          "For the proposed project, the influence of furnaces on nearby buildings had to be evaluated. We modelled immission contributions including operating scenarios and proposed mitigation measures.",
        output: "Dispersion study for permitting proceedings."
      }
    ]
  },
  {
    slug: "hlukove-studie",
    title: "Noise studies",
    short: "Field work, noise studies, transport.",
    serviceHref: "/sluzby/hlukove-studie",
    cases: [
      {
        title: "Noise study for a recycling site",
        narrative:
          "The investor needed to assess daytime and night-time operation near residential buildings. We developed a scenario model, identified dominant sources and proposed technical mitigation measures.",
        output: "Noise study with variants for permitting proceedings."
      },
      {
        title: "Noise from handling and storage within a site",
        narrative:
          "The operator needed to verify noise in daytime and night-time modes relative to neighbouring buildings. We carried out field measurements, identified dominant sources and proposed organisational and technical measures.",
        output: "Noise measurement report for discussions with the authority."
      },
      {
        title: "Noise after HVAC installation",
        narrative:
          "After unit installation, noise impact had to be verified. We carried out field measurements under agreed operating modes and proposed practical measures.",
        output: "Noise measurement report for occupancy approval."
      }
    ]
  },
  {
    slug: "odborne-posudky",
    title: "Expert reports",
    short: "Statements for authorities.",
    serviceHref: "/sluzby/odborne-posudky",
    cases: [
      {
        title: "Expert report on a technology change",
        narrative:
          "The authority requested a technically substantiated statement on the operational change. We analysed the technology, emission balance and linked to available measurements.",
        output: "Expert report with recommended measures."
      },
      {
        title: "Supplement after authority comments",
        narrative:
          "After the authority's statement, technical sections had to be refined quickly. We supplemented data, adjusted the argumentation and aligned follow-up supporting documentation.",
        output: "Supplemented statement for the next step in the proceedings."
      },
      {
        title: "Measurability at multiple exhaust stacks",
        narrative:
          "The operation had multiple stacks with unclear measurement conditions. We inspected the routes and proposed a phased measurement plan without unnecessary downtime.",
        output: "Technical opinion and measurement plan."
      }
    ]
  },
  {
    slug: "eia",
    title: "EIA",
    short: "Scoping, study coordination.",
    serviceHref: "/sluzby/eia-oznameni-zameru",
    cases: [
      {
        title: "EIA for a new industrial project",
        narrative:
          "The project required alignment of multiple specialist inputs. We set the documentation strategy, coordinated studies and prepared technical argumentation for the EIA phase.",
        output: "Specialist supporting documentation for scoping."
      },
      {
        title: "Site expansion",
        narrative:
          "The investor needed to link noise, air quality and transport in a single process. We aligned the dispersion and noise studies with the technical description of the project.",
        output: "Supporting documentation for scoping."
      },
      {
        title: "Response to comments",
        narrative:
          "After the authority's statement, documentation had to be supplemented quickly. We analysed the comments and prepared follow-up specialist outputs.",
        output: "Supplemented documentation for continuation of the proceedings."
      }
    ]
  },
  {
    slug: "skoleni-chemicke-legislativy",
    title: "Chemical legislation training",
    short: "Chemical substances, safety data sheets, operating rules.",
    serviceHref: "/sluzby/skoleni-chemicke-legislativy",
    cases: [
      {
        title: "Employee training in a production operation",
        narrative:
          "The company needed to harmonise practice when using chemical substances across shifts. We prepared training linked to real activities, safety data sheets, internal container labelling and storage rules.",
        output: "Training outline, attendance sheet and completion certificate."
      },
      {
        title: "Safety data sheets and chemical storage",
        narrative:
          "The operation was addressing availability of safety data sheets, labelling and basic storage rules. We focused training on practical orientation in data sheets, storage conditions and employee responsibilities.",
        output: "Practical training for warehouse, maintenance and supervisory staff."
      },
      {
        title: "Introduction of a new chemical mixture into operation",
        narrative:
          "Before changing the preparations in use, operators had to be trained and rules for working with the mixture had to be set. We covered the safety data sheet, labelling, personal protective equipment and operating procedures.",
        output: "Training with recommendations for supplementing internal rules."
      }
    ]
  },
  {
    slug: "dalsi",
    title: "Other projects",
    short: "IPPC, operating rules, ISPOP.",
    serviceHref: "/sluzby/ippc-integrovana-povoleni",
    cases: [
      {
        title: "Operating rules update",
        narrative:
          "A technology change required revision of operating documentation. We reviewed operating regimes and linked to current emission measurements.",
        output: "Updated operating rules."
      },
      {
        title: "Supporting documentation for ISPOP",
        narrative:
          "The operator needed to compile integrated pollution reporting records. We prepared the record structure and supplemented technical data.",
        output: "Supporting documentation for ISPOP."
      },
      {
        title: "GHG reporting for a production plant",
        narrative:
          "The operator needed to align measurement and calculation outputs for greenhouse gas reporting. We proposed a data structure, linked to available reports and supplemented missing inputs to close the reporting period.",
        output: "Supporting documentation for GHG reporting and internal data verification."
      },
      {
        title: "Monitoring around a site",
        narrative:
          "The authority required long-term immission monitoring. We proposed measurement locations, frequency and evaluation method.",
        output: "Monitoring report."
      }
    ]
  }
];

export function getCaseStudyCategory(slug: string): CaseStudyCategory | undefined {
  return caseStudyCategories.find((c) => c.slug === slug);
}
