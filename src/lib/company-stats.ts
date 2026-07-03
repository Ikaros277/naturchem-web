/** Zaokrouhlená čísla z interní evidence zakázek a protokolových výstupů. */

import type { ServiceIconKey } from "@/lib/service-icons";

export const companyStatsIntro =
  "Měření, studie a odborné podklady pro průmyslové provozy, projektanty, investory i veřejnou správu — řešíme to déle než 36 let.";

export const companyStats: ReadonlyArray<{
  value: string;
  label: string;
  icon: ServiceIconKey;
}> = [
  {
    value: "14 000+",
    label: "zakázek",
    icon: "process-vystup"
  },
  {
    value: "7 000+",
    label: "měření",
    icon: "emise"
  },
  {
    value: "36 let",
    label: "praxe",
    icon: "process-posouzeni"
  }
];

export const companyStatsNote =
  "Uvedená čísla jsou zaokrouhlené údaje z interní evidence zakázek a protokolových výstupů.";

export const longTermPracticeTitle = "Dlouhodobá praxe v měření a povolovacích podkladech";

export const longTermPracticeParagraphs = [
  "Navazujeme na tisíce realizovaných zakázek a měření v provozech. Dlouhodobě pracujeme pro kotelny, lakovny, bioplynové stanice, sklárské provozy, svařovny, recyklační areály, zemědělské provozy, automobilové provozy i komunální a veřejné zadavatele.",
  "Typicky zajišťujeme měření emisí, měření pracovního prostředí, měření hluku, rozptylové a hlukové studie, EIA podklady, odborné posudky, provozní řády, ISPOP a technické poradenství pro povolování i provozní rozhodování."
] as const;

export const practiceFromRecordsTitle = "Praxe opřená o realizovaných zakázkách";

export const practiceFromRecordsParagraphs = [
  "Navazujeme na dlouhodobou evidenci zakázek, měření v provozech a protokolových výstupů. Dlouhodobě pracujeme pro průmyslové, energetické, zemědělské, komunální i veřejné zadavatele.",
  "Nejčastěji řešíme měření emisí, pracovní prostředí, hluk, rozptylové a hlukové studie, odborné posudky, provozní řády, EIA podklady, ISPOP, provozní evidenci a ověřování emisních údajů.",
  "Díky tomu zakázku neposuzujeme izolovaně jako jednotlivé měření, ale v návaznosti na účel výstupu — pro provozovatele, projektanta, investora, KHS, ČIŽP, krajský úřad, stavební řízení nebo EIA."
] as const;

export const experienceBullets = [
  "14 000+ zakázek",
  "7 000+ měření",
  "36 let praxe",
  "dlouhodobá práce pro průmyslové, energetické, zemědělské, komunální a veřejné zadavatele"
] as const;
