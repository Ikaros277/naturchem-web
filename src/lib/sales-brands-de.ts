import { pcfElettronicaProducts } from "@/lib/pcf-elettronica-catalog";
import { localizePcfProducts } from "@/lib/pcf-elettronica-product-localize";
import { pcfProductTranslationsDe } from "@/lib/pcf-elettronica-products-de";
import { salesHubContent } from "@/lib/sales-brands";
import type { SalesContent } from "@/lib/sales-types";

export const salesContentDe: SalesContent = {
  hub: {
    ...salesHubContent,
    pageTitle: "Geräte & Zubehör",
    metaTitle: "Laborgeräte | NATURCHEM",
    metaDescription:
      "PCF Elettronica Analysatoren für VOC, THC, Emissionsüberwachung und Laborzubehör. Beratung, Angebote und Support in Tschechien.",
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
    brandsHeading: "Hersteller im Sortiment",
    distributorNote: "",
    schemaName: "NATURCHEM Laborgerätevertrieb"
  },
  brands: [
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
