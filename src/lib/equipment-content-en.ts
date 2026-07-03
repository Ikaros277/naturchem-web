export type EquipmentGroup = {
  id: string;
  title: string;
  items: readonly string[];
  serviceHref?: string;
  serviceLabel?: string;
};

export const equipmentGroupAriaVerbs: Record<string, string> = {
  emise: "emissions and sampling",
  "pracovni-prostredi": "workplace environment and microclimate",
  hluk: "noise, vibration and acoustics",
  osvetleni: "lighting and physical factors",
  laborator: "laboratory facilities"
};

export function equipmentItemCountLabel(count: number): string {
  if (count === 1) return "1 instrument";
  return `${count} instruments`;
}

export const equipmentSectionHeading = "What equipment do we use?";

export const equipmentSectionIntro =
  "We list the equipment the laboratory typically deploys in the field and in the laboratory.";

export const equipmentGroups: readonly EquipmentGroup[] = [
  {
    id: "emise",
    title: "Emissions and sampling from stationary sources",
    serviceHref: "/sluzby/mereni-emisi",
    serviceLabel: "Emission measurements",
    items: [
      "HORIBA gas component analyser for CO, SO₂, NO/NO₂ and O₂",
      "FID / TOC / VOC analysers type 2005",
      "portable flue gas analyser AFRISO Multilyzer STX",
      "isokinetic sampling equipment APEX MC-170-DIGITAL",
      "particulate matter measurement set AMS Analytica AIR CUBE HE ISO",
      "sampling and isokinetic probes AMS Analytica",
      "integrated isokinetic probes with Pitot tube and temperature sensor",
      "Pitot tubes and pressure differential transducers (Delta OHM)",
      "laboratory and membrane gas meters",
      "flow calibrators SXF2024-6000",
      "Peltier coolers and sample conditioning units",
      "heated sampling hoses",
      "calibration gases for emission analysers"
    ]
  },
  {
    id: "pracovni-prostredi",
    title: "Workplace environment and microclimate",
    serviceHref: "/sluzby/pracovni-prostredi",
    serviceLabel: "Workplace environment measurements",
    items: [
      "multifunction measurement systems Delta OHM DO9847",
      "temperature, humidity and pressure sensors Delta OHM",
      "globe thermometers for thermal load",
      "anemometers and air flow sensors",
      "personal sampling pumps SKC AirChek",
      "sampling pumps FCG-5H",
      "AIR CUBE COM2-TH",
      "equipment for sampling dust, metals and chemical substances in workplace air"
    ]
  },
  {
    id: "hluk",
    title: "Noise, vibration and acoustics",
    serviceHref: "/sluzby/mereni-hluku-hlukove-studie",
    serviceLabel: "Noise measurement and acoustics",
    items: [
      "sound level meter SVAN 979",
      "acoustic calibrator Delta OHM HD 2020",
      "vibration analyser Delta OHM HD2030",
      "vibration calibrator Delta OHM HD2060",
      "white and pink noise source Ntek OMNI 4 HP",
      "amplifier AMG mini Ion+"
    ]
  },
  {
    id: "osvetleni",
    title: "Lighting and physical factors",
    serviceHref: "/sluzby/mereni-osvetleni",
    serviceLabel: "Lighting measurements",
    items: [
      "lux meter GOSSEN Mavolux 5032 C USB",
      "light sensors Delta OHM LP 471 PHOT / RAD / LUM",
      "laser particle counter Trotec PC 200",
      "thermal camera FLIR TG267",
      "laser distance meter",
      "operational anemometers Trotec"
    ]
  },
  {
    id: "laborator",
    title: "Laboratory and supporting facilities",
    serviceHref: "/sluzby",
    serviceLabel: "Services overview",
    items: [
      "analytical balances RADWAG AS 62.R2",
      "calibration weights KERN & Sohn",
      "drying oven Memmert UM200",
      "desiccators for filter drying",
      "ultrasonic bath",
      "volumetric laboratory glassware",
      "laboratory freeze-drying equipment",
      "equipment for sample transport, preparation and protection"
    ]
  }
];
