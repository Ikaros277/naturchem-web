import type { Metadata } from "next";
import { PageHeroBand } from "@/components/PageHeroBand";
import { SatisfactionSurveyForm } from "@/components/SatisfactionSurveyForm";
import { JsonLd } from "@/components/Schema";
import { getPageHeroTheme } from "@/lib/hero-images";
import { getInquiryCategories } from "@/lib/i18n/contact-inquiry-i18n";
import { getMessages } from "@/lib/i18n/get-messages";
import { pageMetadata, withNoindex } from "@/lib/i18n/metadata-helpers";
import { localizeHref } from "@/lib/i18n/navigation";
import { isLocale, type Locale } from "@/lib/i18n/locales";
import { siteUrl } from "@/lib/site";

const pagePath = "/dotaznik-spokojenosti";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "cs";
  const messages = await getMessages(locale);
  return withNoindex(
    pageMetadata({
      locale,
      path: pagePath,
      absoluteTitle: messages.satisfactionSurvey.metaTitle,
      description: messages.satisfactionSurvey.metaDescription
    })
  );
}

export default async function Page({ params }: PageProps) {
  const { locale: localeParam } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "cs";
  const messages = await getMessages(locale);
  const categories = getInquiryCategories(locale);
  const link = (href: string) => localizeHref(href, locale);
  const pageUrl = `${siteUrl}${link(pagePath)}/`.replace(/([^:]\/)\/+/g, "$1");

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: messages.common.breadcrumbHome,
        item: `${siteUrl}${link("/")}/`
      },
      {
        "@type": "ListItem",
        position: 2,
        name: messages.satisfactionSurvey.breadcrumb,
        item: pageUrl
      }
    ]
  };

  return (
    <main className="section satisfaction-survey-page premium-page">
      <JsonLd data={breadcrumbData} />
      <PageHeroBand
        locale={locale}
        theme={getPageHeroTheme(pagePath)}
        breadcrumbs={[
          { name: messages.common.breadcrumbHome, href: link("/") },
          { name: messages.satisfactionSurvey.breadcrumb }
        ]}
      >
        <header className="premium-page-hero page-hero--photo">
          <p className="eyebrow">{messages.satisfactionSurvey.eyebrow}</p>
          <h1>{messages.satisfactionSurvey.title}</h1>
          <p className="page-lead">{messages.satisfactionSurvey.lead}</p>
        </header>
      </PageHeroBand>

      <section className="section content-block container page-first-section contact-form-section satisfaction-survey-section">
        <article className="card contact-form-panel contact-page-card satisfaction-survey-panel">
          <SatisfactionSurveyForm categories={categories} />
        </article>
      </section>
    </main>
  );
}
