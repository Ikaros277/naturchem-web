import { ServiceIcon } from "@/components/ServiceIcon";
import {
  companyStats,
  companyStatsIntro,
  companyStatsNote
} from "@/lib/company-stats";

type Props = {
  showNote?: boolean;
  variant?: "default" | "compact";
};

export function ExperienceStats({ showNote = true, variant = "default" }: Props) {
  const compact = variant === "compact";

  return (
    <div className={compact ? "experience-stats experience-stats-compact" : "experience-stats"}>
      {!compact ? <p className="experience-stats-intro">{companyStatsIntro}</p> : null}
      <div className="stats-grid stats-highlight-metrics" aria-label="Přehled zkušeností">
        {companyStats.map((stat) => (
          <article key={stat.label} className="stat-card stat-card-prominent stat-card-with-icon">
            <ServiceIcon icon={stat.icon} variant="card" className="stat-card-icon" />
            <div className="stat-card-body">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          </article>
        ))}
      </div>
      {showNote && !compact ? <p className="muted stats-note">{companyStatsNote}</p> : null}
    </div>
  );
}
