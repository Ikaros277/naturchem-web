export type EquipmentGroup = {
  id: string;
  title: string;
  items: readonly string[];
  serviceHref?: string;
  serviceLabel?: string;
};

export const equipmentGroupAriaVerbs: Record<string, string> = {
  emise: "Emissionen und Probenahme",
  "pracovni-prostredi": "Arbeitsplatzumgebung und Mikroklima",
  hluk: "Lärm, Vibration und Akustik",
  osvetleni: "Beleuchtung und physikalische Faktoren",
  laborator: "Laboreinrichtungen"
};

export function equipmentItemCountLabel(count: number): string {
  if (count === 1) return "1 Instrument";
  return `${count} instruments`;
}

export const equipmentSectionHeading = "Welche Ausrüstung verwenden wir?";

export const equipmentSectionIntro =
  "Wir listen die Geräte auf, die das Labor typischerweise im Feld und im Labor einsetzt.";

export const equipmentGroups: readonly EquipmentGroup[] = [
  {
    id: "emise",
    title: "Emissionen und Probenahme aus stationären Quellen",
    serviceHref: "/sluzby/mereni-emisi",
    serviceLabel: "Emissionsmessungen",
    items: [
      "HORIBA Gaskomponentenanalysator für CO, SO₂, NO/NO₂ und O₂",
      "FID-/TOC-/VOC-Analysatoren Typ 2005",
      "Tragbares Rauchgasanalysegerät AFRISO Multilyzer STX",
      "isokinetische Probenahmeausrüstung APEX MC-170-DIGITAL",
      "Feinstaub-Messset AMS Analytica AIR CUBE HE ISO",
      "Probenahme- und isokinetische Sonden AMS Analytica",
      "integrierte isokinetische Sonden mit Staurohr und Temperatursensor",
      "Staurohre und Differenzdruckwandler Delta Ohm / Senseca",
      "Labor- und Membrangaszähler",
      "Durchflusskalibratoren SXF2024-6000",
      "Peltier-Kühler und Probenaufbereitungseinheiten",
      "beheizte Probenahmeschläuche",
      "Kalibriergase für Emissionsanalysatoren"
    ]
  },
  {
    id: "pracovni-prostredi",
    title: "Arbeitsplatzumgebung und Mikroklima",
    serviceHref: "/sluzby/pracovni-prostredi",
    serviceLabel: "Messungen der Arbeitsplatzumgebung",
    items: [
      "Multifunktionsmesssysteme Delta Ohm / Senseca DO9847",
      "Temperatur-, Feuchtigkeits- und Drucksensoren Delta Ohm / Senseca",
      "Globusthermometer für thermische Belastung",
      "Anemometer und Luftströmungssensoren",
      "Persönliche Probenahmepumpen SKC AirChek",
      "Probenahmepumpen FCG-5H",
      "AIR CUBE COM2-TH",
      "Geräte zur Probenahme von Staub, Metallen und chemischen Substanzen in der Luft am Arbeitsplatz"
    ]
  },
  {
    id: "hluk",
    title: "Lärm, Vibration und Akustik",
    serviceHref: "/sluzby/mereni-hluku-hlukove-studie",
    serviceLabel: "Lärmmessung und Akustik",
    items: [
      "Schallpegelmesser SVAN 979",
      "Akustischer Kalibrator Delta Ohm HD 2020",
      "Schwingungsanalysator Delta Ohm HD2030",
      "Schwingungskalibrator Delta Ohm HD2060",
      "weiße und rosa Rauschquelle Ntek OMNI 4 HP",
      "Verstärker AMG Mini Ion+"
    ]
  },
  {
    id: "osvetleni",
    title: "Beleuchtung und physikalische Faktoren",
    serviceHref: "/sluzby/mereni-osvetleni",
    serviceLabel: "Beleuchtungsmessungen",
    items: [
      "Luxmeter GOSSEN Mavolux 5032 C USB",
      "Lichtsensoren Delta Ohm LP 471 PHOT / RAD / LUM",
      "Laser-Partikelzähler Trotec PC 200",
      "Wärmebildkamera FLIR TG267",
      "Laser-Entfernungsmesser",
      "Betriebsanemometer Trotec"
    ]
  },
  {
    id: "laborator",
    title: "Labor und unterstützende Einrichtungen",
    serviceHref: "/sluzby",
    serviceLabel: "Leistungsübersicht",
    items: [
      "Analysenwaagen RADWAG AS 62.R2",
      "Kalibriergewichte KERN & Sohn",
      "Trockenofen Memmert UM200",
      "Exsikkatoren zur Filtertrocknung",
      "Ultraschallbad",
      "volumetrische Laborglasgeräte",
      "Laborgeräte zur Gefriertrocknung",
      "Ausrüstung für Probentransport, -vorbereitung und -schutz"
    ]
  }
];
