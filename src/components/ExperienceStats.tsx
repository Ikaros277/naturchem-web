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
    <>
      <p>{companyStatsIntro}</p>
      <div className="stats-grid stats-highlight-metrics" aria-label="Přehled zkušeností">
        {companyStats.map((stat) => (
          <article key={stat.label} className="stat-card stat-card-prominent">
            <span className="stat-value">{stat.value}</span>
            <span className="stat-label">{stat.label}</span>
          </article>
        ))}
      </div>
      {showNote ? <p className="muted stats-note">{companyStatsNote}</p> : null}
    </>
  );
}
