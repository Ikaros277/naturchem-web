export const privacyPageMetadata = {
  title: {
    absolute: "Datenschutzrichtlinie | NATURCHEM"
  },
  description:
    "Informationen zur Verarbeitung personenbezogener Daten auf der NATURCHEM-Website, im Kontaktformular und im Zusammenhang mit Online-Marketing."
} as const;

export const privacyPageContent = {
  title: "Datenschutzrichtlinie",
  lead: "Informationen für Website-Besucher und Personen, die online mit uns Kontakt aufnehmen. Dieses Dokument entspricht der DSGVO und dem Gesetz Nr. 110/2019 Slg. über die Verarbeitung personenbezogener Daten.",
  breadcrumbLabel: "Datenschutzrichtlinie",
  effectiveDateLabel: "Gültig und wirksam ab:",
  sections: {
    controller: {
      heading: "1. Wer verarbeitet Ihre Daten?",
      controllerIntro:
        "Der Verantwortliche für personenbezogene Daten ist {Name} mit Sitz in {Straße}, {Postleitzahl} {Stadt}, Firmen-ID {ico}, Umsatzsteuer-Identifikationsnummer {dic}, eingetragen im von {registry} geführten Handelsregister (im Folgenden der „Verantwortliche“ oder „NATURCHEM“).",
      statutoryBodyLabel: "Gesetzliche Körperschaft:",
      privacyContactLabel: "Kontakt für datenschutzrechtliche Fragen:"
    },
    definitions: {
      heading: "2. Was sind personenbezogene Daten und was bedeutet Verarbeitung?",
      personalDataParagraph:
        "Personenbezogene Daten sind alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen. Unter Verarbeitung versteht man jeden Vorgang, der mit personenbezogenen Daten durchgeführt wird – Erhebung, Speicherung, Nutzung, Offenlegung, Löschung usw.",
      scopeParagraph:
        "Diese Richtlinie gilt für die Verarbeitung über die Website {web} und zugehörige Online-Dienste. Interne Angelegenheiten außerhalb der Website (z. B. Vertragsbeziehungen mit Kunden außerhalb dieses Kanals) unterliegen gesonderten internen Regelungen."
    },
    dataCollected: {
      heading: "3. Welche Daten wir verarbeiten und woher wir sie erhalten",
      contactForm: {
        subheading: "3.1 Kontaktformular und Online-Anfragen",
        intro: "Wenn Sie uns über das Website-Formular schreiben, verarbeiten wir insbesondere:",
        items: [
          "Vor- und Nachname bzw. Firmenname,",
          "E-Mail-Adresse und/oder Telefonnummer,",
          "Nachrichteninhalt, Art der Anfrage und optional der Standort der Anlage oder des Projekts,",
          "Anhänge, die Sie in das Formular hochladen (z. B. PDF, DOC, Bilder)."
        ],
        sourceNote: "Die Daten erhalten wir direkt von Ihnen, wenn Sie das Formular absenden."
      },
      emailPhone: {
        subheading: "3.2 E-Mail und Telefon",
        paragraph:
          "Wenn Sie uns direkt unter {email} oder telefonisch kontaktieren, verarbeiten wir die von Ihnen mitgeteilten Daten (Name, Kontaktdaten, Kommunikationsinhalte)."
      },
      cookies: {
        subheading: "3.3 Website-Besuche, Cookies und Analysen",
        intro:
          "Wenn Sie die Website besuchen, können technische Daten über Ihr Gerät und Ihr Verhalten auf der Website verarbeitet werden, insbesondere:",
        items: [
          "IP-Adresse (kann zu Analysezwecken gekürzt werden),",
          "Cookie-Identifikatoren und Online-Identifikatoren,",
          "Informationen über den Browser, das Betriebssystem und die besuchten Seiten,",
          "Daten zur Interaktion mit der Website (z. B. Klicken auf Kontakt, Herunterladen einer Datei)."
        ],
        cookiesLinkPrefix: "Eine detaillierte Liste der Cookies und deren Verwaltung finden Sie im",
        cookiesLinkLabel: "Cookie-Richtlinie"
      },
      marketing: {
        subheading: "3.4 Online-Marketing",
        paragraph:
          "Wenn Sie Marketing-Cookies zustimmen, können wir Daten über Ihren Website-Besuch zum Zweck der Messung und Optimierung von Werbekampagnen (z. B. Google Ads, Meta, LinkedIn), einschließlich Remarketing, verarbeiten. Wir aktivieren diese Technologien nicht ohne Ihre Zustimmung."
      }
    },
    purposes: {
      heading: "4. Zwecke der Verarbeitung und Rechtsgrundlagen",
      tableHeaders: {
        purpose: "Zweck",
        legalBasis: "Rechtsgrundlage (DSGVO)",
        note: "Notiz"
      },
      rows: [
        {
          purpose: "Bearbeitung von Anfragen über die Website, E-Mail oder Telefon",
          legalBasis: "Kunst. 6(1)(b) – Schritte vor Vertragsabschluss/Vertragserfüllung",
          note: "Die Kontaktdaten sind erforderlich, damit wir Ihnen antworten können."
        },
        {
          purpose: "Technischer Betrieb der Website und Sicherheit",
          legalBasis: "Kunst. 6(1)(f) – berechtigtes Interesse des Verantwortlichen",
          note: "Serverprotokolle, Schutz vor Missbrauch des Formulars."
        },
        {
          purpose: "Verkehrsstatistiken (Google Analytics)",
          legalBasis: "Kunst. 6(1)(a) – Einwilligung",
          note: "Aktiviert nur nach Zustimmung im Cookie-Banner."
        },
        {
          purpose: "Online-Werbung und Remarketing",
          legalBasis: "Kunst. 6(1)(a) – Einwilligung",
          note: "Google Ads, Meta, LinkedIn – nur nach Einwilligung."
        },
        {
          purpose: "Direktmarketing (E-Mail mit Serviceangeboten)",
          legalBasis: "Kunst. 6(1)(a) – Einwilligung",
          note:
            "Wir versenden derzeit keine Newsletter; Wenn wir Marketing starten würden, würden wir eine gesonderte Einwilligung einholen."
        }
      ],
      voluntaryNote:
        "Die Angabe Ihrer Daten im Kontaktformular ist freiwillig; Ohne Angabe Ihres Namens und Ihrer Kontaktdaten (E-Mail oder Telefon) können wir Ihre Anfrage jedoch nicht bearbeiten."
    },
    retention: {
      heading: "5. Wie lange wir Daten aufbewahren",
      items: [
        {
          label: "Anfragen und Kommunikation ohne Vertragsabschluss:",
          text: "{Monate} Monate ab dem letzten Kontakt, sofern kein Vertragsverhältnis zustande kommt oder eine längere Archivierungspflicht besteht."
        },
        {
          label: "Cookie-Daten:",
          textPrefix: "je nach Ablauf einzelner Cookies – siehe",
          cookiesLinkLabel: "Cookie-Richtlinie"
        },
        {
          label: "Hosting-Serverprotokolle:",
          text: "für den für den Betrieb und die Sicherheit der Website erforderlichen Zeitraum, der je nach Einstellung des Anbieters in der Regel Tage bis Monate beträgt."
        }
      ]
    },
    recipients: {
      heading: "6. An wen wir Daten weitergeben (Empfänger und Auftragsverarbeiter)",
      intro: "Personenbezogene Daten können an folgende Kategorien von Empfängern weitergegeben werden:",
      items: [
        { name: "Vercel Inc.", description: "Website-Hosting und technischer Betrieb (USA)" },
        { name: "Erneut senden Inc.", description: "Versenden von E-Mails über das Kontaktformular (USA)" },
        {
          name: "Google Ireland Limited / Google LLC",
          description: "Google Analytics, Google Ads, Google Search Console (EU/USA)"
        },
        {
          name: "Meta Platforms Ireland Limited",
          description: "Meta-Werbe- und Remarketing-Tools (EU/USA)"
        },
        {
          name: "LinkedIn Ireland Unlimited Company",
          description: "LinkedIn-Werbe- und Remarketing-Tools (EU/USA)"
        },
        {
          name: "GitHub Inc.",
          description: "Website-Content-Management-System (Decap CMS, Zugriff nur für autorisierte Redakteure)"
        },
        {
          name: "IT-Supportanbieter und andere technische Dienstleister",
          description: "für den Betrieb der Website erforderlich"
        }
      ],
      processorsNote:
        "Wir haben mit Auftragsverarbeitern Verträge zur Auftragsdatenverarbeitung abgeschlossen oder nutzen deren Allgemeine Geschäftsbedingungen, soweit dies nach der DSGVO erforderlich ist. Bei Empfängern mit Sitz außerhalb des Europäischen Wirtschaftsraums (insbesondere den USA) stützen sich Übermittlungen auf angemessene Garantien, insbesondere auf die Standardvertragsklauseln der Europäischen Kommission.",
      noSaleNote: "Der Verantwortliche verkauft personenbezogene Daten nicht an Dritte."
    },
    security: {
      heading: "7. Sicherheit personenbezogener Daten",
      paragraphs: [
        "Wir haben geeignete technische und organisatorische Maßnahmen zum Schutz personenbezogener Daten umgesetzt, insbesondere verschlüsselte HTTPS-Verbindung, Zugriffskontrolle auf E-Mail-Konten und das Content-Management-System sowie Minimierung des Umfangs der verarbeiteten Daten.",
        "Zugriff auf personenbezogene Daten haben nur autorisierte Personen, die diese Daten zur Bearbeitung von Anfragen oder zum Betrieb der Website benötigen."
      ]
    },
    profiling: {
      heading: "8. Automatisierte Entscheidungsfindung und Profiling",
      paragraph:
        "Im Zusammenhang mit dieser Website führen wir keine automatisierte Entscheidungsfindung im Sinne des Art. 22 DSGVO. Remarketing-Tools können Zielgruppen basierend auf dem Verhalten auf der Website erstellen. Entscheidungen mit rechtlichen oder ähnlich erheblichen Auswirkungen auf Sie treffen wir auf diese Weise nicht."
    },
    rights: {
      heading: "9. Ihre Rechte",
      intro: "Unter den Voraussetzungen der DSGVO stehen Ihnen folgende Rechte zu:",
      items: [
        "Recht auf Zugang zu personenbezogenen Daten (Art. 15),",
        "Recht auf Berichtigung (Art. 16),",
        "Recht auf Löschung (Art. 17),",
        "Recht auf Einschränkung der Verarbeitung (Art. 18),",
        "Recht auf Datenübertragbarkeit (Art. 20),",
        "Recht auf Widerspruch gegen die Verarbeitung (Art. 21),",
        "Recht, die Einwilligung jederzeit zu widerrufen, ohne dass die Rechtmäßigkeit der Verarbeitung vor dem Widerruf berührt wird,",
        "Recht, eine Beschwerde bei der Aufsichtsbehörde einzureichen – dem Amt für den Schutz personenbezogener Daten, Pplk. Sochora 27, 170 00 Prag 7, www.uoou.cz."
      ],
      exerciseNote:
        "Um Ihre Rechte auszuüben, kontaktieren Sie uns unter {email} oder per Post an die eingetragene Firmenadresse des Unternehmens. Wir werden Ihre Anfrage unverzüglich, spätestens jedoch innerhalb eines Monats, bearbeiten."
    },
    cookiesSection: {
      heading: "10. Cookies und Einwilligungsverwaltung",
      paragraph:
        "Die Website verwendet Cookies und ähnliche Technologien. Wir speichern wesentliche Cookies ohne Einwilligung; Statistik- und Marketing-Cookies nur basierend auf Ihrer Auswahl im Cookie-Banner. Einzelheiten einschließlich einer Liste der Cookies finden Sie in der Cookie-Richtlinie. Sie können Ihre Einstellungen jederzeit über die Schaltfläche „Cookies verwalten“ im Fußbereich der Website ändern.",
      cookiesLinkLabel: "Cookie-Richtlinie",
      manageCookiesLabel: "Cookies verwalten"
    },
    changes: {
      heading: "11. Änderungen dieser Richtlinie",
      paragraph:
        "Wir können diese Richtlinie aktualisieren, wenn sich der Umfang der Verarbeitung oder die in Anspruch genommenen Dienste ändern. Auf dieser Seite wird stets die aktuelle Version mit Angabe des Gültigkeitsdatums veröffentlicht."
    }
  }
} as const;
