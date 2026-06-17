import type { ServiceIconKey } from "@/lib/service-icons";

export const accreditationPageMetadata = {
  title: {
    absolute: "Accreditation, authorisations and professional qualifications | NATURCHEM"
  },
  description:
    "Overview of NATURCHEM laboratory accreditation No. 1599, EIA authorisations, dispersion studies, expert reports and GHG. Documents available for download."
} as const;

export const accreditationFacts = [
  "Certificate of accreditation No. 562/2023",
  "Testing laboratory No. 1599, ME and PP departments",
  "ČSN EN ISO/IEC 17025:2018",
  "Accreditation valid until 26 October 2028"
] as const;

export const customerBenefits: Array<{ icon: ServiceIconKey; text: string }> = [
  { icon: "ippc", text: "Results that are traceable and defensible during inspection" },
  { icon: "bezpecnostni-listy", text: "Protocols prepared directly for ČIŽP, KHS or the building authority" },
  { icon: "skoleni", text: "Professional interpretation of results — not just numbers" },
  { icon: "povoleni", text: "Always in line with the valid certificate and its annex" }
];

export const scopeGroups = [
  {
    title: "Emissions from stationary sources",
    text: "Sampling, determination of emission components, TOC/VOC, particulates, NOx, CO, SO₂, O₂ and related parameters."
  },
  {
    title: "Workplace and indoor air",
    text: "Dust, organic substances, chemicals, aerosols, fibres and operational exposure."
  },
  {
    title: "Microclimate",
    text: "Temperature, pressure, humidity and air velocity in the workplace environment."
  },
  {
    title: "Lighting",
    text: "Artificial lighting in indoor and outdoor environments."
  },
  {
    title: "Vibration",
    text: "Hand-transmitted vibration and whole-body vibration for hygiene and occupational health and safety purposes."
  },
  {
    title: "Noise",
    text: "Noise in workplace and non-workplace environments according to applicable methods."
  }
] as const;

export const accreditationPageContent = {
  schemaName: "Accreditation, authorisations and professional qualifications",
  breadcrumbs: [
    { name: "Home", href: "/" },
    { name: "Accreditation and qualifications" }
  ],
  hero: {
    eyebrow: "Evidence of professional competence",
    title: "Accreditation, authorisations and professional qualifications",
    lead:
      "Results from NATURCHEM stand up to inspection by ČIŽP, KHS and in building permitting proceedings — here are the certificates behind them."
  },
  overview: {
    factsTitle: "Key accreditation details",
    benefitsTitle: "What accreditation means for the client"
  },
  labScope: {
    title: "Accredited laboratory scope (ISO/IEC 17025)",
    appendixIntro: "The full list of methods and analysts is in the",
    appendixLinkLabel: "annex to the certificate of accreditation (PDF)",
    equipmentNote:
      "The laboratory uses analysers, sampling equipment, acoustic and vibration instruments, lux meters, pumps and laboratory facilities for sample preparation and evaluation.",
    equipmentLinkLabel: "Selected instrumentation"
  },
  authorizations: {
    title: "Authorisations, qualifications and documents",
    intro:
      "EIA, dispersion and noise studies or expert reports do not fall under laboratory accreditation — they are covered by separate authorisations held by Ing. Hezina:",
    documentsSubheading: "Documents for download",
    downloadButtonLabel: "Download PDF",
    downloadAriaSuffix: "— download PDF"
  }
} as const;
