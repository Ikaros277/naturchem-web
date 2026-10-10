import type { SeoLanding } from "@/lib/seo-landings";

export type { SeoLanding };

type LandingSource = NonNullable<SeoLanding["sources"]>[number];

const sourceAirAct: LandingSource = {
  href: "https://e-sbirka.gov.cz/sb/2012/201",
  label: "Gesetz Nr. 201/2012 Sb. über den Schutz der Luft",
  description: "Aktuelle Fassung in der e-Sbírka, insbesondere die Regeln für einmalige Emissionsmessungen."
};

const sourceDecree415: LandingSource = {
  href: "https://e-sbirka.gov.cz/sb/2012/415",
  label: "Verordnung Nr. 415/2012 Sb.",
  description: "Anforderungen an die Ermittlung des Emissionsniveaus und die Durchführung von Messungen."
};

const sourceIspopJme: LandingSource = {
  href: "https://www.ispop.cz/nasazeni-formularu-jednorazoveho-mereni-emisi-f_ovz_term_jme-a-f_ovz_jme/",
  label: "ISPOP: Formulare für einmalige Emissionsmessungen",
  description: "Offizielle Informationen zur Anmeldung des Messtermins und der Protokolldaten."
};

const sourcePublicHealthAct: LandingSource = {
  href: "https://e-sbirka.gov.cz/sb/2000/258",
  label: "Gesetz Nr. 258/2000 Sb. über den Schutz der öffentlichen Gesundheit",
  description: "Aktuelle Fassung in der e-Sbírka: Kategorisierung von Arbeiten (§ 37 ff.), Lärmmessung (§ 32a) und Lärm im Bauverfahren (§ 77)."
};

