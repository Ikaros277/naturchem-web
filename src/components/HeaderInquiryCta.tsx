import { LocaleLink } from "@/lib/i18n/locale-link";
import { contactFormHref } from "@/lib/contact-url";
import type { HeaderLabels } from "@/lib/header-nav-data";
import styles from "./header-inquiry-cta.module.css";

export function HeaderInquiryCta({ labels, className, onClick }: {
  labels: Pick<HeaderLabels, "cta" | "responseTime">;
  className: string;
  onClick?: () => void;
}) {
  return (
    <LocaleLink className={className} href={contactFormHref} onClick={onClick}>
      <span className={styles.copy}>
        <span>{labels.cta}</span>{" "}
        <span className={styles.response} data-header-inquiry-response>{labels.responseTime}</span>
      </span>
    </LocaleLink>
  );
}
