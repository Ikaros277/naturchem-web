import type { SalesProduct } from "@/lib/sales-types";

export type SensecaCatalogProduct = Omit<SalesProduct, "category">;

export type SensecaCatalogCategory = {
  id: string;
  title: string;
  sourceUrl: string;
  products: SensecaCatalogProduct[];
};

/** Senseca — synced from environmental.senseca.com/products/ */
export const sensecaCatalog: readonly SensecaCatalogCategory[] = [
  {
    "id": "solar-photoradiometry",
    "title": "Solar & Photoradiometry",
    "sourceUrl": "https://environmental.senseca.com/measure/solar-sensors-photoradiometry-solar-instruments/",
    "products": [
      {
        "slug": "aeolus-3-3-axis-ultrasonic-anemometer",
        "title": "AEOLUS-3 – 3-Axis Ultrasonic Anemometer",
        "sourceUrl": "https://environmental.senseca.com/product/aeolus-3-3-axis-ultrasonic-anemometer/",
        "tagline": "AEOLUS is our ultimate solution for precise wind monitoring in any environment .",
        "intro": "AEOLUS is our ultimate solution for precise wind monitoring in any environment . Specifically suitable for applications such as: Wind farm monitoring Automatic Weather Stations (AWS) Buildings, constructions and bridges control Ports, airports and heliports Road and railway tunnels Beside the measurement of wind speed and direction, it provides U-V-W Cartesian components and Wind Gust values.",
        "specifications": [],
        "features": [
          "Wind farm monitoring",
          "Automatic Weather Stations (AWS)",
          "Buildings, constructions and bridges control",
          "Ports, airports and heliports",
          "Road and railway tunnels",
          "RS232 , RS485 and RS422 isolated outputs, with NMEA , Modbus -RTU and ASCII proprietary protocols.",
          "SDI-12 isolated output.",
          "Three analog outputs , for wind speed and direction or for wind U-V-W cartesian components. The type of analog output depends on model."
        ],
        "applications": [
          "Monitoring and measurement of solar & photoradiometry."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DSH_AEOLUS_EN_datasheet.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DSH_AEOLUS_EN_datasheet.pdf"
          },
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/MN_WUS30F_EN_manual.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/aeolus-3-3-axis-ultrasonic-anemometer.png"
      },
      {
        "slug": "btd-1-thunderstorm-warning-system",
        "title": "BTD-1 – Thunderstorm Warning System",
        "sourceUrl": "https://environmental.senseca.com/product/btd-1-thunderstorm-warning-system/",
        "tagline": "Operators on airports, renewable energy sites, ports, construction areas and industrial plants need to act before the first strike, not after.",
        "intro": "Operators on airports, renewable energy sites, ports, construction areas and industrial plants need to act before the first strike, not after. The BTD-1 supports that decision by monitoring the quasi-electrostatic field and detecting cloud-to-ground, intra-cloud and cloud-to-cloud lightning , while also recognizing charged precipitation and strong electric field conditions linked to developing storms overhead.",
        "specifications": [],
        "features": [
          "Earlier storm warning — Detects overhead thunderstorm conditions before the first nearby strike, supporting timely safety decisions.",
          "Severe Storm function — Flags highly active storm cells linked to large hailstones and damaging weather events.",
          "Range up to 83 km — 35 km detection as standard, extendable to 83 km to suit wider site coverage needs.",
          "Reliable detection — 97% efficiency for a single flash within 35 km and false alarm rate below 1%.",
          "Built for outdoor use — IP66 aluminum housing with no moving parts for low-maintenance fixed installations.",
          "Integration ready — RS422 output, three relays, GPS/GNSS timing and Lightning Eye software for monitoring and logging."
        ],
        "applications": [
          "Monitoring and measurement of solar & photoradiometry.",
          "Outdoor monitoring deployments.",
          "Industrial process and environmental control."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/dsh_fam_BTD-1_en_datasheet.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/dsh_fam_BTD-1_en_datasheet.pdf"
          },
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/umn_fam_BTD-1_en_manual.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/btd-1-thunderstorm-warning-system.png"
      },
      {
        "slug": "hd9008t-9009t-serie-meteorological-temperature-and-rh-transmitter-2",
        "title": "HD9008T…-HD9009T… Series – Meteorological Temperature and RH Transmitter",
        "sourceUrl": "https://environmental.senseca.com/product/hd9008t-9009t-serie-meteorological-temperature-and-rh-transmitter-2/",
        "tagline": "The HD9008 …and HD9009 … series are single block RH and temperature (or only temperature) microprocessor transmitters, temperature configurable.",
        "intro": "The HD9008 …and HD9009 … series are single block RH and temperature (or only temperature) microprocessor transmitters, temperature configurable.",
        "specifications": [],
        "features": [
          "HD9008TRR: 2-wire with 4…20 mA output for RH and temperature",
          "HD9008T7AC: 2-wire with 4…20 mA output (only temperature)",
          "HD9008T7S: with RS485 MODBUS-RTU output (only temperature)",
          "HD9009TRR : 0…1 V standard voltage output (other ouputs available on demand) for RH and temperature",
          "good linearity,",
          "insensitivity to temperature changes,",
          "fast response time",
          "long-lasting life."
        ],
        "applications": [
          "Monitoring and measurement of solar & photoradiometry."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/dsh_fam_HD9008T_HD9009T_en_datasheet.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/dsh_fam_HD9008T_HD9009T_en_datasheet.pdf"
          },
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD9008TxxS_Modbus_manual_ENG.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd9008t-9009t-serie-meteorological-temperature-and-rh-transmitter-2.jpg"
      },
      {
        "slug": "lppyra-lite-pyranometer-for-small-scale-pv-monitoring",
        "title": "LPPYRA-Lite – Pyranometer for Small-Scale PV Monitoring",
        "sourceUrl": "https://environmental.senseca.com/product/lppyra-lite-pyranometer-for-small-scale-pv-monitoring/",
        "tagline": "LPPYRA-Lite is a Spectrally Flat Pyranometer according to ISO 9060:2018.",
        "intro": "LPPYRA-Lite is a Spectrally Flat Pyranometer according to ISO 9060:2018. It measures the irradiance on a flat surface (W/m²) Small, light and compact. This pyranometer is especially designed for small-scale PV monitoring and ordinary efficency control of PV systems, The LPPYRA-Lite uses a thermopile sensor that grants accurate, reliable and precise measurements according to the reference standard.",
        "specifications": [],
        "features": [
          "LPPYRA-Lite passive",
          "LPPYRA-LiteAC active with 2-wire (current loop) 4…20 mA output."
        ],
        "applications": [
          "Monitoring and measurement of solar & photoradiometry."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_LPPYRA-Lite_datasheet_ENG.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_LPPYRA-Lite_datasheet_ENG.pdf"
          },
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/umn_fam_LPPYRA-Lite_en_manual.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/lppyra-lite-pyranometer-for-small-scale-pv-monitoring.jpg"
      },
      {
        "slug": "lppyra02-series-spectrally-flat-class-b-pyranometer",
        "title": "LPPYRA02… Series – Spectrally Flat Class B Pyranometer",
        "sourceUrl": "https://environmental.senseca.com/product/lppyra02-series-spectrally-flat-class-b-pyranometer/",
        "tagline": "Please note that this product has been discontinued. The corresponding new product is PYRAsense02 – LPS02… series .",
        "intro": "Please note that this product has been discontinued. The corresponding new product is PYRAsense02 – LPS02… series . LPPYRA02; LPPYRA02AC; LPPYRA02ACS; LPPYRA02AV; LPPYRA02S; LPPYRA02S12;",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of solar & photoradiometry."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_LPPYRA02_manual_ENG.pdf",
        "datasheets": [
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_LPPYRA02_manual_ENG.pdf"
          },
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_LPPYRA02_datasheet_ENG.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/lppyra02-series-spectrally-flat-class-b-pyranometer.jpg"
      },
      {
        "slug": "lppyra03-series-spectrally-flat-class-c-pyranometers",
        "title": "LPPYRA03… Series – Spectrally Flat Class C Pyranometers",
        "sourceUrl": "https://environmental.senseca.com/product/lppyra03-series-spectrally-flat-class-c-pyranometers/",
        "tagline": "Please note that this product has been discontinued. The corresponding new product is PYRAsense03 – LPS03… series .",
        "intro": "Please note that this product has been discontinued. The corresponding new product is PYRAsense03 – LPS03… series . LPPYRA03; LPPYRA03AC; LPPYRA03ACS; LPPYRA03AV; LPPYRA03S; LPPYRA03S12;",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of solar & photoradiometry."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_LPPYRA03_manual_ENG.pdf",
        "datasheets": [
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_LPPYRA03_manual_ENG.pdf"
          },
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_LPPYRA03_datasheet_ENG.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/lppyra03-series-spectrally-flat-class-c-pyranometers.jpg"
      },
      {
        "slug": "lppyra05-spectrally-flat-class-b-albedometer",
        "title": "LPPYRA05 – Spectrally Flat Class B Albedometer",
        "sourceUrl": "https://environmental.senseca.com/product/lppyra05-spectrally-flat-class-b-albedometer/",
        "tagline": "Please note that this product has been discontinued. The corresponding new product is LPS05- Spectrally Flat Class B Albedometer .",
        "intro": "Please note that this product has been discontinued. The corresponding new product is LPS05- Spectrally Flat Class B Albedometer .",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of solar & photoradiometry."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_LP_PYRA_05_manual_ENG.pdf",
        "datasheets": [
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_LP_PYRA_05_manual_ENG.pdf"
          },
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_LPPYRA_05_06_11_datasheet_ENG.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/lppyra05-spectrally-flat-class-b-albedometer.jpg"
      },
      {
        "slug": "lppyra06-spectrally-flat-class-c-albedometer",
        "title": "LPPYRA06 – Spectrally Flat Class C Albedometer",
        "sourceUrl": "https://environmental.senseca.com/product/lppyra06-spectrally-flat-class-c-albedometer/",
        "tagline": "Please note that this product has been discontinued. The corresponding new product is LPS06- Spectrally Flat Class C Albedometer .",
        "intro": "Please note that this product has been discontinued. The corresponding new product is LPS06- Spectrally Flat Class C Albedometer .",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of solar & photoradiometry."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_LP_PYRA_06_manual_ENG.pdf",
        "datasheets": [
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_LP_PYRA_06_manual_ENG.pdf"
          },
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_LPPYRA_05_06_11_datasheet_ENG.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/lppyra06-spectrally-flat-class-c-albedometer.jpg"
      },
      {
        "slug": "lppyra10-serie-pyranometer-secondary-standard",
        "title": "LPPYRA10… Series – Pyranometers Spectrally Flat Class A",
        "sourceUrl": "https://environmental.senseca.com/product/lppyra10-serie-pyranometer-secondary-standard/",
        "tagline": "Please note that this product has been discontinued. The corresponding new product is PYRAsense10 – LPS10… series .",
        "intro": "Please note that this product has been discontinued. The corresponding new product is PYRAsense10 – LPS10… series . LPPYRA10; LPPYRA10AC; LPPYRA10ACS; LPPYRA10AV; LPPYRA10S; LPPYRA10S12;",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of solar & photoradiometry."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_LPPYRA10_manual_ENG.pdf",
        "datasheets": [
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_LPPYRA10_manual_ENG.pdf"
          },
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_LPPYRA10_datasheet_ENG.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/lppyra10-serie-pyranometer-secondary-standard.jpg"
      },
      {
        "slug": "lppyra11-albedometer-with-secondary-standard-pyranometers",
        "title": "LPPYRA11 – Spectrally Flat Class A Albedometer",
        "sourceUrl": "https://environmental.senseca.com/product/lppyra11-albedometer-with-secondary-standard-pyranometers/",
        "tagline": "Please note that this product has been discontinued. The corresponding new product is LPS11- Spectrally Flat Class A Albedometer .",
        "intro": "Please note that this product has been discontinued. The corresponding new product is LPS11- Spectrally Flat Class A Albedometer .",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of solar & photoradiometry."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_LPPYRA_05_06_11_datasheet_ENG.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_LPPYRA_05_06_11_datasheet_ENG.pdf"
          },
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_LP_PYRA_11_manual_ENG.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/lppyra11-albedometer-with-secondary-standard-pyranometers.jpg"
      },
      {
        "slug": "lppyra12-series-spectrally-flat-class-b-pyranometers-with-shadow-ring",
        "title": "LPPYRA12… Series – Spectrally Flat Class B Pyranometers with Shadow Ring",
        "sourceUrl": "https://environmental.senseca.com/product/lppyra12-series-spectrally-flat-class-b-pyranometers-with-shadow-ring/",
        "tagline": "The LPPYRA12 are pyranometers classified as Spectrally Flat Class B (First Class) in accordance with ISO 9060:2018 and according to the WMO.",
        "intro": "The LPPYRA12 are pyranometers classified as Spectrally Flat Class B (First Class) in accordance with ISO 9060:2018 and according to the WMO. They are provided with an adjustable shadow ring for the measurement of diffuse radiation only. The pyranometers are available in different versions: LPPYRA12 – PASSIVE LPPYRA12AC – ACTIVE with CURRENT 4..20 mA output. Measuring range: 0…2000 W/m² or 0…4000 W/m² (LPPYRA12AC4).",
        "specifications": [],
        "features": [
          "LPPYRA12 – PASSIVE",
          "LPPYRA12AC – ACTIVE with CURRENT 4..20 mA output. Measuring range: 0…2000 W/m² or 0…4000 W/m² (LPPYRA12AC4).",
          "LPPYRA12ACS – double 4…20mA current output and RS485 serial output with MODBUS-RTU protocol. Measuring range: 0…2000 W/m² or 0…4000 W/m² (LPPYRA12ACS4).",
          "LPYRA12AV – ACTIVE with VOLTAGE 0..1 V, 0..5 V or 0..10 V output. Measuring range: 0…2000 W/m² or 0…4000 W/m² (LPPYRA12AV4).",
          "LPPYRA12S – with MODBUS RS485 output",
          "LPPYRA12S12 – with SDI-12 output"
        ],
        "applications": [
          "Monitoring and measurement of solar & photoradiometry."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_LPPYRA12_manual_ENG.pdf",
        "datasheets": [
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_LPPYRA12_manual_ENG.pdf"
          },
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_LPPYRA12_datasheet_ENG.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/lppyra12-series-spectrally-flat-class-b-pyranometers-with-shadow-ring.jpg"
      },
      {
        "slug": "lppyra13-serie-secondary-standard-pyranometers",
        "title": "LPPYRA13… Series – Pyranometers Spectrally Flat Class A with Shadow Ring",
        "sourceUrl": "https://environmental.senseca.com/product/lppyra13-serie-secondary-standard-pyranometers/",
        "tagline": "The pyranometers LPPYRA13 measure the irradiance on a flat surface (W/m²).",
        "intro": "The pyranometers LPPYRA13 measure the irradiance on a flat surface (W/m²). The pyranometers are equipped with an adjustable shadow ring for the measurement of diffuse radiation only. They are classified as Spectrally Flat Class A in accordance with ISO 9060:2018 (previuosly ‘Secondary Standard’) and according to the publication “Guide to Meteorological Instruments and Methods of Observation” of WMO.",
        "specifications": [],
        "features": [
          "LPPYRA13 – PASSIVE",
          "LPPYRA13AC – ACTIVE with CURRENT 4..20 mA output. Measuring range: 0…2000 W/m² or 0…4000 W/m² (LPPYRA13AC4).",
          "LPPYRA13ACS – double 4…20mA current output and RS485 serial output with MODBUS-RTU protocol. Measuring range: 0…2000 W/m² or 0…4000 W/m² (LPPYRA13ACS4).",
          "LPYRA13AV – ACTIVE with VOLTAGE 0..1 V, 0..5 V or 0..10 V output. Measuring range: 0…2000 W/m² or 0…4000 W/m² (LPPYRA13AV4).",
          "LPPYRA13S – with MODBUS RS485 output",
          "LPPYRA13S12 – with SDI-12 output"
        ],
        "applications": [
          "Monitoring and measurement of solar & photoradiometry."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_LPPYRA13_manual_ENG.pdf",
        "datasheets": [
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_LPPYRA13_manual_ENG.pdf"
          },
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_LPPYRA13_datasheet_ENG.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/lppyra13-serie-secondary-standard-pyranometers.jpg"
      },
      {
        "slug": "lppyrhe16-serie-first-class-b-pyrheliometer",
        "title": "LPPYRHE16… Series – Class B Pyrheliometers",
        "sourceUrl": "https://environmental.senseca.com/product/lppyrhe16-serie-first-class-b-pyrheliometer/",
        "tagline": "The pyrheliometer LPPYRHE16 ( Class B Pyrheliometer according to ISO 9060:2018 classification) is an instrument for direct measurement of solar irradiance (Watt/m²).",
        "intro": "The pyrheliometer LPPYRHE16 ( Class B Pyrheliometer according to ISO 9060:2018 classification) is an instrument for direct measurement of solar irradiance (Watt/m²). The receiving surface must be positioned (via a solar tracker or else) perpendicularly to sun’s rays. The use of apposite diaphragms allows only direct light to hit the surface of the sensor.",
        "specifications": [],
        "features": [
          "LPPYRHE16 – passive;",
          "LPPYRHE16AC – active with corrent output 4…20 mA;",
          "LPPYRHE16ACS – 4…20mA current output (integrated amplifier-transmitter) and RS485 serial output with MODBUS-RTU protocol;",
          "LPPYHRE16AV – active with voltage output 0…1 V, 0…5 V or 0…10 V;",
          "LPPYRHE16S – active with RS485 serial output with MODBUS-RTU protocol."
        ],
        "applications": [
          "Monitoring and measurement of solar & photoradiometry."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/dsh_fam_LPPYRHE16_en_datasheet.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/dsh_fam_LPPYRHE16_en_datasheet.pdf"
          },
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/umn_fam_LPPYRHE16_en_manual.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/lppyrhe16-serie-first-class-b-pyrheliometer.jpg"
      },
      {
        "slug": "lps05-spectrally-flat-class-b-albedometer",
        "title": "LPS05… – Spectrally Flat Class B Albedometer",
        "sourceUrl": "https://environmental.senseca.com/product/lps05-spectrally-flat-class-b-albedometer/",
        "tagline": "LPS05.. .",
        "intro": "LPS05.. . is our new Spectrally Flat Class B albedometer composed by 2 Class B Pyranometers: the perfect solution for precise and efficient measurement of surface reflectivity and solar radiation!",
        "specifications": [],
        "features": [
          "Accurate Measurement: it utilizes advanced sensor technology to provide highly accurate measurements of surface reflectivity, ensuring you obtain reliable data for your research or applications.",
          "Dual Functionality: thermopile sensors facing upwards and downwards, capturing both incident and reflected solar radiation. This means you get a comprehensive view of your solar data, allowing for unparalleled insights..",
          "Weather-Resistant Design: Built to withstand diverse environmental conditions, our Albedometer features a robust and weather-resistant design. From scorching sunlight to challenging climates, it is build to deliver consistent performance."
        ],
        "applications": [
          "Monitoring and measurement of solar & photoradiometry."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/dsh_prd_LPS05_en_datasheet.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/dsh_prd_LPS05_en_datasheet.pdf"
          },
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/umn_fam_LPS05-LPS11_en_manual.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/lps05-spectrally-flat-class-b-albedometer.jpg"
      },
      {
        "slug": "lps06-spectrally-flat-class-c-albedometer",
        "title": "LPS06… – Spectrally Flat Class C Albedometer",
        "sourceUrl": "https://environmental.senseca.com/product/lps06-spectrally-flat-class-c-albedometer/",
        "tagline": "LPS06.. .",
        "intro": "LPS06.. . is our new Spectrally Flat Class C albedometer composed by 2 Class C Pyranometers: the perfect solution for precise and efficient measurement of surface reflectivity and solar radiation!",
        "specifications": [],
        "features": [
          "Accurate Measurement: it utilizes advanced sensor technology to provide highly accurate measurements of surface reflectivity, ensuring you obtain reliable data for your research or applications.",
          "Dual Functionality: thermopile sensors facing upwards and downwards, capturing both incident and reflected solar radiation. This means you get a comprehensive view of your solar data, allowing for unparalleled insights..",
          "Weather-Resistant Design: Built to withstand diverse environmental conditions, our Albedometer features a robust and weather-resistant design. From scorching sunlight to challenging climates, it is build to deliver consistent performance."
        ],
        "applications": [
          "Monitoring and measurement of solar & photoradiometry."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/dsh_prd_LPS06_en_datasheet.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/dsh_prd_LPS06_en_datasheet.pdf"
          },
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/umn_prd_LPS06_en_manual.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/lps06-spectrally-flat-class-c-albedometer.jpg"
      },
      {
        "slug": "lps11-spectrally-flat-class-a-albedometer",
        "title": "LPS11… – Spectrally Flat Class A Albedometer",
        "sourceUrl": "https://environmental.senseca.com/product/lps11-spectrally-flat-class-a-albedometer/",
        "tagline": "LPS11.. .",
        "intro": "LPS11.. . is our new Spectrally Flat Class A albedometer composed by 2 Class A Pyranometers: the perfect solution for precise and efficient measurement of surface reflectivity and solar radiation!",
        "specifications": [],
        "features": [
          "Accurate Measurement: it utilizes advanced sensor technology to provide highly accurate measurements of surface reflectivity, ensuring you obtain reliable data for your research or applications.",
          "Dual Functionality: thermopile sensors facing upwards and downwards, capturing both incident and reflected solar radiation. This means you get a comprehensive view of your solar data, allowing for unparalleled insights..",
          "Weather-Resistant Design: Built to withstand diverse environmental conditions, our Albedometer features a robust and weather-resistant design. From scorching sunlight to challenging climates, it is build to deliver consistent performance."
        ],
        "applications": [
          "Monitoring and measurement of solar & photoradiometry."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/dsh_prd_LPS11_en_datasheet.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/dsh_prd_LPS11_en_datasheet.pdf"
          },
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/umn_fam_LPS05-LPS11_en_manual.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/lps11-spectrally-flat-class-a-albedometer.jpg"
      },
      {
        "slug": "mdfs-dust-fall-monitoring-system",
        "title": "MDFS – Dust Fall Monitoring System",
        "sourceUrl": "https://environmental.senseca.com/product/mdfs-dust-fall-monitoring-system/",
        "tagline": "The Dust Fall Monitoring System (MDFS) helps solar plant operators determine the best time to clean PV panels by measuring the impact of soiling on solar radiation.",
        "intro": "The Dust Fall Monitoring System (MDFS) helps solar plant operators determine the best time to clean PV panels by measuring the impact of soiling on solar radiation. The system compares the output of two temperature-compensated reference cells , available with voltage output (MDFS2) or Modbus communication (MDFS2-S) .",
        "specifications": [],
        "features": [
          "Basic mode : the operator manually compares the Clean and Dirty cell readings to decide when cleaning is needed (no control box required).",
          "Advanced mode : with the optional control box, the system automatically calculates the soiling attenuation rate (%) , supporting cleaning decisions and confirming that cleaning and maintenance activities have been carried out."
        ],
        "applications": [
          "Monitoring and measurement of solar & photoradiometry."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/dsh_fam_MDFS2_en_datasheet.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/dsh_fam_MDFS2_en_datasheet.pdf"
          },
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/umn_fam_MDFS2_en_manual.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/mdfs-dust-fall-monitoring-system.png"
      },
      {
        "slug": "pyrafast-fast-response-class-a-pyranometer",
        "title": "PYRAfast – Fast Response Class A Pyranometer",
        "sourceUrl": "https://environmental.senseca.com/product/pyrafast-fast-response-class-a-pyranometer/",
        "tagline": "The LPR10M0T Pyranometer is a high-performance sensor designed to measure global solar irradiance on a flat surface ( W/m² ), capturing both direct and diffuse solar radiation with precision.",
        "intro": "The LPR10M0T Pyranometer is a high-performance sensor designed to measure global solar irradiance on a flat surface ( W/m² ), capturing both direct and diffuse solar radiation with precision. Engineered to meet the highest industry standards, this Fast Response Spectrally Flat Class A pyranometer complies with ISO 9060:2018, WMO raccomandations and IEC 61724-1 requirements for Class A PV Systems.",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of solar & photoradiometry."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/PV_System_Monitoring_Solutions.pdf",
        "datasheets": [
          {
            "label": "IEC 61724-1 requirements for Class A PV Systems.",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/PV_System_Monitoring_Solutions.pdf"
          },
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/dsh_prd_LPR10_en_datasheet.pdf"
          },
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/umn_prd_LPR10_en_manual.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/pyrafast-fast-response-class-a-pyranometer.png"
      },
      {
        "slug": "pyrasense02-class-b-pyranometer",
        "title": "PYRAsense02 – Class B Pyranometer",
        "sourceUrl": "https://environmental.senseca.com/product/pyrasense02-class-b-pyranometer/",
        "tagline": "PYRAsense02 is the new ‘Spectrally Flat’ Class B pyranometer, according to ISO 9060:2018.",
        "intro": "PYRAsense02 is the new ‘Spectrally Flat’ Class B pyranometer, according to ISO 9060:2018. A new, elegantly shaped design disguises, in digital models , a body in which the 3 internal temperature, humidity and pressure sensors allow to keep operating conditions of the sensors always under control.",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of solar & photoradiometry."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/PV_System_Monitoring_Solutions.pdf",
        "datasheets": [
          {
            "label": "IEC 61724-1 requirements for Class B PV Systems .",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/PV_System_Monitoring_Solutions.pdf"
          },
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/dsh_fam_LPS02_en_datasheet.pdf"
          },
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/umn_fam_LPS02_en_manual.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/pyrasense02-class-b-pyranometer.jpg"
      },
      {
        "slug": "pyrasense03-class-c-pyranometer",
        "title": "PYRAsense03 – Class C Pyranometer",
        "sourceUrl": "https://environmental.senseca.com/product/pyrasense03-class-c-pyranometer/",
        "tagline": "PYRAsense03 is the new ‘Spectrally Flat’ Class C pyranometer, according to ISO 9060:2018.",
        "intro": "PYRAsense03 is the new ‘Spectrally Flat’ Class C pyranometer, according to ISO 9060:2018. A new, elegantly shaped design disguises, in digital models , a body in which the 3 internal temperature, humidity and pressure sensors allow keeping operating conditions of the sensors always under control.",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of solar & photoradiometry."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/dsh_fam_LPS03_en_datasheet.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/dsh_fam_LPS03_en_datasheet.pdf"
          },
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/umn_fam_LPS03_en_manual.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/pyrasense03-class-c-pyranometer.jpg"
      },
      {
        "slug": "pyrasense10-class-a-pyranometer",
        "title": "PYRAsense10 – Class A Pyranometer",
        "sourceUrl": "https://environmental.senseca.com/product/pyrasense10-class-a-pyranometer/",
        "tagline": "PYRAsense10 is the new ‘Spectrally Flat’ Class A pyranometer, according to ISO 9060:2018.",
        "intro": "PYRAsense10 is the new ‘Spectrally Flat’ Class A pyranometer, according to ISO 9060:2018. A new, elegantly shaped design disguises, in digital models , a body in which the 3 internal temperature, humidity and pressure sensors allow to keep operating conditions of the sensors always under control.",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of solar & photoradiometry."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/PV_System_Monitoring_Solutions.pdf",
        "datasheets": [
          {
            "label": "IEC 61724-1 requirements for Class A PV Systems .",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/PV_System_Monitoring_Solutions.pdf"
          },
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/dsh_fam_LPS10_en_datasheet.pdf"
          },
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/umn_fam_LPS10_en_manual.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/pyrasense10-class-a-pyranometer.jpg"
      },
      {
        "slug": "pyrasense12-class-b-pyranometer-with-shadow-ring",
        "title": "PYRAsense12 – Class B Pyranometer with Shadow Ring",
        "sourceUrl": "https://environmental.senseca.com/product/pyrasense12-class-b-pyranometer-with-shadow-ring/",
        "tagline": "The LPS12… series is built around the PYRAsense02, our Class B Spectrally Flat pyranometer .",
        "intro": "The LPS12… series is built around the PYRAsense02, our Class B Spectrally Flat pyranometer . This family of pyranometers is standard equipped with an adjustable shadow ring that prevents the direct solar radiation to reach the sensor the whole day long, so that only the diffuse solar radiation will be measured.",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of solar & photoradiometry."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/dsh_fam_LPS12_en_datasheet.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/dsh_fam_LPS12_en_datasheet.pdf"
          },
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/umn_fam_LPS12-LPS13_en_manual.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/pyrasense12-class-b-pyranometer-with-shadow-ring.jpg"
      },
      {
        "slug": "pyrasense13-class-a-pyranometer-with-shadow-ring",
        "title": "PYRAsense13 – Class A Pyranometer with Shadow Ring",
        "sourceUrl": "https://environmental.senseca.com/product/pyrasense13-class-a-pyranometer-with-shadow-ring/",
        "tagline": "The LPS13… series is built around the PYRAsense10, our Class A Spectrally Flat pyranometer .",
        "intro": "The LPS13… series is built around the PYRAsense10, our Class A Spectrally Flat pyranometer . This family of pyranometers is standard equipped with an adjustable shadow ring that prevents the direct solar radiation to reach the sensor the whole day long, so that only the diffuse solar radiation will be measured.",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of solar & photoradiometry."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/dsh_fam_LPS13_en_datasheet.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/dsh_fam_LPS13_en_datasheet.pdf"
          },
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/umn_fam_LPS12-LPS13_en_manual.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/pyrasense13-class-a-pyranometer-with-shadow-ring.jpg"
      },
      {
        "slug": "rtd-series-tipping-bucket-rain-gauge",
        "title": "RTD Series – Tipping Bucket Rain Gauge",
        "sourceUrl": "https://environmental.senseca.com/product/rtd-series-tipping-bucket-rain-gauge/",
        "tagline": "The RTD Series is a new generation of tipping bucket rain gauge sensors , designed in full compliance with WMO-No.",
        "intro": "The RTD Series is a new generation of tipping bucket rain gauge sensors , designed in full compliance with WMO-No. 8 (“Guide to Instruments and Methods of Observation”). Entirely made of corrosion-resistant materials , they ensure long-term accuracy, durability, and minimal maintenance , providing reliable rainfall and precipitation measurement in any environment.",
        "specifications": [],
        "features": [
          "Potential-free NC contact",
          "Digital outputs: RS485, SDI-12, MOSFET Open Drain",
          "Analog outputs: 4…20 mA or 0…10 V"
        ],
        "applications": [
          "Monitoring and measurement of solar & photoradiometry."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/dsh_fam_RTD_en_datasheet.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/dsh_fam_RTD_en_datasheet.pdf"
          },
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/umn_fam_RTD_en_manual.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/rtd-series-tipping-bucket-rain-gauge.png"
      },
      {
        "slug": "sems-2000-solar-tracking",
        "title": "SEMS-2000 – Solar Tracking",
        "sourceUrl": "https://environmental.senseca.com/product/sems-2000-solar-tracking/",
        "tagline": "The SEMS-2000 package delivers a complete, field-ready solution for automated solar tracking and support for solar radiation measurements .",
        "intro": "The SEMS-2000 package delivers a complete, field-ready solution for automated solar tracking and support for solar radiation measurements . Designed for reliable outdoor operation, it enables accurate measurement of DNI (Direct Normal Irradiance) with a pyrheliometer and DHI (Diffuse Horizontal Irradiance) with a pyranometer , with easy integration into data acquisition systems.",
        "specifications": [],
        "features": [
          "Fully automated two-axis solar tracking for precise radiometric measurements",
          "Outdoor-ready design with robust components and IP66 protection",
          "Accurate time sync & automatic site coordinates via external GPS",
          "Seamless system integration through Modbus RTU RS485",
          "Autonomous operation thanks to internal batteries with integrated charge control"
        ],
        "applications": [
          "Monitoring and measurement of solar & photoradiometry.",
          "Outdoor monitoring deployments."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/dsh_fam_SEMS-2000_en_datasheet.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/dsh_fam_SEMS-2000_en_datasheet.pdf"
          },
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/umn_fam_ST2000_en_manual.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/sems-2000-solar-tracking.png"
      },
      {
        "slug": "smart-sensor-hub",
        "title": "SMARTBOX-8CH – Smart Sensor Hub",
        "sourceUrl": "https://environmental.senseca.com/product/smart-sensor-hub/",
        "tagline": "The SMARTBOX-8CH (SB-8CH) is a smart sensor interconnection unit designed to optimise field installations where sensors must be deployed far from the data logger .",
        "intro": "The SMARTBOX-8CH (SB-8CH) is a smart sensor interconnection unit designed to optimise field installations where sensors must be deployed far from the data logger . By concentrating up to eight smart Modbus sensors on a single RS-485 (Modbus RTU) bus , it reduces cabling, voltage drops and installation complexity while keeping communication robust and reliable.",
        "specifications": [],
        "features": [
          "Connects and manages up to 8 Modbus RTU sensors per box on a shared RS-485 bus, simplifying wiring across the site",
          "Four versions (SB-8CH-1/2/3/4) to match different layouts, distances and power requirements, including LoRa/ZigBee options for very long links (up to 5 km line-of-sight, model dependent)",
          "Integrated power distribution , configurable termination and surge protection for dependable outdoor operation",
          "Optional optical isolation and RS-485 signal regeneration for long runs and electrically noisy environments",
          "Rugged IP68 polycarbonate enclosure with IP66 cable glands and mounting hardware for mast or wall installation"
        ],
        "applications": [
          "Monitoring and measurement of solar & photoradiometry.",
          "Outdoor monitoring deployments.",
          "Industrial process and environmental control."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/dsh_fam_SMARTBOX_en_datasheet.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/dsh_fam_SMARTBOX_en_datasheet.pdf"
          },
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/umn_prd_SMARTBOX_en_manual.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/smart-sensor-hub.png"
      },
      {
        "slug": "vup12-heating-and-ventilation-unit",
        "title": "VUP12 – Heating and Ventilation Unit",
        "sourceUrl": "https://environmental.senseca.com/product/vup12-heating-and-ventilation-unit/",
        "tagline": "The VUP12 ventilation and heating unit allows increasing the accuracy of solar radiation measurements maintaining the operating temperature of the sensor uniform.",
        "intro": "The VUP12 ventilation and heating unit allows increasing the accuracy of solar radiation measurements maintaining the operating temperature of the sensor uniform. Ventilation reduces the type “A” offset (present in pyranometers and pyrgeometers) due to cooling of the dome with respect to the sensor body.",
        "specifications": [],
        "features": [
          "IEC 61724-1",
          "“BSRN operations manual”"
        ],
        "applications": [
          "Monitoring and measurement of solar & photoradiometry.",
          "Outdoor monitoring deployments."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/dsh_prd_VUP12_en_datasheet.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/dsh_prd_VUP12_en_datasheet.pdf"
          },
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/umn_prd_VUP12_en_manual.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/vup12-heating-and-ventilation-unit.png"
      }
    ]
  },
  {
    "id": "air-and-wind-speed",
    "title": "Air and Wind Speed",
    "sourceUrl": "https://environmental.senseca.com/measure/air-and-wind-speed/",
    "products": [
      {
        "slug": "ap-471s1-directional-hotwire-probe-for-air-speed-2",
        "title": "AP471S1 – Directional Hotwire Probe for Air Speed",
        "sourceUrl": "https://environmental.senseca.com/product/ap-471s1-directional-hotwire-probe-for-air-speed-2/",
        "tagline": "Directional hotwire probe to measure air speed in the range 0.02…40 m/s and air temperature in the range -25 °C…+80 °C.",
        "intro": "Directional hotwire probe to measure air speed in the range 0.02…40 m/s and air temperature in the range -25 °C…+80 °C. Temperature compensation from 0 to +80°C. Probe diameter (measurement area) 8 mm. Probe complete with handle and telescopic shaft: minimum length 360 mm, maximum length 1060 mm. Cable length with fully closed telescopic shaft 1800 mm. Probe complete with SICRAM module.",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of air and wind speed."
        ],
        "datasheets": [],
        "imageSrc": "/graphics/senseca/ap-471s1-directional-hotwire-probe-for-air-speed-2.jpg"
      },
      {
        "slug": "ap-471s2-omni-directional-hotwire-probe-for-air-speed-2",
        "title": "AP471S2 – Omni-directional Hotwire Probe",
        "sourceUrl": "https://environmental.senseca.com/product/ap-471s2-omni-directional-hotwire-probe-for-air-speed-2/",
        "tagline": "Omni-directional hotwire probe to measure air speed in the range 0.02…5 m/s and air temperature in the range -25°C…+80°C.",
        "intro": "Omni-directional hotwire probe to measure air speed in the range 0.02…5 m/s and air temperature in the range -25°C…+80°C. Temperature compensation from 0 to +80°C. Probe diameter (measurement area) 8 mm. Probe complete with handle and telescopic shaft. Wire protection spherical cage diam 80 mm. Probe complete with SICRAM module.",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of air and wind speed."
        ],
        "datasheets": [],
        "imageSrc": "/graphics/senseca/ap-471s2-omni-directional-hotwire-probe-for-air-speed-2.jpg"
      },
      {
        "slug": "ap-471s3-directional-hotwire-probe-for-air-speed-2",
        "title": "AP471S3 – Directional Hotwire Probe",
        "sourceUrl": "https://environmental.senseca.com/product/ap-471s3-directional-hotwire-probe-for-air-speed-2/",
        "tagline": "Directional hotwire probe, 180°C articulated tip for easy positioning, to measure air speed in the range 0.02…40 m/s and air temperature in the range -25°C…+80°C.",
        "intro": "Directional hotwire probe, 180°C articulated tip for easy positioning, to measure air speed in the range 0.02…40 m/s and air temperature in the range -25°C…+80°C. Temperature compensation from 0 to +80°C. Probe diameter (measurement area) 8mm. Probe complete with handle and telescopic shaft. Probe complete with SICRAM module.",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of air and wind speed."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_Airspeed_probes_datasheet_ENG.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_Airspeed_probes_datasheet_ENG.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/ap-471s3-directional-hotwire-probe-for-air-speed-2.jpg"
      },
      {
        "slug": "ap-471s4-omni-directional-hotwire-probe-2",
        "title": "AP471S4 – Omni-Directional Hotwire Probe",
        "sourceUrl": "https://environmental.senseca.com/product/ap-471s4-omni-directional-hotwire-probe-2/",
        "tagline": "Omni-directional hotwire probe with telescopic shaft and table base.",
        "intro": "Omni-directional hotwire probe with telescopic shaft and table base. Measurement of air speed in the range 0.02…5 m/s and of air temperature in the range 0°C…+80°C. Wire protection spherical cage diam. 100mm. Probe complete with SICRAM module.",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of air and wind speed."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_Airspeed_probes_datasheet_ENG.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_Airspeed_probes_datasheet_ENG.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/ap-471s4-omni-directional-hotwire-probe-2.jpg"
      },
      {
        "slug": "do9847-all-measurements-3-channel-portable-data-logger",
        "title": "DO9847 – All Measurements 3 Channel Data Logger",
        "sourceUrl": "https://environmental.senseca.com/product/do9847-all-measurements-3-channel-portable-data-logger/",
        "tagline": "Please note that this product has been discontinued.",
        "intro": "Please note that this product has been discontinued. Kindly refer to the following product: HD31 – handheld portable multifunction data logger with three indipendent input channels.",
        "specifications": [],
        "features": [
          "HD31 – handheld portable multifunction data logger with three indipendent input channels."
        ],
        "applications": [
          "Monitoring and measurement of air and wind speed."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_DO9847_manual_ENG.pdf",
        "datasheets": [
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_DO9847_manual_ENG.pdf"
          },
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM-DO9847-Multifunction-datasheet-en.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/do9847-all-measurements-3-channel-portable-data-logger.jpg"
      },
      {
        "slug": "hd103t-0-actve-air-speed-transmitter-2",
        "title": "HD103T.0 – Active Air Speed Transmitter",
        "sourceUrl": "https://environmental.senseca.com/product/hd103t-0-actve-air-speed-transmitter-2/",
        "tagline": "Active air speed transmitter with omnidirectional hotwire sensor .",
        "intro": "Active air speed transmitter with omnidirectional hotwire sensor . Probe with wire protection spherical cage Ø 100 mm connected to the electronics via 5 m cable. Air speed measuring range: 0.1…5 m/s. Outputs for temperature and airspeed. The transmitter has three configurable analogue outputs : 4…20 mA and 0…20 mA current outputs and 0…10 Vdc voltage output (0…1 Vdc or 0…5 Vdc outputs can be supplied on request).",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of air and wind speed."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD103T.0_datasheet_ENG.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD103T.0_datasheet_ENG.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd103t-0-actve-air-speed-transmitter-2.jpg"
      },
      {
        "slug": "hd2001-serie-t-rh-pressure-and-air-speed-transmitters",
        "title": "HD2001… Series – T, RH, Pressure and Air Speed Transmitters",
        "sourceUrl": "https://environmental.senseca.com/product/hd2001-serie-t-rh-pressure-and-air-speed-transmitters/",
        "tagline": "The devices of the HD2001 series…, according to the models, measure temperature, relative humidity, barometric pressure and air speed by hot-wire probes .",
        "intro": "The devices of the HD2001 series…, according to the models, measure temperature, relative humidity, barometric pressure and air speed by hot-wire probes . All the models are provided with RS232C or RS485 serial output and the management of more than one device connected to a network. In addition, all the models are fitted with an open collector type low-activated configurable alarm output.",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of air and wind speed."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2001_datasheet_ENG.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2001_datasheet_ENG.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd2001-serie-t-rh-pressure-and-air-speed-transmitters.jpg"
      },
      {
        "slug": "hd2003-3-axis-ultrasonic-anemometer-2",
        "title": "HD2003 – 3-Axis Ultrasonic Anemometer – Multiparameter",
        "sourceUrl": "https://environmental.senseca.com/product/hd2003-3-axis-ultrasonic-anemometer-2/",
        "tagline": "HD2003 is a 3-axis static anemometer for measuring wind speed and direction, U-V-W cartesian components of speed, wind gust, sound speed, sonic temperature, air temperature, relative humidity and barometric pressure.",
        "intro": "HD2003 is a 3-axis static anemometer for measuring wind speed and direction, U-V-W cartesian components of speed, wind gust, sound speed, sonic temperature, air temperature, relative humidity and barometric pressure. Main characteristics: 5 analogue voltage or current outputs, with different measuring ranges. RS232 and Multidrop RS485 Serial Communication interfaces.",
        "specifications": [],
        "features": [
          "5 analogue voltage or current outputs, with different measuring ranges.",
          "RS232 and Multidrop RS485 Serial Communication interfaces.",
          "Configurable output rate of digital output data string.",
          "Configurable average periods 1÷60 s and 1÷60 min. for all output quantities.",
          "Processing algorithms and validation of the raw measurement signals to provide a measure of greatness anemometer with ± 1%.",
          "Digital high frequency data acquisition mode with 50Hz data output.",
          "Self diagnostics with error checking and report.",
          "Reliability and accuracy throughout the measuring range without further calibration."
        ],
        "applications": [
          "Monitoring and measurement of air and wind speed."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/umn_prd_HD2003_en_manual.pdf",
        "datasheets": [
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/umn_prd_HD2003_en_manual.pdf"
          },
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/dsh_fam_HD2003_en_datasheet.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd2003-3-axis-ultrasonic-anemometer-2.jpg"
      },
      {
        "slug": "hd2003-1-3-axis-ultrasonic-anemometer-2",
        "title": "HD2003.1 – 3-Axis Ultrasonic Anemometer",
        "sourceUrl": "https://environmental.senseca.com/product/hd2003-1-3-axis-ultrasonic-anemometer-2/",
        "tagline": "Please note that this code as well as the same version with heating option (HD2003.1 R) have been discontinued.",
        "intro": "Please note that this code as well as the same version with heating option (HD2003.1 R) have been discontinued. Manual and datasheet are still available in the download tab. The version with additional measurement of temperature, relative humidity and atmospheric pressure is still available. See product code HD2003. If you are looking for our new 3 axis ultrasonic anemometer, please refer to the new AELOUS-3 series .",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of air and wind speed."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/umn_prd_HD2003.1_en_manual.pdf",
        "datasheets": [
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/umn_prd_HD2003.1_en_manual.pdf"
          },
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM-HD2003-three-axes-anemomemeter-datasheet-en.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd2003-1-3-axis-ultrasonic-anemometer-2.jpg"
      },
      {
        "slug": "hd2103-1-anemometer-thermometer-2",
        "title": "HD2103.1 – Anemometer-Thermometer",
        "sourceUrl": "https://environmental.senseca.com/product/hd2103-1-anemometer-thermometer-2/",
        "tagline": "The HD2103.1 Anemometer-Thermometer is the suitable instrument for measurements in the field of air conditioning, heating, ventilation and environmental comfort .",
        "intro": "The HD2103.1 Anemometer-Thermometer is the suitable instrument for measurements in the field of air conditioning, heating, ventilation and environmental comfort . It measures air speed, flow rate and temperature in ducts or vents with hot-wire or vane probes, or temperature only with immersion, penetration, contact or air probes. Probes equipped with a SICRAM module have factory calibration data stored in them.",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of air and wind speed."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2103.1_2_manual_ENG.pdf",
        "datasheets": [
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2103.1_2_manual_ENG.pdf"
          },
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM-2103.1_2-Anemometer-Thermometer-Datasheet-en.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd2103-1-anemometer-thermometer-2.jpg"
      },
      {
        "slug": "hd2103-2-anemometer-thermometer-data-logger",
        "title": "HD2103.2 – Anemometer-Thermometer Data Logger",
        "sourceUrl": "https://environmental.senseca.com/product/hd2103-2-anemometer-thermometer-data-logger/",
        "tagline": "The anemometer-thermometer data logger HD2103.2 is the suitable instrument for measurements in the field of air conditioning, heating, ventilation and environmental comfort .",
        "intro": "The anemometer-thermometer data logger HD2103.2 is the suitable instrument for measurements in the field of air conditioning, heating, ventilation and environmental comfort . It measures air speed, flow rate, and temperature inside pipelines and vents. Temperature only is measured by immersion, penetration or air contact probes.",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of air and wind speed."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2103.1_2_manual_ENG.pdf",
        "datasheets": [
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2103.1_2_manual_ENG.pdf"
          },
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM-2103.1_2-Anemometer-Thermometer-Datasheet-en.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd2103-2-anemometer-thermometer-data-logger.jpg"
      },
      {
        "slug": "hd2114p-0-air-speed-micromanometer-thermometer-2",
        "title": "HD2114P.0 – Air Speed Micromanometer-Thermometer",
        "sourceUrl": "https://environmental.senseca.com/product/hd2114p-0-air-speed-micromanometer-thermometer-2/",
        "tagline": "Handheld Micromanometer-Thermometer with LCD display for air speed and flow rate measurement by means of Pitot tubes, full scale 20 mbar for speed measurements from 2…55 m/s.",
        "intro": "Handheld Micromanometer-Thermometer with LCD display for air speed and flow rate measurement by means of Pitot tubes, full scale 20 mbar for speed measurements from 2…55 m/s. Designed to perform measurements in air conditioning, heating and ventilation.",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of air and wind speed."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM-HD2114P-2134P-Micromanometer-thermometer-datasheet-en.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM-HD2114P-2134P-Micromanometer-thermometer-datasheet-en.pdf"
          },
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM-HD2114P-2134P-Micromanometer-thermometer-manual-en.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd2114p-0-air-speed-micromanometer-thermometer-2.jpg"
      },
      {
        "slug": "hd2114p-2-air-speed-micromanomenter-thermometer-data-logger-2",
        "title": "HD2114P.2 – Air Speed Micromanomenter-Thermometer Data Logger",
        "sourceUrl": "https://environmental.senseca.com/product/hd2114p-2-air-speed-micromanomenter-thermometer-data-logger-2/",
        "tagline": "Handheld Micromanometer-Thermometer data logger with LCD display for air speed and flow rate measurement by means of Pitot tubes, full scale 20 mbar for speed measurements from 2…55 m/s.",
        "intro": "Handheld Micromanometer-Thermometer data logger with LCD display for air speed and flow rate measurement by means of Pitot tubes, full scale 20 mbar for speed measurements from 2…55 m/s. Designed to perform measurements in air conditioning, heating and ventilation.",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of air and wind speed."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM-HD2114P-2134P-Micromanometer-thermometer-datasheet-en.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM-HD2114P-2134P-Micromanometer-thermometer-datasheet-en.pdf"
          },
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM-HD2114P-2134P-Micromanometer-thermometer-manual-en.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd2114p-2-air-speed-micromanomenter-thermometer-data-logger-2.jpg"
      },
      {
        "slug": "hd2134p-0-air-speed-micromanometer-thermometer-2",
        "title": "HD2134P.0 – Air Speed Micromanometer-Thermometer",
        "sourceUrl": "https://environmental.senseca.com/product/hd2134p-0-air-speed-micromanometer-thermometer-2/",
        "tagline": "Handheld Micromanometer-Thermometer with LCD display for air speed and flow rate measurement by means of Pitot tubes , full scale 200 mbar for speed measurements from 2…180 m/s .",
        "intro": "Handheld Micromanometer-Thermometer with LCD display for air speed and flow rate measurement by means of Pitot tubes , full scale 200 mbar for speed measurements from 2…180 m/s . Designed to perform measurements in air conditioning, heating and ventilation.",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of air and wind speed."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM-HD2114P-2134P-Micromanometer-thermometer-datasheet-en.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM-HD2114P-2134P-Micromanometer-thermometer-datasheet-en.pdf"
          },
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM-HD2114P-2134P-Micromanometer-thermometer-manual-en.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd2134p-0-air-speed-micromanometer-thermometer-2.jpg"
      },
      {
        "slug": "hd2134p-2-air-speed-micromanomenter-thermometer-data-logger",
        "title": "HD2134P.2 – Air Speed Micromanomenter-Thermometer Data Logger",
        "sourceUrl": "https://environmental.senseca.com/product/hd2134p-2-air-speed-micromanomenter-thermometer-data-logger/",
        "tagline": "Micromanometer-Thermometer data logger with LCD display for air speed and flow rate measurement by means of Pitot tubes, full scale 200 mbar for speed measurement from 2…180 m/s .",
        "intro": "Micromanometer-Thermometer data logger with LCD display for air speed and flow rate measurement by means of Pitot tubes, full scale 200 mbar for speed measurement from 2…180 m/s . Designed to perform measurements in air conditioning, heating and ventilation.",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of air and wind speed."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM-HD2114P-2134P-Micromanometer-thermometer-datasheet-en.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM-HD2114P-2134P-Micromanometer-thermometer-datasheet-en.pdf"
          },
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM-HD2114P-2134P-Micromanometer-thermometer-manual-en.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd2134p-2-air-speed-micromanomenter-thermometer-data-logger.jpg"
      },
      {
        "slug": "hd2303-0-anemometer-thermometer-2",
        "title": "HD2303.0 – Anemometer-Thermometer",
        "sourceUrl": "https://environmental.senseca.com/product/hd2303-0-anemometer-thermometer-2/",
        "tagline": "Anemometer-Thermometer for air speed measurement which use hot-wire or vane probes and probes with Pt100 sensor with SICRAM module for temperature.",
        "intro": "Anemometer-Thermometer for air speed measurement which use hot-wire or vane probes and probes with Pt100 sensor with SICRAM module for temperature. It is used in the fields of air conditioning, heating, ventilation and environmental comfort. Storage of maximum, minimum, average value. Functions: REL, HOLD and auto power off which can be disabled, IP 67 protection degree.",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of air and wind speed."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2303.0_manual_ENG.pdf",
        "datasheets": [
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2303.0_manual_ENG.pdf"
          },
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM-HD2303.0-Anemomether-Thermometer-Datasheet-en.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd2303-0-anemometer-thermometer-2.jpg"
      },
      {
        "slug": "hd29-active-air-speed-transmitters",
        "title": "HD29 – Air Velocity, Temperature and Relative Humidity Transmitters",
        "sourceUrl": "https://environmental.senseca.com/product/hd29-active-air-speed-transmitters/",
        "tagline": "The HD29 series ensures precise and reliable measurement of air velocity, temperature, and relative humidity for HVAC, clean rooms, industrial plants, laboratories, and environmental monitoring.",
        "intro": "The HD29 series ensures precise and reliable measurement of air velocity, temperature, and relative humidity for HVAC, clean rooms, industrial plants, laboratories, and environmental monitoring. Equipped with advanced sensors and stainless steel probes, these transmitters guarantee long-term stability and durability even in harsh conditions.",
        "specifications": [],
        "features": [
          "Measures air velocity from 0.05 to 20 m/s , temperature –10…+60 °C , and RH 0–100 % .",
          "High-precision electronics and factory calibration ensure accuracy right out of the box.",
          "AISI 304 stainless steel probe with wire mesh filter for protection and long life.",
          "Fixed or cable probe versions (2, 5 or 10 m) for flexible installation.",
          "Configurable outputs: 4…20 mA, 0…10 V or RS485 (Modbus-RTU/ASCII).",
          "Fast or slow response mode for stable readings in turbulent airflows."
        ],
        "applications": [
          "Monitoring and measurement of air and wind speed.",
          "Industrial process and environmental control."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/dsh_fam_HD29_en_datasheet.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/dsh_fam_HD29_en_datasheet.pdf"
          },
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/umn_fam_HD29_en_manual.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd29-active-air-speed-transmitters.png"
      },
      {
        "slug": "hd31-handheld-portable-multifunction-data-logger",
        "title": "HD31 – Handheld Portable Multifunction Data Logger",
        "sourceUrl": "https://environmental.senseca.com/product/hd31-handheld-portable-multifunction-data-logger/",
        "tagline": "The HD31 is a portable multifunctional instrument and datalogger with a large (43 x 58 mm) colour graphic LCD display.",
        "intro": "The HD31 is a portable multifunctional instrument and datalogger with a large (43 x 58 mm) colour graphic LCD display. It has three independent inputs .",
        "specifications": [],
        "features": [
          "Temperature",
          "Relative humidity",
          "Atmospheric and differential pressure",
          "Illuminance (lux) and Irradiance",
          "Carbon dioxide (CO 2 ) – Air Quality",
          "Direct voltage (VP473 module) and current (IP472 module)"
        ],
        "applications": [
          "Monitoring and measurement of air and wind speed."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/dsh_prd_HD31_en_datasheet.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/dsh_prd_HD31_en_datasheet.pdf"
          },
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/umn_prd_HD31_en_manual.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd31-handheld-portable-multifunction-data-logger.png"
      },
      {
        "slug": "hd403ts-serie-hotwire-air-speed-transmitters-2",
        "title": "HD403TS… Series – Hotwire Air Speed Transmitters",
        "sourceUrl": "https://environmental.senseca.com/product/hd403ts-serie-hotwire-air-speed-transmitters-2/",
        "tagline": "The HD403TS… series of hotwire air speed transmitters are used for measuring and controlling air speed in ventilation ducts, clean rooms, extractor fans, as well as monitoring air quality (IAQ), etc.",
        "intro": "The HD403TS… series of hotwire air speed transmitters are used for measuring and controlling air speed in ventilation ducts, clean rooms, extractor fans, as well as monitoring air quality (IAQ), etc. These transmitters are equipped with a hotwire sensor, in the directional or omnidirectional version . The HD403TS… series of transmitters have a 4…20mA output, while the HD4V3TS… series have a 0…10Vdc output.",
        "specifications": [],
        "features": [
          "HD403TS1: Active hotwire air speed transmitter with output 4…20mA. Range 0.20…40m/s. Directional probe ∅=8mm, 2m cable. Power supply 12…40Vdc or 24Vac. Probe working humidity 5…75%R.H.",
          "HD4V3TS1 : Active hotwire air speed transmitter with output 0…10Vdc. Range 0.20…40m/s. Directional probe ∅=8mm, 2m cable. Power supply 16…40Vdc or 24Vac. Probe working humidity 5…75%R.H.",
          "HD403TS2: Active hotwire air speed transmitter with output 4…20mA. Range 0.1…5.00m/s. Omnidirectional probe ∅=8mm, 2m cable. Power supply 12…40Vdc or 24Vac. Probe working humidity 5…75%R.H.",
          "HD4V3TS2: Active hotwire air speed transmitter with output 0…10Vdc. Range 0.1…5.00m/s. Omnidirectional probe ∅=8mm, 2m cable. Power supply 16…40Vdc or 24Vac. Probe working humidity 5…75%R.H.",
          "HD403TS3: Active hotwire air speed transmitter with output 4…20mA. Range 0.20…40m/s. Directional flexible probe, ∅=8mm, cable L=2m. Power supply 12…40Vdc or 24Vac. Probe working humidity 5…75%R.H.",
          "HD4V3TS3: Active hotwire air speed transmitter with output 0…10Vdc. Range 0.20…40m/s. Directional flexible probe, ∅=8mm, cable L=2m. Power supply 16…40Vdc or 24Vac. Probe working humidity 5…75%R.H.",
          "HD403TS4: Active hotwire air speed transmitter with output 4…20mA. Range 0.1…5.00m/s. Omnidirectional probe with protection cage ∅=80mm. Power supply 12…40Vdc or 24Vac. Supplied with VTRAP20 tripod. Probe working humidity 5…75%R.H.",
          "HD4V3TS4: Active hotwire air speed transmitter with output 0…10Vdc. Range 0.1…5.00m/s. Omnidirectional probe with protection cage ∅=80mm. Power supply 16…40Vdc or 24Vac. Supplied with VTRAP20 tripod. Probe working humidity 5…75%R.H."
        ],
        "applications": [
          "Monitoring and measurement of air and wind speed."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD403TS_datasheet_ENG.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD403TS_datasheet_ENG.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd403ts-serie-hotwire-air-speed-transmitters-2.jpg"
      },
      {
        "slug": "hd51-3d-high-performance-two-axes-ultrasonic-anemometer",
        "title": "HD51.3D… – High Performance Two Axes Ultrasonic Anemometer",
        "sourceUrl": "https://environmental.senseca.com/product/hd51-3d-high-performance-two-axes-ultrasonic-anemometer/",
        "tagline": "HD51.3D… is a series of high performance two-axis static ultrasonic anemometers for accurate measurements in all environmental conditions .",
        "intro": "HD51.3D… is a series of high performance two-axis static ultrasonic anemometers for accurate measurements in all environmental conditions . Available in different combinations for the measurement of: Wind speed (up to 85 m/s) Wind direction Cartesian U-V components of wind speed Wind Gust relative humidity and temperature (optional) global solar radiation (optional) atmospheric pressure (optional).",
        "specifications": [],
        "features": [
          "Wind speed (up to 85 m/s)",
          "Wind direction",
          "Cartesian U-V components of wind speed",
          "relative humidity and temperature (optional)",
          "global solar radiation (optional)",
          "atmospheric pressure (optional)."
        ],
        "applications": [
          "Monitoring and measurement of air and wind speed."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/dsh_fam_HD51.3D_en_datasheet.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/dsh_fam_HD51.3D_en_datasheet.pdf"
          },
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/MN_HD51_3D_EN_manual.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd51-3d-high-performance-two-axes-ultrasonic-anemometer.jpg"
      },
      {
        "slug": "hd52-3d-serie-2-axis-ultrasonic-anemometer",
        "title": "HD52.3D… Series – 2 Axis Ultrasonic Anemometer",
        "sourceUrl": "https://environmental.senseca.com/product/hd52-3d-serie-2-axis-ultrasonic-anemometer/",
        "tagline": "The instruments of the series HD52.3D… are 2 axes ultrasonic static anemometers for measuring Wind speed and direction, U-V Cartesian components of wind speed Wind Gust – Measurement available only with MODBUS-RTU and SDI-12 protocols Relative Humidity and Temperature (optional), Global Solar Radiation (optional) Barometric pressure (optional) Rainfall (optional) The “Rainfall” and “Global solar radiation” options are alternatives (they can not be both present in the same instrument).",
        "intro": "The instruments of the series HD52.3D… are 2 axes ultrasonic static anemometers for measuring Wind speed and direction, U-V Cartesian components of wind speed Wind Gust – Measurement available only with MODBUS-RTU and SDI-12 protocols Relative Humidity and Temperature (optional), Global Solar Radiation (optional) Barometric pressure (optional) Rainfall (optional) The “Rainfall” and “Global solar radiation” options are alternatives (they can not be both present in the same instrument).",
        "specifications": [],
        "features": [
          "Wind speed and direction, U-V Cartesian components of wind speed",
          "Wind Gust – Measurement available only with MODBUS-RTU and SDI-12 protocols",
          "Relative Humidity and Temperature (optional),",
          "Global Solar Radiation (optional)",
          "Barometric pressure (optional)",
          "Rainfall (optional)",
          "The absence of moving parts minimizes maintenance;",
          "High sensitivity for detecting very low speeds, which are not detectable by traditional methods;"
        ],
        "applications": [
          "Monitoring and measurement of air and wind speed."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DSH_HD52.3D_EN_datasheet.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DSH_HD52.3D_EN_datasheet.pdf"
          },
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/MN_HD52_3D_EN_manual.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd52-3d-serie-2-axis-ultrasonic-anemometer.jpg"
      },
      {
        "slug": "hd53ls-series-high-sensitivity-anemometer-for-very-low-wind-speeds",
        "title": "HD53LS… Series – High Sensitivity Anemometer for Very Low Wind Speeds",
        "sourceUrl": "https://environmental.senseca.com/product/hd53ls-series-high-sensitivity-anemometer-for-very-low-wind-speeds/",
        "tagline": "HD53LS is a 2-axis ultrasonic static anemometer for measuring: Wind speed and direction, U-V Cartesian components of wind speed.",
        "intro": "HD53LS is a 2-axis ultrasonic static anemometer for measuring: Wind speed and direction, U-V Cartesian components of wind speed. Wind Gust (only in version with RS485 MODBUS-RTU output). The average of wind speed and direction over a period configurable up to 10 minutes is calculated.",
        "specifications": [],
        "features": [
          "Wind speed and direction, U-V Cartesian components of wind speed.",
          "Wind Gust (only in version with RS485 MODBUS-RTU output).",
          "HD53LS.A: with two analog outputs (one for wind speed and one for wind direction), factory configurable among 4…20 mA (standard), 0…1 V, 0…5 V, 0…10 V (to be specified when ordering).",
          "HD53LS.S: with RS485 MODBUS-RTU output.",
          "The absence of moving parts minimizes maintenance.",
          "High sensitivity for detecting very low speeds, which are not detectable by traditional methods.",
          "Fast and easy installation (on ∅ 40 mm mast, optional tripod available).",
          "The low power of the instrument allows installation in remote sites, with power from solar panel and battery."
        ],
        "applications": [
          "Monitoring and measurement of air and wind speed."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/dsh_fam_HD53LS_en_datasheet.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/dsh_fam_HD53LS_en_datasheet.pdf"
          },
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/MN_HD53LS_EN_manual.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd53ls-series-high-sensitivity-anemometer-for-very-low-wind-speeds.jpg"
      },
      {
        "slug": "pitot-tubes",
        "title": "Pitot Tubes",
        "sourceUrl": "https://environmental.senseca.com/product/pitot-tubes/",
        "tagline": "Stainless steel Pitot tubes to measure air speed and temperature , for models provided with ‘K’ thermocouple, equipped with silicon tube with 6 mm external diam., 4 mm internal diam.",
        "intro": "Stainless steel Pitot tubes to measure air speed and temperature , for models provided with ‘K’ thermocouple, equipped with silicon tube with 6 mm external diam., 4 mm internal diam. and length 2 m. PW cable has to be ordered separately. Types available: T1-300 – lenght 300 mm T2-400 – lenght 400 mm T3-800 – lenght 800 mm T3-800TC -lenght 800 mm – K thermocouple For other lengths please, contact us.",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of air and wind speed."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_Airspeed_probes_datasheet_ENG.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_Airspeed_probes_datasheet_ENG.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/pitot-tubes.jpg"
      }
    ]
  },
  {
    "id": "precipitation",
    "title": "Precipitation",
    "sourceUrl": "https://environmental.senseca.com/measure/precipitation-rain/",
    "products": [
      {
        "slug": "datarain-4000-electronic-weighing-precipitation-sensor",
        "title": "DataRain-4000 – Electronic Weighing Precipitation Sensor",
        "sourceUrl": "https://environmental.senseca.com/product/datarain-4000-electronic-weighing-precipitation-sensor/",
        "tagline": "DATARAIN-4000 product documentation – click here.",
        "intro": "DATARAIN-4000 product documentation – click here. DataRain-4000 is a professional electronic weighing rain gauge designed in line with WMO recommendations for high-accuracy precipitation monitoring. It combines a high-precision C3 load cell with an automatic self-emptying system , providing virtually unlimited cumulative measurement with minimal maintenance—even during extreme rainfall events up to 2000 mm/h .",
        "specifications": [],
        "features": [
          "WMO-compliant electronic weighing rain gauge for professional precipitation monitoring",
          "Automatic self-emptying system for unlimited cumulative rainfall measurement",
          "Rainfall intensity range 0–2000 mm/h with up to 0.001 mm resolution",
          "0.02% weighing accuracy (C3 load cell) with permanent calibration",
          "200 cm² or 400 cm² collecting area options",
          "Ultra-low power consumption with optional smart heating for cold and mixed precipitation",
          "Easy integration via pulse output , RS-232/RS-485 (Modbus, ASCII/NMEA) or SDI-12 , plus USB for configuration and updates"
        ],
        "applications": [
          "Monitoring and measurement of precipitation."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/dsh_fam_DATA_RAIN_4000_en_datasheet.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/dsh_fam_DATA_RAIN_4000_en_datasheet.pdf"
          },
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/umn_fam_DataRain4000_en_manual.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/datarain-4000-electronic-weighing-precipitation-sensor.png"
      },
      {
        "slug": "hd2013-tipping-bucket-rain-gauge-2",
        "title": "HD2013 – Tipping Bucket Rain Gauge",
        "sourceUrl": "https://environmental.senseca.com/product/hd2013-tipping-bucket-rain-gauge-2/",
        "tagline": "The HD2013 is a reliable and sturdy tipping bucket rain gauge, built entirely from corrosion resistant materials in order to guarantee reliability, accuracy and durability.and to withstand even extreme conditions.",
        "intro": "The HD2013 is a reliable and sturdy tipping bucket rain gauge, built entirely from corrosion resistant materials in order to guarantee reliability, accuracy and durability.and to withstand even extreme conditions. Depending on the environment where the rain gauge is placed, there is a choice between heated or non-heated version (HD2013R).",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of precipitation."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD33_Meteo_Loggers_Flyer_ENG.pdf",
        "datasheets": [
          {
            "label": "HD33 series",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD33_Meteo_Loggers_Flyer_ENG.pdf"
          },
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DSH_HD2013_EN_datasheet.pdf"
          },
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/MN_HD2013_EN_manual.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd2013-tipping-bucket-rain-gauge-2.png"
      },
      {
        "slug": "hd2013-2-precipitation-detector",
        "title": "HD2013.2 – Precipitation Detector",
        "sourceUrl": "https://environmental.senseca.com/product/hd2013-2-precipitation-detector/",
        "tagline": "Please note that this product has been discontinued. Kindly refer to HD2013.3 .",
        "intro": "Please note that this product has been discontinued. Kindly refer to HD2013.3 .",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of precipitation."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM-HD2013.2-Rain-detector-datasheet-en.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM-HD2013.2-Rain-detector-datasheet-en.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd2013-2-precipitation-detector.jpg"
      },
      {
        "slug": "hd2013-3-precipitation-detector",
        "title": "HD2013.3 – Precipitation Detector",
        "sourceUrl": "https://environmental.senseca.com/product/hd2013-3-precipitation-detector/",
        "tagline": "As a renewed and advanced version of the HD2013.2 , we introduce the HD2013.3 precipitation detector.",
        "intro": "As a renewed and advanced version of the HD2013.2 , we introduce the HD2013.3 precipitation detector. HD2013.3 detects all type of precipitations. Quick and simple to integrate in any outdoor installation or configuration thanks to the enhanced connection possibilities: we supply this version in Modbus-RTU or 4-20mA or 0-10V or contact output.",
        "specifications": [],
        "features": [
          "capacitive element is shielded from wind by the protecting dome construction: no false indications",
          "capacitive element is heated to be able to detect any form of precipitation, including snow and hail",
          "can be standard equipped with bird-spikes",
          "supplied with heavy duty mounting bracket, universal for surface or pole mounting",
          "standard cable lengths 5 or 10 meter"
        ],
        "applications": [
          "Monitoring and measurement of precipitation.",
          "Outdoor monitoring deployments."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/MN_HD2013.3_EN_manual.pdf",
        "datasheets": [
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/MN_HD2013.3_EN_manual.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd2013-3-precipitation-detector.jpg"
      },
      {
        "slug": "hd2015-tipping-bucket-rain-gauge",
        "title": "HD2015 – Tipping Bucket Rain Gauge",
        "sourceUrl": "https://environmental.senseca.com/product/hd2015-tipping-bucket-rain-gauge/",
        "tagline": "The HD2015 is a reliable and sturdy bucket rain gauge, entirely constructed of corrosion resistant materials in order to guarantee its durability.",
        "intro": "The HD2015 is a reliable and sturdy bucket rain gauge, entirely constructed of corrosion resistant materials in order to guarantee its durability. To ensure accurate measurements even with low temperature climatic conditions or during and after precipitations of snow, a version with heating system (HD2015R), automatically activated around +4 °C, has been developed to prevent snow deposits and ice formations.",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of precipitation."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD33_Meteo_Loggers_Flyer_ENG.pdf",
        "datasheets": [
          {
            "label": "HD33 series",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD33_Meteo_Loggers_Flyer_ENG.pdf"
          },
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DSH_HD2015_EN_datasheet.pdf"
          },
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/MN_HD2015_EN_manual.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd2015-tipping-bucket-rain-gauge.png"
      },
      {
        "slug": "hd2016-weighing-rain-gauge",
        "title": "HD2016 – Weighing Rain Gauge",
        "sourceUrl": "https://environmental.senseca.com/product/hd2016-weighing-rain-gauge/",
        "tagline": "HD2016 is a rain gauge that detects the weight of the rainfall collected by a 400 cm² inlet.",
        "intro": "HD2016 is a rain gauge that detects the weight of the rainfall collected by a 400 cm² inlet. The sensor is a load cell located at the base of the rainfall collecting reservoir. The signal of the load cell is processed by the internal electronic board of the rain gauge in order to output the information on the rainfall.",
        "specifications": [],
        "features": [
          "RS485 with Modbus-RTU or proprietary ASCII protocol",
          "Voltage-free pulse contact output"
        ],
        "applications": [
          "Monitoring and measurement of precipitation."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DSH_HD2016_EN_datasheet.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DSH_HD2016_EN_datasheet.pdf"
          },
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/MN_HD2016_EN_manual.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd2016-weighing-rain-gauge.png"
      }
    ]
  },
  {
    "id": "thunderstorm-and-lightning",
    "title": "Thunderstorm and Lightning",
    "sourceUrl": "https://environmental.senseca.com/measure/thunderstorm-lightning/",
    "products": [
      {
        "slug": "btd-200-short-range-lightning-warning-system",
        "title": "BTD-200 Short Range Lightning Warning System",
        "sourceUrl": "https://environmental.senseca.com/product/btd-200-short-range-lightning-warning-system/",
        "tagline": "The BTD 200 is a self-contained lightning warning system designed to provide early and reliable alerts of thunderstorm activity.",
        "intro": "The BTD 200 is a self-contained lightning warning system designed to provide early and reliable alerts of thunderstorm activity. Built on the same proven detection technology used in Biral’s professional aviation-grade systems, it identifies cloud-to-ground, cloud-to-cloud, and intra-cloud lightning , as well as charged precipitation and atmospheric electric field disturbances .",
        "specifications": [],
        "features": [
          "Complete, ready-to-use warning system with simple installation",
          "Early detection of overhead lightning risk before the first discharge",
          "Detects all lightning types plus charged precipitation and strong electric fields",
          "35 km detection range with proven professional-grade performance",
          "Advanced automatic self-test ensures reliable system operation",
          "Very low false alarm rate (<2%) helped by detecting low-frequency electric-field disturbances and filtering higher-frequency radio interference",
          "Supplied with Lightning Works server software for monitoring, warning and data logging",
          "Compliant with EN50536:2011+A1:2012 (Class 1) and performs in accordance with IEC 62793 (Class A)"
        ],
        "applications": [
          "Monitoring and measurement of thunderstorm and lightning.",
          "Outdoor monitoring deployments.",
          "Industrial process and environmental control."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/dsh_fam_BTD-200_en_datasheet.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/dsh_fam_BTD-200_en_datasheet.pdf"
          },
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/umn_fam_BTD-200_en_manual.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/btd-200-short-range-lightning-warning-system.png"
      },
      {
        "slug": "btd-300-long-range-thunderstorm-warning-system",
        "title": "BTD-300 – Long Range Thunderstorm Warning System",
        "sourceUrl": "https://environmental.senseca.com/product/btd-300-long-range-thunderstorm-warning-system/",
        "tagline": "The BTD‑300 Thunderstorm Detector is a high‑performance lightning detection sensor designed for accurate storm monitoring and early warning of thunderstorm hazards.",
        "intro": "The BTD‑300 Thunderstorm Detector is a high‑performance lightning detection sensor designed for accurate storm monitoring and early warning of thunderstorm hazards. Its quasi‑electrostatic measurement technology detects all lightning types with a very low false‑alarm rate and provides overhead lightning alerts even before the first strike .",
        "specifications": [],
        "features": [
          "Quasi‑electrostatic lightning and thunderstorm detection",
          "Early overhead lightning warning",
          "Detects all lightning types",
          "Up to 83 km detection range",
          "Immune to RF interference",
          "Optional direction‑finding capability",
          "Ethernet or RS422 integration",
          "Optional relay outputs"
        ],
        "applications": [
          "Monitoring and measurement of thunderstorm and lightning.",
          "Outdoor monitoring deployments.",
          "Industrial process and environmental control."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/dsh_fam_BTD_300_en_datasheet.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/dsh_fam_BTD_300_en_datasheet.pdf"
          },
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/umn_fam_BTD-300_BTD-350_en_manual.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/btd-300-long-range-thunderstorm-warning-system.png"
      },
      {
        "slug": "btd-350-long-range-thunderstorm-warning-system",
        "title": "BTD-350 – Long Range Thunderstorm Warning System",
        "sourceUrl": "https://environmental.senseca.com/product/btd-350-long-range-thunderstorm-warning-system/",
        "tagline": "The BTD-350 Thunderstorm Detector is a high-performance lightning sensor for reliable storm monitoring and early warning in demanding environments .",
        "intro": "The BTD-350 Thunderstorm Detector is a high-performance lightning sensor for reliable storm monitoring and early warning in demanding environments . Using advanced quasi-electrostatic measurement technology , it detects all lightning types with an exceptionally low false-alarm rate and can issue overhead lightning alerts even before the first discharge.",
        "specifications": [],
        "features": [
          "Quasi-electrostatic lightning and thunderstorm detection",
          "Early overhead lightning warning before first strike",
          "Detection of all lightning types, including charged precipitation",
          "Up to 83 km detection range",
          "Immune to RF and man-made radio interference",
          "Optional lightning direction-finding capability",
          "Ethernet or RS422 communication interfaces",
          "Optional relay outputs for warning systems"
        ],
        "applications": [
          "Monitoring and measurement of thunderstorm and lightning.",
          "Outdoor monitoring deployments.",
          "Industrial process and environmental control."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/dsh_fam_BTD-350_en_datasheet.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/dsh_fam_BTD-350_en_datasheet.pdf"
          },
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/umn_fam_BTD-300_BTD-350_en_manual.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/btd-350-long-range-thunderstorm-warning-system.png"
      }
    ]
  },
  {
    "id": "visibility-present-weather",
    "title": "Visibility & Present Weather",
    "sourceUrl": "https://environmental.senseca.com/measure/visibility-and-present-weather/",
    "products": [
      {
        "slug": "rws-20-road-weather-sensor-visibility-sensor",
        "title": "RWS-20 – Road Weather Sensor / Visibility Sensor",
        "sourceUrl": "https://environmental.senseca.com/product/rws-20-road-weather-sensor-visibility-sensor/",
        "tagline": "The RWS-20 is a forward scatter visibility sensor designed specifically for road applications where accurate, dependable visibility measurements are essential for traffic safety and operations.",
        "intro": "The RWS-20 is a forward scatter visibility sensor designed specifically for road applications where accurate, dependable visibility measurements are essential for traffic safety and operations. Its robust optical design delivers stable performance in all weather conditions and is resistant to interference from local light sources such as vehicle headlights, flashing signs and warning beacons.",
        "specifications": [],
        "features": [
          "Forward scatter visibility measurement in a compact, cost-effective design",
          "Visibility range: 10 m to 7,500 m (user-selectable upper limit)",
          "Resistant to local lights (headlights, street lighting, warning beacons)",
          "Heated optics for reliable winter operation; optional hood heating",
          "Automatic contamination management with two-stage cleaning warnings",
          "Flexible outputs: RS232/422/485, optional 4–20 mA, voltage and relays",
          "Road-side visibility monitoring and RWIS installations",
          "Fog and spray detection for safety management"
        ],
        "applications": [
          "Monitoring and measurement of visibility & present weather."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/dsh_fam_RWS-20_en_datasheet.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/dsh_fam_RWS-20_en_datasheet.pdf"
          },
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/umn_fam_RWS-20_en_manual.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/rws-20-road-weather-sensor-visibility-sensor.png"
      },
      {
        "slug": "rws-30-road-tunnel-visibility-sensor",
        "title": "RWS-30 – Road & Tunnel Visibility Sensor",
        "sourceUrl": "https://environmental.senseca.com/product/rws-30-road-tunnel-visibility-sensor/",
        "tagline": "The RWS-30 is a forward scatter visibility sensor designed for both road and tunnel applications where accurate, reliable visibility measurements are required.",
        "intro": "The RWS-30 is a forward scatter visibility sensor designed for both road and tunnel applications where accurate, reliable visibility measurements are required. Its compact optical design provides stable readings in all weather conditions and delivers outputs suited to the operational needs of tunnel systems.",
        "specifications": [],
        "features": [
          "Designed for road and tunnel environments; outputs aligned to tunnel guidelines",
          "Extended measurement range up to 99.99 km",
          "High sensitivity for detecting visibility reductions from pollution build-up and fire smoke",
          "Serial + analogue interfaces: RS232/422/485, 0–10 V, 4–20 mA",
          "Optional relays for alarms, signage and ventilation control",
          "Smart contamination monitoring with auto-correction and two-stage cleaning warnings",
          "Easy, fast installation to reduce lane closure time",
          "Road and tunnel visibility monitoring"
        ],
        "applications": [
          "Monitoring and measurement of visibility & present weather."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/dsh_fam_RWS-30_en_datasheet.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/dsh_fam_RWS-30_en_datasheet.pdf"
          },
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/umn_fam_RWS-30_en_manual.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/rws-30-road-tunnel-visibility-sensor.png"
      },
      {
        "slug": "sws-050-forward-scatter-visibility-sensor",
        "title": "SWS-050 – Forward Scatter Visibility Sensor",
        "sourceUrl": "https://environmental.senseca.com/product/sws-050-forward-scatter-visibility-sensor/",
        "tagline": "The SWS-050 is a compact forward-scatter visibility sensor designed for reliable, repeatable measurements in all weather conditions.",
        "intro": "The SWS-050 is a compact forward-scatter visibility sensor designed for reliable, repeatable measurements in all weather conditions. It delivers MOR (Meteorological Optical Range) and extinction coefficient (EXCO) with a fixed measurement range of 10 m to 40 km , making it a cost-effective choice for continuous visibility monitoring and aeronautical applications.",
        "specifications": [],
        "features": [
          "Visibility range: 10 m–40 km (MOR), plus EXCO",
          "ICAO/WMO compliant performance and calibration",
          "Interfaces: RS232 / RS422 / RS485 (ASCII messages)",
          "Heated hood , self-test, and contamination monitoring",
          "3-year warranty"
        ],
        "applications": [
          "Monitoring and measurement of visibility & present weather.",
          "Outdoor monitoring deployments.",
          "Industrial process and environmental control."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/dsh_fam_SWS-50_en_datasheet.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/dsh_fam_SWS-50_en_datasheet.pdf"
          },
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/umn_fam_SWS_series_en_manual.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/sws-050-forward-scatter-visibility-sensor.png"
      },
      {
        "slug": "sws-100-forward-scatter-visibility-present-weather-sensor",
        "title": "SWS-100 – Forward-Scatter Visibility & Present Weather Sensor",
        "sourceUrl": "https://environmental.senseca.com/product/sws-100-forward-scatter-visibility-present-weather-sensor/",
        "tagline": "The SWS-100 is a premium forward-scatter visibility and present weather sensor engineered for high-availability monitoring in demanding outdoor environments.",
        "intro": "The SWS-100 is a premium forward-scatter visibility and present weather sensor engineered for high-availability monitoring in demanding outdoor environments. Using proven forward-scatter technology, it delivers highly accurate Meteorological Optical Range (MOR) values comparable to transmissometer systems, while keeping installation and maintenance effort low.",
        "specifications": [],
        "features": [
          "Configurable visibility range: 10 m–99 km (MOR)",
          "High-accuracy MOR measurement, WMO/ICAO aligned calibration",
          "Present weather detection according to WMO Table 4680",
          "Rugged outdoor design with integrated heating",
          "Continuous self-diagnostics for maximum uptime"
        ],
        "applications": [
          "Monitoring and measurement of visibility & present weather.",
          "Outdoor monitoring deployments.",
          "Industrial process and environmental control."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/dsh_fam_SWS-100_en_datasheet.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/dsh_fam_SWS-100_en_datasheet.pdf"
          },
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/umn_fam_SWS_series_en_manual.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/sws-100-forward-scatter-visibility-present-weather-sensor.png"
      },
      {
        "slug": "sws-200-forward-scatter-visibility-present-weather-sensor",
        "title": "SWS-200 – Forward-Scatter Visibility & Present Weather Sensor",
        "sourceUrl": "https://environmental.senseca.com/product/sws-200-forward-scatter-visibility-present-weather-sensor/",
        "tagline": "The SWS-200 combines a proven forward-scatter geometry with an additional backscatter receiver to measure Meteorological Optical Range (MOR) and report present weather with greater confidence—especially during mixed or rapidly changing precipitation.",
        "intro": "The SWS-200 combines a proven forward-scatter geometry with an additional backscatter receiver to measure Meteorological Optical Range (MOR) and report present weather with greater confidence—especially during mixed or rapidly changing precipitation. By analysing signals from both channels, it improves separation between liquid and frozen precipitation , supporting more dependable reporting for operational networks.",
        "specifications": [],
        "features": [
          "Visibility reporting: MOR (default 10 m–20 km , max configurable up to 99.99 km )",
          "Forward + backscatter measurement for improved frozen vs. liquid precipitation separation",
          "Present weather codes according to WMO Table 4680",
          "Interfaces: RS232 / RS422 / RS485 (with optional expansion for specific integrations)",
          "Contamination monitoring , self-test/status reporting, and hood heating for low maintenance",
          "3-year warranty"
        ],
        "applications": [
          "Monitoring and measurement of visibility & present weather.",
          "Outdoor monitoring deployments."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/dsh_fam_SWS-200_en_datasheet.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/dsh_fam_SWS-200_en_datasheet.pdf"
          },
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/umn_fam_SWS_series_en_manual.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/sws-200-forward-scatter-visibility-present-weather-sensor.png"
      },
      {
        "slug": "sws-250-forward-scatter-visibility-present-weather-sensor",
        "title": "SWS-250 – Forward-Scatter Visibility & Present Weather Sensor",
        "sourceUrl": "https://environmental.senseca.com/product/sws-250-forward-scatter-visibility-present-weather-sensor/",
        "tagline": "The SWS-250 is the most capable model in the SWS range, delivering advanced present weather classification in a compact format.",
        "intro": "The SWS-250 is the most capable model in the SWS range, delivering advanced present weather classification in a compact format. Alongside forward-scatter measurement, it uses a dedicated backscatter channel to strengthen identification of precipitation types and provide reliable separation of frozen and non-frozen precipitation —particularly valuable when accuracy matters most.",
        "specifications": [],
        "features": [
          "Visibility reporting: MOR + EXCO (default 10 m–75 km , max configurable up to ~99 km )",
          "Enhanced present weather classification using forward-scatter plus a dedicated backscatter channel",
          "Output formats: WMO 4680 and METAR present & past weather codes",
          "Interfaces: RS232 / RS422 / RS485 (optional ALS-2 integration for RVR systems)",
          "Standard heating + contamination monitoring to maintain performance in harsh weather",
          "3-year warranty"
        ],
        "applications": [
          "Monitoring and measurement of visibility & present weather.",
          "Outdoor monitoring deployments.",
          "Industrial process and environmental control."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/dsh_fam_SWS-250_en_datasheet.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/dsh_fam_SWS-250_en_datasheet.pdf"
          },
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/umn_fam_SWS_series_en_manual.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/sws-250-forward-scatter-visibility-present-weather-sensor.png"
      },
      {
        "slug": "vpf-710-forward-scatter-visibility-sensor",
        "title": "VPF-710 – Forward Scatter Visibility Sensor",
        "sourceUrl": "https://environmental.senseca.com/product/vpf-710-forward-scatter-visibility-sensor/",
        "tagline": "The VPF-710 is a premium visibility sensor built for demanding environments such as offshore platforms, airports, and wind farms .",
        "intro": "The VPF-710 is a premium visibility sensor built for demanding environments such as offshore platforms, airports, and wind farms . Its open-head design promotes natural airflow through the measurement volume, helping visibility readings remain representative even with precipitation, smoke, dust, or spray .",
        "specifications": [],
        "features": [
          "Visibility output: EXCO (standard) / MOR (special configuration)",
          "Measuring range: 10 m to 99.99 km (proven up to 75 km )",
          "Open-head design for well-ventilated sampling in challenging weather",
          "Contamination monitoring + compensation with staged cleaning warnings",
          "Optional ALS-2 interface for appending ambient light data (RVR workflows)",
          "AC or DC powered; corrosion-resistant construction; 5-year warrant"
        ],
        "applications": [
          "Monitoring and measurement of visibility & present weather.",
          "Industrial process and environmental control."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/dsh_fam_VPF-710_en_datasheet.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/dsh_fam_VPF-710_en_datasheet.pdf"
          },
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/umn_fam_VPF_series_en_manual.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/vpf-710-forward-scatter-visibility-sensor.png"
      },
      {
        "slug": "vpf-730-visibility-present-weather-sensor",
        "title": "VPF-730 – Visibility & Present Weather Sensor",
        "sourceUrl": "https://environmental.senseca.com/product/vpf-730-visibility-present-weather-sensor/",
        "tagline": "The VPF-730 is a combined visibility and present weather sensor engineered for offshore platforms, heli-decks and demanding aviation environments , where durability and stable performance matter most.",
        "intro": "The VPF-730 is a combined visibility and present weather sensor engineered for offshore platforms, heli-decks and demanding aviation environments , where durability and stable performance matter most. Its open-head design supports representative sampling in challenging conditions such as wind-driven rain, salt spray, dust and turbulence.",
        "specifications": [],
        "features": [
          "Forward-scatter visibility measurement with MOR and EXCO output",
          "Wide visibility range: 10 m to 99.99 km",
          "Backscatter receiver for improved liquid vs frozen precipitation discrimination",
          "Outputs aligned to WMO present weather coding and METAR reporting",
          "Automatic contamination monitoring and staged maintenance warnings",
          "Rugged build for harsh environments; optional hood heating",
          "Flexible integration via serial interfaces; optional ambient light sensor interface",
          "Offshore platforms and coastal installations"
        ],
        "applications": [
          "Monitoring and measurement of visibility & present weather."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/dsh_fam_VPF-730_en_datasheet.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/dsh_fam_VPF-730_en_datasheet.pdf"
          },
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/umn_fam_VPF_series_en_manual.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/vpf-730-visibility-present-weather-sensor.png"
      },
      {
        "slug": "vpf-750-visibility-present-weather-sensor",
        "title": "VPF-750 – Visibility & Present Weather Sensor",
        "sourceUrl": "https://environmental.senseca.com/product/vpf-750-visibility-present-weather-sensor/",
        "tagline": "The VPF-750 is the flagship model of the VPF family, designed for AWOS installations, major airports and national meteorological networks that require advanced present weather capability.",
        "intro": "The VPF-750 is the flagship model of the VPF family, designed for AWOS installations, major airports and national meteorological networks that require advanced present weather capability. It consolidates visibility measurement with integrated precipitation sensing and temperature/humidity measurement , helping stations deliver richer automated reporting with fewer external components.",
        "specifications": [],
        "features": [
          "Flagship sensor for AWOS and major airport deployments",
          "Forward-scatter visibility with MOR and EXCO output",
          "Wide visibility range: 10 m to 99.99 km",
          "Integrated precipitation sensor plus backscatter receiver for advanced precipitation-type discrimination",
          "Integrated temperature and humidity sensors for improved reporting context",
          "Extended WMO/METAR present weather outputs , including significant past weather",
          "Self-monitoring and contamination checks for reduced maintenance",
          "Major airports and CAT III environments"
        ],
        "applications": [
          "Monitoring and measurement of visibility & present weather."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/dsh_fam_VPF-750_en_datasheet.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/dsh_fam_VPF-750_en_datasheet.pdf"
          },
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/umn_fam_VPF_series_en_manual.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/vpf-750-visibility-present-weather-sensor.png"
      }
    ]
  },
  {
    "id": "data-acquisition-systems",
    "title": "Data Acquisition Systems",
    "sourceUrl": "https://environmental.senseca.com/measure/data-acquisition-systems/",
    "products": [
      {
        "slug": "hd33m-mb-gsm-data-logger-with-gsm-gprs-module",
        "title": "HD33M-MB.2 – Data Logger with GSM/GPRS Module",
        "sourceUrl": "https://environmental.senseca.com/product/hd33m-mb-gsm-data-logger-with-gsm-gprs-module/",
        "tagline": "Please click on the picture to see an overview of the compact meteorological loggers to assist you in finding the best possible solution HD33M-MB.2 : flexible to use GSM/GPR data logger with Modbus input and additional contact input.",
        "intro": "Please click on the picture to see an overview of the compact meteorological loggers to assist you in finding the best possible solution HD33M-MB.2 : flexible to use GSM/GPR data logger with Modbus input and additional contact input. When combined with our compact (wind) measurements ( HD52.3D series, HD51.3 series ) the integration is fast and complete. Best fit when you need a fast and simple solution .",
        "specifications": [],
        "features": [
          "Temperature, relative humidity, dew point, atmospheric pressure, solar radiation, rainfall quantity, wind speed and direction – through Modbus input",
          "Remote monitoring possible.",
          "Data on local server or Cloud, through FTP and to an HTTP server",
          "Free PC software for configuration, monitor and data download",
          "Alarms: e-mail and text messages",
          "IP 67 waterproof housing",
          "Optional custom LCD ( HD33LM-MB.2 )",
          "Powered 7-30VDC, or solar panel (optional power supply unit)"
        ],
        "applications": [
          "Monitoring and measurement of data acquisition systems."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD33_Meteo_Loggers_Flyer_ENG.pdf",
        "datasheets": [
          {
            "label": "DeltaOHM_HD33_Meteo_Loggers_Flyer_ENG.pdf",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD33_Meteo_Loggers_Flyer_ENG.pdf"
          },
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD33M-MB_2_manual_ENG.pdf"
          },
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD33M_M-MB.2_datasheet_ENG.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd33m-mb-gsm-data-logger-with-gsm-gprs-module.jpg"
      },
      {
        "slug": "hd33m-mb-4-4g-data-logger-for-remote-monitoring",
        "title": "HD33M-MB.4 – 4G Data Logger for Remote Monitoring",
        "sourceUrl": "https://environmental.senseca.com/product/hd33m-mb-4-4g-data-logger-for-remote-monitoring/",
        "tagline": "The HD33[L]M-MB.4 is a robust 4G data logger designed for remote environmental, meteorological and industrial monitoring.",
        "intro": "The HD33[L]M-MB.4 is a robust 4G data logger designed for remote environmental, meteorological and industrial monitoring. It collects data from RS485 Modbus-RTU sensors and transmits measurements via 4G / 3G / GSM / GPRS , reducing the need for on-site data retrieval.",
        "specifications": [],
        "features": [
          "Remote data transmission via e-mail, FTP or HTTP server",
          "RS485 Modbus-RTU master input for multi-sensor networks",
          "Rain gauge input with rainfall rate and daily rainfall calculation",
          "Remote configuration and control via SMS commands or TCP/IP",
          "Configurable alarm thresholds with notification by SMS or e-mail",
          "Internal memory for up to 424,000 samples",
          "Optional LCD display",
          "IP67 housing for outdoor installations"
        ],
        "applications": [
          "Monitoring and measurement of data acquisition systems.",
          "Outdoor monitoring deployments.",
          "Industrial process and environmental control."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/dsh_fam_HD33M-MB.4_en_datasheet.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/dsh_fam_HD33M-MB.4_en_datasheet.pdf"
          },
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/umn_fam_HD33M-MB.4_en_manual.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd33m-mb-4-4g-data-logger-for-remote-monitoring.png"
      },
      {
        "slug": "hd33m-2-gsm-gprs-data-loggers-for-weather-stations",
        "title": "HD33M.2 – GSM/GPRS Data Loggers for Weather Stations",
        "sourceUrl": "https://environmental.senseca.com/product/hd33m-2-gsm-gprs-data-loggers-for-weather-stations/",
        "tagline": "Please click on the picture to see an overview of the compact meteorological loggers to assist you in finding the best possible solution The HD33M.2 data logger has an integrated GSM/GPRS module.",
        "intro": "Please click on the picture to see an overview of the compact meteorological loggers to assist you in finding the best possible solution The HD33M.2 data logger has an integrated GSM/GPRS module. It has 5 inputs: easy to use for monitoring (and/or) temperature, humidity, solar radiation, rainfall quantity, wind speed and direction (with cup-anemometer). Optional atmospheric pressure can be integrated in the unit.",
        "specifications": [],
        "features": [
          "Datalogging of temperature, relative humidity, dew point temperature, atmospheric pressure, solar radiation, rainfall amount, wind speed and direction",
          "Available in two versions: with input for standard RS485 MODBUS-RTU sensors or with inputs for dedicated Senseca sensors",
          "GSM/GPRS module for remote monitoring",
          "Data sending via email, FTP and to an HTTP server (e.g. Senseca Cloud)",
          "PC software for configuration, monitoring and downloading of data to a database",
          "Software option available for compliance with FDA 21 CFR part 11 recommendations",
          "Alarm notification via e-mail and SMS when configurable measurement thresholds are exceeded",
          "IP 67 waterproof housing"
        ],
        "applications": [
          "Monitoring and measurement of data acquisition systems."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD33_Meteo_Loggers_Flyer_ENG.pdf",
        "datasheets": [
          {
            "label": "DeltaOHM_HD33_Meteo_Loggers_Flyer_ENG.pdf",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD33_Meteo_Loggers_Flyer_ENG.pdf"
          },
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD33M_2_manual_ENG.pdf"
          },
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD33M_M-MB.2_datasheet_ENG.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd33m-2-gsm-gprs-data-loggers-for-weather-stations.jpg"
      },
      {
        "slug": "hd33mt-gsm-gsm-3g-logger-ip65-meteo",
        "title": "HD33MT.4 – Data Logger for Weather Station, 4G",
        "sourceUrl": "https://environmental.senseca.com/product/hd33mt-gsm-gsm-3g-logger-ip65-meteo/",
        "tagline": "HD33MT.4 most universal compact meteorological data logger series with universal 4G/3G/2G/GPRS modem.",
        "intro": "HD33MT.4 most universal compact meteorological data logger series with universal 4G/3G/2G/GPRS modem. Designed to work with power supply from a solar panel, very low power consumption; solar charger and regulator are already integrated in this logger. Just add a solar panel and the rechargeable battery and you are independent from any further power source.",
        "specifications": [],
        "features": [
          "4 analog independently configurable inputs",
          "2 voltage-free counting contact inputs",
          "SDI-12 “Master” port compatible with version 1.3.",
          "RS485 port Modbus-RTU configurable as “Master” or “Slave”.",
          "Ethernet MODBUS TCP/IP (optional as HD33MT.4/E or HD33LMT.4/E).",
          "2 voltage-free contact alarm outputs."
        ],
        "applications": [
          "Monitoring and measurement of data acquisition systems."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/dsh_fam_HD33MT.4_en_datasheet.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/dsh_fam_HD33MT.4_en_datasheet.pdf"
          },
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/umn_fam_HD33MT.4_en_manual.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd33mt-gsm-gsm-3g-logger-ip65-meteo.png"
      },
      {
        "slug": "hd35-wireless-data-logger-system",
        "title": "HD35 – Wireless Data Logger System",
        "sourceUrl": "https://environmental.senseca.com/product/hd35-wireless-data-logger-system/",
        "tagline": "The HD35ED… series of wireless data logging system consists of: One or more HD35ED… series devices: the HD35ED… devices acquire the values measured by the built-in sensors or by the external sensors connected by cable.",
        "intro": "The HD35ED… series of wireless data logging system consists of: One or more HD35ED… series devices: the HD35ED… devices acquire the values measured by the built-in sensors or by the external sensors connected by cable. The data are both stored in the internal memory of the device and transmitted via radio to the receiving unit (base unit/Access Point).",
        "specifications": [],
        "features": [
          "One or more HD35ED… series devices: the HD35ED… devices acquire the values measured by the built-in sensors or by the external sensors connected by cable. The data are both stored in the internal memory of the device and transmitted via radio to the receiving unit (base unit/Access Point). Most HD35ED… devices are battery operated and do not require power connections.",
          "An HD35AP… base unit (Access Point): receives the measured values from all HD35ED… devices and transmits them to the PC. The HD35AP… base unit has an internal buffer battery with limited autonomy, so it must be powered from the outside by connecting it to the appropriate power supply (optional) or to the PC USB port.",
          "Software HD35AP-S: to be installed in the PC, it allows to download and visualize the data, to insert the data in a database and to configure the system. The software can be downloaded free of charge here .",
          "Transmitters with a 0÷20 or 4÷20 mA current output and a 0÷50 mV, 0÷1 V or 0÷10 V voltage output.",
          "Pt100 / Pt1000 temperature sensors and thermocouples type K, J, T, N, E",
          "Sensors with dry contact (counting of commutations) or potentiometric output",
          "Food and Warehouses",
          "Pharmaceutical, Medical Laboratories, Clean Rooms"
        ],
        "applications": [
          "Monitoring and measurement of data acquisition systems.",
          "Industrial process and environmental control."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM-HD35-wireless-datalogger-datasheet-en.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM-HD35-wireless-datalogger-datasheet-en.pdf"
          },
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD35_manual_ENG.pdf"
          },
          {
            "label": "Modbus Register",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD35_modbus_protocol_instructions_ENG.pdf"
          },
          {
            "label": "HD35AP",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/conformity/HD35AP_HD35APS_HD35RE_EU_declaration_of_conformity_DoC5054.pdf"
          },
          {
            "label": "HD35APD",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/conformity/HD35APD_EU_declaration_of_conformity_DoC5055.pdf"
          },
          {
            "label": "HD35APG",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/conformity/HD35APG_EU_declaration_of_conformity_DoC5058.pdf"
          },
          {
            "label": "HD35APGMT",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/conformity/HD35APGMT_EU_declaration_of_conformity_DoC5059.pdf"
          },
          {
            "label": "HD35APR",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/conformity/HD35APR_EU_declaration_of_conformity_DoC5056.pdf"
          },
          {
            "label": "HD35APW",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/conformity/HD35APW_EU_declaration_of_conformity_DoC5057.pdf"
          },
          {
            "label": "HD35ED14bNTC",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/conformity/HD35ED_EU_declaration_of_conformity_DoC5041.pdf"
          },
          {
            "label": "HD35ED14bNTVI",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/conformity/HD35ED_EU_declaration_of_conformity_DoC5044.pdf"
          },
          {
            "label": "HD35ED1NI2TCV",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/conformity/HD35ED_EU_declaration_of_conformity_DoC5042.pdf"
          },
          {
            "label": "HD35ED7P/1TC",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/conformity/HD35ED_EU_declaration_of_conformity_DoC5045.pdf"
          },
          {
            "label": "HD35EDW1NB(2)TV",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/conformity/HD35ED_EU_declaration_of_conformity_DoC5050.pdf"
          },
          {
            "label": "HD35EDW1(4b)NTC",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/conformity/HD35ED_EU_declaration_of_conformity_DoC5046.pdf"
          },
          {
            "label": "HD35EDW1NLTC",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/conformity/HD35ED_EU_declaration_of_conformity_DoC5049.pdf"
          },
          {
            "label": "HD35EDW7P/...TC",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/conformity/HD35ED_EU_declaration_of_conformity_DoC5047.pdf"
          },
          {
            "label": "HD35EDWH",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/conformity/HD35ED_EU_declaration_of_conformity_DoC5051.pdf"
          },
          {
            "label": "HD35EDWK/4TC",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/conformity/HD35ED_EU_declaration_of_conformity_DoC5048.pdf"
          },
          {
            "label": "HD35EDW-MB",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/conformity/HD35ED_EU_declaration_of_conformity_DoC5052.pdf"
          },
          {
            "label": "HD35EDWPM...",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/conformity/HD35ED_EU_declaration_of_conformity_DoC5208.pdf"
          },
          {
            "label": "HD35REW",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/conformity/HD35REW_EU_declaration_of_conformity_DoC5061.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd35-wireless-data-logger-system.jpg"
      },
      {
        "slug": "hd50cr-clean-room-logger-transmitter",
        "title": "HD50CR – Clean Room Logger Transmitter",
        "sourceUrl": "https://environmental.senseca.com/product/hd50cr-clean-room-logger-transmitter/",
        "tagline": "The HD50CR is the ideal solution for monitoring of differential pressure, temperature and humidity in Clean Room applications.",
        "intro": "The HD50CR is the ideal solution for monitoring of differential pressure, temperature and humidity in Clean Room applications. A low pressure sensor with high accuracy and stability and auto-zeroing feature ensure high accuracy and stability over the time.",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of data acquisition systems."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/umn_prd_HD50CR-AS_en_manual.pdf",
        "datasheets": [
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/umn_prd_HD50CR-AS_en_manual.pdf"
          },
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/umn_prd_HD50CR_en_manual.pdf"
          },
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD50CR_datasheet_ENG.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd50cr-clean-room-logger-transmitter.jpg"
      },
      {
        "slug": "hd50-web-data-logger",
        "title": "HD50… Series – Web Data Logger",
        "sourceUrl": "https://environmental.senseca.com/product/hd50-web-data-logger/",
        "tagline": "HD50… is a data logger serie that supports Ethernet with RJ45 connector or Wi-Fi .",
        "intro": "HD50… is a data logger serie that supports Ethernet with RJ45 connector or Wi-Fi . With the HD50 it is possible to start from 1 logger and extend it to a practically unlimited network of loggers. The HD50 settings can be opened from a web browser, as it has a built-in webserver. This way it is also possible to monitor the actual measurements. Senseca already has the HD35 series , based on RF communication.",
        "specifications": [],
        "features": [
          "Easy to use: it can be directly accessed by a web browser",
          "It can be used stand alone or in networks with hundreds of loggers",
          "Additional software for all solutions: database locally on PC, database on local server, cloud based",
          "Wide range of standard sensors ( °C / UR / LUX / Atm / CO 2 / differential pressure / PM1.0, PM2.5, PM4.0, PM10 )",
          "It can support practically ‘any signal’: universal inputs make it possible to integrate any transmitter with standard output",
          "Optional software available for CFR21part11 (pharmaceutical market)",
          "The logger can send an email alarm when a value is higher or lower than the set threshold"
        ],
        "applications": [
          "Monitoring and measurement of data acquisition systems."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/dsh_fam_HD50_en_datasheet.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/dsh_fam_HD50_en_datasheet.pdf"
          },
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/umn_fam_HD50_en_manual.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd50-web-data-logger.jpg"
      },
      {
        "slug": "lr35-series-iot-data-loggers-for-lorawan-networks",
        "title": "LR35 Series – IoT Data Loggers for LoRaWAN Networks",
        "sourceUrl": "https://environmental.senseca.com/product/lr35-series-iot-data-loggers-for-lorawan-networks/",
        "tagline": "The data loggers of the LR35… series are wireless devices for IoT (Internet of Things) applications that use LoRaWAN® technology for long distance data transmission.",
        "intro": "The data loggers of the LR35… series are wireless devices for IoT (Internet of Things) applications that use LoRaWAN® technology for long distance data transmission.",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of data acquisition systems.",
          "Outdoor monitoring deployments."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_LR35_datasheet_ENG.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_LR35_datasheet_ENG.pdf"
          },
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_LR35_manual_ENG.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/lr35-series-iot-data-loggers-for-lorawan-networks.jpg"
      },
      {
        "slug": "meteodata-4000-series-multi-purpose-data-logger-with-global-connectivity",
        "title": "MeteoData-4000 series – Multi-Purpose Data Logger with Global Connectivity",
        "sourceUrl": "https://environmental.senseca.com/product/meteodata-4000-series-multi-purpose-data-logger-with-global-connectivity/",
        "tagline": "The METEODATA-4000 Series is Senseca’s next-generation environmental data logger designed for reliable, autonomous operation in demanding outdoor installations.",
        "intro": "The METEODATA-4000 Series is Senseca’s next-generation environmental data logger designed for reliable, autonomous operation in demanding outdoor installations. Built as an open platform, it connects to a wide range of COTS sensors (analogue, pulse and smart digital) and combines onboard processing , self-diagnostics and alarm handling to help ensure high-quality data in real-world conditions.",
        "specifications": [],
        "features": [
          "Very low power consumption for long-term autonomous operation .",
          "Universal sensor compatibility via analogue and digital interfaces (RS-232/RS-485, SDI-12, Modbus and more).",
          "High-capacity I/O resources designed to support complex monitoring systems.",
          "Embedded data processing & alarms with up to 32 measurement channels and up to 32 alarm channels .",
          "Global connectivity options including cellular, Wi-Fi, Bluetooth Low Energy, Ethernet and satellite interfaces.",
          "Faster commissioning with drag-and-drop sensor setup via the software ecosystem and online sensor library.",
          "a cloud platform for simple and secure browser-based data access (Webtrans 4K),",
          "a desktop software for the datalogger and sensors management (Teletrans-W4K), and"
        ],
        "applications": [
          "Monitoring and measurement of data acquisition systems.",
          "Outdoor monitoring deployments."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/dsh_fam_METEODATA_en_datasheet.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/dsh_fam_METEODATA_en_datasheet.pdf"
          },
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/umn_fam_MTD4000_en_manual.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/meteodata-4000-series-multi-purpose-data-logger-with-global-connectivity.png"
      }
    ]
  },
  {
    "id": "soil-leaf",
    "title": "Soil & Leaf",
    "sourceUrl": "https://environmental.senseca.com/measure/soil-moisture-leaf-wetness/",
    "products": [
      {
        "slug": "hd3901-leaf-wetness-sensor",
        "title": "HD3901 – Leaf Wetness Sensor",
        "sourceUrl": "https://environmental.senseca.com/product/hd3901-leaf-wetness-sensor/",
        "tagline": "The HD3901 leaf wetness sensor detects the presence of condensation on its sensitive surface and has been designed to reproduce in an extremely accurate way the thermodynamic behaviour of a leaf.",
        "intro": "The HD3901 leaf wetness sensor detects the presence of condensation on its sensitive surface and has been designed to reproduce in an extremely accurate way the thermodynamic behaviour of a leaf.",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of soil & leaf."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/dsh_fam_HD3901_en_datasheet.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/dsh_fam_HD3901_en_datasheet.pdf"
          },
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/umn_fam_HD3901_en_manual.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd3901-leaf-wetness-sensor.jpg"
      },
      {
        "slug": "hd3910-1-hd3910-2-soil-volumetric-water-content",
        "title": "HD3910… – Soil Volumetric Water Content",
        "sourceUrl": "https://environmental.senseca.com/product/hd3910-1-hd3910-2-soil-volumetric-water-content/",
        "tagline": "The probes HD3910.1 (two electrodes) and HD3910.2 (three electrodes ) measure the soil volumetric water content (VWC) by using a capacitive measurement principle which allows fast measurements in the field and with minimal invasiveness.",
        "intro": "The probes HD3910.1 (two electrodes) and HD3910.2 (three electrodes ) measure the soil volumetric water content (VWC) by using a capacitive measurement principle which allows fast measurements in the field and with minimal invasiveness. The three electrode probe HD3910.2 is particularly suitable for the measurement in small volumes , for example for cultivations in pots.",
        "specifications": [],
        "features": [
          "RS485 digital output with MODBUS-RTU protocol: allows the use of even very long connection cables. It can be connected to the data loggers HD32MT.1 and HD32MT.3 or to any other data logger with RS485 MODBUS-RTU input.",
          "SDI-12 digital output is compatible with version 1.3 of the protocol and can be connected to the data logger HD32MT.3 or to any other data logger with SDI-12 input.",
          "Analog output has two 0.5…3 V standard voltage outputs: one for the volumetric water content and one for the temperature. On request, 0…2.5 V, 0…5 V or 0…10 V outputs."
        ],
        "applications": [
          "Monitoring and measurement of soil & leaf."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/dsh_fam_HD3910_en_datasheet.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/dsh_fam_HD3910_en_datasheet.pdf"
          },
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/umn_fam_HD3910_en_manual.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd3910-1-hd3910-2-soil-volumetric-water-content.jpg"
      },
      {
        "slug": "tp32mtt-03-tp32mtt-03-1-soil-temperature-probes",
        "title": "TP32MTT.03 / TP32MTT.03.1 – Soil Temperature Probes",
        "sourceUrl": "https://environmental.senseca.com/product/tp32mtt-03-tp32mtt-03-1-soil-temperature-probes/",
        "tagline": "The temperature probe TP32MTT.03 is equipped with seven Pt100 1/3 DIN sensors for measuring the temperature at the depth of: +5 cm, 0, -5 cm, -10 cm, -20 cm, -50 cm, -1 m with respect to the ground level, according to the WMO indications.",
        "intro": "The temperature probe TP32MTT.03 is equipped with seven Pt100 1/3 DIN sensors for measuring the temperature at the depth of: +5 cm, 0, -5 cm, -10 cm, -20 cm, -50 cm, -1 m with respect to the ground level, according to the WMO indications.",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of soil & leaf."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/dsh_fam_TP32MTT_en_datasheet.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/dsh_fam_TP32MTT_en_datasheet.pdf"
          },
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/umn_fam_TP32MTT.03_en_manual.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/tp32mtt-03-tp32mtt-03-1-soil-temperature-probes.jpg"
      },
      {
        "slug": "tp32mtt-03-a-soil-temperature-probe",
        "title": "TP32MTT.03.A – Soil Temperature Probe",
        "sourceUrl": "https://environmental.senseca.com/product/tp32mtt-03-a-soil-temperature-probe/",
        "tagline": "4-wire Pt100 1/3 DIN temperature probe for measuring the soil temperature at a depth of 50 mm.",
        "intro": "4-wire Pt100 1/3 DIN temperature probe for measuring the soil temperature at a depth of 50 mm. With protective shield from solar radiations . Temperature range -40…+85°C. 4-pole cable ended with open wires. Cable length 2 m (TP32MTT.03.A.2), 5 m (TP32MTT.03.A.5) or 10 m (TP32MTT.03.A.10). For soil and air temperature, see probe TP32MTT.03.B and for air temperature only see probe TP32MTT.03.C .",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of soil & leaf."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DSH_TP32MTT03A_B_C_EN_datasheet.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DSH_TP32MTT03A_B_C_EN_datasheet.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/tp32mtt-03-a-soil-temperature-probe.jpg"
      },
      {
        "slug": "tp32mtt-03-b-soil-and-air-temperature-probe",
        "title": "TP32MTT.03.B – Soil and Air Temperature Probe",
        "sourceUrl": "https://environmental.senseca.com/product/tp32mtt-03-b-soil-and-air-temperature-probe/",
        "tagline": "Temperature probe with two 4-wire Pt100 1/3 DIN sensors for measuring the soil and air temperature (± 50 mm).",
        "intro": "Temperature probe with two 4-wire Pt100 1/3 DIN sensors for measuring the soil and air temperature (± 50 mm). Equipped with p rotective shield from solar radiations . Temperature range -40…+85°C. 8-pole cable ended with open wires. Cable lengths: 2 m (TP32MTT.03.B.2), 5 m (TP32MTT.03.B.5) or 10 m (TP32MTT.03.B.10).",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of soil & leaf."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DSH_TP32MTT03A_B_C_EN_datasheet.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DSH_TP32MTT03A_B_C_EN_datasheet.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/tp32mtt-03-b-soil-and-air-temperature-probe.jpg"
      },
      {
        "slug": "tp32mtt-03-c-air-temperature-probe",
        "title": "TP32MTT.03.C – Air Temperature Probe",
        "sourceUrl": "https://environmental.senseca.com/product/tp32mtt-03-c-air-temperature-probe/",
        "tagline": "4-wire Pt100 1/3 DIN temperature probe for measuring the air temperature. Equipped with protective shield from solar radiations .",
        "intro": "4-wire Pt100 1/3 DIN temperature probe for measuring the air temperature. Equipped with protective shield from solar radiations . Temperature range -40…+85°C. 4-pole cable ended with open wires. Cable lengths: 2 m (TP32MTT.03.C.2), 5 m (TP32MTT.03.C.5) or 10 m (TP32MTT.03.C.10). For soil and air temperature, see probe TP32MTT.03.B and for soil temperature only, see probe TP32MTT.03.A .",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of soil & leaf."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DSH_TP32MTT03A_B_C_EN_datasheet.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DSH_TP32MTT03A_B_C_EN_datasheet.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/tp32mtt-03-c-air-temperature-probe.jpg"
      }
    ]
  },
  {
    "id": "weather-station",
    "title": "Weather Station",
    "sourceUrl": "https://environmental.senseca.com/measure/weather-station/",
    "products": [
      {
        "slug": "hd2011nmt-noise-monitoring-station",
        "title": "HD2011NMT – Noise Monitoring Station",
        "sourceUrl": "https://environmental.senseca.com/product/hd2011nmt-noise-monitoring-station/",
        "tagline": "HD2011NMT is a remote control Noise Monitoring Station with meteo parameters acquisition.",
        "intro": "HD2011NMT is a remote control Noise Monitoring Station with meteo parameters acquisition. It is designed to be part of a network of noise monitoring terminals or a stand alone unit. Each HD2011NMT is able to work unattended in permanent (BOX VERSION); semi-permanent (BOX VERSION); portable installations (SUITCASE VERSION).",
        "specifications": [],
        "features": [
          "permanent (BOX VERSION);",
          "semi-permanent (BOX VERSION);",
          "portable installations (SUITCASE VERSION).",
          "Monitoring of Road Traffic Noise",
          "Monitoring of Railway Traffic Noise",
          "Airport Noise",
          "Wind Turbine Noise",
          "Construption Site Noise"
        ],
        "applications": [
          "Monitoring and measurement of weather station.",
          "Outdoor monitoring deployments.",
          "Industrial process and environmental control."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM-HD2011NMT-Noise-Monitoring-Datasheet-en.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM-HD2011NMT-Noise-Monitoring-Datasheet-en.pdf"
          },
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM-HD2011NMT-Noise-Monitoring-Station-manual-en.pdf"
          },
          {
            "label": "Software Introduction",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM-HD2011NMT-Software-Introduction-en.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd2011nmt-noise-monitoring-station.jpg"
      },
      {
        "slug": "hd32-35-housing-with-acquisition-system-for-weather-stations",
        "title": "HD32.35 – Housing with Acquisition System for Weather Stations",
        "sourceUrl": "https://environmental.senseca.com/product/hd32-35-housing-with-acquisition-system-for-weather-stations/",
        "tagline": "HD32MT.1 data logger integrated in an AISI 304 stainless steel outdoor housing. Screen to protect the housing from solar radiation.",
        "intro": "HD32MT.1 data logger integrated in an AISI 304 stainless steel outdoor housing. Screen to protect the housing from solar radiation. Powder-coated white. Double locking, one is a key. Dimensions 450 x 300 x 210 mm. IP66 protection degree. Supplied with accessories for attachment to the pole diameter 36…52 mm. Provided for 100…240 Vac mains power supply or for power supply from solar panel (version HD32.35FP ).",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of weather station.",
          "Outdoor monitoring deployments."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM-32.35_36-housing-datalogger-datasheet-en.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM-32.35_36-housing-datalogger-datasheet-en.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd32-35-housing-with-acquisition-system-for-weather-stations.jpg"
      },
      {
        "slug": "hd32-36-outdoor-housing-with-acquisition-system",
        "title": "HD32.36 – Outdoor Housing with Acquisition System",
        "sourceUrl": "https://environmental.senseca.com/product/hd32-36-outdoor-housing-with-acquisition-system/",
        "tagline": "HD32MT.1 data logger integrated in a fiberglass-reinforced hot-pressed polyester outdoor housing.",
        "intro": "HD32MT.1 data logger integrated in a fiberglass-reinforced hot-pressed polyester outdoor housing. Screen to protect the housing from solar radiation, powder-coated anodized aluminum. White. Key lock. Dimensions 415 x 310 x 170 mm. IP66 protection degree. Supplied with accessories for attachment to the stainless steel pole diameter 36…52 mm.",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of weather station.",
          "Outdoor monitoring deployments."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM-32.35_36-housing-datalogger-datasheet-en.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM-32.35_36-housing-datalogger-datasheet-en.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd32-36-outdoor-housing-with-acquisition-system.jpg"
      },
      {
        "slug": "hd32mt-1-programmable-data-logger",
        "title": "HD32MT.1 – Programmable Data Logger",
        "sourceUrl": "https://environmental.senseca.com/product/hd32mt-1-programmable-data-logger/",
        "tagline": "The HD32MT.1 is a data logger capable of capturing and logging the values measured by a series of sensors connected to its inputs.",
        "intro": "The HD32MT.1 is a data logger capable of capturing and logging the values measured by a series of sensors connected to its inputs. The data logger is completely programmable by the user and is therefore very versatile.",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of weather station."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD32MT_manual_ENG.pdf",
        "datasheets": [
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD32MT_manual_ENG.pdf"
          },
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM-HD32MT.1-Programmable-data-logger-datasheet-en.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd32mt-1-programmable-data-logger.jpg"
      },
      {
        "slug": "hd9817t-serie-rh-and-temperature-digital-transmitters-2",
        "title": "HD9817T… Series – RH and Temperature Digital Transmitters",
        "sourceUrl": "https://environmental.senseca.com/product/hd9817t-serie-rh-and-temperature-digital-transmitters-2/",
        "tagline": "Dual relative humidity and temperature transmitter for HVAC applications, environmental monitoring, pharmaceutical storage, food transport, greenhouse automation, etc.",
        "intro": "Dual relative humidity and temperature transmitter for HVAC applications, environmental monitoring, pharmaceutical storage, food transport, greenhouse automation, etc.",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of weather station."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DSH_HD9817T_EN_datasheet.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DSH_HD9817T_EN_datasheet.pdf"
          },
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD9817TVS_manual_ENG.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd9817t-serie-rh-and-temperature-digital-transmitters-2.jpg"
      },
      {
        "slug": "hdmcs-100-all-in-one-meteo-compact-station",
        "title": "HDMCS-100 – All-in-One Meteo Compact Station",
        "sourceUrl": "https://environmental.senseca.com/product/hdmcs-100-all-in-one-meteo-compact-station/",
        "tagline": "HDMCS-100 is a quick to install and easy to use Meteo Compact Station, an All-in-One AWS solution, capable of measuring at the same time: Wind speed Wind direction Temperature Relative Humidity Barometric Pressure Rainfall HDMCS-100 is a self-supporting system complete with solar panel, back up battery and built in GSM.",
        "intro": "HDMCS-100 is a quick to install and easy to use Meteo Compact Station, an All-in-One AWS solution, capable of measuring at the same time: Wind speed Wind direction Temperature Relative Humidity Barometric Pressure Rainfall HDMCS-100 is a self-supporting system complete with solar panel, back up battery and built in GSM.",
        "specifications": [],
        "features": [
          "Wind direction",
          "Temperature",
          "Relative Humidity",
          "Barometric Pressure"
        ],
        "applications": [
          "Monitoring and measurement of weather station."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HDMCS_100_datasheet_ENG.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HDMCS_100_datasheet_ENG.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hdmcs-100-all-in-one-meteo-compact-station.jpg"
      },
      {
        "slug": "hdmcs-200-all-in-one-meteo-compact-station",
        "title": "HDMCS-200 – All-in-One Meteo Compact Station",
        "sourceUrl": "https://environmental.senseca.com/product/hdmcs-200-all-in-one-meteo-compact-station/",
        "tagline": "HDMCS-200 is a quick to install and easy to use Meteo Compact Station, an All-in-One AWS solution, capable of measuring at the same time: Wind speed Wind direction Temperature Relative Humidity Barometric Pressure Solar Radiation HDMCS-200 is a self-supporting system complete with solar panel, back up battery and built in GSM.",
        "intro": "HDMCS-200 is a quick to install and easy to use Meteo Compact Station, an All-in-One AWS solution, capable of measuring at the same time: Wind speed Wind direction Temperature Relative Humidity Barometric Pressure Solar Radiation HDMCS-200 is a self-supporting system complete with solar panel, back up battery and built in GSM.",
        "specifications": [],
        "features": [
          "Wind direction",
          "Temperature",
          "Relative Humidity",
          "Barometric Pressure",
          "Solar Radiation"
        ],
        "applications": [
          "Monitoring and measurement of weather station."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HDMCS_200_datasheet_ENG.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HDMCS_200_datasheet_ENG.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hdmcs-200-all-in-one-meteo-compact-station.jpg"
      },
      {
        "slug": "lpuvi02-serie-uv-index-radiometric-probes",
        "title": "LPUVI02… Series – UV Index Radiometric Probes",
        "sourceUrl": "https://environmental.senseca.com/product/lpuvi02-serie-uv-index-radiometric-probes/",
        "tagline": "The radiometer LPUVI02 measures the global effective irradiance on a flat surface (Watt /m² effective), according to the requirements of the WMO for the measurement of UV-index.",
        "intro": "The radiometer LPUVI02 measures the global effective irradiance on a flat surface (Watt /m² effective), according to the requirements of the WMO for the measurement of UV-index. The global irradiance is the sum of direct sun and of diffuse irradiance .",
        "specifications": [],
        "features": [
          "LPUVI02AV – 0…1 Vdc, 0…5 Vdc or 0…10 Vdc output ( 0…16 UV index ) to be defined when ordering.",
          "LPUVI02.1AV – 0…1V dc, 0…5 Vdc or 0…10 Vdc output ( 0…20 UV index ) to be defined when ordering."
        ],
        "applications": [
          "Monitoring and measurement of weather station."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/dsh_fam_LPUVI02_en_datasheet.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/dsh_fam_LPUVI02_en_datasheet.pdf"
          },
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/MN_LPUVI02_EN_manual.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/lpuvi02-serie-uv-index-radiometric-probes.jpg"
      }
    ]
  },
  {
    "id": "sound-vibration",
    "title": "Sound & Vibration",
    "sourceUrl": "https://environmental.senseca.com/measure/sound-vibration/",
    "products": [
      {
        "slug": "ccp-preamplifiers-and-microphone-sets",
        "title": "CCP Preamplifiers and Microphone Sets",
        "sourceUrl": "https://environmental.senseca.com/product/ccp-preamplifiers-and-microphone-sets/",
        "tagline": "HDMS_CCP… and HDP_CCP… are new lines of preamplifiers and microphone sets with IEPE standardized power supply.",
        "intro": "HDMS_CCP… and HDP_CCP… are new lines of preamplifiers and microphone sets with IEPE standardized power supply. CCP preamplifiers use indeed a standardized 2…20 mA power supply. This makes them compatible with most professional measurement systems and therefore usable with two-wire signal transmission cables with BNC connectors. Available as single probes.",
        "specifications": [],
        "features": [
          "HDMS_CCP with MC21E free-field microphone and 1/2″ CCP preamplifiers. Versions with gain 0 dB or +10 dB.",
          "HDM_CCP_UC with UC52 free-field microphone and 1/2″ CCP preamplifiers. Versions with gain 0 dB or +10 dB.",
          "HDMS_CCP_RI with MC22E random incidence microphone and 1/2″ CCP preamplifiers. Versions with gain 0 dB or +10 dB."
        ],
        "applications": [
          "Monitoring and measurement of sound & vibration."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_CCP_preamplifiers_datasheet_ENG.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_CCP_preamplifiers_datasheet_ENG.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/ccp-preamplifiers-and-microphone-sets.jpg"
      },
      {
        "slug": "hd2010mctc-class-1-sound-level-meter-for-automotive-car-noise-emission-inspection",
        "title": "HD2010MCTC – Sound Level Meter for Automotive – Car Noise Emission Inspection",
        "sourceUrl": "https://environmental.senseca.com/product/hd2010mctc-class-1-sound-level-meter-for-automotive-car-noise-emission-inspection/",
        "tagline": "The level of noise produced by vehicles shall comply with standards prescribed by international regulations.",
        "intro": "The level of noise produced by vehicles shall comply with standards prescribed by international regulations. During car inspections, horns and exhaust devices must be in good condition and comply with the requirements.",
        "specifications": [],
        "features": [
          "Circular 88/95 for light-duty vehicles",
          "Circular 7938/604 for motorcycles",
          "Protocol Circular RU no. 79298 of 11/08/2009 and subsequent amendments and additions"
        ],
        "applications": [
          "Monitoring and measurement of sound & vibration."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2010MCTC_Fonometro_Integratore_Omologato_datasheet_ITA.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2010MCTC_Fonometro_Integratore_Omologato_datasheet_ITA.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd2010mctc-class-1-sound-level-meter-for-automotive-car-noise-emission-inspection.jpg"
      },
      {
        "slug": "hd2010uc-integrating-sound-level-meter",
        "title": "HD2010UC.kit1 – Class 1 Integrating Sound Level Meter",
        "sourceUrl": "https://environmental.senseca.com/product/hd2010uc-integrating-sound-level-meter/",
        "tagline": "The HD2010UC.Kit1 is a Class 1 integrating portable sound level meter performing statistical analyses.",
        "intro": "The HD2010UC.Kit1 is a Class 1 integrating portable sound level meter performing statistical analyses. The instrument has been designed combining price competitiveness and simplicity of use. Attention has been paid to the possibility of updating the instrument, and the HD2010UC can be integrated, at any time, with other options like “Advanced Data Logger” to extend its application scope.",
        "specifications": [],
        "features": [
          "Assessment of the environmental noise level ,",
          "Occupational noise measurements at the workplace (according to ISO9612)",
          "Selection of personal protective equipment,",
          "Production quality control,",
          "Measurement of machine noise .",
          "Environmental noise monitoring,",
          "Analysis of sound events,",
          "Complete statistical analysis with percentiles calculation from L 1 to L 99."
        ],
        "applications": [
          "Monitoring and measurement of sound & vibration."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2010UC_datasheet_ENG.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2010UC_datasheet_ENG.pdf"
          },
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2010UC_manual_ENG.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd2010uc-integrating-sound-level-meter.jpg"
      },
      {
        "slug": "hd2010uc-kit2-class-2-integrating-sound-level-meter",
        "title": "HD2010UC.kit2 – Class 2 Integrating Sound Level Meter",
        "sourceUrl": "https://environmental.senseca.com/product/hd2010uc-kit2-class-2-integrating-sound-level-meter/",
        "tagline": "The HD2010UC.Kit2 is a Class 2 integrating portable sound level meter performing statistical analyses.",
        "intro": "The HD2010UC.Kit2 is a Class 2 integrating portable sound level meter performing statistical analyses. The instrument has been designed combining price competitiveness and simplicity of use. Attention has been paid to the possibility of updating the instrument, and the HD2010UC can be integrated, at any time, with other options like “Advanced Data Logger” to extend its application scope.",
        "specifications": [],
        "features": [
          "Assessment of the environmental noise level ,",
          "Occupational noise measurements at the workplace (according to ISO9612)",
          "Selection of personal protective equipment,",
          "Production quality control,",
          "Measurement of machine noise .",
          "Environmental noise monitoring,",
          "Analysis of sound events,",
          "Complete statistical analysis with percentiles calculation from L 1 to L 99."
        ],
        "applications": [
          "Monitoring and measurement of sound & vibration."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2010UC_datasheet_ENG.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2010UC_datasheet_ENG.pdf"
          },
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2010UC_manual_ENG.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd2010uc-kit2-class-2-integrating-sound-level-meter.jpg"
      },
      {
        "slug": "hd2010uc-a-kit1-class-1-integrating-sound-level-meter-and-analyzer",
        "title": "HD2010UC/A.Kit1 – Class 1 Integrating Sound Level Meter and Analyzer",
        "sourceUrl": "https://environmental.senseca.com/product/hd2010uc-a-kit1-class-1-integrating-sound-level-meter-and-analyzer/",
        "tagline": "HD2010UC/A is a Class 1 integrating portable sound level meter performing either spectral or statistical analysis .",
        "intro": "HD2010UC/A is a Class 1 integrating portable sound level meter performing either spectral or statistical analysis . The instrument has been designed combining maximum usage flexibility, cheapness, and simplicity of use. Attention has been paid to the possibility of adjusting the instrument to regulatory modifications, and to the necessity of meeting its users’ needs of today and tomorrow.",
        "specifications": [],
        "features": [
          "Assessment and monitoring of the environmental noise level ,",
          "Spectral analysis by octave bands from 31.5Hz to 8kHz,",
          "Optional (HD2010.O1) spectral analysis by third octave bands from 25Hz to 12.5kHz,",
          "Statistical analysis with percentile levels calculation from L 1 to L 99",
          "Capture and analysis of sound events ,",
          "Measurement at the workplace ,",
          "Selection of personal protective equipment (SNR, HML and OBM methods),",
          "Soundproofing and acoustic treatment,"
        ],
        "applications": [
          "Monitoring and measurement of sound & vibration."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2010UC_A_datasheet_ENG.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2010UC_A_datasheet_ENG.pdf"
          },
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2010UCA_manual_ENG.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd2010uc-a-kit1-class-1-integrating-sound-level-meter-and-analyzer.jpg"
      },
      {
        "slug": "hd2010uc-a-kit2-class-2-integrating-sound-level-meter-and-analyzer",
        "title": "HD2010UC/A.kit2 – Class 2 Integrating Sound Level Meter and Analyzer",
        "sourceUrl": "https://environmental.senseca.com/product/hd2010uc-a-kit2-class-2-integrating-sound-level-meter-and-analyzer/",
        "tagline": "HD2010UC/A is a Class 2 integrating portable sound level meter performing either spectral or statistical analysis .",
        "intro": "HD2010UC/A is a Class 2 integrating portable sound level meter performing either spectral or statistical analysis . The instrument has been designed combining maximum usage flexibility, cheapness, and simplicity of use. Attention has been paid to the possibility of adjusting the instrument to regulatory modifications, and to the necessity of meeting its users’ needs of today and tomorrow.",
        "specifications": [],
        "features": [
          "Assessment and monitoring of the environmental noise level ,",
          "Spectral analysis by octave bands from 31.5Hz to 8kHz,",
          "Optional (HD2010.O1) spectral analysis by third octave bands from 25Hz to 12.5kHz,",
          "Statistical analysis with percentile levels calculation from L 1 to L 99",
          "Capture and analysis of sound events ,",
          "Measurement at the workplace ,",
          "Selection of personal protective equipment (SNR, HML and OBM methods),",
          "Soundproofing and acoustic treatment,"
        ],
        "applications": [
          "Monitoring and measurement of sound & vibration."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2010UC_A_datasheet_ENG.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2010UC_A_datasheet_ENG.pdf"
          },
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2010UCA_manual_ENG.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd2010uc-a-kit2-class-2-integrating-sound-level-meter-and-analyzer.jpg"
      },
      {
        "slug": "hd2020-class-1-sound-level-calibrator",
        "title": "HD2020 – Class 1 Sound Level Calibrator",
        "sourceUrl": "https://environmental.senseca.com/product/hd2020-class-1-sound-level-calibrator/",
        "tagline": "The HD2020 sound level calibrator is a portable, battery operated sound source, suitable for sound level meters (portable and laboratory) and acoustic stations.",
        "intro": "The HD2020 sound level calibrator is a portable, battery operated sound source, suitable for sound level meters (portable and laboratory) and acoustic stations. It allows calibrating ½” microphones with mechanical dimensions compliant with IEC 61094-1 and IEC 61094-4. The calibration pressure levels of 94dB and 114dB can be selected by the keypad. The 1000 Hz frequency cannot be changed.",
        "specifications": [],
        "features": [
          "The 1000Hz frequency allows calibrating sound level meters with any weighting (LIN, A, B,…), without applying any correction factor.",
          "The calibration sound pressure level is independent of atmospheric pressure : you don’t need to adjust the value according to static pressure over a wide range of values.",
          "The HD2020 calibrator can be conveniently used both in laboratory and in the field . The 114 dB sound level allows performing calibrations even in high background noise environments.",
          "Its simplicity of use allows the use even by unskilled personnel.",
          "The presence of the LCD helps you through the steps of setting the calibrator, signal the end of the span and allows you to check the status of the battery."
        ],
        "applications": [
          "Monitoring and measurement of sound & vibration."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/HD2020-1-class-calibrator-manual-en.pdf",
        "datasheets": [
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/HD2020-1-class-calibrator-manual-en.pdf"
          },
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/dsh_prd_HD2020_en_datasheet.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd2020-class-1-sound-level-calibrator.jpg"
      },
      {
        "slug": "hd2030-k1-4-channel-vibration-analyzer-kit",
        "title": "HD2030.K1 – 4-Channel Vibration Analyzer Kit",
        "sourceUrl": "https://environmental.senseca.com/product/hd2030-k1-4-channel-vibration-analyzer-kit/",
        "tagline": "4-channel vibration analyzer kit for IEPE accelerometers.",
        "intro": "4-channel vibration analyzer kit for IEPE accelerometers. The HD2030 is a portable vibration analyzer able to perform spectral and statistical analysis . The instrument can supply all the measurement parameters required by the current normative concerning the operators protection from the risk connected with the vibrations and is able to measure in hand-arm and whole body modes.",
        "specifications": [],
        "features": [
          "Evaluation of the exposure of operators to the risk connected with the vibrations transmitted to the hand-arm system through vibrating tools or items subjected to vibrations or impacts;",
          "Evaluation of the operator exposure to the risk connected with vibrations transmitted to the whole body also through the use of movement or transportation ways;",
          "Evaluation of the operator exposure to the risk connected with vibrations transmitted to the whole body by buildings subjected to vibrations or impacts;",
          "Octave or third-octave bands spectral analysis;",
          "Statistical analysis with calculation of the percentile levels from L 1 to L 99 ;",
          "Attenuation of vibrations and reclamations."
        ],
        "applications": [
          "Monitoring and measurement of sound & vibration."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM-HD2030-4-channel-vibration-manual-en.pdf",
        "datasheets": [
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM-HD2030-4-channel-vibration-manual-en.pdf"
          },
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM-HD2030-4-channel-vibration-datasheet-en.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd2030-k1-4-channel-vibration-analyzer-kit.jpg"
      },
      {
        "slug": "hd2030msp-iepe-triaxial-whole-body-accelerometer-1000-mv-g",
        "title": "HD2030MSP – IEPE Triaxial Whole Body Accelerometer – 1000 mV/g",
        "sourceUrl": "https://environmental.senseca.com/product/hd2030msp-iepe-triaxial-whole-body-accelerometer-1000-mv-g/",
        "tagline": "HD2030MSP is an accelerometer suitable for the measurement of vibrations transmitted by seats to the occupants of passenger and work vehicles.",
        "intro": "HD2030MSP is an accelerometer suitable for the measurement of vibrations transmitted by seats to the occupants of passenger and work vehicles. The mechanical design is compliant with the requirements of ISO 10326-1. The seat pad consists of a thin circular rubber pad housing a low profile tri-axial accelerometer.",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of sound & vibration."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2030MSP_manual_ENG.pdf",
        "datasheets": [
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2030MSP_manual_ENG.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd2030msp-iepe-triaxial-whole-body-accelerometer-1000-mv-g.jpg"
      },
      {
        "slug": "hd2060-multi-frequency-and-multi-level-portable-vibration-calibrator",
        "title": "HD2060 – Calibrator for Vibration Transducers",
        "sourceUrl": "https://environmental.senseca.com/product/hd2060-multi-frequency-and-multi-level-portable-vibration-calibrator/",
        "tagline": "Optimize your calibration process with the HD2060 mechanical vibration calibrator.",
        "intro": "Optimize your calibration process with the HD2060 mechanical vibration calibrator. Engineered for precision, this device generates controlled mechanical vibrations with amplitude and frequency stability ensured by a quartz mechanism. Coupling a transducer to its vibrating base allows for swift sensitivity checks to acceleration, velocity, or displacement.",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of sound & vibration."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2060_manual_ENG.pdf",
        "datasheets": [
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2060_manual_ENG.pdf"
          },
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2060_datasheet_ENG.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd2060-multi-frequency-and-multi-level-portable-vibration-calibrator.jpg"
      },
      {
        "slug": "hd2070-bv-kit-to-measure-building-vibration",
        "title": "HD2070.BV – Building Vibration Kit",
        "sourceUrl": "https://environmental.senseca.com/product/hd2070-bv-kit-to-measure-building-vibration/",
        "tagline": "Complete kit to measure vibrations in case of building constructions, demolishing, road and railway constructions according to UNI 9614:2017; EN ISO 8041-1:2017; ISO 2631-2:2003; NS8176.E The kit is composed by the following codes: – HD2070.K1 – HDBV-1000 – IEPE tri-axial accelerometer – HD2030.CAB3M-5M – 5 cable for connection – HD2030AC5 – support for accelerometers Types of vibration sources: road and railway traffic, industrial activities and machinery operation, road and construction site activities, explosions, various types of human activities that generate vibrations.",
        "intro": "Complete kit to measure vibrations in case of building constructions, demolishing, road and railway constructions according to UNI 9614:2017; EN ISO 8041-1:2017; ISO 2631-2:2003; NS8176.E The kit is composed by the following codes: – HD2070.K1 – HDBV-1000 – IEPE tri-axial accelerometer – HD2030.CAB3M-5M – 5 cable for connection – HD2030AC5 – support for accelerometers Types of vibration sources: road and railway traffic, industrial activities and machinery operation, road and construction site activities, explosions, various types of human activities that generate vibrations.",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of sound & vibration.",
          "Industrial process and environmental control."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2070BV_datasheet_ENG.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2070BV_datasheet_ENG.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd2070-bv-kit-to-measure-building-vibration.jpg"
      },
      {
        "slug": "hd2070-k1-3-channel-vibration-analyzer",
        "title": "HD2070.K1 – 3-Channel Vibration Analyzer",
        "sourceUrl": "https://environmental.senseca.com/product/hd2070-k1-3-channel-vibration-analyzer/",
        "tagline": "The HD2070 is a portable vibration analyze r able to perform spectral (option HD2070.O1) and statistical analysis (option HD2070.O2).",
        "intro": "The HD2070 is a portable vibration analyze r able to perform spectral (option HD2070.O1) and statistical analysis (option HD2070.O2). The instrument can supply all the measurement parameters required by the current normative concerning the operators protection from the risk connected with the vibrations and is able to measure in hand-arm and whole body modes.",
        "specifications": [],
        "features": [
          "Evaluation of the exposure of operators to the risk connected with the vibrations transmitted to the hand-arm system through vibrating tools or items subjected to vibrations or impacts;",
          "Evaluation of the operator exposure to the risk connected with vibrations transmitted to the whole body also through the use of movement or transportation ways;",
          "Evaluation of the operator exposure to the risk connected with vibrations transmitted to the whole body by buildings subjected to vibrations or impacts;",
          "Octave or third-octave bands spectral analysis (option HD2070.O1);",
          "Statistical analysis with calculation of the percentile levels from L 1 to L 99 (option HD2070.O2);",
          "Attenuation of vibrations and reclamations."
        ],
        "applications": [
          "Monitoring and measurement of sound & vibration."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/dsh_prd_HD2070_en_datasheet.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/dsh_prd_HD2070_en_datasheet.pdf"
          },
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM-HD2070-3-channel-vibration-manual-en.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd2070-k1-3-channel-vibration-analyzer.jpg"
      },
      {
        "slug": "hd2110l-class-1-integrating-sound-level-meter",
        "title": "HD2110L – Class 1 Integrating Sound Level Meter and Advanced Analyzer",
        "sourceUrl": "https://environmental.senseca.com/product/hd2110l-class-1-integrating-sound-level-meter/",
        "tagline": "HD2110L is an handheld integrating sound level meter performing either spectral or statistical analysis.",
        "intro": "HD2110L is an handheld integrating sound level meter performing either spectral or statistical analysis. The instrument is designed to deliver maximum performance in the analysis of acoustic phenomena with particular attention to regulations on environmental noise and building acoustics.",
        "specifications": [],
        "features": [
          "environmental noise levels evaluation,",
          "noise monitoring with noise events capture and analysis,",
          "spectral analysis in octave bands from 16Hz to 16kHz,",
          "complete statistical analysis with percentile levels calculation from L 1 ad L 99",
          "measurement in working environments,",
          "selection of Personal Protective Equipment (methods SNR, HML and OBM),",
          "soundproofing and acoustic reclamation,",
          "production quality control,"
        ],
        "applications": [
          "Monitoring and measurement of sound & vibration."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2110L_datasheet_ENG.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2110L_datasheet_ENG.pdf"
          },
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2110L_manual_ENG.pdf"
          },
          {
            "label": "Overview",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_Sound_Level_Meters_overview_ENG.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd2110l-class-1-integrating-sound-level-meter.jpg"
      },
      {
        "slug": "hd9120-portable-calibration-system",
        "title": "HD9120 – Portable Calibration System",
        "sourceUrl": "https://environmental.senseca.com/product/hd9120-portable-calibration-system/",
        "tagline": "HD9120 is an acoustic calibrator that, in accordance with the Circular Prot.",
        "intro": "HD9120 is an acoustic calibrator that, in accordance with the Circular Prot. RU 34143 of 02 December 2011, allows qualified technicians to perform calibrations of sound level meters for comparison with a reference sound level meter. The instrument is used by the program HD2010MCTC_VP for performing metrological tests on HD2010MCTC sound level meters used for vehicles inspections.",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of sound & vibration."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD9120_Calibratore_Verifica_Fonometri_MCTC_datasheet_ITA.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD9120_Calibratore_Verifica_Fonometri_MCTC_datasheet_ITA.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd9120-portable-calibration-system.jpg"
      },
      {
        "slug": "hdbv-1000-iepe-triaxial-high-sensitivity-accelerometer-10v-g",
        "title": "HDBV-1000 – IEPE Triaxial High Sensitivity Accelerometer 10V/g",
        "sourceUrl": "https://environmental.senseca.com/product/hdbv-1000-iepe-triaxial-high-sensitivity-accelerometer-10v-g/",
        "tagline": "HDBV-1000 is a tri-axial accelerometer for the measurement of human exposure to whole-body vibrations , according to ISO 2631 and ISO 8041.",
        "intro": "HDBV-1000 is a tri-axial accelerometer for the measurement of human exposure to whole-body vibrations , according to ISO 2631 and ISO 8041. Combined with the HD2030AC5 support the HDWBV accelerometer is suitable for the measurement of building vibrations according to ISO 2631-2. The sensor is based on MEMS technology and the IEPE/ICP compatible electrical interface allows a reliable signal transmission.",
        "specifications": [],
        "features": [
          "Sensitivity 10 V/g",
          "Range ±5 m/s² pk",
          "Weight 50 g",
          "Threaded hole for screw 10-32 UNF",
          "Connector M5 4 pin",
          "Residual noise (Wm ISO2631-2) < 1 mm/s²",
          "Measurement of vibrations in buildings for comfort evaluations",
          "Laboratory measurements"
        ],
        "applications": [
          "Monitoring and measurement of sound & vibration."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HDBV1000_datasheet_ENG.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HDBV1000_datasheet_ENG.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hdbv-1000-iepe-triaxial-high-sensitivity-accelerometer-10v-g.jpg"
      },
      {
        "slug": "hdp352c34-iepe-monoaxial-accelerometer-100-mv-g",
        "title": "HDP352C34 – IEPE Monoaxial Accelerometer – 100 mV/g",
        "sourceUrl": "https://environmental.senseca.com/product/hdp352c34-iepe-monoaxial-accelerometer-100-mv-g/",
        "tagline": "General purpose ICP mono-axial accelerometer.",
        "intro": "General purpose ICP mono-axial accelerometer. Sensitivity 100 mV/g Range ±50 g pk Weight 5.8 g 10-32 UNF threaded hole 10-32 connector It includes: 10-32 UNF copper-beryllium alloy mounting screw (081B05); M6 copper-beryllium alloy mounting screw (M081B05); The accelerometer is connected to the left input (mono-axial) of the analyzer through the HD2030CAB1-xxM cable (not included).",
        "specifications": [],
        "features": [
          "Sensitivity 100 mV/g",
          "Range ±50 g pk",
          "Weight 5.8 g",
          "10-32 UNF threaded hole",
          "10-32 connector",
          "10-32 UNF copper-beryllium alloy mounting screw (081B05);",
          "M6 copper-beryllium alloy mounting screw (M081B05);"
        ],
        "applications": [
          "Monitoring and measurement of sound & vibration."
        ],
        "datasheets": [],
        "imageSrc": "/graphics/senseca/hdp352c34-iepe-monoaxial-accelerometer-100-mv-g.jpg"
      },
      {
        "slug": "hdp356a02-iepe-triaxial-accelerometer-10-mv-g",
        "title": "HDP356A02 – IEPE Triaxial Accelerometer – 10 mV/g",
        "sourceUrl": "https://environmental.senseca.com/product/hdp356a02-iepe-triaxial-accelerometer-10-mv-g/",
        "tagline": "ICP tri-axial accelerometer for the measurement of the vibrations transmitted to the hand-arm system .",
        "intro": "ICP tri-axial accelerometer for the measurement of the vibrations transmitted to the hand-arm system .",
        "specifications": [],
        "features": [
          "Sensitivity 10 mV/g",
          "Range ±500 g pk",
          "Weight 10.5 g",
          "10-32 UNF threaded hole ¼-28",
          "4-pin connector",
          "10-32 UNF copper-beryllium alloy mounting screw (081B05);",
          "M6 copper-beryllium alloy mounting screw (M081B05);"
        ],
        "applications": [
          "Monitoring and measurement of sound & vibration."
        ],
        "datasheets": [],
        "imageSrc": "/graphics/senseca/hdp356a02-iepe-triaxial-accelerometer-10-mv-g.jpg"
      },
      {
        "slug": "hdp356b18-iepe-triaxial-accelerometer-1000-mv-g",
        "title": "HDP356B18 – IEPE Triaxial Accelerometer – 1000 mV/g",
        "sourceUrl": "https://environmental.senseca.com/product/hdp356b18-iepe-triaxial-accelerometer-1000-mv-g/",
        "tagline": "High sensitivity ICP tri-axial accelerometer for the measurement of vibrations in buildings .",
        "intro": "High sensitivity ICP tri-axial accelerometer for the measurement of vibrations in buildings .",
        "specifications": [],
        "features": [
          "Sensitivity 1 V/g",
          "Range ±5 g pk",
          "Weight 25 g",
          "10-32 UNF threaded hole ¼-28",
          "4-pin connector",
          "10-32 UNF copper-beryllium alloy mounting screw (081B05);",
          "M6 copper-beryllium alloy mounting screw (M081B05);"
        ],
        "applications": [
          "Monitoring and measurement of sound & vibration."
        ],
        "datasheets": [],
        "imageSrc": "/graphics/senseca/hdp356b18-iepe-triaxial-accelerometer-1000-mv-g.jpg"
      },
      {
        "slug": "hdwbv-100-iepe-triaxial-accelerometer-1000-mv-g",
        "title": "HDWBV-100 – IEPE Triaxial Accelerometer – 1000 mV/g",
        "sourceUrl": "https://environmental.senseca.com/product/hdwbv-100-iepe-triaxial-accelerometer-1000-mv-g/",
        "tagline": "IEPE tri-axial accelerometer for the measurement of vibration transmitted to whole body .",
        "intro": "IEPE tri-axial accelerometer for the measurement of vibration transmitted to whole body . Using the mounting kit (included) the accelerometer can be used in combination with both HD2030PAD seat adapter and HD2030AC5 floor measurement adapter.",
        "specifications": [],
        "features": [
          "Sensitivity 1 V/g",
          "Range ±5 g pk",
          "Weight 50 g",
          "Threaded hole 10-32 UNF",
          "Connector M5 4 pin",
          "Mounting Kit for HD2030PAD and HD2030AC5 ;",
          "Mounting screw 10-32 UNF copper-beryllium alloy (HD6200)."
        ],
        "applications": [
          "Monitoring and measurement of sound & vibration."
        ],
        "datasheets": [],
        "imageSrc": "/graphics/senseca/hdwbv-100-iepe-triaxial-accelerometer-1000-mv-g.jpg"
      },
      {
        "slug": "mc21e-type-1-microphone-free-field-prepolarized",
        "title": "MC21E – Type 1 Microphone – Free Field – Prepolarized",
        "sourceUrl": "https://environmental.senseca.com/product/mc21e-type-1-microphone-free-field-prepolarized/",
        "tagline": "The MC21E is a condenser type microphone, pre-polarised (0V) and with a standard diameter of ½”.",
        "intro": "The MC21E is a condenser type microphone, pre-polarised (0V) and with a standard diameter of ½”. The frequency response, optimised for free field , is flat from 3.2 Hz to 20 kHz. Capsule type WS2F according to IEC61094-4:1995. Supplied with calibration paper. Applications Acoustic measurements with front source Sound pressure level measurements in accuracy class 1 Optimised free-field response Outdoor measurements",
        "specifications": [],
        "features": [
          "Acoustic measurements with front source",
          "Sound pressure level measurements in accuracy class 1",
          "Optimised free-field response",
          "Outdoor measurements"
        ],
        "applications": [
          "Monitoring and measurement of sound & vibration.",
          "Outdoor monitoring deployments."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/MC21E_1_class_microphone_free_field_datasheet_ENG.pdf;",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/MC21E_1_class_microphone_free_field_datasheet_ENG.pdf;"
          }
        ],
        "imageSrc": "/graphics/senseca/mc21e-type-1-microphone-free-field-prepolarized.png"
      },
      {
        "slug": "mc21p-type-1-1-2-microphone-free-field-200v",
        "title": "MC21P – Type 1, 1/2′ Microphone – Free Field – 200V",
        "sourceUrl": "https://environmental.senseca.com/product/mc21p-type-1-1-2-microphone-free-field-200v/",
        "tagline": "200V polarized condenser microphone, sensitivity 50 mV/Pa, optimized for free field measurements over the frequency range 3.15Hz ÷ 20 kHz.",
        "intro": "200V polarized condenser microphone, sensitivity 50 mV/Pa, optimized for free field measurements over the frequency range 3.15Hz ÷ 20 kHz. WS2F type capsule according to IEC61094-4:1995. Supplied with calibration card. Compatible with the preamplifiers HD2110PL.",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of sound & vibration."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/MC21P_1_class_microphone_200V_free_field_datasheet_ENG.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/MC21P_1_class_microphone_200V_free_field_datasheet_ENG.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/mc21p-type-1-1-2-microphone-free-field-200v.jpg"
      },
      {
        "slug": "xpt800-sound-level-meter-frequency-analyser",
        "title": "XPT800 – Sound Level Meter, Advanced Frequency Analyser",
        "sourceUrl": "https://environmental.senseca.com/product/xpt800-sound-level-meter-frequency-analyser/",
        "tagline": "The XPT800 is the high-end model of the Expert Line family : a Class 1 sound level meter and spectrum analyser designed for precision acoustic measurements.",
        "intro": "The XPT800 is the high-end model of the Expert Line family : a Class 1 sound level meter and spectrum analyser designed for precision acoustic measurements. Compact, lightweight, and ergonomically shaped for one-hand operation, it combines versatility and reliability in a robust portable design. CONFIGURE YOUR XPT800 NOW!",
        "specifications": [],
        "features": [
          "Linear range: Linear range of 123 dB for accurate measurements in both quiet and noisy environments. – Measurable peak level up to 140 dB, extendable to 178 dB with a dedicated microphone set for high sound levels",
          "Class 1 precision according to IEC 61672:2013",
          "Scalable platform: can be adapted to the growing requirements of acoustic professionals",
          "Internal memory: 4 GB eMMC or external USB stick",
          "User interface: intuitive touch display and clear graphical presentation of results",
          "Connectivity: data transfer via integrated Wi-Fi, Ethernet, or 4G.",
          "Automated Event Identification : unattended noise monitoring with automatic audio recordings.",
          "Advanced Trigger and Logging Capabilities: Unique logging features and advanced trigger logic with exceedances detection on broad levels and spectrum masks."
        ],
        "applications": [
          "Monitoring and measurement of sound & vibration.",
          "Industrial process and environmental control."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/dsh_prd_xpt800_en_datasheet.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/dsh_prd_xpt800_en_datasheet.pdf"
          },
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/umn_prd_XPT800_en_manual.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/xpt800-sound-level-meter-frequency-analyser.png"
      },
      {
        "slug": "xpt801-sound-level-meter-frequency-analyser",
        "title": "XPT801 – Sound Level Meter, Frequency Analyser",
        "sourceUrl": "https://environmental.senseca.com/product/xpt801-sound-level-meter-frequency-analyser/",
        "tagline": "The XPT801 is the Expert Line model designed to offer the best balance between performance and versatility: a Class 1 sound level meter and spectrum analyser compliant with IEC 61672:2013 , developed for acoustic professionals who demand precision, reliability, and scalability.",
        "intro": "The XPT801 is the Expert Line model designed to offer the best balance between performance and versatility: a Class 1 sound level meter and spectrum analyser compliant with IEC 61672:2013 , developed for acoustic professionals who demand precision, reliability, and scalability.",
        "specifications": [],
        "features": [
          "Linear range: 117 dB for accurate measurements in both quiet and noisy environments – Measurable peak level up to 140 dB, extendable to 178 dB with a dedicated microphone set for high sound levels.",
          "Class 1 precision according to IEC 61672:2013 for high metrological reliability",
          "Scalable platform: designed to adapt to the evolving requirements of acoustic professionals",
          "Internal memory: 4 GB eMMC",
          "User interface: 4.3” color touchscreen, sunlight-readable",
          "Connectivity: data transfer via integrated Wi-Fi, Ethernet, and 4G",
          "Automated event identification: unattended noise monitoring with automatic audio recordings",
          "Advanced trigger and logging capabilities: detailed logs and smart trigger logic with exceedance detection on wide levels and spectrum masks"
        ],
        "applications": [
          "Monitoring and measurement of sound & vibration.",
          "Industrial process and environmental control."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/dsh_prd_XPT801_en_datasheet.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/dsh_prd_XPT801_en_datasheet.pdf"
          },
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/umn_prd_XPT801_en_manual.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/xpt801-sound-level-meter-frequency-analyser.png"
      }
    ]
  },
  {
    "id": "microclimate-thermal-comfort",
    "title": "Microclimate – Thermal Comfort",
    "sourceUrl": "https://environmental.senseca.com/measure/microclimate-thermal-comfort/",
    "products": [
      {
        "slug": "ap3203-omnidirectional-hotwire-probe-2",
        "title": "AP3203 – Omnidirectional Hotwire Probe",
        "sourceUrl": "https://environmental.senseca.com/product/ap3203-omnidirectional-hotwire-probe-2/",
        "tagline": "Omnidirectional hotwire probe for Thermal Comfort Analysis. Measuring range: air speed 0.02 ÷ 5 m/s, temperature 0…+80 °C.",
        "intro": "Omnidirectional hotwire probe for Thermal Comfort Analysis. Measuring range: air speed 0.02 ÷ 5 m/s, temperature 0…+80 °C. Probe stem Ø 8 mm, length 230 mm. Cable length 2 metres. Equipped with SICRAM module.",
        "specifications": [],
        "features": [
          "PMV – Predicted Average Rating",
          "PPD – Dissatisfied percentage",
          "TU – Turbulence",
          "DR – Draught rate"
        ],
        "applications": [
          "Monitoring and measurement of microclimate – thermal comfort."
        ],
        "datasheets": [],
        "imageSrc": "/graphics/senseca/ap3203-omnidirectional-hotwire-probe-2.jpg"
      },
      {
        "slug": "ap3203-2-omnidirectional-hotwire-probe-2",
        "title": "AP3203.2 – Omnidirectional Hotwire Probe",
        "sourceUrl": "https://environmental.senseca.com/product/ap3203-2-omnidirectional-hotwire-probe-2/",
        "tagline": "Omnidirectional hotwire probe for Thermal Comfort Analysis. Measuring range: air speed 0.02 ÷ 5 m/s, temperature 0 ÷ +80 °C.",
        "intro": "Omnidirectional hotwire probe for Thermal Comfort Analysis. Measuring range: air speed 0.02 ÷ 5 m/s, temperature 0 ÷ +80 °C. Probe stem Ø 8 mm, length 230 mm.",
        "specifications": [],
        "features": [
          "PMV – Predicted Average Rating",
          "PPD – Dissatisfied percentage",
          "TU – Turbulence",
          "DR – Draught rate"
        ],
        "applications": [
          "Monitoring and measurement of microclimate – thermal comfort."
        ],
        "datasheets": [],
        "imageSrc": "/graphics/senseca/ap3203-2-omnidirectional-hotwire-probe-2.jpg"
      },
      {
        "slug": "ap3203f-omnidirectional-hotwire-probe-2",
        "title": "AP3203F – Omnidirectional Hotwire Probe",
        "sourceUrl": "https://environmental.senseca.com/product/ap3203f-omnidirectional-hotwire-probe-2/",
        "tagline": "Omnidirectional hotwire probe for Thermal Comfort Analysis in cold environments.",
        "intro": "Omnidirectional hotwire probe for Thermal Comfort Analysis in cold environments. Measuring range: air speed 0.02 ÷ 5 m/s, temperature -30…+30 °C. Probe stem Ø 8 mm, length 230 mm. Cable length 2 metres. Equipped with SICRAM module.",
        "specifications": [],
        "features": [
          "IREQ – Required insulation",
          "DLE – Exposure time limit",
          "RT – Required recovery time",
          "WCI – Wind Chill Index",
          "PMV – Predicted Average Rating",
          "PPD – Dissatisfied percentage",
          "DR – Draught rate"
        ],
        "applications": [
          "Monitoring and measurement of microclimate – thermal comfort."
        ],
        "datasheets": [],
        "imageSrc": "/graphics/senseca/ap3203f-omnidirectional-hotwire-probe-2.jpg"
      },
      {
        "slug": "hd32-1-thermal-microclimate-data-logger-2",
        "title": "HD32.1 – Thermal Microclimate Data Logger",
        "sourceUrl": "https://environmental.senseca.com/product/hd32-1-thermal-microclimate-data-logger-2/",
        "tagline": "The HD32.1 Thermal Microclimate is a data logger multifunction instrument to measure the microclimate in moderate, hot, severe hot, cold environments and the measure of physical quantities.",
        "intro": "The HD32.1 Thermal Microclimate is a data logger multifunction instrument to measure the microclimate in moderate, hot, severe hot, cold environments and the measure of physical quantities. It is provided with 8 inputs for probes equipped with SICRAM module and a back-lighted graphic display.",
        "specifications": [],
        "features": [
          "prog.A – Microclimate Analysis : this program can simultaneously detect: Globe thermometer temperature – Natural ventilation wet bulb temperature – Environment temperature – Atmospheric pressure – Relative humidity – Wind speed. It can also display the local turbulence intensity Tu, for DR (Draught Rating) calculation, WBGT index (Wet Bulb Glob Temperature) with or without solar radiation, WCI index (Wind Chill Index) and average radiation temperature tr.",
          "prog.B – Discomfort Analysis : this program can simultaneously detect: Air temperature at head height (1.7 m for a standing person; 1.1 m for a seated person) – Air temperature at abdomen height (1.1 m for a standing person; 0.6 m for a seated person) – Air temperature at ankle height (0.1 m) – Temperature at floor level – Temperature of the net radiometer – Net radiation – Radiant asymmetry temperature. This program is also used to calculate the local discomfort indexes due to vertical temperature gradients or radiant asymmetry temperature.",
          "prog. C – Physical Quantities : this program can simultaneously detect: Temperature – Relative humidity – Illuminance, luminance, PAR, irradiance – Wind speed – Carbon monoxide concentration CO – Carbon dioxide concentration CO2. By using the operating program C, HD32.1 can simultaneously manage up to six different probes complete with SICRAM module: one or two light probes and a probe for each of the other physical quantities"
        ],
        "applications": [
          "Monitoring and measurement of microclimate – thermal comfort."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD32.1_manual_ENG.pdf",
        "datasheets": [
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD32.1_manual_ENG.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd32-1-thermal-microclimate-data-logger-2.jpg"
      },
      {
        "slug": "hd32-2-wbgt-index-measurement-2",
        "title": "HD32.2 – WBGT Index Measurement",
        "sourceUrl": "https://environmental.senseca.com/product/hd32-2-wbgt-index-measurement-2/",
        "tagline": "HD32.2 is a thermal microclimate data logger to measure WBGT (Wet Bulb Globe thermometer temperature) Index in Hot Environments according to ISO 7726 and ISO 7243.",
        "intro": "HD32.2 is a thermal microclimate data logger to measure WBGT (Wet Bulb Globe thermometer temperature) Index in Hot Environments according to ISO 7726 and ISO 7243. The instrument is provided with three inputs for probes with SICRAM module: the probes have an electric circuit that communicates with the instrument; the sensor calibration data are saved in its permanent memory.",
        "specifications": [],
        "features": [
          "Logging : acquisition and memorization of data inside the instrument. Memory capacity: 64 different logging sections, with the possibility to set the acquisition interval of the samples. You can set the duration of the memorization and, with auto-start function; it’s possible to set the starting and finishing date and the hour of data memorization.",
          "The measurement unit of the temperature visualized sizes: °C, °F, °K.",
          "The system date and hour.",
          "The visualization of the maximum, minimum and medium statistic parameters and their cancellation.",
          "The transfer speed of the data through the serial port RS232.",
          "Globe thermometer temperature Tg.",
          "Wet bulb with natural ventilation temperature Tn.",
          "Ambient temperature T."
        ],
        "applications": [
          "Monitoring and measurement of microclimate – thermal comfort."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD32.2_manual_ENG.pdf",
        "datasheets": [
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD32.2_manual_ENG.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd32-2-wbgt-index-measurement-2.png"
      },
      {
        "slug": "hd32-2a-wbgt-index-measurement",
        "title": "HD32.2A – WBGT Index Measurement",
        "sourceUrl": "https://environmental.senseca.com/product/hd32-2a-wbgt-index-measurement/",
        "tagline": "HD32.2A is a thermal microclimate data logger to measure WBGT (Wet Bulb Globe thermometer temperature) Index in Hot Environments according to ISO 7726 and ISO 7243.",
        "intro": "HD32.2A is a thermal microclimate data logger to measure WBGT (Wet Bulb Globe thermometer temperature) Index in Hot Environments according to ISO 7726 and ISO 7243. Once mounted on its tripod VTRAP32.2A.3A , the instrument is suitable for long period measurements. It is provided with three inputs for probes with cables to be fixed on the dedicated holder HD32.2.7.1.",
        "specifications": [],
        "features": [
          "Logging : acquisition and memorization of data inside the instrument. Memory capacity: 64 different logging sections, with the possibility to set the acquisition interval of the samples. You can set the duration of the memorization and, with auto-start function; it’s possible to set the starting and finishing date and the hour of data memorization.",
          "The measurement unit of the temperature visualized sizes: °C, °F, °K.",
          "The system date and hour.",
          "The visualization of the maximum, minimum and medium statistic parameters and their cancellation.",
          "The transfer speed of the data through the serial port RS232.",
          "Globe thermometer temperature Tg.",
          "Wet bulb with natural ventilation temperature Tn.",
          "Ambient temperature T."
        ],
        "applications": [
          "Monitoring and measurement of microclimate – thermal comfort."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD32.2_manual_ENG.pdf",
        "datasheets": [
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD32.2_manual_ENG.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd32-2a-wbgt-index-measurement.png"
      },
      {
        "slug": "hd32-3-wbgt-pmw-ppd-measurement-2",
        "title": "HD32.3 – Data Logger for WBGT, PMW, PPD Measurement",
        "sourceUrl": "https://environmental.senseca.com/product/hd32-3-wbgt-pmw-ppd-measurement-2/",
        "tagline": "Thermal microclimate to measure the WBGT Index, PMV Index (Predicted Mean Vote) and PPD (Predicted Percentage of Dissatisfied).",
        "intro": "Thermal microclimate to measure the WBGT Index, PMV Index (Predicted Mean Vote) and PPD (Predicted Percentage of Dissatisfied). 3 inputs for probes with SICRAM module, graphic display. It includes DeltaLog 10 software (with analysis of WBGT, PMV and PPD indices). The kit is composed of instrument, four AA 1.5 V batteries, instruction manual. The probes and cables have to be ordered separately.",
        "specifications": [],
        "features": [
          "Dry bulb temperature probes TP3207.2.",
          "Globe temperature probe TP3276.2.",
          "Natural ventilation wet bulb temperature probe HP3201.2.",
          "Relative humidity and temperature combined probe HP3217.2.",
          "Omnidirectional hotwire probe AP3203.2."
        ],
        "applications": [
          "Monitoring and measurement of microclimate – thermal comfort."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD32.3_datasheet_ENG.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD32.3_datasheet_ENG.pdf"
          },
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD32.3_manual_ENG.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd32-3-wbgt-pmw-ppd-measurement-2.jpg"
      },
      {
        "slug": "hd32-3a-wbgt-pmw-ppd-measurement-2",
        "title": "HD32.3A – Data Logger for WBGT, PMW, PPD Measurement",
        "sourceUrl": "https://environmental.senseca.com/product/hd32-3a-wbgt-pmw-ppd-measurement-2/",
        "tagline": "Thermal microclimate to measure the WBGT Index, PMV Index (Predicted Mean Vote) and PPD (Predicted Percentage of Dissatisfied).",
        "intro": "Thermal microclimate to measure the WBGT Index, PMV Index (Predicted Mean Vote) and PPD (Predicted Percentage of Dissatisfied). 3 inputs for probes with SICRAM module, graphic display. It includes DeltaLog 10 software (with analysis of WBGT, PMV and PPD indices). The kit is composed of instrument, four AA 1.5 V batteries, instruction manual. The probes and cables have to be ordered separately.",
        "specifications": [],
        "features": [
          "Dry bulb temperature probes TP3207.",
          "Globe temperature probe TP3275.",
          "Natural ventilation wet bulb temperature probe HP3201 or TP3204S.",
          "Relative humidity and temperature combined probe HP3217R.",
          "Omnidirectional hotwire probe AP3203."
        ],
        "applications": [
          "Monitoring and measurement of microclimate – thermal comfort."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD32.3_datasheet_ENG.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD32.3_datasheet_ENG.pdf"
          },
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD32.3_manual_ENG.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd32-3a-wbgt-pmw-ppd-measurement-2.jpg"
      },
      {
        "slug": "hd32-3tc-thermal-microclimate-pmv-ppd-wbgt",
        "title": "HD32.3TC – HD32.3TCA – Thermal Microclimate PMV-PPD / WBGT",
        "sourceUrl": "https://environmental.senseca.com/product/hd32-3tc-thermal-microclimate-pmv-ppd-wbgt/",
        "tagline": "Thermal microclimate for the measurement of WBGT, PMV (mean predicted vote), PPD (predicted percentage of dissatisfied), DR (draught rate), TU (local turbulence intensity), HI (heat index), UTCI (Universal Thermal Climate Index), TEP (perceived equivalent temperature) indices, CO 2 , PM1.0, PM2.5 and PM10 .",
        "intro": "Thermal microclimate for the measurement of WBGT, PMV (mean predicted vote), PPD (predicted percentage of dissatisfied), DR (draught rate), TU (local turbulence intensity), HI (heat index), UTCI (Universal Thermal Climate Index), TEP (perceived equivalent temperature) indices, CO 2 , PM1.0, PM2.5 and PM10 . Estimation of SARS-CoV-2 decay time on surfaces.",
        "specifications": [],
        "features": [
          "T dry bulb temperature",
          "T nw natural ventilation wet bulb temperature",
          "T g globe thermometer temperature",
          "UR relative humidity",
          "V a air speed",
          "CO 2 carbon dioxide",
          "P atm atmospheric pressure",
          "PM1.0, PM2.5, PM10 particulate matter"
        ],
        "applications": [
          "Monitoring and measurement of microclimate – thermal comfort."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/dsh_prd_HD32.3TC_en_datasheet.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/dsh_prd_HD32.3TC_en_datasheet.pdf"
          },
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/umn_prd_HD32.3TC_en_manual.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd32-3tc-thermal-microclimate-pmv-ppd-wbgt.png"
      },
      {
        "slug": "hd320a2-co-carbon-monoxide-probe",
        "title": "HD320A2 – CO Carbon Monoxide Probe",
        "sourceUrl": "https://environmental.senseca.com/product/hd320a2-co-carbon-monoxide-probe/",
        "tagline": "HD320A2 is a probe to be used with the HD32.1 Thermal Comfort data logger. The probe measures the carbon monoxide concentration in air .",
        "intro": "HD320A2 is a probe to be used with the HD32.1 Thermal Comfort data logger. The probe measures the carbon monoxide concentration in air . Together with the HD320B2 probe, the HD320A2 probe allows analyzing and monitoring the air quality in internal environments and detecting any loss of CO. The sensor for the measurement of CO consists of an electrochemical cell with two electrodes. Measuring range 0 ÷ 500 ppm.",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of microclimate – thermal comfort."
        ],
        "datasheets": [],
        "imageSrc": "/graphics/senseca/hd320a2-co-carbon-monoxide-probe.jpg"
      },
      {
        "slug": "hd320b2-co2-carbon-dioxide-probe",
        "title": "HD320B2 – CO2 Carbon Dioxide Probe",
        "sourceUrl": "https://environmental.senseca.com/product/hd320b2-co2-carbon-dioxide-probe/",
        "tagline": "HD320B2 is a probe to be used with the HD32.1 Thermal Comfort data logger. The probe measures the carbon dioxide concentration in air .",
        "intro": "HD320B2 is a probe to be used with the HD32.1 Thermal Comfort data logger. The probe measures the carbon dioxide concentration in air . It’s indicated for checking and monitoring the indoor air quality. Typical applications are the check of the air quality in all the buildings where there is a crowd of people (schools, hospitals, auditoria, canteens, etc.), in the working places to optimize the comfort.",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of microclimate – thermal comfort."
        ],
        "datasheets": [],
        "imageSrc": "/graphics/senseca/hd320b2-co2-carbon-dioxide-probe.jpg"
      },
      {
        "slug": "hp3201-natural-ventilation-wet-bulb-probe-2",
        "title": "HP3201 – Natural Ventilation Wet Bulb Probe",
        "sourceUrl": "https://environmental.senseca.com/product/hp3201-natural-ventilation-wet-bulb-probe-2/",
        "tagline": "Natural ventilation wet bulb probe. Pt100 sensor. Probe stem Ø 14 mm, length 110 mm. Cable length 2 metres.",
        "intro": "Natural ventilation wet bulb probe. Pt100 sensor. Probe stem Ø 14 mm, length 110 mm. Cable length 2 metres. Equipped with SICRAM module, two spare cotton wicks and 50 cc distilled water. Measuring range +4 °C…+80 °C. Used for measuring WBGT with the data loggers HD32.1 , HD32.2A and HD32.3TCA . On request, 4 fixed points temperature ISO 17025 certificate (VACCREDIA-U9).",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of microclimate – thermal comfort."
        ],
        "datasheets": [],
        "imageSrc": "/graphics/senseca/hp3201-natural-ventilation-wet-bulb-probe-2.jpg"
      },
      {
        "slug": "hp3201-2-natural-ventilation-wet-bulb-probe-2",
        "title": "HP3201.2 – Natural Ventilation Wet Bulb Probe",
        "sourceUrl": "https://environmental.senseca.com/product/hp3201-2-natural-ventilation-wet-bulb-probe-2/",
        "tagline": "Wet bulb probe with natural ventilation. Pt100 sensor. Probe dimensions: stem Ø 14 mm, length 170 mm.",
        "intro": "Wet bulb probe with natural ventilation. Pt100 sensor. Probe dimensions: stem Ø 14 mm, length 170 mm. Equipped with SICRAM module, two spare cotton wicks and 50 cc distilled water.",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of microclimate – thermal comfort."
        ],
        "datasheets": [],
        "imageSrc": "/graphics/senseca/hp3201-2-natural-ventilation-wet-bulb-probe-2.jpg"
      },
      {
        "slug": "hp3217-2r-combined-rh-temperature-probe-for-pmv-and-ppd",
        "title": "HP3217.2R – Combined RH-Temperature Probe for PMV and PPD",
        "sourceUrl": "https://environmental.senseca.com/product/hp3217-2r-combined-rh-temperature-probe-for-pmv-and-ppd/",
        "tagline": "Relative humidity and temperature combined probe. Capacitive RH sensor, Pt100 temperature sensor. Probe stem Ø 14 mm, length 150 mm.",
        "intro": "Relative humidity and temperature combined probe. Capacitive RH sensor, Pt100 temperature sensor. Probe stem Ø 14 mm, length 150 mm. Complete with SICRAM module.",
        "specifications": [],
        "features": [
          "Measuring range: Temperature: -40…100 °C – R.H.: 0…100%",
          "Resolution: 0.1 °C / 0.1 %RH",
          "Accuracy: Temperature: 1/3 DIN – R.H.: ±1.5% (0…90%RH) / ±2% (90…100%RH) @ T=15…35 °C (1.5 + 1.5% measure)% @ T= remaining range",
          "Temperature drift @ 20 °C: 0.02 %RH/°C",
          "Long term stability: 0.1 %RH/year",
          "Connection: 8-pole female DIN45326 connector",
          "Response time T 95 : 15 minutes"
        ],
        "applications": [
          "Monitoring and measurement of microclimate – thermal comfort."
        ],
        "datasheets": [],
        "imageSrc": "/graphics/senseca/hp3217-2r-combined-rh-temperature-probe-for-pmv-and-ppd.jpg"
      },
      {
        "slug": "hp3217dm-double-probe-for-thermal-comfort",
        "title": "HP3217DM – Double Probe for Thermal Comfort",
        "sourceUrl": "https://environmental.senseca.com/product/hp3217dm-double-probe-for-thermal-comfort/",
        "tagline": "Double natural ventilation wet bulb probe and temperature probe (dry bulb) to be used with HD32.1 Thermal Comfrot multifuction data logger.",
        "intro": "Double natural ventilation wet bulb probe and temperature probe (dry bulb) to be used with HD32.1 Thermal Comfrot multifuction data logger. Probe stem Ø 14 mm, length 110 mm. Cable length 2 metres. Equipped with double SICRAM module, spare cotton wick and 50 cc distilled water. Measuring range +4 °C…+80 °C. On request 2 temperature ISO 17025 certificates, one for each probe, at 4 fixed points (VACCREDIA-U9).",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of microclimate – thermal comfort."
        ],
        "datasheets": [],
        "imageSrc": "/graphics/senseca/hp3217dm-double-probe-for-thermal-comfort.jpg"
      },
      {
        "slug": "hp3217r-combined-rh-and-temperature-probe-2",
        "title": "HP3217R – Combined RH and Temperature probe",
        "sourceUrl": "https://environmental.senseca.com/product/hp3217r-combined-rh-and-temperature-probe-2/",
        "tagline": "Combined temperature and relative humidity probe. Capacitive RH sensor, Pt100 temperature sensor. Probe stem Ø 14 mm, length 110 mm.",
        "intro": "Combined temperature and relative humidity probe. Capacitive RH sensor, Pt100 temperature sensor. Probe stem Ø 14 mm, length 110 mm. Cable length 2 metres. Equipped with SICRAM module.",
        "specifications": [],
        "features": [
          "Measuring range: Temperature: -40…100 °C – R.H.: 0…100%",
          "Resolution: 0.1 °C / 0.1 %RH",
          "Accuracy: Temperature: 1/3 DIN – R.H.: ±1.5% (0…90%RH) / ±2% (90…100%RH) @ T=15…35 °C (1.5 + 1.5% measure)% @ T= remaining range",
          "Temperature drift @ 20 °C: 0.02 %RH/°C",
          "Long term stability: 0.1 %RH/year",
          "Connection: 8-pole female DIN45326 connector",
          "Response time T 95 : 15 minutes",
          "IREQ – Required insulation"
        ],
        "applications": [
          "Monitoring and measurement of microclimate – thermal comfort."
        ],
        "datasheets": [],
        "imageSrc": "/graphics/senseca/hp3217r-combined-rh-and-temperature-probe-2.jpg"
      },
      {
        "slug": "tp3207-dry-bulb-temperature-probe-for-wbgt",
        "title": "TP3207 – Dry Bulb Temperature Probe for WBGT",
        "sourceUrl": "https://environmental.senseca.com/product/tp3207-dry-bulb-temperature-probe-for-wbgt/",
        "tagline": "Pt100 sensor temperature probe. Probe stem Ø 14 mm, length 140 mm. Cable length 2 metres. Equipped with SICRAM module.",
        "intro": "Pt100 sensor temperature probe. Probe stem Ø 14 mm, length 140 mm. Cable length 2 metres. Equipped with SICRAM module. Measuring range -40 °C…+100 °C. Uncertainty +/- 0.15 °C in the range -30 °C …+100 °C. Response time 10” at constant temperature. Used for calculating the following indices: IREQ,WCI, DLE, RT, PMV, PPD, WBGT, SR. Used for calculating Mean radiant temperature.",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of microclimate – thermal comfort."
        ],
        "datasheets": [],
        "imageSrc": "/graphics/senseca/tp3207-dry-bulb-temperature-probe-for-wbgt.jpg"
      },
      {
        "slug": "tp3207-2-dry-bulb-temperature-probe-for-wbgt",
        "title": "TP3207.2 – Dry Bulb Temperature Probe for WBGT",
        "sourceUrl": "https://environmental.senseca.com/product/tp3207-2-dry-bulb-temperature-probe-for-wbgt/",
        "tagline": "Pt100 sensor temperature probe. Probe stem Ø 14 mm, length 150 mm. Equipped with SICRAM module. Measuring range -40 °C…+100 °C.",
        "intro": "Pt100 sensor temperature probe. Probe stem Ø 14 mm, length 150 mm. Equipped with SICRAM module. Measuring range -40 °C…+100 °C. Uncertainty +/- 0.15 °C in the range -30 °C …+100 °C. Response time 10” at constant temperature. Used for calculating the following indices: IREQ,WCI, DLE, RT, PMV, PPD, WBGT, SR. Used for calculating Mean radiant temperature. The probe is suitable to be used with HD32.2 and HD32.3TC .",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of microclimate – thermal comfort."
        ],
        "datasheets": [],
        "imageSrc": "/graphics/senseca/tp3207-2-dry-bulb-temperature-probe-for-wbgt.jpg"
      },
      {
        "slug": "tp3207p-floor-temperature-probe-2",
        "title": "TP3207P – Floor Temperature Probe",
        "sourceUrl": "https://environmental.senseca.com/product/tp3207p-floor-temperature-probe-2/",
        "tagline": "Temperature probe, Pt100 sensor, for measuring floor temperature (diameter Ø 70 mm, height 30 mm). Cable length 2 metres.",
        "intro": "Temperature probe, Pt100 sensor, for measuring floor temperature (diameter Ø 70 mm, height 30 mm). Cable length 2 metres. Equipped with SICRAM module. Measuring range -10 °C…+100 °C. The probe is used with the HD32.1 Thermal Comfort data logger for the evaluation of dissatisfied people due to radiant asymmetry. On request, 4 fixed points temperature ISO 17025 certificate (VACCREDIA-U9).",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of microclimate – thermal comfort."
        ],
        "datasheets": [],
        "imageSrc": "/graphics/senseca/tp3207p-floor-temperature-probe-2.jpg"
      },
      {
        "slug": "tp3207tr-radiant-temperature-probe-2",
        "title": "TP3207TR – Radiant Temperature Probe",
        "sourceUrl": "https://environmental.senseca.com/product/tp3207tr-radiant-temperature-probe-2/",
        "tagline": "Probe for measuring radiant temperature . Probe stem Ø 16 mm, length 250 mm. Cable length 2 metres. Equipped with SICRAM module.",
        "intro": "Probe for measuring radiant temperature . Probe stem Ø 16 mm, length 250 mm. Cable length 2 metres. Equipped with SICRAM module. Measuring range 0 °C…+60 °C. The probe is used in combination with the thermal microclimate data logger HD32.1 for the evaluation of dissatisfied people due to radiant asymmetry. On request, LPNET07 ISO calibration report (VCERT-L26).",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of microclimate – thermal comfort."
        ],
        "datasheets": [],
        "imageSrc": "/graphics/senseca/tp3207tr-radiant-temperature-probe-2.jpg"
      },
      {
        "slug": "tp3227k-local-discomfort-temperature-probe",
        "title": "TP3227K – Local Discomfort Temperature Probe",
        "sourceUrl": "https://environmental.senseca.com/product/tp3227k-local-discomfort-temperature-probe/",
        "tagline": "Temperature probe composed of 2 independent probes, Pt100 sensor. Stem diameter Ø 14 mm, length 500 mm. Cable length 2 metres.",
        "intro": "Temperature probe composed of 2 independent probes, Pt100 sensor. Stem diameter Ø 14 mm, length 500 mm. Cable length 2 metres. Equipped with double SICRAM module and extension shaft Ø 14 mm, length 450 mm TP3227.2. Measuring range -10 °C…+100 °C. The probe is used for measuring local discomfort due to vertical thermal gradient with the HD32.1 Thermal Comfort data logger.",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of microclimate – thermal comfort."
        ],
        "datasheets": [],
        "imageSrc": "/graphics/senseca/tp3227k-local-discomfort-temperature-probe.jpg"
      },
      {
        "slug": "tp3227pc-local-discomfort-temperature-probe",
        "title": "TP3227PC – Local Discomfort Temperature Probe",
        "sourceUrl": "https://environmental.senseca.com/product/tp3227pc-local-discomfort-temperature-probe/",
        "tagline": "Temperature probe composed of 2 independent probes, Pt100 sensor, one for measuring floor temperature (diameter Ø 70 mm, height 30 mm), the other for measuring temperature at the height of the ankles (diameter Ø 3 mm, height 100 mm).",
        "intro": "Temperature probe composed of 2 independent probes, Pt100 sensor, one for measuring floor temperature (diameter Ø 70 mm, height 30 mm), the other for measuring temperature at the height of the ankles (diameter Ø 3 mm, height 100 mm). Cable length 2 metres. Equipped with double SICRAM module. Measuring range -10 °C…+100 °C.",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of microclimate – thermal comfort."
        ],
        "datasheets": [],
        "imageSrc": "/graphics/senseca/tp3227pc-local-discomfort-temperature-probe.jpg"
      },
      {
        "slug": "tp3275-globe-temperature-probe-2",
        "title": "TP3275 – Globe Temperature Probe",
        "sourceUrl": "https://environmental.senseca.com/product/tp3275-globe-temperature-probe-2/",
        "tagline": "Globe temperature probe, Pt100 sensor, globe Ø 150 mm. Stem Ø 14 mm, length 110 mm. Cable length 2 metres. Equipped with SICRAM module.",
        "intro": "Globe temperature probe, Pt100 sensor, globe Ø 150 mm. Stem Ø 14 mm, length 110 mm. Cable length 2 metres. Equipped with SICRAM module. Measuring range -30…+120 °C. Used for measuring Mean radiant temperature, WBGT with HD32.1 , HD32.2A and HD32.3TCA Thermal Comfort data loggers. Available as well only spare globe TP875S.",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of microclimate – thermal comfort."
        ],
        "datasheets": [],
        "imageSrc": "/graphics/senseca/tp3275-globe-temperature-probe-2.jpg"
      },
      {
        "slug": "tp3276-globe-temperature-probe-3",
        "title": "TP3276 – Globe Temperature Probe",
        "sourceUrl": "https://environmental.senseca.com/product/tp3276-globe-temperature-probe-3/",
        "tagline": "Globe temperature probe, Pt100 sensor with globe Ø 50 mm. Stem Ø 8 mm, length 110 mm. Cable length 2 metres. Equipped with SICRAM module.",
        "intro": "Globe temperature probe, Pt100 sensor with globe Ø 50 mm. Stem Ø 8 mm, length 110 mm. Cable length 2 metres. Equipped with SICRAM module. Measuring range -30 °C…+120 °C. With the Thermal Comfort data logger HD32.1, the probe is used for the measurement of following indexes: Mean radiant temperature : in combination with Air temperature probe and hot-wire probe for wind speed.",
        "specifications": [],
        "features": [
          "Mean radiant temperature : in combination with Air temperature probe and hot-wire probe for wind speed.",
          "WBGT: in combination with natural ventilation wet bulb temperature probe and dry bulb temperature probe."
        ],
        "applications": [
          "Monitoring and measurement of microclimate – thermal comfort."
        ],
        "datasheets": [],
        "imageSrc": "/graphics/senseca/tp3276-globe-temperature-probe-3.jpg"
      }
    ]
  },
  {
    "id": "pressure",
    "title": "Pressure",
    "sourceUrl": "https://environmental.senseca.com/measure/pressure/",
    "products": [
      {
        "slug": "barosense-m-barometric-pressure-transmitter",
        "title": "BAROsense – Barometric Pressure Transmitters",
        "sourceUrl": "https://environmental.senseca.com/product/barosense-m-barometric-pressure-transmitter/",
        "tagline": "Please note that this product has been discontinued.",
        "intro": "Please note that this product has been discontinued. Kindly refer to: PBS83M… series for barometric transmitters with digital output PBS860… and PBS880… for barometric transmitters with analog output .",
        "specifications": [],
        "features": [
          "PBS83M… series for barometric transmitters with digital output",
          "PBS860… and PBS880… for barometric transmitters with analog output ."
        ],
        "applications": [
          "Monitoring and measurement of pressure."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_BAROsense_datasheet_ENG.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_BAROsense_datasheet_ENG.pdf"
          },
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_BAROsense_manual_ENG.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/barosense-m-barometric-pressure-transmitter.jpg"
      },
      {
        "slug": "hd2114-0-pressure-micromanometer-thermometer",
        "title": "HD2114.0 – Micromanometer-Thermometer – 20 mbar",
        "sourceUrl": "https://environmental.senseca.com/product/hd2114-0-pressure-micromanometer-thermometer/",
        "tagline": "Portable pressure micromanometer thermometer with 20 mbar built-in sensor.",
        "intro": "Portable pressure micromanometer thermometer with 20 mbar built-in sensor. It measures absolute, relative and differential pressure, as well as temperature. Pressure is measured using an internal module which is differential with respect to the atmosphere with fixed full scale. With the PP471 module acting as an interface, the instrument can use all the TP704 and TP705 probes series to perform the measurements.",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of pressure."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2114_34_64_14B.0_2_manual_ENG.pdf",
        "datasheets": [
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2114_34_64_14B.0_2_manual_ENG.pdf"
          },
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2114_34_64_14B.0_2_datasheet_ENG.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd2114-0-pressure-micromanometer-thermometer.jpg"
      },
      {
        "slug": "hd2114-2-pressure-micromanometer-thermometer-data-logger",
        "title": "HD2114.2 – Pressure Micromanometer – Thermometer Data Logger",
        "sourceUrl": "https://environmental.senseca.com/product/hd2114-2-pressure-micromanometer-thermometer-data-logger/",
        "tagline": "Portable Micromanometer-Thermometer data logger with 20mbar built-in sensor.",
        "intro": "Portable Micromanometer-Thermometer data logger with 20mbar built-in sensor. It performs measure of absolute, relative, differential pressure and temperature. In order to measure the pressure you use the electronic module PP471 that works as an interface between the instrument and Senseca probes series TP704 and TP705.",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of pressure."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2114_34_64_14B.0_2_manual_ENG.pdf",
        "datasheets": [
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2114_34_64_14B.0_2_manual_ENG.pdf"
          },
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2114_34_64_14B.0_2_datasheet_ENG.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd2114-2-pressure-micromanometer-thermometer-data-logger.jpg"
      },
      {
        "slug": "hd2124-1-manometer-thermometer-with-2-inputs",
        "title": "HD2124.1 – Manometer – Thermometer – 2 Inputs",
        "sourceUrl": "https://environmental.senseca.com/product/hd2124-1-manometer-thermometer-with-2-inputs/",
        "tagline": "Handheld manometer-thermometer with two inputs and LCD display.",
        "intro": "Handheld manometer-thermometer with two inputs and LCD display. It performs measure of absolute, relative, differential pressure and temperature . In order to measure the pressure you use the electronic module PP471 that works as an interface between the instrument and Senseca probes series TP704 and TP705 .",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of pressure."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/HD2124.1_2-manometer-thermometer-manual-en.pdf",
        "datasheets": [
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/HD2124.1_2-manometer-thermometer-manual-en.pdf"
          },
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2124.1_2-manometer-thermometer-datasheet-en.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd2124-1-manometer-thermometer-with-2-inputs.jpg"
      },
      {
        "slug": "hd2124-2-manometer-thermometer-with-2-inputs-data-logger",
        "title": "HD2124.2 – Manometer – Thermometer Data Logger – 2 Inputs",
        "sourceUrl": "https://environmental.senseca.com/product/hd2124-2-manometer-thermometer-with-2-inputs-data-logger/",
        "tagline": "Handheld manometer-thermometer data logger with two inputs and LCD display.",
        "intro": "Handheld manometer-thermometer data logger with two inputs and LCD display. It performs measure of absolute, relative, differential pressure and temperature. In order to measure the pressure you use the electronic module PP471 that works as an interface between the instrument and Senseca probes series TP704 and TP705.",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of pressure."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/HD2124.1_2-manometer-thermometer-manual-en.pdf",
        "datasheets": [
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/HD2124.1_2-manometer-thermometer-manual-en.pdf"
          },
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/HD2124.1_2-manometer-thermometer-datasheet-en.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd2124-2-manometer-thermometer-with-2-inputs-data-logger.jpg"
      },
      {
        "slug": "hd2134-0-pressure-micromanometer-thermometer",
        "title": "HD2134.0 – Micromanometer-Thermometer – 200 mbar f.s.",
        "sourceUrl": "https://environmental.senseca.com/product/hd2134-0-pressure-micromanometer-thermometer/",
        "tagline": "Portable pressure micromanometer thermometer with 200 mbar built-in sensor .",
        "intro": "Portable pressure micromanometer thermometer with 200 mbar built-in sensor . It measures absolute, relative and differential pressure, as well as temperature . Pressure is measured using an internal module which is differential with respect to the atmosphere with fixed full scale.",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of pressure."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2114_34_64_14B.0_2_manual_ENG.pdf",
        "datasheets": [
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2114_34_64_14B.0_2_manual_ENG.pdf"
          },
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2114_34_64_14B.0_2_datasheet_ENG.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd2134-0-pressure-micromanometer-thermometer.jpg"
      },
      {
        "slug": "hd2134-2-pressure-micromanometer-thermometer-data-logger",
        "title": "HD2134.2 – Micromanometer – Thermometer – Data Logger – 200 mbar f.s.",
        "sourceUrl": "https://environmental.senseca.com/product/hd2134-2-pressure-micromanometer-thermometer-data-logger/",
        "tagline": "Portable Micromanometer-Thermometer Data Logger with 200 mbar built-in sensor .",
        "intro": "Portable Micromanometer-Thermometer Data Logger with 200 mbar built-in sensor . It performs measure of absolute, relative, differential pressure and temperature. In order to measure the pressure you use the electronic module PP471 that works as an interface between the instrument and Senseca probes series TP704 and TP705.",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of pressure."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2114_34_64_14B.0_2_manual_ENG.pdf",
        "datasheets": [
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2114_34_64_14B.0_2_manual_ENG.pdf"
          },
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2114_34_64_14B.0_2_datasheet_ENG.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd2134-2-pressure-micromanometer-thermometer-data-logger.jpg"
      },
      {
        "slug": "hd2134-2-pressure-micromanometer-thermometer-data-logger-2",
        "title": "HD2164.2 – Pressure Micromanometer – Thermometer Data Logger",
        "sourceUrl": "https://environmental.senseca.com/product/hd2134-2-pressure-micromanometer-thermometer-data-logger-2/",
        "tagline": "Portable Micromanometer-Thermometer data logger with 2000 mbar built-in sensor .",
        "intro": "Portable Micromanometer-Thermometer data logger with 2000 mbar built-in sensor . It performs measure of absolute, relative, differential pressure and temperature. In order to measure the pressure you use the electronic module PP471 that works as an interface between the instrument and Senseca probes series TP704 and TP705.",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of pressure."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2114_34_64_14B.0_2_manual_ENG.pdf",
        "datasheets": [
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2114_34_64_14B.0_2_manual_ENG.pdf"
          },
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2114_34_64_14B.0_2_datasheet_ENG.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd2134-2-pressure-micromanometer-thermometer-data-logger-2.jpg"
      },
      {
        "slug": "hd21abe17-indoor-air-quality-measurement",
        "title": "HD21ABE17 – Indoor Air Quality Measurement",
        "sourceUrl": "https://environmental.senseca.com/product/hd21abe17-indoor-air-quality-measurement/",
        "tagline": "Data logger for Indoor Air Quality (IAQ) analysis.",
        "intro": "Data logger for Indoor Air Quality (IAQ) analysis. The instruments simultaneously measure the parameters: Carbon Dioxide CO 2 Carbon Monoxide CO Atmospheric Pressure Temperature Relative Humidity The instrument calculates: Dew Point Wet Bulb Temperature Absolute Humidity Mixing Ratio Enthalpy The HD21ABE is a datalogger with a memory capacity of 67600 recordings, divided in 64 blocks. It uses the DeltaLog10 software.",
        "specifications": [],
        "features": [
          "Carbon Dioxide CO 2",
          "Carbon Monoxide CO",
          "Atmospheric Pressure",
          "Temperature",
          "Relative Humidity",
          "Wet Bulb Temperature",
          "Absolute Humidity",
          "Mixing Ratio"
        ],
        "applications": [
          "Monitoring and measurement of pressure."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD21ABE17_manual_ENG.pdf",
        "datasheets": [
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD21ABE17_manual_ENG.pdf"
          },
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD21ABE17_datasheet_ENG.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd21abe17-indoor-air-quality-measurement.jpg"
      },
      {
        "slug": "hd2304-0-manometer-thermometer-2",
        "title": "HD2304.0 – Manometer-Thermometer",
        "sourceUrl": "https://environmental.senseca.com/product/hd2304-0-manometer-thermometer-2/",
        "tagline": "Handheld manometer-thermometer with LCD display. It performs measurements of absolute, relative and differential pressure, and temperature.",
        "intro": "Handheld manometer-thermometer with LCD display. It performs measurements of absolute, relative and differential pressure, and temperature. It has one input for SICRAM module PP471 to connect probes TP704 and TP705 series : the PP471 electronic module is used to measure the pressure and works as an interface between the instrument and the probes.",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of pressure."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM-HD2304.0-manometer-thermometer-datasheet-en.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM-HD2304.0-manometer-thermometer-datasheet-en.pdf"
          },
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2304.0_manual_ENG.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd2304-0-manometer-thermometer-2.jpg"
      },
      {
        "slug": "hd3114b-precision-barometer",
        "title": "HD3114B - Precision Barometer",
        "sourceUrl": "https://environmental.senseca.com/product/hd3114b-precision-barometer/",
        "tagline": "Temperature, humidity and pressure handheld data logger with color graphic LCD display. Built-in precision barometric sensor.",
        "intro": "Temperature, humidity and pressure handheld data logger with color graphic LCD display. Built-in precision barometric sensor. Measuring range 0…1350 hPa. Accuracy ± 0.1 hPa @ 23 °C between 500 and 1200 hPa. One input for Pt100 temperature probes, combined temperature and relative humidity probes, TP704/TP705 pressure probes with PP471 module. Direct logging on SD memory card.",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of pressure."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/dsh_prd_HD3114B_en_datasheet.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/dsh_prd_HD3114B_en_datasheet.pdf"
          },
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/umn_prd_HD3114B_en_manual.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd3114b-precision-barometer.png"
      },
      {
        "slug": "hd402t-hd402st-series-low-pressure-transmitters",
        "title": "HD402… Series – Low Pressure Transmitters",
        "sourceUrl": "https://environmental.senseca.com/product/hd402t-hd402st-series-low-pressure-transmitters/",
        "tagline": "The presence of very pure air, i.e. with a very low content of microparticles of suspended dust, is in some fields mandatory.",
        "intro": "The presence of very pure air, i.e. with a very low content of microparticles of suspended dust, is in some fields mandatory. In the industrial and scientific research and microelectronics industry in general, in the field of bottling and food and moreover in the pharmaceutical field, cleanrooms are used to always ensure a controlled atmosphere.",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of pressure.",
          "Industrial process and environmental control."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/dsh_fam_HD402_en_datasheet.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/dsh_fam_HD402_en_datasheet.pdf"
          },
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/umn_fam_HD402_en_manual.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd402t-hd402st-series-low-pressure-transmitters.png"
      },
      {
        "slug": "hd404t-hd404st-series-low-pressure-transmitters-2",
        "title": "HD404T / HD404ST Series – Low Pressure Transmitters",
        "sourceUrl": "https://environmental.senseca.com/product/hd404t-hd404st-series-low-pressure-transmitters-2/",
        "tagline": "The series of HD404T transmitters is able to measure relative pressures with reference to the atmosphere or differential in the range: from 50 to 1000 Pa (from 0.2” H2O to 4” H2O) for the versions with analog output ; 250 Pa / 1000 Pa / 100 mbar for the versions with RS485 Modbus‑RTU output .",
        "intro": "The series of HD404T transmitters is able to measure relative pressures with reference to the atmosphere or differential in the range: from 50 to 1000 Pa (from 0.2” H2O to 4” H2O) for the versions with analog output ; 250 Pa / 1000 Pa / 100 mbar for the versions with RS485 Modbus‑RTU output .",
        "specifications": [],
        "features": [
          "from 50 to 1000 Pa (from 0.2” H2O to 4” H2O) for the versions with analog output ;",
          "250 Pa / 1000 Pa / 100 mbar for the versions with RS485 Modbus‑RTU output ."
        ],
        "applications": [
          "Monitoring and measurement of pressure."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/dsh_fam_HD404_en_datasheet.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/dsh_fam_HD404_en_datasheet.pdf"
          },
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/umn_fam_HD404_en_manual.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd404t-hd404st-series-low-pressure-transmitters-2.png"
      },
      {
        "slug": "hd588-analog-interface-module-2",
        "title": "HD588 – Analog Interface Module",
        "sourceUrl": "https://environmental.senseca.com/product/hd588-analog-interface-module-2/",
        "tagline": "Please note that this product has been discontinued. In the download section, manual and datasheet are still available.",
        "intro": "Please note that this product has been discontinued. In the download section, manual and datasheet are still available.",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of pressure."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM-HD588-analog-interface-datasheet-en.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM-HD588-analog-interface-datasheet-en.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd588-analog-interface-module-2.jpg"
      },
      {
        "slug": "hd9022-microprocessor-panel-indicator-and-regulator-2",
        "title": "HD9022 – Microprocessor Panel Indicator and Regulator",
        "sourceUrl": "https://environmental.senseca.com/product/hd9022-microprocessor-panel-indicator-and-regulator-2/",
        "tagline": "Please note that this product has been discontinued. In the download section, manual and datasheet are still available.",
        "intro": "Please note that this product has been discontinued. In the download section, manual and datasheet are still available.",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of pressure."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM-HD9022-Configurable-Microprocessor-Indicator-Regulator-Datasheet-en.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM-HD9022-Configurable-Microprocessor-Indicator-Regulator-Datasheet-en.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd9022-microprocessor-panel-indicator-and-regulator-2.jpg"
      },
      {
        "slug": "hd9408t-serie-meteo-barometric-transmitter-2",
        "title": "HD9408T… Series – Meteo Barometric Transmitter",
        "sourceUrl": "https://environmental.senseca.com/product/hd9408t-serie-meteo-barometric-transmitter-2/",
        "tagline": "Please note that this product has been discontinued.",
        "intro": "Please note that this product has been discontinued. Kindly refer to: PBS83M… series for barometric transmitters with digital output PBS860… and PBS880… for barometric transmitters with analog output .",
        "specifications": [],
        "features": [
          "PBS83M… series for barometric transmitters with digital output",
          "PBS860… and PBS880… for barometric transmitters with analog output ."
        ],
        "applications": [
          "Monitoring and measurement of pressure."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD9408T_datasheet_ENG.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD9408T_datasheet_ENG.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd9408t-serie-meteo-barometric-transmitter-2.jpg"
      },
      {
        "slug": "hd9908t-serie-barometric-transmitter-with-display-2",
        "title": "HD9908T… Series – Barometric Transmitter with Display",
        "sourceUrl": "https://environmental.senseca.com/product/hd9908t-serie-barometric-transmitter-with-display-2/",
        "tagline": "Please note that this product has been discontinued. Kindly refer to its replacement BAROsense .",
        "intro": "Please note that this product has been discontinued. Kindly refer to its replacement BAROsense .",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of pressure."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD9408T_HD9908T_datasheet_ENG.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD9408T_HD9908T_datasheet_ENG.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd9908t-serie-barometric-transmitter-with-display-2.jpg"
      },
      {
        "slug": "pbs83m-digital-output-barometric-transmitters",
        "title": "PBS83M – Digital Output Barometric Transmitters",
        "sourceUrl": "https://environmental.senseca.com/product/pbs83m-digital-output-barometric-transmitters/",
        "tagline": "PBS83M… is a series of barometric transmitters belonging to the BAROsense family.",
        "intro": "PBS83M… is a series of barometric transmitters belonging to the BAROsense family. It is equipped with a precision piezo-resistive pressure sensor with integrated temperature senso r. The pressure and temperature measurements are digitally processed to obtain a pressure output value compensated over the whole transmitter temperature operating range.",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of pressure.",
          "Outdoor monitoring deployments."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DSH_PBS83_EN_datasheet.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DSH_PBS83_EN_datasheet.pdf"
          },
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/umn_fam_PBS83M_en_manual.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/pbs83m-digital-output-barometric-transmitters.png"
      },
      {
        "slug": "pbs860-pbs880-analog-ouput-barometric-transmitters",
        "title": "PBS860 / PBS880 – Analog Ouput Barometric Transmitters",
        "sourceUrl": "https://environmental.senseca.com/product/pbs860-pbs880-analog-ouput-barometric-transmitters/",
        "tagline": "PBS860… and PBS880… are barometric transmitters equipped with a precision temperature-compensated piezo-resistive pressure sensor .",
        "intro": "PBS860… and PBS880… are barometric transmitters equipped with a precision temperature-compensated piezo-resistive pressure sensor . They differ in the measuring range: 600…1100 hPa for PBS860; 800…1100 hPa for PBS880 .",
        "specifications": [],
        "features": [
          "600…1100 hPa for PBS860;",
          "800…1100 hPa for PBS880 ."
        ],
        "applications": [
          "Monitoring and measurement of pressure."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DSH_PBS86_PBS88_EN_datasheet.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DSH_PBS86_PBS88_EN_datasheet.pdf"
          },
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/MN_PBS860_880_EN_manual.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/pbs860-pbs880-analog-ouput-barometric-transmitters.png"
      }
    ]
  },
  {
    "id": "temperature",
    "title": "Temperature",
    "sourceUrl": "https://environmental.senseca.com/measure/temperature/",
    "products": [
      {
        "slug": "envirosense-temperature-rh-and-barometric-pressure-transmitters",
        "title": "ENVIROsense – Temperature, RH and Barometric Pressure Transmitters",
        "sourceUrl": "https://environmental.senseca.com/product/envirosense-temperature-rh-and-barometric-pressure-transmitters/",
        "tagline": "ENVIROsense is our new environmental temperature, relative humidity and, optionally, barometric pressure transmitter series with standard RS485 Modbus-RTU output.",
        "intro": "ENVIROsense is our new environmental temperature, relative humidity and, optionally, barometric pressure transmitter series with standard RS485 Modbus-RTU output. Different versions are available to fully match the specific requirements of different applications: Meteorology/Renewable energie s: sensor with conformal coating for protection against condensation, contaminants, and salt.",
        "specifications": [],
        "features": [
          "Meteorology/Renewable energie s: sensor with conformal coating for protection against condensation, contaminants, and salt.",
          "HVAC/Indoor : cost-efficient for general indoor use.",
          "Clean Rooms/High performance : for indoor environments when high reliability and robustness are key factors."
        ],
        "applications": [
          "Monitoring and measurement of temperature."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/dsh_fam_ETSxxM_en_datasheet.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/dsh_fam_ETSxxM_en_datasheet.pdf"
          },
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/umn_fam_ETSxxM_en_manual.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/envirosense-temperature-rh-and-barometric-pressure-transmitters.png"
      },
      {
        "slug": "hd2101-2-thermo-hygrometer-data-logger-2",
        "title": "HD2101.2 – Thermo Hygrometer Data Logger",
        "sourceUrl": "https://environmental.senseca.com/product/hd2101-2-thermo-hygrometer-data-logger-2/",
        "tagline": "HD2101.2 is a portable thermo-hygrometer with datalogging function.",
        "intro": "HD2101.2 is a portable thermo-hygrometer with datalogging function. It measures relative humidity and temperature with combined probes or temperature alone with immersion, penetration, contact or air Pt100 or Pt1000 probes.",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of temperature."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM-HD2101.1_2-Thermo-Hygrometer-Datalogger-Manual-en.pdf",
        "datasheets": [
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM-HD2101.1_2-Thermo-Hygrometer-Datalogger-Manual-en.pdf"
          },
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2101.1_2_Thermo_Hygrometer_Datalogger_datasheet_ENG.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd2101-2-thermo-hygrometer-data-logger-2.jpg"
      },
      {
        "slug": "hd2107-2-data-logger-centesimal-thermometer-pt100-2",
        "title": "HD2107.2 – Data Logger Centesimal Thermometer Pt100",
        "sourceUrl": "https://environmental.senseca.com/product/hd2107-2-data-logger-centesimal-thermometer-pt100-2/",
        "tagline": "Centesimal thermometer in the range ±199.99 °C, decimal outside this range, one input for Pt100 probes with SICRAM module, measuring range -200 °C…+650 °C.",
        "intro": "Centesimal thermometer in the range ±199.99 °C, decimal outside this range, one input for Pt100 probes with SICRAM module, measuring range -200 °C…+650 °C. Data logger which stores maximum, minimum, average value, and can store up to 80,000 samples. USB output for data transfer to a PC. Functions: REL, HOLD and auto power off which can be disabled, IP 66 protection degree.",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of temperature."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2107.1_2_manual_ENG.pdf",
        "datasheets": [
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2107.1_2_manual_ENG.pdf"
          },
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2107.1_2_Centesimal_Thermometer_Datalogger_Datasheet_ENG.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd2107-2-data-logger-centesimal-thermometer-pt100-2.jpg"
      },
      {
        "slug": "hd2108-2-thermocouple-thermometer-data-logger-2",
        "title": "HD2108.2 – Thermocouple Thermometer Data Logger",
        "sourceUrl": "https://environmental.senseca.com/product/hd2108-2-thermocouple-thermometer-data-logger-2/",
        "tagline": "Please note that this product has been discontinued.",
        "intro": "Please note that this product has been discontinued. the corresponding new products we suggest are: PRO 135.2 – 2-channel handheld temperature meter with data logging for thermocouple probes.",
        "specifications": [],
        "features": [
          "PRO 135.2 – 2-channel handheld temperature meter with data logging for thermocouple probes."
        ],
        "applications": [
          "Monitoring and measurement of temperature."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM-HD2108.1_2-Thermocouple-Thermometer-Manual.pdf",
        "datasheets": [
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM-HD2108.1_2-Thermocouple-Thermometer-Manual.pdf"
          },
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2108.1_2_datasheet_ENG.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd2108-2-thermocouple-thermometer-data-logger-2.jpg"
      },
      {
        "slug": "hd2127-1-2-inputs-centesimal-thermometer-pt100",
        "title": "HD2127.1 – 2 inputs Centesimal Thermometer Pt100",
        "sourceUrl": "https://environmental.senseca.com/product/hd2127-1-2-inputs-centesimal-thermometer-pt100/",
        "tagline": "Centesimal thermometer in the range ±199.99 °C, decimal outside this range, 2 inputs for Pt100 probes with SICRAM module.",
        "intro": "Centesimal thermometer in the range ±199.99 °C, decimal outside this range, 2 inputs for Pt100 probes with SICRAM module. Measuring range -200 °C…+650 °C. Storage of maximum, minimum, average value, USB/RS232 C output for data transfer in real time to a PC or printer. Functions: REL, HOLD and auto power off which can be disabled, IP 67 protection degree.",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of temperature."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM-HD2127.1_2-Centesimal-Thermometer-Datalogger-Manual-en.pdf",
        "datasheets": [
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM-HD2127.1_2-Centesimal-Thermometer-Datalogger-Manual-en.pdf"
          },
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM-HD2127.1_2-Centesimal-Thermometer-Datalogger-Datasheet-en.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd2127-1-2-inputs-centesimal-thermometer-pt100.jpg"
      },
      {
        "slug": "hd2128-1-thermocouple-thermometer-2",
        "title": "HD2128.1 – Thermocouple Thermometer – 2 Inputs",
        "sourceUrl": "https://environmental.senseca.com/product/hd2128-1-thermocouple-thermometer-2/",
        "tagline": "Please note that this product has been discontinued.",
        "intro": "Please note that this product has been discontinued. The corresponding new products we suggest are: PRO 131.2 – 2-channel handheld temperature meter for thermocouple probes.",
        "specifications": [],
        "features": [
          "PRO 131.2 – 2-channel handheld temperature meter for thermocouple probes."
        ],
        "applications": [
          "Monitoring and measurement of temperature."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM-HD2128.1_2-Thermocouple-Thermometer-Manual.pdf",
        "datasheets": [
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM-HD2128.1_2-Thermocouple-Thermometer-Manual.pdf"
          },
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM-HD2128.1_2-Thermocouple-Thermometer-Datalogger-Datasheet-en.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd2128-1-thermocouple-thermometer-2.jpg"
      },
      {
        "slug": "hd2178-1-thermometer-with-two-inputs-2",
        "title": "HD2178.1 – Thermocouple – Pt100 Thermometer",
        "sourceUrl": "https://environmental.senseca.com/product/hd2178-1-thermometer-with-two-inputs-2/",
        "tagline": "Thermometer with two inputs , the first for Pt100 probes equipped with SICRAM module, the second input for thermocouple type K, J, T, E, N, large display.",
        "intro": "Thermometer with two inputs , the first for Pt100 probes equipped with SICRAM module, the second input for thermocouple type K, J, T, E, N, large display. Storage of maximum, minimum, average value, RS232 C output for data transfer in real time to a PC or printer. Functions: REL, HOLD and auto power off which can be disabled, IP 67 protection degree.",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of temperature."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM-HD2178.1.2-Pt100-Thermocouple-Thermometer-Datalogger-Manual-en.pdf",
        "datasheets": [
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM-HD2178.1.2-Pt100-Thermocouple-Thermometer-Datalogger-Manual-en.pdf"
          },
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2178.1.2_Pt100_Thermocouple_Thermometer_Datalogger_datasheet_ENG.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd2178-1-thermometer-with-two-inputs-2.jpg"
      },
      {
        "slug": "hd2178-2-data-logger-thermometer-with-two-inputs-2",
        "title": "HD2178.2 – Thermocouple – Pt100 Thermometer Data Logger",
        "sourceUrl": "https://environmental.senseca.com/product/hd2178-2-data-logger-thermometer-with-two-inputs-2/",
        "tagline": "Thermometer with two inputs , the first for Pt100 sensor for input of probes equipped with SICRAM module, and the second input for thermocouple type K, J, T, E, N, large display.",
        "intro": "Thermometer with two inputs , the first for Pt100 sensor for input of probes equipped with SICRAM module, and the second input for thermocouple type K, J, T, E, N, large display. Data logger which stores maximum, minimum, average value, and can stored up to 36,000 couples of samples. RS232 C/USB output for data transfer in real time to a PC or printer.",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of temperature."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM-HD2178.1.2-Pt100-Thermocouple-Thermometer-Datalogger-Manual-en.pdf",
        "datasheets": [
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM-HD2178.1.2-Pt100-Thermocouple-Thermometer-Datalogger-Manual-en.pdf"
          },
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2178.1.2_Pt100_Thermocouple_Thermometer_Datalogger_datasheet_ENG.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd2178-2-data-logger-thermometer-with-two-inputs-2.jpg"
      },
      {
        "slug": "hd2301-0-handheld-thermo-hygrometer-2",
        "title": "HD2301.0 – Handheld Thermo-Hygrometer",
        "sourceUrl": "https://environmental.senseca.com/product/hd2301-0-handheld-thermo-hygrometer-2/",
        "tagline": "The HD2301.0 is a portable thermo hygrometer with a LCD display.",
        "intro": "The HD2301.0 is a portable thermo hygrometer with a LCD display. It measures relative humidity and temperature using combined temperature and humidity probes. Temperature only is measured by immersion, penetration, air or contact probes. The sensor can be a Pt100 or Pt1000.",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of temperature."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2301.0_manual_ENG.pdf",
        "datasheets": [
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2301.0_manual_ENG.pdf"
          },
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2301.0_Thermo_Hygrometer_Datasheet_ENG.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd2301-0-handheld-thermo-hygrometer-2.jpg"
      },
      {
        "slug": "hd2307-0-thermometer-pt100-sensor-with-one-input-2",
        "title": "HD2307.0 – Thermometer Pt100 One Input",
        "sourceUrl": "https://environmental.senseca.com/product/hd2307-0-thermometer-pt100-sensor-with-one-input-2/",
        "tagline": "Thermometer, Pt100 sensor with one input for probes equipped with SICRAM module, measuring range –200°C +650°C.",
        "intro": "Thermometer, Pt100 sensor with one input for probes equipped with SICRAM module, measuring range –200°C +650°C. Storage of maximum, minimum, average value. Functions: REL, HOLD and auto-power-off which can be disabled, IP 67 protection degree. Supplied with carrying case, instruction manual, 3 batteries. The probes have to be ordered separately. TP47…series probes are suitable.",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of temperature."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2307.0_manual_ENG.pdf",
        "datasheets": [
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2307.0_manual_ENG.pdf"
          },
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2307.0_datasheet_ENG.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd2307-0-thermometer-pt100-sensor-with-one-input-2.jpg"
      },
      {
        "slug": "hd2328-0-two-inputs-thermocouple-thermometer-2",
        "title": "HD2328.0 – Two Inputs Thermocouple Thermometer",
        "sourceUrl": "https://environmental.senseca.com/product/hd2328-0-two-inputs-thermocouple-thermometer-2/",
        "tagline": "Please note that this product has been discontinued.",
        "intro": "Please note that this product has been discontinued. the corresponding new products we suggest are: PRO 131.2 – 2-channel handheld temperature meter for thermocouple probes. ECO 130.2 – quick response 2-channel alarm-thermometer",
        "specifications": [],
        "features": [
          "PRO 131.2 – 2-channel handheld temperature meter for thermocouple probes.",
          "ECO 130.2 – quick response 2-channel alarm-thermometer"
        ],
        "applications": [
          "Monitoring and measurement of temperature."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2328.0_manual_ENG.pdf",
        "datasheets": [
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2328.0_manual_ENG.pdf"
          },
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM-HD2328.0-Thermocouple-Thermometer-Datasheet-en.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd2328-0-two-inputs-thermocouple-thermometer-2.jpg"
      },
      {
        "slug": "hd32-7-8-inputs-data-logger-2",
        "title": "HD32.7 – 8 Inputs Temperature Data Logger – Pt100",
        "sourceUrl": "https://environmental.senseca.com/product/hd32-7-8-inputs-data-logger-2/",
        "tagline": "The instrument HD32.7 is a robust 8 inputs data logger for Pt100 sensor temperature probes .",
        "intro": "The instrument HD32.7 is a robust 8 inputs data logger for Pt100 sensor temperature probes . The probes can be Pt100 with SICRAM module, direct 4-wire Pt100 or direct 2-wire Pt1000. Main features: Unit of measurement °C, °F, °K configurable. Flash memory organized in 64 sections with a total capacity of 96.000 acquisitions for each one of the 8 inputs.",
        "specifications": [],
        "features": [
          "Unit of measurement °C, °F, °K configurable.",
          "Flash memory organized in 64 sections with a total capacity of 96.000 acquisitions for each one of the 8 inputs. Storage can be managed in two ways: when the available memory is full, data are overwritten by starting from the oldest ones (circular memory), storage stops when the available memory is full.",
          "when the available memory is full, data are overwritten by starting from the oldest ones (circular memory),",
          "storage stops when the available memory is full.",
          "Simultaneous display of the 8 inputs.",
          "Maximum, minimum or average of the stored values.",
          "Selectable storage interval: 2, 5, 10, 15, 30 seconds, 1, 2, 5, 10, 15, 20, 30 minutes and 1 hour.",
          "Data logging: instantaneous or postponed, with the possibility of selecting the storage start and end."
        ],
        "applications": [
          "Monitoring and measurement of temperature."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM-HD32.7-8-Inputs-Datalogger-Pt100-Manual-en.pdf",
        "datasheets": [
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM-HD32.7-8-Inputs-Datalogger-Pt100-Manual-en.pdf"
          },
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM-HD32.7-8-Inputs-Datalogger-Pt100-Datasheet-en.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd32-7-8-inputs-data-logger-2.jpg"
      },
      {
        "slug": "hvac40-hvac-transmitters-and-hygrostats",
        "title": "HVAC40 – HVAC Transmitters and Hygrostats",
        "sourceUrl": "https://environmental.senseca.com/product/hvac40-hvac-transmitters-and-hygrostats/",
        "tagline": "Over 40 years of experience in worldwide applications combined with a new design on accuracy, stability, simplicity and connectivity: this is the HVAC40 series.",
        "intro": "Over 40 years of experience in worldwide applications combined with a new design on accuracy, stability, simplicity and connectivity: this is the HVAC40 series. These transmitters and hygrostats measure temperature, relative humidity and dew point using an interchangeable relative humidity and temperature digital sensor.",
        "specifications": [],
        "features": [
          "fixed vertical probe for wall mounting",
          "fixed probe with 2 m cable",
          "fixed duct horizontal probe",
          "RS485 Modbus–RTU digital output",
          "0…10 V voltage analog output",
          "0…20 mA / 4…20 mA active current analog output",
          "2-wire (current loop) 4…20 mA analog output",
          "ON/OFF relay switch"
        ],
        "applications": [
          "Monitoring and measurement of temperature."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/dsh_fam_HVAC40_en_datasheet.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/dsh_fam_HVAC40_en_datasheet.pdf"
          },
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/umn_fam_HVAC40_en_manual.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hvac40-hvac-transmitters-and-hygrostats.png"
      }
    ]
  },
  {
    "id": "humidity",
    "title": "Humidity",
    "sourceUrl": "https://environmental.senseca.com/measure/humidity/",
    "products": [
      {
        "slug": "hd208-compact-data-logger-monitoring-temperature-rh-and-dew-point",
        "title": "HD208 – Compact Data Logger: Monitoring Temperature, RH and Dew Point",
        "sourceUrl": "https://environmental.senseca.com/product/hd208-compact-data-logger-monitoring-temperature-rh-and-dew-point/",
        "tagline": "The data loggers of the series HD208 are compact instruments for monitoring temperature, relative humidity (RH) and dew point temperature .",
        "intro": "The data loggers of the series HD208 are compact instruments for monitoring temperature, relative humidity (RH) and dew point temperature . Usable in a wide spectrum of applications, are available in various models (with or without LCD display): • with 1 channel for temperature only • with 1 channel for temperature and relative humidity All models can be supplied with or without LCD display.",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of humidity."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/dsh_fam_HD208_en_datasheet.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/dsh_fam_HD208_en_datasheet.pdf"
          },
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/MN_HD208_EN_manual.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd208-compact-data-logger-monitoring-temperature-rh-and-dew-point.jpg"
      },
      {
        "slug": "hd2101-1-thermo-hygrometer",
        "title": "HD2101.1 – Handheld Thermo Hygrometer",
        "sourceUrl": "https://environmental.senseca.com/product/hd2101-1-thermo-hygrometer/",
        "tagline": "HD2101.1 ia a portable thermo hygrometer that measures relative humidity and temperature with combined probes or temperature only with Pt100 or Pt1000 probes.",
        "intro": "HD2101.1 ia a portable thermo hygrometer that measures relative humidity and temperature with combined probes or temperature only with Pt100 or Pt1000 probes. Temperature only is measured by immersion, penetration air or contact probes. The thermo-hygrometer measures temperature in the range -200 °C…+650 °C (with TP47… probes) and humidity in the range 0…100 %RH.",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of humidity."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM-HD2101.1_2-Thermo-Hygrometer-Datalogger-Manual-en.pdf",
        "datasheets": [
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM-HD2101.1_2-Thermo-Hygrometer-Datalogger-Manual-en.pdf"
          },
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2101.1_2_Thermo_Hygrometer_Datalogger_datasheet_ENG.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd2101-1-thermo-hygrometer.jpg"
      },
      {
        "slug": "hd2717t-serie-interchangeable-probe-active-transmitters",
        "title": "HD2717T… Series – Interchangeable Probe Active Transmitters",
        "sourceUrl": "https://environmental.senseca.com/product/hd2717t-serie-interchangeable-probe-active-transmitters/",
        "tagline": "The instruments of the HD2717T… series are transmitters, indicators, and ON/OFF regulators with data logging functions, they measure temperature and humidity.",
        "intro": "The instruments of the HD2717T… series are transmitters, indicators, and ON/OFF regulators with data logging functions, they measure temperature and humidity. The main feature of these instruments is their interchangeable probe . The probe can be replaced by the user without process interruption. Thus, the probe can be calibrated or repaired at a later time.",
        "specifications": [],
        "features": [
          "Temperature in Celsius or Fahrenheit temperature scale",
          "Relative humidity",
          "Absolute humidity",
          "Mixing Ratio",
          "S.TC1.2 – S.TC1.2HT and S.TC1.2P – Probe L = 135 mm with cable 2 m",
          "S.TC1.5 – S.TC1.5HT and S.TC1.5P – Probe L = 135 mm with cable 5 m",
          "S.TC1.10 – S.TC1.10HT and S.TC1.10P – Probe L = 135 mm with cable 10 m",
          "S.TC2.2 – S.TC2.2HT and S.TC2.2P – Probe L = 335 mm with cable 2 m"
        ],
        "applications": [
          "Monitoring and measurement of humidity."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/dsh_fam_HD2717_HD2817_en_datasheet.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/dsh_fam_HD2717_HD2817_en_datasheet.pdf"
          },
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/umn_fam_HD2717_HD2817_en_manual.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd2717t-serie-interchangeable-probe-active-transmitters.png"
      },
      {
        "slug": "hd2817t-serie-interchangeable-probe-avctive-transmitters",
        "title": "HD2817T…Series – Interchangeable Probe Active Transmitters",
        "sourceUrl": "https://environmental.senseca.com/product/hd2817t-serie-interchangeable-probe-avctive-transmitters/",
        "tagline": "The instruments of the HD2817T… series are transmitters, indicators, and ON/OFF regulators with data logging functions, they measure temperature and humidity.",
        "intro": "The instruments of the HD2817T… series are transmitters, indicators, and ON/OFF regulators with data logging functions, they measure temperature and humidity. The instrument has a large, backlighted, graphical display. The main feature of these instruments is their interchangeable probe. The probe can be replaced by the user without process interruption. Thus, the probe can be calibrated or repaired at a later time.",
        "specifications": [],
        "features": [
          "Temperature in Celsius or Fahrenheit temperature scale",
          "Relative humidity",
          "Absolute humidity",
          "Mixing Ratio",
          "S.TC1.2 – S.TC1.2HT and S.TC1.2P – Probe L = 135 mm with cable 2 m",
          "S.TC1.5 – S.TC1.5HT and S.TC1.5P – Probe L = 135 mm with cable 5 m",
          "S.TC1.10 – S.TC1.10HT and S.TC1.10P – Probe L = 135 mm with cable 10 m",
          "S.TC2.2 – S.TC2.2HT and S.TC2.2P – Probe L = 335 mm with cable 2 m"
        ],
        "applications": [
          "Monitoring and measurement of humidity."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/dsh_fam_HD2717_HD2817_en_datasheet.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/dsh_fam_HD2717_HD2817_en_datasheet.pdf"
          },
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/umn_fam_HD2717_HD2817_en_manual.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd2817t-serie-interchangeable-probe-avctive-transmitters.png"
      },
      {
        "slug": "hd3817t-hd38v17t-series-absolute-humidity-transmitters",
        "title": "HD3817T / HD38V17T Series – Absolute Humidity Transmitters",
        "sourceUrl": "https://environmental.senseca.com/product/hd3817t-hd38v17t-series-absolute-humidity-transmitters/",
        "tagline": "The HD3817T… and HD38V17T… are double absolute humidity and temperature active transmitters with 4…20mA current or 0…10Vdc voltage outputs, respectively.",
        "intro": "The HD3817T… and HD38V17T… are double absolute humidity and temperature active transmitters with 4…20mA current or 0…10Vdc voltage outputs, respectively. Absolute humidity is the ratio between the mass of water vapour and the measured volume of air, and is expressed in g/m³. The transmitters of the HD3817T… family may be used in materials humidity control during a drying process .",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of humidity.",
          "Industrial process and environmental control."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD3817T_38V17T_Absolute_Humidity_Temperature_Transmitter_datasheet_ENG.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD3817T_38V17T_Absolute_Humidity_Temperature_Transmitter_datasheet_ENG.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd3817t-hd38v17t-series-absolute-humidity-transmitters.jpg"
      },
      {
        "slug": "hd45-hd46-series-rh-temperature-and-co2-transmitters",
        "title": "HD46… Series – RH, Temperature and CO2 Transmitters",
        "sourceUrl": "https://environmental.senseca.com/product/hd45-hd46-series-rh-temperature-and-co2-transmitters/",
        "tagline": "Please note that this product has been discontinued. In the download section, manual and datasheet are still available.",
        "intro": "Please note that this product has been discontinued. In the download section, manual and datasheet are still available.",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of humidity."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM-HD45_HD46-Transmitters-manual-en.pdf",
        "datasheets": [
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM-HD45_HD46-Transmitters-manual-en.pdf"
          },
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD46_datasheet_ENG.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd45-hd46-series-rh-temperature-and-co2-transmitters.jpg"
      },
      {
        "slug": "hd48-series-active-temperature-humidty-transmitters",
        "title": "HD48… Series – Active Temperature-Humidty Transmitters",
        "sourceUrl": "https://environmental.senseca.com/product/hd48-series-active-temperature-humidty-transmitters/",
        "tagline": "HD48 transmitters are designed for temperature and humidity control in conditioning and ventilation applications (HVAC/BEMS) in the following sectors: pharmacy, museums, clean rooms, ventilation ducts, industrial and civil sectors, crowded places, canteens, auditoria, gyms, high-density farms, greenhouses, etc.",
        "intro": "HD48 transmitters are designed for temperature and humidity control in conditioning and ventilation applications (HVAC/BEMS) in the following sectors: pharmacy, museums, clean rooms, ventilation ducts, industrial and civil sectors, crowded places, canteens, auditoria, gyms, high-density farms, greenhouses, etc. The models of the HD48..",
        "specifications": [],
        "features": [
          "horizontal probe for duct mounting (TO),",
          "vertical probe for wall mounting (TV),",
          "probe with 2 or 5 m cable (TC),",
          "fixed contact Pt100 probe for solar panel (TFP)"
        ],
        "applications": [
          "Monitoring and measurement of humidity.",
          "Industrial process and environmental control."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/umn_fam_HD48-HD49_en_manual.pdf",
        "datasheets": [
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/umn_fam_HD48-HD49_en_manual.pdf"
          },
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/dsh_fam_HD48_en_datasheet.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd48-series-active-temperature-humidty-transmitters.jpg"
      },
      {
        "slug": "hd49-series-passive-temperature-humidity-transmitters",
        "title": "HD49… Series – Passive Temperature-Humidity Transmitters",
        "sourceUrl": "https://environmental.senseca.com/product/hd49-series-passive-temperature-humidity-transmitters/",
        "tagline": "HD49 transmitters are designed for temperature and humidity control in conditioning and ventilation applications (HVAC/BEMS) in the following sectors: pharmacy, museums, clean rooms, ventilation ducts, industrial and civil sectors, crowded places, canteens, auditoria, gyms, high-density farms, greenhouses, etc.",
        "intro": "HD49 transmitters are designed for temperature and humidity control in conditioning and ventilation applications (HVAC/BEMS) in the following sectors: pharmacy, museums, clean rooms, ventilation ducts, industrial and civil sectors, crowded places, canteens, auditoria, gyms, high-density farms, greenhouses, etc. The models of the HD49..",
        "specifications": [],
        "features": [
          "horizontal probe for duct mounting (TO),",
          "vertical probe for wall mounting (TV),",
          "probe with 2 or 5 m cable (TC),",
          "fixed contact Pt100 probe for solar panel (TFP)"
        ],
        "applications": [
          "Monitoring and measurement of humidity.",
          "Industrial process and environmental control."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/umn_fam_HD48-HD49_en_manual.pdf",
        "datasheets": [
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/umn_fam_HD48-HD49_en_manual.pdf"
          },
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/dsh_fam_HD49_en_datasheet.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd49-series-passive-temperature-humidity-transmitters.jpg"
      },
      {
        "slug": "hd778tcal-power-generator-2",
        "title": "HD778TCAL – Power Generator",
        "sourceUrl": "https://environmental.senseca.com/product/hd778tcal-power-generator-2/",
        "tagline": "Please note that this product has been discontinued. For any support, please contact Senseca.",
        "intro": "Please note that this product has been discontinued. For any support, please contact Senseca.",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of humidity."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD778_HD978_datasheet_ENG.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD778_HD978_datasheet_ENG.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd778tcal-power-generator-2.jpg"
      },
      {
        "slug": "hd9008t17s-meteorological-temperature-and-rh-transmitter",
        "title": "HD9008T17S – Meteorological Temperature and RH Transmitter",
        "sourceUrl": "https://environmental.senseca.com/product/hd9008t17s-meteorological-temperature-and-rh-transmitter/",
        "tagline": "Please note that this model has been discontinued. Datasheet can still be found on ‘download’.",
        "intro": "Please note that this model has been discontinued. Datasheet can still be found on ‘download’. For the rest of the series, please refer to HD9008… – HD9009… dedicated page.",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of humidity."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD9008_HD9009_datasheet_ENG.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD9008_HD9009_datasheet_ENG.pdf"
          },
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD9008TxxS_Modbus_manual_ENG.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd9008t17s-meteorological-temperature-and-rh-transmitter.jpg"
      }
    ]
  },
  {
    "id": "light",
    "title": "Light",
    "sourceUrl": "https://environmental.senseca.com/measure/light/",
    "products": [
      {
        "slug": "hd2021t-serie-photometric-radiometric-transmitters-2",
        "title": "HD2021T Serie – Photometric Radiometric Transmitters",
        "sourceUrl": "https://environmental.senseca.com/product/hd2021t-serie-photometric-radiometric-transmitters-2/",
        "tagline": "Please note that the HD2021T 2 model has been discontinued.",
        "intro": "Please note that the HD2021T 2 model has been discontinued. The serie HD2021T… allows to convert photometric and radiometric quantities, such as illuminance (Lux) and irradiance (W/m²) in the UVA, UVB, UVC spectral regions and in the 400 … 1050nm band, into a 0 …10Vdc voltage signal. The series is suitable to be installed either indoor and outdoor.",
        "specifications": [],
        "features": [
          "Control of illuminance (HD2021T…) in offices, manufacturing plants and production areas, commercial sites, theatres, museums, sports facilities, roadway lighting, tunnels and nursery-gardening systems.",
          "Control of solar radiation in the 400nm…1050nm spectral band (HD2021T1).",
          "Control of the irradiance emitted by the tanning lamps in the UVA (HD2021T2) and UVB (HD2021T3) spectral regions, as well as control of the efficiency of filters in devices using high pressure lamps.",
          "Control of the efficiency of the lamps used in sewage treatment plants, where UVC (HD2021T4) band irradiance has to be constantly monitored."
        ],
        "applications": [
          "Monitoring and measurement of light.",
          "Outdoor monitoring deployments."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2021T_datasheet_ENG.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2021T_datasheet_ENG.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd2021t-serie-photometric-radiometric-transmitters-2.jpg"
      },
      {
        "slug": "hd2021t6-hd2021t7-photometric-radiometric-transmitters-2",
        "title": "HD2021T6 / HD2021T7 – Photometric Radiometric Transmitters",
        "sourceUrl": "https://environmental.senseca.com/product/hd2021t6-hd2021t7-photometric-radiometric-transmitters-2/",
        "tagline": "The transmitters allow converting the photometric quantity “equivalent veiling luminance” – HD2021T7 – or a photometric quantity Luminance (cd/m 2 ) – HD2021T6 – into a current (4…20 mA) or a voltage (0…10 V) signal according to the version chosen.",
        "intro": "The transmitters allow converting the photometric quantity “equivalent veiling luminance” – HD2021T7 – or a photometric quantity Luminance (cd/m 2 ) – HD2021T6 – into a current (4…20 mA) or a voltage (0…10 V) signal according to the version chosen.",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of light."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DSH_HD2021T6_7_EN_datasheet.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DSH_HD2021T6_7_EN_datasheet.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd2021t6-hd2021t7-photometric-radiometric-transmitters-2.jpg"
      },
      {
        "slug": "hd2102-1-portable-luxmeter",
        "title": "HD2102.1 – Portable Luxmeter",
        "sourceUrl": "https://environmental.senseca.com/product/hd2102-1-portable-luxmeter/",
        "tagline": "The HD2102.1 is a portable luxmeter for measuring illuminance, luminance, PAR, irradiance .",
        "intro": "The HD2102.1 is a portable luxmeter for measuring illuminance, luminance, PAR, irradiance . Irradiance is measured in the VIS-NIR, UVA, UVB and UVC spectral regions or in the measurement of effective irradiance according to the UV action curve. The luxmeter calculates, in addition to the instantaneous measurement, the integral over time of the acquired measurements Q(t).",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of light."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2102.1_2_manual_ENG.pdf",
        "datasheets": [
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2102.1_2_manual_ENG.pdf"
          },
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2102.1_2_datasheet_ENG.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd2102-1-portable-luxmeter.jpg"
      },
      {
        "slug": "hd2102-2-portable-luxmeter-data-logger-2",
        "title": "HD2102.2 – Portable Luxmeter Data Logger",
        "sourceUrl": "https://environmental.senseca.com/product/hd2102-2-portable-luxmeter-data-logger-2/",
        "tagline": "Portable handheld luxmeter data logger for measuring illuminance, luminance, PAR, irradiance (across VIS-NIR, UVA, UVB and UVC spectral regions or measurement of irradiance effective according to the UV action curve).",
        "intro": "Portable handheld luxmeter data logger for measuring illuminance, luminance, PAR, irradiance (across VIS-NIR, UVA, UVB and UVC spectral regions or measurement of irradiance effective according to the UV action curve). In addition to instantaneous measurement, the instrument calculates the acquired measurements time integral Q(t).",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of light."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2102.1_2_manual_ENG.pdf",
        "datasheets": [
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2102.1_2_manual_ENG.pdf"
          },
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2102.1_2_datasheet_ENG.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd2102-2-portable-luxmeter-data-logger-2.jpg"
      },
      {
        "slug": "hd2302-0-portable-luxmeter-2",
        "title": "HD2302.0 – Portable Luxmeter",
        "sourceUrl": "https://environmental.senseca.com/product/hd2302-0-portable-luxmeter-2/",
        "tagline": "Portable luxmeter for measuring illuminance, luminance, PAR, irradiance (across VIS-NIR, UVA, UVB and UVC spectral regions or measurement of irradiance effective according to the UV action curve).",
        "intro": "Portable luxmeter for measuring illuminance, luminance, PAR, irradiance (across VIS-NIR, UVA, UVB and UVC spectral regions or measurement of irradiance effective according to the UV action curve). Storage of maximum, minimum, average value. Functions: REL, HOLD and auto power off which can be disabled, IP 67 protection degree. LP471 series probes with SICRAM module are suitable.",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of light."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2302.0_manual_ENG.pdf",
        "datasheets": [
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2302.0_manual_ENG.pdf"
          },
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2302.0_datasheet_ENG.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd2302-0-portable-luxmeter-2.jpg"
      },
      {
        "slug": "hd2402-multisensor-photo-radiometer",
        "title": "HD2402 – Multisensor Photo-Radiometer",
        "sourceUrl": "https://environmental.senseca.com/product/hd2402-multisensor-photo-radiometer/",
        "tagline": "HD2402 is a portable photo-radiometer data logger for the measurement of noncoherent optical radiation in accordance with European Directive 2006/25/EC and the Legislative Decree No 81, April 9, 2008.",
        "intro": "HD2402 is a portable photo-radiometer data logger for the measurement of noncoherent optical radiation in accordance with European Directive 2006/25/EC and the Legislative Decree No 81, April 9, 2008. The instrument consists of a series of sensors to cover different portions of the spectrum and a small laser which is used to indicate the analyzed source.",
        "specifications": [],
        "features": [
          "Photometric sensor for measuring the illuminance (lux meter) in the spectralrange 380÷780 nm",
          "Radiometric sensor for the UV band (220÷400 nm) with spectral weighing factor S(λ)",
          "Radiometric sensor for UVA band (315÷400 nm)",
          "Radiometric sensor for the band 400÷700 nm (blue) with spectral weighing factor B (λ)",
          "Radiometric sensor for the IR band (700÷1300 nm) with spectral weighing factor R(λ)",
          "Thermopile sensor for the measurement of irradiance in the infrared spectral range 400÷2800 nm"
        ],
        "applications": [
          "Monitoring and measurement of light."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/umn_prd_HD2402_en_manual.pdf",
        "datasheets": [
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/umn_prd_HD2402_en_manual.pdf"
          },
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/dsh_prd_HD2402_en_datasheet.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd2402-multisensor-photo-radiometer.png"
      },
      {
        "slug": "hd30-1-spectroradiometer-data-logger",
        "title": "HD30.1 – Spectroradiometer Data Logger",
        "sourceUrl": "https://environmental.senseca.com/product/hd30-1-spectroradiometer-data-logger/",
        "tagline": "The HD30.1 spectroradiometer datalogger is designed for the spectral analysis of light in the visible range and ultraviolet.",
        "intro": "The HD30.1 spectroradiometer datalogger is designed for the spectral analysis of light in the visible range and ultraviolet. The instrument has been designed by combining the maximum flexibility of use. The system consists of two elements connected together by a cable: the data logger-indicator HD30.1 and the measurement sensors (also available all toghether as a kit with code HD30.1K).",
        "specifications": [],
        "features": [
          "Visible Spectral Region (380 nm-780 nm) with the HD30.S1 probe",
          "Ultraviolet Spectral Region (220 nm-400 nm) with the HD30.S2 probe."
        ],
        "applications": [
          "Monitoring and measurement of light."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD30.1_manual_ENG.pdf",
        "datasheets": [
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD30.1_manual_ENG.pdf"
          },
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD30.1_datasheet_ENG.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd30-1-spectroradiometer-data-logger.jpg"
      },
      {
        "slug": "hd978tr3-converter-signal-amplifier-2",
        "title": "HD978TR3 – Converter Signal Amplifier – 4…20 mA – DIN Rail",
        "sourceUrl": "https://environmental.senseca.com/product/hd978tr3-converter-signal-amplifier-2/",
        "tagline": "Please note that this product has been discontinued. In the download section, manual and datasheet are still available.",
        "intro": "Please note that this product has been discontinued. In the download section, manual and datasheet are still available.",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of light."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD978TR_datasheet_ENG.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD978TR_datasheet_ENG.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd978tr3-converter-signal-amplifier-2.jpg"
      },
      {
        "slug": "hd978tr4-converter-signal-amplifier-2",
        "title": "HD978TR4 – Converter Signal Amplifier – 0…10 Vdc – DIN Rail",
        "sourceUrl": "https://environmental.senseca.com/product/hd978tr4-converter-signal-amplifier-2/",
        "tagline": "Please note that this product has been discontinued. In the download section, manual and datasheet are still available.",
        "intro": "Please note that this product has been discontinued. In the download section, manual and datasheet are still available.",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of light."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD978TR_datasheet_ENG.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD978TR_datasheet_ENG.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd978tr4-converter-signal-amplifier-2.jpg"
      },
      {
        "slug": "hd978tr5-converter-signal-amplifier-2",
        "title": "HD978TR5 – Converter Signal Amplifier – 4…20 mA – Wall Mounting",
        "sourceUrl": "https://environmental.senseca.com/product/hd978tr5-converter-signal-amplifier-2/",
        "tagline": "Please note that this product has been discontinued. In the download section, manual and datasheet are still available.",
        "intro": "Please note that this product has been discontinued. In the download section, manual and datasheet are still available.",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of light."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD978TR_datasheet_ENG.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD978TR_datasheet_ENG.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd978tr5-converter-signal-amplifier-2.jpg"
      },
      {
        "slug": "hd978tr6-converter-signal-amplifier-2",
        "title": "HD978TR6 – Converter Signal Amplifier – 0…10 Vdc – Wall Mounting",
        "sourceUrl": "https://environmental.senseca.com/product/hd978tr6-converter-signal-amplifier-2/",
        "tagline": "Please note that this product has been discontinued. In the download section, manual and datasheet are still available.",
        "intro": "Please note that this product has been discontinued. In the download section, manual and datasheet are still available.",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of light."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD978TR_datasheet_ENG.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD978TR_datasheet_ENG.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd978tr6-converter-signal-amplifier-2.jpg"
      },
      {
        "slug": "llm-basic-kit-and-llm-advanced-kit-led-lux-measurement-kits",
        "title": "LLM-Basic KIT and LLM-Advanced KIT: LED LUX Measurement Kits",
        "sourceUrl": "https://environmental.senseca.com/product/llm-basic-kit-and-llm-advanced-kit-led-lux-measurement-kits/",
        "tagline": "Special photoradiometer kits with PHOT probe for the measurement of ILLUMINANCE.",
        "intro": "Special photoradiometer kits with PHOT probe for the measurement of ILLUMINANCE. Thanks to the high precision sensor, the kits can be used in a wide range of applications and situations where the measurement of illuminance (LUX) is necessary.",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of light."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_LED_LUX_KIT_datasheet_ENG.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_LED_LUX_KIT_datasheet_ENG.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/llm-basic-kit-and-llm-advanced-kit-led-lux-measurement-kits.jpg"
      },
      {
        "slug": "lpphot02-photometric-probe-for-illuminance-2",
        "title": "LPPHOT02 – Photometric Probe for Illuminance",
        "sourceUrl": "https://environmental.senseca.com/product/lpphot02-photometric-probe-for-illuminance-2/",
        "tagline": "Outdoor photometric probe for measuring ILLUMINANCE (0…150 Klux), CIE photopic filter, diffuser for cosine correction. mVdc output for klux.",
        "intro": "Outdoor photometric probe for measuring ILLUMINANCE (0…150 Klux), CIE photopic filter, diffuser for cosine correction. mVdc output for klux. Complete with Calibration Report. On request 5 or 10 m cables with connectors. LPPHOT02… probe measures illuminance (lux), defined as the ratio between the luminous flux (lumen) passing through a surface and the surface area (m²).",
        "specifications": [],
        "features": [
          "LPPHOT02 – passive (mVdc output for klux);",
          "LPPHOT02AC – active (4…20 mA output);",
          "LPPHOT02AV – active (0…1 Vdc, 0…5 Vdc or 0…10 Vdc output to be defined when ordering)"
        ],
        "applications": [
          "Monitoring and measurement of light.",
          "Outdoor monitoring deployments."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/umn_fam_LPPHOT02_en_manual.pdf",
        "datasheets": [
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/umn_fam_LPPHOT02_en_manual.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/lpphot02-photometric-probe-for-illuminance-2.png"
      },
      {
        "slug": "lpuva02-radiometric-probe-for-irradiance-2",
        "title": "LPUVA02 – Radiometric Probe for Irradiance",
        "sourceUrl": "https://environmental.senseca.com/product/lpuva02-radiometric-probe-for-irradiance-2/",
        "tagline": "Radiometric probe for outdoor use for measuring IRRADIANCE in the UVA spectral range (315…400 nm) . Supplied with Calibration Report.",
        "intro": "Radiometric probe for outdoor use for measuring IRRADIANCE in the UVA spectral range (315…400 nm) . Supplied with Calibration Report. On request CPM12AA4… cables with 4-pole M12 connector. The LPUVA02 radiometer measures the broadband UVA irradiance on a plane surface (Watt/ m²). Measured irradiance is the result of the sum of direct solar irradiance and of diffuse irradiance.",
        "specifications": [],
        "features": [
          "LPUVA02 – passive – μV per μW/cm² output;",
          "LPUVA02AC – active, 4…20 mA current output",
          "LPUVA02AV – active, 0…1 Vdc, 0…5 Vdc or 0…10 Vdc output (0…150 W/m²)"
        ],
        "applications": [
          "Monitoring and measurement of light.",
          "Outdoor monitoring deployments."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/umn_fam_LPUVA02_en_manual.pdf",
        "datasheets": [
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/umn_fam_LPUVA02_en_manual.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/lpuva02-radiometric-probe-for-irradiance-2.png"
      },
      {
        "slug": "lpuvb02-radiometric-probe-for-irradiance-2",
        "title": "LPUVB02 – Radiometric Probe for Irradiance",
        "sourceUrl": "https://environmental.senseca.com/product/lpuvb02-radiometric-probe-for-irradiance-2/",
        "tagline": "Please note that this code has been discontinued. The relevant documentation remains accessible via the download tab.",
        "intro": "Please note that this code has been discontinued. The relevant documentation remains accessible via the download tab.",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of light."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM-LPUVB02-irradiance-probe-datasheet-en.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM-LPUVB02-irradiance-probe-datasheet-en.pdf"
          },
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_LPUVB02_manual_ENG.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/lpuvb02-radiometric-probe-for-irradiance-2.png"
      }
    ]
  },
  {
    "id": "co2-air-quality",
    "title": "CO2 – Air Quality",
    "sourceUrl": "https://environmental.senseca.com/measure/co2-air-quality/",
    "products": [
      {
        "slug": "hd21ab17-9-connection-accessory-for-calibration",
        "title": "HD21AB17.9 – Accessory for CO2 Calibration",
        "sourceUrl": "https://environmental.senseca.com/product/hd21ab17-9-connection-accessory-for-calibration/",
        "tagline": "Connection accessory between instrument and MINICAN.12A for CO 2 calibration. The connecting tube is included.",
        "intro": "Connection accessory between instrument and MINICAN.12A for CO 2 calibration. The connecting tube is included. For IAQ handheld data logger HD21ABE17 .",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of co2 – air quality."
        ],
        "datasheets": [],
        "imageSrc": "/graphics/senseca/hd21ab17-9-connection-accessory-for-calibration.jpg"
      },
      {
        "slug": "hd37-36-kit-connection-tube-for-calibration-2",
        "title": "HD37.36 – Kit Connection Tube for Calibration",
        "sourceUrl": "https://environmental.senseca.com/product/hd37-36-kit-connection-tube-for-calibration-2/",
        "tagline": "Connection tube kit between instrument and nitrogen cylinder for CO calibration.",
        "intro": "Connection tube kit between instrument and nitrogen cylinder for CO calibration.",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of co2 – air quality."
        ],
        "datasheets": [],
        "imageSrc": "/graphics/senseca/hd37-36-kit-connection-tube-for-calibration-2.jpg"
      },
      {
        "slug": "hd37-37-kit-connection-tube-for-calibration-2",
        "title": "HD37.37 – Kit Connection Tube for Calibration",
        "sourceUrl": "https://environmental.senseca.com/product/hd37-37-kit-connection-tube-for-calibration-2/",
        "tagline": "Connection tube kit between instrument and nitrogen cylinder for CO 2 calibration.",
        "intro": "Connection tube kit between instrument and nitrogen cylinder for CO 2 calibration.",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of co2 – air quality."
        ],
        "datasheets": [],
        "imageSrc": "/graphics/senseca/hd37-37-kit-connection-tube-for-calibration-2.jpg"
      },
      {
        "slug": "hd37ab1347-datalogger-for-iaq-analysis-2",
        "title": "HD37AB1347 – Datalogger for IAQ Analysis",
        "sourceUrl": "https://environmental.senseca.com/product/hd37ab1347-datalogger-for-iaq-analysis-2/",
        "tagline": "Datalogger for indoor air quality analysis (IAQ).",
        "intro": "Datalogger for indoor air quality analysis (IAQ). The instrument measures the quantities: airspeed, temperature, relative humidity, atmospheric pressure, CO 2 (Carbon Dioxide) and CO (Carbon Monoxide) by using P37AB147 probe. The SICRAM hotwire air speed probes, vane air speed probes, temperature probes, relative humidity and temperature combined probes can also be connected to the instrument.",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of co2 – air quality."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM-HD37AB1347-Indoor-Air-Quality-Datasheet-en.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM-HD37AB1347-Indoor-Air-Quality-Datasheet-en.pdf"
          },
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/MN_HD37AB1347_EN_manual.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd37ab1347-datalogger-for-iaq-analysis-2.jpg"
      },
      {
        "slug": "p37ab147-combined-probe-for-iaq-2",
        "title": "P37AB147 – Combined Probe for IAQ",
        "sourceUrl": "https://environmental.senseca.com/product/p37ab147-combined-probe-for-iaq-2/",
        "tagline": "Temperature, relative humidity, atmospheric pressure, CO 2 (Carbon Dioxide) and CO (Carbon Monoxide) combined probe, complete with SICRAM module.",
        "intro": "Temperature, relative humidity, atmospheric pressure, CO 2 (Carbon Dioxide) and CO (Carbon Monoxide) combined probe, complete with SICRAM module. To be used in combination with HD37AB1347 for anlaysis of Indoor Air Quality. Probe dimensions: 275mm x 45mm x 40mm. Connection cable length 2m.",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of co2 – air quality."
        ],
        "datasheets": [],
        "imageSrc": "/graphics/senseca/p37ab147-combined-probe-for-iaq-2.jpg"
      },
      {
        "slug": "pmsense-particulate-matter-transmitter",
        "title": "PMsense – Particulate Matter Transmitter",
        "sourceUrl": "https://environmental.senseca.com/product/pmsense-particulate-matter-transmitter/",
        "tagline": "PMsense is a PM1.0 , PM2.5 and PM10 Particulate Matter transmitter with RS485 Modbus-RTU output, suitable for outdoor air quality monitoring.",
        "intro": "PMsense is a PM1.0 , PM2.5 and PM10 Particulate Matter transmitter with RS485 Modbus-RTU output, suitable for outdoor air quality monitoring. The dust particles concentration is measured using the laser scattering principle. The transmitter is maintenance-free and has fast response, high sensitivity and an excellent stability.",
        "specifications": [],
        "features": [
          "Continuous operating mode : the sensor is always active and measurements are continuously taken. In this mode at least 10,000 hours of PM sensor life are guaranteed.",
          "Discontinuous operating mode (default): the sensor is activated at regular intervals, when measurements has to be taken. This mode increases the PM sensor life."
        ],
        "applications": [
          "Monitoring and measurement of co2 – air quality.",
          "Outdoor monitoring deployments."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/dsh_fam_PMsense_en_datasheet.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/dsh_fam_PMsense_en_datasheet.pdf"
          },
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/umn_fam_PMsense_en_manual.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/pmsense-particulate-matter-transmitter.png"
      },
      {
        "slug": "pmsensecr-pm-and-co2-transmitter",
        "title": "PMsenseCR – PM and CO2 Transmitter",
        "sourceUrl": "https://environmental.senseca.com/product/pmsensecr-pm-and-co2-transmitter/",
        "tagline": "PMsenseCR is a PM and optionally CO2 transmitter, ideal for pharmaceutical and high-tech cleanrooms where contamination control is critical.",
        "intro": "PMsenseCR is a PM and optionally CO2 transmitter, ideal for pharmaceutical and high-tech cleanrooms where contamination control is critical. It ensures compliance with ISO 14644 standards using laser scattering technology to detect and classify particles by size.",
        "specifications": [],
        "features": [
          "Ch.1: >0.3μm",
          "Ch.2: >0.5μm",
          "Ch.3: >1.0μm",
          "Ch.4: >2.5μm",
          "Ch.5: >5.0μm"
        ],
        "applications": [
          "Monitoring and measurement of co2 – air quality."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/dsh_fam_PMsenseCR_en_datasheet.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/dsh_fam_PMsenseCR_en_datasheet.pdf"
          },
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/umn_fam_PMsenseCR_en_manual.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/pmsensecr-pm-and-co2-transmitter.png"
      },
      {
        "slug": "rs45-serial-connection-cable-2",
        "title": "RS45 – Serial Connection Cable",
        "sourceUrl": "https://environmental.senseca.com/product/rs45-serial-connection-cable-2/",
        "tagline": "Serial connection cable, not isolated, with built-in USB adapter.",
        "intro": "Serial connection cable, not isolated, with built-in USB adapter. USB connector for the PC and mini USB connector for the instrument serial port. The instrument is powered directly by the USB port of the PC.",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of co2 – air quality."
        ],
        "datasheets": [],
        "imageSrc": "/graphics/senseca/rs45-serial-connection-cable-2.jpg"
      }
    ]
  },
  {
    "id": "water-analysis",
    "title": "Water Analysis",
    "sourceUrl": "https://environmental.senseca.com/measure/water-analysis/",
    "products": [
      {
        "slug": "cp22-usb-cable-for-pc-connection-2",
        "title": "CP22 – USB Cable",
        "sourceUrl": "https://environmental.senseca.com/product/cp22-usb-cable-for-pc-connection-2/",
        "tagline": "Connecting cable USB 2.0 type A connector – type B connector.",
        "intro": "Connecting cable USB 2.0 type A connector – type B connector. To be used with the multiple input temperature datalogger HD32.7, HD32.8.8 and HD32.8.16 and the HD25.2 turbidity meter.",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of water analysis."
        ],
        "datasheets": [],
        "imageSrc": "/graphics/senseca/cp22-usb-cable-for-pc-connection-2.jpg"
      },
      {
        "slug": "do9403t-r1-ph-or-mv-transmitter",
        "title": "DO9403T-R1 – pH / mV Transmitter",
        "sourceUrl": "https://environmental.senseca.com/product/do9403t-r1-ph-or-mv-transmitter/",
        "tagline": "The DO9403T-R1 pH transmitter converts the output of a pH electrode, with temperature compensation, into a 4÷20 mA signal.",
        "intro": "The DO9403T-R1 pH transmitter converts the output of a pH electrode, with temperature compensation, into a 4÷20 mA signal. The pH or Redox electrode input circuit is galvanically isolated from the 4÷20 mA output signal. An LCD indicator allows to display the value of the process signal and the various parameters. The accurate design and choice of the components make the instrument precise and reliable over time.",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of water analysis."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_DO9403T-R1_datasheet_ENG.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_DO9403T-R1_datasheet_ENG.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/do9403t-r1-ph-or-mv-transmitter.jpg"
      },
      {
        "slug": "do9765t-active-and-passive-ph-transmitter",
        "title": "DO9765T – pH or mV Configurable Transmitters",
        "sourceUrl": "https://environmental.senseca.com/product/do9765t-active-and-passive-ph-transmitter/",
        "tagline": "DO9765T pH transmitters convert the output of a pH electrode, with temperature compensation, into a 4÷20 mA signal .",
        "intro": "DO9765T pH transmitters convert the output of a pH electrode, with temperature compensation, into a 4÷20 mA signal . The transmitter is completely configurable and for use on the field. Dimensions 122 x 120 x 57 mm with dual LCD (measurement + temperature), output 4…20 mA insulated with 2 wires passive or 4 wires active. Power supply in active mode 24 Vac, on request 230 Vac, in passive mode 10…35 Vdc.",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of water analysis."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_DO9785_DO9765_datasheet_ENG.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_DO9785_DO9765_datasheet_ENG.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/do9765t-active-and-passive-ph-transmitter.jpg"
      },
      {
        "slug": "do9766t-r1-conductivity-transmitter",
        "title": "DO9766T-R1 – Conductivity Transmitter",
        "sourceUrl": "https://environmental.senseca.com/product/do9766t-r1-conductivity-transmitter/",
        "tagline": "DO9766T-R1 transmitters convert the output of a conductivity electrode with temperature compensation into a 4÷20 mA signal.",
        "intro": "DO9766T-R1 transmitters convert the output of a conductivity electrode with temperature compensation into a 4÷20 mA signal. The electrode input circuit is galvanically insulated against the 4…20 mA output signal. Power supply in active mode 24 Vac, on request 230 Vac, in passive mode 10…35 Vdc. The cell constant, the range and the temperature coefficient are completely configurable.",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of water analysis."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_DO9786_DO9766_TR1_datasheet_ENG.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_DO9786_DO9766_TR1_datasheet_ENG.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/do9766t-r1-conductivity-transmitter.jpg"
      },
      {
        "slug": "do9785t-active-and-passive-ph-transmitter",
        "title": "DO9785T – pH or mV Configurable Transmitters",
        "sourceUrl": "https://environmental.senseca.com/product/do9785t-active-and-passive-ph-transmitter/",
        "tagline": "DO9785T pH transmitters convert the output of a pH electrode, with temperature compensation, into a 4÷20 mA signal .",
        "intro": "DO9785T pH transmitters convert the output of a pH electrode, with temperature compensation, into a 4÷20 mA signal . The transmitter is completely configurable and suitable for panel mounting . Dimensions 96 x 96 mm with dual LCD (measurement + temperature), output 4…20 mA insulated with 2 wires passive or 4 wires active. Power supply in active mode 24 Vac, on request 230 Vac, in passive mode 10…35 Vdc.",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of water analysis."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_DO9785_DO9765_datasheet_ENG.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_DO9785_DO9765_datasheet_ENG.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/do9785t-active-and-passive-ph-transmitter.jpg"
      },
      {
        "slug": "do9786t-r1-panel-mounting-conductivity-transmitter",
        "title": "DO9786T-R1 – Panel Mounting Conductivity Transmitter",
        "sourceUrl": "https://environmental.senseca.com/product/do9786t-r1-panel-mounting-conductivity-transmitter/",
        "tagline": "DO9786T-R1 transmitters convert the output of a con ductivity electrode with temperature compensation into a 4…20 mA signal.",
        "intro": "DO9786T-R1 transmitters convert the output of a con ductivity electrode with temperature compensation into a 4…20 mA signal. 2-wire passive transmitter or 4-wire active transmitter. Power supply in active mode 24 Vac, on request 230 Vac, in passive mode 10…35 Vdc. The electrode input circuit is galvanically insulated against the 4…20 mA output signal.",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of water analysis."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_DO9786_DO9766_TR1_datasheet_ENG.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_DO9786_DO9766_TR1_datasheet_ENG.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/do9786t-r1-panel-mounting-conductivity-transmitter.jpg"
      },
      {
        "slug": "hd2105-1-phmeter-thermometer-2",
        "title": "HD2105.1 – pHmeter-Thermometer",
        "sourceUrl": "https://environmental.senseca.com/product/hd2105-1-phmeter-thermometer-2/",
        "tagline": "pHmeter-Thermometer which measures pH, mV and temperature . Storage of maximum, minimum, average value.",
        "intro": "pHmeter-Thermometer which measures pH, mV and temperature . Storage of maximum, minimum, average value. RS232C output for data transfer to a PC or a printer in real time. Functions: REL, HOLD and auto power off which can be disabled, IP 66 protection degree. Includes DeltaLog9 software downloadable here . Supplied with carrying case, instruction manual, 4 batteries.",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of water analysis."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2105_manual_ENG.pdf",
        "datasheets": [
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2105_manual_ENG.pdf"
          },
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2105.1_2_datasheet_ENG.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd2105-1-phmeter-thermometer-2.jpg"
      },
      {
        "slug": "hd2105-2-phmeter-thermometer-data-logger-2",
        "title": "HD2105.2 – pHmeter-Thermometer Data Logger",
        "sourceUrl": "https://environmental.senseca.com/product/hd2105-2-phmeter-thermometer-data-logger-2/",
        "tagline": "pHmeter-Thermometer which measures pH, mV and temperature.",
        "intro": "pHmeter-Thermometer which measures pH, mV and temperature. Datalogger which stores the maximum, minimum, average value and can store up to 34,000 samples. RS232C/USB output for data transfer in real time to a PC or printer. Functions: REL, HOLD and auto power off which can be disabled, IP 66 protection degree. Includes DeltaLog9 software downloadable here .",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of water analysis."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2105_manual_ENG.pdf",
        "datasheets": [
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2105_manual_ENG.pdf"
          },
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2105.1_2_datasheet_ENG.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd2105-2-phmeter-thermometer-data-logger-2.jpg"
      },
      {
        "slug": "hd2106-1-conductivity-thermometer",
        "title": "HD2106.1 – Conductivity-Thermometer",
        "sourceUrl": "https://environmental.senseca.com/product/hd2106-1-conductivity-thermometer/",
        "tagline": "Conductivity-Thermometer measures conductivity, liquid resistivity, total dissolved solids, salinity and temperature.",
        "intro": "Conductivity-Thermometer measures conductivity, liquid resistivity, total dissolved solids, salinity and temperature. Storage of maximum, minimum, average value. RS232C output for data transfer in real time to a PC or printer. Functions: REL, HOLD and auto power off which can be disabled, IP 66 protection degree. Includes DeltaLog9 software downloadable here .",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of water analysis."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2106.1_2_manual_ENG.pdf",
        "datasheets": [
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2106.1_2_manual_ENG.pdf"
          },
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2106.1_2_datasheet_ENG.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd2106-1-conductivity-thermometer.jpg"
      },
      {
        "slug": "hd2106-2-conductivity-thermometer-data-logger-2",
        "title": "HD2106.2 – Conductivity-Thermometer Data Logger",
        "sourceUrl": "https://environmental.senseca.com/product/hd2106-2-conductivity-thermometer-data-logger-2/",
        "tagline": "Conductivity-Thermometer measures conductivity, liquid resistivity, total dissolved solids, salinity and temperature.",
        "intro": "Conductivity-Thermometer measures conductivity, liquid resistivity, total dissolved solids, salinity and temperature. Datalogger which can store the maximum, minimum, average value and can store up to 36,000 samples. USB output for data transfer in real time to a PC. Functions: REL, HOLD and auto power off which can be disabled, IP 66 protection degree. Includes DeltaLog9 software downloadable here .",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of water analysis."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2106.1_2_manual_ENG.pdf",
        "datasheets": [
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2106.1_2_manual_ENG.pdf"
          },
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2106.1_2_datasheet_ENG.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd2106-2-conductivity-thermometer-data-logger-2.jpg"
      },
      {
        "slug": "hd2109-1-oxygen-meter-thermometer-2",
        "title": "HD2109.1 – Oxygen Meter-Thermometer",
        "sourceUrl": "https://environmental.senseca.com/product/hd2109-1-oxygen-meter-thermometer-2/",
        "tagline": "Please note that this product has been discontinued.",
        "intro": "Please note that this product has been discontinued.",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of water analysis."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM-HD2109.1_2-oxygen-meter-manual-en.pdf",
        "datasheets": [
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM-HD2109.1_2-oxygen-meter-manual-en.pdf"
          },
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM-HD2109.1_2-oxygen-meter-datasheet-en.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd2109-1-oxygen-meter-thermometer-2.jpg"
      },
      {
        "slug": "hd2109-2-oxygen-meter-thermometer-data-logger-2",
        "title": "HD2109.2 – Oxygen Meter-Thermometer Data Logger",
        "sourceUrl": "https://environmental.senseca.com/product/hd2109-2-oxygen-meter-thermometer-data-logger-2/",
        "tagline": "Please note that this product has been discontinued.",
        "intro": "Please note that this product has been discontinued.",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of water analysis."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM-HD2109.1_2-oxygen-meter-manual-en.pdf",
        "datasheets": [
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM-HD2109.1_2-oxygen-meter-manual-en.pdf"
          },
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM-HD2109.1_2-oxygen-meter-datasheet-en.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd2109-2-oxygen-meter-thermometer-data-logger-2.jpg"
      },
      {
        "slug": "hd2156-1-phmeter-conductivity-thermometer-2",
        "title": "HD2156.1 – pHmeter-Conductivity-Thermometer",
        "sourceUrl": "https://environmental.senseca.com/product/hd2156-1-phmeter-conductivity-thermometer-2/",
        "tagline": "pHmeter-Conductivity-Thermometer measures pH, mV, conductivity, liquid resistivity, total dissolved solids, salinity and temperature.",
        "intro": "pHmeter-Conductivity-Thermometer measures pH, mV, conductivity, liquid resistivity, total dissolved solids, salinity and temperature. Storage of maximum, minimum, average value. RS232C output for data transfer in real time to a PC or printer. Functions: REL, HOLD and auto power off which can be disabled, IP 66 protection degree. It includes DeltaLog9 software downloadable here .",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of water analysis."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2156_manual_ENG.pdf",
        "datasheets": [
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2156_manual_ENG.pdf"
          },
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2156.1_2_datasheet_ENG.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd2156-1-phmeter-conductivity-thermometer-2.jpg"
      },
      {
        "slug": "hd2156-2-phmeter-conductivity-thermometer-data-logger-2",
        "title": "HD2156.2 – pHmeter-Conductivity-Thermometer Data Logger",
        "sourceUrl": "https://environmental.senseca.com/product/hd2156-2-phmeter-conductivity-thermometer-data-logger-2/",
        "tagline": "pHmeter-Conductivity-Thermometer measures pH, mV, conductivity, liquid resistivity, total dissolved solids, salinity and temperature .",
        "intro": "pHmeter-Conductivity-Thermometer measures pH, mV, conductivity, liquid resistivity, total dissolved solids, salinity and temperature . Datalogger, stores the maximum, minimum, average value and can store up to 20,000 sets of three measurements. USB output for data transfer in real time to a PC or printer. Functions: REL, HOLD and auto power off which can be disabled, IP 67 protection degree.",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of water analysis."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2156_manual_ENG.pdf",
        "datasheets": [
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2156_manual_ENG.pdf"
          },
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2156.1_2_datasheet_ENG.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd2156-2-phmeter-conductivity-thermometer-data-logger-2.jpg"
      },
      {
        "slug": "hd22-2-hd22-3-electrode-holder",
        "title": "HD22.2 - HD22.3 - Electrode Holder",
        "sourceUrl": "https://environmental.senseca.com/product/hd22-2-hd22-3-electrode-holder/",
        "tagline": "Please note that these products have been discontinued . Datasheet is still accessible in the download tab.",
        "intro": "Please note that these products have been discontinued . Datasheet is still accessible in the download tab.",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of water analysis."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM-HD22.2-22.3-ELECTRODE HOLDER-datasheet-en.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM-HD22.2-22.3-ELECTRODE HOLDER-datasheet-en.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd22-2-hd22-3-electrode-holder.jpg"
      },
      {
        "slug": "hd2205-2-bench-top-phmeter-thermometer-2",
        "title": "HD2205.2 – Bench-Top pHmeter-Thermometer",
        "sourceUrl": "https://environmental.senseca.com/product/hd2205-2-bench-top-phmeter-thermometer-2/",
        "tagline": "Please note that this product has been discontinued.",
        "intro": "Please note that this product has been discontinued.",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of water analysis."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2205.2_datasheet_ENG.pdf",
        "datasheets": [
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2205.2_datasheet_ENG.pdf"
          },
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2205.2_HD2206.2_HD2256.2_manual_ENG.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd2205-2-bench-top-phmeter-thermometer-2.jpg"
      },
      {
        "slug": "hd2206-2-bench-top-conductivity-meter-2",
        "title": "HD2206.2 – Bench Top Conductivity Meter",
        "sourceUrl": "https://environmental.senseca.com/product/hd2206-2-bench-top-conductivity-meter-2/",
        "tagline": "Please note that this product has been discontinued.",
        "intro": "Please note that this product has been discontinued.",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of water analysis."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2205.2_HD2206.2_HD2256.2_manual_ENG.pdf",
        "datasheets": [
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2205.2_HD2206.2_HD2256.2_manual_ENG.pdf"
          },
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM-2206.2-bench-top-conductivity-datasheet-en.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd2206-2-bench-top-conductivity-meter-2.jpg"
      },
      {
        "slug": "hd2256-2-bench-top-phmeter-conductivity-2",
        "title": "HD2256.2 – Bench Top pHmeter-Conductivity",
        "sourceUrl": "https://environmental.senseca.com/product/hd2256-2-bench-top-phmeter-conductivity-2/",
        "tagline": "Please note that this product has been discontinued.",
        "intro": "Please note that this product has been discontinued.",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of water analysis."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2205.2_HD2206.2_HD2256.2_manual_ENG.pdf",
        "datasheets": [
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2205.2_HD2206.2_HD2256.2_manual_ENG.pdf"
          },
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM-HD2256.2-benchtop-ph-conductivity-datasheet-en.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd2256-2-bench-top-phmeter-conductivity-2.jpg"
      },
      {
        "slug": "hd22569-2-electrochemical-measurement-2",
        "title": "HD22569.2 – Electrochemical Measurement",
        "sourceUrl": "https://environmental.senseca.com/product/hd22569-2-electrochemical-measurement-2/",
        "tagline": "Please note that this product has been discontinued.",
        "intro": "Please note that this product has been discontinued.",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of water analysis."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2259_HD22569_manual_ENG.pdf",
        "datasheets": [
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2259_HD22569_manual_ENG.pdf"
          },
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM-HD22569.2-datasheet-en.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd22569-2-electrochemical-measurement-2.jpg"
      },
      {
        "slug": "hd2305-0-phmeter-thermometer-2",
        "title": "HD2305.0 – pHmeter-Thermometer",
        "sourceUrl": "https://environmental.senseca.com/product/hd2305-0-phmeter-thermometer-2/",
        "tagline": "pHmeter-Thermometer which measures pH, mV and temperature. Storage of maximum, minimum, average value.",
        "intro": "pHmeter-Thermometer which measures pH, mV and temperature. Storage of maximum, minimum, average value. Functions: REL, HOLD and auto power off which can be disabled, IP 67 protection degree. Complete with carrying case, instruction manual, 3 batteries. Electrodes, calibration solutions and temperature probes TP87 and TP47… series with SICRAM module have to be ordered separately.",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of water analysis."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2305.0_manual_ENG.pdf",
        "datasheets": [
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2305.0_manual_ENG.pdf"
          },
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2305.0_datasheet_ENG.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd2305-0-phmeter-thermometer-2.jpg"
      },
      {
        "slug": "hd2306-0-conductivity-thermometer-2",
        "title": "HD2306.0 – Conductivity-Thermometer",
        "sourceUrl": "https://environmental.senseca.com/product/hd2306-0-conductivity-thermometer-2/",
        "tagline": "Conductivity-Thermometer measures conductivity, liquid resistivity, total dissolved solids, salinity and temperature .",
        "intro": "Conductivity-Thermometer measures conductivity, liquid resistivity, total dissolved solids, salinity and temperature . Storage of maximum, minimum, average value. Functions: REL, HOLD and auto power off which can be disabled, IP 67 protection degree. Complete with carrying case, instruction manual, 3 batteries.",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of water analysis."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2306.0_manual_ENG.pdf",
        "datasheets": [
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2306.0_manual_ENG.pdf"
          },
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM_HD2306.0_datasheet_ENG.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd2306-0-conductivity-thermometer-2.jpg"
      },
      {
        "slug": "hd25-2-portable-and-bench-turbidity-meter-2",
        "title": "HD25.2 – Portable and Bench Turbidity Meter",
        "sourceUrl": "https://environmental.senseca.com/product/hd25-2-portable-and-bench-turbidity-meter-2/",
        "tagline": "Please note that this product has been discontinued . Manual, datasheet and software are still accessible in the download tab.",
        "intro": "Please note that this product has been discontinued . Manual, datasheet and software are still accessible in the download tab.",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of water analysis."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM-HD25.2-Turbidity-meter-manual-en.pdf",
        "datasheets": [
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM-HD25.2-Turbidity-meter-manual-en.pdf"
          },
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM-HD25.2-Turbidity-meter-datasheet-en.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd25-2-portable-and-bench-turbidity-meter-2.jpg"
      },
      {
        "slug": "hd9609k-ph-mv-simulator-kit-2",
        "title": "HD9609K – pH/mV Simulator Kit",
        "sourceUrl": "https://environmental.senseca.com/product/hd9609k-ph-mv-simulator-kit-2/",
        "tagline": "Please note that this product has been discontinued. In the download section, manual and datasheet are still available.",
        "intro": "Please note that this product has been discontinued. In the download section, manual and datasheet are still available.",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of water analysis."
        ],
        "datasheetHref": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM-HD9609K-ph-simulator-manual-en.pdf",
        "datasheets": [
          {
            "label": "Manual",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM-HD9609K-ph-simulator-manual-en.pdf"
          },
          {
            "label": "Datasheet",
            "url": "https://environmental.senseca.com/wp-content/uploads/document/DeltaOHM-HD9606K-ph-simulator-datasheet-en.pdf"
          }
        ],
        "imageSrc": "/graphics/senseca/hd9609k-ph-mv-simulator-kit-2.jpg"
      },
      {
        "slug": "spt401-001-w-industrial-conductivity-probe",
        "title": "SPT401.001/W – Industrial conductivity probe",
        "sourceUrl": "https://environmental.senseca.com/product/spt401-001-w-industrial-conductivity-probe/",
        "tagline": "Please note that this product has been discontinued .",
        "intro": "Please note that this product has been discontinued .",
        "specifications": [],
        "features": [],
        "applications": [
          "Monitoring and measurement of water analysis."
        ],
        "datasheets": [],
        "imageSrc": "/graphics/senseca/spt401-001-w-industrial-conductivity-probe.jpg"
      }
    ]
  }
] as const;

export const sensecaProducts: SalesProduct[] = sensecaCatalog.flatMap((category) =>
  category.products.map((item) => ({
    ...item,
    category: category.title,
    categoryId: category.id
  }))
);
