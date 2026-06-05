import Link from "next/link";
import { ServiceIcon } from "@/components/ServiceIcon";
import { getRelatedServicesForArticle } from "@/lib/poradna-service-links";
import { getServiceIconKey } from "@/lib/service-icons";
import type { PoradnaTopic } from "@/lib/poradna-topic";

type Props = {
  title: string;
  slug: string;
  topic: PoradnaTopic;
};

export function ArticleRelatedServices({ title, slug, topic }: Props) {
  const services = getRelatedServicesForArticle(title, slug, topic).slice(0, 3);

  if (services.length === 0) return null;

  return (
    <section
      className="content-block article-related-services"
      aria-labelledby="article-services-heading"
    >
      <h2 id="article-services-heading">Související služby NATURCHEM</h2>
      <div className="article-related-grid">
        {services.map((service) => {
          const iconKey = getServiceIconKey(service.href);
          return (
            <Link key={service.href} href={service.href} className="card card-link article-related-card">
              <div className="article-related-card-head">
                <ServiceIcon icon={iconKey} size={22} variant="inline" />
                <h3>{service.title}</h3>
              </div>
              <span className="card-inline-link">Zobrazit službu</span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
