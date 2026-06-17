import { ServiceIcon } from "@/components/ServiceIcon";
import type { CompanyStatsContent } from "@/lib/i18n/company-stats-i18n";

type Props = {
  showNote?: boolean;
  variant?: "default" | "compact";
  statsContent: CompanyStatsContent;
  experienceOverviewAria: string;
};

export function ExperienceStats({
  showNote = true,
  variant = "default",
  statsContent,
  experienceOverviewAria
}: Props) {
  const compact = variant === "compact";

  return (
    <div className={compact ? "experience-stats experience-stats-compact" : "experience-stats"}>
      {!compact ? <p className="experience-stats-intro">{statsContent.companyStatsIntro}</p> : null}
      <div className="stats-grid stats-highlight-metrics" aria-label={experienceOverviewAria}>
        {statsContent.companyStats.map((stat) => (
          <article key={stat.label} className="stat-card stat-card-prominent stat-card-with-icon">
            <ServiceIcon icon={stat.icon} variant="card" className="stat-card-icon" />
            <div className="stat-card-body">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          </article>
        ))}
      </div>
      {showNote && !compact ? <p className="muted stats-note">{statsContent.companyStatsNote}</p> : null}
    </div>
  );
}
