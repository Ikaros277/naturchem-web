import { ArticleCardThumb } from "@/components/ArticleCardThumb";
import { formatArticleDate } from "@/lib/format-date";
import { getPoradnaTopicLabel } from "@/lib/i18n/poradna-topic-i18n";
import { getMessages } from "@/lib/i18n/get-messages";
import type { Locale } from "@/lib/i18n/locales";
import { LocaleLink } from "@/lib/i18n/locale-link";
import { getLatestPoradnaArticles } from "@/lib/poradna-articles";
import { CategoryBadge } from "@/components/CategoryBadge";
import { categoryFromPoradnaTopic } from "@/lib/service-categories";
import { heroThemeForArticle, resolveArticleTopic } from "@/lib/poradna-topic";

type Props = {
  locale: Locale;
};

/** Homepage — jeden hlavní článek a dva kompaktní odkazy pro rychlé skenování. */
export async function HomePoradnaStrip({ locale }: Props) {
  const messages = await getMessages(locale);
  const articles = await getLatestPoradnaArticles(3, locale);

  if (articles.length === 0) return null;

  const entries = articles.map((article) => {
    const articleRef = {
      slug: article.slug,
      title: article.title,
      topic: article.topic
    };
    const topic = resolveArticleTopic(articleRef);
    const serviceCategory = categoryFromPoradnaTopic(topic);

    return {
      article,
      href: article.href,
      theme: heroThemeForArticle(articleRef),
      displayDate: formatArticleDate(article.publishedAt, locale),
      topicLabel: getPoradnaTopicLabel(article.topic, locale),
      serviceCategory
    };
  });

  const [featured, ...secondary] = entries;

  return (
    <section
      className="home-section home-section-surface home-poradna-section page-below-fold"
      data-variant="cards"
      aria-labelledby="home-poradna-heading"
    >
      <div className="container">
        <header className="section-header home-poradna-header">
          <h2 id="home-poradna-heading">{messages.home.articlesTitle}</h2>
        </header>
        <div className="home-editorial-layout">
          <LocaleLink
            href={featured.href}
            className="home-editorial-feature"
            data-category={featured.serviceCategory ?? undefined}
          >
            <ArticleCardThumb theme={featured.theme} src={featured.article.heroImage} />
            <span className="home-editorial-feature-copy">
              <span className="home-editorial-meta">
                {featured.displayDate ? (
                  <time dateTime={featured.article.publishedAt}>{featured.displayDate}</time>
                ) : null}
                {featured.serviceCategory ? (
                  <CategoryBadge category={featured.serviceCategory} locale={locale} />
                ) : (
                  <span className="tag">{featured.topicLabel}</span>
                )}
              </span>
              <strong className="home-editorial-title">{featured.article.title}</strong>
              {featured.article.excerpt ? (
                <span className="home-editorial-excerpt">{featured.article.excerpt}</span>
              ) : null}
              <span className="home-editorial-cta">
                {messages.common.readMore} <span aria-hidden="true">→</span>
              </span>
            </span>
          </LocaleLink>

          <div className="home-editorial-list">
            {secondary.map((entry) => (
              <LocaleLink
                key={entry.href}
                href={entry.href}
                className="home-editorial-row"
                data-category={entry.serviceCategory ?? undefined}
              >
                <span className="home-editorial-meta">
                  {entry.displayDate ? (
                    <time dateTime={entry.article.publishedAt}>{entry.displayDate}</time>
                  ) : null}
                  {entry.serviceCategory ? (
                    <CategoryBadge category={entry.serviceCategory} locale={locale} />
                  ) : (
                    <span className="tag">{entry.topicLabel}</span>
                  )}
                </span>
                <strong>{entry.article.title}</strong>
                <span className="home-editorial-row-cta" aria-hidden="true">
                  →
                </span>
              </LocaleLink>
            ))}
          </div>
        </div>
        <p className="home-poradna-footer">
          <LocaleLink href="/poradna" className="button secondary home-poradna-all-link">
            {messages.common.allArticles}
          </LocaleLink>
        </p>
      </div>
    </section>
  );
}
