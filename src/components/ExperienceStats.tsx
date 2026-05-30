import { ServiceIcon } from "@/components/ServiceIcon";
import {
  companyStats,
  companyStatsIntro,
  companyStatsNote
} from "@/lib/company-stats";

type Props = {
  showNote?: boolean;
};

export function ExperienceStats({ showNote = true }: Props) {
  return (
    <div className="experience-stats">
      <p className="experience-stats-intro">{companyStatsIntro}</p>
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
      {showNote ? <p className="muted stats-note">{companyStatsNote}</p> : null}
    </div>
  );
}
