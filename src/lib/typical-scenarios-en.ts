import { contactUrl } from "@/lib/contact-url";

export type TypicalScenario = {
  title: string;
  narrative: string;
  learnMoreHref: string;
  ctaLabel: string;
  ctaHref: string;
};

/**
 * Project examples from practice — each card links to a service detail and to an inquiry with a sensible preset.
 */
export const typicalScenarios: TypicalScenario[] = [
  {
    title: "Emission measurements at a paint shop",
    narrative:
      "We measure VOC/TOC, particulate matter and related parameters from exhaust stacks and filtration, verify representative operating conditions and deliver a report for operation and air protection authorities.",
    learnMoreHref: "/sluzby/mereni-emisi",
    ctaLabel: "Request measurements",
    ctaHref: contactUrl("Měření emisí")
  },
  {
    title: "Boiler plant or combustion source measurements",
    narrative:
      "Periodic and operational measurements at boiler plants, burners, cogeneration and other sources with a report for operating permit, authority or ISPOP.",
    learnMoreHref: "/sluzby/mereni-emisi",
    ctaLabel: "Request measurements",
    ctaHref: contactUrl("Měření emisí")
  },
  {
    title: "Dispersion study for a new or changed source",
    narrative:
      "Immission contribution modelling for permitting, capacity change, EIA or discussions with the regional authority.",
    learnMoreHref: "/sluzby/rozptylove-studie",
    ctaLabel: "Request study / report",
    ctaHref: contactUrl("Rozptylové studie")
  },
  {
    title: "Noise study for operation, construction or technology",
    narrative:
      "Noise calculation and evaluation for sites, HVAC, heat pumps, industrial sources or building proceedings.",
    learnMoreHref: "/sluzby/hlukove-studie",
    ctaLabel: "Request study / report",
    ctaHref: contactUrl("Hlukové studie")
  },
  {
    title: "Workplace environment measurements for regional hygiene station",
    narrative:
      "Workplace environment measurements — dust, chemical substances, noise, microclimate — for job categorisation, occupational health and safety documentation or a hygiene station request.",
    learnMoreHref: "/sluzby/pracovni-prostredi",
    ctaLabel: "Request measurements",
    ctaHref: contactUrl("Měření pracovního prostředí")
  },
  {
    title: "Supporting documentation for regional authority or Czech Environmental Inspectorate",
    narrative:
      "We align emission measurement reports, studies, expert reports and operating documentation with a request or integrated permit.",
    learnMoreHref: "/sluzby/mereni-emisi",
    ctaLabel: "Send documents for review",
    ctaHref: contactUrl("Nejsem si jistý")
  },
  {
    title: "EIA notification and supporting documentation for proceedings",
    narrative:
      "We keep project notification, specialist appendices and scoping inputs together with measurements, studies and project documentation.",
    learnMoreHref: "/sluzby/eia-oznameni-zameru",
    ctaLabel: "Request study / report",
    ctaHref: contactUrl("EIA a oznámení záměru")
  },
  {
    title: "Operating rules or expert report",
    narrative:
      "Preparation under the Air Protection Act, link to measurements and operation, outputs for administrative proceedings and technology changes.",
    learnMoreHref: "/sluzby/provozni-rady",
    ctaLabel: "Request study / report",
    ctaHref: contactUrl("Provozní řády")
  },
  {
    title: "ISPOP and operating records",
    narrative:
      "Integrated pollution reporting records, data verification against measurements and permits, preparation of supporting documentation for reporting.",
    learnMoreHref: "/sluzby/ispop",
    ctaLabel: "Request service",
    ctaHref: contactUrl("ISPOP")
  },
  {
    title: "Chemical legislation training in production",
    narrative:
      "Practical chemical legislation training for operation, warehouse, production or laboratory focused on safety data sheets, labelling, storage and operating rules.",
    learnMoreHref: "/sluzby/skoleni-chemicke-legislativy",
    ctaLabel: "Request training",
    ctaHref: contactUrl("Školení chemického zákona / chemické legislativy")
  },
  {
    title: "Review of an authority request or decision",
    narrative:
      "Send a request or decision. We will distinguish what must be documented immediately, what can be supplemented later and which deadlines to watch.",
    learnMoreHref: "/faq",
    ctaLabel: "Have project scope reviewed",
    ctaHref: contactUrl("Nejsem si jistý")
  }
];
