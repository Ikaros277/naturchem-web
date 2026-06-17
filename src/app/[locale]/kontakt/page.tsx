import type { Metadata } from "next";
import { ContactFormSection } from "@/components/ContactFormSection";
import { ContactPageHeroMedia, ContactPageOfficesMap } from "@/components/ContactPageMedia";
import { PageHeroBand } from "@/components/PageHeroBand";
import { ServiceIcon } from "@/components/ServiceIcon";
import {
  isValidContactService,
  resolveContactServices,
  sectorContactMessage,
  type ContactServiceOption
} from "@/lib/contact-services";
import { resolveInquiryCategory } from "@/lib/contact-inquiry";
import { company, getCompanyOffices, siteUrl } from "@/lib/site";
import { JsonLd } from "@/components/Schema";
import { getPageHeroTheme } from "@/lib/hero-images";
import { getMessages } from "@/lib/i18n/get-messages";
import { pageMetadata } from "@/lib/i18n/metadata-helpers";
import { localizeHref } from "@/lib/i18n/navigation";
import { isLocale, type Locale } from "@/lib/i18n/locales";

type PageProps = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{
    service?: string | string[];
    sector?: string | string[];
    services?: string | string[];
  }>;
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

function queryParam(value: string | string[] | undefined): string {
  if (!value) return "";
  const raw = Array.isArray(value) ? value[0] : value;
  try {
    return decodeURIComponent(raw.replace(/\+/g, " "));
  } catch {
    return raw;
  }
}

const companyOffices = getCompanyOffices();
const primaryPhoneHref = `tel:${company.phones[0].replaceAll(" ", "")}`;

export default async function Page({ params, searchParams }: PageProps) {
  const { locale: localeParam } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "cs";
  const messages = await getMessages(locale);
  const link = (href: string) => localizeHref(href, locale);
  const pageUrl = `${siteUrl}${link("/kontakt")}/`.replace(/([^:]\/)\/+/g, "$1");

  const paramsResolved = await searchParams;
  const serviceParam = queryParam(paramsResolved.service);
  const sectorParam = queryParam(paramsResolved.sector);
  const extraParam = queryParam(paramsResolved.services);
  const extraServices = extraParam
    ? extraParam.split(",").map((s) => s.trim()).filter(Boolean)
    : [];
  const initialServices = resolveContactServices(serviceParam, sectorParam, extraServices);
  const initialCategory = resolveInquiryCategory(initialServices as ContactServiceOption[]);
  const initialMessage = sectorParam
    ? sectorContactMessage(sectorParam)
    : !isValidContactService(serviceParam) && serviceParam
      ? sectorContactMessage(serviceParam)
      : "";

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
            initialCategory={initialCategory}
            initialServices={[...initialServices]}
            initialMessage={initialMessage}
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
