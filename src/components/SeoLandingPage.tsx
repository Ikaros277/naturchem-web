import Link from "next/link";
import { AuthenticPhoto } from "@/components/AuthenticPhoto";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqAccordionList } from "@/components/FaqAccordionList";
import { PageHeroBand } from "@/components/PageHeroBand";
import { PageCtaStrip } from "@/components/PageCtaStrip";
import { JsonLd } from "@/components/Schema";
import { ServiceIcon } from "@/components/ServiceIcon";
import { WorkProcessTimeline } from "@/components/WorkProcessTimeline";
import { getAuthenticPhoto } from "@/lib/authentic-photos";
import { getCtaCopy } from "@/lib/i18n/cta-i18n";
import { getCompanyStatsContent } from "@/lib/i18n/company-stats-i18n";
import { getMessages } from "@/lib/i18n/get-messages";
import { getServiceTrustBandItems } from "@/lib/i18n/home-content";
import { localizeHref } from "@/lib/i18n/navigation";
import { getSeoLandingCopy } from "@/lib/i18n/seo-landing-i18n";
import { getWorkProcessCopy } from "@/lib/i18n/work-process-i18n";
import type { Locale } from "@/lib/i18n/locales";
import { contactUrl } from "@/lib/contact-url";
import { getServiceHeroTheme } from "@/lib/hero-images";
import { renderRichText, splitLeadSentence, stripRichText } from "@/lib/rich-text";
import type { SeoLanding } from "@/lib/seo-landings";
import type { ServiceIconKey } from "@/lib/service-icons";
import { company, siteUrl } from "@/lib/site";

type Props = {
  landing: SeoLanding;
  locale: Locale;
};

/**
 * Second approved photograph for the body of a landing page. It is never the same picture
 * as the hero, and only generic equipment/context captions from authentic-photos are shown.
 */
const supportPhotoCandidates: Record<string, readonly string[]> = {
  "mereni-hluku": ["mereni-pro-kolaudaci", "mereni-nove-haly"],
  "mereni-pro-kolaudaci": ["mereni-nove-haly", "mereni-hluku"],
  "mereni-nove-haly": ["mereni-pro-kolaudaci", "pracovni-prostredi"],
  "pracovni-prostredi": ["mereni-mikroklimatu", "pristrojove-vybaveni"],
  "mereni-emisi": ["homepage-mereni", "pristrojove-vybaveni"],
  emise: ["homepage-mereni", "pristrojove-vybaveni"]
};
const defaultSupportPhotos = ["homepage-mereni", "pristrojove-vybaveni", "mereni-emisi"] as const;

function pickSupportPhoto(heroTheme: string) {
  const heroAsset = getAuthenticPhoto(heroTheme)?.asset;
  const candidates = [...(supportPhotoCandidates[heroTheme] ?? []), ...defaultSupportPhotos];
  for (const theme of candidates) {
    const photo = getAuthenticPhoto(theme);
    if (photo && photo.asset !== heroAsset) return photo;
  }
  return null;
}

