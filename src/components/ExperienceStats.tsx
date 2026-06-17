"use client";

import { ServiceIcon } from "@/components/ServiceIcon";
import { getCompanyStatsContent } from "@/lib/i18n/content";
import { useLocale, useTranslations } from "@/lib/i18n/locale-context";
import type { Locale } from "@/lib/i18n/locales";

type StatsContent = ReturnType<typeof getCompanyStatsContent>;

type Props = {
  showNote?: boolean;
  variant?: "default" | "compact";
  statsContent?: StatsContent;
};

function resolveStatsContent(locale: Locale, statsContent?: StatsContent): StatsContent {
  return statsContent ?? getCompanyStatsContent(locale);
}

export function ExperienceStats({ showNote = true, variant = "default", statsContent }: Props) {
  const locale = useLocale();
  const common = useTranslations("common");
  const content = resolveStatsContent(locale, statsContent);
  const compact = variant === "compact";

  return (
    <div className={compact ? "experience-stats experience-stats-compact" : "experience-stats"}>
      {!compact ? <p className="experience-stats-intro">{content.companyStatsIntro}</p> : null}
      <div className="stats-grid stats-highlight-metrics" aria-label={common.experienceOverview}>
        {content.companyStats.map((stat) => (
          <article key={stat.label} className="stat-card stat-card-prominent stat-card-with-icon">
            <ServiceIcon icon={stat.icon} variant="card" className="stat-card-icon" />
            <div className="stat-card-body">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          </article>
        ))}
      </div>
      {showNote && !compact ? <p className="muted stats-note">{content.companyStatsNote}</p> : null}
    </div>
  );
}
