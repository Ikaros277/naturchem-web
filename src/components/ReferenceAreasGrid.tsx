import Image from "next/image";
import Link from "next/link";
import type { ReferenceArea } from "@/lib/reference-content";
import type { Locale } from "@/lib/i18n/locales";
import { localizeHref } from "@/lib/i18n/navigation";
import { contactUrl } from "@/lib/contact-url";
import type { ContactServiceOption } from "@/lib/contact-services";
import { CONTACT_SERVICE_LABELS_EN } from "@/lib/contact-services-en";
import { CONTACT_SERVICE_LABELS_DE } from "@/lib/contact-services-de";

function contactServiceLabel(service: string, locale: Locale): string {
  if (locale === "en") {
    return CONTACT_SERVICE_LABELS_EN[service as ContactServiceOption] ?? service;
  }
  if (locale === "de") {
    return CONTACT_SERVICE_LABELS_DE[service as ContactServiceOption] ?? service;
  }
  return service;
}

type Props = {
  areas: readonly ReferenceArea[];
  locale: Locale;
  heading: string;
};

export function ReferenceAreasGrid({ areas, locale, heading }: Props) {
  const link = (href: string) => localizeHref(href, locale);

  return (
    <section className="section content-block container reference-areas-section page-below-fold" id="obory">
      <h2>{heading}</h2>
      <div className="reference-areas-grid">
        {areas.map((area) => (
          <article key={area.title} className="card reference-area-card">
            <div className="reference-area-media">
              <Image
                src={area.imageSrc}
                alt={area.title}
                width={560}
                height={320}
                className="reference-area-image"
                loading="lazy"
              />
            </div>
            <h3>{area.title}</h3>
            <p className="muted">{area.description}</p>
            <Link href={link(contactUrl(area.contactService))} className="reference-area-cta">
              {contactServiceLabel(area.contactService, locale)}
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
