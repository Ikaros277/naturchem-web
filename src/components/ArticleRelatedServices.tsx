import Link from "next/link";
import { getRelatedServicesForArticle } from "@/lib/poradna-service-links";

type Props = {
  title: string;
  slug: string;
};

export function ArticleRelatedServices({ title, slug }: Props) {
  const services = getRelatedServicesForArticle(title, slug);

  if (services.length === 0) return null;

  return (
    <section className="content-block article-related-services" aria-labelledby="article-services-heading">
      <h2 id="article-services-heading">Související služby NATURCHEM</h2>
      <ul className="compact-list">
        {services.map((service) => (
          <li key={service.href}>
            <Link href={service.href}>{service.title}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
