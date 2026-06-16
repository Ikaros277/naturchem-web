import { company } from "@/lib/site";

const defaultWhatsAppMessage = "Dobrý den, mám dotaz ohledně služeb NATURCHEM.";

export function getWhatsAppPhoneE164(): string {
  const override = process.env.NEXT_PUBLIC_WHATSAPP_PHONE?.trim();
  const raw = override || company.whatsapp;
  return raw.replace(/\D/g, "");
}

export function isWhatsAppEnabled(): boolean {
  return process.env.NEXT_PUBLIC_WHATSAPP_ENABLED !== "false";
}

export function buildWhatsAppUrl(message = defaultWhatsAppMessage): string {
  return `https://wa.me/${getWhatsAppPhoneE164()}?text=${encodeURIComponent(message)}`;
}

const defaultTawkPropertyId = "6a31575716fcef1d436f9b31";
const defaultTawkWidgetId = "1jr8bqc1t";

export function getTawkConfig(): { propertyId: string; widgetId: string } | null {
  if (process.env.NEXT_PUBLIC_TAWK_ENABLED === "false") return null;

  const propertyId = process.env.NEXT_PUBLIC_TAWK_PROPERTY_ID?.trim() || defaultTawkPropertyId;
  const widgetId = process.env.NEXT_PUBLIC_TAWK_WIDGET_ID?.trim() || defaultTawkWidgetId;
  return { propertyId, widgetId };
}
