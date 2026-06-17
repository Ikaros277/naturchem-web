import type { Metadata } from "next";

import { CaseStudiesCategoryGrid } from "@/components/CaseStudiesCategoryGrid";
import { PageCtaStrip } from "@/components/PageCtaStrip";
import { PageHeroBand } from "@/components/PageHeroBand";
import { TypicalScenarios } from "@/components/TypicalScenarios";
import { WorkProcessTimeline } from "@/components/WorkProcessTimeline";
import { getPageCtaPresets } from "@/lib/i18n/cta-i18n";
import {
  getCaseStudyCategories,
  getTypickeZakazkyContent,
  getTypicalScenarios
} from "@/lib/i18n/content";
import { getWorkProcessCopy } from "@/lib/i18n/work-process-i18n";
import { getMessages } from "@/lib/i18n/get-messages";
import { pageMetadata } from "@/lib/i18n/metadata-helpers";
import { localizeHref } from "@/lib/i18n/navigation";
import { isLocale, type Locale } from "@/lib/i18n/locales";
import { getPageHeroTheme } from "@/lib/hero-images";

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
  const categories = await getCaseStudyCategories(locale);
  const scenarios = await getTypicalScenarios(locale);
  const pageCtaPresets = getPageCtaPresets(locale);
  const link = (href: string) => localizeHref(href, locale);

  return (
    <main className="section premium-page typicke-zakazky-page">
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
        <h2>{workProcess.heading}</h2>
        <p className="muted section-intro">{workProcess.intro}</p>
        <WorkProcessTimeline steps={workProcess.steps} processAria={messages.common.cooperationProcess} />
      </section>

      <section className="section content-block container">
        <h2>{content.typickeZakazkyScenariosHeading}</h2>
        <TypicalScenarios scenarios={scenarios} locale={locale} />
      </section>

      <section className="section content-block container">
        <h2>{content.typickeZakazkyExamplesHeading}</h2>
        <p className="muted section-intro">{content.typickeZakazkyExamplesIntro}</p>
        <CaseStudiesCategoryGrid categories={categories} />
      </section>

      <PageCtaStrip {...pageCtaPresets.typicalOrders} className="container" />
    </main>
  );
}
