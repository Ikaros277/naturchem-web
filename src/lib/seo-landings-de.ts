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
    title: "Emissionsmessungen an Lackierereien: TOC/VOC und Staub",
    metaDescription:
      "Emissionsmessungen an Lackierereien: TOC/VOC und Staub am Abluftkamin. Bericht für Behörden, Betriebsgenehmigung und ISPOP. Senden Sie uns Ihre Genehmigung.",
    h1: "Emissionsmessungen in Lackierereien und Oberflächenbehandlungen",
    intro:
      "Wir messen Emissionen aus Lackierkabinen, Trocknung und Einbrennen am Abluftkamin: TOC/VOC und gegebenenfalls Staub. Der Umfang richtet sich nach der Betriebsgenehmigung, der Betriebsordnung und dem tatsächlichen Betriebszustand der Anlage.",
    sections: [
      {
        heading: "Was wir in einer Lackiererei messen",
        paragraphs: [
          "Typischerweise messen wir am Abluftkamin **TOC** als Indikator für organische Stoffe (VOC) und je nach Genehmigung oder Technologie einzelne organische Stoffe oder Staub aus Overspray. Hinzu kommen der Abluftvolumenstrom und die Betriebsparameter der Anlage, damit sich das Ergebnis korrekt bewerten lässt.",
          "Leitet die Lackiererei die Abluft über **mehrere Abluftkamine** ab (Kabine, Trocknung, Einbrennen), wird das Emissionsniveau in der Regel an jedem davon ermittelt, sofern die Betriebsgenehmigung nichts anderes festlegt. Das Schema der Abluftkamine gleichen wir daher vor der Beauftragung mit der Genehmigung ab."
        ]
      },
      {
        heading: "So läuft die Messung ab",
        paragraphs: [
          "Anhand von Genehmigung, Betriebsordnung und technischen Datenblättern der Beschichtungsstoffe prüfen wir Quelle, Abluftkamine und Messgrößen. Gemessen wird im Normalbetrieb, also bei üblichem Lackauftrag und mit Filtration im Standardzustand; eine **Messung bei minimaler Produktion** ist möglicherweise nicht verwertbar.",
          "Einmalige Emissionsmessungen führt eine **bevollmächtigte Person** durch. Der Betreiber meldet den Termin in ISPOP mindestens 5 Arbeitstage vor der Messung an, die Protokolldaten werden innerhalb von 60 Tagen über ISPOP gemeldet."
        ]
      },
      {
        heading: "Was Sie uns senden",
        paragraphs: [
          "Die Betriebsgenehmigung und gegebenenfalls die Betriebsordnung, den letzten Bericht, eine Liste oder ein Schema der Abluftkamine, technische Datenblätter und Sicherheitsdatenblätter der Lacke und Verdünner, eine Beschreibung von Filtration oder Abluftreinigung und den geplanten Betriebszustand der Anlage. Hilfreich sind auch Fotos der Messstellen.",
          "Zeigt sich in den Unterlagen, dass die Messung allein nicht ausreicht, weisen wir auf eine **VOC-Bilanz**, die Betriebsordnung oder eine Änderung der Betriebsgenehmigung hin."
        ]
      }
    ],
    serviceHref: "/sluzby/mereni-emisi",
    contactService: "Měření emisí",
    oboryHref: "/provozy-a-technologie/lakovny",
    layout: "demand",
    eyebrow: "Lackierereien und Oberflächenbehandlung",
    overviewHeading: "Von den Abluftkaminen zum Bericht",
    highlights: ["TOC/VOC und Staub am Abluftkamin", "Kabinen, Trocknung und Einbrennen", "Bericht und Daten für ISPOP"],
    heroTheme: "mereni-emisi",
    relatedLinks: [
      {
        href: "/poradna/lakovna-emise-voc-provozni-rad-mereni-a-povoleni-provozu",
        label: "Lackiererei: VOC, Betriebsordnung und Genehmigung",
        description: "VOC-Bilanz, Abluftkamine, Filtration und Betriebsaufzeichnungen einer Lackiererei."
      },
      {
        href: "/poradna/praskova-lakovna-povoleni",
        label: "Pulverbeschichtungsanlage: Genehmigung und Messung",
        description: "Worin sich das Pulverbeschichten unterscheidet und wann Staub oder TOC gemessen wird."
      },
      {
        href: "/sluzby/provozni-rady",
        label: "Betriebsordnungen",
        description: "Betriebsordnung der Lackiererei, abgestimmt auf Genehmigung und Emissionsmessungen."
      },
      {
        href: "/autorizovana-osoba-mereni-emisi",
        label: "Bevollmächtigte Emissionsmessung",
        description: "Wer messen darf, was Sie senden und wie die ISPOP-Anmeldung funktioniert."
      }
    ],
    faq: [
      {
        question: "Was wird bei der Emissionsmessung einer Lackiererei gemessen?",
        answer:
          "Typischerweise TOC als Indikator für organische Stoffe, gegebenenfalls einzelne organische Stoffe oder Staub. Den genauen Umfang legen die Betriebsgenehmigung und die Technologie fest; wir prüfen ihn vor dem Angebot anhand Ihrer Unterlagen."
      },
      {
        question: "Müssen alle Abluftkamine einer Lackiererei gemessen werden?",
        answer:
          "Hat eine Quelle mehrere Abluftkamine, wird das Emissionsniveau in der Regel an jedem davon ermittelt, sofern die Betriebsgenehmigung nichts anderes festlegt. Die Liste der Abluftkamine gleichen wir daher vor der Beauftragung mit der Genehmigung ab."
      },
      {
        question: "Wie soll die Lackiererei während der Messung betrieben werden?",
        answer:
          "Die Messung soll im normalen, repräsentativen Betriebszustand stattfinden: bei üblichem Lackauftrag und mit Filtration im Standardbetriebszustand. Eine Messung bei minimaler Produktion oder in einem Ausnahmezustand ist möglicherweise nicht verwertbar."
      },
      {
        question: "Wird bei einer Pulverbeschichtungsanlage auch Staub gemessen?",
        answer:
          "Maßgeblich ist die gültige Betriebsgenehmigung: Aus ihr geht hervor, ob Staub gemessen wird, an welchem Abluftkamin, mit welchem Grenzwert und in welchem Intervall. Die Verordnung Nr. 415/2012 Sb. legt für das Pulverbeschichten nur für TOC einen spezifischen Grenzwert fest (ab einem projektierten Verbrauch von 10 t/Jahr); für Staub kann ein allgemeiner Grenzwert gelten oder die Landesbehörde setzt in der Genehmigung einen Grenzwert fest."
      }
    ],
    sourcesEyebrow: "Geprüfte Informationen",
    sourcesHeading: "Rechtliche und methodische Quellen",
    sources: [sourceAirAct, sourceDecree415, sourceIspopJme]
  },
  {
    slug: "mereni-emisi-bioplynovych-stanic",
    title: "Emissionsmessungen an Biogasanlagen und Blockheizkraftwerken",
    metaDescription:
      "Emissionsmessung an Motoren von Biogasanlagen und BHKW. Bevollmächtigte Person, Bericht für die tschechische Umweltinspektion und ISPOP. Genehmigung senden.",
    h1: "Emissionsmessungen an Biogasanlagen und Blockheizkraftwerken",
    intro:
      "Wir messen die Emissionen der Motoren von Blockheizkraftwerken auf Biogasanlagen und liefern einen Bericht, der für die Betriebsgenehmigung, die tschechische Umweltinspektion (ČIŽP) und ISPOP verwendbar ist. Der Umfang richtet sich nach der Betriebsgenehmigung, dem Brennstoff Biogas und dem tatsächlichen Betriebszustand des Motors.",
    sections: [
      {
        heading: "Was wir am Motor einer Biogasanlage messen",
        paragraphs: [
          "Wir messen die Emissionen der **Motoren von Blockheizkraftwerken**, die mit Biogas betrieben werden. Für Kolbenmotoren legt die Verordnung Nr. 415/2012 Sb. spezifische Emissionsgrenzwerte für NOx, CO, SO₂ und Staub fest, abhängig von Brennstoff, Nennwärmeinput und Datum der Inbetriebnahme, und enthält eine Sonderregelung für Biogas.",
          "Den genauen Umfang legt jedoch die **Betriebsgenehmigung** fest. Biogas ist kein Erdgas, und bei anderen Brennstoffen als Erdgas kann sich der Beurteilungsumfang deutlich ändern; wir prüfen ihn daher anhand Ihrer Genehmigung und des letzten Berichts, nicht anhand einer Vorlage."
        ]
      },
      {
        heading: "Wann und wie die Messung abläuft",
        paragraphs: [
          "Einmalige Emissionsmessungen führt eine bevollmächtigte Person durch. Der Betreiber meldet den Termin in ISPOP mindestens 5 Arbeitstage vor der Messung an, die Protokolldaten werden innerhalb von 60 Tagen über ISPOP gemeldet.",
          "Die Verordnung verlangt eine Messung **spätestens innerhalb von 4 Monaten** nach der ersten Inbetriebnahme der Quelle, nach einer Änderung des in der Genehmigung angegebenen Brennstoffs und nach jedem Eingriff in Konstruktion oder Ausstattung, der die Emissionen verändern könnte. Gemessen wird bei stabilem Betrieb und repräsentativer Auslastung, daher stimmen wir den Termin auf den Betrieb Ihrer Anlage ab."
        ]
      },
      {
        heading: "Was Sie uns senden und was folgt",
        paragraphs: [
          "Die gültige Betriebsgenehmigung, den letzten Bericht, das technische Datenblatt der Kogenerationseinheit, Angaben zu Brennstoff und Input, die Zahl der Motoren und Abluftkamine, den geplanten Betriebszustand und Fotos der Messstelle. Hat die Anlage mehrere Abluftkamine, wird das Emissionsniveau an jedem davon ermittelt, sofern die Genehmigung nichts anderes festlegt.",
          "Bei betrieblichen Änderungen an einer Biogasanlage werden häufig auch **Lärm, Ausbreitung und UVP-Unterlagen** behandelt. Anschlussstudien erstellen wir je nach Vorhaben und Anforderung der Behörde."
        ]
      }
    ],
    serviceHref: "/sluzby/mereni-emisi",
    contactService: "Měření emisí",
    oboryHref: "/provozy-a-technologie/bioplyn-biometan",
    layout: "demand",
    eyebrow: "Biogasanlagen und Kogeneration",
    overviewHeading: "Von der Genehmigung zum Messbericht",
    highlights: ["Biogas- und BHKW-Motoren", "Bericht für Inspektion und Behörden", "Anbindung an ISPOP"],
    heroTheme: "mereni-emisi",
    relatedLinks: [
      {
        href: "/poradna/kogeneracni-jednotka-emise-hluk-mereni-povoleni-provozu",
        label: "Kogenerationsanlage: Emissionen, Lärm und Genehmigung",
        description: "Worauf Behörden bei der Kogeneration achten: Wärmeinput, Schornstein, Messung und Lärm."
      },
      {
        href: "/poradna/priprava-na-mereni-emisi",
        label: "So bereiten Sie die Quelle vor der Messung vor",
        description: "Genehmigung, ISPOP, Messstelle und repräsentativer Betriebszustand vor dem Termin."
      },
      {
        href: "/autorizovana-osoba-mereni-emisi",
        label: "Bevollmächtigte Emissionsmessung",
        description: "Wer messen darf, was Sie senden und wie die ISPOP-Anmeldung funktioniert."
      },
      {
        href: "/provozy-a-technologie/bioplyn-biometan",
        label: "Biogas, Biomethan und Kogeneration",
        description: "Ausbreitungs- und Lärmstudien sowie UVP-Unterlagen für ein Biogasvorhaben."
      }
    ],
    faq: [
      {
        question: "Welche Stoffe werden am Motor einer Biogasanlage gemessen?",
        answer:
          "Der Umfang richtet sich nach der Betriebsgenehmigung, dem Brennstoff und dem Motortyp. Biogas ist ein anderer Brennstoff als Erdgas, daher leiten wir den Umfang nicht von Kesseln oder Erdgas ab, sondern aus Ihrer Genehmigung und dem letzten Bericht."
      },
      {
        question: "Wann muss nach Inbetriebnahme oder Umbau einer Kogenerationseinheit gemessen werden?",
        answer:
          "Nach der Verordnung Nr. 415/2012 Sb. spätestens innerhalb von 4 Monaten nach der ersten Inbetriebnahme der Quelle, nach einer Änderung des in der Genehmigung angegebenen Brennstoffs oder nach einem Eingriff in Konstruktion oder Ausstattung, der die Emissionen verändern könnte. Die Häufigkeit weiterer Messungen ergibt sich aus der Verordnung und der Betriebsgenehmigung; wir prüfen sie anhand Ihrer Unterlagen."
      },
      {
        question: "Was gilt bei mehreren Motoren oder Abluftkaminen?",
        answer:
          "Leitet eine Quelle Emissionen über mehrere Abluftkamine ab, wird das Emissionsniveau an jedem davon ermittelt, sofern die Betriebsgenehmigung nichts anderes festlegt. Bei der Einstufung der Quelle wird auch das Zusammenwirken mehrerer Einheiten in einem Betrieb beurteilt; vergleichen Sie daher vor der Bestellung den Plan der Abluftkamine mit Ihrer Genehmigung."
      },
      {
        question: "Befassen Sie sich bei Biogasanlagen auch mit Lärm und Ausbreitung?",
        answer:
          "Ja, wir knüpfen an die Messung mit Ausbreitungs- oder Lärmstudien bzw. UVP-Unterlagen an, wenn sich der Betrieb ändert. Unser Branchenüberblick für Biogas und Biomethan umfasst Luftqualität, Geruch, Lärm und Transport; der genaue Umfang hängt von Ihrem Vorhaben und der Anforderung der Behörde ab."
      }
    ],
    sourcesEyebrow: "Geprüfte Informationen",
    sourcesHeading: "Rechtliche und methodische Quellen",
    sources: [sourceAirAct, sourceDecree415, sourceIspopJme]
  },
  {
    slug: "mereni-emisi-drevozpracujicich-provoze",
    title: "Emissionsmessungen bei der Holzverarbeitung: TSP, Kessel, Trockner",
    metaDescription:
      "Emissionsmessungen von Gesamtstaub aus Absaugungen und Filtern, Biomassekesseln und Trocknern in Sägewerken und Tischlereien. Bericht für Behörden.",
    h1: "Emissionsmessungen bei holzverarbeitenden Betrieben",
    intro:
      "Wir messen Gesamtschwebstaub (TSP) aus Absaugungen und Filteranlagen sowie Emissionen von Biomassekesseln und Trocknern in Sägewerken, Tischlereien und bei der Herstellung von Hackschnitzeln und Pellets. Der Umfang richtet sich nach Technologie, Brennstoff und Betriebsgenehmigung, nicht nach einer allgemeinen Vorlage.",
    sections: [
      {
        heading: "Was wir in einem holzverarbeitenden Betrieb messen",
        paragraphs: [
          "Am häufigsten geht es um TSP am Abluftkamin der Absaugung und Filteranlage. Bei einem Biomassekessel oder Trockner richtet sich der Umfang nach der Genehmigung der Quelle, bei der Trocknung von Spänen und Holzfasern kann auch TOC hinzukommen.",
          "Die Holzverarbeitung ist bei einem geplanten Gesamtmaterialverbrauch von 150 m³ oder mehr pro Jahr eine **gelistete stationäre Quelle**. Dann sind Einstufung, Emissionsgrenzwerte, Messpflichten und Betriebsgenehmigung zu prüfen; bei einer kleineren Werkstatt bleiben Arbeitsumfeld, Lärm und Absaugung trotzdem Thema."
        ]
      },
      {
        heading: "Emissionen am Kamin oder Staub am Arbeitsplatz",
        paragraphs: [
          "Emissionsmessung und Messung der Arbeitsplatzluft sind zwei verschiedene Messungen mit unterschiedlichem Zweck. Der Kamin zeigt, was in die Außenluft gelangt, und ist für die Landesbehörde, die tschechische Umweltinspektion (ČIŽP) und die Betriebsgenehmigung relevant. Die Arbeitsplatzluft zeigt, was die Bedienperson an Säge, Schleifmaschine oder CNC-Zentrum einatmet, und ist für die Hygienestation (KHS) und die Arbeitsplatzkategorisierung relevant.",
          "Ein Filter, der die Lage in der Halle verbessert, **belegt noch nicht die Einhaltung des Emissionsgrenzwerts** am Kamin. Beide Sichtweisen planen wir daher gemeinsam nach Technologie und gewünschtem Ergebnis; die Exposition der Beschäftigten behandelt die Staubmessung am Arbeitsplatz."
        ]
      },
      {
        heading: "Was Sie uns senden und wie die Messung abläuft",
        paragraphs: [
          "Senden Sie eine Beschreibung der Technologie und eine Maschinenliste, das verarbeitete Material und seinen geplanten Jahresverbrauch in m³. Ergänzen Sie Angaben zu Absaugung, Filtern und Kaminen, die Betriebszeit, Fotos der Quellen und Kamine sowie vorhandene Genehmigungen oder Entscheidungen; bei einem Biomassekessel geben Sie den Brennstoff an.",
          "Einmalige Emissionsmessungen führt eine **bevollmächtigte Person** durch. Der Betreiber meldet den Termin in ISPOP mindestens 5 Arbeitstage im Voraus an; vor der Messung prüfen wir die Messstelle am Kamin und stimmen einen **repräsentativen Betriebszustand** ab, damit der Bericht den realen Betrieb abbildet."
        ]
      }
    ],
    serviceHref: "/sluzby/mereni-emisi",
    contactService: "Měření emisí",
    oboryHref: "/provozy-a-technologie/drevozpracujici",
    layout: "demand",
    eyebrow: "Sägewerke, Tischlereien und Hackschnitzelproduktion",
    overviewHeading: "Von der Betriebsbeschreibung zum Bericht",
    highlights: ["TSP aus Absaugung und Filtern", "Biomassekessel und Trockner", "Bericht für Behörden und Genehmigung"],
    heroTheme: "mereni-emisi",
    relatedLinks: [
      {
        href: "/poradna/drevozpracujici-provoz-prach-piliny-odsavani-hluk-a-povoleni-zdroje",
        label: "Holzverarbeitung: Staub, Absaugung und Genehmigung der Quelle",
        description: "Der Unterschied zwischen Kaminemissionen, Arbeitsplatzluft und Lärm."
      },
      {
        href: "/mereni-prasnosti",
        label: "Staubmessung am Arbeitsplatz",
        description: "Holzstaub in der Atemzone von Säge-, Schleif- oder CNC-Bedienpersonal."
      },
      {
        href: "/mereni-emisi-kotelen",
        label: "Emissionsmessungen an Kesselanlagen",
        description: "Biomassekessel: NOx, CO, SO₂ und Staub gemäß Genehmigung."
      },
      {
        href: "/autorizovana-osoba-mereni-emisi",
        label: "Bevollmächtigte Emissionsmessung",
        description: "Wer messen darf, was Sie senden und wie die ISPOP-Anmeldung funktioniert."
      }
    ],
    faq: [
      {
        question: "Wann ist ein holzverarbeitender Betrieb eine gelistete Quelle?",
        answer:
          "Die Holzverarbeitung einschließlich Tischlerei und Herstellung von Hackschnitzeln und Pellets ist bei einem geplanten Gesamtmaterialverbrauch von 150 m³ oder mehr pro Jahr eine gelistete stationäre Quelle. Ausnahmen gelten unter anderem für Sägewerksbetriebe in Umschlags- oder Versandlagern (Ablängen von Rundholz); Ihren Fall prüfen wir anhand Ihrer Unterlagen."
      },
      {
        question: "Was wird am Kamin eines holzverarbeitenden Betriebs gemessen?",
        answer:
          "Am häufigsten TSP aus Absaugung und Filtern; bei der Trocknung von Spänen und Holzfasern kann TOC hinzukommen. Bei einem Biomassekessel richten sich die Stoffe nach der Genehmigung der Feuerungsanlage; den genauen Umfang bestimmen stets die Betriebsgenehmigung und die Technologie."
      },
      {
        question: "Genügt die Messung am Kamin oder müssen wir auch Staub am Arbeitsplatz messen?",
        answer:
          "Das sind zwei verschiedene Dinge: Der Kamin zeigt Emissionen in die Außenluft, die Messung in der Atemzone die Exposition der Beschäftigten. Welche Sie benötigen, hängt von der Anforderung der Behörde (Landesbehörde, ČIŽP oder KHS) und der Art des Betriebs ab; die Emissionsmessung ersetzt die Expositionsmessung nicht."
      },
      {
        question: "Dürfen wir in der eigenen Anlage Spanplattenreste verbrennen?",
        answer:
          "Die Verordnung Nr. 415/2012 Sb. (§ 15 Abs. 5) erlaubt das Verbrennen von Spanplatten, Sperrholz, Faserplatten oder anderem verleimtem Holz nur, wenn sie keine halogenierten organischen Verbindungen oder Schwermetalle aus Behandlungen oder Oberflächenveredelungen enthalten, und nur in Feuerungsanlagen mit bestimmter Wärmeleistung. Prüfen Sie den Brennstoff daher stets anhand der Genehmigung und der Verordnung und geben Sie in den Unterlagen für die Messung seine genaue Art an."
      }
    ],
    sourcesEyebrow: "Geprüfte Informationen",
    sourcesHeading: "Rechtliche und methodische Quellen",
    sources: [sourceAirAct, sourceDecree415, sourceIspopJme]
  },
  {
    slug: "mereni-emisi-susaren",
    title: "Emissionsmessungen an Trocknern: Staub, NOx und CO",
    metaDescription:
      "Emissionsmessungen an Getreide-, Biomasse- und Holztrocknern: Staub, NOx und CO laut Genehmigung. Bericht für Behörden und ISPOP. Genehmigung senden.",
    h1: "Emissionsmessungen an Trocknern",
    intro:
      "Wir messen Emissionen von Getreide-, Biomasse- und Holztrocknern sowie angeschlossenen Verbrennungsquellen unter repräsentativen Betriebsbedingungen. Der Umfang richtet sich nach der Betriebsgenehmigung, dem Brennstoff und der Trocknungstechnologie.",
    sections: [
      {
        heading: "Was wir an einem Trockner messen",
        paragraphs: [
          "Der Umfang hängt davon ab, was getrocknet und wie beheizt wird. An Getreide-, Biomasse- und Holztrocknern befassen wir uns typischerweise mit **Staub, NOx und CO** aus der Verbrennung; bei der Trocknung von Holzspänen und Holzfasern kann auch TOC relevant sein.",
          "Hat ein Trockner **mehrere Abluftkamine**, zum Beispiel getrennte Absaugstränge, wird das Emissionsniveau in der Regel an jedem davon ermittelt, sofern die Betriebsgenehmigung nichts anderes festlegt. Ist der Brenner Teil des Trockners, klären wir die Messstelle und ob das Abgas getrennt oder im Gemisch mit der Prozessluft gemessen wird."
        ]
      },
      {
        heading: "So läuft die Messung ab",
        paragraphs: [
          "Anhand der Genehmigung prüfen wir Quelle, Abluftkamine, Brennstoff und Messgrößen. Wir messen bei einer **üblichen Produktionscharge**; bei Chargenbetrieb beschreiben wir vorab den gesamten Produktionszyklus, damit das Ergebnis dem realen Betrieb entspricht.",
          "Im Bericht beschreiben wir den Zustand des Trockners während der Messung, daher benötigen wir Angaben zu Beschickung, Leistung und Menge des verarbeiteten Materials. Einmalige Messungen führt eine **bevollmächtigte Person** durch; der Termin wird in ISPOP mindestens 5 Arbeitstage im Voraus angemeldet, die Protokolldaten innerhalb von 60 Tagen."
        ]
      },
      {
        heading: "Was Sie uns senden",
        paragraphs: [
          "Die Betriebsgenehmigung und gegebenenfalls die Betriebsordnung, den letzten Bericht, eine Beschreibung des Trockners (was und womit getrocknet wird, Brennstoff, Leistung), ein Schema der Abluftkamine und der Filtration, den geplanten Betriebszustand und Fotos der Messstellen.",
          "Wir unterstützen bei den Unterlagen für die Behörde und bei einem **Plan für regelmäßige Messungen**; bei staubigen Betrieben knüpfen wir mit Staubmessungen am Arbeitsplatz an."
        ]
      }
    ],
    serviceHref: "/sluzby/mereni-emisi",
    contactService: "Měření emisí",
    oboryHref: "/provozy-a-technologie/zemedelske-provozy",
    layout: "demand",
    eyebrow: "Getreide-, Biomasse- und Holztrockner",
    overviewHeading: "Von der Trocknungstechnologie zum Bericht",
    highlights: ["Staub, NOx und CO gemäß Genehmigung", "Übliche Charge und mehrere Abluftkamine", "Bericht und Daten für ISPOP"],
    heroTheme: "mereni-emisi",
    relatedLinks: [
      {
        href: "/poradna/priprava-na-mereni-emisi",
        label: "So bereiten Sie die Quelle vor der Messung vor",
        description: "Repräsentativer Betriebszustand, Abluftkamine, Messstelle und ISPOP-Anmeldung."
      },
      {
        href: "/mereni-emisi-drevozpracujicich-provoze",
        label: "Emissionsmessungen bei holzverarbeitenden Betrieben",
        description: "Sägewerke, Trockner, Biomassekesselanlagen und Prozessabluftkamine."
      },
      {
        href: "/poradna/merici-misto-na-vyduchu-proc-je-dulezite-uz-ve-fazi-projektu",
        label: "Messstelle am Abluftkamin",
        description: "Was ein Abluftkamin erfüllen muss, damit sicher und repräsentativ gemessen werden kann."
      },
      {
        href: "/autorizovana-osoba-mereni-emisi",
        label: "Bevollmächtigte Emissionsmessung",
        description: "Wer messen darf, was Sie senden und wie die ISPOP-Anmeldung funktioniert."
      }
    ],
    faq: [
      {
        question: "Muss ich an einem Trockner Emissionen messen?",
        answer:
          "Das hängt vom Quellencode in Anhang Nr. 2 des Gesetzes Nr. 201/2012 Sb., von Kapazität oder Nennwärmeinput und von den Bedingungen der Betriebsgenehmigung ab. Senden Sie uns die Genehmigung oder eine Beschreibung des Trockners, dann prüfen wir, ob und in welchem Umfang die Messung Sie betrifft."
      },
      {
        question: "Was wird an einem Biomasse- oder Holztrockner gemessen?",
        answer:
          "Typischerweise Staub, NOx und CO aus der Verbrennung; bei der Trocknung von Holzspänen und Holzfasern kann auch TOC relevant sein. Den genauen Umfang legen die Betriebsgenehmigung, der Brennstoff und die Technologie fest."
      },
      {
        question: "Wann soll der Trockner während der Messung laufen?",
        answer:
          "Im Normalbetrieb mit einer üblichen Produktionscharge; bei Chargenbetrieb wird der gesamte Produktionszyklus vorab beschrieben. Eine Messung bei minimaler Produktion oder unter ungewöhnlich günstigen Bedingungen ist möglicherweise nicht verwertbar."
      },
      {
        question: "Wann wird nach der Inbetriebnahme eines neuen oder umgebauten Trockners gemessen?",
        answer:
          "Die Verordnung Nr. 415/2012 Sb. verlangt eine einmalige Messung spätestens innerhalb von 4 Monaten nach der Erstinbetriebnahme einer Quelle, nach einer Änderung von Brennstoff oder Rohstoff laut Genehmigung und nach einem Eingriff in Konstruktion oder Ausstattung, der die Emissionen verändern kann. Anhand der Betriebsgenehmigung prüfen wir, ob dies auf Ihren Trockner zutrifft."
      }
    ],
    sourcesEyebrow: "Geprüfte Informationen",
    sourcesHeading: "Rechtliche und methodische Quellen",
    sources: [sourceAirAct, sourceDecree415, sourceIspopJme]
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
      "Emissionsmessungen an Dieselaggregaten und Notstromquellen: NOx, CO, Staub. Wir prüfen anhand von Genehmigung und Betriebsstunden, ob die Messung Sie betrifft.",
    h1: "Emissionsmessungen von Dieselaggregaten und Notstromquellen",
    intro:
      "Wir messen Emissionen von Dieselaggregaten und Notstromquellen und prüfen zunächst mit Ihnen, ob und in welchem Umfang eine Messung Ihre Quelle betrifft. Einmalige Messungen führt eine bevollmächtigte Person durch, der Termin wird in ISPOP angemeldet.",
    sections: [
      {
        heading: "Wann eine Notstromquelle gemessen wird",
        paragraphs: [
          "Ein Dieselaggregat ist ein Kolbenverbrennungsmotor, und maßgeblich ist sein **Nennwärmeinput im Brennstoff** (Feuerungswärmeleistung), nicht die elektrische Leistung auf dem Typenschild des Generators. Ab einem Gesamtinput von 0,3 MW handelt es sich um eine aufgeführte stationäre Quelle; bei mehreren zusammenhängenden Aggregaten werden die Inputs gemeinsam beurteilt.",
          "Bei einer echten Notstromquelle mit **weniger als 300 Betriebsstunden pro Jahr** und ohne besondere Grenzwerte in der Genehmigung kann die Pflicht, den Verschmutzungsgrad zu ermitteln, ganz entfallen. Bei mehr Stunden kann er rechnerisch ermittelt werden, und bei einer Quelle, die nicht mehr echte Notstromquelle ist, kann eine Messung verlangt werden; Ihren Fall prüfen wir anhand der Genehmigung und der Aufzeichnung der Betriebsstunden."
        ]
      },
      {
        heading: "So läuft die Messung ab",
        paragraphs: [
          "Betrifft die Messung die Quelle, prüfen wir anhand der Genehmigung Abgaskamin und Messgrößen; typischerweise sind das NOx, CO und Staub. Gemessen wird bei stabilem Betrieb mit repräsentativer Last, Werte aus dem Anfahren und Abfahren fließen nicht in die Ergebnisse ein.",
          "Einmalige Emissionsmessungen führt eine **bevollmächtigte Person** durch. Der Betreiber meldet den Termin in ISPOP mindestens 5 Arbeitstage vor der Messung an, die Protokolldaten werden innerhalb von 60 Tagen über ISPOP gemeldet."
        ]
      },
      {
        heading: "Was Sie uns senden",
        paragraphs: [
          "Das **technische Datenblatt des Aggregats**, die elektrische Nennleistung und den Nennwärmeinput im Brennstoff, die Brennstoffart, die Zahl der Aggregate im Areal, Lage und Höhe des Abgaskamins, das Testregime und die aktuelle Betriebsgenehmigung.",
          "Fügen Sie bitte auch die **Aufzeichnung der Betriebsstunden** bei; daran prüfen wir, ob die Quelle im Notstrombetrieb bleibt. Anhand der Unterlagen schlagen wir vor, ob eine Emissionsberechnung genügt oder ob Messung, Betriebsgenehmigung, Ausbreitungsstudie oder Lärmstudie nötig sind."
        ]
      }
    ],
    serviceHref: "/sluzby/mereni-emisi",
    contactService: "Měření emisí",
    layout: "demand",
    eyebrow: "Dieselaggregate und Notstromquellen",
    overviewHeading: "Von Genehmigung und Betriebsstunden zur Messung",
    highlights: ["Pflicht anhand der Genehmigung geprüft", "NOx, CO und Staub", "Bevollmächtigte Person und ISPOP"],
    heroTheme: "mereni-emisi",
    relatedLinks: [
      {
        href: "/poradna/zalozni-dieselagregat-emise-povoleni-provozni-hodiny",
        label: "Notstrom-Dieselaggregat: Notstrom oder reguläre Quelle",
        description: "Die Schwelle von 0,3 MW, 300 und 500 Betriebsstunden und Betriebsaufzeichnungen."
      },
      {
        href: "/poradna/zalozni-dieselagregat-emise-hluk-a-povolovaci-podklady",
        label: "Emissionen, Lärm und Genehmigungsunterlagen",
        description: "NOx, CO, Staub, Abgaskamin und Lärm eines Notstromaggregats."
      },
      {
        href: "/rozptylova-studie-povoleni",
        label: "Ausbreitungsstudie für Betriebsgenehmigung",
        description: "Wann eine Behörde sie für eine Notstromquelle verlangen kann und was dazu vorzulegen ist."
      },
      {
        href: "/autorizovana-osoba-mereni-emisi",
        label: "Bevollmächtigte Emissionsmessung",
        description: "Wer messen darf, was Sie senden und wie die ISPOP-Anmeldung funktioniert."
      }
    ],
    faq: [
      {
        question: "Müssen die Emissionen eines Notstrom-Dieselaggregats gemessen werden?",
        answer:
          "Das hängt von den Betriebsstunden, der Einstufung der Quelle und der Betriebsgenehmigung ab. Nach der Stellungnahme des tschechischen Umweltministeriums (MŽP) von 2025 kann bei einer echten Notstromquelle mit weniger als 300 Betriebsstunden pro Jahr und ohne besondere Grenzwerte in der Genehmigung die Pflicht entfallen, den Verschmutzungsgrad durch Messung oder Berechnung zu ermitteln; wir prüfen das anhand Ihrer Unterlagen."
      },
      {
        question: "Wie wird die Schwelle von 0,3 MW beurteilt?",
        answer:
          "Nach dem Nennwärmeinput im Brennstoff, nicht nach der elektrischen Leistung des Generators. Bei mehreren technisch oder betrieblich zusammenhängenden Aggregaten wird deren Gesamtinput beurteilt."
      },
      {
        question: "Zählen Tests zu den Betriebsstunden?",
        answer:
          "In der Regel ja: Neben Notläufen bei Netzausfall werden auch regelmäßige Tests, Wartungsversuche und der Probebetrieb eingerechnet. Die Schwellen von 300 Stunden pro Jahr und 500 Stunden als dreijähriger gleitender Durchschnitt überwachen Sie anhand eines Betriebstagebuchs oder einer Aufzeichnung des Steuerungssystems."
      },
      {
        question: "Muss der Notstrom-Charakter der Quelle in der Betriebsgenehmigung stehen?",
        answer:
          "Nach der Stellungnahme des MŽP soll die Tatsache, dass die Quelle als Notstrom-Energiequelle dient, in der Betriebsgenehmigung angegeben sein; eine Bezeichnung im Projekt genügt nicht. Fehlt sie dort, kann nicht automatisch davon ausgegangen werden, dass das Notstromregime gilt."
      }
    ],
    sourcesEyebrow: "Geprüfte Informationen",
    sourcesHeading: "Rechtliche und methodische Quellen",
    sources: [
      sourceAirAct,
      sourceDecree415,
      sourceIspopJme,
      {
        href: "https://mzp.gov.cz/system/files/2025-08/OOO-Stanovisko_zalozni_zdroje_zjistovani_emisi_RS-2025080804.pdf",
        label: "Stellungnahme des MŽP zur Genehmigung von Notstrom-Energiequellen (2025)",
        description: "Auslegung zur Ermittlung des Verschmutzungsgrades, zu den Schwellen von 300 und 500 Betriebsstunden und zur Angabe des Notstromregimes in der Betriebsgenehmigung."
      }
    ]
  },
  {
    slug: "autorizovana-osoba-mereni-emisi",
    title: "Bevollmächtigte Emissionsmessung an stationären Quellen",
    metaDescription:
      "Einmalige Emissionsmessungen darf nur eine bevollmächtigte Person durchführen. Akkreditiertes Labor Nr. 1599: TZL, NOx, CO, SO₂, TOC, VOC und Schwermetalle. Senden Sie die Betriebsgenehmigung.",
    h1: "Bevollmächtigte Emissionsmessung an Luftschadstoffquellen",
    intro:
      "Einmalige Emissionsmessungen darf nach dem Gesetz nur eine bevollmächtigte Person durchführen. Wir messen Emissionen von Kesselanlagen, Lackierereien, Trocknern und weiteren Quellen und helfen bei der Meldung im ISPOP.",
    sections: [
      {
        heading: "Wer Emissionen messen darf",
        paragraphs: [
          "Einmalige Emissionsmessungen, Fachgutachten, Ausbreitungsstudien und die Verifizierung von Emissionsberichten dürfen nach § 32 des Gesetzes Nr. 201/2012 Sb. nur von einer bevollmächtigten Person durchgeführt werden. Prüfen Sie vor der Bestellung bei jedem Anbieter den Umfang der Bevollmächtigung und der akkreditierten Methoden."
        ]
      },
      {
        heading: "Was wir messen",
        paragraphs: [
          "TZL, NOx, CO, SO₂, O₂, TOC und VOC, HCl und Schwermetalle im akkreditierten Bereich. Den Umfang für Ihre Quelle bestimmt die Betriebsgenehmigung. Anhand der Genehmigung, des Abluftschemas und des Betriebszustands prüfen wir, was und wo gemessen werden soll."
        ]
      },
      {
        heading: "Ablauf",
        paragraphs: [
          "Der Betreiber meldet den Messtermin im ISPOP mindestens 5 Arbeitstage im Voraus an. Wir messen im repräsentativen Betrieb der Quelle, und die Daten aus dem Protokoll werden innerhalb von 60 Tagen über das ISPOP gemeldet. Das Protokoll enthält eine Beschreibung der Quelle, die Betriebsbedingungen, die verwendeten Methoden, die Messwerte und die Bewertung gegenüber dem Grenzwert."
        ]
      }
    ],
    serviceHref: "/sluzby/mereni-emisi",
    contactService: "Měření emisí",
    internalLinkPriority: 110,
    layout: "demand",
    eyebrow: "Luftreinhaltung",
    overviewHeading: "Von den Unterlagen zum verwendbaren Bericht",
    highlights: ["Bevollmächtigte Person", "Akkreditiertes Labor Nr. 1599", "Protokoll und ISPOP-Unterstützung"],
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
    title: "Staubmessung am Arbeitsplatz für KHS und Kategorisierung",
    metaDescription:
      "Staubmessung am Arbeitsplatz: einatembare und alveolengängige Fraktion für KHS und Arbeitsplatzkategorisierung. Akkreditiertes Labor Nr. 1599.",
    h1: "Staubmessungen am Arbeitsplatz",
    intro:
      "Wir messen Staub in der Arbeitsplatzluft, also die einatembare und alveolengängige Fraktion, der Beschäftigte bei der tatsächlichen Arbeit ausgesetzt sind. Das Ergebnis können Sie für die Hygienestation (KHS), die Arbeitsplatzkategorisierung, den Arbeitsschutz und die Beurteilung der Absaugung nutzen.",
    sections: [
      {
        heading: "Was wir beim Staub am Arbeitsplatz beurteilen",
        paragraphs: [
          "Staub ist kein einzelner Parameter, entscheidend sind Staubart, Partikelgröße und Zusammensetzung. Je nach Material und Technologie beurteilen wir, ob die einatembare Fraktion (Gesamtkonzentration) genügt oder ob auch die alveolengängige Fraktion und kristallines Siliziumdioxid zu berücksichtigen sind.",
          "Die Regierungsverordnung Nr. 361/2007 Sb. unterscheidet den Grenzwert PELc für die Gesamtkonzentration (einatembare Fraktion) und PELr für die **alveolengängige Fraktion**. Enthält der Staub eine fibrogene Komponente, müssen stets die alveolengängige Fraktion und die Konzentration der fibrogenen Komponente bestimmt werden."
        ]
      },
      {
        heading: "Arbeitsplatz, Kamin oder Außenfläche",
        paragraphs: [
          "Diese Leistung misst Staub in der Arbeitsplatzluft, also die Exposition der Beschäftigten. Staub, der über einen Kamin in die Außenluft gelangt, behandelt die Emissionsmessung; bei offenen Lagerflächen und dem Umschlag von Schüttgütern können je nach Flächengröße Einstufung der Quelle, Betriebsgenehmigung, Ausbreitungsstudie und Betriebsordnung ein Thema sein.",
          "Typische Beispiele sind Schweißereien und holzverarbeitende Betriebe, in denen zwei Ebenen zusammentreffen: die **Exposition der Beschäftigten** in der Halle und die Emissionen über den Kamin. Die Messung in der Atemzone ersetzt die Emissionsmessung am Kamin nicht und umgekehrt."
        ]
      },
      {
        heading: "Was Sie uns senden und wie wir messen",
        paragraphs: [
          "Senden Sie die Beschreibung der Technologie und der Arbeitstätigkeiten sowie die Liste der verarbeiteten Materialien. Ergänzen Sie Sicherheits- oder technische Datenblätter, Schichtmodell und Expositionsdauer, eine Beschreibung von Absaugung oder Befeuchtung, die verwendete persönliche Schutzausrüstung, eine vorhandene Arbeitsplatzkategorisierung und die Anforderung der KHS.",
          "Die Probenahme richtet sich nach der **tatsächlichen Arbeitstätigkeit** und der charakteristischen Schicht, nicht nach einer visuellen Schätzung der Staubbelastung. Für die Einstufung von Arbeiten in die zweite, dritte oder vierte Kategorie darf nur ein Inhaber eines Akkreditierungszertifikats oder einer Autorisierung messen (§ 38 des Gesetzes Nr. 258/2000 Sb.); die einatembare und die alveolengängige Staubfraktion gehören zum akkreditierten Umfang des Labors Nr. 1599."
        ]
      }
    ],
    serviceHref: "/sluzby/pracovni-prostredi",
    contactService: "Měření pracovního prostředí",
    layout: "demand",
    eyebrow: "Arbeitsumfeld und KHS",
    overviewHeading: "Von der Betriebsbeschreibung zum Staubbericht",
    highlights: ["Einatembare und alveolengängige Fraktion", "Akkreditiertes Labor Nr. 1599", "Unterlagen für KHS und Kategorisierung"],
    heroTheme: "pracovni-prostredi",
    relatedLinks: [
      {
        href: "/poradna/prach-na-pracovisti-celkovy-prach-respirabilni-frakce-a-oxid-kremicity",
        label: "Staub am Arbeitsplatz: Fraktionen und Siliziumdioxid",
        description: "Wann Gesamtstaub, alveolengängige Fraktion und kristallines SiO₂ gemessen werden."
      },
      {
        href: "/mereni-pracovniho-prostredi-kategorizace-praci",
        label: "Messungen zur Arbeitsplatzkategorisierung",
        description: "Wer messen darf und was für die Einstufung von Arbeiten vorzubereiten ist."
      },
      {
        href: "/poradna/svarovna-prach-kovy-odsavani-pracovni-prostredi-a-emise",
        label: "Schweißerei: Staub, Metalle und Absaugung",
        description: "Schweißrauch in der Atemzone und der Unterschied zu Kaminemissionen."
      },
      {
        href: "/poradna/manipulace-se-sypkymi-materialy-kod-12-1-deponie-povoleni",
        label: "Lagerflächen und Umschlag von Schüttgütern",
        description: "Wann eine offene Fläche zur gelisteten Luftschadstoffquelle wird."
      }
    ],
    faq: [
      {
        question: "Wann wird eine Staubmessung am Arbeitsplatz erforderlich?",
        answer:
          "Typischerweise auf Aufforderung der Hygienestation (KHS), bei der Einstufung neuer Arbeiten, nach einer wesentlichen Technologieänderung oder wenn sich das Expositionsniveau nicht zuverlässig schätzen lässt. Den Umfang klären wir anhand der Aufforderung und der Betriebsbeschreibung."
      },
      {
        question: "Worin unterscheiden sich Gesamtstaub und alveolengängige Fraktion?",
        answer:
          "Die Gesamtkonzentration (einatembare Fraktion) umfasst Partikel, die durch Nase oder Mund eingeatmet werden können. Die alveolengängige Fraktion ist der Anteil, der in tiefere Atemwege und bis in die Lungenbläschen vordringt; bei Staub mit fibrogener Komponente, etwa kristallinem Siliziumdioxid, ist sie stets zu bestimmen."
      },
      {
        question: "Genügt bei unserem Material die Messung des Gesamtstaubs?",
        answer:
          "Das hängt von Material und Technologie ab. Bei Beton, Stein, Keramik oder Ziegeln kann kristallines Siliziumdioxid bedeutsam sein, bei Holz die Holzart und beim Schweißen auch die Metalle im Schweißrauch; den Umfang schlagen wir anhand der Betriebsbeschreibung vor."
      },
      {
        question: "Ist das dasselbe wie die Messung von Staub am Kamin oder an einer Lagerfläche?",
        answer:
          "Nein. Diese Leistung beurteilt die Exposition der Beschäftigten in der Arbeitsplatzluft; Staub am Kamin behandelt die Emissionsmessung, Staub von offenen Lagerflächen ein anderes Verfahren nach den Luftschutzvorschriften. Bei der Beauftragung klären wir daher zuerst, um welchen Fall es geht."
      }
    ],
    sourcesEyebrow: "Geprüfte Informationen",
    sourcesHeading: "Rechtliche Quellen",
    sources: [
      sourcePublicHealthAct,
      {
        href: "https://www.zakonyprolidi.cz/cs/2007-361",
        label: "Regierungsverordnung Nr. 361/2007 Sb.",
        description: "Bedingungen für den Gesundheitsschutz bei der Arbeit, einschließlich zulässiger Expositionsgrenzwerte für Staub (PELc, PELr)."
      }
    ]
  },
  {
    slug: "mereni-tezkych-kovu-emise",
    title: "Schwermetallmessungen in Emissionen und Arbeitsplatzluft",
    metaDescription:
      "Schwermetallmessungen (As, Cd, Cr, Ni, Pb, Hg u. a.) in Emissionen stationärer Quellen und in der Arbeitsplatzluft. Akkreditiertes Labor Nr. 1599.",
    h1: "Schwermetallmessungen in Emissionen und Arbeitsplatzluft",
    intro:
      "An stationären Quellen entnehmen wir Schwermetallproben in Flüssigkeit und analysieren die Metalle im akkreditierten Umfang des Labors. Auf Anforderung der Hygienestation (KHS) beurteilen wir auch Metalle in der Arbeitsplatzluft, zum Beispiel beim Schweißen und Schleifen.",
    sections: [
      {
        heading: "Wann Schwermetalle in Emissionen gemessen werden",
        paragraphs: [
          "Ob Metalle gemessen werden, hängt vom Quellentyp und von der Betriebsgenehmigung ab, nicht von einer allgemeinen Vorlage. Die Verordnung Nr. 415/2012 Sb. legt für ausgewählte Quellen spezifische Emissionsgrenzwerte für Metalle fest, zum Beispiel bei der thermischen Abfallbehandlung, der Glasherstellung, dem Schmelzen und Gießen von Zink und seinen Legierungen oder dem Feuerverzinken.",
          "Senden Sie die Betriebsgenehmigung, den letzten Bericht, eine technische Beschreibung der Quelle und des Kamins sowie Fotos der Messstelle. Einmalige Emissionsmessungen führt eine **bevollmächtigte Person** durch; zu messende Stoffe und Umfang prüfen wir vor dem Angebot anhand der Genehmigung."
        ]
      },
      {
        heading: "Wie Metalle in Emissionen entnommen und ausgewertet werden",
        paragraphs: [
          "Bei Emissionen sorgen wir für die Probenahme in Flüssigkeit und die analytische Auswertung der Metalle. Die Verordnung Nr. 415/2012 Sb. führt die Probenahme zur Bestimmung von Schwermetallen unter den Methoden auf, für die ein Akkreditierungszertifikat erforderlich ist.",
          "Zum **akkreditierten Umfang des Labors** gehören zum Beispiel As, Cd, Cr, Co, Ni, Pb, Mn, Zn und Hg; die vollständige Liste steht im Anhang zum Zertifikat Nr. 562/2023. Aus unserer Praxis: An einer Gießmaschine haben wir Staub (TSP) und Zink am Prozessabgaskamin gemessen."
        ]
      },
      {
        heading: "Metalle in der Arbeitsplatzluft: andere Messung, anderer Zweck",
        paragraphs: [
          "Metalle in der Arbeitsplatzluft bewerten die Exposition der Beschäftigten und ersetzen die Emissionsmessung am Kamin nicht. Das betrifft vor allem Schweißereien und Arbeitsplätze mit Metallschleifen, wo je nach Material Metalle wie Mangan, Chrom, Nickel, Zink oder Aluminium in der Atemzone des Schweißers beurteilt werden.",
          "Senden Sie für die Beurteilung eine Liste der geschweißten Materialien und Zusatzwerkstoffe, die Schweißverfahren, Angaben zur Absaugung und eine eventuelle Aufforderung der KHS. Bei Schweißrauch müssen nach der Regierungsverordnung Nr. 361/2007 Sb. auch **toxische Metalle**, zum Beispiel Cr(VI) oder Mn, eigene hygienische Grenzwerte einhalten; vor dem Angebot prüfen wir, ob die benötigten Methoden im akkreditierten Umfang liegen."
        ]
      }
    ],
    serviceHref: "/sluzby/mereni-emisi",
    contactService: "Měření emisí",
    oboryHref: "/provozy-a-technologie/svarovny",
    layout: "demand",
    eyebrow: "Metalle in Emissionen und Arbeitsplatzluft",
    overviewHeading: "Von der Genehmigung zur Bewertung der Metalle",
    highlights: ["Schwermetall-Probenahme in Flüssigkeit", "Akkreditiertes Labor Nr. 1599", "Metalle in Emissionen und am Arbeitsplatz"],
    heroTheme: "mereni-emisi",
    relatedLinks: [
      {
        href: "/autorizovana-osoba-mereni-emisi",
        label: "Bevollmächtigte Emissionsmessung",
        description: "Wer messen darf, was Sie senden und wie die ISPOP-Anmeldung funktioniert."
      },
      {
        href: "/akreditace-autorizace-dokumenty",
        label: "Akkreditierung, Bevollmächtigung und Dokumente",
        description: "Zertifikat des Labors und Anhang mit dem akkreditierten Umfang."
      },
      {
        href: "/poradna/svarovna-prach-kovy-odsavani-pracovni-prostredi-a-emise",
        label: "Schweißerei: Staub, Metalle und Emissionen",
        description: "Arbeitsplatzluft und Kaminemissionen als zwei getrennte Messungen."
      },
      {
        href: "/poradna/priprava-na-mereni-emisi",
        label: "So bereiten Sie die Quelle vor der Messung vor",
        description: "Praktische Prüfung von Genehmigung, Betriebszustand der Quelle und Messstelle."
      }
    ],
    faq: [
      {
        question: "Welche Schwermetalle messen Sie in Emissionen?",
        answer:
          "Zum akkreditierten Umfang des Labors gehören zum Beispiel As, Cd, Cr, Co, Ni, Pb, Mn, Zn und Hg; die vollständige Liste steht im Anhang zum Akkreditierungszertifikat. Welche davon an Ihrer Quelle gemessen werden, bestimmt die Betriebsgenehmigung."
      },
      {
        question: "Werden Schwermetalle an jeder Quelle gemessen?",
        answer:
          "Nein, das hängt vom Quellentyp und von der Betriebsgenehmigung ab. Die Verordnung Nr. 415/2012 Sb. legt für ausgewählte Quellen spezifische Emissionsgrenzwerte für Metalle fest, zum Beispiel bei der thermischen Abfallbehandlung oder dem Schmelzen und Gießen von Zink; Ihren Fall prüfen wir anhand der Genehmigung."
      },
      {
        question: "Muss eine bevollmächtigte Person Schwermetalle in Emissionen messen?",
        answer:
          "Einmalige Emissionsmessungen nach dem Luftschutzgesetz darf nur eine bevollmächtigte Person durchführen. Außerdem gehört die Probenahme zur Bestimmung von Schwermetallen zu den Methoden, für die die Verordnung Nr. 415/2012 Sb. ein Akkreditierungszertifikat verlangt."
      },
      {
        question: "Messen Sie Metalle auch in der Arbeitsplatzluft, zum Beispiel in einer Schweißerei?",
        answer:
          "Ja, wir beurteilen die Exposition der Beschäftigten in Schweißereien und an Arbeitsplätzen mit Metallschleifen, typischerweise Mangan, Chrom, Nickel, Zink oder Aluminium in der Atemzone. Umfang und Eignung der Methoden für Ihren Zweck prüfen wir vor dem Angebot."
      }
    ],
    sourcesEyebrow: "Geprüfte Informationen",
    sourcesHeading: "Rechtliche und methodische Quellen",
    sources: [
      sourceAirAct,
      sourceDecree415,
      {
        href: "https://www.zakonyprolidi.cz/cs/2007-361",
        label: "Regierungsverordnung Nr. 361/2007 Sb.",
        description: "Bedingungen für den Gesundheitsschutz bei der Arbeit, einschließlich der Grenzwerte für Schweißrauch und die darin enthaltenen toxischen Metalle."
      }
    ]
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
