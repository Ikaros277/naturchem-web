"use client";

import type { ReactNode } from "react";
import { AccordionExpandChevron } from "@/components/AccordionExpandChevron";

type Props = {
  id: string;
  className?: string;
  ariaLabel: string;
  icon?: ReactNode;
  visual?: ReactNode;
  /** inline = malý náhled v řádku; backdrop = vizuál přes celou dlaždici pod textem */
  visualLayout?: "inline" | "backdrop";
  title: string;
  countLabel?: string;
  intro?: string;
  summaryExtra?: ReactNode;
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
  visual,
  visualLayout = "inline",
  title,
  countLabel,
  intro,
  summaryExtra,
  expandClosed,
  expandOpen,
  open,
  onToggle,
  children
}: Props) {
  const useBackdrop = visualLayout === "backdrop" && Boolean(visual);

  const summaryText = (
    <div className="service-group-summary-text">
      <div className="service-group-summary-title-row">
        <h2>{title}</h2>
        {countLabel ? (
          <span className="service-group-count muted">{countLabel}</span>
        ) : null}
      </div>
      {summaryExtra}
      {intro ? <p className="muted service-group-intro">{intro}</p> : null}
    </div>
  );

  const expandControl = (
    <span className="service-group-expand" aria-hidden="true">
      <span className="service-group-expand-text">
        <span className="service-group-expand-when-closed">{expandClosed}</span>
        <span className="service-group-expand-when-open">{expandOpen}</span>
      </span>
      <span className="service-group-expand-icon">
        <AccordionExpandChevron />
      </span>
    </span>
  );

  return (
    <details
      id={id}
      className={className}
      open={open}
      onToggle={(event) => onToggle(event.currentTarget.open)}
    >
      <summary
        className={`service-group-summary${useBackdrop ? " service-group-summary--backdrop" : ""}`}
        aria-label={ariaLabel}
      >
        {useBackdrop ? (
          <>
            <div className="service-group-summary-backdrop" aria-hidden="true">
              {visual}
            </div>
            <div className="service-group-summary-foreground">
              {summaryText}
              {expandControl}
            </div>
          </>
        ) : (
          <>
            {visual ?? icon}
            {summaryText}
            {expandControl}
          </>
        )}
      </summary>
      {children}
    </details>
  );
}
