import "@/app/company.generated.css";
import type { Metadata } from "next";
import Link from "next/link";
import { PageCtaStrip } from "@/components/PageCtaStrip";
import { PageHeroBand } from "@/components/PageHeroBand";
import { JsonLd } from "@/components/Schema";
import { ServiceIcon } from "@/components/ServiceIcon";
import { getPageCtaPresets } from "@/lib/i18n/cta-i18n";
import {
  getAccreditationDocuments,
  getAccreditationPage,
  getAccreditationScope
} from "@/lib/i18n/content";
import { pageMetadata } from "@/lib/i18n/metadata-helpers";
import { localizeHref } from "@/lib/i18n/navigation";
import { isLocale, type Locale } from "@/lib/i18n/locales";
import { getPageHeroTheme } from "@/lib/hero-images";
import {
  getAccreditationScopeIconKey,
  getAuthorizationIconKey
} from "@/lib/service-icons";
import { company, siteUrl } from "@/lib/site";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "cs";
  const { metadata } = await getAccreditationPage(locale);
  return pageMetadata({
    locale,
    path: "/akreditace-autorizace-dokumenty",
    absoluteTitle: metadata.title.absolute,
    description: metadata.description
  });
}

export default async function AkreditaceAutorizaceDokumentyPage({ params }: Props) {
  const { locale: localeParam } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "cs";
  const { content, facts, benefits, scopeGroups } = await getAccreditationPage(locale);
  const { accreditedLabScope, authorizations } = await getAccreditationScope(locale);
  const accreditationDocuments = await getAccreditationDocuments(locale);
  const pageCtaPresets = getPageCtaPresets(locale);
  const link = (href: string) => localizeHref(href, locale);
  const pageUrl = `${siteUrl}${link("/akreditace-autorizace-dokumenty")}/`.replace(/([^:]\/)\/+/g, "$1");

  const webPageData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: content.schemaName,
    url: pageUrl,
    description: (await getAccreditationPage(locale)).metadata.description
  };

  const orgData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    url: siteUrl
  };

  return (
    <main className="section accreditation-page premium-page">
      <JsonLd data={webPageData} />
      <JsonLd data={orgData} />
      <PageHeroBand
        locale={locale}
        theme={getPageHeroTheme("/akreditace-autorizace-dokumenty")}
        plain
        className="page-hero-band--compact"
        breadcrumbs={content.breadcrumbs.map((crumb) =>
          "href" in crumb ? { name: crumb.name, href: link(crumb.href) } : { name: crumb.name }
        )}
      >
        <header className="premium-page-hero page-hero--photo">
          <p className="eyebrow">{content.hero.eyebrow}</p>
          <h1>{content.hero.title}</h1>
          <p className="page-lead">{content.hero.lead}</p>
          <nav className="accreditation-quick-links" aria-label={content.authorizations.documentsSubheading}>
            <a className="button secondary" href="/dokumenty/osvedceni-akreditace-562-2023.pdf" target="_blank" rel="noopener noreferrer">
              {locale === "cs" ? "Osvědčení o akreditaci (PDF)" : locale === "de" ? "Akkreditierungsurkunde (PDF)" : "Accreditation certificate (PDF)"}
            </a>
            <a className="why-proof-link" href="#dokumenty">{content.authorizations.documentsSubheading} ↓</a>
          </nav>
        </header>
      </PageHeroBand>

      <div className="container">
        <section className="grid grid-2 accreditation-overview">
          <article className="card accreditation-facts-card">
            <h2>{content.overview.factsTitle}</h2>
            <ul className="check-list">
              {facts.map((fact) => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>
          </article>
          <article className="card">
            <h2>{content.overview.benefitsTitle}</h2>
            <ul className="check-list">{benefits.slice(0, 2).map(({ text }) => <li key={text}>{text}</li>)}</ul>
            <details className="accreditation-benefits-details">
              <summary>{locale === "cs" ? "Další souvislosti" : locale === "de" ? "Weitere Hinweise" : "Additional context"}</summary>
              <ul className="check-list">{benefits.slice(2).map(({ text }) => <li key={text}>{text}</li>)}</ul>
            </details>
          </article>
        </section>

        <section className="section">
          <h2>{content.labScope.title}</h2>
          <p className="muted">{accreditedLabScope.summary}</p>
          <div className="scope-card-grid">
            {scopeGroups.map((group) => (
              <article key={group.title} className="card scope-card">
                <div className="scope-card-head">
                  <ServiceIcon icon={getAccreditationScopeIconKey(group.title)} size={20} />
                  <h3>{group.title}</h3>
                </div>
                <p className="muted">{group.text}</p>
              </article>
            ))}
          </div>
          <p className="muted">
            {content.labScope.appendixIntro}{" "}
            <a href="/dokumenty/osvedceni-akreditace-562-2023.pdf" target="_blank" rel="noopener noreferrer">
              {content.labScope.appendixLinkLabel}
            </a>
            .
          </p>
          <p className="muted" style={{ marginTop: "1rem" }}>
            {content.labScope.equipmentNote}
          </p>
          <Link href={link("/pristrojove-vybaveni")} className="button secondary" style={{ marginTop: "0.75rem" }}>
            {content.labScope.equipmentLinkLabel}
          </Link>
        </section>

        <section className="section">
          <h2>{content.authorizations.title}</h2>
          <p className="muted">{content.authorizations.intro}</p>
          <div className="grid grid-4 authorization-grid">
            {authorizations.map((item) => (
              <article key={item.title} className="card">
                <div className="authorization-card-head">
                  <ServiceIcon icon={getAuthorizationIconKey(item.title)} />
                  <h3>{item.title}</h3>
                </div>
                <p className="muted">{item.text}</p>
              </article>
            ))}
          </div>
          <h3 id="dokumenty" className="accreditation-docs-subheading">{content.authorizations.documentsSubheading}</h3>
          <p className="accreditation-ghg-note">{locale === "cs"
            ? "U skleníkových plynů zajišťujeme výpočty, kontrolu emisních dat a uhlíkovou stopu. Akreditované ověřování EU ETS neposkytujeme."
            : locale === "de"
              ? "Für Treibhausgase bieten wir Berechnungen, die Prüfung von Emissionsdaten und den CO₂-Fußabdruck an. Eine akkreditierte EU-ETS-Verifizierung bieten wir nicht an."
              : "For greenhouse gases, we provide calculations, checks of emissions data and carbon footprints. We do not provide accredited EU ETS verification."}
            {" "}<Link href={link("/sluzby/ghg-overovani")}>{locale === "cs" ? "Rozsah služeb GHG" : locale === "de" ? "THG-Leistungen" : "GHG services"} →</Link>
          </p>
          <div className="download-card-grid">
            {accreditationDocuments.map((doc) => (
              <div key={doc.id} className="card download-card">
                <h3>{doc.title}</h3>
                <p className="muted">{doc.description}</p>
                <a
                  href={doc.href}
                  className="button secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${doc.title} ${content.authorizations.downloadAriaSuffix}`}
                >
                  {content.authorizations.downloadButtonLabel}
                </a>
              </div>
            ))}
          </div>
        </section>
        <PageCtaStrip {...pageCtaPresets.accreditation} />
      </div>
    </main>
  );
}
