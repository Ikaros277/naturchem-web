import type { Metadata } from "next";
import Link from "next/link";

import { CaseStudiesHub } from "@/components/CaseStudiesHub";
import { JsonLd } from "@/components/Schema";
import { PageHeroBand } from "@/components/PageHeroBand";
import { WorkProcessTimeline } from "@/components/WorkProcessTimeline";
import { toCaseStudyListing } from "@/lib/case-study-listing";
import { getCaseStudies, getCaseStudyFilterCategories, getSiteServices, getTypickeZakazkyContent } from "@/lib/i18n/content";
import { getWorkProcessCopy } from "@/lib/i18n/work-process-i18n";
import { getMessages } from "@/lib/i18n/get-messages";
import { localizedCanonical, pageMetadata } from "@/lib/i18n/metadata-helpers";
import { localizeHref } from "@/lib/i18n/navigation";
import { isLocale, type Locale } from "@/lib/i18n/locales";
import { getPageHeroTheme } from "@/lib/hero-images";
import { company } from "@/lib/site";
import { contactFormHref } from "@/lib/contact-url";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "cs";
  const messages = await getMessages(locale);
  return pageMetadata({
    locale,
    path: "/typicke-zakazky",
    title: messages.caseStudies.metaTitle,
    description: messages.caseStudies.metaDescription
  });
}

export default async function TypickeZakazkyPage({ params }: Props) {
  const { locale: localeParam } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "cs";
  const messages = await getMessages(locale);
  const content = await getTypickeZakazkyContent(locale);
  const workProcess = getWorkProcessCopy(locale);
  const caseStudies = await getCaseStudies(locale);
  const categoryFilters = await getCaseStudyFilterCategories(locale);
  const siteServices = await getSiteServices(locale);
  const link = (href: string) => localizeHref(href, locale);
  const pageUrl = localizedCanonical("/typicke-zakazky", locale);

  const webPageData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: messages.caseStudies.pageTitle,
    url: pageUrl,
    description: messages.caseStudies.metaDescription
  };

  const itemListData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: caseStudies.map((study, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: study.title,
      url: `${pageUrl}#${study.id}`
    }))
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: messages.common.breadcrumbHome,
        item: localizedCanonical("/", locale)
      },
      { "@type": "ListItem", position: 2, name: messages.caseStudies.breadcrumb, item: pageUrl }
    ]
  };

  return (
    <main className="section premium-page typicke-zakazky-page">
      <JsonLd data={webPageData} />
      <JsonLd data={itemListData} />
      <JsonLd data={breadcrumbData} />
      <PageHeroBand
        locale={locale}
        theme={getPageHeroTheme("/typicke-zakazky")}
        breadcrumbs={[
          { name: messages.common.breadcrumbHome, href: link("/") },
          { name: messages.caseStudies.breadcrumb }
        ]}
      >
        <header className="premium-page-hero page-hero--photo">
          <p className="eyebrow">{content.typickeZakazkyEyebrow}</p>
          <h1>{messages.caseStudies.pageTitle}</h1>
          <p className="page-lead">{content.typickeZakazkyHeroLead}</p>
        </header>
      </PageHeroBand>

      <section className="section content-block container page-first-section typicke-zakazky-process">
        <h2>{content.typickeZakazkyProcessHeading}</h2>
        <p className="muted section-intro">{workProcess.intro}</p>
        <WorkProcessTimeline steps={workProcess.steps} processAria={messages.common.cooperationProcess} />
      </section>

      <section className="section content-block container" aria-labelledby="case-studies-heading">
        <h2 id="case-studies-heading">{content.typickeZakazkyCasesHeading}</h2>
        <CaseStudiesHub
          locale={locale}
          caseStudyListings={caseStudies.map(toCaseStudyListing)}
          categoryFilters={categoryFilters}
          serviceTitles={siteServices.map((service) => ({ href: service.href, title: service.title }))}
        />
      </section>

      <section className="section content-block container typicke-zakazky-cta">
        <h2>{content.typickeZakazkyCtaHeading}</h2>
        <p className="section-intro">{content.typickeZakazkyCtaText}</p>
        <p className="typicke-zakazky-contact">
          <a href={`mailto:${company.email}`}>{company.email}</a>
          <span aria-hidden="true"> · </span>
          <a href={`tel:${company.phones[0]?.replace(/\s/g, "")}`}>{company.phones[0]}</a>
        </p>
        <div className="btn-row">
          <Link href={link(contactFormHref)} className="button">
            {messages.common.requestService}
          </Link>
        </div>
      </section>
    </main>
  );
}
