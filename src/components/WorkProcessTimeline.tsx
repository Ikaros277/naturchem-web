import { ServiceIcon } from "@/components/ServiceIcon";
import { getAboutWorkStepIconKey } from "@/lib/service-icons";
import type { WorkProcessStep } from "@/lib/work-process";

type Props = {
  steps: readonly WorkProcessStep[];
  processAria?: string;
};

export function WorkProcessTimeline({ steps, processAria = "Postup spolupráce" }: Props) {
  const lastIndex = steps.length - 1;

  return (
    <div className="work-process-flow">
      <div className="work-process-rail" aria-hidden="true">
        {steps.map((step, index) => (
          <div key={step.title} className="work-process-rail-segment">
            <span className="work-process-rail-node">{index + 1}</span>
            <span
              className={
                index < lastIndex
                  ? "work-process-rail-line"
                  : "work-process-rail-line work-process-rail-line--end"
              }
            />
          </div>
        ))}
      </div>
      <ol className="work-process-columns" aria-label={processAria}>
        {steps.map((step, index) => (
          <li key={step.title} className="work-process-step">
            <div className="work-process-step-head">
              <ServiceIcon
                icon={getAboutWorkStepIconKey(index)}
                variant="inline"
                className="work-process-step-icon"
              />
              <h3>{step.title}</h3>
            </div>
            <p className="muted work-process-step-text">{step.text}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
