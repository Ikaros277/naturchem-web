import { inquiryRetentionMonths, legalController } from "@/lib/legal";

export function fillLegalTemplate(template: string, extra: Record<string, string> = {}): string {
  const vars: Record<string, string> = {
    name: legalController.name,
    street: legalController.seat.street,
    city: legalController.seat.city,
    postalCode: legalController.seat.postalCode,
    ico: legalController.ico,
    dic: legalController.dic,
    registry: legalController.registry,
    email: legalController.privacyEmail,
    web: legalController.web.replace("https://", ""),
    months: String(inquiryRetentionMonths),
    ...extra
  };

  return Object.entries(vars).reduce(
    (result, [key, value]) => result.replaceAll(`{${key}}`, value),
    template
  );
}
