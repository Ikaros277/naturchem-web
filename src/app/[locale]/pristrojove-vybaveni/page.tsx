import type { Metadata } from "next";

import { EquipmentGroupsIndex } from "@/components/EquipmentGroupsIndex";
import { PageCtaStrip } from "@/components/PageCtaStrip";
import { PageHeroBand } from "@/components/PageHeroBand";
import { JsonLd } from "@/components/Schema";
import { getPageCtaPresets } from "@/lib/i18n/cta-i18n";
import { getEquipmentContent } from "@/lib/i18n/content";
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
    path: "/pristrojove-vybaveni",
    absoluteTitle: messages.equipment.metaTitle,
    description: messages.equipment.metaDescription
  });
}

export default async function Page({ params }: Props) {
  const { locale: localeParam } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "cs";
  const messages = await getMessages(locale);
  const equipment = await getEquipmentContent(locale);
  const pageCtaPresets = getPageCtaPresets(locale);
  const link = (href: string) => localizeHref(href, locale);
  const pageUrl = `${siteUrl}${link("/pristrojove-vybaveni")}/`.replace(/([^:]\/)\/+/g, "$1");

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: messages.common.breadcrumbHome, item: `${siteUrl}${link("/")}/` },
      { "@type": "ListItem", position: 2, name: messages.equipment.breadcrumb, item: pageUrl }
    ]
  };

  const webPageData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: messages.equipment.schemaName,
    url: pageUrl,
    description: messages.equipment.metaDescription
  };

  return (
    <main className="section premium-page equipment-page">
      <JsonLd data={breadcrumbData} />
      <JsonLd data={webPageData} />
      <PageHeroBand
        locale={locale}
        theme={getPageHeroTheme("/pristrojove-vybaveni")}
        breadcrumbs={[
          { name: messages.common.breadcrumbHome, href: link("/") },
          { name: messages.equipment.breadcrumb }
        ]}
      >
        <header className="premium-page-hero page-hero--photo">
          <p className="eyebrow">{messages.equipment.eyebrow}</p>
          <h1>{messages.equipment.pageTitle}</h1>
          <p className="page-lead">{messages.equipment.lead}</p>
        </header>
      </PageHeroBand>

      <section
        className="section content-block container page-first-section"
        aria-labelledby="equipment-index-intro-heading"
      >
        <h2 id="equipment-index-intro-heading">{equipment.equipmentSectionHeading}</h2>
        <p>{equipment.equipmentSectionIntro}</p>
      </section>

      <EquipmentGroupsIndex
        groups={equipment.equipmentGroups}
        groupAriaVerbs={equipment.equipmentGroupAriaVerbs}
        locale={locale}
      />

      <PageCtaStrip {...pageCtaPresets.equipment} className="container" />
    </main>
  );
}
