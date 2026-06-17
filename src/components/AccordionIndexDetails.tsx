"use client";

import type { ReactNode } from "react";
import { AccordionExpandChevron } from "@/components/AccordionExpandChevron";

type Props = {
  id: string;
  className?: string;
  ariaLabel: string;
  icon: ReactNode;
  title: string;
  countLabel: string;
  intro?: string;
  expandClosed: string;
  expandOpen: string;
  open: boolean;
  onToggle: (open: boolean) => void;
  children: ReactNode;
};

export function AccordionIndexDetails({
  id,
  className = "card service-group-details",
  ariaLabel,
  icon,
  title,
  countLabel,
  intro,
  expandClosed,
  expandOpen,
  open,
  onToggle,
  children
}: Props) {
  return (
    <details
      id={id}
      className={className}
      open={open}
      onToggle={(event) => onToggle(event.currentTarget.open)}
    >
      <summary className="service-group-summary" aria-label={ariaLabel}>
        {icon}
        <div className="service-group-summary-text">
          <div className="service-group-summary-title-row">
            <h2>{title}</h2>
            <span className="service-group-count muted">{countLabel}</span>
          </div>
          {intro ? <p className="muted service-group-intro">{intro}</p> : null}
        </div>
        <span className="service-group-expand" aria-hidden="true">
          <span className="service-group-expand-text">
            <span className="service-group-expand-when-closed">{expandClosed}</span>
            <span className="service-group-expand-when-open">{expandOpen}</span>
          </span>
          <span className="service-group-expand-icon">
            <AccordionExpandChevron />
          </span>
        </span>
      </summary>
      {children}
    </details>
  );
}
