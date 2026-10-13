import "@/app/company.generated.css";
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
import { buildOrganizationJsonLd } from "@/lib/organization-jsonld";
import { getSiteServices } from "@/lib/i18n/content";
import { getMessages } from "@/lib/i18n/get-messages";
import { siteUrl } from "@/lib/site";
import { ServiceIcon } from "@/components/ServiceIcon";
import { getServiceDetailCopy } from "@/lib/i18n/service-detail-copy";
import { splitLeadSentence } from "@/lib/rich-text";

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
  const siteServices = await getSiteServices(locale);
  const link = (href: string) => localizeHref(href, locale);
  const pageUrl = `${siteUrl}${link("/proc-naturchem")}/`.replace(/([^:]\/)\/+/g, "$1");
  const s = content.sections;
  const detailCopy = getServiceDetailCopy(locale);
  const proofCards = [
    { content: s.accreditation, icon: "ippc" as const, link: content.links.accreditation },
    { content: s.authorizations, icon: "posudek" as const, link: content.links.accreditation },
    { content: s.authorities, icon: "povoleni" as const, link: content.links.reference },
    { content: s.scope, icon: "pillar-mereni" as const, link: content.links.services }
  ];

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
      <JsonLd data={buildOrganizationJsonLd(locale, siteServices)} />
      <JsonLd data={breadcrumbData} />
      <PageHeroBand
        locale={locale}
        theme="pristrojove-vybaveni"
        breadcrumbs={[
          { name: messages.common.breadcrumbHome, href: link("/") },
          { name: content.breadcrumbLabel }
        ]}
      >
        <header className="premium-page-hero page-hero--photo">
          <h1>{content.title}</h1>
          <p className="page-lead">{splitLeadSentence(content.lead)?.lead ?? content.lead}</p>
          <div className="btn-row">
            <Link href={link(content.links.accreditation.href)} className="button secondary">{content.links.accreditation.label}</Link>
            <Link href={link(content.links.reference.href)} className="why-proof-link">{content.links.reference.label} →</Link>
          </div>
        </header>
      </PageHeroBand>

      <TrustBand items={trustItems} heading={messages.home.trustAria} />

      <div className="container page-first-section content-block">
        <div className="why-proof-grid">
          {proofCards.map(card => <section key={card.content.heading} className="why-proof-card">
            <ServiceIcon icon={card.icon} size={28} />
            <h2>{card.content.heading}</h2>
            <p>{card.content.paragraphs[0]}</p>
            <details><summary>{detailCopy.details}</summary>
              {card.content.paragraphs.slice(1).map(p => <p key={p}>{p}</p>)}
            </details>
            <Link className="why-proof-link" href={link(card.link.href)}>{card.link.label} →</Link>
          </section>)}
        </div>
        <div className="why-context-grid">
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
        </div>

        <section>
          <h2>{s.proof.heading}</h2>
          <p>{s.proof.paragraph}</p>
          <details className="why-full-intro"><summary>{detailCopy.scopeAndOutputs}</summary><p>{content.lead}</p></details>
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
