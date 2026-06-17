import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageCtaStrip } from "@/components/PageCtaStrip";
import { JsonLd } from "@/components/Schema";
import { getCtaCopy } from "@/lib/i18n/cta-i18n";
import { getMessages } from "@/lib/i18n/get-messages";
import { localizeHref } from "@/lib/i18n/navigation";
import { getSeoLandingCopy } from "@/lib/i18n/seo-landing-i18n";
import type { Locale } from "@/lib/i18n/locales";
import { contactUrl } from "@/lib/contact-url";
import type { SeoLanding } from "@/lib/seo-landings";
import { siteUrl } from "@/lib/site";

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
  const contactHref = contactUrl(landing.contactService);

  const serviceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: landing.h1,
    provider: { "@type": "Organization", name: "NATURCHEM, s.r.o.", url: siteUrl },
    areaServed: "CZ",
    url: pageUrl,
    description: landing.intro
  };

  return (
    <main className="container section">
      <JsonLd data={serviceData} />
      <Breadcrumbs
        breadcrumbsAria={messages.common.breadcrumbsAria}
        items={[
          { name: copy.breadcrumbHome, href: link("/") },
          { name: copy.breadcrumbServices, href: link("/sluzby") },
          { name: landing.h1 }
        ]}
      />
      <h1>{landing.h1}</h1>
      <p className="page-lead">{landing.intro}</p>

      {landing.sections.map((section) => (
        <section key={section.heading ?? section.paragraphs[0]?.slice(0, 40)} className="content-block">
          {section.heading ? <h2>{section.heading}</h2> : null}
          {section.paragraphs.map((p) => (
            <p key={p.slice(0, 48)}>{p}</p>
          ))}
        </section>
      ))}

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
