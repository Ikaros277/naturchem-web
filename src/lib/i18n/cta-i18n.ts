import { contactFormHref, contactUrl } from "@/lib/contact-url";
import { pageCtaPresets } from "@/lib/cta";
import type { Locale } from "@/lib/i18n/locales";
import type { PageCtaStripProps } from "@/lib/cta";

const cta = {
  cs: {
    globalCta: "Nezávazně poptat",
    contactSubmitCta: "Odeslat poptávku"
  },
  en: {
    globalCta: "Request a quote",
    contactSubmitCta: "Send inquiry"
  }
} as const;

export function getCtaCopy(locale: Locale) {
  return cta[locale];
}

export function getPageCtaPresets(locale: Locale): Record<string, PageCtaStripProps> {
  const { globalCta } = getCtaCopy(locale);

  if (locale === "en") {
    return {
      contact: {
        text: "Didn't find an answer? Send your question or documents directly.",
        primaryLabel: "Contact NATURCHEM",
        primaryHref: contactFormHref
      },
      uncertain: {
        text: "Send us a decision, notice or project description. We will propose the right scope of measurements, studies or documentation.",
        primaryLabel: "Send documents for review",
        primaryHref: contactUrl("Nejsem si jistý")
      },
      servicesIndex: {
        text: "Send an authority decision, operating rules or technology description. We will recommend the right scope of measurements or studies.",
        primaryLabel: globalCta,
        primaryHref: contactFormHref
      },
      accreditation: {
        text: "Not sure whether your case is covered by accreditation? Send a source or project description — we will respond.",
        primaryLabel: "Contact NATURCHEM",
        primaryHref: contactFormHref,
        secondaryLabel: "All services",
        secondaryHref: "/sluzby"
      },
      cooperation: {
        text: "Need advice on the scope of measurements, studies or documentation? Write to us — we will propose next steps.",
        primaryLabel: "Contact NATURCHEM",
        primaryHref: contactFormHref,
        secondaryLabel: "All services",
        secondaryHref: "/sluzby"
      },
      training: {
        text: "We tailor training content to the type of operation, scope of chemicals and employee groups.",
        primaryLabel: "Request training",
        primaryHref: contactUrl("Školení chemického zákona / chemické legislativy")
      },
      measurement: {
        text: "Send a technology description, authority requirement or available documents. We will determine the measurements, sampling or follow-up study needed.",
        primaryLabel: "Request measurements",
        primaryHref: contactUrl("Měření emisí"),
        secondaryLabel: "Accreditation & authorisations",
        secondaryHref: "/akreditace-autorizace-dokumenty"
      },
      reference: {
        text: "Have a similar operation or authority requirement? Send a notice, permit or brief description — we will propose scope and timing.",
        primaryLabel: "Send documents for review",
        primaryHref: contactUrl("Nejsem si jistý")
      },
      sectorIndex: {
        text: "Send a brief operation description, technology, authority requirement or project documentation. We will determine whether measurements, studies, expert reports, operating rules or other documents are needed.",
        primaryLabel: "Send documents for review",
        primaryHref: contactUrl("Nejsem si jistý")
      },
      sectorDetail: {
        text: "Send a brief operation description, technology or authority requirement. We will propose the right scope of measurements, studies or documentation.",
        primaryLabel: "Send documents for review",
        primaryHref: contactUrl("Nejsem si jistý"),
        secondaryLabel: "All industries",
        secondaryHref: "/provozy-a-technologie"
      },
      typicalOrders: {
        text: "Need measurements, a study or training? Send a brief operation description or authority notice.",
        primaryLabel: globalCta,
        primaryHref: contactFormHref
      },
      poradna: {
        text: "Send a decision, notice or brief description. Based on your documents we will propose next steps.",
        primaryLabel: "Contact NATURCHEM",
        primaryHref: contactFormHref
      },
      equipment: {
        text: "Need to verify we have equipment for your parameter or source? Write the measurement type or attach an authority notice.",
        primaryLabel: "Check equipment availability",
        primaryHref: contactUrl("Nejsem si jistý"),
        secondaryLabel: "Accreditation & lab scope",
        secondaryHref: "/akreditace-autorizace-dokumenty"
      }
    };
  }

  // Czech — use existing presets
  return pageCtaPresets;
}