export const seoLandings: SeoLanding[] = [
  {
    slug: "mereni-emisi-kotelen",
    title: "Emissionsmessungen an Kesselanlagen und Verbrennungsquellen",
    metaDescription:
      "Emissionsmessungen an Kesselanlagen, Brennern und Blockheizkraftwerken: NOx, CO, SO₂, Staub. Bericht für die tschechische Umweltinspektion, Betriebsgenehmigung und ISPOP. Senden Sie uns Ihre Genehmigung, wir erstellen ein Angebot.",
    h1: "Emissionsmessungen an Kesselanlagen und Verbrennungsquellen",
    intro:
      "Wir führen periodische und betriebliche Emissionsmessungen von Kesselanlagen, Gas- und Ölbrennern, Biomassequellen und Blockheizkraftwerken durch. Der Umfang richtet sich nach der Betriebsgenehmigung und dem tatsächlichen Betriebszustand der Quelle.",
    sections: [
      {
        heading: "Was wir an einer Kesselanlage messen",
        paragraphs: [
          "Wir messen typischerweise NOx, CO, SO₂, O₂, Staub und weitere Parameter gemäß Genehmigung. Das Ergebnis ist ein Bericht, der für betriebliche Entscheidungen, behördliche Anforderungen und die anschließenden ISPOP-Meldungen verwendet werden kann.",
          "Umfang und Häufigkeit prüfen wir stets anhand der Betriebsgenehmigung und des letzten Berichts, nicht anhand einer allgemeinen Vorlage."
        ]
      },
      {
        heading: "So läuft die Messung ab",
        paragraphs: [
          "Anhand der Genehmigung und des letzten Berichts prüfen wir Quelle, Abluftkamin und Messgrößen. Danach stimmen wir Termin und einen repräsentativen Betriebszustand ab, damit der Bericht den realen Betrieb abbildet.",
          "Einmalige Emissionsmessungen führt eine bevollmächtigte Person durch. Der Betreiber meldet den Termin in ISPOP mindestens 5 Arbeitstage vor der Messung an, die Protokolldaten werden innerhalb von 60 Tagen über ISPOP gemeldet."
        ]
      },
      {
        heading: "Was Sie uns senden",
        paragraphs: [
          "Die gültige Betriebsgenehmigung, den letzten Bericht, Quellen- und Brennertyp, den Brennstoff, Technologieänderungen und den geplanten Betriebszustand. Hilfreich sind auch Fotos der Messstelle.",
          "Wir unterstützen Betreiber bei der Erstellung von Begleitdokumenten, der Auswahl eines repräsentativen Betriebszustands und der Kommunikation mit Luftschutzbehörden."
        ]
      }
    ],
    serviceHref: "/sluzby/mereni-emisi",
    contactService: "Měření emisí",
    oboryHref: "/provozy-a-technologie/kotelny",
    internalLinkPriority: 100,
    layout: "demand",
    eyebrow: "Kesselanlagen und Verbrennungsquellen",
    overviewHeading: "Von der Genehmigung zum Bericht",
    highlights: ["NOx, CO, SO₂ und Staub", "Bericht für Inspektion und Behörden", "Anbindung an ISPOP"],
    heroTheme: "mereni-emisi",
    relatedLinks: [
      {
        href: "/autorizovana-osoba-mereni-emisi",
        label: "Bevollmächtigte Emissionsmessung",
        description: "Wer messen darf, was Sie senden und wie die ISPOP-Anmeldung funktioniert."
      },
      {
        href: "/sluzby/mereni-emisi",
        label: "Emissionsmessungen nach Quellentyp",
        description: "Umfang, Unterlagen, Ergebnisse und Beispiele aus Betrieben."
      },
      {
        href: "/poradna/priprava-na-mereni-emisi",
        label: "So bereiten Sie die Quelle vor der Messung vor",
        description: "Praktische Prüfung von Genehmigung, Betriebszustand der Quelle und Messstelle."
      }
    ],
    faq: [
      {
        question: "Welche Stoffe werden an einer Kesselanlage gemessen?",
        answer:
          "Typischerweise NOx, CO, SO₂, O₂ und Staub. Der konkrete Umfang richtet sich nach der Betriebsgenehmigung, dem Brennstoff und dem Quellentyp; wir prüfen ihn vor dem Angebot anhand Ihrer Unterlagen."
      },
      {
        question: "Wie oft muss gemessen werden?",
        answer:
          "Die Häufigkeit ergibt sich aus der Betriebsgenehmigung und der Art der Quelle. Senden Sie uns die Genehmigung und den letzten Bericht, daraus ermitteln wir den Termin der nächsten Kontrolle."
      },
      {
        question: "Muss die Messung von einer bevollmächtigten Person durchgeführt werden?",
        answer:
          "Einmalige Emissionsmessungen nach dem Luftschutzgesetz darf nur eine bevollmächtigte Person durchführen. Anhand Ihrer Genehmigung bestätigen wir, ob dies auf Ihre Quelle zutrifft."
      },
      {
        question: "Was wird in ISPOP gemeldet?",
        answer:
          "Der Betreiber meldet den Termin einer einmaligen Messung mindestens 5 Arbeitstage im Voraus an. Die Protokolldaten werden innerhalb von 60 Tagen über ISPOP gemeldet."
      }
    ],
    sourcesEyebrow: "Geprüfte Informationen",
    sourcesHeading: "Rechtliche und methodische Quellen",
    sources: [sourceAirAct, sourceDecree415, sourceIspopJme]
  },
  {
    slug: "mereni-emisi-lakoven",
    title: "Emissionsmessungen in Lackierereien und Oberflächenbehandlungen",
    metaDescription:
      "VOC/TOC- und Partikelemissionsmessungen aus Lackierstraßen, Abgaskaminen und Filtern. Berichte für Betreiber und Behörden.",
    h1: "Emissionsmessungen in Lackierereien und Oberflächenbehandlungen",
    intro:
      "Bei der Lackiertechnologie befassen wir uns mit VOC/TOC, Partikeln und verwandten Parametern aus Abgaskaminen und Filteranlagen. Messungen sind mit Betriebsregeln und Leitungsregime verknüpft.",
    sections: [
      {
        paragraphs: [
          "Wir beurteilen den Messort, wählen überwachte Stoffe aus und führen die Feldarbeiten unter repräsentativen Betriebsbedingungen durch.",
          "Die Ergebnisse dienen der operativen Entscheidungsfindung, Aktualisierung der Dokumentation und Diskussionen mit der Baubehörde, der tschechischen Umweltinspektion oder der Regionalbehörde."
        ]
      }
    ],
    serviceHref: "/sluzby/mereni-emisi",
    contactService: "Měření emisí",
    oboryHref: "/provozy-a-technologie/lakovny"
  },
  {
    slug: "mereni-emisi-bioplynovych-stanic",
    title: "Emissionsmessungen an Biogasanlagen und Kraft-Wärme-Kopplung",
    metaDescription:
      "Emissionsmessungen an Biogasanlagenmotoren und Blockheizkraftwerken. Terminplanung, Berichte und Verknüpfung mit Betreiberpflichten.",
    h1: "Emissionsmessungen an Biogasanlagen und Blockheizkraftwerken",
    intro:
      "Bei Biogasanlagen und Blockheizkraftwerken befassen wir uns mit der Messung der Motoremissionen, dem Betriebsmodus, der Messmeldung und der Verknüpfung mit den Verpflichtungen gegenüber der tschechischen Umweltinspektion und anderen Behörden.",
    sections: [
      {
        paragraphs: [
          "Wir helfen bei der Messplanung, der Erstellung der Begleitdokumentation und der Auswertung der Ergebnisse für den Betrieb und die Genehmigungsdokumentation.",
          "Bei Bedarf erstellen wir auch Ausbreitungs- und Lärmstudien oder UVP-Unterlagen für betriebliche Änderungen."
        ]
      }
    ],
    serviceHref: "/sluzby/mereni-emisi",
    contactService: "Měření emisí",
    oboryHref: "/provozy-a-technologie/bioplyn-biometan"
  },
  {
    slug: "mereni-emisi-drevozpracujicich-provoze",
    title: "Emissionsmessungen bei holzverarbeitenden Betrieben",
    metaDescription:
      "Emissionsmessungen von Sägewerken, Trocknern, Biomassekesselanlagen und Prozessabgaskaminen in Holzverarbeitungsbetrieben.",
    h1: "Emissionsmessungen bei holzverarbeitenden Betrieben",
    intro:
      "In Holzverarbeitungsbetrieben messen wir Emissionen aus der Verbrennung von Biomasse, Trocknern, Prozessabgaskaminen und verwandten Quellen. Wir befassen uns auch mit der Staubbelastung und der Arbeitsplatzumgebung.",
    sections: [
      {
        paragraphs: [
          "Den Messumfang leiten wir aus der Technologie, dem Brennstoff und den behördlichen bzw. Investorenanforderungen ab.",
          "Wir bereiten Ausgaben für Betriebsgenehmigungen, regionale Hygienestationen, regionale Behörden und den internen Arbeitsschutz vor."
        ]
      }
    ],
    serviceHref: "/sluzby/mereni-emisi",
    contactService: "Měření emisí",
    oboryHref: "/provozy-a-technologie/drevozpracujici"
  },
  {
    slug: "mereni-emisi-susaren",
    title: "Emissionsmessungen an Trocknern",
    metaDescription:
      "Emissionsmessungen von Biomassetrocknern und Prozessquellen. Gutachten für Betreiber und Genehmigungsverfahren.",
    h1: "Emissionsmessungen an Trocknern",
    intro:
      "Für Trockner und Technologien mit Verbrennung oder Ableitung gasförmiger Emissionen bieten wir Emissionsparametermessungen unter repräsentativen Betriebsbedingungen an.",
    sections: [
      {
        paragraphs: [
          "Wir befassen uns in der Regel mit Quellen in landwirtschaftlichen und holzverarbeitenden Betrieben, einschließlich der Verbindung zu Staub- und Arbeitsplatzumgebungsmessungen.",
          "Das Projekt umfasst häufig die Erstellung von Begleitdokumenten für die Behörde und einen Plan für regelmäßige Messungen."
        ]
      }
    ],
    serviceHref: "/sluzby/mereni-emisi",
    contactService: "Měření emisí",
    oboryHref: "/provozy-a-technologie/zemedelske-provozy"
  },
  {
    slug: "mereni-hluku-tepelneho-cerpadla-vzt",
    title: "Lärmmessung an Wärmepumpen und HVAC",
    metaDescription:
      "Lärmmessung an Wärmepumpen, HVAC und Kühlanlagen. Protokoll für die Abnahme, das Baugenehmigungsverfahren oder die Klärung von Nachbarbeschwerden.",
    h1: "Lärmmessung an Wärmepumpen und HVAC",
    intro:
      "Wir überprüfen den Lärm einer installierten Wärmepumpe, von HVAC oder Kühlanlagen. Das Ergebnis können Sie für die Abnahme, das Baugenehmigungsverfahren oder die Klärung einer Beschwerde nutzen.",
    sections: [
      {
        heading: "Wann Sie eine Messung brauchen",
        paragraphs: [
          "Nach der Installation der Anlage, bei der Abnahme, nach einer Beschwerde aus der Nachbarschaft oder zur Überprüfung der Wirksamkeit einer Lärmschutzmaßnahme."
        ]
      },
      {
        heading: "Was Sie uns senden",
        paragraphs: [
          "Den Standort der Einheit, das technische Datenblatt, die Betriebsarten und die Anforderung der Behörde oder eine Beschreibung der Beschwerde. Anhand der Unterlagen schlagen wir den Messumfang vor."
        ]
      },
      {
        heading: "Welches Ergebnis Sie erhalten",
        paragraphs: [
          "Ein Protokoll über die Messung des tatsächlichen Betriebs. Ist die Anlage noch nicht installiert, empfehlen wir anstelle einer Messung eine Lärmstudie."
        ]
      }
    ],
    serviceHref: "/sluzby/mereni-hluku",
    contactService: "Měření hluku a akustika",
    oboryHref: "/provozy-a-technologie/tepelna-cerpadla-vzt",
    layout: "demand",
    eyebrow: "Wärmepumpen, HVAC und Kühlung",
    overviewHeading: "Was wir für die Messung benötigen",
    highlights: ["Messung des tatsächlichen Betriebs", "Abnahme und Baugenehmigungsverfahren", "Überprüfung nach Lärmschutzmaßnahmen"],
    heroTheme: "mereni-hluku",
    relatedLinks: [
      {
        href: "/sluzby/mereni-hluku",
        label: "Lärmmessung und Akustik",
        description: "Übersicht der Lärmmessungen für Betriebe, Bauten und die Arbeitsumgebung."
      },
      {
        href: "/provozy-a-technologie/tepelna-cerpadla-vzt",
        label: "Lärmstudie für Wärmepumpe und HVAC",
        description: "Berechnung des Lärms vor der Installation der Anlage oder bei einer Projektänderung."
      },
      {
        href: "/sluzby/hlukove-studie",
        label: "Lärmstudien",
        description: "Rechnerische Beurteilung von Technologien, Betriebsgeländen und Verkehr."
      },
      {
        href: "/mereni-hluku-ke-kolaudaci",
        label: "Lärmmessung zur Abnahme",
        description: "Messung oder Lärmstudie je nach Anforderung der Behörde."
      }
    ],
    faq: [
      {
        question: "Brauche ich eine Lärmmessung oder eine Lärmstudie?",
        answer:
          "Die Messung überprüft den tatsächlichen Lärm einer bereits installierten Anlage. Eine Lärmstudie beurteilt die erwartete Auswirkung im Voraus und ermöglicht den Vergleich von Standorten oder Betriebsvarianten."
      },
      {
        question: "Wie erhalte ich den Preis für die Lärmmessung einer Wärmepumpe?",
        answer:
          "Senden Sie den Standort der Einheit, das technische Datenblatt, die Betriebsarten und den Zweck der Messung. Anhand dieser Unterlagen bestimmen wir den Umfang und erstellen ein konkretes Angebot."
      },
      {
        question: "Messen Sie auch den Lärm von HVAC und Kühlung?",
        answer:
          "Ja. Wir messen auch Außeneinheiten von HVAC, Kühler, Ventilatoren und zugehörige Technologien in ihrem tatsächlichen Betrieb."
      }
    ]
  },
  {
    slug: "mereni-pracovniho-prostredi-kategorizace-praci",
    title: "Messungen zur Arbeitsplatzkategorisierung (KHS)",
    metaDescription:
      "Messungen zur Kategorisierung von Arbeiten: Lärm, Staub, chemische Stoffe, Mikroklima, Beleuchtung und Vibrationen im realen Betrieb. Akkreditiertes Labor Nr. 1599, Unterlagen für die Hygienestation (KHS).",
    h1: "Messungen der Arbeitsumgebung zur Arbeitsplatzkategorisierung",
    intro:
      "In Produktions- und Betriebshallen messen wir Arbeitsplatzfaktoren für die Kategorisierung von Arbeiten, die Arbeitsschutzdokumentation und Gespräche mit der Hygienestation. Wir messen im realen Betrieb und liefern Berichte mit Maßnahmenempfehlungen.",
    sections: [
      {
        heading: "Wann Sie die Messung benötigen",
        paragraphs: [
          "Der Arbeitgeber ordnet Arbeiten nach dem Auftreten von Faktoren, die die Gesundheit der Beschäftigten beeinflussen können, in Kategorien ein (§ 37 des Gesetzes Nr. 258/2000 Sb.). Messungen benötigen Sie bei der Einstufung neuer Arbeiten, nach einer wesentlichen Änderung der Technologie oder Arbeitsorganisation oder auf Aufforderung der Hygienestation.",
          "Typischerweise befassen wir uns mit Staub, chemischen Stoffen, Lärm, Beleuchtung, Mikroklima und Vibrationen unter realen Betriebsbedingungen."
        ]
      },
      {
        heading: "Wer messen darf",
        paragraphs: [
          "Messungen für die Einstufung von Arbeiten in die zweite, dritte oder vierte Kategorie darf der Arbeitgeber nur durch einen Inhaber eines Akkreditierungszertifikats oder einen Inhaber einer Autorisierung für die jeweiligen Messungen veranlassen (§ 38 des Gesetzes Nr. 258/2000 Sb.).",
          "NATURCHEM ist ein akkreditiertes Prüflabor Nr. 1599. Vor dem Angebot prüfen wir, ob die geforderten Methoden im akkreditierten Umfang liegen."
        ]
      },
      {
        heading: "Was wir für die Messung benötigen",
        paragraphs: [
          "Eine Beschreibung der Arbeitstätigkeiten, die Schichtlänge, die Zahl der Beschäftigten, eingesetzte Rohstoffe und Sicherheitsdatenblätter, Arbeitsabläufe, frühere Berichte und gegebenenfalls die Kommunikation mit der Hygienestation.",
          "Wir erstellen Berichte mit Empfehlungen für organisatorische und technische Maßnahmen."
        ]
      }
    ],
    serviceHref: "/sluzby/pracovni-prostredi",
    contactService: "Měření pracovního prostředí",
    internalLinkPriority: 110,
    layout: "demand",
    eyebrow: "Arbeitsplatzkategorisierung und Hygienestation",
    overviewHeading: "Von der Betriebsbeschreibung zum Bericht für die Hygienestation",
    highlights: ["Faktoren der Arbeitsumgebung", "Akkreditiertes Labor Nr. 1599", "Unterlagen für Hygienestation und Arbeitsschutz"],
    heroTheme: "pracovni-prostredi",
    relatedLinks: [
      {
        href: "/podklady-pro-khs",
        label: "Unterlagen für die Hygienestation",
        description: "Was nach einer Aufforderung der Hygienestation vorzubereiten ist und wie sich Arbeitsplatz und Umgebung unterscheiden."
      },
      {
        href: "/mereni-prasnosti",
        label: "Staubmessung",
        description: "Einatembare und alveolengängige Fraktion am Arbeitsplatz."
      },
      {
        href: "/sluzby/pracovni-prostredi",
        label: "Messungen der Arbeitsumgebung",
        description: "Überblick über Faktoren, Unterlagen und Ergebnisse."
      },
      {
        href: "/mereni-nove-haly",
        label: "Messungen für eine neue Produktionshalle",
        description: "Gemeinsamer Umfang der Faktoren vor Betriebsbeginn."
      }
    ],
    faq: [
      {
        question: "Wer ordnet Arbeiten in Kategorien ein?",
        answer:
          "Der Arbeitgeber ordnet Arbeiten nach dem Auftreten von Faktoren und deren Risiko in vier Kategorien ein (§ 37 des Gesetzes Nr. 258/2000 Sb.). Grundlage sind häufig die Ergebnisse von Messungen der Arbeitsumgebung."
      },
      {
        question: "Wer darf die Messung für die Kategorisierung durchführen?",
        answer:
          "Ein Inhaber eines Akkreditierungszertifikats oder ein Inhaber einer Autorisierung für die jeweiligen Messungen (§ 38 des Gesetzes Nr. 258/2000 Sb.). NATURCHEM ist ein akkreditiertes Prüflabor Nr. 1599; den Methodenumfang prüfen wir vor dem Angebot."
      },
      {
        question: "Welche Faktoren werden für die Kategorisierung gemessen?",
        answer:
          "Je nach Betrieb typischerweise Staub, chemische Stoffe in der Arbeitsluft, Lärm, Vibrationen, Beleuchtung und Mikroklima. Den konkreten Umfang schlagen wir anhand der Beschreibung der Tätigkeiten und Arbeitsplätze vor."
      },
      {
        question: "Was gilt, wenn Arbeiten in die dritte oder vierte Kategorie fallen?",
        answer:
          "Über die Einstufung von Arbeiten in höhere Kategorien entscheidet die Behörde für den Schutz der öffentlichen Gesundheit auf Grundlage der Unterlagen des Arbeitgebers, einschließlich Fristen ab Beginn der Arbeiten. Die genauen Pflichten prüfen Sie bitte in der aktuellen Gesetzesfassung und mit der Hygienestation; die Messung liefern wir als fachliche Grundlage."
      }
    ],
    sourcesEyebrow: "Geprüfte Informationen",
    sourcesHeading: "Rechtliche Quellen",
    sources: [
      sourcePublicHealthAct,
      {
        href: "https://e-sbirka.gov.cz/sb/2003/432",
        label: "Verordnung Nr. 432/2003 Sb.",
        description: "Kriterien für die Einstufung von Arbeiten in Kategorien und damit verbundene Pflichten des Arbeitgebers."
      }
    ]
  },
  {
    slug: "rozptylova-studie-povoleni",
    title: "Ausbreitungsstudie für Betriebsgenehmigung und UVP",
    metaDescription:
      "Immissions-Ausbreitungsstudie für Betriebsgenehmigungen, Quellenänderungen oder UVP. Bevollmächtigte Person, Modellierung und Unterlagen für Behörden. Senden Sie uns Ihr Vorhaben, wir schlagen den Umfang vor.",
    h1: "Ausbreitungsstudie für Betriebsgenehmigung",
    intro:
      "Wir erstellen Ausbreitungsstudien der Immissionsbeiträge von Quellen für Betriebsgenehmigungen, Technologieänderungen, UVP oder Gespräche mit Behörden. Die Studie wird von einer bevollmächtigten Person im entsprechenden Umfang durchgeführt.",
    sections: [
      {
        heading: "Wann eine Studie anfällt",
        paragraphs: [
          "Meist bei einer neuen Quelle, einer Änderung von Technologie, Kapazität oder Brennstoff, im Verfahren zur Betriebsgenehmigung oder im Rahmen einer UVP. Ob und in welchem Umfang eine Studie verlangt wird, bestimmen das Gesetz Nr. 201/2012 Sb. und die zuständige Behörde; Ihren Fall prüfen wir gemeinsam mit Ihnen.",
          "Eine Ausbreitungsstudie modelliert den Beitrag der Quelle zur Immissionsbelastung der Umgebung. Sie dient nicht der Überprüfung tatsächlicher Emissionen; das leisten Emissionsmessungen."
        ]
      },
      {
        heading: "Was wir beurteilen",
        paragraphs: [
          "Wir bewerten Quellen, Meteorologie, Gelände und Betriebsvarianten. Das Ergebnis dient als fachliche Unterlage für die Landesbehörde, die tschechische Umweltinspektion, die Baubehörde oder die UVP.",
          "Wir knüpfen die Studie an Emissionsmessungen, Betriebsregeln und bestehende Projektdokumentation an."
        ]
      },
      {
        heading: "Was wir für ein Angebot benötigen",
        paragraphs: [
          "Eine Beschreibung des Vorhabens und der Quellen, den Standort des Areals, Parameter der Schornsteine, Emissionsdaten oder Messergebnisse sowie Betriebszeit und Betriebszustand. Fehlende Angaben ergänzen wir mit Ihnen."
        ]
      }
    ],
    serviceHref: "/sluzby/rozptylove-studie",
    contactService: "Rozptylové studie",
    internalLinkPriority: 100,
    layout: "demand",
    eyebrow: "Luftreinhaltung und UVP",
    overviewHeading: "Vom Vorhaben zur fachlichen Unterlage",
    highlights: ["Bevollmächtigte Person", "Betriebsgenehmigung und UVP", "Anbindung an Emissionsmessungen"],
    heroTheme: "mereni-emisi",
    relatedLinks: [
      {
        href: "/sluzby/rozptylove-studie",
        label: "Ausbreitungsstudien",
        description: "Umfang, Unterlagen und Ergebnisse der Leistung."
      },
      {
        href: "/odborny-posudek-zdroj-znecistovani",
        label: "Gutachten zu einer Quelle",
        description: "Wann eine Behörde ein Gutachten verlangt und wie es an die Studie anknüpft."
      },
      {
        href: "/autorizovana-osoba-mereni-emisi",
        label: "Bevollmächtigte Emissionsmessung",
        description: "Tatsächliche Emissionen der Quelle als Eingangsgröße für die Modellierung."
      }
    ],
    faq: [
      {
        question: "Wann wird eine Ausbreitungsstudie benötigt?",
        answer:
          "Typischerweise bei einer neuen Quelle, einer Änderung von Technologie, Kapazität oder Brennstoff sowie in Verfahren zur Betriebsgenehmigung oder UVP. Die konkrete Pflicht bestimmen das Luftschutzgesetz und die zuständige Behörde, daher prüfen wir sie für Ihr Vorhaben."
      },
      {
        question: "Wer darf eine Ausbreitungsstudie erstellen?",
        answer:
          "Eine Ausbreitungsstudie erstellt eine bevollmächtigte Person im entsprechenden Umfang. Prüfen Sie vor der Beauftragung den Umfang der Bevollmächtigung des Anbieters."
      },
      {
        question: "Worin unterscheiden sich Ausbreitungsstudie und Emissionsmessung?",
        answer:
          "Die Emissionsmessung ermittelt die tatsächlichen Emissionen einer Quelle. Die Ausbreitungsstudie modelliert, wie die Quelle zur Immissionsbelastung der Umgebung beiträgt. Häufig werden beide gemeinsam eingesetzt."
      },
      {
        question: "Welche Unterlagen benötigen Sie für ein Angebot?",
        answer:
          "Eine Beschreibung des Vorhabens und der Quellen, den Lageplan des Areals, Parameter der Schornsteine, Emissionsdaten oder Messprotokolle und den Betriebszustand. Unvollständige Unterlagen ergänzen wir mit Ihnen."
      }
    ],
    sourcesEyebrow: "Geprüfte Informationen",
    sourcesHeading: "Rechtliche Quellen",
    sources: [sourceAirAct]
  },
  {
    slug: "odborny-posudek-zdroj-znecistovani",
    title: "Gutachten zu einer Luftschadstoffquelle",
    metaDescription:
      "Gutachten nach dem Luftschutzgesetz: Betriebsänderung, Genehmigung, Technologie. NATURCHEM bevollmächtigte Person; Ergebnis verwendbar für die Landesbehörde und die tschechische Umweltinspektion.",
    h1: "Gutachten zu einer Luftschadstoffquelle",
    intro:
      "Wir erstellen Gutachten für Betriebsänderungen, neue Quellen, Genehmigungsaktualisierungen oder behördliche Anforderungen. Das Gutachten wird von einer bevollmächtigten Person nach Gesetz Nr. 201/2012 Sb. erstellt.",
    sections: [
      {
        heading: "Wann Sie ein Gutachten benötigen",
        paragraphs: [
          "Bei einer neuen Quelle, einer Änderung von Technologie, Kapazität, Brennstoff oder Filterung und wenn eine Behörde im Verfahren zur Betriebsgenehmigung fachliche Unterlagen verlangt. Maßgeblich ist die Anforderung der zuständigen Behörde; Ihren Fall prüfen wir zunächst mit Ihnen."
        ]
      },
      {
        heading: "Was das Gutachten behandelt",
        paragraphs: [
          "Wir bewerten technische und emissionsbezogene Zusammenhänge der Quelle, schlagen den Umfang von Messungen oder Modellierung vor und erstellen ein Ergebnis, das im Verwaltungsverfahren verwendbar ist.",
          "Typischerweise knüpfen wir das Gutachten an Emissionsmessungen, Ausbreitungsstudien oder Betriebsdokumentation an."
        ]
      },
      {
        heading: "Was Sie uns senden",
        paragraphs: [
          "Eine technische Beschreibung der Quelle oder Technologie, die Betriebsgenehmigung oder die Aufforderung der Behörde, die Projektdokumentation und vorhandene Messprotokolle. Fehlendes ergänzen wir."
        ]
      }
    ],
    serviceHref: "/sluzby/odborne-posudky",
    contactService: "Odborné posudky",
    internalLinkPriority: 100,
    layout: "demand",
    eyebrow: "Luftreinhaltung",
    overviewHeading: "Von der Behördenanforderung zum verwendbaren Gutachten",
    highlights: ["Bevollmächtigte Person", "Änderung von Quelle und Technologie", "Grundlage für das Verwaltungsverfahren"],
    heroTheme: "mereni-emisi",
    relatedLinks: [
      {
        href: "/sluzby/odborne-posudky",
        label: "Gutachten",
        description: "Umfang, Unterlagen und Ergebnisse der Leistung."
      },
      {
        href: "/rozptylova-studie-povoleni",
        label: "Ausbreitungsstudie",
        description: "Immissionsbeurteilung im Anschluss an das Gutachten."
      },
      {
        href: "/podklady-pro-cizp",
        label: "Unterlagen für Umweltinspektion und Landesbehörde",
        description: "Welche Unterlagen nach einer Behördenaufforderung zu verwenden sind."
      }
    ],
    faq: [
      {
        question: "Wer darf ein Gutachten erstellen?",
        answer:
          "Ein Gutachten nach dem Luftschutzgesetz erstellt eine bevollmächtigte Person im entsprechenden Umfang. Prüfen Sie vor der Beauftragung den Umfang der Bevollmächtigung des Anbieters."
      },
      {
        question: "Wann verlangt eine Behörde ein Gutachten?",
        answer:
          "Typischerweise bei der Änderung einer Quelle oder Technologie und im Verfahren zur Betriebsgenehmigung. Eindeutig ergibt es sich aus der Aufforderung oder Entscheidung der Behörde, die Sie uns senden."
      },
      {
        question: "Wie unterscheidet sich ein Gutachten von einer Ausbreitungsstudie?",
        answer:
          "Das Gutachten fasst die technischen und emissionsbezogenen Zusammenhänge einer Quelle für das Verwaltungsverfahren zusammen. Die Ausbreitungsstudie modelliert den Beitrag der Quelle zur Immissionsbelastung. Oft bauen beide aufeinander auf."
      }
    ],
    sourcesEyebrow: "Geprüfte Informationen",
    sourcesHeading: "Rechtliche Quellen",
    sources: [sourceAirAct]
  },
  {
    slug: "ispop-rocni-hlaseni-emise",
    title: "ISPOP: Messanmeldung und Jahresmeldung",
    metaDescription:
      "ISPOP für Quellenbetreiber: Messtermin mindestens 5 Arbeitstage im Voraus anmelden, Protokolldaten innerhalb von 60 Tagen melden und die jährliche Emissionsmeldung abgeben. Wir helfen bei den Unterlagen.",
    h1: "ISPOP: Anmeldung von Emissionsmessungen und Jahresmeldung",
    intro:
      "Der Betreiber einer Luftschadstoffquelle erledigt in ISPOP vor allem die Anmeldung von Termin und Daten einer einmaligen Emissionsmessung sowie die Jahresmeldung. Wir helfen bei Betriebsaufzeichnungen, der Prüfung der Vollständigkeit der Daten und der Anbindung an Messungen und Betriebsgenehmigung.",
    sections: [
      {
        heading: "Anmeldung des Messtermins",
        paragraphs: [
          "Vor einer einmaligen Emissionsmessung meldet der Betreiber den Termin in ISPOP mindestens 5 Arbeitstage im Voraus an (Formular F_OVZ_TERM_JME). Die Betriebsstätte muss im CRŽP registriert sein.",
          "Die Meldung kann für den Betreiber ein Bevollmächtigter vornehmen; die Vollmacht wird im CRŽP nach den Hinweisen auf ispop.cz eingerichtet."
        ]
      },
      {
        heading: "Protokoll und Messdaten",
        paragraphs: [
          "Einmalige Messungen führt eine bevollmächtigte Person durch. Sie erstellt das Protokoll und meldet die Messdaten innerhalb von 60 Tagen über ISPOP (Formular F_OVZ_JME)."
        ]
      },
      {
        heading: "Jahresmeldung und Betriebsaufzeichnungen",
        paragraphs: [
          "Wir prüfen die Vollständigkeit der Daten und die Übereinstimmung mit Messungen und Betriebsgenehmigung. Für ausgewählte Pflichten stellen wir eine bevollmächtigte Prüfung sicher.",
          "Geeignet für Betreiber nach einer Kontrolle, Technologieänderung oder bei Übernahme einer neuen Quelle."
        ]
      }
    ],
    serviceHref: "/sluzby/ispop",
    contactService: "ISPOP",
    internalLinkPriority: 100,
    layout: "demand",
    eyebrow: "ISPOP und Luftreinhaltung",
    overviewHeading: "Was der Betreiber in ISPOP meldet",
    highlights: ["Anmeldung des Messtermins", "Protokolldaten innerhalb von 60 Tagen", "Jährliche Emissionsmeldung"],
    heroTheme: "mereni-emisi",
    relatedLinks: [
      {
        href: "/autorizovana-osoba-mereni-emisi",
        label: "Bevollmächtigte Emissionsmessung",
        description: "Wer messen darf und was vor dem Termin zu senden ist."
      },
      {
        href: "/sluzby/ispop",
        label: "ISPOP",
        description: "Umfang der Unterstützung bei Aufzeichnungen und Meldungen."
      },
      {
        href: "/poradna/priprava-na-mereni-emisi",
        label: "So bereiten Sie die Quelle vor der Messung vor",
        description: "Praktische Prüfung von Genehmigung, Betriebszustand der Quelle und Messstelle."
      }
    ],
    faq: [
      {
        question: "Wer meldet den Termin der Emissionsmessung in ISPOP an?",
        answer:
          "Der Betreiber meldet den Termin mindestens 5 Arbeitstage vor der Messung an. Ein Bevollmächtigter mit im CRŽP eingerichteter Vollmacht kann die Meldung für ihn vornehmen."
      },
      {
        question: "Bis wann werden die Protokolldaten gemeldet?",
        answer:
          "Die bevollmächtigte Person erstellt das Protokoll und meldet die Messdaten innerhalb von 60 Tagen über ISPOP."
      },
      {
        question: "Was benötige ich vor dem Absenden des Formulars?",
        answer:
          "Die im CRŽP registrierte Betriebsstätte und gültige Quellendaten aus der Betriebsgenehmigung. Wenn Sie unsicher sind, senden Sie uns die Genehmigung und den letzten Bericht, dann prüfen wir das weitere Vorgehen."
      },
      {
        question: "Wobei helfen Sie in ISPOP?",
        answer:
          "Bei der Vorbereitung von Unterlagen, der Prüfung von Vollständigkeit und Übereinstimmung mit Messungen und Betriebsgenehmigung sowie bei der Anbindung an die Jahresmeldung. Den Umfang der Unterstützung, einschließlich eines möglichen Handelns im Namen des Betreibers, vereinbaren wir vorab."
      }
    ],
    sourcesEyebrow: "Geprüfte Informationen",
    sourcesHeading: "Rechtliche und methodische Quellen",
    sources: [sourceIspopJme, sourceAirAct, sourceDecree415]
  },
  {
    slug: "mereni-emisi-dieselagregat",
    title: "Emissionsmessungen von Dieselaggregaten und Notstromquellen",
    metaDescription:
      "Emissionsmessungen von Dieselaggregaten, Notstromquellen und Bereitschaftsbetrieb. Bevollmächtigte Messung und Bericht für Behörden.",
    h1: "Emissionsmessungen von Dieselaggregaten und Notstromquellen",
    intro:
      "Wir führen einmalige Emissionsmessungen von Dieselaggregaten und Notstromquellen durch, einschließlich Vorbereitung der ISPOP-Messungsanmeldung. Messungen werden von einer bevollmächtigten Person durchgeführt.",
    sections: [
      {
        paragraphs: [
          "Typischerweise messen wir NOx, CO, Feinstaub und weitere Parameter gemäß Genehmigung und Quellentyp.",
          "Der Output dient Betriebsregeln, Betriebsgenehmigungen und der jährlichen Emissionsmeldung."
        ]
      }
    ],
    serviceHref: "/sluzby/mereni-emisi",
    contactService: "Měření emisí"
  },
  {
    slug: "autorizovana-osoba-mereni-emisi",
    title: "Bevollmächtigte Person für Emissionsmessungen in Tschechien",
    metaDescription:
      "Einmalige Emissionsmessungen dürfen nur von einer bevollmächtigten Person durchgeführt werden. NATURCHEM: akkreditiertes Labor Nr. 1599 mit Emissionsbefugnis. Vorbereitung, Bericht und Daten für ISPOP.",
    h1: "Bevollmächtigte Emissionsmessung",
    intro:
      "NATURCHEM führt bevollmächtigte einmalige Emissionsmessungen an stationären Quellen durch. Wir prüfen Ihre Unterlagen, messen die Quelle im repräsentativen Betrieb und übergeben einen akkreditierten Bericht.",
    sections: [
      {
        heading: "Senden Sie die Genehmigung und den letzten Bericht",
        paragraphs: [
          "Anhand der Genehmigung prüfen wir Quellen, Abluftkamine, Messgrößen und Häufigkeit. Fügen Sie eine technische Beschreibung, Technologieänderungen, Fotos der Messstelle und den geplanten Betriebszustand bei."
        ]
      },
      {
        heading: "Wir bereiten die Messung für den realen Betrieb vor",
        paragraphs: [
          "Vor dem Termin stimmen wir Umfang, Zugang zum Abluftkamin und einen repräsentativen Betriebszustand der Quelle ab. Der Betreiber meldet den Termin in ISPOP mindestens 5 Arbeitstage vor der Messung an."
        ]
      },
      {
        heading: "Wir übergeben den Bericht und melden die Daten",
        paragraphs: [
          "Eine einmalige Messung darf nur eine bevollmächtigte Person durchführen. Wir erstellen den Bericht und melden die Messdaten innerhalb von 60 Tagen über ISPOP.",
          "Aus unserer Praxis: An einer Gießmaschine haben wir Staub und Zink an einem Technologieschornstein gemessen. Ergebnis war ein Bericht über eine bevollmächtigte Emissionsmessung."
        ]
      }
    ],
    serviceHref: "/sluzby/mereni-emisi",
    contactService: "Měření emisí",
    internalLinkPriority: 110,
    layout: "demand",
    eyebrow: "Luftreinhaltung",
    overviewHeading: "Von den Unterlagen zum verwendbaren Bericht",
    highlights: ["Akkreditiertes Labor Nr. 1599", "Kesselanlagen, Lackierereien und Technologien", "Bericht und Daten für ISPOP"],
    heroTheme: "mereni-emisi",
    relatedLinks: [
      {
        href: "/sluzby/mereni-emisi",
        label: "Emissionsmessungen nach Quellentyp",
        description: "Umfang, Unterlagen, Ergebnisse und Beispiele aus Betrieben."
      },
      {
        href: "/akreditace-autorizace-dokumenty",
        label: "Akkreditierung, Bevollmächtigung und Dokumente",
        description: "Zertifikate des Labors und Überblick über die fachlichen Befugnisse."
      },
      {
        href: "/ispop-rocni-hlaseni-emise",
        label: "ISPOP: Messanmeldung und Jahresmeldung",
        description: "Termin, Protokolldaten und Anbindung an die Jahresmeldung."
      },
      {
        href: "/mereni-emisi-kotelen",
        label: "Emissionsmessungen an Kesselanlagen",
        description: "NOx, CO, SO₂ und Staub an Verbrennungsquellen."
      },
      {
        href: "/podklady-pro-cizp",
        label: "Unterlagen für Umweltinspektion und Landesbehörde",
        description: "Welche Unterlagen nach einer Behördenaufforderung zu verwenden sind."
      },
      {
        href: "/poradna/priprava-na-mereni-emisi",
        label: "So bereiten Sie die Quelle vor der Messung vor",
        description: "Praktische Prüfung von Genehmigung, Betriebszustand der Quelle und Messstelle."
      }
    ],
    faq: [
      {
        question: "Wer darf eine einmalige Emissionsmessung durchführen?",
        answer:
          "Eine einmalige Emissionsmessung nach dem Luftschutzgesetz darf nur eine bevollmächtigte Person durchführen. Vor der Beauftragung empfiehlt es sich außerdem, den akkreditierten Umfang der eingesetzten Methoden zu prüfen."
      },
      {
        question: "Was benötigen Sie für ein Angebot und die Vorbereitung der Messung?",
        answer:
          "Senden Sie die gültige Betriebsgenehmigung, den letzten Bericht, eine technische Beschreibung der Quelle und der Abluftkamine, Informationen zu Technologieänderungen und den geplanten Betriebszustand. Hilfreich sind auch Fotos der Messstelle."
      },
      {
        question: "Wer meldet Termin und Daten in ISPOP?",
        answer:
          "Der Betreiber meldet den Termin mindestens 5 Arbeitstage vor der Messung an. Die bevollmächtigte Person erstellt den Bericht und meldet die Messdaten innerhalb von 60 Tagen über ISPOP."
      },
      {
        question: "Worin besteht der Unterschied zwischen Bevollmächtigung und Akkreditierung?",
        answer:
          "Die Bevollmächtigung berechtigt eine Person zu gesetzlich festgelegten Tätigkeiten. Die Akkreditierung bestätigt die fachliche Kompetenz eines Labors für bestimmte Methoden und einen festgelegten Prüfumfang."
      },
      {
        question: "Was muss ich vor der Messung in ISPOP bereithalten?",
        answer:
          "Die Betriebsstätte muss im CRŽP registriert sein. Ein Bevollmächtigter mit im CRŽP eingerichteter Vollmacht kann die Meldung für den Betreiber vornehmen. Das Vorgehen gehen wir vor dem Termin gemeinsam mit Ihnen durch."
      }
    ],
    sourcesEyebrow: "Geprüfte Informationen",
    sourcesHeading: "Rechtliche und methodische Quellen",
    sources: [sourceAirAct, sourceDecree415, sourceIspopJme]
  },
  {
    slug: "mereni-prasnosti",
    title: "Staubmessungen am Arbeitsplatz und im Betrieb",
    metaDescription:
      "Staubmessungen — einatembare und alveolengängige Fraktion, Arbeitsumfeld und Arbeitsplatzkategorisierung. NATURCHEM akkreditiertes Labor Nr. 1599.",
    h1: "Staubmessungen am Arbeitsplatz",
    intro:
      "NATURCHEM misst Staub im Arbeitsumfeld einschließlich einatembarer und alveolengängiger Fraktionen. Die Ergebnisse dienen der Hygienestation, Arbeitsplatzkategorisierung, dem Arbeitsschutz und technischen Maßnahmen.",
    sections: [
      {
        paragraphs: [
          "Wir messen an ausgewählten Arbeitsplätzen nach tatsächlichen Betriebsabläufen und Schichtmodellen. Bei Schüttgütern und Technologien mit Absaugung bewerten wir auch die Wirksamkeit von Schutzmaßnahmen.",
          "Der Bericht ist für die Hygienestation, Aktualisierung der Arbeitsplatzkategorisierung und interne Arbeitsschutzdokumentation verwendbar."
        ]
      }
    ],
    serviceHref: "/sluzby/pracovni-prostredi",
    contactService: "Měření pracovního prostředí"
  },
  {
    slug: "mereni-tezkych-kovu-emise",
    title: "Schwermetallmessungen in Rauchgasen und Arbeitsluft",
    metaDescription:
      "Schwermetallmessungen in Emissionen stationärer Quellen und in der Arbeitsluft. Akkreditierter Umfang des NATURCHEM-Labors.",
    h1: "Schwermetallmessungen",
    intro:
      "Im akkreditierten Umfang des NATURCHEM-Labors messen wir Schwermetalle in Emissionen stationärer Quellen und in der Arbeitsluft. Typischerweise As, Cd, Cr, Ni, Pb, Hg und weitere Metalle gemäß Genehmigung oder Hygienestation.",
    sections: [
      {
        paragraphs: [
          "Bei Emissionen sichern wir Probenahme in flüssigen Sorptionsmitteln und analytische Auswertung. Im Arbeitsumfeld messen wir die Exposition an Schweiß-, Schleif- oder Metallbearbeitungsplätzen.",
          "Der Output ist ein Bericht mit Bewertung gegenüber Grenzwerten oder Unterlage für die Arbeitsplatzkategorisierung."
        ]
      }
    ],
    serviceHref: "/sluzby/mereni-emisi",
    contactService: "Měření emisí",
    oboryHref: "/provozy-a-technologie/svarovny"
  },
  {
    slug: "podklady-pro-khs",
    title: "Unterlagen für die Hygienestation — Arbeitsplatz und Lärm",
    metaDescription:
      "Vorbereitung von Unterlagen für die Hygienestation (KHS): Lärm, Staub, chemische Substanzen, Mikroklima und Arbeitsplatzkategorisierung.",
    h1: "Unterlagen für die Hygienestation",
    intro:
      "Wir helfen Betreibern, Unterlagen für die Hygienestation nach einer Kontrollaufforderung, bei der Arbeitsplatzkategorisierung oder einer Technologieänderung vorzubereiten. NATURCHEM misst Arbeitsplatzfaktoren im akkreditierten Umfang.",
    sections: [
      {
        heading: "Was die Hygienestation typischerweise verlangt",
        paragraphs: [
          "Typischerweise bearbeiten wir Arbeitsplatzlärm, Staub, chemische Substanzen, Mikroklima, Beleuchtung und Vibrationen. Wir schlagen den Messumfang nach Betrieb und behördlicher Anforderung vor.",
          "Berichte dienen als fachliche Unterlage für die Arbeitsplatzkategorisierung und die Kommunikation mit der Hygienestation."
        ]
      },
      {
        heading: "Arbeitsplatz oder Umgebung des Betriebs",
        paragraphs: [
          "Die Hygienestation kann sich sowohl mit der Exposition von Beschäftigten am Arbeitsplatz als auch mit Lärm befassen, der auf benachbarte geschützte Räume einwirkt. Das sind unterschiedliche Messungen mit verschiedenem Zweck, deshalb klären wir zunächst, um welchen Fall es bei Ihnen geht.",
          "Bei Arbeitsplätzen knüpfen wir an die Arbeitsplatzkategorisierung an. Bei Lärm aus Technologie oder einem Bauwerk helfen Lärmmessung oder Lärmstudie."
        ]
      },
      {
        heading: "So gehen wir nach einer Aufforderung vor",
        paragraphs: [
          "Senden Sie die Aufforderung oder Entscheidung der Hygienestation, eine Beschreibung des Betriebs und vorhandene Berichte. Wir schlagen Umfang und Termin vor, messen im realen Betrieb und übergeben Berichte mit Maßnahmenempfehlungen."
        ]
      }
    ],
    serviceHref: "/sluzby/pracovni-prostredi",
    contactService: "Měření pracovního prostředí",
    internalLinkPriority: 100,
    layout: "demand",
    eyebrow: "Hygienestation (KHS)",
    overviewHeading: "Von der Aufforderung der Hygienestation zu den Berichten",
    highlights: ["Arbeitsumgebung und Lärm", "Akkreditiertes Labor Nr. 1599", "Unterlagen für die Kategorisierung"],
    heroTheme: "pracovni-prostredi",
    relatedLinks: [
      {
        href: "/mereni-pracovniho-prostredi-kategorizace-praci",
        label: "Messungen zur Arbeitsplatzkategorisierung",
        description: "Wer messen darf und was für die Einstufung von Arbeiten vorzubereiten ist."
      },
      {
        href: "/mereni-hluku-ke-kolaudaci",
        label: "Lärmmessung zur Abnahme",
        description: "Lärm aus Technologie und Bauwerk im Verhältnis zu geschützten Räumen."
      },
      {
        href: "/mereni-prasnosti",
        label: "Staubmessung",
        description: "Einatembare und alveolengängige Fraktion am Arbeitsplatz."
      }
    ],
    faq: [
      {
        question: "Was ist nach einer Aufforderung der Hygienestation zu tun?",
        answer:
          "Senden Sie uns die Aufforderung oder Entscheidung, eine Beschreibung des Betriebs und vorhandene Berichte. Daraus klären wir, ob es um den Arbeitsplatz oder um Lärm in der Umgebung geht, und schlagen den Messumfang vor."
      },
      {
        question: "Genügt eine selbst durchgeführte Messung?",
        answer:
          "Für die Einstufung von Arbeiten in die zweite, dritte oder vierte Kategorie darf nur ein Inhaber eines Akkreditierungszertifikats oder einer Autorisierung für die jeweiligen Messungen messen (§ 38 des Gesetzes Nr. 258/2000 Sb.). Eine eigene orientierende Messung genügt daher als Grundlage in der Regel nicht; anhand der Aufforderung bestätigen wir das."
      },
      {
        question: "Welche Arbeitsplatzfaktoren messen Sie?",
        answer:
          "Je nach Art des Betriebs Staub, chemische Substanzen, Lärm, Vibrationen, Beleuchtung und Mikroklima. Den konkreten Umfang schlagen wir anhand der Beschreibung der Betriebsabläufe und der Anforderung der Hygienestation vor."
      }
    ],
    sourcesEyebrow: "Geprüfte Informationen",
    sourcesHeading: "Rechtliche Quellen",
    sources: [sourcePublicHealthAct]
  },
  {
    slug: "mereni-hluku-ceske-budejovice",
    title: "Lärmmessung in České Budějovice: Betrieb und KHS",
    metaDescription:
      "Lärmmessung in České Budějovice für Betriebe, Arbeitsplätze, die Hygienestation (KHS) und die Abnahme. Labor in der Rudolfovská 119/57; wir schlagen einen geeigneten Umfang vor.",
    h1: "Lärmmessung in České Budějovice",
    intro:
      "Müssen Sie Lärm aus einem Betrieb, am Arbeitsplatz oder für die Abnahme belegen? Wir wählen einen geeigneten Messmodus und erstellen das Protokoll entsprechend dem Zweck. Unser Labor befindet sich in der Rudolfovská 119/57 in České Budějovice.",
    sections: [
      {
        heading: "Wann sich eine Lärmmessung lohnt",
        paragraphs: [
          "Wir messen Lärm von Produktionstechnologien, Lüftungstechnik, Kühlung und weiteren Anlagen, Lärm am Arbeitsplatz sowie Lärm im Zusammenhang mit der Abnahme, einer Betriebsänderung oder einer Beschwerde aus der Umgebung.",
          "Den Messumfang legen wir nach den Lärmquellen, dem Betriebszustand und dem Zweck des Ergebnisses fest — zum Beispiel für die Hygienestation (KHS), die Baubehörde, den Arbeitgeber oder eine interne Entscheidung des Betreibers."
        ]
      },
      {
        heading: "Was Sie für eine schnelle Einschätzung senden sollten",
        paragraphs: [
          "Es genügt, die Adresse des Betriebs anzugeben, die Lärmquellen und ihre Betriebszeiten zu beschreiben und einen vorhandenen Lageplan, Fotos oder die Anforderung der Behörde beizufügen. Anhand der Unterlagen empfehlen wir einen geeigneten Umfang und Messmodus.",
          "Geht es um eine konkrete Beschwerde oder die Abnahme, hilft zusätzlich die Bezeichnung des geschützten Raums und die Angabe, wann die Technologie am stärksten belastet ist."
        ]
      },
      {
        heading: "Ergebnis und weiterführende Lösungen",
        paragraphs: [
          "Das Ergebnis ist ein Protokoll entsprechend dem vereinbarten Zweck der Messung. Muss ein künftiger Zustand beurteilt oder müssen Maßnahmen vorgeschlagen werden, schließen wir eine Lärmstudie oder ein Akustikgutachten an.",
          "Der lokale Standort in České Budějovice erleichtert die Abstimmung bei Aufträgen in der Stadt und in der Region Südböhmen."
        ]
      }
    ],
    serviceHref: "/sluzby/mereni-hluku",
    contactService: "Měření hluku a akustika",
    areaServed: { type: "City", name: "České Budějovice" },
    internalLinkPriority: 100,
    layout: "demand",
    eyebrow: "České Budějovice und Südböhmen",
    overviewHeading: "Was wir für Sie messen und belegen",
    highlights: ["Betriebslärm", "Lärm am Arbeitsplatz", "Unterlagen für KHS und Abnahme"],
    heroTheme: "mereni-hluku",
    relatedLinks: [
      {
        href: "/sluzby/mereni-hluku",
        label: "Lärmmessung",
        description: "Betriebe, Technologien, Arbeitsplätze und geschützte Räume."
      },
      {
        href: "/sluzby/hlukove-studie",
        label: "Lärmstudie",
        description: "Beurteilung des künftigen Betriebs, einer Technologie oder eines Bauvorhabens."
      },
      {
        href: "/mereni-pro-kolaudaci",
        label: "Messungen zur Abnahme",
        description: "Lärm, Beleuchtung und Arbeitsumgebung in einem Auftrag."
      },
      {
        href: "/mereni-hluku-ke-kolaudaci",
        label: "Lärmmessung zur Abnahme",
        description: "Messung oder Lärmstudie je nach Anforderung der Behörde."
      }
    ],
    faq: [
      {
        question: "Welche Unterlagen soll ich für eine Lärmmessung senden?",
        answer:
          "Senden Sie die Adresse des Betriebs, eine Beschreibung der Lärmquellen und ihre Betriebszeiten. Hilfreich sind auch ein Lageplan, Fotos oder die Anforderung der Hygienestation (KHS) oder der Baubehörde."
      },
      {
        question: "Messen Sie sowohl Betriebslärm als auch Lärm am Arbeitsplatz?",
        answer:
          "Ja. Zweck, Ort und Modus der Messung unterscheiden sich, daher klären wir zunächst, ob Sie die Auswirkung des Betriebs auf die Umgebung, die Exposition der Beschäftigten oder eine Unterlage zur Abnahme belegen müssen."
      },
      {
        question: "Kann die Messung bei der Klärung einer Lärmbeschwerde verwendet werden?",
        answer:
          "Den Umfang legen wir nach Lärmquelle, Tages- oder Nachtzeit und geschütztem Raum fest. Vor der Messung müssen wir die konkrete Situation und den Zweck des Ergebnisses kennen."
      }
    ]
  },
  {
    slug: "podklady-pro-cizp",
    title: "Unterlagen für die Umweltinspektion und Landesbehörde",
    metaDescription:
      "Emissionsmessungen, Gutachten und Betriebsdokumentation als Unterlage für die tschechische Umweltinspektion, Landesbehörde und Betriebsgenehmigungen.",
    h1: "Unterlagen für die Umweltinspektion und Landesbehörde",
    intro:
      "Wir stellen Emissionsmessungen, Gutachten, Ausbreitungsstudien oder Betriebsregeln als Unterlagen für die tschechische Umweltinspektion, Landesbehörde oder Verwaltungsverfahren über Betriebsgenehmigungen bereit.",
    sections: [
      {
        heading: "Welche Unterlage wofür dient",
        paragraphs: [
          "Eine einmalige Emissionsmessung führt eine bevollmächtigte Person durch; sie zeigt die tatsächlichen Emissionen der Quelle. Eine Ausbreitungsstudie modelliert den Beitrag der Quelle zur Immissionsbelastung, ein Gutachten fasst die technischen Zusammenhänge der Quelle zusammen und Betriebsregeln regeln ihren Betrieb.",
          "Wir knüpfen an Betriebsgenehmigung, Kontrollaufforderung oder Technologieänderung an und wählen die Unterlage, die die Behörde tatsächlich verlangt."
        ]
      },
      {
        heading: "Anbindung an ISPOP",
        paragraphs: [
          "Wir bereiten die Ergebnisse so vor, dass sie in der Kommunikation mit Behörden verwendbar sind — einschließlich ISPOP und jährlicher Emissionsmeldung, falls erforderlich. Der Betreiber meldet den Messtermin mindestens 5 Arbeitstage im Voraus an, die Protokolldaten werden innerhalb von 60 Tagen gemeldet."
        ]
      },
      {
        heading: "Was Sie nach einer Aufforderung senden",
        paragraphs: [
          "Die Aufforderung der tschechischen Umweltinspektion oder Landesbehörde, die gültige Betriebsgenehmigung, den letzten Bericht und eine Beschreibung von Technologieänderungen. Daraus schlagen wir Umfang und Reihenfolge der Schritte vor."
        ]
      }
    ],
    serviceHref: "/sluzby/mereni-emisi",
    contactService: "Měření emisí",
    internalLinkPriority: 100,
    layout: "demand",
    eyebrow: "Umweltinspektion und Landesbehörde",
    overviewHeading: "Von der Behördenaufforderung zur richtigen Unterlage",
    highlights: ["Emissionsmessungen", "Gutachten und Ausbreitungsstudie", "Anbindung an ISPOP"],
    heroTheme: "mereni-emisi",
    relatedLinks: [
      {
        href: "/autorizovana-osoba-mereni-emisi",
        label: "Bevollmächtigte Emissionsmessung",
        description: "Wer messen darf und wie die ISPOP-Anmeldung funktioniert."
      },
      {
        href: "/odborny-posudek-zdroj-znecistovani",
        label: "Gutachten zu einer Quelle",
        description: "Grundlage für Betriebsänderung und Genehmigung."
      },
      {
        href: "/rozptylova-studie-povoleni",
        label: "Ausbreitungsstudie",
        description: "Immissionsbeurteilung für Betriebsgenehmigung und UVP."
      },
      {
        href: "/ispop-rocni-hlaseni-emise",
        label: "ISPOP und Jahresmeldung",
        description: "Terminanmeldung, Protokolldaten und Jahresmeldung."
      }
    ],
    faq: [
      {
        question: "Welche Unterlage verlangt die Umweltinspektion oder Landesbehörde?",
        answer:
          "Das ergibt sich aus der Aufforderung oder Entscheidung der Behörde. Meist ist es ein Bericht über eine bevollmächtigte Emissionsmessung, ein Gutachten, eine Ausbreitungsstudie oder Betriebsregeln. Senden Sie uns die Aufforderung, wir wählen die richtige Unterlage aus."
      },
      {
        question: "Wer darf Emissionen für eine Behörde messen?",
        answer:
          "Eine einmalige Emissionsmessung nach dem Luftschutzgesetz darf nur eine bevollmächtigte Person durchführen. Prüfen Sie vor der Beauftragung den Umfang der Bevollmächtigung und der akkreditierten Methoden."
      },
      {
        question: "Wie wird eine Messung in ISPOP gemeldet?",
        answer:
          "Der Betreiber meldet den Messtermin mindestens 5 Arbeitstage im Voraus an, die Protokolldaten werden innerhalb von 60 Tagen über ISPOP gemeldet."
      }
    ],
    sourcesEyebrow: "Geprüfte Informationen",
    sourcesHeading: "Rechtliche und methodische Quellen",
    sources: [sourceAirAct, sourceDecree415, sourceIspopJme]
  },
  {
    slug: "mereni-hluku-ke-kolaudaci",
    title: "Lärmmessung zur Abnahme von Anlagen und Bauten",
    metaDescription:
      "Lärmmessung zur Abnahme von Technologien, Lüftung und Wärmepumpen. Wir beraten, ob eine Lärmstudie genügt oder eine Messung nötig ist. Senden Sie die Anforderung der Baubehörde oder Hygienestation.",
    h1: "Lärmmessung zur Abnahme",
    intro:
      "Verlangt die Baubehörde oder Hygienestation einen Nachweis über den Lärm von Technologie, Lüftung oder Wärmepumpe? Wir beraten, ob eine Lärmstudie genügt oder eine Messung im Betrieb nötig ist, und führen die Messung für den betreffenden geschützten Raum durch.",
    sections: [
      {
        heading: "Messung oder Lärmstudie",
        paragraphs: [
          "Eine Lärmstudie beurteilt den geplanten Zustand rechnerisch, die Messung überprüft den tatsächlichen Betrieb. Bei der Genehmigung geschützter Bauten, etwa Wohnhäuser, Einfamilienhäuser, Schulen, Gesundheits- und Sozialbauten, sowie von Bauten, die Lärmquellen sind, in einem durch überhöhten Lärm belasteten Gebiet lässt das Gesetz entweder eine Lärmmessung nach § 32a oder eine Lärmstudie mit Maßnahmenvorschlag zu (§ 77 Abs. 5 des Gesetzes Nr. 258/2000 Sb.).",
          "Was für die Abnahme Ihres Bauwerks verlangt wird, bestimmen die Bedingungen der Genehmigung und die Anforderung der Baubehörde oder Hygienestation. Senden Sie uns diese, dann empfehlen wir ein geeignetes Vorgehen."
        ]
      },
      {
        heading: "Wer Lärm messen darf",
        paragraphs: [
          "Lärm in der Lebensumwelt des Menschen darf nach diesem Gesetz nur ein Inhaber eines Akkreditierungszertifikats oder ein Inhaber einer Autorisierung nach § 83c messen (§ 32a des Gesetzes Nr. 258/2000 Sb.).",
          "Vor dem Angebot bestätigen wir, dass die geforderte Methode im akkreditierten Umfang von NATURCHEM liegt."
        ]
      },
      {
        heading: "Was wir typischerweise messen",
        paragraphs: [
          "Außeneinheiten von Wärmepumpen, Lüftung, Kühlung, Technologien und Verkehr im Areal. Bei der Messung muss die Anlage in einem Betriebszustand arbeiten, der dem Zweck des Berichts entspricht."
        ]
      },
      {
        heading: "Was Sie uns senden",
        paragraphs: [
          "Die Anforderung oder Bedingungen der Baubehörde oder Hygienestation, Adresse und Bezeichnung des geschützten Raums, eine Beschreibung der Lärmquellen und ihrer Betriebszeiten, technische Datenblätter und eine eventuelle frühere Lärmstudie. Fehlendes ergänzen wir."
        ]
      }
    ],
    serviceHref: "/sluzby/mereni-hluku",
    contactService: "Měření hluku ke kolaudaci",
    internalLinkPriority: 100,
    layout: "demand",
    eyebrow: "Abnahme und geschützte Räume",
    overviewHeading: "Von der Behördenanforderung zum Bericht",
    highlights: ["Messung oder Studie", "Lüftung und Wärmepumpen", "Bericht für Baubehörde und Hygienestation"],
    heroTheme: "mereni-hluku",
    relatedLinks: [
      {
        href: "/mereni-hluku-tepelneho-cerpadla-vzt",
        label: "Lärm von Wärmepumpen und Lüftung",
        description: "Außeneinheiten, Kühlung und geschützter Außenraum."
      },
      {
        href: "/sluzby/hlukove-studie",
        label: "Lärmstudie",
        description: "Rechnerische Beurteilung geplanter Technologie oder eines Bauwerks."
      },
      {
        href: "/sluzby/mereni-hluku",
        label: "Lärmmessung und Akustik",
        description: "Betriebe, Technologien, Arbeitsplätze und geschützte Räume."
      },
      {
        href: "/mereni-pro-kolaudaci",
        label: "Messungen zur Abnahme",
        description: "Lärm, Beleuchtung und Arbeitsumgebung in einem Auftrag."
      }
    ],
    faq: [
      {
        question: "Ist für die Abnahme immer eine Lärmmessung nötig?",
        answer:
          "Nicht immer. Es hängt von den Bedingungen der Genehmigung und der Anforderung der Baubehörde oder Hygienestation ab. Senden Sie uns diese, wir empfehlen dann, ob eine Lärmstudie genügt oder eine Messung im Betrieb nötig ist."
      },
      {
        question: "Wer darf Lärm für eine Baubehörde oder Hygienestation messen?",
        answer:
          "Lärm in der Lebensumwelt darf nur ein Inhaber eines Akkreditierungszertifikats oder ein Inhaber einer Autorisierung nach § 83c des Gesetzes Nr. 258/2000 Sb. messen (§ 32a)."
      },
      {
        question: "Kann eine Lärmstudie die Messung ersetzen?",
        answer:
          "Bei der Genehmigung bestimmter Bauten lässt das Gesetz eine Lärmmessung oder eine Lärmstudie mit Maßnahmenvorschlag zu (§ 77 Abs. 5). Die Überprüfung des tatsächlichen Betriebs nach der Realisierung kann die Behörde dennoch in den Genehmigungsbedingungen verlangen; maßgeblich ist die konkrete Anforderung."
      },
      {
        question: "Messen Sie den Lärm einer Wärmepumpe oder Lüftung?",
        answer:
          "Ja. Wir führen die Messung für den in der Behördenanforderung genannten geschützten Raum durch. Die Anlage muss in einem Betriebszustand arbeiten, der dem Zweck des Berichts entspricht; den Termin stimmen wir daher vorab ab."
      }
    ],
    sourcesEyebrow: "Geprüfte Informationen",
    sourcesHeading: "Rechtliche Quellen",
    sources: [sourcePublicHealthAct]
  },
  {
    slug: "mereni-pro-kolaudaci",
    title: "Messungen zur Abnahme: Lärm, Beleuchtung und Arbeitsplätze",
    metaDescription:
      "Messungen zur Abnahme eines Betriebs oder Bauwerks: Lärm, Beleuchtung, Mikroklima und Arbeitsumgebung. Senden Sie uns die Anforderung der Hygienestation oder der Baubehörde.",
    h1: "Messungen zur Abnahme — Lärm, Beleuchtung und Arbeitsumgebung",
    intro:
      "Belegen Sie Lärm, Beleuchtung und Arbeitsumgebung in einem koordinierten Auftrag. Den Umfang bestimmen wir anhand des Projekts und der Anforderung der Hygienestation (KHS) oder der Baubehörde.",
    sections: [
      {
        heading: "Was üblicherweise nachgewiesen wird",
        paragraphs: [
          "Am häufigsten der Lärm der Technologie, die Beleuchtung, das Mikroklima und Faktoren der Arbeitsumgebung. Den konkreten Umfang bestimmen der Zweck des Bauwerks und die Stellungnahme der Behörde."
        ]
      },
      {
        heading: "Lärm zur Abnahme",
        paragraphs: [
          "Bei Lüftung (HVAC), Kühlung oder einer Wärmepumpe kann ein Messprotokoll zum Lärm in einem Wohnraum oder einem anderen geschützten Raum verlangt werden. Für einen Entwurf kann eine Lärmstudie besser geeignet sein."
        ]
      },
      {
        heading: "Was Sie uns senden sollten",
        paragraphs: [
          "Es genügen die Anforderung der Behörde, der relevante Teil des Projekts, eine Beschreibung der Technologie, der Standort und der Termin. Fehlende Unterlagen klären wir mit Ihnen."
        ]
      }
    ],
    serviceHref: "/sluzby/pracovni-prostredi",
    contactService: "Kolaudační měření",
    internalLinkPriority: 100,
    layout: "demand",
    eyebrow: "Abnahme und Hygienestation",
    overviewHeading: "Was wir für Sie prüfen",
    highlights: ["Lärm und Akustik", "Beleuchtung und Mikroklima", "Arbeitsumgebung"],
    heroTheme: "mereni-pro-kolaudaci",
    relatedLinks: [
      {
        href: "/sluzby/mereni-hluku",
        label: "Lärmmessung",
        description: "Betrieb, Technologie, HVAC und geschützte Räume."
      },
      {
        href: "/sluzby/mereni-osvetleni",
        label: "Beleuchtungsmessung",
        description: "Kunst- und Tageslicht an Arbeitsplätzen und in Räumen."
      },
      {
        href: "/mereni-hluku-ke-kolaudaci",
        label: "Lärmmessung zur Abnahme",
        description: "Wann eine Lärmstudie genügt und wann eine Messung nötig ist."
      },
      {
        href: "/mereni-nove-haly",
        label: "Messungen für eine neue Halle",
        description: "Gemeinsamer Umfang mehrerer Faktoren der Arbeitsumgebung."
      }
    ],
    faq: [
      {
        question: "Welche Messungen benötigen wir zur Abnahme?",
        answer:
          "Das hängt vom Zweck des Bauwerks, der Technologie und der Anforderung der Hygienestation oder der Baubehörde ab. Am häufigsten werden Lärm, Beleuchtung, Mikroklima und Arbeitsumgebung behandelt."
      },
      {
        question: "Genügt für ein Angebot die Anforderung der Behörde?",
        answer:
          "Für eine erste Einschätzung in der Regel ja. Anschließend fordern wir nur den relevanten Teil des Projekts, eine Beschreibung des Betriebs und die für die konkrete Messung erforderlichen Angaben an."
      }
    ]
  },
  {
    slug: "mereni-nove-haly",
    title: "Messungen für eine neue Produktionshalle: Hygienestation und Abnahme",
    metaDescription:
      "Messungen für eine neue Halle: Lärm, Beleuchtung, Mikroklima, Vibrationen, Staub und chemische Stoffe. Gemeinsamer Umfang für die Hygienestation, Arbeitsplätze und die Abnahme.",
    h1: "Messungen für eine neue Halle und die Arbeitsumgebung",
    intro:
      "Wir erstellen einen gemeinsamen Messumfang nach Technologie, Arbeitsplätzen und der Anforderung der Hygienestation. Sie beauftragen nur die Faktoren, die dem tatsächlichen Betrieb entsprechen.",
    sections: [
      {
        heading: "Was gemessen werden kann",
        paragraphs: [
          "Je nach Produktion kann es um Lärm, Beleuchtung, Mikroklima, Vibrationen, Staub oder chemische Stoffe in der Arbeitsluft gehen."
        ]
      },
      {
        heading: "Wann die Messung geplant werden sollte",
        paragraphs: [
          "Technologie und Arbeitsplätze müssen sich in einem repräsentativen Betriebszustand befinden. Den Termin stimmen wir daher auf die Inbetriebnahme der Halle, die Schichtfolge und das gewünschte Ergebnis ab."
        ]
      },
      {
        heading: "Was Sie uns senden sollten",
        paragraphs: [
          "Hilfreich sind ein Grundriss, eine Beschreibung der Arbeitsplätze und Schichten, eine Liste der Technologien, Sicherheitsdatenblätter und die Anforderung der Hygienestation oder der Baubehörde."
        ]
      }
    ],
    serviceHref: "/sluzby/pracovni-prostredi",
    contactService: "Měření nové haly",
    internalLinkPriority: 90,
    layout: "demand",
    eyebrow: "Neue oder umgebaute Halle",
    overviewHeading: "Umfang nach dem tatsächlichen Betrieb",
    highlights: ["Hygienestation und Kategorisierung", "Mehrere Faktoren in einem Auftrag", "Termin nach Betrieb"],
    heroTheme: "mereni-nove-haly",
    relatedLinks: [
      {
        href: "/sluzby/pracovni-prostredi",
        label: "Arbeitsumgebung",
        description: "Staub, chemische Stoffe, Lärm und Arbeitsplatzkategorisierung."
      },
      {
        href: "/sluzby/mereni-mikroklimatu",
        label: "Mikroklimamessung",
        description: "Temperatur, Feuchte und Luftströmung."
      },
      {
        href: "/pro-stavebni-firmy",
        label: "Unterlagen für Bauunternehmen",
        description: "Messungen und Studien im Anschluss an Projekt und Abnahme."
      }
    ],
    faq: [
      {
        question: "Welche Faktoren werden in einer neuen Halle gemessen?",
        answer:
          "Je nach Betrieb kann es sich um Lärm, Beleuchtung, Mikroklima, Hitzebelastung, Vibrationen, Staub oder chemische Stoffe handeln. Der Umfang richtet sich nach der Arbeit und dem Zweck des Ergebnisses."
      },
      {
        question: "Muss die Technologie bereits in Betrieb sein?",
        answer:
          "Zur Messung der tatsächlichen Exposition und des Betriebslärms muss sich die jeweilige Technologie in einem repräsentativen Betriebszustand befinden. Den Termin planen wir daher nach der Bereitschaft der Halle."
      },
      {
        question: "Was sollen wir für ein Angebot zur Hallenmessung senden?",
        answer:
          "Hilfreich sind ein Grundriss, eine Beschreibung der Arbeitsplätze und Schichten, eine Liste der Technologien, Sicherheitsdatenblätter und die Anforderung der Hygienestation oder der Baubehörde."
      }
    ]
  },
  {
    slug: "pro-stavebni-firmy",
    title: "Projektunterlagen für Bauunternehmen und Planer",
    metaDescription:
      "Projektunterlagen für Bauunternehmen und Planer: Lärm- und Ausbreitungsstudien, Fachgutachten, UVP und technische Anlagen.",
    h1: "Studien und Unterlagen zum Projekt",
    intro:
      "Wir erstellen Ausbreitungs- und Lärmstudien, Fachgutachten, UVP und technische Anlagen nach Projekt, Technologie und Anforderung der Behörde.",
    sections: [
      {
        heading: "Unterlagen vor der Realisierung",
        paragraphs: [
          "Für einen geplanten Zustand kann eine Lärm- oder Ausbreitungsstudie, ein Fach- oder Akustikgutachten, eine UVP oder eine technische Anlage zum Projekt erforderlich sein."
        ]
      },
      {
        heading: "Überprüfung nach der Realisierung",
        paragraphs: [
          "Nach der Installation der Technologien lassen sich Lärm, Beleuchtung, Mikroklima und Arbeitsumgebung überprüfen. Die Messung planen wir für einen repräsentativen Betrieb."
        ]
      },
      {
        heading: "Was Sie uns senden sollten",
        paragraphs: [
          "Für eine erste Einschätzung genügen ein Lageplan, ein technischer Bericht, die Parameter der Technologien, die Stellungnahme der Behörde, der Standort und der gewünschte Termin."
        ]
      }
    ],
    serviceHref: "/sluzby/eia-posudky-poradenstvi",
    contactService: "Odborné posudky",
    internalLinkPriority: 100,
    layout: "demand",
    eyebrow: "Für Planer und Auftragnehmer",
    overviewHeading: "Unterlagen nach Projektphase",
    highlights: ["Studien vor der Realisierung", "Fachgutachten und UVP", "Unterlagen für die Behörde"],
    heroTheme: "technicke-prilohy",
    relatedLinks: [
      {
        href: "/sluzby/hlukove-studie",
        label: "Lärmstudien",
        description: "Berechnung des Lärms von Technologien, Verkehr und Bauvorhaben."
      },
      {
        href: "/sluzby/rozptylove-studie",
        label: "Ausbreitungsstudien",
        description: "Immissionsbeiträge und Betriebsvarianten des Vorhabens."
      },
      {
        href: "/sluzby/eia-posudky-poradenstvi",
        label: "UVP und Fachgutachten",
        description: "Unterlagen zur Beurteilung eines Vorhabens und für Genehmigungsverfahren."
      }
    ],
    faq: [
      {
        question: "Wann braucht ein Bauunternehmen eine Studie und wann eine Messung?",
        answer:
          "Eine Studie beurteilt in der Regel den geplanten Zustand vor der Realisierung. Eine Messung überprüft den tatsächlichen Zustand nach der Installation oder im Betrieb. Die konkrete Anforderung bestimmen das Projekt und die Verwaltungsbehörde."
      },
      {
        question: "Welche Unterlagen soll der Planer senden?",
        answer:
          "Für eine erste Einschätzung helfen ein Lageplan, ein technischer Bericht, die Parameter der Technologien, die Betriebszeiten, der Verkehr und die Stellungnahmen der zuständigen Behörden."
      },
      {
        question: "Lassen sich Studie und anschließende Abnahmemessung gemeinsam abwickeln?",
        answer:
          "Ja. Es handelt sich jedoch um getrennte Ergebnisse in verschiedenen Projektphasen. Es empfiehlt sich, die Parameter laufend an die tatsächlich installierte Technologie anzupassen."
      }
    ]
  },
  {
    slug: "mereni-hluku-havlickuv-brod",
    title: "Lärmmessung in Havlíčkův Brod: Betriebe und Abnahme",
    metaDescription:
      "Lärmmessung in Havlíčkův Brod und in der Region Vysočina für Betriebe, Arbeitsplätze, Technologien und die Abnahme. NATURCHEM hat seinen Sitz in Havlíčkův Brod.",
    h1: "Lärmmessung in Havlíčkův Brod und in der Region Vysočina",
    intro:
      "Wir messen den Lärm eines Betriebs, einer Technologie oder eines Arbeitsplatzes in Havlíčkův Brod und in der Region Vysočina. Den Zweck der Messung stimmen wir auf die Anforderung der Hygienestation (KHS) oder der Baubehörde ab.",
    sections: [
      {
        heading: "Was wir messen",
        paragraphs: [
          "Produktionsanlagen, HVAC, Kühlung, Verkehr auf dem Betriebsgelände und Lärm am Arbeitsplatz. Der Zweck des Protokolls bestimmt den Messmodus."
        ]
      },
      {
        heading: "Messung oder Studie",
        paragraphs: [
          "Eine Messung überprüft den tatsächlichen Betrieb. Für eine geplante Technologie kann eine Lärmstudie oder ein Akustikgutachten besser geeignet sein."
        ]
      },
      {
        heading: "Was Sie uns senden sollten",
        paragraphs: [
          "Geben Sie die Adresse, die Lärmquelle, die Betriebszeiten, den Zweck des Protokolls und den Termin an. Fügen Sie die Anforderung der Behörde, einen Lageplan oder Fotos bei."
        ]
      }
    ],
    serviceHref: "/sluzby/mereni-hluku",
    contactService: "Měření hluku a akustika",
    areaServed: { type: "AdministrativeArea", name: "Kraj Vysočina" },
    internalLinkPriority: 80,
    layout: "demand",
    eyebrow: "Havlíčkův Brod und die Region Vysočina",
    overviewHeading: "Messungen für Betrieb und Bau",
    highlights: ["Betriebslärm", "Lärm am Arbeitsplatz", "Abnahme und KHS"],
    heroTheme: "mereni-hluku",
    relatedLinks: [
      {
        href: "/mereni-pro-kolaudaci",
        label: "Messungen zur Abnahme",
        description: "Mehrere Messgrößen nach Projekt und Anforderung der Behörde."
      },
      {
        href: "/sluzby/hlukove-studie",
        label: "Lärmstudien",
        description: "Beurteilung eines geplanten Zustands und von Technologien."
      },
      {
        href: "/mereni-hluku-ke-kolaudaci",
        label: "Lärmmessung zur Abnahme",
        description: "Messung oder Lärmstudie je nach Anforderung der Behörde."
      }
    ],
    faq: [
      {
        question: "Messen Sie Lärm in Havlíčkův Brod und in der Region Vysočina?",
        answer:
          "Ja. NATURCHEM hat seinen Sitz in Havlíčkův Brod, den Termin stimmen wir daher direkt ab. Senden Sie die Adresse, eine Beschreibung der Lärmquelle, die Betriebszeiten und die Anforderung der Behörde."
      },
      {
        question: "Woran erkenne ich, ob ich eine Messung oder eine Lärmstudie brauche?",
        answer:
          "Eine Messung überprüft den tatsächlichen Betrieb einer bestehenden Quelle, eine Studie beurteilt den geplanten Zustand. Je nach Anforderung der Hygienestation oder der Baubehörde empfehlen wir das geeignete Vorgehen."
      },
      {
        question: "Was soll ich für eine erste Einschätzung senden?",
        answer:
          "Die Adresse, die Lärmquelle, die Betriebszeiten, den Zweck des Protokolls und den Termin. Fügen Sie die Stellungnahme der Behörde, einen Lageplan oder Fotos bei."
      }
    ]
  },
  {
    slug: "mereni-hluku-praha",
    title: "Lärmmessung in Prag: Technologien, HVAC und Abnahme",
    metaDescription:
      "Lärmmessung in Prag für Betriebsstätten, Technologien, HVAC, Wärmepumpen und die Abnahme. NATURCHEM-Standort in Prag 5.",
    h1: "Lärmmessung in Prag",
    intro:
      "Wir messen den Lärm einer Technologie, von HVAC, einer Wärmepumpe oder einer Betriebsstätte in Prag. Je nach Zweck empfehlen wir eine Messung, eine Studie oder beides nacheinander.",
    sections: [
      {
        heading: "Was wir messen",
        paragraphs: [
          "Außengeräte, Kühlung, Lüftungstechnik, Technikräume und Betriebslärm. Die Anlage muss in einem Betriebszustand laufen, der dem Zweck des Protokolls entspricht."
        ]
      },
      {
        heading: "Messung oder Studie",
        paragraphs: [
          "Eine Messung überprüft eine bestehende Quelle. Für eine geplante Anlage kann eine Lärmstudie oder ein Akustikgutachten besser geeignet sein."
        ]
      },
      {
        heading: "Was Sie uns senden sollten",
        paragraphs: [
          "Geben Sie die Adresse, die Lärmquelle, die Betriebszeiten, den Zweck der Messung und den Termin an. Fügen Sie die Stellungnahme der Behörde, einen Lageplan, ein technisches Datenblatt oder Fotos bei."
        ]
      }
    ],
    serviceHref: "/sluzby/mereni-hluku",
    contactService: "Měření hluku a akustika",
    areaServed: { type: "City", name: "Praha" },
    internalLinkPriority: 90,
    layout: "demand",
    eyebrow: "Prag und Umgebung",
    overviewHeading: "Lärm von Technologien und Betriebsstätten",
    highlights: ["HVAC und Kühlung", "Wärmepumpen", "Abnahme und Nutzungsänderung"],
    heroTheme: "mereni-hluku",
    relatedLinks: [
      {
        href: "/mereni-hluku-tepelneho-cerpadla-vzt",
        label: "Lärm von Wärmepumpen und HVAC",
        description: "Spezialisierte Seite für Außengeräte und Kühlung."
      },
      {
        href: "/mereni-pro-kolaudaci",
        label: "Messungen zur Abnahme",
        description: "Lärm, Beleuchtung und Arbeitsumgebung."
      },
      {
        href: "/mereni-hluku-ke-kolaudaci",
        label: "Lärmmessung zur Abnahme",
        description: "Messung oder Lärmstudie je nach Anforderung der Behörde."
      }
    ],
    faq: [
      {
        question: "Messen Sie Lärm in Prag?",
        answer:
          "Ja. NATURCHEM hat einen Standort in Prag 5. Senden Sie die Adresse, eine Beschreibung der Lärmquelle, die Betriebszeiten und die Anforderung der Behörde, und wir schlagen den Messumfang vor."
      },
      {
        question: "Messen Sie den Lärm einer Wärmepumpe oder von HVAC?",
        answer:
          "Ja. Die Anlage muss in einem Betriebszustand laufen, der dem Zweck des Protokolls entspricht, den Termin stimmen wir daher vorab ab. Für eine geplante Anlage kann eine Lärmstudie besser geeignet sein."
      },
      {
        question: "Was soll ich für eine erste Einschätzung senden?",
        answer:
          "Die Adresse, die Lärmquelle, die Betriebszeiten, den Zweck der Messung und den Termin. Fügen Sie die Stellungnahme der Behörde, einen Lageplan, ein technisches Datenblatt oder Fotos bei."
      }
    ]
  }
];

export function getSeoLanding(slug: string): SeoLanding | undefined {
  return seoLandings.find((l) => l.slug === slug);
}
