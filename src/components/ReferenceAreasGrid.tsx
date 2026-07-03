import Link from "next/link";
import type { ReferenceArea } from "@/lib/reference-content";
import type { Locale } from "@/lib/i18n/locales";
import { localizeHref } from "@/lib/i18n/navigation";
import { contactUrl } from "@/lib/contact-url";

type Props = {
  areas: readonly ReferenceArea[];
  locale: Locale;
  heading: string;
};

export function ReferenceAreasGrid({ areas, locale, heading }: Props) {
  const link = (href: string) => localizeHref(href, locale);

  return (
    <section className="section content-block container reference-areas-section" id="obory">
      <h2>{heading}</h2>
      <div className="reference-areas-grid">
        {areas.map((area) => (
          <article key={area.title} className="card reference-area-card">
            <h3>{area.title}</h3>
            <p className="muted">{area.description}</p>
            <Link href={link(contactUrl(area.contactService))} className="reference-area-cta">
              {area.contactService}
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
