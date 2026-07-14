import type { Metadata } from "next";
import Link from "next/link";
import { PageCtaStrip } from "@/components/PageCtaStrip";
import { PageHeroBand } from "@/components/PageHeroBand";
import { JsonLd } from "@/components/Schema";
import { TrustBand } from "@/components/TrustBand";
import { getPageCtaPresets } from "@/lib/i18n/cta-i18n";
import { getWhyNaturchemPage } from "@/lib/i18n/content";
import { getHomeTrustBandItems } from "@/lib/i18n/home-content";
import { pageMetadata } from "@/lib/i18n/metadata-helpers";
import { localizeHref } from "@/lib/i18n/navigation";
import { isLocale, type Locale } from "@/lib/i18n/locales";
import { getPageHeroTheme } from "@/lib/hero-images";
import { buildOrganizationJsonLd } from "@/lib/organization-jsonld";
import { getMessages } from "@/lib/i18n/get-messages";
import { siteUrl } from "@/lib/site";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "cs";
  const { metadata } = await getWhyNaturchemPage(locale);
  return pageMetadata({
    locale,
    path: "/proc-naturchem",
    absoluteTitle: metadata.title.absolute,
    description: metadata.description
  });
}

export default async function ProcNaturchemPage({ params }: Props) {
  const { locale: localeParam } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "cs";
  const { content } = await getWhyNaturchemPage(locale);
  const messages = await getMessages(locale);
  const trustItems = getHomeTrustBandItems(locale);
  const pageCtaPresets = getPageCtaPresets(locale);
  const link = (href: string) => localizeHref(href, locale);
  const pageUrl = `${siteUrl}${link("/proc-naturchem")}/`.replace(/([^:]\/)\/+/g, "$1");
  const s = content.sections;

  const webPageData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    name: content.title,
    url: pageUrl,
    description: content.lead,
    inLanguage: locale,
    isPartOf: { "@id": `${siteUrl}/#website` },
    about: { "@id": `${siteUrl}/#organization` }
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: messages.common.breadcrumbHome, item: `${siteUrl}${link("/")}/` },
      { "@type": "ListItem", position: 2, name: content.breadcrumbLabel, item: pageUrl }
    ]
  };

  return (
    <main className="section why-naturchem-page premium-page">
      <JsonLd data={webPageData} />
      <JsonLd data={buildOrganizationJsonLd(locale)} />
      <JsonLd data={breadcrumbData} />
      <PageHeroBand
        locale={locale}
        theme={getPageHeroTheme("/proc-naturchem")}
        breadcrumbs={[
          { name: messages.common.breadcrumbHome, href: link("/") },
          { name: content.breadcrumbLabel }
        ]}
      >
        <header className="premium-page-hero page-hero--photo">
          <h1>{content.title}</h1>
          <p className="page-lead">{content.lead}</p>
        </header>
      </PageHeroBand>

      <TrustBand items={trustItems} heading={messages.home.trustAria} />

      <div className="container page-first-section content-block">
        <section>
          <h2>{s.accreditation.heading}</h2>
          {s.accreditation.paragraphs.map((p) => (
            <p key={p.slice(0, 48)}>{p}</p>
          ))}
        </section>

        <section>
          <h2>{s.authorizations.heading}</h2>
          {s.authorizations.paragraphs.map((p) => (
            <p key={p.slice(0, 48)}>{p}</p>
          ))}
        </section>

        <section>
          <h2>{s.authorities.heading}</h2>
          {s.authorities.paragraphs.map((p) => (
            <p key={p.slice(0, 48)}>{p}</p>
          ))}
        </section>

        <section>
          <h2>{s.scope.heading}</h2>
          {s.scope.paragraphs.map((p) => (
            <p key={p.slice(0, 48)}>{p}</p>
          ))}
        </section>

        <section>
          <h2>{s.customers.heading}</h2>
          <ul>
            {s.customers.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2>{s.coverage.heading}</h2>
          <p>{s.coverage.paragraph}</p>
        </section>

        <section>
          <h2>{s.proof.heading}</h2>
          <p>{s.proof.paragraph}</p>
          <ul className="why-naturchem-links">
            {Object.values(content.links).map((item) => (
              <li key={item.href}>
                <Link href={link(item.href)}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <PageCtaStrip {...pageCtaPresets.contact} className="container" />
    </main>
  );
}
