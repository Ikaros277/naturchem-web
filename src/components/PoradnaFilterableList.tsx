'use client';

import { useEffect, useMemo, useState } from 'react';
import { ArticleCardThumb } from '@/components/ArticleCardThumb';
import { IndexCard } from '@/components/IndexCard';
import { CategoryBadge } from "@/components/CategoryBadge";
import { ServiceIcon } from "@/components/ServiceIcon";
import { usePoradnaSearchIndex } from "@/hooks/usePoradnaSearchIndex";
import { categoryFromPoradnaTopic } from "@/lib/service-categories";
import type { PoradnaTopic } from '@/lib/poradna-topic';
import { useLocale, useTranslations } from '@/lib/i18n/locale-context';
import type { Locale } from '@/lib/i18n/locales';
import { localeTag } from '@/lib/i18n/locale-pick';
import { localizeHref } from '@/lib/i18n/navigation';
import {
  heroThemeForArticle,
  PORADNA_TOPICS,
  poradnaTopicIconKey,
  resolveArticleTopic
} from '@/lib/poradna-topic';
import type { PoradnaArticleListing } from '@/lib/poradna-articles';

export type PoradnaArticleDisplay = PoradnaArticleListing & { displayDate: string | null };

type Props = {
  articles: PoradnaArticleDisplay[];
  locale?: Locale;
  topicLabels: Record<PoradnaTopic, string>;
};

function normalizeSearchQuery(query: string, locale: Locale): string {
  return query.trim().toLocaleLowerCase(localeTag(locale));
}

function articleMatchesQuery(
  article: PoradnaArticleDisplay,
  query: string,
  locale: Locale,
  searchIndex: Map<string, string> | null
): boolean {
  if (!query) return true;
  const indexed = searchIndex?.get(article.slug);
  if (indexed) return indexed.includes(query);
  return [article.title, article.excerpt]
    .join(" ")
    .toLocaleLowerCase(localeTag(locale))
    .includes(query);
}

export function PoradnaFilterableList({ articles, locale: localeProp, topicLabels }: Props) {
  const contextLocale = useLocale();
  const locale = localeProp ?? contextLocale;
  const poradna = useTranslations('poradna');
  const common = useTranslations('common');
  const { index: searchIndex, ensureLoaded } = usePoradnaSearchIndex(locale);
  const [activeTopics, setActiveTopics] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState('');

  const normalizedQuery = normalizeSearchQuery(searchQuery, locale);

  useEffect(() => {
    if (normalizedQuery) {
      void ensureLoaded();
    }
  }, [normalizedQuery, ensureLoaded]);

  function toggleTopic(topic: string) {
    setActiveTopics(prev => {
      const next = new Set(prev);
      if (next.has(topic)) {
        next.delete(topic);
      } else {
        next.add(topic);
      }
      return next;
    });
  }

  function clearTopicFilters() {
    setActiveTopics(new Set());
  }

  function clearAllFilters() {
    setActiveTopics(new Set());
    setSearchQuery('');
  }

  const filtered = useMemo(() => {
    return articles.filter(article => {
      const matchesTopic =
        activeTopics.size === 0 || activeTopics.has(article.topic);
      const matchesSearch = articleMatchesQuery(
        article,
        normalizedQuery,
        locale,
        searchIndex
      );
      return matchesTopic && matchesSearch;
    });
  }, [articles, activeTopics, normalizedQuery, locale, searchIndex]);

  const hasTopicFilters = activeTopics.size > 0;
  const hasSearch = normalizedQuery.length > 0;
  const hasAnyFilter = hasTopicFilters || hasSearch;

  const countLabel = hasAnyFilter
    ? poradna.countFiltered
        .replace('{filtered}', String(filtered.length))
        .replace('{total}', String(articles.length))
    : poradna.countAll.replace('{total}', String(articles.length));

  return (
    <>
      <label className="poradna-search">
        <span>{poradna.searchLabel}</span>
        <input
          type="search"
          value={searchQuery}
          onChange={event => setSearchQuery(event.target.value)}
          onFocus={() => void ensureLoaded()}
          placeholder={poradna.searchPlaceholder}
          aria-controls="poradna-article-list"
        />
      </label>

      <div className="poradna-filter-bar">
        <nav className="topic-filter-pills" role="list" aria-label={poradna.topicsAria}>
          <button
            type="button"
            className="topic-pill"
            aria-pressed={!hasTopicFilters}
            onClick={clearTopicFilters}
          >
            {common.allTopics}
          </button>
          {PORADNA_TOPICS.map(topic => (
            <button
              key={topic}
              type="button"
              className="topic-pill"
              aria-pressed={activeTopics.has(topic)}
              onClick={() => toggleTopic(topic)}
            >
              {topicLabels[topic]}
            </button>
          ))}
        </nav>
        <p className="poradna-filter-count muted">{countLabel}</p>
      </div>

      <div id="poradna-article-list" className="article-list-grid">
        {filtered.length === 0 ? (
          <p className="muted poradna-empty-state">
            {hasSearch
              ? `${poradna.emptySearch.replace('{query}', searchQuery.trim())} `
              : `${poradna.emptyTopic} `}
            <button type="button" className="text-link-button" onClick={clearAllFilters}>
              {poradna.showAll}
            </button>
          </p>
        ) : (
          filtered.map(article => {
            const articleRef = { slug: article.slug, title: article.title, topic: article.topic };
            const topic = resolveArticleTopic(articleRef);
            const iconKey = poradnaTopicIconKey(articleRef);
            const topicLabel = topicLabels[topic] ?? topicLabels[article.topic];
            const serviceCategory = categoryFromPoradnaTopic(topic);
            return (
              <IndexCard
                key={article.href}
                href={localizeHref(article.href, locale)}
                title={article.title}
                className="article-list-card article-card article-card--with-thumb article-card--mobile-row"
                cta={common.readMore}
                serviceCategory={serviceCategory}
                icon={<ServiceIcon icon={iconKey} size={22} variant="inline" />}
                meta={
                  <>
                    <ArticleCardThumb
                      theme={heroThemeForArticle(articleRef)}
                      src={article.heroImage}
                    />
                    <div className="article-card-meta">
                      {article.displayDate ? (
                        <time className="article-card-date muted" dateTime={article.publishedAt}>
                          {article.displayDate}
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
                {article.excerpt ? <p className="muted article-card-excerpt">{article.excerpt}</p> : null}
              </IndexCard>
            );
          })
        )}
      </div>
    </>
  );
}
