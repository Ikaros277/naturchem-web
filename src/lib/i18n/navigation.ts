import { defaultLocale, isLocale, locales, type Locale } from "@/lib/i18n/locales";

export function stripLocaleFromPathname(pathname: string): string {
  const parts = pathname.split("/");
  const maybeLocale = parts[1];
  if (maybeLocale && isLocale(maybeLocale)) {
    const rest = `/${parts.slice(2).join("/")}`.replace(/\/$/, "") || "/";
    return rest;
  }
  return pathname || "/";
}

export function localizeHref(href: string, locale: Locale): string {
  if (!href.startsWith("/") || href.startsWith("//")) return href;

  const [path, hash = ""] = href.split("#");
  const [pathname, query = ""] = path.split("?");
  const basePath = stripLocaleFromPathname(pathname);

  const localized =
    locale === defaultLocale
      ? basePath
      : basePath === "/"
        ? `/${locale}`
        : `/${locale}${basePath}`;

  return `${localized}${query ? `?${query}` : ""}${hash ? `#${hash}` : ""}`;
}

export function getAlternateLocale(locale: Locale): Locale {
  const index = locales.indexOf(locale);
  return locales[(index + 1) % locales.length];
}
