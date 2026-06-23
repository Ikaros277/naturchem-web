import type { Metadata } from "next";
import { localizeHref } from "@/lib/i18n/navigation";
import { defaultLocale, locales, type Locale } from "@/lib/i18n/locales";
import { siteUrl } from "@/lib/site";

export function localizedCanonical(path: string, locale: Locale): string {
  const href = localizeHref(path, locale);
  return `${siteUrl}${href === "/" ? "" : href}/`.replace(/([^:]\/)\/+/g, "$1");
}

export function buildLocaleAlternatesLanguages(
  path: string,
  availableLocales: readonly Locale[]
): Record<string, string> {
  const uniqueLocales = [...new Set(availableLocales)];
  const languages = Object.fromEntries(
    uniqueLocales.map((locale) => [locale, localizedCanonical(path, locale)])
  ) as Record<string, string>;

  const xDefaultLocale = uniqueLocales.includes(defaultLocale)
    ? defaultLocale
    : uniqueLocales[0] ?? defaultLocale;
  languages["x-default"] = localizedCanonical(path, xDefaultLocale);

  return languages;
}

export function localeAlternates(path: string, locale: Locale): Metadata["alternates"] {
  return {
    canonical: localizedCanonical(path, locale),
    languages: buildLocaleAlternatesLanguages(path, locales)
  };
}

export function localeAlternatesForLanguages(
  path: string,
  locale: Locale,
  availableLocales: readonly Locale[]
): Metadata["alternates"] {
  return {
    canonical: localizedCanonical(path, locale),
    languages: buildLocaleAlternatesLanguages(path, availableLocales)
  };
}

export function pageMetadata({
  locale,
  path,
  title,
  description,
  absoluteTitle,
  availableLocales
}: {
  locale: Locale;
  path: string;
  title?: string;
  description: string;
  absoluteTitle?: string;
  availableLocales?: readonly Locale[];
}): Metadata {
  return {
    title: absoluteTitle ? { absolute: absoluteTitle } : title,
    description,
    alternates: availableLocales
      ? localeAlternatesForLanguages(path, locale, availableLocales)
      : localeAlternates(path, locale)
  };
}
