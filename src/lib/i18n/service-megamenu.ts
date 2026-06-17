import type { Locale } from "@/lib/i18n/locales";
import { serviceMegaGroups as serviceMegaGroupsCs } from "@/lib/service-megamenu";

const serviceMegaGroupsEn = [
  {
    title: "Measurements",
    links: [
      { href: "/sluzby/mereni-emisi", label: "Emission measurements" },
      { href: "/sluzby/pracovni-prostredi", label: "Workplace environment" },
      { href: "/sluzby/mereni-hluku", label: "Noise & acoustics" },
      { href: "/sluzby/mereni-vibraci", label: "Vibration" },
      { href: "/sluzby/mereni-osvetleni", label: "Lighting" },
      { href: "/sluzby/mereni-mikroklimatu", label: "Microclimate" }
    ]
  },
  {
    title: "Studies & modelling",
    links: [
      { href: "/sluzby/rozptylove-studie", label: "Dispersion studies" },
      { href: "/sluzby/hlukove-studie", label: "Noise studies" },
      { href: "/sluzby/akusticke-posudky", label: "Acoustic assessments" },
      { href: "/sluzby/modelove-vypocty", label: "Modelling" },
      { href: "/sluzby/imisni-dopady", label: "Immission & noise impacts" }
    ]
  },
  {
    title: "Documentation & permitting",
    links: [
      { href: "/sluzby/eia-oznameni-zameru", label: "EIA & project notification" },
      { href: "/sluzby/odborne-posudky", label: "Expert reports" },
      { href: "/sluzby/povoleni-provozu", label: "Operating permits" },
      { href: "/sluzby/provozni-rady", label: "Operating rules" },
      { href: "/sluzby/ippc-integrovana-povoleni", label: "IPPC & integrated permits" },
      { href: "/sluzby/ispop", label: "ISPOP & operational records" },
      { href: "/sluzby/ghg-overovani", label: "Greenhouse gas (GHG) reporting" }
    ]
  },
  {
    title: "Training & support",
    links: [
      { href: "/sluzby/skoleni-chemicke-legislativy", label: "Chemical legislation training" },
      { href: "/sluzby/bezpecnostni-listy", label: "Safety data sheets" },
      { href: "/sluzby/chemicke-latky", label: "Chemicals in operations" }
    ]
  }
] as const;

export function getServiceMegaGroups(locale: Locale) {
  return locale === "en" ? serviceMegaGroupsEn : serviceMegaGroupsCs;
}
