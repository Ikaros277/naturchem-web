import { contactFormHref, contactPageHref, contactUrl } from "@/lib/contact-url";
import type { FaqCategory, FaqItem, FaqLink } from "./faq";

const L = {
  z201: "https://www.zakonyprolidi.cz/cs/2012-201",
  v415: "https://www.zakonyprolidi.cz/cs/2012-415",
  p32: "https://krajta.slv.cz/2012/201/par_32",
  ispop: "https://www.ispop.cz/",
  z258: "https://www.zakonyprolidi.cz/cs/2000-258",
  p37: "https://www.zakonyprolidi.cz/cs/2000-258",
  p38: "https://www.zakonyprolidi.cz/cs/2000-258",
  p39: "https://www.zakonyprolidi.cz/cs/2000-258",
  nv272: "https://www.zakonyprolidi.cz/cs/2011-272",
  p30: "https://www.zakonyprolidi.cz/cs/2000-258",
  z100: "https://www.zakonyprolidi.cz/cs/2001-100",
  pril12: "https://krajta.slv.cz/2012/415/pril_12",
  p17: "https://www.zakonyprolidi.cz/cs/2012-201"
} as const;

export const faqPageTitle = "Häufig gestellte Fragen";

export const faqPageIntro =
  "Finden Sie heraus, ob Sie ein Aufmaß, eine Studie oder eine Betriebsanleitung benötigen – und was Sie als Erstdokumentation an ČIŽP, KHS oder an das Bauamt senden können.";

export const faqIntroCtas: FaqLink[] = [
  { label: "Senden Sie Materialien zur Bewertung", href: contactUrl("Nejsem si jistý") }
];

export const faqPageMetadata = {
  absoluteTitle: "FAQ – Emissionsmessungen, Studien, UVP, Berichte und Betriebsvorschriften | NATURCHEM",
  description:
    "Häufig gestellte Fragen zu Emissionsmessungen, Arbeitsplatzumgebung, Lärm, Ausbreitung und Lärmstudien, UVP, Gutachten, Betriebsregeln, ISPOP und Dokumentation für Behörden."
} as const;

export const faqUiLabels = {
  searchLabel: "Suchfragen",
  searchPlaceholder: "z.B. Emissionen, Lärm, KHS, ISPOP",
  categoriesNavAria: "FAQ-Kategorien",
  emptyTitle: "Keine Ergebnisse gefunden",
  emptyText: "Versuchen Sie es mit einem umfassenderen Begriff oder senden Sie uns Ihre Frage über das Kontaktformular.",
  tip: "Empfehlung:",
  legal: "Rechtsgrundlage",
  related: "Verwandte Dienstleistungen:",
  serviceTeaserTitle: "FAQ für diesen Service",
  viewAllCategory: "Alle FAQ anzeigen – {category}"
} as const;

