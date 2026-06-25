import type { Metadata } from "next";
import { HomeHeroSection } from "@/components/HomeHeroSection";
import { ExperienceStats } from "@/components/ExperienceStats";
import { HomeOfferCard } from "@/components/HomeOfferCard";
import { JsonLd } from "@/components/Schema";
import { ClientLogosGrid } from "@/components/ClientLogosGrid";
import { HomePoradnaStrip } from "@/components/HomePoradnaStrip";
import { HomeUnsureStrip } from "@/components/HomeUnsureStrip";
import { getCompanyStatsContent } from "@/lib/i18n/company-stats-i18n";
import { getHomeHeroPillars } from "@/lib/i18n/content";
import { getMessages } from "@/lib/i18n/get-messages";
import { TrustBand } from "@/components/TrustBand";
import { getHomeOfferPillars, getHomeTrustBandItems } from "@/lib/i18n/home-content";
import { pageMetadata } from "@/lib/i18n/metadata-helpers";
import { isLocale, type Locale } from "@/lib/i18n/locales";
import { localizeHref } from "@/lib/i18n/navigation";
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
    path: "/",
    absoluteTitle: messages.home.metaTitle,
    description: messages.home.metaDescription
  });
}

export default async function Home({ params }: Props) {
  const { locale: localeParam } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "cs";
  const messages = await getMessages(locale);
  const offerPillars = getHomeOfferPillars(locale);
  const trustItems = getHomeTrustBandItems(locale);
  const heroPillars = await getHomeHeroPillars(locale);
  const statsContent = getCompanyStatsContent(locale);
  const link = (href: string) => localizeHref(href, locale);
  const homeUrl = `${siteUrl}${link("/")}/`.replace(/([^:]\/)\/+/g, "$1");

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: messages.common.breadcrumbHome, item: homeUrl }
    ]
  };

  return (
    <main className="home-page">
      <JsonLd data={breadcrumbData} />
      <HomeHeroSection
        title={messages.home.heroTitle}
        lead={messages.home.heroLead}
        pillars={heroPillars}
        ariaLabel={messages.homeHero.ariaLabel}
        pillarsAriaLabel={messages.homeHero.pillarsAria}
      />

      <TrustBand
        items={trustItems}
        heading={messages.home.trustAria}
        className="home-fade-in-section"
      />

      <section
        className="home-stats-compact home-fade-in-section home-fade-in-section-delay-1"
        aria-label={messages.home.statsAria}
      >
        <div className="container">
          <ExperienceStats
            variant="compact"
            showNote={false}
            statsContent={statsContent}
            experienceOverviewAria={messages.common.experienceOverview}
          />
        </div>
      </section>

      <section
        className="home-section home-section-offer home-fade-in-section home-fade-in-section-delay-2"
        aria-labelledby="home-offer-heading"
      >
        <div className="container">
          <header className="section-header home-offer-header">
            <h2 id="home-offer-heading">{messages.home.offerTitle}</h2>
          </header>
          <div className="home-offer-grid home-offer-grid-three">
            {offerPillars.map((pillar) => (
              <HomeOfferCard key={pillar.title} pillar={pillar} />
            ))}
          </div>
        </div>
      </section>

      <HomeUnsureStrip locale={locale} />

      <HomePoradnaStrip locale={locale} />

      <section
        className="home-section container home-clients-section section--forest-tint"
        aria-labelledby="home-clients-heading"
      >
        <h2 id="home-clients-heading" className="sr-only">
          {messages.home.clientsTitle}
        </h2>
        <ClientLogosGrid expandable moreHref={link("/reference#zakaznici")} />
      </section>
    </main>
  );
}
