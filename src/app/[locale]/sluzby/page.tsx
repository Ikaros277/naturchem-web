import type { Metadata } from "next";
import { JsonLd } from "@/components/Schema";
import { PageCtaStrip } from "@/components/PageCtaStrip";
import { PageHeroBand } from "@/components/PageHeroBand";
import { ServiceGroupsIndex } from "@/components/ServiceGroupsIndex";
import { getPageCtaPresets } from "@/lib/i18n/cta-i18n";
import { getServiceGroups } from "@/lib/i18n/content";
import { getMessages } from "@/lib/i18n/get-messages";
import { pageMetadata } from "@/lib/i18n/metadata-helpers";
import { localizeHref } from "@/lib/i18n/navigation";
import { isLocale, type Locale } from "@/lib/i18n/locales";
import { getPageHeroTheme } from "@/lib/hero-images";
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
    path: "/sluzby",
    title: messages.servicesIndex.metaTitle,
    description: messages.servicesIndex.metaDescription
  });
}

export default async function Page({ params }: Props) {
  const { locale: localeParam } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "cs";
  const messages = await getMessages(locale);
  const serviceGroups = await getServiceGroups(locale);
  const pageCtaPresets = getPageCtaPresets(locale);
  const link = (href: string) => localizeHref(href, locale);
  const pageUrl = `${siteUrl}${link("/sluzby")}/`.replace(/([^:]\/)\/+/g, "$1");

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: messages.common.breadcrumbHome, item: `${siteUrl}${link("/")}/` },
      { "@type": "ListItem", position: 2, name: messages.servicesIndex.breadcrumb, item: pageUrl }
    ]
  };

  return (
    <main className="section services-index-page premium-page">
      <JsonLd data={breadcrumbData} />
      <PageHeroBand
        locale={locale}
        theme={getPageHeroTheme("/sluzby")}
        breadcrumbs={[
          { name: messages.common.breadcrumbHome, href: link("/") },
          { name: messages.servicesIndex.breadcrumb }
        ]}
      >
        <header className="page-header services-index-header page-hero--photo">
          <p className="eyebrow">{messages.servicesIndex.eyebrow}</p>
          <h1>{messages.servicesIndex.pageTitle}</h1>
          <p className="page-lead">{messages.servicesIndex.lead}</p>
        </header>
      </PageHeroBand>

      <ServiceGroupsIndex groups={serviceGroups} locale={locale} />

      <section className="section container">
        <PageCtaStrip {...pageCtaPresets.servicesIndex} />
      </section>
    </main>
  );
}
