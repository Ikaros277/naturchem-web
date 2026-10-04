'use client';

import { useEffect, useMemo, useState } from 'react';
import { ArticleCardThumb } from '@/components/ArticleCardThumb';
import { IndexCard } from '@/components/IndexCard';
import { CategoryBadge } from "@/components/CategoryBadge";
import { ServiceIcon } from "@/components/ServiceIcon";
import { usePoradnaSearchIndex } from "@/hooks/usePoradnaSearchIndex";
import { usePoradnaCatalog } from "@/hooks/usePoradnaCatalog";
import { PoradnaPagination } from "@/components/PoradnaPagination";
import { PORADNA_PAGE_SIZE, poradnaPageCount, poradnaPaginationLabels } from "@/lib/poradna-pagination";
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
  total?: number;
  page?: number;
  pageCount?: number;
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

export function PoradnaFilterableList({ articles, locale: localeProp, topicLabels, total = articles.length, page = 1, pageCount = 1 }: Props) {
  const contextLocale = useLocale();
  const locale = localeProp ?? contextLocale;
  const poradna = useTranslations('poradna');
  const common = useTranslations('common');
  const { index: searchIndex, error: searchError, ensureLoaded } = usePoradnaSearchIndex(locale);
  const { articles: catalog, error: catalogError, ensureLoaded: loadCatalog } = usePoradnaCatalog(locale);
  const labels = poradnaPaginationLabels[locale];
  const [resultPage, setResultPage] = useState(1);
  const [activeTopics, setActiveTopics] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState('');

  const normalizedQuery = normalizeSearchQuery(searchQuery, locale);

  useEffect(() => {
    if (normalizedQuery) {
      void ensureLoaded();
      void loadCatalog();
    }
  }, [normalizedQuery, ensureLoaded, loadCatalog]);

  function toggleTopic(topic: string) {
    void loadCatalog();
    setResultPage(1);
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
    setResultPage(1);
  }

  function clearAllFilters() {
    setActiveTopics(new Set());
    setSearchQuery('');
    setResultPage(1);
  }

  const filtered = useMemo(() => {
    return (catalog ?? articles).filter(article => {
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
  }, [articles, catalog, activeTopics, normalizedQuery, locale, searchIndex]);

  const hasTopicFilters = activeTopics.size > 0;
  const hasSearch = normalizedQuery.length > 0;
  const hasAnyFilter = hasTopicFilters || hasSearch;
  const failed = hasAnyFilter && (catalogError || (hasSearch && searchError));
  const pending = hasAnyFilter && !failed && (!catalog || (hasSearch && !searchIndex));
  const visible = hasAnyFilter
    ? filtered.slice((resultPage - 1) * PORADNA_PAGE_SIZE, resultPage * PORADNA_PAGE_SIZE)
    : articles;
  function showResultPage(next: number) {
    setResultPage(next);
    document.getElementById("poradna-article-list")?.scrollIntoView({ behavior: "auto", block: "start" });
  }

  const countLabel = hasAnyFilter
    ? pending ? labels.loading : failed ? "" : poradna.countFiltered
        .replace('{filtered}', String(filtered.length))
        .replace('{total}', String(total))
    : poradna.countAll.replace('{total}', String(total));

  return (
    <>
      <label className="poradna-search">
        <span>{poradna.searchLabel}</span>
        <input
          type="search"
          value={searchQuery}
          onChange={event => { setSearchQuery(event.target.value); setResultPage(1); }}
          onFocus={() => { void ensureLoaded(); void loadCatalog(); }}
          placeholder={poradna.searchPlaceholder}
          aria-controls="poradna-article-list"
        />
      </label>

      <div className="poradna-filter-bar">
        <label className="poradna-topic-select">
          <span>{poradna.topicsAria}</span>
          <select
            aria-controls="poradna-article-list"
            value={activeTopics.size > 1 ? "__multiple" : [...activeTopics][0] ?? ""}
            onChange={event => {
              void loadCatalog();
              setResultPage(1);
              setActiveTopics(new Set(event.target.value ? [event.target.value] : []));
            }}
          >
            <option value="">{common.allTopics}</option>
            {activeTopics.size > 1 ? (
              <option value="__multiple" disabled>{[...activeTopics].map(topic => topicLabels[topic as PoradnaTopic]).join(", ")}</option>
            ) : null}
            {PORADNA_TOPICS.map(topic => <option key={topic} value={topic}>{topicLabels[topic]}</option>)}
          </select>
        </label>
        <div className="topic-filter-pills" role="group" aria-label={poradna.topicsAria}>
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
        </div>
        <p className="poradna-filter-count muted" aria-live="polite">{countLabel}</p>
      </div>

      <div id="poradna-article-list" className="article-list-grid" aria-busy={pending}>
        {pending ? <p className="poradna-empty-state" role="status">{labels.loading}</p> : failed ? (
          <p className="poradna-empty-state" role="status">{labels.error}{" "}
            <button type="button" className="text-link-button" onClick={() => { void loadCatalog(); if (hasSearch) void ensureLoaded(); }}>{labels.retry}</button>{" "}
            <button type="button" className="text-link-button" onClick={clearAllFilters}>{poradna.showAll}</button>
          </p>
        ) : visible.length === 0 ? (
          <p className="muted poradna-empty-state">
            {hasSearch
              ? `${poradna.emptySearch.replace('{query}', searchQuery.trim())} `
              : `${poradna.emptyTopic} `}
            <button type="button" className="text-link-button" onClick={clearAllFilters}>
              {poradna.showAll}
            </button>
          </p>
        ) : (
          visible.map(article => {
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
                headingLevel={2}
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
      {!pending && !failed ? <PoradnaPagination
        current={hasAnyFilter ? resultPage : page}
        count={hasAnyFilter ? poradnaPageCount(filtered.length) : pageCount}
        locale={locale}
        onPage={hasAnyFilter ? showResultPage : undefined}
      /> : null}
    </>
  );
}
