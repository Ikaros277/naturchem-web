"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { localizeHref, stripLocaleFromPathname } from "@/lib/i18n/navigation";
import { useLocale } from "@/lib/i18n/locale-context";
import type { Locale } from "@/lib/i18n/locales";

type Props = {
  href: string;
} & Omit<React.ComponentProps<typeof Link>, "href">;

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
  return localizeHref(pathname, targetLocale);
}
