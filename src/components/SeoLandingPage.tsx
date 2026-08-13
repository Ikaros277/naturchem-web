import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqAccordionList } from "@/components/FaqAccordionList";
import { PageHeroBand } from "@/components/PageHeroBand";
import { PageCtaStrip } from "@/components/PageCtaStrip";
import { JsonLd } from "@/components/Schema";
import { ServiceIcon } from "@/components/ServiceIcon";
import { getCtaCopy } from "@/lib/i18n/cta-i18n";
import { getMessages } from "@/lib/i18n/get-messages";
import { localizeHref } from "@/lib/i18n/navigation";
import { getSeoLandingCopy } from "@/lib/i18n/seo-landing-i18n";
import type { Locale } from "@/lib/i18n/locales";
import { contactUrl } from "@/lib/contact-url";
import { getServiceHeroTheme } from "@/lib/hero-images";
import type { SeoLanding } from "@/lib/seo-landings";
import type { ServiceIconKey } from "@/lib/service-icons";
import { company, siteUrl } from "@/lib/site";

type Props = {
  landing: SeoLanding;
  locale: Locale;
};

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
    description: landing.intro
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: copy.breadcrumbHome, item: `${siteUrl}${link("/")}/` },
      { "@type": "ListItem", position: 2, name: copy.breadcrumbServices, item: `${siteUrl}${link("/sluzby")}/` },
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
      "process-vystup"
    ];

    return (
      <main className="page seo-demand-page">
        <JsonLd data={serviceData} />
        <JsonLd data={breadcrumbData} />
        {faqData ? <JsonLd data={faqData} /> : null}

        <PageHeroBand
          locale={locale}
          theme={landing.heroTheme ?? getServiceHeroTheme(landing.slug)}
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
            <p className="page-lead">{landing.intro}</p>
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
              {landing.highlights.map((item, index) => (
                <div key={item} className="seo-demand-highlight">
                  <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                  <strong>{item}</strong>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        <section
          className="section page-first-section seo-demand-overview"
          aria-labelledby="seo-demand-overview-heading"
        >
          <div className="container">
            <header className="seo-demand-section-header">
              <p className="eyebrow">Stručně a věcně</p>
              <h2 id="seo-demand-overview-heading">
                {landing.overviewHeading ?? landing.sections[0]?.heading}
              </h2>
            </header>
            <div className="seo-demand-overview-grid">
              {landing.sections.map((section, index) => (
                <article
                  key={section.heading ?? section.paragraphs[0]?.slice(0, 40)}
                  className="seo-demand-overview-card"
                >
                  <ServiceIcon icon={sectionIcons[index] ?? "process-zpracovani"} variant="inline" />
                  {section.heading ? <h3>{section.heading}</h3> : null}
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                  ))}
                </article>
              ))}
            </div>
          </div>
        </section>

        {landing.relatedLinks?.length ? (
          <section className="section seo-demand-related-section" aria-labelledby="seo-related-heading">
            <div className="container">
              <header className="seo-demand-section-header">
                <p className="eyebrow">Navazující řešení</p>
                <h2 id="seo-related-heading">{copy.relatedSolutions}</h2>
              </header>
              <div className="seo-demand-related-grid">
                {landing.relatedLinks.map((item) => (
                  <Link key={item.href} href={link(item.href)} className="seo-demand-related-card">
                    <ServiceIcon href={item.href} variant="inline" />
                    <span className="seo-demand-related-copy">
                      <strong>{item.label}</strong>
                      <small>{item.description}</small>
                    </span>
                    <span className="seo-demand-related-arrow" aria-hidden="true">
                      →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {landing.faq?.length ? (
          <section className="section seo-demand-faq" aria-labelledby="seo-demand-faq-heading">
            <div className="container seo-demand-faq-inner">
              <header className="seo-demand-section-header">
                <p className="eyebrow">Praktické informace</p>
                <h2 id="seo-demand-faq-heading">{copy.faqTitle}</h2>
              </header>
              <FaqAccordionList
                items={landing.faq.map((item) => ({ q: item.question, paragraphs: [item.answer] }))}
              />
            </div>
          </section>
        ) : null}

        <div className="container seo-demand-cta-wrap">
          <PageCtaStrip
            text={copy.ctaText}
            primaryLabel={ctaCopy.globalCta}
            primaryHref={contactHref}
            secondaryLabel={copy.generalServicePage}
            secondaryHref={link(landing.serviceHref)}
            className="seo-demand-final-cta"
          />
        </div>
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
            <p key={p.slice(0, 48)}>{p}</p>
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
