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
  },
  de: {
    globalCta: "Unverbindlich anfragen",
    contactSubmitCta: "Anfrage senden"
  }
} as const;

export function getCtaCopy(locale: Locale) {
  return cta[locale];
}

export function getPageCtaPresets(locale: Locale): Record<string, PageCtaStripProps> {
  const { globalCta } = getCtaCopy(locale);

  if (locale === "en" || locale === "de") {
    const isDe = locale === "de";
    return {
      contact: {
        text: isDe
          ? "Keine Antwort gefunden? Senden Sie Ihre Frage oder Unterlagen direkt."
          : "Didn't find an answer? Send your question or documents directly.",
        primaryLabel: isDe ? "NATURCHEM kontaktieren" : "Contact NATURCHEM",
        primaryHref: contactFormHref
      },
      uncertain: {
        text: isDe
          ? "Senden Sie uns einen Bescheid, eine Aufforderung oder eine Projektbeschreibung. Wir schlagen den passenden Umfang von Messungen, Studien oder Dokumentation vor."
          : "Send us a decision, notice or project description. We will propose the right scope of measurements, studies or documentation.",
        primaryLabel: isDe ? "Unterlagen zur Prüfung senden" : "Send documents for review",
        primaryHref: contactUrl("Nejsem si jistý")
      },
      servicesIndex: {
        text: isDe
          ? "Senden Sie einen Behördenbescheid, Betriebsanweisungen oder eine Technologiebeschreibung. Wir empfehlen den passenden Umfang von Messungen oder Studien."
          : "Send an authority decision, operating rules or technology description. We will recommend the right scope of measurements or studies.",
        primaryLabel: globalCta,
        primaryHref: contactFormHref
      },
      accreditation: {
        text: isDe
          ? "Unsicher, ob Ihr Fall von der Akkreditierung abgedeckt ist? Senden Sie eine Quelle oder Projektbeschreibung — wir antworten."
          : "Not sure whether your case is covered by accreditation? Send a source or project description — we will respond.",
        primaryLabel: isDe ? "NATURCHEM kontaktieren" : "Contact NATURCHEM",
        primaryHref: contactFormHref,
        secondaryLabel: isDe ? "Alle Leistungen" : "All services",
        secondaryHref: "/sluzby"
      },
      cooperation: {
        text: isDe
          ? "Brauchen Sie Beratung zum Umfang von Messungen, Studien oder Dokumentation? Schreiben Sie uns — wir schlagen die nächsten Schritte vor."
          : "Need advice on the scope of measurements, studies or documentation? Write to us — we will propose next steps.",
        primaryLabel: isDe ? "NATURCHEM kontaktieren" : "Contact NATURCHEM",
        primaryHref: contactFormHref,
        secondaryLabel: isDe ? "Alle Leistungen" : "All services",
        secondaryHref: "/sluzby"
      },
      training: {
        text: isDe
          ? "Wir passen Schulungsinhalte an Betriebstyp, Chemikalienumfang und Mitarbeitergruppen an."
          : "We tailor training content to the type of operation, scope of chemicals and employee groups.",
        primaryLabel: isDe ? "Schulung anfragen" : "Request training",
        primaryHref: contactUrl("Školení chemického zákona / chemické legislativy")
      },
      measurement: {
        text: isDe
          ? "Senden Sie eine Technologiebeschreibung, Behördenanforderung oder vorhandene Unterlagen. Wir bestimmen die erforderlichen Messungen, Probenahmen oder Folgestudien."
          : "Send a technology description, authority requirement or available documents. We will determine the measurements, sampling or follow-up study needed.",
        primaryLabel: isDe ? "Messungen anfragen" : "Request measurements",
        primaryHref: contactUrl("Měření emisí"),
        secondaryLabel: isDe ? "Akkreditierung und Autorisierungen" : "Accreditation & authorisations",
        secondaryHref: "/akreditace-autorizace-dokumenty"
      },
      reference: {
        text: isDe
          ? "Haben Sie einen ähnlichen Betrieb oder eine Behördenanforderung? Senden Sie eine Aufforderung, Genehmigung oder kurze Beschreibung — wir schlagen Umfang und Termin vor."
          : "Have a similar operation or authority requirement? Send a notice, permit or brief description — we will propose scope and timing.",
        primaryLabel: isDe ? "Unterlagen zur Prüfung senden" : "Send documents for review",
        primaryHref: contactUrl("Nejsem si jistý")
      },
      sectorIndex: {
        text: isDe
          ? "Senden Sie eine kurze Betriebsbeschreibung, Technologie, Behördenanforderung oder Projektdokumentation. Wir klären, ob Messungen, Studien, Gutachten, Betriebsanweisungen oder andere Unterlagen erforderlich sind."
          : "Send a brief operation description, technology, authority requirement or project documentation. We will determine whether measurements, studies, expert reports, operating rules or other documents are needed.",
        primaryLabel: isDe ? "Unterlagen zur Prüfung senden" : "Send documents for review",
        primaryHref: contactUrl("Nejsem si jistý")
      },
      sectorDetail: {
        text: isDe
          ? "Senden Sie eine kurze Betriebsbeschreibung, Technologie oder Behördenanforderung. Wir schlagen den passenden Umfang von Messungen, Studien oder Dokumentation vor."
          : "Send a brief operation description, technology or authority requirement. We will propose the right scope of measurements, studies or documentation.",
        primaryLabel: isDe ? "Unterlagen zur Prüfung senden" : "Send documents for review",
        primaryHref: contactUrl("Nejsem si jistý"),
        secondaryLabel: isDe ? "Alle Betriebe" : "All industries",
        secondaryHref: "/provozy-a-technologie"
      },
      typicalOrders: {
        text: isDe
          ? "Benötigen Sie Messungen, eine Studie oder Schulung? Senden Sie eine kurze Betriebsbeschreibung oder eine Behördenaufforderung."
          : "Need measurements, a study or training? Send a brief operation description or authority notice.",
        primaryLabel: globalCta,
        primaryHref: contactFormHref
      },
      poradna: {
        text: isDe
          ? "Senden Sie einen Bescheid, eine Aufforderung oder eine kurze Beschreibung. Auf Basis Ihrer Unterlagen schlagen wir die nächsten Schritte vor."
          : "Send a decision, notice or brief description. Based on your documents we will propose next steps.",
        primaryLabel: isDe ? "NATURCHEM kontaktieren" : "Contact NATURCHEM",
        primaryHref: contactFormHref
      },
      equipment: {
        text: isDe
          ? "Möchten Sie prüfen, ob wir Geräte für Ihren Parameter oder Ihre Quelle haben? Nennen Sie die Messart oder fügen Sie eine Behördenaufforderung bei."
          : "Need to verify we have equipment for your parameter or source? Write the measurement type or attach an authority notice.",
        primaryLabel: isDe ? "Geräteverfügbarkeit prüfen" : "Check equipment availability",
        primaryHref: contactUrl("Nejsem si jistý"),
        secondaryLabel: isDe ? "Akkreditierung und Laborumfang" : "Accreditation & lab scope",
        secondaryHref: "/akreditace-autorizace-dokumenty"
      },
      sales: {
        text: isDe
          ? "Interesse an einem Gerät oder Zubehör aus unserem Angebot? Nennen Sie Gerätetyp, Parameter oder senden Sie eine Anfrage — wir erstellen ein Angebot."
          : "Interested in an instrument or accessory from our range? Send the product type, parameters or your inquiry — we will prepare a quote.",
        primaryLabel: isDe ? "Gerät anfragen" : "Request a quote",
        primaryHref: contactUrl(isDe ? "Gerätevertrieb / Angebotsanfrage" : "Instrument sales inquiry"),
        secondaryLabel: isDe ? "Markenübersicht" : "Brand overview",
        secondaryHref: "/prodej"
      }
    };
  }

  // Czech — use existing presets
  return pageCtaPresets;
}
