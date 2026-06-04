import type { ReactNode } from "react";
import { ServiceIcon } from "@/components/ServiceIcon";
import type { ServiceIconKey } from "@/lib/service-icons";

type Props = {
  icon: ServiceIconKey;
  title: string;
  children: ReactNode;
  className?: string;
};

export function OverviewGridCell({ icon, title, children, className = "" }: Props) {
  return (
    <article className={["service-overview-cell", className].filter(Boolean).join(" ")}>
      <div className="service-decision-card-head">
        <ServiceIcon icon={icon} variant="inline" />
        <h2>{title}</h2>
      </div>
      {children}
    </article>
  );
}
