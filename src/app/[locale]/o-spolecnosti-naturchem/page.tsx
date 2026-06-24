import type { Metadata } from "next";
import Link from "next/link";
import { ExperienceStats } from "@/components/ExperienceStats";
import { PageCtaStrip } from "@/components/PageCtaStrip";
import { PageHeroBand } from "@/components/PageHeroBand";
import { JsonLd } from "@/components/Schema";
import { TeamMemberCards } from "@/components/TeamSection";
import { getPageCtaPresets } from "@/lib/i18n/cta-i18n";
import { getCompanyStatsContent } from "@/lib/i18n/company-stats-i18n";
import { getAboutPage, getGuaranteeIntro, getTeamMembers } from "@/lib/i18n/content";
import { getMessages } from "@/lib/i18n/get-messages";
import { TrustBand } from "@/components/TrustBand";
import { getHomeTrustBandItems } from "@/lib/i18n/home-content";
import { pageMetadata } from "@/lib/i18n/metadata-helpers";
import { localizeHref } from "@/lib/i18n/navigation";
import { isLocale, locales, type Locale } from "@/lib/i18n/locales";
import { getPageHeroTheme } from "@/lib/hero-images";
import { company, siteUrl } from "@/lib/site";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "cs";
  const { metadata } = await getAboutPage(locale);
  return pageMetadata({
    locale,
    path: "/o-spolecnosti-naturchem",
    absoluteTitle: metadata.title.absolute,
    description: metadata.description
  });
}

export default async function ONaturchemPage({ params }: Props) {
  const { locale: localeParam } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "cs";
  const { content } = await getAboutPage(locale);
  const guaranteeIntro = await getGuaranteeIntro(locale);
  const trustItems = getHomeTrustBandItems(locale);
  const teamMembers = await getTeamMembers(locale);
  const messages = await getMessages(locale);
  const statsContent = getCompanyStatsContent(locale);
  const pageCtaPresets = getPageCtaPresets(locale);
  const link = (href: string) => localizeHref(href, locale);
  const pageUrl = `${siteUrl}${link("/o-spolecnosti-naturchem")}/`.replace(/([^:]\/)\/+/g, "$1");

  const aboutPageData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: content.schemaName,
    url: pageUrl,
    description: (await getAboutPage(locale)).metadata.description
  };

  const orgData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    url: siteUrl,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        telephone: "+420 603 216 983",
        email: "naturchem@naturchem.cz",
        areaServed: "CZ",
        availableLanguage: [...locales]
      }
    ]
  };

  const personData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ing. František Hezina",
    jobTitle: content.personSchema.jobTitle,
    worksFor: { "@type": "Organization", name: company.name, url: siteUrl }
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: content.breadcrumbSchema.home, item: `${siteUrl}${link("/")}/` },
      { "@type": "ListItem", position: 2, name: content.hero.title, item: pageUrl }
    ]
  };

  return (
    <main className="section about-page premium-page">
      <JsonLd data={aboutPageData} />
      <JsonLd data={orgData} />
      <JsonLd data={personData} />
      <JsonLd data={breadcrumbData} />
      <PageHeroBand
        locale={locale}
        theme={getPageHeroTheme("/o-spolecnosti-naturchem")}
        breadcrumbs={content.breadcrumbs.map((crumb) =>
          "href" in crumb ? { name: crumb.name, href: link(crumb.href) } : { name: crumb.name }
        )}
      >
        <header className="premium-page-hero page-hero--photo">
          <p className="eyebrow">{content.hero.eyebrow}</p>
          <h1>{content.hero.title}</h1>
          <p className="page-lead">{content.hero.lead}</p>
        </header>
      </PageHeroBand>

      <TrustBand items={trustItems} heading={content.trustBandHeading} showHeading />

      <section className="home-stats-compact" aria-label={content.statsAriaLabel}>
        <div className="container">
          <ExperienceStats
            variant="compact"
            showNote={false}
            statsContent={statsContent}
            experienceOverviewAria={messages.common.experienceOverview}
          />
        </div>
      </section>

      <section className="section content-block">
        <div className="container">
          <h2>{content.whoWeAre.title}</h2>
          <div className="about-prose">
            {content.whoWeAre.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
            <p className="about-related-links muted">
              {content.whoWeAre.relatedLinksIntro}{" "}
              {content.whoWeAre.relatedLinks.map((item, index) => (
                <span key={item.href}>
                  {index > 0 ? ", " : null}
                  <Link href={link(item.href)}>{item.label}</Link>
                  {index < content.whoWeAre.relatedLinks.length - 1 ? "" : "."}
                </span>
              ))}
            </p>
          </div>
        </div>
      </section>

      <section className="section section-surface content-block">
        <div className="container">
          <article className="card guarantee-panel">
            <h2>{content.guarantee.title}</h2>
            <p>{guaranteeIntro}</p>
            <p>{content.guaranteeCredentials}</p>
          </article>
        </div>
      </section>

      <section className="section content-block">
        <div className="container">
          <h2>{content.team.title}</h2>
          <TeamMemberCards members={teamMembers} />
        </div>
      </section>

      <PageCtaStrip {...pageCtaPresets.cooperation} className="container" />
    </main>
  );
}