export const faqCategories: FaqCategory[] = [
  {
    id: "obecne",
    title: "Allgemeine Fragen",
    tileLabel: "Allgemeine Fragen",
    ctas: [
      { label: "Fordern Sie einen Service an", href: contactFormHref },
      { label: "Senden Sie Materialien zur Bewertung", href: contactUrl("Nejsem si jistý") }
    ],
    items: [
      {
        q: "Wie ermitteln wir, welchen Service wir benötigen?",
        paragraphs: [
          "Senden Sie eine behördliche Entscheidung oder Anfrage, eine Bedienungsanleitung, eine Projektdokumentation, eine Technologiebeschreibung oder eine kurze Beschreibung der Situation. Anhand dieser Materialien ermitteln wir, ob eine Messung, eine Studie, eine Bewertung, ein Betriebshandbuch, eine UVP-Dokumentation, ein ISPOP oder eine andere Leistung erforderlich ist."
        ],
        links: [
          { label: "Emissionsmessung", href: "/sluzby/mereni-emisi" },
          { label: "Ausbreitungsstudien", href: "/sluzby/rozptylove-studie" },
          { label: "UVP und Projektmeldung", href: "/sluzby/eia-oznameni-zameru" },
          { label: "Kontakt", href: contactPageHref }
        ]
      },
      {
        q: "Was ist der Unterschied zwischen Messung, Studie und Gutachten?",
        paragraphs: [
          "Durch die Messung wird der Ist-Zustand im Betrieb oder in der geschützten Umgebung überprüft. Eine Studie bewertet typischerweise einen erwarteten oder modellierten Zustand – beispielsweise Immissionsbeiträge oder die Lärmsituation. Eine Expertenbewertung bewertet technische, emissionsbezogene und betriebliche Aspekte einer Quelle oder eines Projekts und dient als Expertendokumentation für die Genehmigung."
        ],
        tip: "Nicht sicher? Senden Sie den Genehmigungsantrag, die Beschreibung der Einrichtung und die Anhänge. Je nach Zweck der Leistung unterscheiden wir zwischen Messung, Studie und Bewertung."
      },
      {
        q: "Sind die Ergebnisse für die Behörden akzeptabel?",
        paragraphs: [
          "Ja. Für Protokolle, Studien und Gutachten richten wir uns nach den konkreten Adressaten: Betreiber, Planer, Investor, KHS, ČIŽP, Landesbehörde, Baubehörde oder EIA Verfahren."
        ]
      },
      {
        q: "Wo sind Sie tätig?",
        paragraphs: [
          "Wir sind in Havlíčkův Brod, České Budějovice und Prag ansässig. Abhängig von der Leistungsart, der Erreichbarkeit des Standorts, der repräsentativen Betriebsweise und etwaigen Anmeldefristen wickeln wir auch Projekte in anderen Regionen ab."
        ]
      }
    ]
  },
  {
    id: "emise",
    title: "Emissionsmessung",
    tileLabel: "Emissionsmessung",
    ctas: [
      { label: "Emissionsmessung anfordern", href: contactUrl("Měření emisí") },
      { label: "Betriebserlaubnis zur Begutachtung einsenden", href: contactUrl("Nejsem si jistý") }
    ],
    items: [
      {
        q: "Wann ist eine einmalige Emissionsmessung erforderlich?",
        paragraphs: [
          "Eine einmalige Emissionsmessung ist erforderlich zur regelmäßigen Überprüfung von Verpflichtungen, nach Inbetriebnahme einer Quelle, nach einem Technologie-, Brennstoff- oder Rohstoffwechsel, auf behördliche Anweisung oder als Dokumentation zur Einhaltung von Emissionsgrenzwerten."
        ],
        legal: {
          summary:
            "Regierungsverordnung Nr. 415/2012 Slg. legt Intervalle für einmalige Emissionsmessungen fest, einschließlich der Messung nach der ersten Inbetriebnahme, nach einem Brennstoff- oder Rohstoffwechsel oder nach Arbeiten an der Quellstruktur oder Ausrüstung, die die Emissionen verändern könnten.",
          refs: [{ label: "Regierungsverordnung Nr. 415/2012 Slg.", href: L.v415 }]
        },
        links: [{ label: "Emissionsmessung aus stationären Quellen", href: "/sluzby/mereni-emisi" }]
      },
      {
        q: "Wer darf eine einmalige Emissionsmessung durchführen?",
        paragraphs: [
          "Eine einmalige Emissionsmessung darf nur von einer im jeweiligen Umfang befugten Person durchgeführt werden. Achten Sie bei der Auswahl eines Lieferanten nicht nur auf den Zeitplan, sondern auch auf den Umfang der Berechtigungen und akkreditierten Methoden."
        ],
        legal: {
          summary:
            "§ 32 des Gesetzes Nr. 201/2012 Slg. besagt, dass einmalige Emissionsmessungen, die Erstellung von Gutachten, Ausbreitungsuntersuchungen und die Überprüfung von Emissionsberichten nur durch eine autorisierte Person durchgeführt werden dürfen.",
          refs: [
            { label: "§ 32 des Gesetzes Nr. 201/2012 Slg.", href: L.p32 },
            { label: "Gesetz Nr. 201/2012 Slg.", href: L.z201 }
          ]
        }
      },
      {
        q: "Muss die Emissionsmessung vorab angemeldet werden?",
        paragraphs: [
          "Bei der einmaligen Emissionsmessung sind Meldepflichten zu beachten. ISPOP gibt für das Formular F_OVZ_TERM_JME an, dass der Messtermin mindestens 5 Werktage vor der Messung mitgeteilt werden muss. Die Meldung des Protokolls erfolgt über das Formular F_OVZ_JME."
        ],
        legal: {
          summary: "Datum und Protokoll der einmaligen Emissionsmessung werden über ISPOP mitgeteilt.",
          refs: [{ label: "ISPOP – Emissionsmessung", href: L.ispop }]
        },
        tip: "Berücksichtigen Sie bei der Terminplanung den Meldezeitraum und legen Sie fest, wer die Meldung einreichen soll."
      },
      {
        q: "Wie oft wird eine Emissionsmessung durchgeführt?",
        paragraphs: [
          "Das Intervall hängt von der Art der Quelle, der Klassifizierung, der Betriebserlaubnis und den Durchführungsbestimmungen ab. Im Allgemeinen kann dies beispielsweise einmal pro Kalenderjahr oder einmal alle drei Kalenderjahre für ausgewählte Quellgruppen sein."
        ],
        legal: {
          summary:
            "Abschnitt 3 der Regierungsverordnung Nr. 415/2012 Slg. regelt die Intervalle für einmalige Emissionsmessungen sowie den Fall, dass statt einer Messung eine Berechnung erfolgt.",
          refs: [{ label: "Regierungsverordnung Nr. 415/2012 Slg.", href: L.v415 }]
        }
      },
      {
        q: "Was ist, wenn wir keinen geeigneten Messpunkt haben?",
        paragraphs: [
          "Wir beurteilen den Messpunkt vor der Messung. Wenn der Auslass oder Schornstein nicht ideal ist, schlagen wir eine technisch realisierbare Lösung vor, passen den Zugang an, fügen Flansche hinzu oder beschreiben professionell Einschränkungen und Messrepräsentativität im Protokoll."
        ],
        tip: "Bei Anfragen fügen Sie Fotos des Auslasses, des Schornsteins, des Zugangs, der Flansche und der verfügbaren Projektdokumentation bei."
      },
      {
        q: "Welche Stoffe werden typischerweise bei der Emissionsmessung überwacht?",
        paragraphs: [
          "Je nach Quellentyp, Betriebserlaubnis und Technologieeigenschaften überwachen wir beispielsweise TSP, VOC/TOC, NOx, CO, SO₂, O₂, HCl, HF, Metalle oder andere Stoffe."
        ]
      },
      {
        q: "Was erhalten wir nach der Emissionsmessung?",
        paragraphs: [
          "Sie erhalten ein Protokoll oder einen Bericht mit Beschreibung der Quelle, der Betriebsbedingungen, der verwendeten Methoden, der Messwerte und der Bewertung anhand von Grenzwerten oder Genehmigungsanforderungen. Für eine autorisierte Messung müssen die Daten vollständig und genau sein und auf der angewandten Methodik basieren."
        ],
        legal: {
          summary:
            "Gesetz Nr. 201/2012 Slg. verlangt von der autorisierten Person, autorisierte Tätigkeiten professionell durchzuführen und genaue und vollständige Daten bereitzustellen.",
          refs: [{ label: "Gesetz Nr. 201/2012 Slg.", href: L.z201 }]
        }
      }
    ]
  },
  {
    id: "pracovni-prostredi",
    title: "Arbeitsplatzumgebung und Jobkategorisierung",
    tileLabel: "Arbeitsumgebung",
    ctas: [
      { label: "Fordern Sie eine Messung der Arbeitsplatzumgebung an", href: contactUrl("Měření pracovního prostředí") },
      { label: "Sicherheitsdatenblätter und Arbeitsplatzbeschreibung zusenden", href: contactUrl("Nejsem si jistý") }
    ],
    items: [
      {
        q: "Wann ist eine Messung der Arbeitsplatzumgebung erforderlich?",
        paragraphs: [
          "Die Messung der Arbeitsumgebung wird bei der Arbeitsplatzkategorisierung, beim Technologiewechsel, bei einem neuen Arbeitsplatz, bei KHS-Unterweisungen oder bei der Überprüfung der Mitarbeiterexposition berücksichtigt."
        ],
        links: [{ label: "Messung der Arbeitsplatzumgebung", href: "/sluzby/pracovni-prostredi" }]
      },
      {
        q: "Welche Faktoren der Arbeitsplatzumgebung messen Sie?",
        paragraphs: [
          "Typischerweise Staub, chemische Substanzen in der Luft am Arbeitsplatz, Lärm, Vibration, Beleuchtung, Mikroklima und andere Faktoren, abhängig von den Merkmalen des Arbeitsplatzes, der Technologie und der Arbeitsaktivität."
        ]
      },
      {
        q: "Kann die Messung als Dokumentation zur Berufseinstufung dienen?",
        paragraphs: [
          "Ja. Ergebnisse der Messung der Arbeitsumgebung werden häufig als Dokumentation für die Berufseinstufung oder -neueinstufung verwendet."
        ],
        legal: {
          summary:
            "§ 37 des Gesetzes Nr. 258/2000 Slg. sieht vor, dass Arbeitsplätze entsprechend dem Auftreten und Risiko von Faktoren, die sich auf die Gesundheit der Arbeitnehmer auswirken können, in vier Kategorien eingeteilt werden.",
          refs: [{ label: "Gesetz Nr. 258/2000 Slg.", href: L.p37 }]
        }
      },
      {
        q: "Wer darf die Messung zur Berufseinstufung durchführen?",
        paragraphs: [
          "Messungen zur Einstufung in die Kategorie 2, 3 oder 4 dürfen vom Arbeitgeber nur durch einen Inhaber einer Akkreditierungsurkunde oder Berechtigung für die entsprechenden Messungen durchgeführt werden, es sei denn, der Arbeitgeber verfügt über eine entsprechende Qualifikation."
        ],
        legal: {
          summary: "§ 38 des Gesetzes Nr. 258/2000 Slg. regelt die Messung zur Berufskategorisierung.",
          refs: [{ label: "§ 38 des Gesetzes Nr. 258/2000 Slg.", href: L.p38 }]
        }
      },
      {
        q: "Was ist gefährliche Arbeit?",
        paragraphs: [
          "Als gefährliche Arbeiten gelten Arbeiten der Kategorie 3 oder 4 sowie Arbeiten der Kategorie 2, die von der zuständigen Gesundheitsbehörde als solche eingestuft werden."
        ],
        legal: {
          summary: "§ 39 des Gesetzes Nr. 258/2000 Slg. definiert gefährliche Arbeit.",
          refs: [{ label: "§ 39 des Gesetzes Nr. 258/2000 Slg.", href: L.p39 }]
        }
      },
      {
        q: "Welche Materialien sollten wir zur Messung der Arbeitsplatzumgebung einsenden?",
        paragraphs: [
          "Eine Beschreibung der Arbeitsaktivitäten, der Schichtlänge, der Anzahl der Arbeiter, der verwendeten Rohstoffe, der Sicherheitsdatenblätter, des Betriebsregimes, der Belüftung, der Arbeitsabläufe, früherer Protokolle und jeglicher KHS-Kommunikation sind hilfreich."
        ]
      }
    ]
  },
  {
    id: "hluk",
    title: "Lärm, Akustik und Lärmstudien",
    tileLabel: "Lärm und Akustik",
    ctas: [
      { label: "Lärmmessung anfordern", href: contactUrl("Měření hluku a akustika") },
      { label: "Fordern Sie eine Lärmstudie an", href: contactUrl("Hlukové studie") }
    ],
    items: [
      {
        q: "Wann brauchen wir eine Lärmmessung?",
        paragraphs: [
          "Beauftragen Sie Lärmmessungen für Belegungsgenehmigungen, Reklamationen, Technologiewechsel, Neugeräte, Arbeitsplatzbegehungen, Maßnahmenüberprüfungen oder auf Weisung von KHS oder dem Bauamt."
        ],
        links: [{ label: "Lärmmessung und Akustik", href: "/sluzby/mereni-hluku" }]
      },
      {
        q: "Was ist der Unterschied zwischen einer Lärmmessung und einer Lärmstudie?",
        paragraphs: [
          "Die Lärmmessung überprüft den tatsächlichen Zustand an einem bestimmten Ort und zu einem bestimmten Zeitpunkt. Eine Lärmstudie bewertet einen erwarteten oder modellierten Zustand – zum Beispiel eine neue Technologie, einen Industriestandort, Verkehr, HVAC, Wärmepumpe oder betriebliche Änderungen."
        ],
        links: [
          { label: "Lärmstudien", href: "/sluzby/hlukove-studie" },
          { label: "Lärmmessung und Akustik", href: "/sluzby/mereni-hluku" }
        ]
      },
      {
        q: "Welche Standards gelten für die Lärmbewertung?",
        paragraphs: [
          "Dabei kommt es darauf an, ob der Lärm am Arbeitsplatz, im geschützten Außenbereich, im geschützten Außenbereich von Gebäuden oder im geschützten Innenbereich von Gebäuden entsteht."
        ],
        legal: {
          summary:
            "Regierungsverordnung Nr. 272/2011 Slg. regelt hygienische Grenzwerte für Lärm und Vibrationen an Arbeitsplätzen, in geschützten Außen- und Innenbereichen sowie die Methode der Lärm- und Vibrationsmessung und -auswertung für Tag- und Nachtzeiten.",
          refs: [{ label: "Regierungsverordnung Nr. 272/2011 Slg.", href: L.nv272 }]
        }
      },
      {
        q: "Wer ist dafür verantwortlich, dass der Lärm die hygienischen Grenzwerte nicht überschreitet?",
        paragraphs: [
          "Wer Maschinen, Geräte oder eine Anlage, deren Betrieb Lärm erzeugt, nutzt oder bedient, ist verpflichtet, durch technische, organisatorische und sonstige Maßnahmen sicherzustellen, dass der Lärm in geschützten Bereichen die hygienischen Grenzwerte nicht überschreitet."
        ],
        legal: {
          summary: "§ 30 des Gesetzes Nr. 258/2000 Slg. regelt die Pflichten von Personen, die Lärm- oder Vibrationsquellen betreiben.",
          refs: [{ label: "§ 30 des Gesetzes Nr. 258/2000 Slg.", href: L.p30 }]
        }
      },
      {
        q: "Kann Lärm vor der Installation der Technologie behoben werden?",
        paragraphs: [
          "Ja. Bereiten Sie vor der Installation der Technologie eine Lärmstudie oder eine akustische Bewertung vor – so können Sie den Standort der Quelle, die Leistung, die Betriebsart oder Lärmschutzmaßnahmen rechtzeitig anpassen."
        ],
        links: [
          { label: "Lärmstudien", href: "/sluzby/hlukove-studie" },
          { label: "Lärmmessung und Akustik", href: "/sluzby/mereni-hluku" }
        ]
      },
      {
        q: "Schlagen Sie auch Lärmschutzmaßnahmen vor?",
        paragraphs: [
          "Ja. Nach der Messung oder Berechnung können wir Maßnahmen empfehlen – zum Beispiel eine Schallschutzhülle, einen Schirm, einen Schalldämpfer, eine Quellenverlegung, eine Betriebsmodusbeschränkung oder eine Gebäudeänderung."
        ]
      }
    ]
  },
  {
    id: "studie",
    title: "Ausbreitungs- und Lärmstudien",
    tileLabel: "Ausbreitungs- und Lärmstudien",
    ctas: [
      { label: "Fordern Sie eine Ausbreitungsstudie an", href: contactUrl("Rozptylové studie") },
      { label: "Fordern Sie eine Lärmstudie an", href: contactUrl("Hlukové studie") },
      { label: "Projektdokumentation senden", href: contactUrl("Nejsem si jistý") }
    ],
    items: [
      {
        q: "Wann ist eine Ausbreitungsstudie erforderlich?",
        paragraphs: [
          "Erstellen Sie eine Ausbreitungsstudie für eine neue oder geänderte Emissionsquelle, einen Technologiewechsel, eine Kapazitätserhöhung, eine UVP, ein Genehmigungsverfahren oder auf Anweisung der regionalen Behörde."
        ],
        links: [{ label: "Ausbreitungsstudien", href: "/sluzby/rozptylove-studie" }]
      },
      {
        q: "Wer darf eine Ausbreitungsstudie erstellen?",
        paragraphs: ["Eine Ausbreitungsstudie kann von einer autorisierten Person im entsprechenden Umfang erstellt werden."],
        legal: {
          summary:
            "§ 32 des Gesetzes Nr. 201/2012 Slg. zählt die Erstellung von Ausbreitungsstudien zu den Tätigkeiten, die nur von einer autorisierten Person durchgeführt werden dürfen.",
          refs: [{ label: "§ 32 des Gesetzes Nr. 201/2012 Slg.", href: L.p32 }]
        }
      },
      {
        q: "Welche Dokumentation wird für eine Ausbreitungsstudie benötigt?",
        paragraphs: [
          "Typischerweise eine Technologiebeschreibung, Emissionsparameter, Schornsteinhöhe und -durchmesser, Volumenstrom, Temperatur, Betriebsstunden, Standortlayout, Transportdaten, umgebende Entwicklungsdaten und der Studienzweck."
        ]
      },
      {
        q: "Kann eine Ausbreitungsstudie für Varianten erstellt werden?",
        paragraphs: [
          "Ja. Für in Vorbereitung befindliche Projekte können mehrere Technologie-, Stack-, Betriebsmodus-, Kapazitäts- oder Transportintensitätsvarianten verglichen werden. Die Variantenbewertung hilft dem Investor und Planer, eine technisch und ökologisch optimale Lösung zu finden."
        ]
      },
      {
        q: "Wann ist eine Lärmstudie sinnvoll?",
        paragraphs: [
          "Eine Lärmstudie eignet sich vor der Implementierung einer neuen Lärmquelle, während eines Technologiewechsels, für Industriestandorte, HVAC, Wärmepumpen, Transport-, Lager- und Produktionsbetriebe oder als Dokumentation für Bauverfahren, KHS oder UVP."
        ],
        links: [{ label: "Lärmstudien", href: "/sluzby/hlukove-studie" }]
      },
      {
        q: "Welche Unterlagen werden für eine Lärmstudie benötigt?",
        paragraphs: [
          "Typischerweise Projektlayout, Standorte von Lärmquellen, akustische Parameter von Geräten, Betriebsmodus, Transportdaten, Zeichnungen, Standorte von Schutzgebieten und der Studienzweck."
        ]
      }
    ]
  },
  {
    id: "eia",
    title: "UVP, Gutachten, Betriebshandbücher und IPPC",
    tileLabel: "UVP, Gutachten und Betriebshandbücher",
    ctas: [
      { label: "Fordern Sie eine UVP/Projektbenachrichtigung an", href: contactUrl("EIA a oznámení záměru") },
      {
        label: "Fordern Sie eine Expertenbewertung an",
        href: contactUrl("Odborné posudky")
      },
      {
        label: "Fordern Sie eine Bedienungsanleitung an",
        href: contactUrl("Provozní řády")
      }
    ],
    items: [
      {
        q: "Wann sollte eine UVP behandelt werden?",
        paragraphs: [
          "Berücksichtigen Sie die UVP während der Projektvorbereitung – für neue Technologien, Kapazitätsänderungen, Abfall, eine erhebliche Emissions-, Lärm- oder Transportquelle oder Landeingriffe. Eine frühzeitige Bewertung schränkt die Überarbeitung der Dokumentation ein."
        ],
        legal: {
          summary:
            "Gesetz Nr. 100/2001 Slg. besagt, dass der Zweck der Umweltverträglichkeitsprüfung darin besteht, eine objektive Sachverständigendokumentation für den Erlass von Entscheidungen oder Maßnahmen nach Sondergesetzen zu erhalten.",
          refs: [{ label: "Gesetz Nr. 100/2001 Slg.", href: L.z100 }]
        },
        links: [{ label: "UVP und Projektmeldung", href: "/sluzby/eia-oznameni-zameru" }]
      },
      {
        q: "Welche Auswirkungen werden in der UVP bewertet?",
        paragraphs: [
          "Bewertet werden Auswirkungen auf die öffentliche Gesundheit und die Umwelt, einschließlich Auswirkungen auf Tiere, Pflanzen, Ökosysteme, Boden, Wasser, Luft, Klima, Landschaft, natürliche Ressourcen, materielle Güter und Kulturdenkmäler."
        ],
        legal: {
          summary:
            "Der Umfang der Folgenabschätzung ist im Gesetz Nr. 100/2001 Slg. festgelegt; Die Bewertung umfasst die Identifizierung, Beschreibung, Bewertung und Beurteilung wesentlicher direkter und indirekter Projektauswirkungen.",
          refs: [{ label: "Gesetz Nr. 100/2001 Slg.", href: L.z100 }]
        }
      },
      {
        q: "Was ist ein Gutachten im Luftschutz?",
        paragraphs: [
          "Bei einem Expertengutachten werden Quelle, Technologie, Emissionen, betrieblicher Kontext und Zusammenhang mit der Betriebsgenehmigung oder betrieblichen Änderung bewertet. Es dient als Sachverständigendokumentation für Betreiber und Verwaltungsbehörden."
        ],
        legal: {
          summary: "Die Erstellung von Gutachten ist eine genehmigte Tätigkeit gemäß § 32 des Gesetzes Nr. 201/2012 Slg.",
          refs: [{ label: "§ 32 des Gesetzes Nr. 201/2012 Slg.", href: L.p32 }]
        },
        links: [{ label: "Experteneinschätzungen", href: "/sluzby/odborne-posudky" }]
      },
      {
        q: "Was muss eine Quellbetriebsanleitung enthalten?",
        paragraphs: [
          "Ein Betriebshandbuch enthält in der Regel eine Identifizierung der stationären Quellen und der Anlage, Daten zur Auslegungskapazität, eine Beschreibung der technologischen Abläufe, Methoden zur Betriebssteuerung und -überwachung, ein Blockdiagramm sowie Daten zu Schornsteinen, Schornsteinen und Geräten zur Emissionsreduzierung."
        ],
        legal: {
          summary:
            "Anhang Nr. 12 der Regierungsverordnung Nr. 415/2012 Slg. legt Anforderungen an das Betriebshandbuch fest, einschließlich der Quellenidentifizierung, der Entwurfskapazität und der Beschreibung der technologischen Abläufe.",
          refs: [{ label: "Anhang Nr. 12 der Regierungsverordnung Nr. 415/2012 Slg.", href: L.pril12 }]
        }
      },
      {
        q: "Können Sie bei einer Betriebsgenehmigungsänderung helfen?",
        paragraphs: [
          "Ja. Wir helfen bei der Erstellung technischer Dokumentationen, Beschreibungen von Technologieänderungen, Links zur Emissionsmessung, Betriebsanleitungen, Ausbreitungsstudien, Gutachten oder anderen Anhängen entsprechend den behördlichen Anforderungen."
        ]
      },
      {
        q: "Befassen Sie sich auch mit IPPC?",
        paragraphs: [
          "Ja. Je nach Projektumfang erstellen oder ergänzen wir Dokumentationen für integrierte Genehmigungen und deren Änderungen, insbesondere in Bezug auf Luftqualität, Lärm, Abfall, Betriebsweise und technische Quellenparameter."
        ],
        links: [{ label: "IPPC und integrierte Genehmigungen", href: "/sluzby/ippc-integrovana-povoleni" }]
      }
    ]
  },
  {
    id: "ispop",
    title: "ISPOP, Betriebsaufzeichnungen und Treibhausgasemissionen",
    tileLabel: "ISPOP, GHG und Rekorde",
    ctas: [
      { label: "Fordern Sie ISPOP-/Betriebsunterlagen an", href: contactUrl("ISPOP") },
      { label: "Treibhausgas anfordern", href: contactUrl("Treibhausgas") }
    ],
    items: [
      {
        q: "Können Sie bei ISPOP helfen?",
        paragraphs: [
          "Ja. Wir helfen bei der Erstellung von Dokumentationen, überprüfen Verbindungen zu Emissionsmessungen, Betriebsgenehmigungen, Kraftstoff- oder Rohstoffverbrauch, Betriebsstunden und anderen für die Berichterstattung erforderlichen Daten."
        ],
        links: [{ label: "ISPOP- und Betriebsaufzeichnungen", href: "/sluzby/ispop" }]
      },
      {
        q: "Wer reicht konsolidierte Betriebsunterlagen ein?",
        paragraphs: [
          "Konsolidierte Betriebsaufzeichnungen werden vom Betreiber einer gelisteten stationären Quelle über ISPOP übermittelt, in der Regel bis zum 31. März für das vorangegangene Kalenderjahr."
        ],
        legal: {
          summary:
            "ISPOP listet das Formular F_OVZ_SPE für die Meldung konsolidierter Betriebsaufzeichnungen gemäß Abschnitt 17(3)(c) des Gesetzes Nr. 201/2012 Slg. auf. mit einer Frist bis zum 31. März.",
          refs: [
            { label: "ISPOP", href: L.ispop },
            { label: "§ 17 des Gesetzes Nr. 201/2012 Slg.", href: L.p17 }
          ]
        }
      },
      {
        q: "Wie lange müssen Betriebsunterlagen aufbewahrt werden?",
        paragraphs: [
          "Bewahren Sie für die aufgeführten stationären Quellen die Betriebsaufzeichnungen für den gesetzlich vorgeschriebenen Zeitraum auf, damit sie bei der Inspektion verfügbar sind."
        ],
        legal: {
          summary:
            "§ 17 des Gesetzes Nr. 201/2012 Slg. regelt die Pflichten des Betreibers einer gelisteten stationären Quelle, einschließlich der Führung und Berichterstattung konsolidierter Betriebsaufzeichnungen.",
          refs: [{ label: "Gesetz Nr. 201/2012 Slg.", href: L.z201 }]
        }
      },
      {
        q: "Bieten Sie eine Überprüfung der Treibhausgas-/Treibhausgasemissionen an?",
        paragraphs: [
          "Ja. Für Projekte im Zusammenhang mit Treibhausgasemissionen erstellen oder prüfen wir die Dokumentation entsprechend dem Genehmigungsumfang und den Betreiberanforderungen."
        ],
        legal: {
          summary:
            "§ 32 des Gesetzes Nr. 201/2012 Slg. umfasst die Überprüfung von Emissionsberichten für genehmigte Aktivitäten.",
          refs: [{ label: "§ 32 des Gesetzes Nr. 201/2012 Slg.", href: L.p32 }]
        },
        links: [{ label: "Überprüfung der Treibhausgasemissionen", href: "/sluzby/ghg-overovani" }]
      }
    ]
  },
  {
    id: "poptavka",
    title: "Anfragen, Termine und Dokumentation",
    tileLabel: "Anfragen und Dokumentation",
    ctas: [
      { label: "Fordern Sie einen Service an", href: contactFormHref },
      { label: "Senden Sie Materialien zur Bewertung", href: contactUrl("Nejsem si jistý") }
    ],
    items: [
      {
        q: "Welche Materialien sollten wir mit einer Anfrage senden?",
        paragraphs: [
          "Best Practice ist das Senden einer behördlichen Entscheidung oder Anfrage, einer Projektdokumentation, einer Technologiebeschreibung, des Standorts, der Betriebsart, verfügbarer Protokolle, eines Betriebshandbuchs, Sicherheitsdatenblättern und Fotos von Messpunkten, Schornsteinen oder Lärmquellen."
        ],
        links: [{ label: "Kontakt und Anfrage", href: contactFormHref }]
      },
      {
        q: "Können wir mit einer unvollständigen Dokumentation beginnen?",
        paragraphs: [
          "Ja. Bei unvollständiger Dokumentation ermitteln wir zunächst, was wesentlich ist, was nachträglich ergänzt werden kann und was vom Planer, Betreiber oder Techniklieferanten mitgeliefert werden muss."
        ]
      },
      {
        q: "Können Sie eine Autoritätsanforderung beurteilen?",
        paragraphs: [
          "Ja. Anhand einer KHS-, ČIŽP-, regionalen oder bauaufsichtlichen Anforderung ermitteln wir, welche Art von Leistung benötigt wird und welche Anlagen für das weitere Verfahren maßgebend sind."
        ]
      },
      {
        q: "Kann zunächst eine erste Orientierungsbeurteilung durchgeführt werden?",
        paragraphs: [
          "Ja. Bei komplexeren Projekten führen wir zunächst eine Orientierungsbewertung zu Technik, Messstellen, Lärm, Emissionen oder behördlichen Auflagen durch – und definieren dann den genauen Projektumfang."
        ]
      }
    ]
  }
];

export const faqFlatItemsEn = faqCategories.flatMap((c) => c.items);

export function getFaqCategoryEn(id: string): FaqCategory | undefined {
  return faqCategories.find((c) => c.id === id);
}

export function getFaqTeaserItemsEn(categoryId: string, limit = 5): FaqItem[] {
  const category = getFaqCategoryEn(categoryId);
  if (!category) return [];
  return category.items.slice(0, limit);
}
