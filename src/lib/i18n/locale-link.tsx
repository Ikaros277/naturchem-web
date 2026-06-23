"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { localizeHref, stripLocaleFromPathname } from "@/lib/i18n/navigation";
import { useLocale } from "@/lib/i18n/locale-context";
import type { Locale } from "@/lib/i18n/locales";
import { isLocale } from "@/lib/i18n/locales";
import articleLocaleMap from "@/lib/article-locale-map.json";

type Props = {
  href: string;
} & Omit<React.ComponentProps<typeof Link>, "href">;

const poradnaArticlePattern = /^\/poradna\/([^/]+)\/?$/;

function localesForArticleSlug(slug: string): Locale[] | null {
  const locales = (articleLocaleMap as Record<string, string[]>)[slug];
  if (!locales?.length) return null;
  return locales.filter((value): value is Locale => isLocale(value));
}

export function LocaleLink({ href, ...props }: Props) {
  const locale = useLocale();
  return <Link href={localizeHref(href, locale)} {...props} />;
}

export function useLocalizedPathname(): string {
  const pathname = usePathname();
  return stripLocaleFromPathname(pathname);
}

export function useLocaleSwitchHref(targetLocale: Locale): string {
  const pathname = useLocalizedPathname();
  const match = pathname.match(poradnaArticlePattern);

  if (match) {
    const slug = decodeURIComponent(match[1]);
    const availableLocales = localesForArticleSlug(slug);
    if (availableLocales && !availableLocales.includes(targetLocale)) {
      return localizeHref("/poradna", targetLocale);
    }
  }

  return localizeHref(pathname, targetLocale);
}
