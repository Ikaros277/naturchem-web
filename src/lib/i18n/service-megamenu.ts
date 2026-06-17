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

const serviceMegaGroupsDe = [
  {
    title: "Messungen",
    links: [
      { href: "/sluzby/mereni-emisi", label: "Emissionsmessungen" },
      { href: "/sluzby/pracovni-prostredi", label: "Arbeitsumfeld" },
      { href: "/sluzby/mereni-hluku", label: "Lärm und Akustik" },
      { href: "/sluzby/mereni-vibraci", label: "Vibrationen" },
      { href: "/sluzby/mereni-osvetleni", label: "Beleuchtung" },
      { href: "/sluzby/mereni-mikroklimatu", label: "Mikroklima" }
    ]
  },
  {
    title: "Studien und Modellierung",
    links: [
      { href: "/sluzby/rozptylove-studie", label: "Ausbreitungsstudien" },
      { href: "/sluzby/hlukove-studie", label: "Lärmstudien" },
      { href: "/sluzby/akusticke-posudky", label: "Akustische Gutachten" },
      { href: "/sluzby/modelove-vypocty", label: "Modellierung" },
      { href: "/sluzby/imisni-dopady", label: "Immissions- und Lärmauswirkungen" }
    ]
  },
  {
    title: "Dokumentation und Genehmigungen",
    links: [
      { href: "/sluzby/eia-oznameni-zameru", label: "EIA und Projektanmeldung" },
      { href: "/sluzby/odborne-posudky", label: "Gutachten" },
      { href: "/sluzby/povoleni-provozu", label: "Betriebsgenehmigungen" },
      { href: "/sluzby/provozni-rady", label: "Betriebsanweisungen" },
      { href: "/sluzby/ippc-integrovana-povoleni", label: "IPPC und integrierte Genehmigungen" },
      { href: "/sluzby/ispop", label: "ISPOP und Betriebsaufzeichnungen" },
      { href: "/sluzby/ghg-overovani", label: "Treibhausgasberichterstattung (THG)" }
    ]
  },
  {
    title: "Schulungen und Unterstützung",
    links: [
      { href: "/sluzby/skoleni-chemicke-legislativy", label: "Schulung Chemikaliengesetzgebung" },
      { href: "/sluzby/bezpecnostni-listy", label: "Sicherheitsdatenblätter" },
      { href: "/sluzby/chemicke-latky", label: "Chemikalien im Betrieb" }
    ]
  }
] as const;

export function getServiceMegaGroups(locale: Locale) {
  if (locale === "en") return serviceMegaGroupsEn;
  if (locale === "de") return serviceMegaGroupsDe;
  return serviceMegaGroupsCs;
}
