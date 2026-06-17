import Link from "next/link";
import { headers } from "next/headers";
import { getMessages } from "@/lib/i18n/get-messages";
import { isLocale, type Locale } from "@/lib/i18n/locales";
import { localizeHref } from "@/lib/i18n/navigation";
import { getPoradnaArticles } from "@/lib/poradna-articles";
import { getRelatedArticlesForService } from "@/lib/poradna-service-links";

type Props = {
  serviceSlug: string;
};

async function getRequestLocale(): Promise<Locale> {
  const headerStore = await headers();
  const locale = headerStore.get("x-locale");
  return locale && isLocale(locale) ? locale : "cs";
}

export async function ServicePoradnaTeaser({ serviceSlug }: Props) {
  const locale = await getRequestLocale();
  const messages = await getMessages(locale);
  const t = messages.poradna;
  const serviceHref = serviceSlug.startsWith("/") ? serviceSlug : `/sluzby/${serviceSlug}`;
  const articles = await getPoradnaArticles(locale);
  const related = getRelatedArticlesForService(serviceHref, articles, 2);

  if (related.length === 0) return null;

  const articlesHref = localizeHref("/poradna", locale);

  return (
    <section className="content-block service-poradna-teaser" aria-labelledby="service-poradna-heading">
      <h2 id="service-poradna-heading">{t.relatedArticlesTitle}</h2>
      <ul className="compact-list">
        {related.map((article) => (
          <li key={article.href}>
            <Link href={article.href}>{article.title}</Link>
            {article.excerpt ? <p className="muted">{article.excerpt}</p> : null}
          </li>
        ))}
      </ul>
      <p>
        <Link href={articlesHref} className="text-link">
          {t.allArticles}
        </Link>
      </p>
    </section>
  );
}
