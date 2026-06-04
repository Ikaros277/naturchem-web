import { SemanticCard } from "@/components/SemanticCard";
import { ServiceIcon } from "@/components/ServiceIcon";
import { typicalScenarios } from "@/lib/typical-scenarios";

export function TypicalScenarios() {
  return (
    <div className="grid grid-2 typical-scenario-grid">
      {typicalScenarios.map((scenario) => (
        <SemanticCard
          key={scenario.title}
          href={scenario.learnMoreHref}
          className="typical-scenario-card"
          cta="Zobrazit řešení"
          aria-label={`Více o službě: ${scenario.title}`}
        >
          <div className="typical-scenario-card-head">
            <ServiceIcon href={scenario.learnMoreHref} />
            <h3>{scenario.title}</h3>
          </div>
          <p className="muted">{scenario.narrative}</p>
        </SemanticCard>
      ))}
    </div>
  );
}
