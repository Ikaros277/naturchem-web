import { pcfElettronicaProducts } from "@/lib/pcf-elettronica-catalog";
import { localizePcfProducts } from "@/lib/pcf-elettronica-product-localize";
import { salesHubContent } from "@/lib/sales-brands";
import type { SalesContent } from "@/lib/sales-types";

export const salesContentEn: SalesContent = {
  hub: {
    ...salesHubContent,
    pageTitle: "Instruments & accessories",
    metaTitle: "Laboratory instruments for sale | NATURCHEM",
    metaDescription:
      "PCF Elettronica analytical instruments for VOC, THC, emission monitoring and lab accessories. Consultation, quotes and support in the Czech Republic.",
    eyebrow: "Measuring equipment",
    lead: "Analytical instruments and laboratory accessories for VOC, THC and related parameters — backed by an accredited measurement laboratory.",
    introHeading: "",
    introParagraphs: [],
    highlights: [],
    categoriesHeading: "PCF Elettronica product categories",
    categoriesLead:
      "The full manufacturer portfolio grouped by application. Each model includes specifications, datasheets and a link to the manufacturer page.",
    cooperationHeading: "How to inquire",
    cooperationLead: "Three steps from your inquiry to instrument delivery.",
    cooperationSteps: [
      {
        title: "Describe your need",
        text: "State the parameter, standard, source type or attach an authority notice. A brief process description helps."
      },
      {
        title: "We propose a solution",
        text: "We recommend a suitable instrument, accessories and indicative lead time, then prepare a quote."
      },
      {
        title: "Delivery and support",
        text: "We coordinate delivery, commissioning and service contacts. Accredited measurements can be arranged if required."
      }
    ],
    brandsHeading: "Manufacturer in our range",
    distributorNote: "",
    schemaName: "NATURCHEM laboratory instrument sales"
  },
  brands: [
    {
      slug: "pcf-elettronica",
      name: "PCF Elettronica",
      legalName: "PCF Elettronica S.r.l.",
      website: "https://www.pcfelettronica.it/",
      logoSrc: "/graphics/brands/pcf-elettronica.png",
      heroTheme: "prodej-pcf-elettronica",
      tagline: "Analytical instruments for VOC, THC and emission monitoring",
      introParagraphs: [
        "Italian manufacturer PCF Elettronica S.r.l. has developed and built analyzers and monitors for organic compounds in air since 1985. Instruments use FID, PID and TCD detectors for laboratories, emission monitoring and industrial plants.",
        "The range includes stationary air quality analyzers, emission monitors, portable heated FID units, process GC analyzers and full accessories — probes, heated lines, zero-air generators and calibrators.",
        "In the Czech Republic we help with configuration, delivery and links to NATURCHEM accredited measurements."
      ],
      offerItems: [
        "Consultation on instrument choice by parameter, standard and site conditions",
        "Quotes including accessories and calibration gases",
        "Coordination of delivery, commissioning and manufacturer service",
        "Connection to our accredited emission and air quality measurement services"
      ],
      products: localizePcfProducts(pcfElettronicaProducts, "en", {})
    }
  ]
};
