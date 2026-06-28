import { PageHeroBand } from "@/components/PageHeroBand";
import { PageCtaStrip } from "@/components/PageCtaStrip";
import { SectorGroupsIndex } from "@/components/SectorGroupsIndex";
import { JsonLd } from "@/components/Schema";
import { getPageCtaPresets } from "@/lib/i18n/cta-i18n";
import { getCaseStudies, getProvozyNavLabel, getSectorPage, getSectors, getSiteServices } from "@/lib/i18n/content";
import { toSectorCardModel } from "@/lib/sector-card-model";
import { getSectorGroups } from "@/lib/i18n/sector-groups-i18n";
import { getMessages } from "@/lib/i18n/get-messages";
import { localizedCanonical } from "@/lib/i18n/metadata-helpers";
import { localizeHref } from "@/lib/i18n/navigation";
import type { Locale } from "@/lib/i18n/locales";
import { getPageHeroTheme } from "@/lib/hero-images";
import { isSectorDetailPage } from "@/lib/sector-pages";
import { siteUrl } from "@/lib/site";

type Props = {
  locale: Locale;
};

export async function SectorIndexPage({ locale }: Props) {
  const indexData = await getSectorPage("index", locale);
  if (isSectorDetailPage(indexData)) {
    throw new Error("Sector index page data must not be a detail page");
  }

  const sectors = await getSectors(locale);
  const sectorCards = sectors.map(toSectorCardModel);
  const sectorGroups = await getSectorGroups(locale);
  const provozyNavLabel = await getProvozyNavLabel(locale);
  const siteServices = await getSiteServices(locale);
  const pageCtaPresets = getPageCtaPresets(locale);
  const messages = await getMessages(locale);
  const homeLabel = messages.common.breadcrumbHome;
  const indexPath = localizeHref("/provozy-a-technologie", locale);
  const indexUrl = `${siteUrl}${indexPath}/`.replace(/([^:]\/)\/+/g, "$1");

  const collectionPageData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: indexData.heroTitle,
    url: indexUrl,
    description: indexData.metadataDescription
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: homeLabel, item: localizedCanonical("/", locale) },
      { "@type": "ListItem", position: 2, name: provozyNavLabel, item: indexUrl }
    ]
  };

  return (
    <main className="section sectors-index-page premium-page">
      <JsonLd data={collectionPageData} />
      <JsonLd data={breadcrumbData} />
      <PageHeroBand
        locale={locale}
        theme={getPageHeroTheme("/provozy-a-technologie")}
        breadcrumbs={[
          { name: homeLabel, href: localizeHref("/", locale) },
          { name: provozyNavLabel }
        ]}
      >
        <header className="premium-page-hero page-hero--photo">
          <p className="eyebrow">{indexData.eyebrow}</p>
          <h1>{indexData.heroTitle}</h1>
          <p className="page-lead">{indexData.heroLead}</p>
        </header>
      </PageHeroBand>

      <section
        className="section content-block container page-first-section"
        aria-labelledby="sector-index-intro-heading"
      >
        <h2 id="sector-index-intro-heading">{indexData.introHeading}</h2>
        {indexData.introParagraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 48)}>{paragraph}</p>
        ))}
        <p className="muted">{indexData.introMuted}</p>
      </section>

      <SectorGroupsIndex
        sectors={sectorCards}
        locale={locale}
        sectorGroups={sectorGroups}
        serviceTitles={siteServices.map((service) => ({ href: service.href, title: service.title }))}
        sectorCardLabels={{
          detailPage: messages.sectorsIndex.detailPageLabel,
          exampleFromPractice: messages.sectorsIndex.exampleFromPractice
        }}
      />

      <section className="section content-block container" aria-labelledby="sector-assessment-heading">
        <h2 id="sector-assessment-heading">{indexData.assessmentHeading}</h2>
        <p>{indexData.assessmentIntro}</p>
        <h3>{indexData.assessmentSubheading}</h3>
        <ul className="check-list">
          {indexData.assessmentItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <PageCtaStrip {...pageCtaPresets.sectorIndex} className="container" />
    </main>
  );
}
