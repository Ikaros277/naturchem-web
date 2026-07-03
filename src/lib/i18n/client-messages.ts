import type { Messages } from "@/lib/i18n/get-messages";

/** Message namespaces passed to client components via LocaleProvider. */
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

export function pickClientMessages(messages: Messages): ClientMessages {
  return {
    language: messages.language,
    footer: messages.footer,
    common: messages.common,
    accordion: messages.accordion,
    contact: messages.contact,
    contactForm: messages.contactForm,
    satisfactionSurvey: messages.satisfactionSurvey,
    poradna: messages.poradna,
    caseStudies: messages.caseStudies,
    equipment: messages.equipment,
    sectorsIndex: messages.sectorsIndex,
    cookies: messages.cookies
  };
}
