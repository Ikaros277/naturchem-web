import { ServiceIcon } from "@/components/ServiceIcon";
import { getMessages } from "@/lib/i18n/get-messages";
import { localizeHref } from "@/lib/i18n/navigation";
import type { Locale } from "@/lib/i18n/locales";
import { getRelatedServicesForArticle } from "@/lib/poradna-service-links";
import { getServiceIconKey } from "@/lib/service-icons";
import type { PoradnaTopic } from "@/lib/poradna-topic";
import { contactUrl } from "@/lib/contact-url";
import { getServiceDetailCopy } from "@/lib/i18n/service-detail-copy";
import { getServiceInquiryIntent } from "@/lib/service-commercial-intent";
import { getSiteServices } from "@/lib/i18n/content";
import styles from "./article-related-services.module.css";

type Props = {
  locale: Locale;
  title: string;
  slug: string;
  topic: PoradnaTopic;
  hasInlineInquiry?: boolean;
};

export async function ArticleRelatedServices({ locale, title, slug, topic, hasInlineInquiry = false }: Props) {
  const messages = await getMessages(locale);
  const services = getRelatedServicesForArticle(title, slug, topic, locale).slice(0, 3);
  const isIppc = services[0]?.href === "/sluzby/ippc-integrovana-povoleni";
  const intent = locale === "cs" && services[0] && !hasInlineInquiry ? getServiceInquiryIntent(services[0].href) : undefined;
  const catalog = intent ? await getSiteServices("cs") : [];
  const service = catalog.find(service => service.href === services[0]?.href);
  const inquiryMessage = locale === "cs" ? "Poptávám změnu integrovaného povolení. Zařízení a plánovaná změna: "
    : locale === "de" ? "Anfrage zur Änderung der integrierten Genehmigung. Anlage und geplante Änderung: "
    : "Inquiry about an integrated permit amendment. Installation and planned change: ";
  const inquiryHref = contactUrl("IPPC a integrovaná povolení").replace("#", `&message=${encodeURIComponent(inquiryMessage)}#`);
  const contextualInquiry = intent && service ? contactUrl(service.contactService).replace("#", `&message=${encodeURIComponent(intent.contactMessage)}#`) : undefined;

  if (services.length === 0) return null;

  return (
    <section
      className="content-block article-related-services"
      aria-labelledby="article-services-heading"
    >
      <h2 id="article-services-heading">{messages.poradna.relatedServicesTitle}</h2>
      <div className="article-related-grid">
        {services.map((service) => {
          const iconKey = getServiceIconKey(service.href);
          return (
            <a
              key={service.href}
              href={localizeHref(service.href, locale)}
              className="card card-link article-related-card"
            >
              <div className="article-related-card-head">
                <ServiceIcon icon={iconKey} size={22} variant="inline" />
                <h3>{service.title}</h3>
              </div>
              <span className="card-inline-link">{messages.common.viewService}</span>
            </a>
          );
        })}
      </div>
      {intent && contextualInquiry ? <div className={styles.inquiry} data-article-service-inquiry>
        <p>{intent.articlePrompt}</p>
        <a href={localizeHref(contextualInquiry, locale)}>{service?.contactCta} <span aria-hidden="true">→</span></a>
      </div> : isIppc && !hasInlineInquiry ? <p className="article-ippc-inquiry">
        {locale === "cs" ? "Ke změně IPPC nám pošlete aktuální povolení a popis plánované změny."
          : locale === "de" ? "Senden Sie uns für die IPPC-Änderung die aktuelle Genehmigung und eine Beschreibung der geplanten Änderung."
          : "For an IPPC amendment, send us the current permit and a description of the planned change."}
        {" "}<a href={localizeHref(inquiryHref, locale)} className="why-proof-link">{getServiceDetailCopy(locale).inquiry} →</a>
      </p> : null}
    </section>
  );
}
