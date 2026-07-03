import type { Metadata } from "next";
import Link from "next/link";
import { headers } from "next/headers";

import { getMessages } from "@/lib/i18n/get-messages";
import { localizeHref } from "@/lib/i18n/navigation";
import { defaultLocale, isLocale, type Locale } from "@/lib/i18n/locales";
import { noindexRobots } from "@/lib/i18n/metadata-helpers";

export const metadata: Metadata = {
  title: { absolute: "404 | NATURCHEM" },
  robots: noindexRobots
};

async function resolveLocale(): Promise<Locale> {
  const localeHeader = (await headers()).get("x-locale");
  return localeHeader && isLocale(localeHeader) ? localeHeader : defaultLocale;
}

export default async function LocaleNotFound() {
  const locale = await resolveLocale();
  const messages = await getMessages(locale);
  const t = messages.notFound;
  const link = (href: string) => localizeHref(href, locale);

  return (
    <main className="section premium-page not-found-page">
      <div className="container page-first-section not-found-main">
        <p className="eyebrow">{t.eyebrow}</p>
        <h1>{t.title}</h1>
        <p className="page-lead">{t.lead}</p>
        <nav className="btn-row not-found-links" aria-label={t.navAria}>
          <Link href={link("/")} className="button">
            {t.home}
          </Link>
          <Link href={link("/sluzby")} className="button secondary">
            {t.services}
          </Link>
          <Link href={link("/poradna")} className="button secondary">
            {t.articles}
          </Link>
          <Link href={link("/kontakt")} className="button secondary">
            {t.contact}
          </Link>
        </nav>
      </div>
    </main>
  );
}
