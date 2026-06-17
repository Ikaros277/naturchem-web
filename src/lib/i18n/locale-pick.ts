import type { Locale } from "@/lib/i18n/locales";

export function pickLocale<T>(locale: Locale, variants: Record<Locale, T>): T {
  return variants[locale];
}

export function isNonDefaultLocale(locale: Locale): boolean {
  return locale !== "cs";
}

export function localeTag(locale: Locale): string {
  switch (locale) {
    case "en":
      return "en-US";
    case "de":
      return "de-DE";
    default:
      return "cs-CZ";
  }
}

export function localeDateTag(locale: Locale): string {
  switch (locale) {
    case "en":
      return "en-GB";
    case "de":
      return "de-DE";
    default:
      return "cs-CZ";
  }
}

export function schemaLanguage(locale: Locale): string {
  switch (locale) {
    case "en":
      return "en-CZ";
    case "de":
      return "de-CZ";
    default:
      return "cs-CZ";
  }
}

export function availableLanguages(locale: Locale): string[] {
  return ["cs", "en", "de"].filter((code) => code !== locale || true);
}
