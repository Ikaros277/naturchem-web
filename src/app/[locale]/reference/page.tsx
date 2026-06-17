import type { Metadata } from "next";
import { PageHeroBand } from "@/components/PageHeroBand";
import { PageCtaStrip } from "@/components/PageCtaStrip";
import { ReferenceExamplesIndex } from "@/components/ReferenceExamplesIndex";
import { JsonLd } from "@/components/Schema";
import { getPageCtaPresets } from "@/lib/i18n/cta-i18n";
import { getReferenceContent, getReferenceExampleGroups } from "@/lib/i18n/content";
import { getMessages } from "@/lib/i18n/get-messages";
import { pageMetadata } from "@/lib/i18n/metadata-helpers";
import { localizeHref } from "@/lib/i18n/navigation";
import { isLocale, type Locale } from "@/lib/i18n/locales";
import { getPageHeroTheme } from "@/lib/hero-images";
import { ClientLogosGrid } from "@/components/ClientLogosGrid";
import { siteUrl } from "@/lib/site";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "cs";
  const messages = await getMessages(locale);
  return pageMetadata({
    locale,
    path: "/reference",
    absoluteTitle: messages.reference.metaTitle,
    description: messages.reference.metaDescription
  });
}

export default async function ReferencePage({ params }: Props) {
  const { locale: localeParam } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "cs";
  const messages = await getMessages(locale);
  const reference = getReferenceContent(locale);
  const exampleGroups = getReferenceExampleGroups(locale);
  const examplesById = reference.getReferenceExamplesById();
  const pageCtaPresets = getPageCtaPresets(locale);
  const link = (href: string) => localizeHref(href, locale);
  const pageUrl = `${siteUrl}${link("/reference")}/`.replace(/([^:]\/)\/+/g, "$1");

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: messages.common.breadcrumbHome, item: `${siteUrl}${link("/")}/` },
      { "@type": "ListItem", position: 2, name: messages.reference.breadcrumb, item: pageUrl }
    ]
  };

  return (
    <main className="section reference-page premium-page">
      <JsonLd data={breadcrumbData} />
      <PageHeroBand
        locale={locale}
        theme={getPageHeroTheme("/reference")}
        breadcrumbs={[
          { name: messages.common.breadcrumbHome, href: link("/") },
          { name: messages.reference.breadcrumb }
        ]}
      >
        <header className="premium-page-hero page-hero--photo">
          <p className="eyebrow">{reference.referenceEyebrow}</p>
          <h1>{messages.reference.pageTitle}</h1>
          <p className="page-lead">{reference.referenceIntro}</p>
        </header>
      </PageHeroBand>

      <section className="section content-block container page-first-section" id="zakaznici">
        <h2>{messages.reference.customersTitle}</h2>
        <p className="muted section-intro">{reference.referenceCustomersIntro}</p>
        <ClientLogosGrid expandable moreHref={link("/reference#zakaznici")} />
      </section>

      <section className="section section-surface accordion-index-surface content-block container" id="priklady">
        <h2>{reference.referenceExamplesHeading}</h2>
        <ReferenceExamplesIndex examplesById={examplesById} groups={exampleGroups} locale={locale} />
      </section>

      <PageCtaStrip {...pageCtaPresets.reference} className="container" />
    </main>
  );
}
