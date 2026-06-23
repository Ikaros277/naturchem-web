import Link from "next/link";
import { getPoradnaArticles, getRelatedArticlesForArticle } from "@/lib/poradna-articles";
import { getMessages } from "@/lib/i18n/get-messages";
import type { Locale } from "@/lib/i18n/locales";
import { localizeHref } from "@/lib/i18n/navigation";
import type { PoradnaTopic } from "@/lib/poradna-topic";

type Props = {
  locale: Locale;
  slug: string;
  topic: PoradnaTopic;
  limit?: number;
};

export async function ArticleRelatedArticles({ locale, slug, topic, limit = 3 }: Props) {
  const messages = await getMessages(locale);
  const articles = await getPoradnaArticles(locale);
  const related = getRelatedArticlesForArticle(slug, topic, articles, limit);

  if (related.length === 0) return null;

  const articlesHref = localizeHref("/poradna", locale);

  return (
    <section className="content-block article-related-articles" aria-labelledby="article-related-heading">
      <h2 id="article-related-heading">{messages.poradna.relatedArticlesTitle}</h2>
      <ul className="article-related-articles-list">
        {related.map((item) => (
          <li key={item.slug} className="article-related-articles-item">
            <Link href={item.href} className="article-related-articles-link">
              {item.title}
            </Link>
            {item.excerpt ? <p className="muted">{item.excerpt}</p> : null}
          </li>
        ))}
      </ul>
      <p>
        <Link href={articlesHref} className="text-link">
          {messages.poradna.allArticles}
        </Link>
      </p>
    </section>
  );
}
