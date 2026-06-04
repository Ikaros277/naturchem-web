import { ServiceIcon } from "@/components/ServiceIcon";
import { getAboutWorkStepIconKey } from "@/lib/service-icons";
import { workProcessSteps } from "@/lib/work-process";

export function WorkProcessTimeline() {
  const lastIndex = workProcessSteps.length - 1;

  return (
    <div className="work-process-flow">
      <div className="work-process-rail" aria-hidden="true">
        {workProcessSteps.map((step, index) => (
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
      <ol className="work-process-columns" aria-label="Postup spolupráce">
        {workProcessSteps.map((step, index) => (
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
