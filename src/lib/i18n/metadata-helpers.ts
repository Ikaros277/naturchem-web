import type { Metadata } from "next";
import { getAlternateLocale } from "@/lib/i18n/navigation";
import { localizeHref } from "@/lib/i18n/navigation";
import { defaultLocale, type Locale } from "@/lib/i18n/locales";
import { siteUrl } from "@/lib/site";

export function localizedCanonical(path: string, locale: Locale): string {
  const href = localizeHref(path, locale);
  return `${siteUrl}${href === "/" ? "" : href}/`.replace(/([^:]\/)\/+/g, "$1");
}

export function localeAlternates(path: string, locale: Locale): Metadata["alternates"] {
  return {
    canonical: localizedCanonical(path, locale),
    languages: {
      cs: localizedCanonical(path, "cs"),
      en: localizedCanonical(path, "en"),
      de: localizedCanonical(path, "de"),
      "x-default": localizedCanonical(path, defaultLocale)
    }
  };
}

export function pageMetadata({
  locale,
  path,
  title,
  description,
  absoluteTitle
}: {
  locale: Locale;
  path: string;
  title?: string;
  description: string;
  absoluteTitle?: string;
}): Metadata {
  return {
    title: absoluteTitle ? { absolute: absoluteTitle } : title,
    description,
    alternates: localeAlternates(path, locale)
  };
}
