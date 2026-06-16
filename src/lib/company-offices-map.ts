import { getCompanyOffices, type CompanyOffice } from "@/lib/site";

export type CompanyOfficeMapPoint = CompanyOffice;

export function getCompanyOfficeMapPoints(): CompanyOfficeMapPoint[] {
  return getCompanyOffices();
}

export function officeMapsSearchUrl(office: CompanyOffice): string {
  const query = `${office.street}, ${office.postalCode} ${office.city}`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export function officeMapsEmbedUrl(office: CompanyOffice): string {
  const query = `${office.street}, ${office.postalCode} ${office.city}, Czechia`;
  return `https://maps.google.com/maps?q=${encodeURIComponent(query)}&z=15&output=embed`;
}
