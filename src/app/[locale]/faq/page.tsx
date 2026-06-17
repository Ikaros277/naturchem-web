import type { Metadata } from "next";
import Link from "next/link";
import { FaqPageContent } from "@/components/FaqPageContent";
import { PageCtaStrip } from "@/components/PageCtaStrip";
import { PageHeroBand } from "@/components/PageHeroBand";
import { JsonLd } from "@/components/Schema";
import { getPageCtaPresets } from "@/lib/i18n/cta-i18n";
import { getFaqContent } from "@/lib/i18n/content";
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
  const { metadata } = await getFaqContent(locale);
  return pageMetadata({
    locale,
    path: "/faq",
    absoluteTitle: metadata.absoluteTitle,
    description: metadata.description
  });
}

export default async function FaqPage({ params }: Props) {
  const { locale: localeParam } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "cs";
  const faq = await getFaqContent(locale);
  const messages = await getMessages(locale);
  const pageCtaPresets = getPageCtaPresets(locale);
  const link = (href: string) => localizeHref(href, locale);
  const faqUrl = `${siteUrl}${link("/faq")}/`.replace(/([^:]\/)\/+/g, "$1");

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.flatItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: [...item.paragraphs, item.tip].filter(Boolean).join(" ")
      }
    }))
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: messages.common.breadcrumbHome, item: `${siteUrl}${link("/")}/` },
      { "@type": "ListItem", position: 2, name: faq.pageTitle, item: faqUrl }
    ]
  };

  return (
    <main className="section faq-page premium-page">
      <JsonLd data={faqData} />
      <JsonLd data={breadcrumbData} />
      <PageHeroBand
        locale={locale}
        theme={getPageHeroTheme("/faq")}
        breadcrumbs={[
          { name: messages.common.breadcrumbHome, href: link("/") },
          { name: faq.pageTitle }
        ]}
      >
        <header className="premium-page-hero page-hero--photo">
          <h1>{faq.pageTitle}</h1>
          <p className="page-lead faq-page-intro">{faq.pageIntro}</p>
          <div className="btn-row faq-intro-ctas">
            {faq.introCtas.map((cta, i) => (
              <Link
                key={cta.href}
                href={link(cta.href)}
                className={i === 0 ? "button" : "button secondary"}
              >
                {cta.label}
              </Link>
            ))}
          </div>
        </header>
      </PageHeroBand>
      <div className="container page-first-section">
        <FaqPageContent categories={faq.categories} uiLabels={faq.uiLabels} locale={locale} />
        <PageCtaStrip {...pageCtaPresets.contact} />
      </div>
    </main>
  );
}
