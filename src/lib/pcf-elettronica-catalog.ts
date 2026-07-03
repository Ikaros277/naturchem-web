        import type { SalesProduct } from "@/lib/sales-types";

        export type PcfCatalogProduct = Omit<SalesProduct, "category">;

        export type PcfCatalogCategory = {
          id: string;
          title: string;
          sourceUrl: string;
          products: PcfCatalogProduct[];
        };

        /** PCF Elettronica — synced from pcfelettronica.it/en/apparecchi/ */
        export const pcfElettronicaCatalog: readonly PcfCatalogCategory[] = [
  {
    "id": "air-quality-analyzers",
    "title": "Air Quality Analyzers",
    "sourceUrl": "https://www.pcfelettronica.it/en/apparecchi/qualita-aria/",
    "products": [
      {
        "slug": "mod-529-nr-t-total-voc-analyzer",
        "title": "Mod. 529/NR/T Total VOC analyzer",
        "sourceUrl": "https://www.pcfelettronica.it/en/mod-529-nr-t/",
        "tagline": "Stationary total VOC (THC) monitoring analyser",
        "intro": "Mod. 529/NR/T is a 19″ rack-mount FID analyser for continuous monitoring of total volatile organic compounds (TVOC/THC) in ambient air and immission applications. A precision capillary sampling loop ensures repeatable sample volumes before FID detection; data are displayed on a colour touch screen and can be transferred via RS-232.",
        "specifications": [
          {
            "label": "Measuring range",
            "value": "0–10,000 ppmV TVOC"
          },
          {
            "label": "Measuring scales",
            "value": "6 programmable scales, e.g. 0–5/10/50/100/500/1,000 ppmV (or mg/m³)"
          },
          {
            "label": "Measuring cycle",
            "value": "30 s standard (shorter on request)"
          },
          {
            "label": "Linearity",
            "value": "> 1 % of f.s.d."
          },
          {
            "label": "Sample flow rate",
            "value": "500 ml/min"
          },
          {
            "label": "Working temperature",
            "value": "0–40 °C ambient"
          },
          {
            "label": "Display",
            "value": "640×200 px colour LCD touch screen with real-time analysis"
          },
          {
            "label": "Analog outputs",
            "value": "0–10 Vdc / 4–20 mA"
          },
          {
            "label": "Serial output",
            "value": "RS-232 (9-pin)"
          },
          {
            "label": "Gas supplies",
            "value": "H₂ 30 ml/min; FID air 300 ml/min; service air 4.5 bar (local)"
          },
          {
            "label": "Dimensions",
            "value": "480 × 190 × 560 mm (19″ rack, W×H×D)"
          },
          {
            "label": "Weight",
            "value": "15 kg"
          },
          {
            "label": "Power supply",
            "value": "230/110 Vac, 50/60 Hz, max 300 VA"
          }
        ],
        "features": [
          "Continuous total VOC analysis by heated FID detector",
          "Programmable measuring scales down to ppbV range",
          "Colour graphic touch display with real-time chromatogram",
          "Automatic zero drift compensation and front-panel zero/span check",
          "Analogue and serial outputs for data acquisition systems",
          "Optional hydrogen and zero-air generators"
        ],
        "applications": [
          "Air quality and immission monitoring stations",
          "Continuous TVOC/THC measurement in ambient air",
          "Environmental compliance monitoring",
          "Research and reference monitoring networks"
        ],
        "datasheetHref": "/datasheets/pcf-elettronica/mod-529-nr-t-total-voc-analyzer-0-Mod.-20529_NR-20_T-20Brochure.pdf",
        "datasheets": [
          {
            "label": "Mod. 529/NR/T brochure.pdf",
            "url": "/datasheets/pcf-elettronica/mod-529-nr-t-total-voc-analyzer-0-Mod.-20529_NR-20_T-20Brochure.pdf"
          },
          {
            "label": "PCF Mod 529 NR/T comm and cal card.pdf",
            "url": "/datasheets/pcf-elettronica/mod-529-nr-t-total-voc-analyzer-1-PCF-20Mod-20529-20NR-20T-20comm-20and-20cal-20card-20release-2019-03-2022-conver.pdf"
          },
          {
            "label": "Mod 529/NR Operating Manual.pdf",
            "url": "/datasheets/pcf-elettronica/mod-529-nr-t-total-voc-analyzer-2-Operating-20Manual-20529_T.pdf"
          }
        ],
        "imageSrc": "/graphics/pcf-elettronica/mod-529-nr-t-total-voc-analyzer.jpg"
      },
      {
        "slug": "mod-530-nr-btex-aromatics-analyzer",
        "title": "Mod. 530/NR BTEX (aromatics) analyzer",
        "sourceUrl": "https://www.pcfelettronica.it/en/mod-530-nr/",
        "tagline": "Automatic BTEX aromatics analyser (FID or PID)",
        "intro": "Mod. 530/NR is a fully automatic industrial rack gas chromatograph for benzene, toluene, ethylbenzene and xylenes (BTEX). Aromatics are trapped on Tenax GR, thermally desorbed and separated on a wide-bore capillary column; firmware handles sequencing, peak integration and concentration reporting with RS-232 data export.",
        "specifications": [
          {
            "label": "Compounds",
            "value": "Benzene, toluene, ethylbenzene, xylenes (BTEX)"
          },
          {
            "label": "Measuring range",
            "value": "0–1,000 ppbV benzene (6 scales from 0–5 ppbV)"
          },
          {
            "label": "Detection limit (LDL)",
            "value": "±0.1 µg/m³ benzene"
          },
          {
            "label": "Background noise",
            "value": "< 0.05 µg/m³ benzene"
          },
          {
            "label": "Measuring cycle",
            "value": "Automatic GC cycle with thermal desorption"
          },
          {
            "label": "Detector options",
            "value": "FID or PID"
          },
          {
            "label": "Display",
            "value": "Colour graphic display with touch screen"
          },
          {
            "label": "Outputs",
            "value": "RS-232; analogue 0–10 V / 4–20 mA"
          },
          {
            "label": "Gas supplies",
            "value": "H₂, FID air, nitrogen/service air as per configuration"
          },
          {
            "label": "Mounting",
            "value": "19″ rack module"
          }
        ],
        "features": [
          "Tenax GR pre-concentration of aromatic compounds from air",
          "Capillary GC separation with integrated peak integration",
          "Available with FID or PID detection",
          "Programmable measuring scales for BTEX in ppbV / µg/m³",
          "19″ rack industrial design for unattended operation",
          "RS-232 transfer of results to PC for reporting"
        ],
        "applications": [
          "Ambient air BTEX monitoring",
          "Immission assessment near industrial sources",
          "Odour and aromatic hydrocarbon surveillance",
          "Urban air quality stations"
        ],
        "datasheetHref": "/datasheets/pcf-elettronica/mod-530-nr-btex-aromatics-analyzer-0-Mod.-20530_NR_FID_BTEX-20Brochure.pdf",
        "datasheets": [
          {
            "label": "Mod 530/NR FID_BTEX Brochure.pdf",
            "url": "/datasheets/pcf-elettronica/mod-530-nr-btex-aromatics-analyzer-0-Mod.-20530_NR_FID_BTEX-20Brochure.pdf"
          },
          {
            "label": "Mod 530/NR PID_BTEX Brochure.pdf",
            "url": "/datasheets/pcf-elettronica/mod-530-nr-btex-aromatics-analyzer-1-Mod.-20530_NR_PID_BTEX-20bROCGURE.pdf"
          },
          {
            "label": "Mod 530_NR_FID comm and cal card .pdf",
            "url": "/datasheets/pcf-elettronica/mod-530-nr-btex-aromatics-analyzer-2-PCF-20Mod-20530_NR_FID-20comm-20and-20cal-20card-20.pdf"
          },
          {
            "label": "Mod 530_NR_PID comm and cal card.pdf",
            "url": "/datasheets/pcf-elettronica/mod-530-nr-btex-aromatics-analyzer-3-Mod.-20530_NR_PID_BTEX-20bROCGURE-3.pdf"
          },
          {
            "label": "Mod 530/NR FID Operating Manual .pdf",
            "url": "/datasheets/pcf-elettronica/mod-530-nr-btex-aromatics-analyzer-4-BTEX-MOD-530_NR-operating-manual-_2019_REV2.pdf"
          },
          {
            "label": "Mod 530/NR PID Operating Manual .pdf",
            "url": "/datasheets/pcf-elettronica/mod-530-nr-btex-aromatics-analyzer-5-BTEX-mod-530_PID-operating-manual.pdf"
          }
        ],
        "imageSrc": "/graphics/pcf-elettronica/mod-530-nr-btex-aromatics-analyzer.jpg"
      },
      {
        "slug": "mod-529-nr-nmh-analyzer",
        "title": "Mod. 529/NR/NMH analyzer",
        "sourceUrl": "https://www.pcfelettronica.it/en/mod-529-nr/",
        "tagline": "Non-methane hydrocarbon (NMH) analyser with GC separation",
        "intro": "Mod. 529/NR/NMH continuously measures reactive hydrocarbons and non-methane HC (NMH) using FID detection combined with gas chromatographic separation. A calibrated capillary loop delivers repeatable sample volumes at atmospheric pressure before analysis.",
        "specifications": [
          {
            "label": "Measuring range",
            "value": "0–10,000 ppmV TVOC"
          },
          {
            "label": "Measuring scales",
            "value": "6 programmable scales, e.g. 0–5/10/50/100/500/1,000 ppmV (or mg/m³)"
          },
          {
            "label": "Measuring cycle",
            "value": "GC cycle for NMH determination (configurable)"
          },
          {
            "label": "Linearity",
            "value": "> 1 % of f.s.d."
          },
          {
            "label": "Sample flow rate",
            "value": "500 ml/min"
          },
          {
            "label": "Working temperature",
            "value": "0–40 °C ambient"
          },
          {
            "label": "Display",
            "value": "640×200 px colour LCD touch screen with real-time analysis"
          },
          {
            "label": "Analog outputs",
            "value": "0–10 Vdc / 4–20 mA"
          },
          {
            "label": "Serial output",
            "value": "RS-232 (9-pin)"
          },
          {
            "label": "Gas supplies",
            "value": "H₂ 30 ml/min; FID air 300 ml/min; service air 4.5 bar (local)"
          },
          {
            "label": "Dimensions",
            "value": "480 × 190 × 560 mm (19″ rack, W×H×D)"
          },
          {
            "label": "Weight",
            "value": "15 kg"
          },
          {
            "label": "Power supply",
            "value": "230/110 Vac, 50/60 Hz, max 300 VA"
          }
        ],
        "features": [
          "FID detector with GC column separation of methane and NMH",
          "Continuous automatic analysis in 19″ rack format",
          "Programmable scales for VOC and NMH in ppmV or mg/m³",
          "Touch-screen colour display with real-time data",
          "Zero/span check from front panel or remote contact",
          "RS-232 and analogue outputs"
        ],
        "applications": [
          "Non-methane hydrocarbon monitoring in ambient air",
          "Photochemical smog and ozone precursor assessment",
          "Air quality networks requiring NMH data",
          "Industrial fence-line monitoring"
        ],
        "datasheetHref": "/datasheets/pcf-elettronica/mod-529-nr-nmh-analyzer-0-Mod.-20529_NR-20_NMH-20Brochure.pdf",
        "datasheets": [
          {
            "label": "Mod. 529/NR/NMH Brochure.pdf",
            "url": "/datasheets/pcf-elettronica/mod-529-nr-nmh-analyzer-0-Mod.-20529_NR-20_NMH-20Brochure.pdf"
          },
          {
            "label": "Mod 529/NR/NMH comm and cal card.pdf",
            "url": "/datasheets/pcf-elettronica/mod-529-nr-nmh-analyzer-1-PCF-20Mod-20529-20NR-20comm-20and-20cal-20card-20.pdf"
          },
          {
            "label": "Mod 529/NR Operating Manual .pdf",
            "url": "/datasheets/pcf-elettronica/mod-529-nr-nmh-analyzer-2-Mod-20529_NR_NMH_Operating-20Manual_2019-20Air-20quality-20new-20valve.pdf"
          }
        ],
        "imageSrc": "/graphics/pcf-elettronica/mod-529-nr-nmh-analyzer.jpg"
      },
      {
        "slug": "mod-529-nr-s-specific-hc-analyzer",
        "title": "Mod. 529/NR/S Specific HC analyzer",
        "sourceUrl": "https://www.pcfelettronica.it/en/mod-529-nr-s/",
        "tagline": "Specific hydrocarbon and TVOC analyser",
        "intro": "Mod. 529/NR/S determines individual hydrocarbon compounds by GC-FID separation while a second injection path measures total VOC. Analogue outputs are available for the specific compound, TVOC and their difference — suited for special monitoring programmes.",
        "specifications": [
          {
            "label": "Measuring range",
            "value": "0–10,000 ppmV TVOC; individual ranges per compound"
          },
          {
            "label": "Measuring scales",
            "value": "6 scales from 0–5 ppmV VOC"
          },
          {
            "label": "Measuring cycle",
            "value": "180–300 s (shorter on request)"
          },
          {
            "label": "Linearity",
            "value": "> 1 % of f.s.d."
          },
          {
            "label": "Sample flow rate",
            "value": "500 ml/min"
          },
          {
            "label": "Working temperature",
            "value": "0–40 °C"
          },
          {
            "label": "Analog outputs",
            "value": "3× 0–10 V / 4–20 mA (specific, TVOC, difference)"
          },
          {
            "label": "Serial output",
            "value": "RS-232"
          },
          {
            "label": "Dimensions",
            "value": "480 × 190 × 560 mm"
          },
          {
            "label": "Weight",
            "value": "15 kg"
          },
          {
            "label": "Power supply",
            "value": "230/110 Vac, 50/60 Hz, max 300 VA"
          }
        ],
        "features": [
          "GC separation for specific compounds plus total VOC channel",
          "Separate analogue outputs for compound, TVOC and difference",
          "Programmable ranges per compound",
          "Measuring cycle 180–300 s (configurable)",
          "Colour touch display with live analysis view",
          "19″ rack automatic operation"
        ],
        "applications": [
          "Monitoring of specific VOC compounds in air",
          "Research programmes requiring compound-specific data",
          "Comparison of speciated vs total VOC concentrations",
          "Specialised immission studies"
        ],
        "datasheetHref": "/datasheets/pcf-elettronica/mod-529-nr-s-specific-hc-analyzer-0-Mod.-20529_NR-20_S-20Brochure.pdf",
        "datasheets": [
          {
            "label": "Mod. 529 NR/S Brochure.pdf",
            "url": "/datasheets/pcf-elettronica/mod-529-nr-s-specific-hc-analyzer-0-Mod.-20529_NR-20_S-20Brochure.pdf"
          },
          {
            "label": "Mod. 529/NR/S comm and cal card.pdf",
            "url": "/datasheets/pcf-elettronica/mod-529-nr-s-specific-hc-analyzer-1-PCF-20Mod-20529_NR_S-20comm-20and-20cal-20card-20.pdf"
          },
          {
            "label": "Special Applications.pdf",
            "url": "/datasheets/pcf-elettronica/mod-529-nr-s-specific-hc-analyzer-2-Applicazioni-20realizzate_UPDATED_ENGLISH_3.DOCX.pdf"
          }
        ],
        "imageSrc": "/graphics/pcf-elettronica/mod-529-nr-s-specific-hc-analyzer.jpg"
      }
    ]
  },
  {
    "id": "emission-monitors",
    "title": "Emission Monitors",
    "sourceUrl": "https://www.pcfelettronica.it/en/apparecchi/camini/",
    "products": [
      {
        "slug": "mod-110-h-fast-response-time-voc-monitor",
        "title": "Mod. 110 H Fast response/time VOC monitor",
        "sourceUrl": "https://www.pcfelettronica.it/en/mod-110-h/",
        "tagline": "Fast-response heated FID emission monitor",
        "intro": "Mod. 110 H is a heated FID emission monitor designed for very fast response — ideal for detecting concentration peaks, LEL situations and dynamic processes such as solvent emissions, afterburners and incinerators. Sample circuit is maintained at 180–200 °C.",
        "specifications": [
          {
            "label": "Detector",
            "value": "FID for high temperatures (180 °C)"
          },
          {
            "label": "Measuring range",
            "value": "0–10,000 mg/m³"
          },
          {
            "label": "Measuring scales",
            "value": "0–100 / 1,000 / 10,000 mg/m³"
          },
          {
            "label": "Response time",
            "value": "Seconds to 90 % of f.s.d."
          },
          {
            "label": "Sample flow rate",
            "value": "1,000 ml/min"
          },
          {
            "label": "Sample temperature",
            "value": "180–200 °C"
          },
          {
            "label": "Display",
            "value": "2 × 40 character lines"
          },
          {
            "label": "Gas supplies",
            "value": "H₂ 30 cc/min; pure air 300 cc/min"
          },
          {
            "label": "Dimensions",
            "value": "483 × 185 × 450 mm (19″ rack)"
          },
          {
            "label": "Weight",
            "value": "12 kg"
          },
          {
            "label": "Power supply",
            "value": "230 V 50 Hz (110 V optional)"
          }
        ],
        "features": [
          "FID heated to 180 °C for high-temperature sample",
          "Very fast response to 90 % of scale",
          "Programming and diagnostics via display",
          "Integrated self-diagnosis system",
          "RS-232 and USB digital outputs",
          "Analogue outputs 0–2 V and 4–20 mA"
        ],
        "applications": [
          "LEL and explosion-limit surveillance",
          "Solvent-based process emissions",
          "Afterburner and incinerator monitoring",
          "Fast dynamic VOC measurements at stacks"
        ],
        "datasheetHref": "/datasheets/pcf-elettronica/mod-110-h-fast-response-time-voc-monitor-0-PCF-20Mod.110-20H-20brochure.pdf",
        "datasheets": [
          {
            "label": "Mod 110 H Brochure.pdf",
            "url": "/datasheets/pcf-elettronica/mod-110-h-fast-response-time-voc-monitor-0-PCF-20Mod.110-20H-20brochure.pdf"
          },
          {
            "label": "Mod 110 H Comm and Cal card .pdf",
            "url": "/datasheets/pcf-elettronica/mod-110-h-fast-response-time-voc-monitor-1-PCF-20Mod-20110-20H-20comm-20and-20cal-20card-20.pdf"
          },
          {
            "label": "Mod 110 H Operating Manual .pdf",
            "url": "/datasheets/pcf-elettronica/mod-110-h-fast-response-time-voc-monitor-2-PCF-20Mod-20110H-20operating-20manual.pdf"
          }
        ],
        "imageSrc": "/graphics/pcf-elettronica/mod-110-h-fast-response-time-voc-monitor.jpg"
      },
      {
        "slug": "mod-110-e-discrete-sampling-voc-monitor",
        "title": "Mod. 110 E Discrete sampling VOC monitor",
        "sourceUrl": "https://www.pcfelettronica.it/en/mod-110-e/",
        "tagline": "Discrete-sampling heated FID VOC monitor",
        "intro": "Mod. 110 E uses discrete sampling rather than continuous flow, reducing maintenance, corrosion and condensation risk while retaining heated FID measurement at 180 °C. Suited for emission monitoring where representative grab samples are sufficient.",
        "specifications": [
          {
            "label": "Detector",
            "value": "Heated FID (180 °C)"
          },
          {
            "label": "Sampling mode",
            "value": "Discrete / non-continuous sampling"
          },
          {
            "label": "Measuring range",
            "value": "0–10,000 mg/m³ (scalable)"
          },
          {
            "label": "Sample temperature",
            "value": "180–200 °C circuit"
          },
          {
            "label": "Display",
            "value": "Front-panel display with programming menu"
          },
          {
            "label": "Outputs",
            "value": "Analogue and serial interfaces"
          },
          {
            "label": "Mounting",
            "value": "19″ rack module"
          }
        ],
        "features": [
          "Heated FID detector at 180 °C",
          "Discrete sampling mode for lower maintenance",
          "Programming and self-diagnosis via display",
          "Reduced corrosion and condensation in sampling path",
          "Industrial 19″ rack housing",
          "RS-232 / USB communication"
        ],
        "applications": [
          "Stack emission monitoring with periodic sampling",
          "Processes where discrete samples are acceptable",
          "Installations requiring reduced sample-line maintenance",
          "Industrial VOC compliance checks"
        ],
        "datasheetHref": "/datasheets/pcf-elettronica/mod-110-e-discrete-sampling-voc-monitor-0-PCF-20Mod.110-20E-20Brochure.pdf",
        "datasheets": [
          {
            "label": "Mod 110 E Broschure.pdf",
            "url": "/datasheets/pcf-elettronica/mod-110-e-discrete-sampling-voc-monitor-0-PCF-20Mod.110-20E-20Brochure.pdf"
          },
          {
            "label": "Mod 110 E Comm and Cal Card .pdf",
            "url": "/datasheets/pcf-elettronica/mod-110-e-discrete-sampling-voc-monitor-1-PCF-20Mod-20110-20E-20Comm-20and-20Cal-20card-20.pdf"
          },
          {
            "label": "Mod 110 E Operating Manual .pdf",
            "url": "/datasheets/pcf-elettronica/mod-110-e-discrete-sampling-voc-monitor-2-THC-20110E-20operating-20manual.pdf"
          }
        ],
        "imageSrc": "/graphics/pcf-elettronica/mod-110-e-discrete-sampling-voc-monitor.jpg"
      },
      {
        "slug": "mod-529-nr-h-gc-analyzer",
        "title": "Mod. 529/NR/H GC Analyzer",
        "sourceUrl": "https://www.pcfelettronica.it/en/mod-529-nr-h/",
        "tagline": "High-temperature GC analyser for stacks and emissions",
        "intro": "Mod. 529/NR/H measures methane, total VOC, non-methane HC (NMH) and specific compounds in stack emissions at moderate temperatures (up to ~100 °C). The NR series uses modern electronics for easy reconfiguration and stable data storage; basic cycle time is 180 s.",
        "specifications": [
          {
            "label": "Measured parameters",
            "value": "CH₄, TVOC, NMH and specific HC compounds"
          },
          {
            "label": "Sample temperature",
            "value": "Stack gases up to ~100 °C"
          },
          {
            "label": "Measuring cycle",
            "value": "180 s basic cycle (modifiable on request)"
          },
          {
            "label": "Detector",
            "value": "FID with GC separation"
          },
          {
            "label": "Mounting",
            "value": "19″ rack process analyser"
          },
          {
            "label": "Application type",
            "value": "Emission stacks and industrial sources"
          }
        ],
        "features": [
          "Methane, TVOC, NMH and speciated compounds in one platform",
          "High-temperature sampling path for stack gases (< 100 °C)",
          "GC-FID analysis with configurable cycle (from 180 s)",
          "New Release (NR) electronics for flexible setup",
          "Designed for continuous emission monitoring systems",
          "Refer to Mod. 529/NR/S for detailed technical specifications"
        ],
        "applications": [
          "Stack emission monitoring (CH₄, TVOC, NMH)",
          "Combustion and process gas analysis",
          "CEMS and regulatory emission reporting",
          "Industrial plants with moderate stack temperatures"
        ],
        "datasheets": [],
        "imageSrc": "/graphics/pcf-elettronica/mod-529-nr-h-gc-analyzer.jpg"
      }
    ]
  },
  {
    "id": "gc-process-analyzers",
    "title": "GC Process Analyzers",
    "sourceUrl": "https://www.pcfelettronica.it/en/copy-of-en-mod-529-nr-h/",
    "products": [
      {
        "slug": "mod-529-nr-tcd-mini-industrial-gc-with-tcd-detector",
        "title": "Mod. 529/NR/TCD mini industrial GC with TCD detector",
        "sourceUrl": "https://www.pcfelettronica.it/en/copy-of-en-mod-529-nr/",
        "tagline": "Mini process GC with TCD detector",
        "intro": "Mod. 529/NR/TCD is a compact process gas chromatograph for continuous analysis of specific compounds such as CH₄ and CO₂ using thermal conductivity detection (Wheatstone bridge). The TCD offers excellent stability for permanent gases and light hydrocarbons in industrial streams.",
        "specifications": [
          {
            "label": "Detector",
            "value": "TCD (thermal conductivity / Wheatstone bridge)"
          },
          {
            "label": "Typical compounds",
            "value": "CH₄, CO₂ and light permanent gases"
          },
          {
            "label": "Analysis type",
            "value": "Continuous process gas chromatography"
          },
          {
            "label": "Mounting",
            "value": "19″ rack mini GC"
          },
          {
            "label": "Carrier gas",
            "value": "As per application (configured at order)"
          },
          {
            "label": "Outputs",
            "value": "Serial / analogue per system configuration"
          }
        ],
        "features": [
          "Thermo conductivity detector (TCD) — stable for light compounds",
          "Continuous process GC in compact 19″ format",
          "Designed for CH₄, CO₂ and similar permanent gases",
          "Industrial firmware for unattended operation",
          "Low maintenance compared to combustion detectors",
          "Suitable for integration in process control loops"
        ],
        "applications": [
          "Biogas and landfill gas monitoring (CH₄, CO₂)",
          "Process gas composition control",
          "Industrial fermentation and combustion analysis",
          "Continuous fixed-gas monitoring"
        ],
        "datasheetHref": "/datasheets/pcf-elettronica/mod-529-nr-tcd-mini-industrial-gc-with-tcd-detector-0-Brochure-20del-20Mod.-20529_NR_TCD_English.pdf",
        "datasheets": [
          {
            "label": "Mod. 529/NR/TCD Brochure.pdf",
            "url": "/datasheets/pcf-elettronica/mod-529-nr-tcd-mini-industrial-gc-with-tcd-detector-0-Brochure-20del-20Mod.-20529_NR_TCD_English.pdf"
          },
          {
            "label": "Mod 529/NR/TCD comm and cal card.pdf",
            "url": "/datasheets/pcf-elettronica/mod-529-nr-tcd-mini-industrial-gc-with-tcd-detector-1-PCF-20Mod-20529-20NR_TCD-20comm-20and-20cal-20card-20release-2030-04-2023.pdf"
          },
          {
            "label": "Mod 529/NR/TCD Operating Manual .pdf",
            "url": "/datasheets/pcf-elettronica/mod-529-nr-tcd-mini-industrial-gc-with-tcd-detector-2-MANUALE-20UTILIZZO-20Mod-20529_NR-20TCD.pdf"
          }
        ],
        "imageSrc": "/graphics/pcf-elettronica/mod-529-nr-tcd-mini-industrial-gc-with-tcd-detector.jpg"
      }
    ]
  },
  {
    "id": "portable-monitors",
    "title": "Portable Monitors",
    "sourceUrl": "https://www.pcfelettronica.it/en/apparecchi/apparecchi-portatili/",
    "products": [
      {
        "slug": "mod-2005-for-total-voc",
        "title": "Mod. 2005 for Total VOC",
        "sourceUrl": "https://www.pcfelettronica.it/en/mod-2005/",
        "tagline": "Portable HOT FID TVOC monitor",
        "intro": "Mod. 2005 is a portable monitor of total hydrocarbons (TCOV) at high temperatures with heated FID detector, built according to UNI EN 12619:2013. The instrument uses heated sampling (150–200 °C), internal pure-air generation for the FID flame, and a colour data logger with USB/serial outputs.",
        "specifications": [
          {
            "label": "Detector",
            "value": "F.I.D. flame ionization detector at high temperature (180 °C)"
          },
          {
            "label": "Measuring range",
            "value": "0–10,000 mg/m³"
          },
          {
            "label": "Measuring scales",
            "value": "0–100 / 1,000 / 10,000 mg/m³ (other ranges available)"
          },
          {
            "label": "Detection limit (LDL)",
            "value": "±0.4 % of f.s.d."
          },
          {
            "label": "Precision",
            "value": "±1 % of f.s.d."
          },
          {
            "label": "Response time",
            "value": "1 s from 0 to 90 % of f.s.d."
          },
          {
            "label": "Sample flow rate",
            "value": "1,000 ml/min"
          },
          {
            "label": "Sample temperature",
            "value": "180–200 °C (heated circuit)"
          },
          {
            "label": "Working temperature",
            "value": "5–40 °C ambient"
          },
          {
            "label": "Gas supplies",
            "value": "H₂ 28 cc/min; pure air 280 cc/min from internal generator"
          },
          {
            "label": "Power supply",
            "value": "230 V 50 Hz (110 V 60 Hz optional)"
          },
          {
            "label": "Dimensions",
            "value": "390 × 290 × 230 mm (19″ rack module)"
          },
          {
            "label": "Weight",
            "value": "12–15 kg"
          }
        ],
        "features": [
          "FID flame ionization detector heated to 180 °C",
          "Measuring range 0–10,000 mg/m³ with selectable scales",
          "Response time 1 s from 0 to 90 % of full scale",
          "Internal zero-air generator — only hydrogen supply required",
          "Colour TFT display with data logger and Excel export",
          "Industrial design for easy use and low maintenance",
          "RS-232 / optional RS-485 and USB digital outputs",
          "Analogue outputs optional: 0–10 V and 4–20 mA"
        ],
        "applications": [
          "Stack and emission monitoring",
          "Process efficiency control",
          "Environmental analysis at medium to high VOC concentrations",
          "Measurements per CEE CEN 264 and UNI EN 12619:2013"
        ],
        "datasheetHref": "/datasheets/pcf-elettronica/mod-2005-for-total-voc-0-PCF-20Mod.2005-20Brochure.pdf",
        "datasheets": [
          {
            "label": "Mod 2005 Brochure.pdf",
            "url": "/datasheets/pcf-elettronica/mod-2005-for-total-voc-0-PCF-20Mod.2005-20Brochure.pdf"
          },
          {
            "label": "Mod 2005 Comm and Cal Card .pdf",
            "url": "/datasheets/pcf-elettronica/mod-2005-for-total-voc-1-PCF-20Mod-202005-20Comm-20and-20Cal-20Card-20.pdf"
          },
          {
            "label": "Mod 2005 Operating Manual.pdf",
            "url": "/datasheets/pcf-elettronica/mod-2005-for-total-voc-2-PCF-model-2005-9000-operating-manual-Korea.pdf"
          },
          {
            "label": "Mod 2005 Service Manual.pdf",
            "url": "/datasheets/pcf-elettronica/mod-2005-for-total-voc-3-Service-20manual-202005-20DEFINITIVO-20docx.pdf"
          }
        ],
        "imageSrc": "/graphics/pcf-elettronica/mod-2005-for-total-voc.jpg"
      },
      {
        "slug": "mod-2001-c-for-voc-and-check-of-ch4-fraction",
        "title": "Mod. 2001 C for VOC and check of CH4 fraction",
        "sourceUrl": "https://www.pcfelettronica.it/en/mod-2001-c/",
        "tagline": "Portable VOC monitor with methane fraction check",
        "intro": "Mod. 2001 C is a portable heated-FID monitor for total VOC/THC with the ability to occasionally check the methane fraction. It shares the 2000-series heated sampling concept (150–200 °C) and internal air generation; widely used for stack testing and field emission work.",
        "specifications": [
          {
            "label": "Detector",
            "value": "Heated F.I.D. flame ionization detector (180 °C)"
          },
          {
            "label": "Measuring range",
            "value": "0–10,000 mg/m³"
          },
          {
            "label": "Measuring scales",
            "value": "0–100 / 1,000 / 10,000 mg/m³ (other ranges available)"
          },
          {
            "label": "Detection limit (LDL)",
            "value": "±0.4 % of f.s.d."
          },
          {
            "label": "Precision",
            "value": "±1 % of f.s.d."
          },
          {
            "label": "Response time",
            "value": "1 s from 0 to 90 % of f.s.d."
          },
          {
            "label": "Sample flow rate",
            "value": "1,000 ml/min"
          },
          {
            "label": "Sample temperature",
            "value": "180–200 °C (heated circuit)"
          },
          {
            "label": "Working temperature",
            "value": "5–40 °C ambient"
          },
          {
            "label": "Gas supplies",
            "value": "H₂ 28 cc/min; pure air 280 cc/min from internal generator"
          },
          {
            "label": "Power supply",
            "value": "230 V 50 Hz (110 V 60 Hz optional)"
          },
          {
            "label": "Weight",
            "value": "12–15 kg"
          },
          {
            "label": "Dimensions",
            "value": "400 × 300 × 150 mm portable module"
          },
          {
            "label": "Special function",
            "value": "Occasional methane fraction verification"
          }
        ],
        "features": [
          "Heated FID at 180 °C with reinforced aluminium carrying case",
          "Total VOC/THC measurement with optional CH₄ fraction check",
          "Response time 1 s to 90 % of scale",
          "Internal pure-air generator — hydrogen only required externally",
          "Colour TFT display (320×200 px) with data logging",
          "USB / RS-232 / optional RS-485 outputs"
        ],
        "applications": [
          "Portable stack and emission measurements",
          "Field verification of methane vs total HC",
          "Process efficiency checks on site",
          "Environmental analysis at medium–high concentrations"
        ],
        "datasheetHref": "/datasheets/pcf-elettronica/mod-2001-c-for-voc-and-check-of-ch4-fraction-0-PCF-20Mod.2001-20C-20Brochure.pdf",
        "datasheets": [
          {
            "label": "Mod 2001 C Brochure.pdf",
            "url": "/datasheets/pcf-elettronica/mod-2001-c-for-voc-and-check-of-ch4-fraction-0-PCF-20Mod.2001-20C-20Brochure.pdf"
          },
          {
            "label": "Mod 2001 C Comm and Cal Card .pdf",
            "url": "/datasheets/pcf-elettronica/mod-2001-c-for-voc-and-check-of-ch4-fraction-1-PCF-20Mod-20C-202011-20Comm-20and-20Cal-20Card-20.pdf"
          },
          {
            "label": "Mod 2001 C Operating Manual.pdf",
            "url": "/datasheets/pcf-elettronica/mod-2001-c-for-voc-and-check-of-ch4-fraction-2-PCF-model-2001-operating-manual-16H2.pdf"
          },
          {
            "label": "Mod 2001 C Service Manual.pdf",
            "url": "/datasheets/pcf-elettronica/mod-2001-c-for-voc-and-check-of-ch4-fraction-3-Definitivo-20--20Service-20manual-20-28Mod.-202001-20C-29-281-29-4.pdf"
          }
        ],
        "imageSrc": "/graphics/pcf-elettronica/mod-2001-c-for-voc-and-check-of-ch4-fraction.jpg"
      },
      {
        "slug": "mod-c-2011-for-voc-and-ch4-simultaneously",
        "title": "Mod. C 2011 for VOC and CH4 simultaneously",
        "sourceUrl": "https://www.pcfelettronica.it/en/mod-c-2011/",
        "tagline": "Dual-FID portable monitor for VOC and CH₄",
        "intro": "Mod. C 2011 carries two heated FID detectors for simultaneous measurement of total VOC and methane in a single portable instrument. Heated sampling (150–200 °C) and internal air generation make it suited for emission testing requiring both parameters in real time.",
        "specifications": [
          {
            "label": "Detector",
            "value": "Heated F.I.D. flame ionization detector (180 °C)"
          },
          {
            "label": "Measuring range",
            "value": "0–10,000 mg/m³"
          },
          {
            "label": "Measuring scales",
            "value": "0–100 / 1,000 / 10,000 mg/m³ (other ranges available)"
          },
          {
            "label": "Detection limit (LDL)",
            "value": "±0.4 % of f.s.d."
          },
          {
            "label": "Precision",
            "value": "±1 % of f.s.d."
          },
          {
            "label": "Response time",
            "value": "1 s from 0 to 90 % of f.s.d."
          },
          {
            "label": "Sample flow rate",
            "value": "1,000 ml/min"
          },
          {
            "label": "Sample temperature",
            "value": "180–200 °C (heated circuit)"
          },
          {
            "label": "Working temperature",
            "value": "5–40 °C ambient"
          },
          {
            "label": "Gas supplies",
            "value": "H₂ 28 cc/min; pure air 280 cc/min from internal generator"
          },
          {
            "label": "Power supply",
            "value": "230 V 50 Hz (110 V 60 Hz optional)"
          },
          {
            "label": "Weight",
            "value": "12–15 kg"
          },
          {
            "label": "Configuration",
            "value": "Dual FID — simultaneous VOC and CH₄"
          },
          {
            "label": "Dimensions",
            "value": "Portable 19″ module with carrying case"
          }
        ],
        "features": [
          "Two heated FID detectors (180 °C) — VOC and CH₄ channels",
          "Simultaneous real-time VOC and methane readings",
          "Industrial portable design with low maintenance",
          "1 s response to 90 % of scale",
          "Colour display and data logger",
          "USB and serial data export"
        ],
        "applications": [
          "Simultaneous VOC and methane monitoring at emissions",
          "Stack testing with split CH₄ / NMHC data",
          "Combustion and biogas release measurements",
          "Field audits requiring both parameters"
        ],
        "datasheetHref": "/datasheets/pcf-elettronica/mod-c-2011-for-voc-and-ch4-simultaneously-0-PCF-20Mod.-20C-202011-20Brochure.pdf",
        "datasheets": [
          {
            "label": "Mod C 2011 Brochure.pdf",
            "url": "/datasheets/pcf-elettronica/mod-c-2011-for-voc-and-ch4-simultaneously-0-PCF-20Mod.-20C-202011-20Brochure.pdf"
          },
          {
            "label": "Mod C 2011 Comm and Cal Card.pdf",
            "url": "/datasheets/pcf-elettronica/mod-c-2011-for-voc-and-ch4-simultaneously-1-PCF-20Mod-20C-202011-20Comm-20and-20Cal-20Card-20-7.pdf"
          },
          {
            "label": "Mod C 2011 Operating Manual.pdf",
            "url": "/datasheets/pcf-elettronica/mod-c-2011-for-voc-and-ch4-simultaneously-2-PCF-model-2011-operating-manual.pdf"
          },
          {
            "label": "Mod C 2011 Service Manual.pdf",
            "url": "/datasheets/pcf-elettronica/mod-c-2011-for-voc-and-ch4-simultaneously-3-Service-20manual-20-28Mod.-20-20C-202011-29_1-7.pdf"
          }
        ],
        "imageSrc": "/graphics/pcf-elettronica/mod-c-2011-for-voc-and-ch4-simultaneously.jpg"
      },
      {
        "slug": "mod-8807-nr-portable-gc-for-nmh-or-specifics",
        "title": "Mod. 8807/NR portable GC for NMH or specifics",
        "sourceUrl": "https://www.pcfelettronica.it/en/mod-8807-nr/",
        "tagline": "Portable GC-FID for NMH and specific HC",
        "intro": "Mod. 8807/NR is a portable gas chromatograph with FID detection — a field version of the rack Mod. 529/NR/NMH family. It measures total VOC, methane, NMH and other specific compounds using GC separation with a two-injection cycle and capillary sampling loop.",
        "specifications": [
          {
            "label": "Detector",
            "value": "FID with GC column separation"
          },
          {
            "label": "Parameters",
            "value": "TVOC, CH₄, NMH and specific reactive HC"
          },
          {
            "label": "Form factor",
            "value": "Portable analyser"
          },
          {
            "label": "Display",
            "value": "On-board graphic display"
          },
          {
            "label": "Sampling",
            "value": "Calibrated capillary loop (0.6 cc)"
          },
          {
            "label": "Cycle",
            "value": "Two-injection GC cycle"
          }
        ],
        "features": [
          "Portable GC-FID for NMH and speciated hydrocarbons",
          "Analysis displayed on built-in screen",
          "Integrated self-diagnosis system",
          "Two-injection cycle for methane/NMH separation",
          "Battery/portable power options for field use",
          "Similar analytical logic to Mod. 529/NR/NMH rack unit"
        ],
        "applications": [
          "Field NMH and VOC surveys",
          "Portable emission screening",
          "Site audits without fixed CEMS",
          "Research and mobile monitoring campaigns"
        ],
        "datasheetHref": "/datasheets/pcf-elettronica/mod-8807-nr-portable-gc-for-nmh-or-specifics-0-PCF-20Mod.-208807_NR-20Brochure.pdf",
        "datasheets": [
          {
            "label": "Mod 8807/NR Brochure.pdf",
            "url": "/datasheets/pcf-elettronica/mod-8807-nr-portable-gc-for-nmh-or-specifics-0-PCF-20Mod.-208807_NR-20Brochure.pdf"
          },
          {
            "label": "Mod 8807/NR Comm and Cal Card.pdf",
            "url": "/datasheets/pcf-elettronica/mod-8807-nr-portable-gc-for-nmh-or-specifics-1-PCF-20Mod-208807_NR-20Comm-20and-20Cal-20Card-5.pdf"
          },
          {
            "label": "Mod 8807_NR_H Operating Manual.pdf",
            "url": "/datasheets/pcf-elettronica/mod-8807-nr-portable-gc-for-nmh-or-specifics-2-PCF-20Mod-208807_NR_H-20Operating-20Manual_2018_2.pdf"
          },
          {
            "label": "Portable analyzer application.pdf",
            "url": "/datasheets/pcf-elettronica/mod-8807-nr-portable-gc-for-nmh-or-specifics-3-Applicazioni-20realizzate_UPDATED_ENGLISH_3.DOCX-5.pdf"
          }
        ],
        "imageSrc": "/graphics/pcf-elettronica/mod-8807-nr-portable-gc-for-nmh-or-specifics.jpg"
      }
    ]
  },
  {
    "id": "detectors-fid-pid-tcd",
    "title": "Our Detectors: FID, PID, TCD",
    "sourceUrl": "https://www.pcfelettronica.it/en/our-voc-detector/",
    "products": [
      {
        "slug": "fid-detector",
        "title": "FID Detector (Flame Ionization Detector)",
        "sourceUrl": "https://www.pcfelettronica.it/en/our-voc-detector/",
        "tagline": "Flame ionization detector subsystem",
        "intro": "PCF FID detectors are compact subsystems for GC and monitoring instruments. The FID is the most widely used GC detector for hydrocarbons — linear, stable and sensitive to ppm levels when supplied with pure air and hydrogen at stable flow rates.",
        "specifications": [
          {
            "label": "Type",
            "value": "Flame ionization detector (FID)"
          },
          {
            "label": "Sensitivity",
            "value": "Medium — ppm fractions"
          },
          {
            "label": "Selectivity",
            "value": "Low — responds to organic carbon broadly"
          },
          {
            "label": "Gas requirements",
            "value": "Pure air and hydrogen at controlled flow"
          },
          {
            "label": "Power",
            "value": "±15 Vdc"
          },
          {
            "label": "Output",
            "value": "Amplified signal proportional to concentration"
          }
        ],
        "features": [
          "Universal hydrocarbon detector for GC and monitors",
          "Medium sensitivity (ppm fractions), low selectivity",
          "Requires pure air and hydrogen combustion gases",
          "±15 Vdc supply; amplified engineered output signal",
          "Excellent long-term stability with stable gas flows",
          "Available as subsystem for custom instrument builders"
        ],
        "applications": [
          "Custom GC instrument development",
          "Replacement detector for PCF analysers",
          "VOC and THC monitoring subsystems",
          "Laboratory and process analysers"
        ],
        "datasheets": [],
        "imageSrc": "/graphics/pcf-elettronica/fid-detector.jpg"
      },
      {
        "slug": "pid-detector",
        "title": "PID Detector (Photo Ionization Detector)",
        "sourceUrl": "https://www.pcfelettronica.it/en/our-voc-detector/",
        "tagline": "Photo ionization detector subsystem",
        "intro": "PCF PID detectors use photo-ionization for detection of volatile organic compounds, especially aromatics and unsaturated species. Offered as a compact subsystem with dedicated PCB for power and signal conditioning.",
        "specifications": [
          {
            "label": "Type",
            "value": "Photo ionization detector (PID)"
          },
          {
            "label": "Target compounds",
            "value": "VOC, aromatics, unsaturated HC"
          },
          {
            "label": "Power",
            "value": "±15 Vdc"
          },
          {
            "label": "Output",
            "value": "Engineered analogue signal proportional to concentration"
          },
          {
            "label": "Form factor",
            "value": "Compact subsystem with PCB"
          }
        ],
        "features": [
          "Photo-ionization detection for VOC and aromatics",
          "Compact medium/small detector form factor",
          "Dedicated power and amplification PCB",
          "Suitable for BTEX and low-voltage aromatic monitoring",
          "Can be integrated in PCF BTEX analysers (Mod. 530 PID)",
          "Offered to third-party instrument developers"
        ],
        "applications": [
          "BTEX and aromatic monitoring",
          "Portable VOC detectors",
          "Custom analytical systems",
          "Industrial hygiene and immission instruments"
        ],
        "datasheets": [],
        "imageSrc": "/graphics/pcf-elettronica/pid-detector.jpg"
      },
      {
        "slug": "tcd-detector",
        "title": "TCD Detector (Thermo Conductivity Detector)",
        "sourceUrl": "https://www.pcfelettronica.it/en/our-voc-detector/",
        "tagline": "Thermal conductivity detector subsystem",
        "intro": "PCF TCD detectors measure changes in thermal conductivity of the carrier gas when analyte molecules elute from a GC column. Less sensitive than FID but extremely stable — ideal for permanent gases and light hydrocarbons such as CH₄ and CO₂.",
        "specifications": [
          {
            "label": "Type",
            "value": "Thermal conductivity detector (TCD)"
          },
          {
            "label": "Sensitivity",
            "value": "Lower than FID; excellent stability"
          },
          {
            "label": "Typical analytes",
            "value": "CH₄, CO₂, H₂, O₂ and permanent gases"
          },
          {
            "label": "Power",
            "value": "±15 Vdc"
          },
          {
            "label": "Output",
            "value": "Bridge unbalance signal, amplified"
          }
        ],
        "features": [
          "Wheatstone-bridge thermal conductivity detection",
          "Very stable and reproducible for permanent gases",
          "Combined with dedicated columns for CH₄, CO₂ etc.",
          "Low maintenance, no flame required",
          "Used in Mod. 529/NR/TCD process analysers",
          "Available as subsystem for custom GC builds"
        ],
        "applications": [
          "Process GC for biogas and combustion gases",
          "Permanent gas analysis",
          "Industrial process control",
          "Custom chromatograph development"
        ],
        "datasheets": [],
        "imageSrc": "/graphics/pcf-elettronica/tcd-detector.png"
      }
    ]
  },
  {
    "id": "accessories",
    "title": "Accessories",
    "sourceUrl": "https://www.pcfelettronica.it/en/apparecchi/accessori/",
    "products": [
      {
        "slug": "mod-pf-2014",
        "title": "Mod. PF 2014 S.S. — portable sampling probe",
        "sourceUrl": "https://www.pcfelettronica.it/en/sonde-di-campionamento/",
        "tagline": "Portable heated sampling probe (stainless steel)",
        "intro": "Mod. PF 2014 is a portable stainless-steel sampling probe with heated dust filter for use with PCF portable FID monitors. Standard 3 m heated line included; longer lines available on request up to 20 m. Compliant with UNI EN 12619:2013 heated sampling requirements.",
        "specifications": [
          {
            "label": "Material",
            "value": "Stainless steel (S.S.)"
          },
          {
            "label": "Heated line",
            "value": "3 m standard (optional longer)"
          },
          {
            "label": "Filter",
            "value": "Heated dust filter at probe head"
          },
          {
            "label": "Standard",
            "value": "UNI EN 12619:2013"
          }
        ],
        "features": [
          "Stainless-steel probe with heated dust filter",
          "Standard 3 m electrically heated sampling line",
          "Extended line lengths available (up to 20 m+)",
          "For portable VOC monitors Mod. 2000 series",
          "UNI EN 12619:2013 compliant heated sampling"
        ],
        "applications": [
          "Portable stack sampling with heated FID monitors",
          "Emission testing per EN 12619",
          "Field VOC measurements at elevated duct temperatures"
        ],
        "subcategory": "Sampling probes",
        "datasheets": [],
        "imageSrc": "/graphics/pcf-elettronica/mod-pf-2014.jpg"
      },
      {
        "slug": "sampling-probe-ss-1m",
        "title": "Sampling probe in S.S. (1 m)",
        "sourceUrl": "https://www.pcfelettronica.it/en/sonde-di-campionamento/",
        "tagline": "1 m stainless-steel sampling probe",
        "intro": "One-metre stainless-steel sampling probe for connection to heated lines and PCF analysers. Can be heated by sampled flue gas with a standard 3 m hot sampling line; longer lines on request.",
        "specifications": [
          {
            "label": "Length",
            "value": "1 m"
          },
          {
            "label": "Material",
            "value": "Stainless steel"
          },
          {
            "label": "Heated line",
            "value": "Typically 3 m (options available)"
          },
          {
            "label": "Standard",
            "value": "UNI EN 10263 / EN 12619 sampling practice"
          }
        ],
        "features": [
          "1 m length stainless-steel construction",
          "Compatible with heated sampling lines",
          "Compliant with UNI EN 12619",
          "For stack and emission sampling systems"
        ],
        "applications": [
          "Stack gas sampling for VOC analysers",
          "Connection to heated transport lines",
          "Emission measurement accessories"
        ],
        "subcategory": "Sampling probes",
        "datasheets": [],
        "imageSrc": "/graphics/pcf-elettronica/sampling-probe-ss-1m.jpg"
      },
      {
        "slug": "heated-sampling-line",
        "title": "Electrically heated sampling line",
        "sourceUrl": "https://www.pcfelettronica.it/en/linee-di-campionamento/",
        "tagline": "Electrically heated sampling line",
        "intro": "Electrically heated sampling lines maintain sample temperature between probe and analyser, preventing condensation of VOCs in the line. Standard lengths powered from the portable instrument; ex-proof versions available.",
        "specifications": [
          {
            "label": "Heating",
            "value": "Electrical heating along PTFE/stainless path"
          },
          {
            "label": "Power",
            "value": "From analyser or external controller"
          },
          {
            "label": "Versions",
            "value": "Standard and ex-proof"
          },
          {
            "label": "Lengths",
            "value": "Multiple lengths on request"
          }
        ],
        "features": [
          "Electric heating along full sample path",
          "Power supply from portable or rack analyser",
          "Prevents VOC condensation and adsorption losses",
          "Optional ex-proof version",
          "Custom lengths on request"
        ],
        "applications": [
          "Heated VOC sampling per EN 12619",
          "Connection between probe and FID monitor",
          "Stack emission measurement systems"
        ],
        "subcategory": "Sampling lines",
        "datasheets": [],
        "imageSrc": "/graphics/pcf-elettronica/heated-sampling-line.jpg"
      },
      {
        "slug": "cylinder-basket-2",
        "title": "Two-position cylinder basket",
        "sourceUrl": "https://www.pcfelettronica.it/en/cestello-porta-bombole/",
        "tagline": "Two-position gas cylinder carrier",
        "intro": "Two-position basket for safe transport and mounting of calibration and hydrogen gas cylinders with portable PCF monitoring systems in the field.",
        "specifications": [
          {
            "label": "Capacity",
            "value": "2 gas cylinders"
          },
          {
            "label": "Use",
            "value": "Field / portable monitoring kits"
          }
        ],
        "features": [
          "Holds two gas cylinders securely",
          "For portable monitor field kits",
          "Pairs with hydrogen and calibration gas bottles"
        ],
        "applications": [
          "Field emission measurement setups",
          "Portable analyser gas supply organisation"
        ],
        "subcategory": "Cylinder basket",
        "datasheets": [],
        "imageSrc": "/graphics/pcf-elettronica/cylinder-basket-2.jpg"
      },
      {
        "slug": "cylinder-basket-3",
        "title": "Three-position cylinder basket",
        "sourceUrl": "https://www.pcfelettronica.it/en/cestello-porta-bombole/",
        "tagline": "Three-position gas cylinder carrier",
        "intro": "Three-position basket for calibration gas, hydrogen and spare cylinders used with PCF portable and rack monitoring systems.",
        "specifications": [
          {
            "label": "Capacity",
            "value": "3 gas cylinders"
          },
          {
            "label": "Use",
            "value": "Field / laboratory gas organisation"
          }
        ],
        "features": [
          "Holds three gas cylinders",
          "Stable mounting for laboratory or vehicle use",
          "Part of PCF consumables and field kits"
        ],
        "applications": [
          "Multi-gas setups for VOC monitors",
          "Calibration and carrier gas storage"
        ],
        "subcategory": "Cylinder basket",
        "datasheets": [],
        "imageSrc": "/graphics/pcf-elettronica/cylinder-basket-3.jpg"
      },
      {
        "slug": "mod-9588",
        "title": "Mod. 9588 — zero air generator",
        "sourceUrl": "https://www.pcfelettronica.it/en/modelli-di-aria-di-zero/",
        "tagline": "Ultra-pure zero-air generator (UPP)",
        "intro": "Mod. 9588 generates ultra-pure zero air for FID combustion and carrier gas duties in PCF analysers and monitoring systems, replacing bottled air in fixed installations.",
        "specifications": [
          {
            "label": "Function",
            "value": "Zero / ultra-pure air generation (UPP)"
          },
          {
            "label": "Typical flow",
            "value": "~300 ml/min class (per analyser demand)"
          },
          {
            "label": "Application",
            "value": "FID air supply for PCF analysers"
          },
          {
            "label": "Mounting",
            "value": "Rack or bench module"
          }
        ],
        "features": [
          "On-site generation of FID-quality zero air",
          "For rack analysers Mod. 529 and emission monitors Mod. 110",
          "Reduces dependence on compressed air cylinders",
          "Pairs with hydrogen supply for complete FID gas setup"
        ],
        "applications": [
          "FID air supply for continuous analysers",
          "Air quality monitoring stations",
          "Replacement for bottled zero air"
        ],
        "subcategory": "Zero-air generators",
        "datasheetHref": "/datasheets/pcf-elettronica/mod-9588-0-Brochure958.pdf",
        "datasheets": [
          {
            "label": "Brochure Mod. 9588.pdf",
            "url": "/datasheets/pcf-elettronica/mod-9588-0-Brochure958.pdf"
          }
        ],
        "imageSrc": "/graphics/pcf-elettronica/mod-9588.jpg"
      },
      {
        "slug": "mod-dp-99",
        "title": "Mod. D/P 99 — metrological calibrator / diluter",
        "sourceUrl": "https://www.pcfelettronica.it/en/calibratori/",
        "tagline": "Metrological dynamic dilution calibrator",
        "intro": "Mod. D/P 99 is a metrological dynamic dilution calibrator (“performance tester”) that automatically verifies linearity, detection limit and repeatability of emission and immission analysers at multiple programmed steps — for both continuous and alternating measurement methods.",
        "specifications": [
          {
            "label": "Function",
            "value": "Dynamic dilution / metrological calibrator"
          },
          {
            "label": "MFC channels",
            "value": "Up to 4 mass flow controllers"
          },
          {
            "label": "Mixing chamber",
            "value": "Glass Duraglass"
          },
          {
            "label": "Tests performed",
            "value": "Linearity, LDL, repeatability at multiple steps"
          },
          {
            "label": "Methods",
            "value": "Continuous and alternating analyser modes"
          }
        ],
        "features": [
          "Automatic linearity and LDL verification",
          "Up to 4 mass flow controllers",
          "Glass Duraglass mixing chamber",
          "Multi-point programmable check sequences",
          "For QA/QC of VOC and emission analysers"
        ],
        "applications": [
          "Calibration and QA of emission analysers",
          "Immission monitor performance checks",
          "Automated linearity audits",
          "Laboratory and CEMS validation"
        ],
        "subcategory": "Calibrators",
        "datasheetHref": "/datasheets/pcf-elettronica/mod-dp-99-0-Diluitore-DP99.pdf",
        "datasheets": [
          {
            "label": "Brochure D/P 99.pdf",
            "url": "/datasheets/pcf-elettronica/mod-dp-99-0-Diluitore-DP99.pdf"
          },
          {
            "label": "Operating Manual D/P 99.pdf",
            "url": "/datasheets/pcf-elettronica/mod-dp-99-1-Operating-20Manual-20DP_99.pdf"
          },
          {
            "label": "Spec Test Example .pdf",
            "url": "/datasheets/pcf-elettronica/mod-dp-99-2-Test-20Specifiche.pdf"
          },
          {
            "label": "General Spec Test.pdf",
            "url": "/datasheets/pcf-elettronica/mod-dp-99-3-Test-20Generali.pdf"
          }
        ],
        "imageSrc": "/graphics/pcf-elettronica/mod-dp-99.jpg"
      },
      {
        "slug": "mod-liv-10",
        "title": "Mod. LIV 10 — multi-line module",
        "sourceUrl": "https://www.pcfelettronica.it/en/moduli-multi-linea/",
        "tagline": "Multi-line selector for emission monitoring",
        "intro": "Mod. LIV 10 is a multi-point emission analysis selector that routes stack samples to FID analysers from multiple lines. Includes touch-screen displays for stream control — used in multi-stack and multi-point CEMS configurations.",
        "specifications": [
          {
            "label": "Function",
            "value": "Multi-line / multi-point stream selector"
          },
          {
            "label": "Displays",
            "value": "2× 4.3″ touch-screen graphic displays"
          },
          {
            "label": "Integration",
            "value": "FID emission monitoring systems"
          },
          {
            "label": "Operation",
            "value": "Analysis and calibration phase switching"
          }
        ],
        "features": [
          "Multi-point sample stream selection",
          "Touch-screen graphic displays for stream control",
          "For FID analyser-based emission systems",
          "Inputs/outputs for integrated CEMS architecture",
          "Switches between analysis and calibration phases"
        ],
        "applications": [
          "Multi-stack emission monitoring",
          "Plants with several sampling points",
          "Centralised CEMS with one analyser",
          "Hexane, toluene and VOC emission switching systems"
        ],
        "subcategory": "Multi-line modules",
        "datasheetHref": "/datasheets/pcf-elettronica/mod-liv-10-0-Selettore-20Linee.pdf",
        "datasheets": [
          {
            "label": "Line Selector.pdf",
            "url": "/datasheets/pcf-elettronica/mod-liv-10-0-Selettore-20Linee.pdf"
          }
        ],
        "imageSrc": "/graphics/pcf-elettronica/mod-liv-10.jpg"
      }
    ]
  }
] as const;

        export const pcfElettronicaProducts: SalesProduct[] = pcfElettronicaCatalog.flatMap((category) =>
          category.products.map((item) => ({
            ...item,
            category: category.title,
            categoryId: category.id
          }))
        );
