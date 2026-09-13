import type { Metadata } from "next";
import { HomeHeroSection } from "@/components/HomeHeroSection";
import Link from "next/link";
import { CountUpStatValue } from "@/components/CountUpStatValue";
import { HomeServiceIndex } from "@/components/HomeServiceIndex";
import { JsonLd } from "@/components/Schema";
import { referenceClients } from "@/lib/client-logos";
import styles from "@/components/homepage.module.css";
import { HomePoradnaStrip } from "@/components/HomePoradnaStrip";
import { HomeDemandPaths } from "@/components/HomeDemandPaths";
import { getCompanyStatsContent } from "@/lib/i18n/company-stats-i18n";
import { getHomeHeroPillars } from "@/lib/i18n/content";
import { getMessages } from "@/lib/i18n/get-messages";
import { getHomeTrustBandItems } from "@/lib/i18n/home-content";
import { pageMetadata } from "@/lib/i18n/metadata-helpers";
import { isLocale, type Locale } from "@/lib/i18n/locales";
import { localizeHref } from "@/lib/i18n/navigation";
import { siteUrl } from "@/lib/site";

type Props = {
  params: Promise<{ locale: string }>;
};

/** CMS publishing triggers a Vercel deployment, so the homepage stays static between deploys. */
export const revalidate = false;

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
    <main className={styles.page}>
      <JsonLd data={breadcrumbData} />
      <HomeHeroSection
        title={messages.home.heroTitle}
        lead={messages.home.heroLead}
        pillars={heroPillars}
        ariaLabel={messages.homeHero.ariaLabel}
        pillarsAriaLabel={messages.homeHero.pillarsAria}
        locale={locale}
        credential={`${trustItems[0]} · ${trustItems[1]}`}
      />

      <section
        className={styles.stats}
        aria-label={messages.home.statsAria}
      >
        <div className={`${styles.container} ${styles.statsGrid}`}>
          {statsContent.companyStats.map((stat) => (
            <div key={stat.label} className={styles.stat}>
              <CountUpStatValue value={stat.value} />
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <div className={`${styles.container} ${styles.clients}`}>
        <Link href={link("/reference#zakaznici")} className={styles.clientsLabel}>
          {messages.home.clientsTitle} <span aria-hidden="true">↗</span>
        </Link>
        <div className={styles.clientLogos}>
          {referenceClients.slice(0, 5).map((client) => (
            <Link key={client.name} href={link("/reference#zakaznici")} aria-label={client.name}>
              {/* eslint-disable-next-line @next/next/no-img-element -- Pre-sized static logos avoid image transformations. */}
              <img src={client.logo} alt={client.name} width={120} height={40} loading="lazy" decoding="async" />
            </Link>
          ))}
        </div>
      </div>

      <section
        className={styles.section}
        id="sluzby"
        aria-labelledby="home-offer-heading"
      >
        <div className={styles.container}>
          <header className={styles.sectionHeader}>
            <h2 id="home-offer-heading">{messages.home.offerTitle}</h2>
            <Link href={link("/sluzby")} className={styles.textLink}>
              {locale === "cs" ? "Všechny služby" : locale === "de" ? "Alle Leistungen" : "All services"} <span aria-hidden="true">→</span>
            </Link>
          </header>
          <HomeServiceIndex locale={locale} />
        </div>
      </section>

      <HomeDemandPaths locale={locale} />
      <HomePoradnaStrip locale={locale} />
    </main>
  );
}
