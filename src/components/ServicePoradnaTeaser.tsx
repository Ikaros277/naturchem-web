import Link from "next/link";
import { articlesNav } from "@/lib/navigation";
import { getPoradnaArticles } from "@/lib/poradna-articles";
import { getRelatedArticlesForService } from "@/lib/poradna-service-links";

type Props = {
  serviceSlug: string;
};

export async function ServicePoradnaTeaser({ serviceSlug }: Props) {
  const serviceHref = serviceSlug.startsWith("/") ? serviceSlug : `/sluzby/${serviceSlug}`;
  const articles = await getPoradnaArticles();
  const related = getRelatedArticlesForService(serviceHref, articles, 2);

  if (related.length === 0) return null;

  return (
    <section className="content-block service-poradna-teaser" aria-labelledby="service-poradna-heading">
      <h2 id="service-poradna-heading">Související odborné články</h2>
      <ul className="compact-list">
        {related.map((article) => (
          <li key={article.href}>
            <Link href={article.href}>{article.title}</Link>
            {article.excerpt ? <p className="muted">{article.excerpt}</p> : null}
          </li>
        ))}
      </ul>
      <p>
        <Link href={articlesNav.href} className="text-link">
          Všechny {articlesNav.label.toLowerCase()}
        </Link>
      </p>
    </section>
  );
}
