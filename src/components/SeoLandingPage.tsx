import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/Schema";
import { contactUrl } from "@/lib/contact-url";
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

      <section className="cta-strip card content-block">
        <h2>Poptávka</h2>
        <p className="muted">
          Pošlete stručný popis provozu nebo požadavek úřadu. Na základě podkladů navrhneme
          rozsah prací a možný termín realizace.
        </p>
        <div className="btn-row">
          <Link className="button" href={contactHref}>
            Poptat službu
          </Link>
          <Link className="button secondary" href={landing.serviceHref}>
            Obecná stránka služby
          </Link>
          {landing.oboryHref ? (
            <Link className="button secondary" href={landing.oboryHref}>
              Související provoz
            </Link>
          ) : null}
        </div>
      </section>
    </main>
  );
}
