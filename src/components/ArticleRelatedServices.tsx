import Link from "next/link";
import { ServiceIcon } from "@/components/ServiceIcon";
import { getMessages } from "@/lib/i18n/get-messages";
import { localizeHref } from "@/lib/i18n/navigation";
import type { Locale } from "@/lib/i18n/locales";
import { getRelatedServicesForArticle } from "@/lib/poradna-service-links";
import { getServiceIconKey } from "@/lib/service-icons";
import type { PoradnaTopic } from "@/lib/poradna-topic";

type Props = {
  locale: Locale;
  title: string;
  slug: string;
  topic: PoradnaTopic;
};

export async function ArticleRelatedServices({ locale, title, slug, topic }: Props) {
  const messages = await getMessages(locale);
  const services = getRelatedServicesForArticle(title, slug, topic, locale).slice(0, 3);

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
            <Link
              key={service.href}
              href={localizeHref(service.href, locale)}
              className="card card-link article-related-card"
            >
              <div className="article-related-card-head">
                <ServiceIcon icon={iconKey} size={22} variant="inline" />
                <h3>{service.title}</h3>
              </div>
              <span className="card-inline-link">{messages.common.viewService}</span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
