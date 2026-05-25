import {
  isValidContactService,
  relatedServiceToContact,
  type ContactServiceOption
} from "@/lib/contact-services";

export function contactUrl(service: ContactServiceOption | string): string {
  const value = relatedServiceToContact(service) ?? (isValidContactService(service) ? service : "Nejsem si jistý");
  return `/kontakt?service=${encodeURIComponent(value)}#poptavkovy-formular`;
}

/** Odkaz z oborové stránky — platné služby + název oboru do formuláře. */
export function sectorContactUrl(
  sectorTitle: string,
  relatedServiceTitles: string[]
): string {
  const services = relatedServiceTitles
    .map(relatedServiceToContact)
    .filter((s): s is ContactServiceOption => s !== null);

  const unique = [...new Set(services)];
  const primary = unique[0] ?? "Nejsem si jistý";

  const params = new URLSearchParams();
  params.set("service", primary);
  params.set("sector", sectorTitle);
  if (unique.length > 1) {
    params.set("services", unique.slice(1).join(","));
  }

  return `/kontakt?${params.toString()}#poptavkovy-formular`;
}
