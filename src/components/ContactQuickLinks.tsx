import { ServiceIcon } from "@/components/ServiceIcon";
import { company } from "@/lib/site";

/** Direct contact stays available before the inquiry form, including on mobile. */
export function ContactQuickLinks({ phoneLabel, emailLabel }: { phoneLabel: string; emailLabel: string }) {
  return (
    <div className="contact-quick-links">
      <a href={`tel:${company.phones[0].replaceAll(" ", "")}`} aria-label={`${phoneLabel}: ${company.phones[0]}`}>
        <ServiceIcon icon="contact-phone" variant="inline" size={20} />
        <span>{company.phones[0]}</span>
        <span className="contact-quick-arrow" aria-hidden="true">↗</span>
      </a>
      <a href={`mailto:${company.email}`} aria-label={`${emailLabel}: ${company.email}`}>
        <ServiceIcon icon="contact-mail" variant="inline" size={20} />
        <span>{company.email}</span>
        <span className="contact-quick-arrow" aria-hidden="true">↗</span>
      </a>
    </div>
  );
}