export async function SeoLandingPage({ landing, locale }: Props) {
  const messages = await getMessages(locale);
  const copy = getSeoLandingCopy(locale);
  const ctaCopy = getCtaCopy(locale);
  const link = (href: string) => localizeHref(href, locale);
  const pageUrl = `${siteUrl}${link(`/${landing.slug}`)}/`.replace(/([^:]\/)\/+/g, "$1");
  const contactHref = link(contactUrl(landing.contactService));

  const serviceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: landing.h1,
    name: landing.h1,
    provider: { "@id": `${siteUrl}/#organization`, "@type": "Organization", name: company.name },
    areaServed: landing.areaServed
      ? { "@type": landing.areaServed.type, name: landing.areaServed.name }
      : { "@type": "Country", name: "Czech Republic" },
    url: pageUrl,
    description: stripRichText(landing.intro)
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: copy.breadcrumbHome, item: `${siteUrl}${link("/")}/`.replace(/([^:]\/)\/+/g, "$1") },
      { "@type": "ListItem", position: 2, name: copy.breadcrumbServices, item: `${siteUrl}${link("/sluzby")}/`.replace(/([^:]\/)\/+/g, "$1") },
      { "@type": "ListItem", position: 3, name: landing.h1, item: pageUrl }
    ]
  };

  const faqData = landing.faq?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: landing.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer }
        }))
      }
    : null;

  const entitySummary = copy.entitySummary
    .replace("{company}", company.name)
    .replace("{service}", landing.h1);

  if (landing.layout === "demand") {
    const sectionIcons: ServiceIconKey[] = [
      "process-posouzeni",
      "process-rozsah",
      "process-vystup",
      "process-zpracovani"
    ];
    const heroTheme = landing.heroTheme ?? getServiceHeroTheme(landing.slug);
    const supportPhoto = pickSupportPhoto(heroTheme);
    const stats = getCompanyStatsContent(locale);
    const workProcess = getWorkProcessCopy(locale);
    const trustItems = getServiceTrustBandItems(locale);
    const phone = company.phones[0];
    const phoneHref = `tel:${phone.replace(/\s+/g, "")}`;
    const mailHref = `mailto:${company.email}`;

    return (
      <main className="page seo-demand-page">
        <JsonLd data={serviceData} />
        <JsonLd data={breadcrumbData} />
        {faqData ? <JsonLd data={faqData} /> : null}

        <PageHeroBand
          locale={locale}
          theme={heroTheme}
          variant="service"
          breadcrumbs={[
            { name: copy.breadcrumbHome, href: link("/") },
            { name: copy.breadcrumbServices, href: link("/sluzby") },
            { name: landing.h1 }
          ]}
        >
          <header className="page-header service-hero service-hero--photo service-hero--single seo-demand-hero">
            {landing.eyebrow ? <p className="eyebrow">{landing.eyebrow}</p> : null}
            <h1>{landing.h1}</h1>
            <p className="page-lead">{renderRichText(landing.intro)}</p>
            <div className="btn-row seo-demand-hero-actions">
              <Link href={contactHref} className="button">
                {ctaCopy.globalCta}
              </Link>
              <Link href={link(landing.serviceHref)} className="button secondary">
                {copy.generalServicePage}
              </Link>
            </div>
          </header>
        </PageHeroBand>

        {landing.highlights?.length ? (
          <section className="seo-demand-highlight-band" aria-label={landing.overviewHeading}>
            <div className="container seo-demand-highlight-grid">
              {landing.highlights.map((item) => (
                <div key={item} className="seo-demand-highlight">
                  <span aria-hidden="true">✓</span>
                  <strong>{item}</strong>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        <section
          className="section seo-demand-overview"
          aria-labelledby="seo-demand-overview-heading"
        >
          <div className="container seo-demand-overview-layout">
            <div className="seo-demand-overview-aside">
              <header className="seo-demand-section-header">
                <p className="eyebrow">{copy.overviewEyebrow}</p>
                <h2 id="seo-demand-overview-heading">
                  {landing.overviewHeading ?? landing.sections[0]?.heading}
                </h2>
              </header>
              {supportPhoto ? (
                <figure className="seo-demand-photo">
                  <div className="seo-demand-photo-frame">
                    <AuthenticPhoto src={supportPhoto.src} position={supportPhoto.position} />
                  </div>
                  <figcaption>{supportPhoto.caption[locale]}</figcaption>
                </figure>
              ) : null}
            </div>
            <ol className="seo-demand-overview-list">
              {landing.sections.map((section, index) => {
                const [firstParagraph, ...otherParagraphs] = section.paragraphs;
                const split = firstParagraph ? splitLeadSentence(firstParagraph) : null;
                return (
                  <li
                    key={section.heading ?? section.paragraphs[0]?.slice(0, 40)}
                    className="seo-demand-card"
                  >
                    <div className="seo-demand-card-top">
                      <span className="seo-demand-step-icon" aria-hidden="true">
                        <ServiceIcon icon={sectionIcons[index] ?? "process-zpracovani"} variant="inline" />
                      </span>
                      <span className="seo-demand-step-index" aria-hidden="true">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    {section.heading ? <h3>{section.heading}</h3> : null}
                    {split ? (
                      <>
                        <p className="seo-demand-card-lead">{split.lead}</p>
                        <p>{renderRichText(split.rest)}</p>
                      </>
                    ) : firstParagraph ? (
                      <p>{renderRichText(firstParagraph)}</p>
                    ) : null}
                    {otherParagraphs.map((paragraph) => (
                      <p key={paragraph.slice(0, 48)}>{renderRichText(paragraph)}</p>
                    ))}
                  </li>
                );
              })}
            </ol>
          </div>
        </section>

        <section className="seo-demand-stats-band" aria-labelledby="seo-demand-stats-heading">
          <div className="container">
            <h2 id="seo-demand-stats-heading" className="seo-demand-stats-heading">
              {stats.companyStatsIntro}
            </h2>
            <ul className="seo-demand-trust-chips">
              {trustItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <ul className="seo-demand-stats">
              {stats.companyStats.map((stat) => (
                <li key={stat.label}>
                  <ServiceIcon icon={stat.icon} variant="inline" />
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </li>
              ))}
            </ul>
            <p className="seo-demand-stats-note">{stats.companyStatsNote}</p>
          </div>
        </section>

        <section className="section seo-demand-process" aria-labelledby="seo-demand-process-heading">
          <div className="container">
            <header className="seo-demand-section-header">
              <p className="eyebrow">{copy.processEyebrow}</p>
              <h2 id="seo-demand-process-heading">{workProcess.heading}</h2>
              <p className="muted">{workProcess.intro}</p>
            </header>
            <WorkProcessTimeline steps={workProcess.steps} processAria={messages.common.cooperationProcess} />
          </div>
        </section>

        {landing.relatedLinks?.length ? (
          <section className="section seo-demand-related-section" aria-labelledby="seo-related-heading">
            <div className="container">
              <header className="seo-demand-section-header">
                <p className="eyebrow">{copy.relatedEyebrow}</p>
                <h2 id="seo-related-heading">{copy.relatedSolutions}</h2>
              </header>
              <ul className="seo-demand-related-list">
                {landing.relatedLinks.map((item) => (
                  <li key={item.href}>
                    <Link href={link(item.href)} className="seo-demand-related-row">
                      <span className="seo-demand-related-icon" aria-hidden="true">
                        <ServiceIcon href={item.href} variant="inline" />
                      </span>
                      <span className="seo-demand-related-copy">
                        <strong>{item.label}</strong>
                        <small>{item.description}</small>
                      </span>
                      <span className="seo-demand-related-arrow" aria-hidden="true">
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ) : null}

        {landing.faq?.length ? (
          <section className="section seo-demand-faq" aria-labelledby="seo-demand-faq-heading">
            <div className="container seo-demand-faq-inner">
              <header className="seo-demand-section-header">
                <p className="eyebrow">{copy.faqEyebrow}</p>
                <h2 id="seo-demand-faq-heading">{copy.faqTitle}</h2>
              </header>
              <FaqAccordionList
                items={landing.faq.map((item) => ({ q: item.question, paragraphs: [item.answer] }))}
              />
            </div>
          </section>
        ) : null}

        {landing.sources?.length ? (
          <section
            className="section seo-demand-sources"
            aria-labelledby="seo-demand-sources-heading"
          >
            <div className="container">
              <header className="seo-demand-section-header">
                {landing.sourcesEyebrow ? <p className="eyebrow">{landing.sourcesEyebrow}</p> : null}
                <h2 id="seo-demand-sources-heading">{landing.sourcesHeading}</h2>
              </header>
              <ul className="seo-demand-related-list">
                {landing.sources.map((source) => (
                  <li key={source.href}>
                    <a
                      href={source.href}
                      className="seo-demand-related-row"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="seo-demand-related-icon" aria-hidden="true">
                        <ServiceIcon icon="process-posouzeni" variant="inline" />
                      </span>
                      <span className="seo-demand-related-copy">
                        <strong>{source.label}</strong>
                        <small>{source.description}</small>
                      </span>
                      <span className="seo-demand-related-arrow" aria-hidden="true">
                        ↗
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ) : null}

        <section className="seo-demand-contact" aria-labelledby="seo-demand-contact-heading">
          <div className="container seo-demand-contact-inner">
            <div className="seo-demand-contact-copy">
              <p className="eyebrow">{copy.contactEyebrow}</p>
              <h2 id="seo-demand-contact-heading">{copy.ctaHeading}</h2>
              <p>{copy.ctaText}</p>
              <div className="btn-row">
                <Link href={contactHref} className="button">
                  {ctaCopy.globalCta}
                </Link>
                <Link href={link(landing.serviceHref)} className="button secondary">
                  {copy.generalServicePage}
                </Link>
              </div>
            </div>
            <ul className="seo-demand-contact-list">
              <li>
                <a href={phoneHref}>
                  <small>{copy.phoneLabel}</small>
                  <strong>{phone}</strong>
                </a>
              </li>
              <li>
                <a href={mailHref}>
                  <small>{copy.emailLabel}</small>
                  <strong>{company.email}</strong>
                </a>
              </li>
              <li>
                <span>
                  <small>{copy.responseLabel}</small>
                  <strong>{messages.header.responseTime}</strong>
                </span>
              </li>
            </ul>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="container section seo-demand-landing">
      <JsonLd data={serviceData} />
      <JsonLd data={breadcrumbData} />
      {faqData ? <JsonLd data={faqData} /> : null}
      <Breadcrumbs
        breadcrumbsAria={messages.common.breadcrumbsAria}
        items={[
          { name: copy.breadcrumbHome, href: link("/") },
          { name: copy.breadcrumbServices, href: link("/sluzby") },
          { name: landing.h1 }
        ]}
      />
      <h1>{landing.h1}</h1>
      <p className="seo-landing-entity-summary">{entitySummary}</p>
      <p className="page-lead">{landing.intro}</p>

      {landing.sections.map((section) => (
        <section key={section.heading ?? section.paragraphs[0]?.slice(0, 40)} className="content-block">
          {section.heading ? <h2>{section.heading}</h2> : null}
          {section.paragraphs.map((p) => (
            <p key={p.slice(0, 48)}>{renderRichText(p)}</p>
          ))}
        </section>
      ))}

      {landing.relatedLinks?.length ? (
        <section className="content-block seo-demand-related" aria-labelledby="seo-related-heading">
          <h2 id="seo-related-heading">{copy.relatedSolutions}</h2>
          <div className="seo-demand-related-grid">
            {landing.relatedLinks.map((item) => (
              <Link key={item.href} href={link(item.href)} className="card seo-demand-related-card">
                <strong>{item.label}</strong>
                <span>{item.description}</span>
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      {landing.faq?.length ? (
        <section className="content-block seo-demand-faq" aria-labelledby="seo-demand-faq-heading">
          <h2 id="seo-demand-faq-heading">{copy.faqTitle}</h2>
          <FaqAccordionList
            items={landing.faq.map((item) => ({ q: item.question, paragraphs: [item.answer] }))}
          />
        </section>
      ) : null}

      <PageCtaStrip
        text={copy.ctaText}
        primaryLabel={ctaCopy.globalCta}
        primaryHref={contactHref}
        secondaryLabel={copy.generalServicePage}
        secondaryHref={link(landing.serviceHref)}
        className="content-block"
      />
      {landing.oboryHref ? (
        <p className="content-block">
          <Link href={link(landing.oboryHref)}>{copy.relatedFacility}</Link>
        </p>
      ) : null}
    </main>
  );
}
