import type { Messages } from "@/lib/i18n/get-messages";

/** All supported client namespaces; route-only text stays with its consumer. */
export type ClientMessages = Pick<
  Messages,
  | "language"
  | "footer"
  | "common"
  | "accordion"
  | "contact"
  | "contactForm"
  | "satisfactionSurvey"
  | "poradna"
  | "caseStudies"
  | "equipment"
  | "sectorsIndex"
  | "cookies"
>;

export type ClientMessageScope = Partial<ClientMessages>;

export type GlobalClientMessages = Pick<ClientMessages, "language" | "footer" | "common" | "accordion" | "cookies">;

/** Do not serialize form/catalog dictionaries into every public document. */
export function pickGlobalClientMessages(messages: Messages): GlobalClientMessages {
  return {
    language: messages.language,
    footer: messages.footer,
    common: messages.common,
    accordion: messages.accordion,
    cookies: messages.cookies
  };
}
