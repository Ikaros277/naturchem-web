import type { Locale } from "@/lib/i18n/locales";

export type Messages = typeof import("../../../messages/cs.json");

export async function getMessages(locale: Locale): Promise<Messages> {
  switch (locale) {
    case "en":
      return (await import("../../../messages/en.json")).default;
    default:
      return (await import("../../../messages/cs.json")).default;
  }
}
