import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqAccordionList } from "@/components/FaqAccordionList";
import { PageCtaStrip } from "@/components/PageCtaStrip";
import { JsonLd } from "@/components/Schema";
import { getCtaCopy } from "@/lib/i18n/cta-i18n";
import { getMessages } from "@/lib/i18n/get-messages";
import { localizeHref } from "@/lib/i18n/navigation";
import { getSeoLandingCopy } from "@/lib/i18n/seo-landing-i18n";
import type { Locale } from "@/lib/i18n/locales";
import { contactUrl } from "@/lib/contact-url";
import type { SeoLanding } from "@/lib/seo-landings";
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
