import type { ServiceIconKey } from "@/lib/service-icons";

export const companyStatsIntro =
  "Measurements, studies and expert documentation for industrial facilities, designers, investors and public authorities — we have been doing this for more than 36 years.";

export const companyStats: ReadonlyArray<{
  value: string;
  label: string;
  icon: ServiceIconKey;
}> = [
  {
    value: "14,000+",
    label: "projects",
    icon: "process-vystup"
  },
  {
    value: "6,000+",
    label: "measurements",
    icon: "emise"
  },
  {
    value: "36 years",
    label: "of experience",
    icon: "process-posouzeni"
  }
];

export const companyStatsNote =
  "The figures shown are rounded data from our internal records of projects and protocol outputs.";

export const longTermPracticeTitle = "Long-standing practice in measurements and permitting documentation";

export const longTermPracticeParagraphs = [
  "We build on thousands of completed projects and on-site measurements. Over the long term we work for boiler plants, paint shops, biogas plants, glassworks, welding shops, recycling sites, agricultural facilities, automotive operations and municipal and public-sector clients.",
  "We typically provide emission measurements, workplace environment measurements, noise measurements, dispersion and noise studies, EIA documentation, expert reports, operating rules, ISPOP and technical advisory for permitting and operational decision-making."
] as const;

export const practiceFromRecordsTitle = "Experience backed by completed projects";

export const practiceFromRecordsParagraphs = [
  "We build on long-term records of projects, on-site measurements and protocol outputs. Over the long term we work for industrial, energy, agricultural, municipal and public-sector clients.",
  "We most often handle emission measurements, workplace environment, noise, dispersion and noise studies, expert reports, operating rules, EIA documentation, ISPOP, operational records and verification of emission data.",
  "As a result, we do not treat a project in isolation as a single measurement, but in the context of the purpose of the deliverable — for the operator, designer, investor, KHS, ČIŽP, regional authority, building permitting or EIA."
] as const;

export const experienceBullets = [
  "14,000+ projects",
  "6,000+ measurements",
  "36 years of experience",
  "long-standing work for industrial, energy, agricultural, municipal and public-sector clients"
] as const;
