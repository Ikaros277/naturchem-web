import { getCompanyOffices, type CompanyOffice } from "@/lib/site";

export type CompanyOfficeMapPoint = CompanyOffice;

export function getCompanyOfficeMapPoints(): CompanyOfficeMapPoint[] {
  return getCompanyOffices();
}

export function officeAddressLine(office: CompanyOffice): string {
  return `${office.street}, ${office.postalCode} ${office.city}`;
}

export function officeMapsSearchUrl(office: CompanyOffice): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(officeAddressLine(office))}`;
}

/** Embed bez API klíče — Google Maps iframe (zdarma, neomezeně). */
export function officeMapsEmbedUrl(office: CompanyOfficeMapPoint): string {
  return `https://maps.google.com/maps?q=${office.lat},${office.lng}&hl=cs&z=15&output=embed`;
}
