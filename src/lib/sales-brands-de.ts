import { pcfElettronicaProducts } from "@/lib/pcf-elettronica-catalog";

import { localizePcfProducts } from "@/lib/pcf-elettronica-product-localize";

import { pcfProductTranslationsDe } from "@/lib/pcf-elettronica-products-de";
import { sensecaProducts } from "@/lib/senseca-catalog";

import { salesHubContent } from "@/lib/sales-brands";

import type { SalesContent } from "@/lib/sales-types";



export const salesContentDe: SalesContent = {

  hub: {

    ...salesHubContent,

    pageTitle: "Geräte & Zubehör",

    metaTitle: "Laborgeräte | NATURCHEM",

    metaDescription:

      "Senseca- und PCF-Elettronica-Messtechnik — Geräte für Umweltmonitoring, VOC/THC-Analysatoren und Laborzubehör. Beratung, Angebote und Support in Tschechien.",

    eyebrow: "Angebot Messtechnik",

    lead: "Analytische Geräte und Laborzubehör für VOC, THC und verwandte Parameter — mit dem Know-how eines akkreditierten Messlabors.",

    introHeading: "",

    introParagraphs: [],

    highlights: [],

    categoriesHeading: "PCF Elettronica Produktkategorien",

    categoriesLead:

      "Das gesamte Herstellerportfolio nach Anwendung gegliedert. Zu jedem Modell finden Sie technische Daten, Datenblätter und einen Link zur Herstellerseite.",

    cooperationHeading: "So läuft eine Anfrage ab",

    cooperationLead: "Drei Schritte von der Anfrage bis zur Lieferung des Geräts.",

    cooperationSteps: [

      {

        title: "Anforderung beschreiben",

        text: "Nennen Sie Parameter, Norm, Quellentyp oder fügen Sie eine Behördenaufforderung bei. Eine kurze Prozessbeschreibung hilft."

      },

      {

        title: "Lösungsvorschlag",

        text: "Wir empfehlen ein passendes Gerät, Zubehör und Lieferzeit und erstellen ein Angebot."

      },

      {

        title: "Lieferung und Support",

        text: "Wir koordinieren Lieferung, Inbetriebnahme und Servicekontakte. Akkreditierte Messungen sind auf Wunsch möglich."

      }

    ],

    brandsHeading: "Marken im Sortiment",

    distributorNote: "",

    schemaName: "NATURCHEM Laborgerätevertrieb"

  },

  brands: [

    {

      slug: "senseca",

      name: "Senseca",

      legalName: "Senseca Italy Srl, ehemals Delta OHM",

      website: "https://www.senseca.com/",

      logoSrc: "/graphics/brands/senseca.png",

      heroTheme: "prodej-senseca",

      tagline: "Messgeräte und Sensoren für Umweltmonitoring, Arbeitsplatzhygiene und Industrie",

      introParagraphs: [

        "Senseca Italy Srl (ehemals Delta OHM) entwickelt und fertigt Messgeräte, tragbare Geräte, Transmitter und Datenlogger für physikalische Größen — Temperatur, Feuchte, Druck, Luftgeschwindigkeit, Beleuchtung, Akustik, Vibration, Luftqualität und verwandte Parameter in Gebäuden, im Feld und in der Industrie.",

        "Das Sortiment umfasst Geräte für Arbeitsplatzhygiene, Wetterstationen sowie Sensoren für Boden-, Wasser- und Luftmonitoring. Geräte liefern wir mit Kalibrierung nach geltenden europäischen Normen; stationäre Messgeräte werden in der akkreditierten Labor des Herstellers verifiziert (ACCREDIA LAT N.º 124). Kalibrierzertifikate werden auch vom Tschechischen Hydrometeorologischen Institut anerkannt.",

        "In Tschechien bieten wir Beratung, Angebot, Lieferung, Service und bei Bedarf Anbindung an akkreditierte NATURCHEM-Messungen."

      ],

      offerItems: [

        "Beratung zur Gerätewahl nach Parameter, Norm und Betriebsbedingungen",

        "Angebote inklusive Zubehör, Kalibrierung und Verifizierung",

        "Koordination von Lieferung, Inbetriebnahme und Herstellerservice",

        "Anbindung an akkreditierte NATURCHEM-Messungen — Emissionen, Arbeitsplatz, Lärm, Beleuchtung, Mikroklima"

      ],

      categoriesHeading: "Senseca Produktkategorien",

      categoriesLead:
        "Das gesamte Herstellerportfolio nach Messgröße gegliedert. Zu jedem Modell finden Sie Beschreibungen, Datenblätter und Dokumentationslinks.",

      products: sensecaProducts

    },

    {

      slug: "pcf-elettronica",

      name: "PCF Elettronica",

      legalName: "PCF Elettronica S.r.l.",

      website: "https://www.pcfelettronica.it/",

      logoSrc: "/graphics/brands/pcf-elettronica.png",

      heroTheme: "prodej-pcf-elettronica",

      tagline: "Analytische Geräte für VOC, THC und Emissionsüberwachung",

      introParagraphs: [

        "Der italienische Hersteller PCF Elettronica S.r.l. entwickelt und baut seit 1985 Analysatoren und Monitore für organische Verbindungen in der Luft. Die Geräte nutzen FID-, PID- und TCD-Detektoren für Labore, Emissionsmessung und Industrieanlagen.",

        "Das Sortiment umfasst stationäre Luftqualitätsanalysatoren, Emissionsmonitore, tragbare FID-Geräte mit beheizter Probenahme, GC-Prozessanalysatoren und Zubehör — Sonden, beheizte Leitungen, Nullluftgeneratoren und Kalibratoren.",

        "In Tschechien unterstützen wir bei Konfiguration, Lieferung und Anbindung an akkreditierte NATURCHEM-Messungen."

      ],

      offerItems: [

        "Beratung zur Gerätewahl nach Parameter, Norm und Betriebsbedingungen",

        "Angebote inklusive Zubehör und Kalibriergasen",

        "Koordination von Lieferung, Inbetriebnahme und Herstellerservice",

        "Anbindung an unsere akkreditierten Emissions- und Luftqualitätsmessungen"

      ],

      products: localizePcfProducts(pcfElettronicaProducts, "de", pcfProductTranslationsDe)

    }

  ]

};


