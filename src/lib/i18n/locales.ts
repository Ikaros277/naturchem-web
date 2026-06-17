export const locales = ["cs", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "cs";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export const localeLabels: Record<Locale, string> = {
  cs: "Čeština",
  en: "English"
};
