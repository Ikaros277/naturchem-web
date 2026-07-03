import type { Metadata } from "next";
import { localizeHref } from "@/lib/i18n/navigation";
import { defaultLocale, locales, type Locale } from "@/lib/i18n/locales";
import { siteUrl } from "@/lib/site";

const OPEN_GRAPH_LOCALE: Record<Locale, string> = {
  cs: "cs_CZ",
  en: "en_US",
  de: "de_DE"
};

const DEFAULT_OG_IMAGE = `${siteUrl}/opengraph-image`;

export function localizedCanonical(path: string, locale: Locale): string {
  const href = localizeHref(path, locale);
  return `${siteUrl}${href === "/" ? "" : href}/`.replace(/([^:]\/)\/+/g, "$1");
}

export function resolveOgImageUrl(imagePath?: string): string {
  if (!imagePath?.trim()) return DEFAULT_OG_IMAGE;
  if (imagePath.startsWith("http://") || imagePath.startsWith("https://")) return imagePath;
  return `${siteUrl}${imagePath.startsWith("/") ? imagePath : `/${imagePath}`}`;
}

function resolveShareTitle(title: string | undefined, absoluteTitle: string | undefined): string {
  if (absoluteTitle) {
    return absoluteTitle.replace(/\s*\|\s*NATURCHEM\s*$/i, "").trim() || absoluteTitle;
  }
  return title ?? "NATURCHEM";
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

export const noindexRobots: Metadata["robots"] = { index: false, follow: true };

export function withNoindex(metadata: Metadata): Metadata {
  return { ...metadata, robots: noindexRobots };
}

export function pageMetadata({
  locale,
  path,
  title,
  description,
  absoluteTitle,
  availableLocales,
  ogImage,
  ogType = "website"
}: {
  locale: Locale;
  path: string;
  title?: string;
  description: string;
  absoluteTitle?: string;
  availableLocales?: readonly Locale[];
  ogImage?: string;
  ogType?: "website" | "article";
}): Metadata {
  const alternates = availableLocales
    ? localeAlternatesForLanguages(path, locale, availableLocales)
    : localeAlternates(path, locale);
  const canonical = localizedCanonical(path, locale);
  const shareTitle = resolveShareTitle(title, absoluteTitle);
  const imageUrl = resolveOgImageUrl(ogImage);

  return {
    title: absoluteTitle ? { absolute: absoluteTitle } : title,
    description,
    alternates,
    openGraph: {
      type: ogType,
      locale: OPEN_GRAPH_LOCALE[locale],
      alternateLocale: locales.filter((item) => item !== locale).map((item) => OPEN_GRAPH_LOCALE[item]),
      url: canonical,
      siteName: "NATURCHEM",
      title: shareTitle,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: shareTitle
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: shareTitle,
      description,
      images: [imageUrl]
    }
  };
}
