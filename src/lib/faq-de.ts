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
  { label: "Senden Sie Materialien zur Bewertung", href: contactUrl("Nejsem si jistý") },
  { label: "Unverbindlich anfragen", href: contactFormHref }
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
  sectorTeaserTitle: "FAQ für diesen Betriebstyp",
  viewAllCategory: "Alle FAQ anzeigen – {category}",
  contactStripLabel: "Schnellkontakt",
  submitMaterialsCta: "Senden Sie Materialien zur Bewertung",
  inquiryCta: "Unverbindlich anfragen",
  categoryItemCount: "{count} Fragen"
} as const;

export const faqCategories: FaqCategory[] = [
  {
    id: "obecne",
    title: "Kontrollen, Behördenaufforderungen und erste Orientierung",
    tileLabel: "Kontrollen und Behördenaufforderungen",
    ctas: [
      { label: "Behördenaufforderung zur Bewertung senden", href: contactUrl("Nejsem si jistý") },
      { label: "Unverbindlich anfragen", href: contactFormHref }
    ],
    items: [
      {
        q: "Wir haben eine Aufforderung von KHS, ČIŽP, der Landesbehörde oder dem Bauamt erhalten. Was sollen wir zuerst tun?",
        paragraphs: [
          "Senden Sie uns zunächst die vollständige Aufforderung einschließlich Anlagen, Entscheidungen, Kontrollprotokolle oder früherer Kommunikation mit der Behörde. Aus dem Wortlaut der Anforderung ermitteln wir, ob die Behörde eine Messung, ein Gutachten, eine Ausbreitungs- oder Lärmstudie, eine Betriebsanleitung, Ergänzungen zum Antrag, eine Änderung der Betriebsgenehmigung oder eine andere fachliche Unterlage verlangt.",
          "Wichtig ist, nicht nur allgemein zu antworten. Die Behörde verlangt in der Regel einen bestimmten Dokumenttyp, einen bestimmten Messumfang oder eine bestimmte Erläuterung des Betriebszustands. Wir helfen zu unterscheiden, was sofort eingereicht werden muss, was später ergänzt werden kann und wo es sinnvoll ist, zuerst den technischen Betriebszustand zu prüfen."
        ]
      },
      {
        q: "Können Sie uns sagen, ob die Anforderung der Behörde angemessen ist?",
        paragraphs: [
          "Ja. Wir können fachlich beurteilen, ob die Anforderung zum Betriebstyp, zur Genehmigung, zur Quelleneinstufung, zu den Technologieeigenschaften und zu den verfügbaren Unterlagen passt. Ist die Anforderung unklar, zu allgemein oder technisch problematisch, kann eine sachliche Stellungnahme oder ein Vorschlag für das weitere Vorgehen erstellt werden.",
          "Ziel ist es nicht, unnötig mit der Behörde zu streiten, sondern die richtige fachliche Unterlage zu liefern und zu verhindern, dass der Betreiber unnötige, unvollständige oder methodisch ungeeignete Messungen beauftragt."
        ]
      },
      {
        q: "Können wir Ihnen nur die Behördenaufforderung ohne weitere Unterlagen senden?",
        paragraphs: [
          "Ja. Die Behördenaufforderung reicht oft für eine erste Orientierung. Anschließend fordern wir nur die Unterlagen an, die für den jeweiligen Fall wirklich erforderlich sind – zum Beispiel die Betriebsgenehmigung, die Betriebsanleitung, die Projektdokumentation, Sicherheitsdatenblätter, Fotos der Technologie, frühere Messprotokolle oder eine Beschreibung des Betriebsregimes."
        ]
      },
      {
        q: "Können Sie auch einen Entwurf der Antwort an die Behörde erstellen?",
        paragraphs: [
          "Ja. In komplexeren Fällen können wir einen sachlichen technischen Antwortentwurf oder Unterlagen zur Ergänzung eines Antrags, eine Stellungnahme zur Kontrolle, eine Begründung des Betriebsregimes oder einen Vorschlag für weitere Messungen erstellen. Den Text formulieren wir so, dass er technisch präzise, angemessen und im Verwaltungsverfahren verwendbar ist."
        ]
      },
      {
        q: "Wie ermitteln wir, welchen Service wir benötigen?",
        paragraphs: [
          "Senden Sie eine behördliche Entscheidung oder Anfrage, eine Betriebsanleitung, eine Projektdokumentation, eine Technologiebeschreibung oder eine kurze Beschreibung der Situation. Anhand dieser Materialien ermitteln wir, ob eine Messung, eine Studie, eine Bewertung, ein Betriebshandbuch, eine UVP-Dokumentation, ein ISPOP oder eine andere Leistung erforderlich ist."
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
          "Ja. Für Protokolle, Studien und Gutachten richten wir uns nach den konkreten Adressaten: Betreiber, Planer, Investor, KHS, ČIŽP, Landesbehörde, Baubehörde oder EIA-Verfahren."
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
      },
      {
        q: "Wie sollen wir uns auf die Emissionsmessung vorbereiten?",
        paragraphs: [
          "Vor der Messung sollten insbesondere der Messpunkt, der sichere Zugang zum Auslass oder Schornstein, das Betriebsregime der Technologie, die Verfügbarkeit des Bedienpersonals und die Möglichkeit, die Anlage mit repräsentativer Leistung zu betreiben, geprüft werden. Außerdem ist es sinnvoll, die Betriebsgenehmigung, die Betriebsanleitung, frühere Protokolle, Brennstoffe oder Rohstoffe, Leistungsdaten und Betriebsaufzeichnungen vorzubereiten.",
          "Bei einigen Quellen muss der Messtermin vorab über ISPOP angemeldet werden. Deshalb ist es sinnvoll, den Termin mit ausreichendem Vorlauf zu planen."
        ]
      },
      {
        q: "Was bedeutet repräsentativer Betrieb bei der Emissionsmessung?",
        paragraphs: [
          "Repräsentativer Betrieb bedeutet, dass die Anlage während der Messung so arbeitet, dass die Ergebnisse dem normalen oder geforderten Betriebszustand entsprechen. Es reicht nicht aus, dass die Quelle nur läuft. Es muss erkennbar sein, bei welcher Leistung, welchem Rohstoff, welchem Brennstoff, welcher Temperatur, welcher Belastung oder welchem Betriebsregime gemessen wurde.",
          "Ist die Technologie zyklisch, chargenweise oder variabel, muss beschrieben werden, welcher Teil des Zyklus gemessen wurde und warum er für die jeweilige Bewertung relevant ist."
        ]
      },
      {
        q: "Was ist, wenn bei der Emissionsmessung ein Grenzwert überschritten wird?",
        paragraphs: [
          "Zuerst muss die Ursache ermittelt werden. Eine Überschreitung kann mit dem technischen Zustand der Anlage, dem Brennstoff, dem Rohstoff, einem falschen Betriebsregime, einem Filterausfall, unzureichender Verbrennung, schlechter Absaugleistung oder einem ungeeigneten Messpunkt zusammenhängen.",
          "In einer solchen Situation helfen wir, das Protokoll, die Betriebsbedingungen und mögliche technische Schritte zu bewerten. Je nach Fall können wir Wartung der Anlage, Anpassung des Betriebsregimes, ergänzende Emissionsminderungstechnik, Wiederholungsmessung oder eine fachliche Stellungnahme für die Behörde vorschlagen."
        ]
      },
      {
        q: "Lassen sich Emissionen auch an Technologien ohne klassischen Schornstein messen?",
        paragraphs: [
          "Das hängt von der konkreten technischen Lösung ab. Hat die Technologie einen Auslass, eine Absaugung, eine lokale Entlüftung oder einen anderen definierten Luftabzug, kann die Messmöglichkeit beurteilt werden. Entweichen Emissionen fugitiv in die Halle oder durch offene Bereiche, ist die Situation komplexer und es kann sinnvoll sein, technische Bewertung, Messung der Arbeitsplatzumgebung, Beurteilung der Lüftung oder einen Absaugsentwurf zu kombinieren.",
          "Im Voraus ist es sinnvoll, Fotos der Anlage, Auslässe, Leitungen, Ventilatoren und des Technologiebereichs zu senden."
        ]
      },
      {
        q: "Ist es besser, zuerst zu messen oder zuerst eine technische Bewertung durchzuführen?",
        paragraphs: [
          "Bei der regulären wiederkehrenden Messung kann die Messung meist direkt geplant werden. Bei neuer, geänderter oder problematischer Technologie ist oft zuerst eine technische Bewertung sinnvoll. Diese hilft zu bestimmen, was gemessen werden soll, wo gemessen werden soll, unter welchem Betriebsregime und ob die Messung eine verwertbare Aussage liefern kann.",
          "Dieses Vorgehen ist besonders geeignet für atypische Technologien, zyklische Betriebe, Verbrennungsanlagen, Trockner, Lackieranlagen, Filteranlagen, Waschanlagen, Pyrolyse- oder thermische Prozesse."
        ]
      }
    ]
  },
  {
    id: "pracovni-prostredi",
    title: "Arbeitsplatzumgebung und Arbeitsplatzkategorisierung",
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
      },
      {
        q: "Wie erkennen wir, welche Faktoren der Arbeitsplatzumgebung wir messen sollen?",
        paragraphs: [
          "Ausgangspunkt sind die konkrete Arbeitsaktivität, verwendete Stoffe, Sicherheitsdatenblätter, Technologie, Schichtlänge, Belüftung, Arbeitsabläufe und die voraussichtliche Exposition der Mitarbeiter. An manchen Arbeitsplätzen ist der Hauptfaktor offensichtlich – zum Beispiel Lärm, Staub oder chemische Stoffe. An anderen ist es sinnvoll, mehrere Faktoren gleichzeitig zu beurteilen – zum Beispiel Lärm, Mikroklima, Beleuchtung, chemische Stoffe und körperliche Belastung."
        ]
      },
      {
        q: "Reicht für die Arbeitsplatzkategorisierung ein Messungstag?",
        paragraphs: [
          "Oft ja, wenn der Messungstag für die normale Arbeit repräsentativ ist. Bei wechselnden Betrieben muss jedoch geprüft werden, ob die Messung typische, risikoreichste oder von der Behörde geforderte Tätigkeit erfasst. Unterscheiden sich die Arbeiten von Tag zu Tag erheblich, kann die Messung durch eine Tätigkeitsbeschreibung, eine Schichtzeitanalyse oder eine Wiederholungsmessung ergänzt werden."
        ]
      },
      {
        q: "Können wir die Arbeitsplatzumgebung messen, wenn ein Mitarbeiter nur einen kurzen Teil der Schicht eine risikoreiche Tätigkeit ausführt?",
        paragraphs: [
          "Ja. Gerade bei solchen Tätigkeiten ist es wichtig, die Expositionsdauer und das Arbeitsregime korrekt zu beschreiben. Das Messergebnis bezieht sich dann auf die tatsächliche Arbeitszeit und kann nach der jeweiligen Methodik und den hygienischen Grenzwerten umgerechnet oder bewertet werden.",
          "Typisch sind zum Beispiel kurzzeitiges Schweißen, Schleifen, Arbeit mit Lösungsmitteln, Reinigung, Mischen chemischer Stoffe oder Wartung der Technologie."
        ]
      },
      {
        q: "Was ist, wenn Mitarbeiter Atemschutzmasken oder andere PSA verwenden?",
        paragraphs: [
          "PSA ist wichtig, ersetzt aber allein keine Beurteilung der Arbeitsplatzumgebung. Bei der Bewertung muss zwischen Schadstoffkonzentration in der Arbeitsluft, technischen und organisatorischen Maßnahmen, Belüftung, Expositionsdauer und tatsächlicher Nutzung der Schutzausrüstung unterschieden werden.",
          "Bei risikoreicheren Arbeiten ist es sinnvoll, nicht nur die Messung, sondern auch das Schutzsystem der Mitarbeiter, Schulungen, Auswahl geeigneter PSA und Kontrolle ihrer Nutzung nachzuweisen."
        ]
      },
      {
        q: "Können Sie eine Arbeitskategorie auf Basis der Messergebnisse empfehlen?",
        paragraphs: [
          "Ja. Auf Basis der Messergebnisse, der Arbeitsbeschreibung und der geltenden Grenzwerte kann eine fachliche Auswertung erstellt werden, die als Grundlage für einen Vorschlag zur Arbeitskategorisierung dient. Die eigentliche Einstufung ist Pflicht des Arbeitgebers und unterliegt den einschlägigen Regeln sowie einer möglichen Beurteilung durch die KHS."
        ]
      }
    ]
  },
  {
    id: "hluk",
    title: "Lärm, Vibration und Akustik",
    tileLabel: "Lärm und Vibration",
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
      },
      {
        q: "Was ist der Unterschied zwischen Lärm am Arbeitsplatz und Lärm in die Umgebung?",
        paragraphs: [
          "Lärm am Arbeitsplatz wird im Hinblick auf die Exposition der Mitarbeiter bewertet. Es geht um den Arbeitsplatz, die Schichtlänge, die Tätigkeit des Arbeitnehmers und arbeitsmedizinische Grenzwerte.",
          "Lärm in die Umgebung wird im Hinblick auf geschützte Außen- oder Innenbereiche bewertet – zum Beispiel bei Wohngebäuden. Es geht um die Auswirkung der Anlage, Technologie, des Verkehrs, von Wärmepumpen, HVAC oder anderen Quellen auf die Umgebung. Das sind zwei unterschiedliche Messungen, unterschiedliche Zwecke und oft unterschiedliche Unterlagen für die Behörde."
        ]
      },
      {
        q: "Wann ist eine Vibrationsmessung erforderlich?",
        paragraphs: [
          "Vibrationsmessungen werden vor allem dann behandelt, wenn Mitarbeiter mit vibrierenden Werkzeugen, Maschinen, Fahrzeugen oder Geräten arbeiten, die Vibrationen auf Hände oder den ganzen Körper übertragen können. Typisch sind Schleifmaschinen, Hämmer, Verdichtungsgeräte, Fördertechnik, Baumaschinen, Traktoren oder Arbeitsmaschinen.",
          "Die Messung kann als Grundlage für die Arbeitskategorisierung, die Risikobewertung oder die Reaktion auf eine KHS-Anforderung dienen."
        ]
      },
      {
        q: "Wann ist es sinnvoll, vor dem Kauf der Technologie eine Lärmstudie durchzuführen?",
        paragraphs: [
          "Vor dem Kauf oder der Installation der Technologie ist eine Lärmstudie immer dann sinnvoll, wenn die Anlage in der Nähe von Wohnbebauung betrieben wird, nachts arbeitet, eine deutliche akustische Leistung hat oder Teil eines größeren Betriebs ist. Typisch sind HVAC-Geräte, Kompressoren, Kühlung, Wärmepumpen, Produktionslinien, Brecher, Förderer, Be- und Entladung, Lager oder Außenhandling.",
          "Eine frühzeitige Bewertung kann verhindern, dass später teure Lärmschutzmaßnahmen nachgerüstet werden müssen."
        ]
      },
      {
        q: "Was ist, wenn sich Nachbarn über Lärm aus unserem Betrieb beschweren?",
        paragraphs: [
          "Zuerst ist es sinnvoll zu unterscheiden, ob der Lärm von einer stationären Quelle, vom Verkehr, vom Handling, von der Technologie, von der Lüftung oder von mehreren Quellen gleichzeitig stammt. Je nach Situation können Lärmmessung, akustische Bewertung oder technische Maßnahmen durchgeführt werden.",
          "Wichtig ist, eine Beschwerde nicht nur nach Schätzung zu lösen. Der Betreiber muss wissen, ob der Lärm tatsächlich über dem Grenzwert liegt, wann eine Überschreitung auftritt und welche Quelle entscheidend ist."
        ]
      }
    ]
  },
  {
    id: "studie",
    title: "Ausbreitungsstudien, Immissionen und Geruch",
    tileLabel: "Ausbreitungsstudien und Geruch",
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
      },
      {
        q: "Was ist der häufigste Fehler bei der Beauftragung einer Ausbreitungsstudie?",
        paragraphs: [
          "Der häufigste Fehler sind unvollständige oder unrealistische Eingangsdaten. Eine Ausbreitungsstudie benötigt eine technisch korrekte Beschreibung der Quellen, Auslässe, Emissionsparameter, Betriebszeiten, Rohstoffe, Kapazität, Verkehr und umgebender Bebauung. Sind die Eingaben zu hoch, zu niedrig oder entsprechen sie nicht dem tatsächlichen Betrieb, kann das Studienergebnis irreführend sein.",
          "Deshalb ist es sinnvoll, die Eingaben vor der Modellierung fachlich zu prüfen."
        ]
      },
      {
        q: "Kann eine Ausbreitungsstudie prüfen, ob eine Erhöhung der Produktionskapazität durchkommt?",
        paragraphs: [
          "Ja. Eine Ausbreitungsstudie kann den bestehenden und den geplanten Zustand oder mehrere Betriebsvarianten vergleichen. Sie ermöglicht die Beurteilung, ob eine Kapazitätserhöhung die Immissionsbeiträge deutlich erhöht und ob das Vorhaben aus Sicht des Luftschutzes vertretbar ist.",
          "Bei größeren Änderungen ist es auch sinnvoll, die Anbindung an die Betriebsgenehmigung, UVP, Gutachten, Betriebsanleitung und Verkehrslärm zu klären."
        ]
      },
      {
        q: "Behandeln Sie auch Geruch aus Betrieben?",
        paragraphs: [
          "Ja. Bei Betrieben mit Geruch können Technologie, Quellen geruchsaktiver Stoffe, Lüftung, Betriebsregime und Möglichkeiten zur Emissionsbegrenzung beurteilt werden. Je nach Situation kann es um fachliche Bewertung, Maßnahmenvorschläge, Messung ausgewählter Stoffe, Ausbreitungsbewertung oder Vorbereitung von Unterlagen für Gespräche mit der Behörde gehen.",
          "Typisch sind Kläranlagen, Abfallanlagen, Kompostieranlagen, Lebensmittelbetriebe, Lackieranlagen, chemische Betriebe, Schlammverarbeitung, landwirtschaftliche Betriebe und bestimmte Produktionstechnologien."
        ]
      },
      {
        q: "Können wir eine Ausbreitungsstudie als Argument nutzen, dass kein zusätzlicher Filter nötig ist?",
        paragraphs: [
          "Manchmal ja, aber es hängt von der konkreten Quelle, den Emissionen, dem Immissionshintergrund, den gesetzlichen Anforderungen und der Anforderung der Behörde ab. Eine Ausbreitungsstudie bewertet die Immissionswirkung in der Umgebung, ersetzt aber allein nicht unbedingt die Pflicht zur Einhaltung von Emissionsgrenzwerten oder zur Anwendung vorgeschriebener technischer Maßnahmen.",
          "Der richtige Ansatz ist, Emissionen, Immissionen, Technologie, Betriebsgenehmigung und verfügbare Maßnahmen gleichzeitig zu beurteilen."
        ]
      }
    ]
  },
  {
    id: "eia",
    title: "UVP, JES, Gutachten und Genehmigung",
    tileLabel: "UVP und Genehmigung",
    ctas: [
      { label: "Fordern Sie eine UVP/Projektbenachrichtigung an", href: contactUrl("EIA a oznámení záměru") },
      {
        label: "Fordern Sie eine Expertenbewertung an",
        href: contactUrl("Odborné posudky")
      },
      {
        label: "Fordern Sie eine Betriebsanleitung an",
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
          "Ein Betriebshandbuch enthält in der Regel eine Identifizierung der stationären Quellen und der Anlage, Daten zur Auslegungskapazität, eine Beschreibung der technologischen Abläufe, Methoden zur Betriebssteuerung und -überwachung, ein Blockdiagramm sowie Daten zu Schornsteinen, Abgasführungen und Geräten zur Emissionsreduzierung."
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
      },
      {
        q: "Wie erkennen wir, ob ein Vorhaben eine UVP oder nur andere Genehmigungen benötigt?",
        paragraphs: [
          "Das hängt von der Art des Vorhabens, der Kapazität, dem Standort, der Betriebsänderung und der Einordnung nach dem Gesetz über die Umweltverträglichkeitsprüfung ab. Bei manchen Vorhaben ist klar, dass eine UVP erforderlich sein wird. Bei anderen muss beurteilt werden, ob es sich um ein unterhalb der Schwelle liegendes Vorhaben, eine Vorhabensänderung, ein Folgeverfahren oder nur um eine fachliche Unterlage für eine andere Genehmigung handelt.",
          "In der Praxis ist es sinnvoll, vor Antragstellung ein vorläufiges Screening durchzuführen."
        ]
      },
      {
        q: "Was ist das einheitliche Umweltgutachten (JES) und wann sollte es behandelt werden?",
        paragraphs: [
          "Das einheitliche Umweltgutachten ist eine zusammengefasste Umweltgrundlage für die Genehmigung eines Vorhabens. In der Praxis kann es mehrere Anforderungen aus dem Umweltbereich verbinden. Für den Investor ist es wichtig, rechtzeitig festzustellen, welche Anlagen benötigt werden – zum Beispiel Lärmstudie, Ausbreitungsstudie, biologische Bewertung, Abfallwirtschaft, Gewässerschutz oder andere fachliche Unterlagen.",
          "Wir helfen zu bestimmen, welche Teile der Umweltdokumentation im Voraus vorbereitet werden sollten."
        ]
      },
      {
        q: "Wann ist ein Gutachten im Luftschutz erforderlich?",
        paragraphs: [
          "Ein Gutachten wird in der Regel bei aufgeführten stationären Quellen, bei der Betriebsgenehmigung, bei Technologieänderungen, bei Brennstoff- oder Rohstoffwechsel, bei Kapazitätserhöhung, bei Anpassung der Rauchgasreinigung oder auf Anforderung der Landesbehörde behandelt. Das Gutachten bewertet technische, emissionsbezogene und betriebliche Zusammenhänge der Quelle und schlägt Bedingungen vor, die dem tatsächlichen Betrieb angemessen sein sollten."
        ]
      },
      {
        q: "Macht es Sinn, ein Gutachten noch vor dem Gespräch mit der Behörde zu erstellen?",
        paragraphs: [
          "Ja, besonders bei komplexeren oder ungewöhnlichen Technologien. Eine vorläufige fachliche Analyse hilft, technische Argumentation vorzubereiten, angemessene Emissionsgrenzwerte, Messhäufigkeit, Betriebsbedingungen und den Umfang der Unterlagen vorzuschlagen. Der Betreiber verhandelt dann mit der Behörde auf Basis von Daten und nicht nur auf Basis einer allgemeinen Technologiebeschreibung."
        ]
      },
      {
        q: "Was ist, wenn sich während des Projekts Technologie, Kapazität oder Betriebsregime ändern?",
        paragraphs: [
          "Eine Änderung von Technologie, Kapazität oder Betriebsregime kann Emissionsmessung, Ausbreitungsstudie, Lärmstudie, Gutachten, Betriebsanleitung und Betriebsgenehmigung beeinflussen. Deshalb ist es sinnvoll, die Änderung zu beurteilen, bevor Unterlagen an die Behörde gesendet werden.",
          "Bei wesentlicheren Änderungen kann es notwendig sein, bereits erstellte Dokumentation zu aktualisieren."
        ]
      }
    ]
  },
  {
    id: "ispop",
    title: "Betriebsvorschriften, Aufzeichnungen und ISPOP",
    tileLabel: "Betriebsvorschriften und ISPOP",
    ctas: [
      { label: "Betriebsanleitung anfordern", href: contactUrl("Provozní řády") },
      { label: "ISPOP / Betriebsaufzeichnungen anfordern", href: contactUrl("ISPOP") }
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
            "ISPOP listet das Formular F_OVZ_SPE für die Meldung konsolidierter Betriebsaufzeichnungen gemäß Abschnitt 17(3)(c) des Gesetzes Nr. 201/2012 Slg. mit einer Frist bis zum 31. März.",
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
      },
      {
        q: "Wann sollte die Betriebsanleitung aktualisiert werden?",
        paragraphs: [
          "Die Betriebsanleitung sollte bei Änderungen von Technologie, Quelle, Kapazität, Brennstoff, Rohstoff, Auslass, Filteranlage, Betriebsregime, Emissionsgrenzwerten oder Bedingungen der Betriebsgenehmigung aktualisiert werden. Eine Aktualisierung ist auch sinnvoll, wenn die Betriebsanleitung den tatsächlichen Zustand der Anlage nicht mehr widerspiegelt."
        ]
      },
      {
        q: "Sollten Anfahren und Stillstand der Technologie in der Betriebsanleitung beschrieben werden?",
        paragraphs: [
          "Ja, wenn diese Betriebszustände für Emissionen oder die sichere Betriebsführung bedeutsam sind. Bei zyklischen, chargenweisen, Verbrennungs-, Trocknungs-, Pyrolyse- oder sonst variablen Technologien ist es sinnvoll, Normalbetrieb, Anfahren, Stillstand, Störzustände und außergewöhnliche Situationen zu beschreiben.",
          "Eine gute Betriebsanleitung sollte nicht nur ein formales Dokument sein. Sie sollte widerspiegeln, wie die Technologie tatsächlich arbeitet."
        ]
      },
      {
        q: "Was muss der Betreiber bei einer Luftschadstoffquelle alles aufzeichnen?",
        paragraphs: [
          "Der Umfang der Aufzeichnungen hängt von der Quellenart und der Betriebsgenehmigung ab. In der Regel werden Betriebszeiten, Verbrauch von Brennstoffen oder Rohstoffen, Produktmengen, Betrieb von Abscheideanlagen, Störungen, Stillstände, Emissionsmessungen, Wartung und weitere für die konsolidierte Betriebsaufzeichnung oder Kontrolle erforderliche Daten erfasst.",
          "Wir helfen, die Aufzeichnungen so einzurichten, dass sie zur Genehmigung passen und bei der Kontrolle praktisch nutzbar sind."
        ]
      },
      {
        q: "Wer reicht Meldungen in ISPOP ein – der Betreiber oder der Messdienstleister?",
        paragraphs: [
          "Die Verantwortung für die Erfüllung der Pflichten liegt beim Betreiber. Einige Schritte können jedoch technisch von einer beauftragten Person vorbereitet oder eingereicht werden. Für jedes Projekt ist es sinnvoll, im Voraus festzulegen, wer den Messtermin meldet, wer das Protokoll einreicht, wer die konsolidierte Betriebsaufzeichnung vorbereitet und wer die Anbindung an die Betriebsgenehmigung prüft."
        ]
      }
    ]
  },
  {
    id: "poptavka",
    title: "Anfrage, Preis und Termine",
    tileLabel: "Preis und Termine",
    ctas: [
      { label: "Unverbindlich anfragen", href: contactFormHref },
      { label: "Senden Sie Materialien zur Bewertung", href: contactUrl("Nejsem si jistý") }
    ],
    items: [
      {
        q: "Was kosten Messung, Studie oder Gutachten?",
        paragraphs: [
          "Der Preis hängt vom Arbeitsumfang, der Technologieart, der Anzahl der Messpunkte, der Anzahl der gemessenen Stoffe, der Verfügbarkeit von Unterlagen, dem Standort, der Komplexität der Berechnung, den Anforderungen der Behörde und dem Termin ab. Bei einfachen Aufträgen kann der Preis schnell festgelegt werden. Bei komplexeren Betrieben ist es zuerst sinnvoll, die Unterlagen zu beurteilen und den Umfang genau abzugrenzen.",
          "Für ein schnelles Angebot hilft es, die Behördenaufforderung, die Betriebsgenehmigung, die Technologiebeschreibung, Fotos, die Projektdokumentation und frühere Protokolle zu senden."
        ]
      },
      {
        q: "Wie lange dauert die Erstellung einer Studie oder eines Gutachtens?",
        paragraphs: [
          "Der Termin hängt vom Auftragsumfang, der Vollständigkeit der Unterlagen, dem Messbedarf, der Komplexität der Technologie und der Anbindung an Planer oder Behörde ab. Am schnellsten geht es, wenn zu Beginn alle verfügbaren Unterlagen einschließlich der Behördenanforderung und des Termins für die Fertigstellung gesendet werden.",
          "Ist der Termin sehr kurz, bestimmen wir zuerst, was realistisch bearbeitet werden kann und was methodisch oder prozessual riskant wäre."
        ]
      },
      {
        q: "Kann ein Auftrag in eine schnelle Vorabbeurteilung und finale Dokumentation aufgeteilt werden?",
        paragraphs: [
          "Ja. Bei komplexeren Fällen ist es oft sinnvoll, zuerst eine schnelle Vorabbeurteilung durchzuführen. Diese hilft, Hauptrisiken, fehlende Unterlagen, erforderliche Messungen und den wahrscheinlichen Umfang der finalen Dokumentation zu bestimmen.",
          "Dieses Vorgehen ist besonders geeignet für neue Technologien, Betriebsänderungen, UVP, IPPC, Geruch, Lärm, Ausbreitungsstudien und strittige Behördenanforderungen."
        ]
      },
      {
        q: "Was sollen wir senden, damit das Angebot nicht nur orientierend ist?",
        paragraphs: [
          "Ideal ist die Behördenaufforderung oder -anforderung, die Betriebsgenehmigung oder frühere Entscheidung, eine kurze Technologiebeschreibung, Betriebsregime und Kapazität, Projektdokumentation oder Standortplan, Fotos der Technologie, Auslässe, Schornsteine, Messpunkte oder Lärmquellen, Sicherheitsdatenblätter verwendeter Stoffe, frühere Protokolle und Studien sowie der gewünschte Fertigstellungstermin.",
          "Je genauer die Unterlagen sind, die wir erhalten, desto präziser lassen sich Preis, Termin und Auftragsumfang festlegen."
        ],
        links: [{ label: "Kontakt und Anfrage", href: contactFormHref }]
      },
      {
        q: "Können wir mit einer unvollständigen Dokumentation beginnen?",
        paragraphs: [
          "Ja. Bei unvollständiger Dokumentation ermitteln wir zunächst, was wesentlich ist, was nachträglich ergänzt werden kann und was vom Planer, Betreiber oder Techniklieferanten mitgeliefert werden muss."
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
