import type { Metadata } from "next";
import { ContactFormSection } from "@/components/ContactFormSection";
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

export const metadata: Metadata = {
  title: {
    absolute: "Kontakt a dotaz | NATURCHEM"
  },
  description:
    "Napište nám popis situace nebo přiložte podklady od úřadu. Ozveme se s návrhem dalšího postupu — formulář nebo přímý kontakt.",
  alternates: { canonical: `${siteUrl}/kontakt/` }
};

type PageProps = {
  searchParams: Promise<{
    service?: string | string[];
    sector?: string | string[];
    services?: string | string[];
  }>;
};

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

export default async function Page({ searchParams }: PageProps) {
  const params = await searchParams;
  const serviceParam = queryParam(params.service);
  const sectorParam = queryParam(params.sector);
  const extraParam = queryParam(params.services);
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
      { "@type": "ListItem", position: 1, name: "Úvod", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Kontakt", item: `${siteUrl}/kontakt/` }
    ]
  };

  return (
    <main className="section contact-page premium-page">
      <JsonLd data={breadcrumbData} />
      <PageHeroBand
        theme={getPageHeroTheme("/kontakt")}
        breadcrumbs={[{ name: "Úvod", href: "/" }, { name: "Kontakt" }]}
      >
        <header className="premium-page-hero contact-hero page-hero--photo">
          <div>
            <p className="eyebrow">Kontakt</p>
            <h1>Ozvěte se nám — rádi pomůžeme</h1>
            <p className="page-lead">
              Stačí poslat stručný popis nebo přílohu od úřadu. Posoudíme situaci a ozveme se s dalším
              postupem.
            </p>
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
          <h2>Kontaktní údaje</h2>
          <div className="contact-company-grid">
            <div className="contact-company-column">
              <h3 className="contact-column-head contact-column-head--panel">
                <ServiceIcon icon="contact-building" variant="inline" size={20} />
                Společnost
              </h3>
              <div className="contact-panel-body">
                <strong>{company.name}</strong>
                <span className="contact-info-meta">
                  IČO: {company.ico} · DIČ: {company.dic}
                </span>
              </div>
            </div>
            <div className="contact-company-column">
              <h3 className="contact-column-head contact-column-head--panel">
                <ServiceIcon icon="contact-user" variant="inline" size={20} />
                Kontakt
              </h3>
              <div className="contact-channel-list">
                <div className="contact-channel-block">
                  <span className="contact-info-label">Kontaktní osoba</span>
                  <strong>{company.person}</strong>
                </div>
                <div className="contact-channel-block">
                  <span className="contact-info-label">Telefon</span>
                  <p className="contact-channel-lines">
                    <a href={primaryPhoneHref}>{company.phones[0]}</a>
                    <a href={`tel:${company.phones[1].replaceAll(" ", "")}`}>{company.phones[1]}</a>
                  </p>
                </div>
                <div className="contact-channel-block">
                  <span className="contact-info-label">E-mail</span>
                  <a href={`mailto:${company.email}`}>{company.email}</a>
                </div>
              </div>
            </div>
            <div className="contact-company-column contact-company-column--offices">
              <h3 className="contact-column-head contact-column-head--panel">
                <ServiceIcon icon="contact-map-pin" variant="inline" size={20} />
                Provozovny
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
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
