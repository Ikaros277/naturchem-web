import { company } from "@/lib/site";

const defaultWhatsAppMessage = "Dobrý den, mám dotaz ohledně služeb NATURCHEM.";

export function getWhatsAppPhoneE164(): string {
  const override = process.env.NEXT_PUBLIC_WHATSAPP_PHONE?.trim();
  const raw = override || company.phones[0];
  return raw.replace(/\D/g, "");
}

export function isWhatsAppEnabled(): boolean {
  return process.env.NEXT_PUBLIC_WHATSAPP_ENABLED !== "false";
}

export function buildWhatsAppUrl(message = defaultWhatsAppMessage): string {
  return `https://wa.me/${getWhatsAppPhoneE164()}?text=${encodeURIComponent(message)}`;
}

export function getTawkConfig(): { propertyId: string; widgetId: string } | null {
  const propertyId = process.env.NEXT_PUBLIC_TAWK_PROPERTY_ID?.trim();
  if (!propertyId) return null;

  const widgetId = process.env.NEXT_PUBLIC_TAWK_WIDGET_ID?.trim() || "default";
  return { propertyId, widgetId };
}
