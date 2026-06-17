import type { SectorPageData } from "./sector-pages";

export const sectorPagesEn: Record<string, SectorPageData> = {
  index: {
    metadataTitle: "Anlagen und Technologien – Messung, Studien und Genehmigungsdokumentation",
    metadataDescription:
      "Messungen, Studien und Genehmigungsunterlagen für Kesselanlagen, Lackierereien, Biogasanlagen, Schweißereien, Recycling, landwirtschaftliche Betriebe, HVAC und andere Technologien.",
    eyebrow: "Nach Einrichtungstyp",
    heroTitle: "Einrichtungen und Technologien – Messung, Studien und behördliche Dokumentation",
    heroLead:
      "Sehen Sie, welche Anlagentypen wir mit Messungen, Studien und Genehmigungsunterlagen unterstützen – von Kesselanlagen und Lackierereien über Biogasanlagen bis hin zu Recyclinganlagen, Schweißereien oder HVAC-Außenanlagen.",
    introHeading: "Fertigung, Energie, Landwirtschaft und andere Sektoren",
    introParagraphs: [
      "Wir arbeiten branchenübergreifend – von der Fertigung und Energie über Abfall und Recycling bis hin zu landwirtschaftlichen Betrieben, Lebensmittelverarbeitung und Standorttechnologien. Für jeden Anlagentyp befassen wir uns mit Messungen, Studien und behördlicher Dokumentation im Kontext der spezifischen Technologie und nicht nur mit einer allgemeinen Serviceliste."
    ],
    introMuted:
      "Finden Sie die Branche in Ihrer Nähe – auf jeder Einrichtungsseite sehen Sie typische Situationen, zugehörige Dienstleistungen und den üblichen Ablauf eines Projekts.",
    assessmentHeading: "Sie sind sich nicht sicher, zu welcher Kategorie Ihre Einrichtung gehört?",
    assessmentIntro:
      "Senden Sie uns eine kurze Beschreibung der Anlage, der Technologie, der behördlichen Anforderungen oder der Projektdokumentation. Wir ermitteln, ob eine Messung, eine Studie, ein Gutachten, eine Bedienungsanleitung oder eine andere Dokumentation erforderlich ist.",
    assessmentSubheading: "Was uns bei einer ersten Einschätzung hilft",
    assessmentItems: [
      "kurze Beschreibung der Anlage, Technologie oder des Projekts",
      "Zweck des Auftrags: Messung, Studie, UVP, Bewertung, Betriebshandbuch oder behördliche Anforderung",
      "Verfügbare Dokumentation: Projekt, Betriebsanleitung, Betriebserlaubnis, technische Datenblätter",
      "Daten zu Betriebsart, Kapazität, Stapeln, Lärmquellen oder Transport",
      "Fotos von Technik, Schornsteinen, Messstellen oder der Anlagenumgebung",
      "Jegliche Kommunikation mit KHS, ČIŽP, der Regionalbehörde oder dem Bauamt"
    ]
  },
  lakovny: {
    metadataTitle: "Emissions- und Arbeitsplatzumgebungsmessung in Lackierereien",
    metadataDescription:
      "Branchenübersicht für Lackierereien: VOC/TOC, Absaugung, Filtration, Arbeitsplatzexposition und Dokumentation für Gebietskörperschaften, ČIŽP und KHS.",
    title: "Lackierereien",
    slug: "lakovny",
    intro:
      "In einer Lackierstraße gehen die Freisetzung flüchtiger organischer Verbindungen (VOC) in die Luft und die Belastung am Arbeitsplatz Hand in Hand. Wir messen beides und verknüpfen die Ergebnisse mit der Betriebsanleitung und behördlichen Vorgaben.",
    typicalProblems: [
      "schwankende Emissionen je nach Anwendung und Härtungsmodus",
      "unzureichende oder ungleichmäßige Extraktion",
      "Fehlender Link zur Bedienungsanleitung und zu den Anforderungen der regionalen Behörde / ČIŽP",
      "unvollständige Dokumentation der verwendeten Lösungsmittel und Gemische"
    ],
    docs: [
      "Technische und Sicherheitsdatenblätter der verwendeten Beschichtungen",
      "Beschreibung der Technologie, Betriebsarten und Kapazität der Linie",
      "Fotos von Schornsteinen, Filtern und Messstellen",
      "aktuelle behördliche Entscheidung oder internes Messziel"
    ],
    process: [
      "Wir beurteilen Lackieranlagentechnik, Betriebsweisen und den Zweck der Messung",
      "Wir definieren den Umfang der Emissionen (VOC/TOC, Nebenparameter) und des Arbeitsplatzes",
      "Wir führen Messungen unter repräsentativen Bedingungen durch",
      "Wir erstellen ein Protokoll und empfehlen praktische Maßnahmen"
    ],
    outputs: [
      "Emissions- und/oder Arbeitsplatzumgebungsmessprotokoll",
      "Expertenkommentar zu Ergebnissen und operationellen Risikopunkten",
      "Dokumentation für Verwaltungsverfahren oder interne technische Maßnahmen"
    ],
    pitfalls: [
      "Messung außerhalb des realen Betriebsmodus",
      "Veraltete Dokumentation chemischer Substanzen",
      "Unterschätzung des technischen Zustands der Absaugung und Filtration"
    ],
    relatedServices: [
      { title: "Emissionsmessung", href: "/sluzby/mereni-emisi" },
      { title: "Messung der Arbeitsplatzumgebung", href: "/sluzby/pracovni-prostredi" },
      { title: "Ausbreitungsstudien", href: "/sluzby/rozptylove-studie" }
    ],
    faq: [
      {
        q: "Wann sollte die VOC/TOC-Messung in einer Lackiererei in Angriff genommen werden?",
        a: "Am häufigsten bei der Erfüllung von Bedienungsanleitungen, einem Technologiewechsel oder der Erfüllung einer behördlichen Anforderung."
      },
      {
        q: "Ist auch eine Beurteilung der Arbeitsumgebung erforderlich?",
        a: "Ja – Lackierereien benötigen häufig eine Kombination aus Emissionsmessung und Expositionsbewertung der Mitarbeiter."
      }
    ]
  },
  kotelny: {
    metadataTitle: "Emissionsmessung für Kesselanlagen und Verbrennungsquellen",
    metadataDescription:
      "Branchenübersicht für Kesselanlagen: NOx, CO, O₂, Belastungsarten, Messstellen und Dokumentation für Betreiber und Behörden.",
    title: "Kesselanlagen und Verbrennungsquellen",
    slug: "kotelny",
    intro:
      "Ist in einer Behörde oder Betriebsanweisung eine Messung bei einer bestimmten Belastung vorgeschrieben? Wir liefern ein Emissionsprotokoll, das mit Ihrer Genehmigung und dem tatsächlichen Kesselbetrieb verknüpft ist.",
    typicalProblems: [
      "Messung bei einem nicht repräsentativen Lastmodus",
      "Unklarer Umfang der Komponenten im Rahmen der Behördenentscheidung",
      "unzureichende Beschreibung der Messstelle und der Betriebsbedingungen",
      "Kraftstoffwechsel ohne Aktualisierung der zugehörigen Dokumentation"
    ],
    docs: [
      "Betriebserlaubnisbescheid und Betriebshandbuch",
      "Technische Parameter des Kessels, Brennstoff- und Lastmodi",
      "Angaben zur Messstelle und zum Abgasweg",
      "frühere Protokolle oder ČIŽP / regionale Behördenanforderungen"
    ],
    process: [
      "Wir klären den Zweck der Messung und den rechtlichen Kontext",
      "Wir überprüfen den Messpunkt und die geeignete Betriebsart",
      "Wir führen Messungen durch (NOx, CO, SO₂, O₂, Nebenparameter)",
      "Wir erstellen ein Protokoll und Empfehlungen für die nächsten Schritte"
    ],
    outputs: [
      "Protokoll zur Messung der Verbrennungsquellenemissionen",
      "Bewertung anhand betrieblicher und behördlicher Anforderungen",
      "Expertenempfehlungen für technische oder betriebliche Maßnahmen"
    ],
    pitfalls: [
      "fehlende Verbindung zwischen Messung und Bedienungsanleitung",
      "Ungenaue Kraftstoff- und Betriebsmodusdokumentation",
      "Unterschätzen der Vorbereitung der Messstelle"
    ],
    relatedServices: [
      { title: "Emissionsmessung", href: "/sluzby/mereni-emisi" },
      { title: "Experteneinschätzungen", href: "/sluzby/odborne-posudky" },
      { title: "Ausbreitungsstudien", href: "/sluzby/rozptylove-studie" }
    ],
    faq: [
      {
        q: "Wann ist eine einmalige Emissionsmessung bei einer Kesselanlage erforderlich?",
        a: "Typischerweise bei der Erfüllung behördlicher Entscheidungsbedingungen, beim Technologiewechsel oder im Anschluss an eine Inspektion."
      },
      {
        q: "Können Sie auch den Messpunkt beurteilen?",
        a: "Ja – vor der Messung überprüfen wir die Machbarkeit und Repräsentativität des Messpunkts."
      }
    ]
  },
  svarovny: {
    metadataTitle: "Arbeitsplatzumgebung und Emissionsmessung in Schweißbetrieben",
    metadataDescription:
      "Branchenübersicht für Schweißbetriebe: Staub, Metalle, NOx, Ozon, lokale Absaugung, Auftragskategorisierung und Dokumentation für KHS.",
    title: "Schweißbetriebe",
    slug: "svarovny",
    intro:
      "Benötigen Sie Dokumentation für die Auftragskategorisierung oder den Absaugentwurf in einer Schweißerei? Wir messen Belastung und Lärm und schlagen praktische Maßnahmen vor.",
    typicalProblems: [
      "unvollständige Übersicht über die verwendeten Materialien und Zusatzstoffe",
      "schwankende Belastung je nach Schweißart und Schichtmuster",
      "unzureichende lokale Gewinnung unter realen Produktionsbedingungen",
      "fehlende Verbindung zwischen Ergebnissen und Arbeitsschutz-/KHS-Anforderungen"
    ],
    docs: [
      "Beschreibung der Arbeitsabläufe und Schichtpläne",
      "Materialliste und Sicherheitsdatenblätter",
      "Beschreibung der Absaugung, Belüftung und Anordnung",
      "KHS-Anforderungen oder interne OHS-Ziele"
    ],
    process: [
      "Wir identifizieren die wichtigsten Expositionsfaktoren für den jeweiligen Arbeitsplatz",
      "Wir richten die Messung in einem repräsentativen Betriebsmodus ein",
      "Wir bewerten Ergebnisse in Bezug auf den Zweck (KHS/OHS)",
      "Wir empfehlen praktische technische und organisatorische Maßnahmen"
    ],
    outputs: [
      "Protokoll zur Messung der Arbeitsplatzumgebung",
      "Dokumentation zur Jobkategorisierung",
      "Empfehlungen zur Reduzierung der Mitarbeiterexposition"
    ],
    pitfalls: [
      "Messungen ohne Kenntnis von Schichtplänen und Arbeitsabläufen",
      "Veraltete Sicherheitsdatenblätter",
      "Unterschätzung der lokalen Extraktionseffektivität"
    ],
    relatedServices: [
      { title: "Messung der Arbeitsplatzumgebung", href: "/sluzby/pracovni-prostredi" },
      { title: "Emissionsmessung", href: "/sluzby/mereni-emisi" },
      { title: "Lärmmessung und Akustik", href: "/sluzby/mereni-hluku" }
    ],
    faq: [
      {
        q: "Was ist bei der Messung in einer Schweißerei am wichtigsten?",
        a: "Korrekte Identifizierung der Arbeitsabläufe, Schichtpläne und verwendeten Materialien, einschließlich Sicherheitsdatenblättern."
      },
      {
        q: "Kann die Messung für KHS verwendet werden?",
        a: "Ja – wir bereiten die Ausgabe als Dokumentation für administrative und interne Zwecke auf."
      }
    ]
  },
  sklarstvi: {
    metadataTitle: "Emissionsmessung und Sachverständigendokumentation für Glasbetriebe",
    metadataDescription:
      "Branchenübersicht für die Glasherstellung: Ofenquellen, Messpunkte, Filterung, Betriebsarten und Link zur Genehmigungsdokumentation.",
    title: "Glasbetriebe",
    slug: "sklarstvi",
    intro:
      "Bei Ofenquellen kommt es sowohl auf den Messmodus als auch auf den Messpunkt an. Wir erstellen Emissions-, Ausbreitungs- und Betriebsdokumentationen für Glasbetriebe.",
    typicalProblems: [
      "instabiler oder zyklischer Ofenbetrieb während der Messung",
      "eingeschränkter Zugang zu Messpunkten",
      "Unklarer Zusammenhang zwischen Messergebnissen und Betriebsdokumentation",
      "Unterschätzen Sie die Verbindung zu Filter- und Trenngeräten"
    ],
    docs: [
      "Technische Beschreibung des Ofens und der nachgeschalteten Technologie",
      "Bedienungsanleitung und relevante Entscheidungsvoraussetzungen",
      "Fotodokumentation von Stapeln und Messstellen",
      "Beschreibung der geplanten Betriebsart während der Messung"
    ],
    process: [
      "Wir bewerten technologische Bedingungen und Messziele",
      "Wir überprüfen die Messpunkte und den Ausführungsmodus",
      "Wir führen Emissions- und Nebenparametermessungen durch",
      "Wir bereiten die kommentierten Ausgaben für betriebliche und administrative Zwecke auf"
    ],
    outputs: [
      "Emissionsmessprotokoll",
      "Bewertung des betrieblichen Kontexts",
      "Expertenempfehlungen für weitere Schritte"
    ],
    pitfalls: [
      "Messung ohne repräsentativen Ofenmodus",
      "unzureichende Beschreibung der technischen Bedingungen der Quelle",
      "unvollständige Dokumentation für Folgeverfahren"
    ],
    relatedServices: [
      { title: "Emissionsmessung", href: "/sluzby/mereni-emisi" },
      { title: "Ausbreitungsstudien", href: "/sluzby/rozptylove-studie" },
      { title: "UVP und Projektmeldung", href: "/sluzby/eia-oznameni-zameru" }
    ],
    faq: [
      {
        q: "Warum ist der Ofenmodus bei der Messung in Glasfabriken wichtig?",
        a: "Die Emissionsergebnisse hängen stark vom jeweiligen Technologiemodus ab, daher ist eine repräsentative Messung unerlässlich."
      },
      {
        q: "Können Sie auch bei der Behördendokumentation helfen?",
        a: "Ja – wir bereiten Ergebnisse auf, die im Betrieb und in der Kommunikation mit Behörden nutzbar sind."
      }
    ]
  },
  "odpady-recyklace": {
    metadataTitle: "Studien und Messungen für Abfall- und Recyclinganlagen",
    metadataDescription:
      "Branchenüberblick für Abfall und Recycling: Staub, Lärm, Transport, Ausbreitung, UVP und Dokumentation für Genehmigungsverfahren.",
    title: "Abfall und Recycling",
    slug: "odpady-recyklace",
    intro:
      "Standortkapazität ändern oder UVP für Abfall und Recycling in Angriff nehmen? Wir bündeln Lärm, Staub, Transport und Ausbreitung in einem Dokumentationspaket für Verfahren.",
    typicalProblems: [
      "Kapazitätsänderungen ohne rechtzeitige Aktualisierung der Expertendokumentation",
      "kombinierter technologischer Lärm und Transportbelastung",
      "Staub auf dem Gelände und in der umliegenden Bebauung",
      "Unklarer Zusammenhang mit der UVP und den darauffolgenden Genehmigungsverfahren"
    ],
    docs: [
      "Standortlayout und umliegende Bebauung",
      "Projektdokumentation und Anlagenkapazitäten",
      "Technik und Verkehrsbetriebsarten",
      "Autoritätserfordernis oder Zweck der Sachverständigenbegutachtung"
    ],
    process: [
      "Wir bewerten Projektrisikobereiche (Lärm, Staub, Verkehr, Luftqualität)",
      "Je nach Verfahrensziel stellen wir eine Kombination aus Messungen und Studien zusammen",
      "Wir erstellen eine gutachterliche Dokumentation inklusive Maßnahmenvarianten",
      "Wir liefern Ergebnisse, die für Investoren und Behörden nutzbar sind"
    ],
    outputs: [
      "Lärm- oder Ausbreitungsstudie",
      "Protokolle aus zugehörigen Messungen",
      "Expertenempfehlungen für technische und organisatorische Maßnahmen"
    ],
    pitfalls: [
      "Einzelthemen isoliert und ohne Gesamtkontext behandeln",
      "unvollständige Eingabedaten zu Technik und Verkehr",
      "späte Einbindung der Fachdokumentation in das Projekt"
    ],
    relatedServices: [
      { title: "Ausbreitungsstudien", href: "/sluzby/rozptylove-studie" },
      { title: "Lärmstudien", href: "/sluzby/hlukove-studie" },
      { title: "UVP und Projektmeldung", href: "/sluzby/eia-oznameni-zameru" }
    ],
    faq: [
      {
        q: "Was ist das häufigste Problem an Recyclingstandorten?",
        a: "Der kombinierte Einfluss von Technologie und Verkehr auf Lärm und Luftqualität in der Umgebung."
      },
      {
        q: "Kann eine Dokumentation für Projektvarianten erstellt werden?",
        a: "Ja – wir bewerten routinemäßig abweichende Betriebs- und Messszenarien."
      }
    ]
  },
  "tepelna-cerpadla-vzt": {
    metadataTitle: "Lärmgutachten für Wärmepumpen und HVAC",
    metadataDescription:
      "Lärmgutachten für Wärmepumpen- und Lüftungstechnik zur Belegungsgenehmigung, Beanstandung und technischen Maßnahmenplanung.",
    title: "Wärmepumpen und HVAC",
    slug: "tepelna-cerpadla-vzt",
    intro:
      "Installieren Sie ein Außengerät oder eine Klimaanlage und reduzieren Sie den Lärm gegenüber den Nachbarn? Wir bewerten Tages- und Nachtszenarien vor der Belegungsgenehmigung.",
    typicalProblems: [
      "ungeeigneter Standort des Außengeräts im Verhältnis zur Bebauung",
      "Unterschätzung des Nachtbetriebs",
      "Unklarer Unterschied zwischen Verifizierungsmessung und Studie",
      "unwirksame Maßnahmen ohne Analyse der dominanten Quelle"
    ],
    docs: [
      "Technische Datenblätter für Wärmepumpen/HLK",
      "Quellenstandort relativ zu umliegenden Gebäuden",
      "Betriebsmodi der Geräte (Tag/Nacht)",
      "Belegungsgenehmigung oder behördliche Anforderung"
    ],
    process: [
      "Wir klären, ob eine Messung, eine Studie oder eine Kombination sinnvoll ist",
      "Wir legen Methodik und wichtige Betriebsszenarien fest",
      "Wir führen Messungen oder modellbasierte Bewertungen durch",
      "Wir empfehlen technische Maßnahmen und liefern Verfahrensunterlagen"
    ],
    outputs: [
      "Lärmmessprotokoll oder Lärmstudie",
      "Folgenabschätzung für die Umgebung",
      "Empfehlungen zum Lärmschutz zur Umsetzung"
    ],
    pitfalls: [
      "Messung außerhalb eines repräsentativen Technologiemodus",
      "fehlende Eingänge für Nachtbetrieb",
      "technische Lösung ohne nachgewiesene Wirksamkeit"
    ],
    relatedServices: [
      { title: "Lärmmessung und Lärmstudien", href: "/sluzby/mereni-hluku" },
      { title: "Lärmstudien", href: "/sluzby/hlukove-studie" },
      { title: "Kontakt", href: "/kontakt" }
    ],
    faq: [
      {
        q: "Reicht die alleinige Messung bei einer Wärmepumpe immer aus?",
        a: "Nicht immer. Bei neuen Projekten ist eine Lärmstudie vor der Umsetzung oft sinnvoller oder erforderlich."
      },
      {
        q: "Konzipieren Sie auch Maßnahmen?",
        a: "Ja – wir schlagen technische und organisatorische Maßnahmen basierend auf dominanten Lärmquellen vor."
      }
    ]
  },
  "bioplyn-biometan": {
    metadataTitle: "Ausbreitungs- und Lärmstudien für Biogas und Biomethan",
    metadataDescription:
      "Branchenüberblick für Biogasanlagen und Biomethan: Luftqualität, Geruch, Lärm, Transport und Dokumentation für UVP und Genehmigungen.",
    title: "Biogas und Biomethan",
    slug: "bioplyn-biometan",
    intro:
      "Bereiten Sie Biogas oder Biomethan vor und müssen Ausbreitung, Lärm und UVP aufeinander abgestimmt werden? Wir erstellen Dokumentationen auf der Grundlage aktueller Technologie und nicht nur nach Stellungnahmen von Behörden.",
    typicalProblems: [
      "verzögerte Ausbreitungs- und Lärmarbeiten bis nach Stellungnahme der Behörden",
      "unvollständige Eingaben zu den Betriebsarten der Technik",
      "Transportszenarien unterschätzen",
      "fehlende technische Variantenbewertung"
    ],
    docs: [
      "Technologiediagramm und Anlagenkapazitäten",
      "Projektstandort und Beziehung zur umliegenden Entwicklung",
      "Betriebsarten und Verkehrsanbindungen",
      "Autoritätsanforderung oder Studienzweck"
    ],
    process: [
      "Wir kartieren Projektrisikobereiche (Luftqualität, Lärm, Verkehr)",
      "Wir ermitteln die erforderlichen Studien und Dokumentationen für das Verfahren",
      "Wir erstellen Variantenbewertungen und Maßnahmenvorschläge",
      "Wir liefern fachkundige Dokumentation für den Investor und die Behörden"
    ],
    outputs: [
      "Ausbreitungs- und/oder Lärmstudie",
      "Expertenargumentation für UVP und Folgeprozesse",
      "Empfehlungen zur technischen Optimierung des Projekts"
    ],
    pitfalls: [
      "unzureichende Beschreibung der Technik und Funktionsweise",
      "Lärm und Luftqualität werden getrennt und ohne gemeinsamen Kontext behandelt",
      "veraltete Dokumentation, wenn sich die Projektkapazität ändert"
    ],
    relatedServices: [
      { title: "Ausbreitungsstudien", href: "/sluzby/rozptylove-studie" },
      { title: "Lärmstudien", href: "/sluzby/hlukove-studie" },
      { title: "UVP und Projektmeldung", href: "/sluzby/eia-oznameni-zameru" }
    ],
    faq: [
      {
        q: "Wann sollten Studien für ein Biogasprojekt in Angriff genommen werden?",
        a: "Idealerweise während der Projektvorbereitung, damit die Dokumentation robuster ist und die Abläufe reibungsloser ablaufen."
      },
      {
        q: "Können mehrere Technologievarianten verglichen werden?",
        a: "Ja – wir erstellen auch Variantenszenarien, in denen Auswirkungen und Maßnahmenvorschläge verglichen werden."
      }
    ]
  },
  "zemedelske-provozy": {
    metadataTitle: "Messung und Dokumentation für landwirtschaftliche und lebensmittelverarbeitende Betriebe",
    metadataDescription:
      "Emissionsmessung, Arbeitsplatzumgebung und Betriebsparameter für landwirtschaftliche Standorte, Viehställe, Trockner, Biogasanlagen und Lebensmittelverarbeitungstechnologien.",
    title: "Landwirtschaftliche Betriebe und Trockner",
    slug: "zemedelske-provozy",
    intro:
      "Emissionen, Lärm oder Arbeitsplätze auf einem Bauernhof oder in einem Trockner angehen? Wir erstellen Messungen und Gutachten für Betreiber, Gebietskörperschaften und KHS.",
    typicalProblems: [
      "unklarer Messumfang bei Technologie- oder Kapazitätsänderungen",
      "Gleichzeitige Anforderungen an Emissionen, Arbeitsplatzumgebung und Geruchsstoffe",
      "unzureichende Dokumentation von Betriebsarten und Quellen",
      "Termindruck vor Inspektion oder behördlicher Vorlage"
    ],
    docs: [
      "Beschreibung der Technik, der Tierhaltungsgebäude, der Trockner oder der Lebensmittelverarbeitungslinie",
      "Betriebshandbuch, behördlicher Beschluss oder internes Messziel",
      "technische Datenblätter für Einsatzstoffe, Brennstoffe und eingesetzte Stoffe",
      "Fotografien von Quellen, Stapeln und Arbeitsplätzen"
    ],
    process: [
      "Wir klären den Ausgabezweck für Betriebe, KHS, Regionalbehörden oder EIA",
      "Wir definieren den Umfang der Emissions- und/oder Arbeitsplatzumgebungsmessung",
      "Wir führen Feldmessungen unter repräsentativen Bedingungen durch",
      "Wir liefern ein Protokoll oder eine Studie mit Empfehlungen für die nächsten Schritte"
    ],
    outputs: [
      "Emissions- und Arbeitsplatzumgebungsmessprotokolle",
      "Dokumentation für öffentliche Gesundheitsstationen und regionale Behörden",
      "Folgestudien oder Gutachten je nach Projektbedarf"
    ],
    pitfalls: [
      "Messung außerhalb einer repräsentativen Betriebsart",
      "fehlende Dokumentation zu Kapazitäten und Technik",
      "Emissionen und Arbeitsumgebung getrennt und ohne gemeinsamen Kontext behandeln"
    ],
    relatedServices: [
      { title: "Emissionsmessung", href: "/sluzby/mereni-emisi" },
      { title: "Messung der Arbeitsplatzumgebung", href: "/sluzby/pracovni-prostredi" },
      { title: "UVP und Projektmeldung", href: "/sluzby/eia-oznameni-zameru" }
    ],
    faq: [
      {
        q: "Befassen Sie sich auch mit Biogasanlagen auf landwirtschaftlichen Flächen?",
        a: "Ja – einschließlich der Messung der Motoremissionen, der Betriebsarten und der Einhaltung der Verpflichtungen der Luftschutzbehörden."
      },
      {
        q: "Können Emissions- und Arbeitsplatzumgebungsmessung kombiniert werden?",
        a: "Ja – wir schlagen oft einen gemeinsamen Ansatz vor, der auf der Technologie und dem erforderlichen Output für Behörden und Betriebe basiert."
      }
    ]
  },
  drevozpracujici: {
    metadataTitle: "Messung und Dokumentation für holzverarbeitende Betriebe",
    metadataDescription:
      "Emissions-, Staub-, Lärm- und Arbeitsplatzumgebungsmessung für Sägewerke, Tischlereien, Trockner und Biomassekesselanlagen.",
    title: "Holzverarbeitungsbetriebe",
    slug: "drevozpracujici",
    intro:
      "In Sägewerken und Schreinereien spielen Staub, TSP und ein Biomassekessel eine Rolle. Wir bieten Messungen und Dokumentationen für KHS, regionale Behörden und Genehmigungsbehörden an.",
    typicalProblems: [
      "Emissionsmessung von Biomasseverbrennungs- und Prozesskaminen",
      "Staub an Brechanlagen und Absauganlagen",
      "Betriebs- und Verkehrslärm vor Ort",
      "Aktualisierungen der Genehmigungen und der Betriebsdokumentation"
    ],
    docs: [
      "Beschreibung von Technik, Brennstoff und Betriebsart",
      "Fotografien von Quellen, Stapeln und Arbeitsplätzen",
      "behördliche Anforderung oder internes Messziel",
      "Betriebsanleitung und Beschlüsse, sofern vorhanden"
    ],
    process: [
      "Wir klären den Ausgabezweck für Betriebe, Behörden oder den Investor",
      "Wir definieren den Umfang der Emissions- und/oder Arbeitsplatzumgebungsmessung",
      "Wir führen Feldmessungen unter repräsentativen Bedingungen durch",
      "Wir liefern ein Protokoll oder eine Studie mit Empfehlungen für die nächsten Schritte"
    ],
    outputs: [
      "Emissions- und Arbeitsplatzumgebungsmessprotokolle",
      "Dokumentation für KHS und regionale Behörden",
      "Folgegutachten oder Betriebsanleitungen"
    ],
    pitfalls: [
      "Messung außerhalb repräsentativen Trockner- oder Kesselbetriebs",
      "unzureichende Beschreibung der Technologie und Kraftstoffzusammensetzung",
      "Emissionen und Staub getrennt und ohne gemeinsamen Kontext behandeln"
    ],
    relatedServices: [
      { title: "Emissionsmessung", href: "/sluzby/mereni-emisi" },
      { title: "Messung der Arbeitsplatzumgebung", href: "/sluzby/pracovni-prostredi" },
      {
        title: "Emissionsmessung für holzverarbeitende Betriebe",
        href: "/sluzby/mereni-emisi-drevozpracujicich-provoze"
      }
    ],
    faq: [
      {
        q: "Sprechen Sie auch Holz- und Biomassetrockner an?",
        a: "Ja – einschließlich Emissionsmessung von Trocknern und Verbrennungsquellen vor Ort."
      },
      {
        q: "Können Emissions- und Arbeitsplatzumgebungsmessung kombiniert werden?",
        a: "Ja – wir schlagen oft einen gemeinsamen Ansatz vor, der auf der Technologie und dem erforderlichen Output basiert."
      }
    ]
  },
  automotive: {
    metadataTitle: "Messung und Dokumentation für Automobil- und technische Textilien",
    metadataDescription:
      "Emissions-, Arbeitsplatzumgebungs- und Lärmmessung für Automobil, technische Textilien und Produktionslinien.",
    title: "Automobil- und technische Textilien",
    slug: "automotive",
    intro:
      "Sie befassen sich bei der Komponentenfertigung mit chemischen Substanzen, VOC und Technologielärm? Wir erstellen Messungen und Dokumentationen für Betriebe, Investoren und Behörden.",
    typicalProblems: [
      "Emissionsmessung von Technologien und Lackierereien vor Ort",
      "Arbeitsplatzkategorisierung und Exposition gegenüber chemischen Substanzen",
      "Produktionslinien- und Logistiklärm",
      "Anforderungen von Investoren oder Behörden bei Betriebsänderungen"
    ],
    docs: [
      "Beschreibung der Technik und Arbeitsabläufe",
      "Sicherheitsdatenblätter und Schichtpläne",
      "Fotos von Quellen und Arbeitsplätzen",
      "Anforderungen einer Behörde, eines Investors oder einer internen Revision"
    ],
    process: [
      "Wir beurteilen den Zweck einer Messung oder einer Studie",
      "Wir definieren den Spielraum für Emissionen, Arbeitsplatzumgebung oder Lärm",
      "Wir führen Feldmessungen durch oder erstellen eine Studie",
      "Wir liefern ein Protokoll mit Empfehlungen für den Betrieb und die Dokumentation"
    ],
    outputs: [
      "Emissions- und Arbeitsplatzumgebungsmessprotokolle",
      "Dokumentation für KHS und das Investmentteam",
      "Nachbereitende Expertenbewertungen bei Technologieänderungen"
    ],
    pitfalls: [
      "Messung außerhalb einer repräsentativen Schicht oder eines repräsentativen Betriebs",
      "fehlende Dokumentation zu chemischen Mischungen und Extraktion",
      "Umgang mit Emissionen und der Arbeitsumgebung ohne Koordination"
    ],
    relatedServices: [
      { title: "Emissionsmessung", href: "/sluzby/mereni-emisi" },
      { title: "Messung der Arbeitsplatzumgebung", href: "/sluzby/pracovni-prostredi" },
      { title: "Emissionsmessung in der Lackiererei", href: "/sluzby/mereni-emisi-lakoven" }
    ],
    faq: [
      {
        q: "Messen Sie Emissionen aus Lackierstraßen in der Automobilindustrie?",
        a: "Ja – einschließlich VOC/TOC und der Verbindung zur Arbeitsplatzumgebung in der Lackiererei."
      },
      {
        q: "Arbeiten Sie mit Designern und Investoren zusammen?",
        a: "Ja – wir erstellen Dokumentationen für die technische Überwachung und Genehmigungsverfahren."
      }
    ]
  }
};
