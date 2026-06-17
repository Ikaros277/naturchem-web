import type { Metadata } from "next";
import { ContactFormSection } from "@/components/ContactFormSection";
import { ContactPageHeroMedia, ContactPageOfficesMap } from "@/components/ContactPageMedia";
import { PageHeroBand } from "@/components/PageHeroBand";
import { ServiceIcon } from "@/components/ServiceIcon";
import { company, getCompanyOffices, siteUrl } from "@/lib/site";
import { JsonLd } from "@/components/Schema";
import { getPageHeroTheme } from "@/lib/hero-images";
import { getInquiryCategories } from "@/lib/i18n/contact-inquiry-i18n";
import { getMessages } from "@/lib/i18n/get-messages";
import { pageMetadata } from "@/lib/i18n/metadata-helpers";
import { localizeHref } from "@/lib/i18n/navigation";
import { isLocale, type Locale } from "@/lib/i18n/locales";
import { readContactUrlPrefill } from "@/lib/contact-url-prefill";

type PageProps = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "cs";
  const messages = await getMessages(locale);
  return pageMetadata({
    locale,
    path: "/kontakt",
    absoluteTitle: messages.contact.metaTitle,
    description: messages.contact.metaDescription
  });
}

const companyOffices = getCompanyOffices();
const primaryPhoneHref = `tel:${company.phones[0].replaceAll(" ", "")}`;

export default async function Page({ params, searchParams }: PageProps) {
  const { locale: localeParam } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "cs";
  const sp = await searchParams;
  const query = new URLSearchParams();
  for (const [key, value] of Object.entries(sp)) {
    if (typeof value === "string") query.set(key, value);
    else if (Array.isArray(value)) value.forEach((v) => query.append(key, v));
  }
  const prefill = readContactUrlPrefill(query.size ? `?${query.toString()}` : "");
  const categories = getInquiryCategories(locale);
  const messages = await getMessages(locale);
  const link = (href: string) => localizeHref(href, locale);
  const pageUrl = `${siteUrl}${link("/kontakt")}/`.replace(/([^:]\/)\/+/g, "$1");

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: messages.common.breadcrumbHome, item: `${siteUrl}${link("/")}/` },
      { "@type": "ListItem", position: 2, name: messages.contact.eyebrow, item: pageUrl }
    ]
  };

  const heroTheme = getPageHeroTheme("/kontakt");

  return (
    <main className="section contact-page premium-page">
      <JsonLd data={breadcrumbData} />
      <PageHeroBand
        locale={locale}
        theme={heroTheme}
        breadcrumbs={[
          { name: messages.common.breadcrumbHome, href: link("/") },
          { name: messages.contact.eyebrow }
        ]}
        className="page-hero-band--map"
        media={<ContactPageHeroMedia theme={heroTheme} />}
      >
        <header className="premium-page-hero contact-hero page-hero--photo">
          <div>
            <p className="eyebrow">{messages.contact.eyebrow}</p>
            <h1>{messages.contact.title}</h1>
            <p className="page-lead">{messages.contact.lead}</p>
          </div>
        </header>
      </PageHeroBand>

      <section
        className="section content-block container page-first-section contact-form-section"
        aria-labelledby="poptavka-heading"
      >
        <article className="card contact-form-panel contact-page-card">
          <ContactFormSection
            categories={categories}
            initialCategory={prefill.initialCategory}
            initialMessage={prefill.initialMessage}
          />
        </article>
      </section>

      <section className="section content-block container contact-company-section contact-page-last-section">
        <article className="card contact-info-panel contact-page-card">
          <h2>{messages.contact.detailsTitle}</h2>
          <div className="contact-company-grid">
            <div className="contact-company-column">
              <h3 className="contact-column-head contact-column-head--panel">
                <ServiceIcon icon="contact-building" variant="inline" size={20} />
                {messages.contact.company}
              </h3>
              <div className="contact-panel-body">
                <strong>{company.name}</strong>
                <span className="contact-info-meta">
                  {messages.common.ico}: {company.ico} · {messages.common.dic}: {company.dic}
                </span>
              </div>
            </div>
            <div className="contact-company-column">
              <h3 className="contact-column-head contact-column-head--panel">
                <ServiceIcon icon="contact-user" variant="inline" size={20} />
                {messages.contact.contactPerson}
              </h3>
              <div className="contact-channel-list">
                <div className="contact-channel-block">
                  <span className="contact-info-label">{messages.contact.contactPersonLabel}</span>
                  <strong>{company.person}</strong>
                </div>
                <div className="contact-channel-block">
                  <span className="contact-info-label">{messages.contact.phone}</span>
                  <p className="contact-channel-lines">
                    <a href={primaryPhoneHref}>{company.phones[0]}</a>
                    <a href={`tel:${company.phones[1].replaceAll(" ", "")}`}>{company.phones[1]}</a>
                  </p>
                </div>
                <div className="contact-channel-block">
                  <span className="contact-info-label">{messages.contact.email}</span>
                  <a href={`mailto:${company.email}`}>{company.email}</a>
                </div>
              </div>
            </div>
            <div className="contact-company-column contact-company-column--offices">
              <h3 className="contact-column-head contact-column-head--panel">
                <ServiceIcon icon="contact-map-pin" variant="inline" size={20} />
                {messages.contact.offices}
              </h3>
              <ul className="contact-office-list">
                {companyOffices.map((office) => (
                  <li key={office.label} className="contact-office-item">
                    <strong>{office.label}</strong>
                    <span>
                      {office.street}, {office.postalCode} {office.city}
                    </span>
                  </li>
                ))}
              </ul>
              <ContactPageOfficesMap />
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
