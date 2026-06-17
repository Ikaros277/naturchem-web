export const cookiesPageMetadata = {
  title: {
    absolute: "Cookie-Richtlinie (EU) | NATURCHEM"
  },
  description:
    "Informationen zu Cookies und ähnlichen Technologien auf der NATURCHEM-Website – Statistiken, Marketing und Einwilligungsmanagement."
} as const;

export const cookiesPageContent = {
  title: "Cookie-Richtlinie",
  lead: "Diese Richtlinie beschreibt die Verwendung von Cookies und ähnlichen Technologien auf der NATURCHEM-Website für Besucher aus der EU/EWR.",
  breadcrumbLabel: "Cookie-Richtlinie",
  lastUpdatedLabel: "Letzte Aktualisierung:",
  sections: {
    intro: {
      heading: "1. Einführung",
      webParagraph:
        "Die Website {web} (im Folgenden die „Website“) verwendet Cookies und verwandte Technologien (lokale Speicherung, Pixel, Skripte). Der Einfachheit halber bezeichnen wir sie in diesem Dokument zusammenfassend als „Cookies“.",
      controllerParagraph:
        "Der Controller ist {name}. Kontakt: {email}. Allgemeine Informationen zur Verarbeitung personenbezogener Daten finden Sie im",
      privacyLinkLabel: "Datenschutzrichtlinie"
    },
    whatAreCookies: {
      heading: "2. Was sind Cookies?",
      paragraph:
        "Ein Cookie ist eine kleine Datei, die in Ihrem Browser gespeichert wird. Damit kann das Gerät erkannt, Einstellungen gespeichert oder der Verkehr gemessen werden. Einige Cookies sind für das Funktionieren der Website unerlässlich; andere erfordern Ihre Zustimmung."
    },
    categories: {
      heading: "3. Cookie-Kategorien",
      essential: {
        subheading: "3.1 Wesentliche (technische)",
        paragraph:
          "Diese gewährleisten grundlegende Funktionen der Website und die Speicherung Ihrer Entscheidung im Cookie-Banner. Für diese Cookies ist keine Einwilligung erforderlich."
      },
      statistical: {
        subheading: "3.2 Statistisch",
        paragraph:
          "Diese helfen uns zu verstehen, wie die Website genutzt wird (besuchte Seiten, Interaktionen). Wir nutzen insbesondere Google Analytics 4. Wir nutzen diese erst nach Ihrer Einwilligung."
      },
      marketing: {
        subheading: "3.3 Marketing",
        paragraph:
          "Diese werden zur Messung von Werbekampagnen und Remarketing verwendet (z. B. Google Ads, Meta, LinkedIn). Wir aktivieren diese erst nach Ihrer Einwilligung."
      }
    },
    cookieList: {
      heading: "4. Liste der verwendeten Cookies und Technologien",
      tableHeaders: {
        name: "Name / Dienst",
        category: "Kategorie",
        purpose: "Zweck",
        expiry: "Aufbewahrungsfrist"
      },
      rows: [
        {
          name: "naturchem_cookie_consent (lokaler Speicher)",
          category: "Essentiell",
          purpose: "Speicherung Ihrer Cookie-Einwilligung",
          expiry: "Bis auf Widerruf/Löschung"
        },
        {
          name: "Google Analytics 4 (_ga, _ga_*)",
          category: "Statistisch",
          purpose: "Messung des Traffics und Verhaltens auf der Website",
          expiry: "Typischerweise bis zu 24 Monate (abhängig von den Google-Einstellungen)"
        },
        {
          name: "Google Ads (_gcl_*, Conversion-Linker)",
          category: "Marketing",
          purpose: "Messung von Werbung und Remarketing",
          expiry: "Laut Google-Einstellungen"
        },
        {
          name: "Metapixel (_fbp)",
          category: "Marketing",
          purpose: "Messung von Meta-Werbung und Remarketing",
          expiry: "Normalerweise bis zu 90 Tage"
        },
        {
          name: "LinkedIn Insight-Tag (li_*, AnalyticsSyncHistory)",
          category: "Marketing",
          purpose: "Messung von LinkedIn-Werbung und Remarketing",
          expiry: "Gemäß LinkedIn-Einstellungen"
        }
      ],
      note:
        "Marketing-Cookies werden nur dann auf der Website geladen, wenn Werbetools aktiv eingesetzt werden und Sie dem zustimmen. Der aktuelle Stand entspricht immer den Einstellungen im Cookie-Banner."
    },
    googleFonts: {
      heading: "5. Google-Schriftarten",
      paragraph:
        "Die Website lädt Schriftarten mithilfe der Next.js-Technologie (next/font) – Schriftarten sind Teil der Website und während eines normalen Besuchs werden keine Anfragen an das externe Google Fonts CDN gesendet."
    },
    consent: {
      heading: "6. Einwilligungs- und Einstellungsverwaltung",
      bannerParagraph:
        "Bei Ihrem ersten Besuch zeigen wir ein Cookie-Banner an. Sie können „Alle akzeptieren“, „Optional ablehnen“ wählen oder einzelne Kategorien anpassen. Optionale Cookies werden erst geladen, nachdem Ihre Auswahl gespeichert wurde.",
      manageParagraph:
        "Sie können Ihre Einwilligung jederzeit über die Schaltfläche „Cookies verwalten“ in der Fußzeile der Website ändern oder Cookies in Ihren Browsereinstellungen löschen.",
      manageButtonLabel: "Cookies verwalten",
      consentModeParagraph:
        "Für Google-Dienste (Analytics, Ads) verwenden wir den Google Consent Mode v2 – bis die Einwilligung erteilt wird, werden Tags in einem eingeschränkten Modus geladen, ohne dass Cookies gespeichert werden; Nach Ihrer Auswahl wird der Status entsprechend den ausgewählten Kategorien aktualisiert."
    },
    disableCookies: {
      heading: "7. So deaktivieren Sie Cookies in Ihrem Browser",
      paragraph:
        "Die meisten Browser ermöglichen das Blockieren oder Löschen von Cookies. Eine Anleitung finden Sie im Hilfebereich Ihres Browsers. Wenn Sie alle Cookies deaktivieren, funktionieren einige Funktionen der Website möglicherweise nicht ordnungsgemäß."
    },
    rights: {
      heading: "8. Ihre Rechte",
      paragraph:
        "Im Zusammenhang mit der Verarbeitung personenbezogener Daten durch Cookies stehen Ihnen die in der Datenschutzrichtlinie beschriebenen Rechte zu, einschließlich des Rechts, eine Beschwerde beim Amt für den Schutz personenbezogener Daten (www.uoou.cz) einzureichen.",
      privacyLinkLabel: "Datenschutzrichtlinie"
    },
    contact: {
      heading: "9. Kontakt",
      emailLabel: "E-Mail:",
      webLabel: "Webseite:"
    }
  }
} as const;
