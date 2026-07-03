import { ArticleCardThumb } from "@/components/ArticleCardThumb";
import { IndexCard } from "@/components/IndexCard";
import { ServiceIcon } from "@/components/ServiceIcon";
import { formatArticleDate } from "@/lib/format-date";
import { getPoradnaTopicLabel } from "@/lib/i18n/poradna-topic-i18n";
import { getMessages } from "@/lib/i18n/get-messages";
import { localizeHref } from "@/lib/i18n/navigation";
import type { Locale } from "@/lib/i18n/locales";
import { LocaleLink } from "@/lib/i18n/locale-link";
import { getLatestPoradnaArticles } from "@/lib/poradna-articles";
import { CategoryBadge } from "@/components/CategoryBadge";
import { categoryFromPoradnaTopic } from "@/lib/service-categories";
import { heroThemeForArticle, poradnaTopicIconKey, resolveArticleTopic } from "@/lib/poradna-topic";

type Props = {
  locale: Locale;
};

/** Homepage — 3 latest articles in a grid with thumbnails (same pattern as /poradna). */
export async function HomePoradnaStrip({ locale }: Props) {
  const messages = await getMessages(locale);
  const articles = await getLatestPoradnaArticles(3, locale);

  if (articles.length === 0) return null;

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
        <div className="article-list-grid home-poradna-grid">
          {articles.map((article) => {
            const articleRef = {
              slug: article.slug,
              title: article.title,
              topic: article.topic
            };
            const topic = resolveArticleTopic(articleRef);
            const iconKey = poradnaTopicIconKey(articleRef);
            const displayDate = formatArticleDate(article.publishedAt, locale);
            const topicLabel = getPoradnaTopicLabel(article.topic, locale);
            const serviceCategory = categoryFromPoradnaTopic(topic);

            return (
              <IndexCard
                key={article.href}
                href={localizeHref(article.href, locale)}
                title={article.title}
                className="article-list-card article-card article-card--with-thumb article-card--mobile-row"
                cta={messages.common.readMore}
                serviceCategory={serviceCategory}
                icon={<ServiceIcon icon={iconKey} size={22} variant="inline" />}
                meta={
                  <>
                    <ArticleCardThumb
                      theme={heroThemeForArticle(articleRef)}
                      src={article.heroImage}
                    />
                    <div className="article-card-meta">
                      {displayDate ? (
                        <time className="article-card-date muted" dateTime={article.publishedAt}>
                          {displayDate}
                        </time>
                      ) : (
                        <span />
                      )}
                      {serviceCategory ? (
                        <CategoryBadge category={serviceCategory} locale={locale} />
                      ) : (
                        <span className="tag">{topicLabel}</span>
                      )}
                    </div>
                  </>
                }
              >
                {article.excerpt ? (
                  <p className="muted article-card-excerpt">{article.excerpt}</p>
                ) : null}
              </IndexCard>
            );
          })}
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
