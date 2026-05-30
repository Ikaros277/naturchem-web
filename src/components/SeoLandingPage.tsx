import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageCtaStrip } from "@/components/PageCtaStrip";
import { JsonLd } from "@/components/Schema";
import { contactUrl } from "@/lib/contact-url";
import { globalCta } from "@/lib/cta";
import type { SeoLanding } from "@/lib/seo-landings";
import { siteUrl } from "@/lib/site";

type Props = { landing: SeoLanding };

export function SeoLandingPage({ landing }: Props) {
  const pageUrl = `${siteUrl}/${landing.slug}/`;
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
        items={[
          { name: "Úvod", href: "/" },
          { name: "Služby", href: "/sluzby" },
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
        text="Pošlete stručný popis provozu nebo požadavek úřadu. Na základě podkladů navrhneme rozsah prací a možný termín realizace."
        primaryLabel={globalCta}
        primaryHref={contactHref}
        secondaryLabel="Obecná stránka služby"
        secondaryHref={landing.serviceHref}
        className="content-block"
      />
      {landing.oboryHref ? (
        <p className="content-block">
          <Link href={landing.oboryHref}>Související provoz</Link>
        </p>
      ) : null}
    </main>
  );
}
