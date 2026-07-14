import type { ReactNode } from "react";

export function MobileNavSummaryRow({ children }: { children: ReactNode }) {
  return (
    <span className="nav-mobile-summary-inner">
      <span className="nav-mobile-summary-main">{children}</span>
      <span className="nav-mobile-summary-toggle" aria-hidden="true" />
    </span>
  );
}
