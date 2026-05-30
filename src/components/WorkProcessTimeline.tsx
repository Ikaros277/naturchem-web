import { ServiceIcon } from "@/components/ServiceIcon";
import { getAboutWorkStepIconKey } from "@/lib/service-icons";
import { workProcessSteps } from "@/lib/work-process";

export function WorkProcessTimeline() {
  return (
    <ol className="work-process-steps" aria-label="Postup spolupráce">
      {workProcessSteps.map((step, index) => (
        <li key={step.title} className="work-process-step">
          <div className="work-process-step-marker" aria-hidden="true">
            <span className="work-process-step-number">{index + 1}</span>
            <ServiceIcon icon={getAboutWorkStepIconKey(index)} variant="card" className="work-process-step-icon" />
          </div>
          <div className="work-process-step-body">
            <h3>{step.title}</h3>
            <p className="muted">{step.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
