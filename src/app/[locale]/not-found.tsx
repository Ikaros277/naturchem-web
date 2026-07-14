import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getMessages } from "@/lib/i18n/get-messages";
import { localizeHref } from "@/lib/i18n/navigation";
import { defaultLocale, type Locale } from "@/lib/i18n/locales";
import { noindexRobots } from "@/lib/i18n/metadata-helpers";

export const metadata: Metadata = {
  title: { absolute: "404 | NATURCHEM" },
  robots: noindexRobots
};

export default async function LocaleNotFound() {
  const locale: Locale = defaultLocale;
  const messages = await getMessages(locale);
  const t = messages.notFound;
  const link = (href: string) => localizeHref(href, locale);

  return (
    <main className="section premium-page not-found-page">
      <div className="container page-first-section not-found-shell">
        <div className="not-found-layout">
          <div className="not-found-copy">
            <p className="eyebrow not-found-eyebrow">{t.eyebrow}</p>
            <h1>{t.title}</h1>
            <div className="not-found-lead">
              <p>{t.lead1}</p>
              <p>{t.lead2}</p>
            </div>
            <aside className="not-found-note">
              <p>{t.authorityNote}</p>
            </aside>
            <nav className="btn-row not-found-links" aria-label={t.navAria}>
              <Link href={link("/kontakt")} className="button">
                {t.ctaContact}
              </Link>
              <Link href={link("/sluzby")} className="button secondary">
                {t.services}
              </Link>
              <Link href={link("/poradna")} className="button secondary">
                {t.articles}
              </Link>
              <Link href={link("/")} className="button not-found-home">
                {t.home}
              </Link>
            </nav>
          </div>

          <figure className="not-found-figure">
            <Image
              src="/graphics/not-found-404.png"
              alt={t.illustrationAlt}
              width={1024}
              height={687}
              className="not-found-illustration"
              sizes="(max-width: 900px) 88vw, 28rem"
              priority
            />
          </figure>
        </div>
      </div>
    </main>
  );
}
