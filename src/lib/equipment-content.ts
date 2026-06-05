export type EquipmentGroup = {
  id: string;
  title: string;
  items: readonly string[];
  serviceHref?: string;
  serviceLabel?: string;
};

export const equipmentGroupAriaVerbs: Record<string, string> = {
  emise: "emise a odběry",
  "pracovni-prostredi": "pracovní prostředí a mikroklima",
  hluk: "hluk, vibrace a akustiku",
  osvetleni: "osvětlení a fyzikální faktory",
  laborator: "laboratorní zázemí"
};

export function equipmentItemCountLabel(count: number): string {
  if (count === 1) return "1 přístroj";
  if (count >= 2 && count <= 4) return `${count} přístroje`;
  return `${count} přístrojů`;
}

export const equipmentSectionHeading = "Jakou techniku používáme?";

export const equipmentSectionIntro =
  "Uvádíme techniku, kterou laboratoř obvykle nasazuje v terénu i v laboratoři.";

export const equipmentGroups: readonly EquipmentGroup[] = [
  {
    id: "emise",
    title: "Emise a odběry ze stacionárních zdrojů",
    serviceHref: "/sluzby/mereni-emisi",
    serviceLabel: "Měření emisí",
    items: [
      "analyzátor plynných složek HORIBA pro CO, SO₂, NO/NO₂ a O₂",
      "FID / TOC / VOC analyzátory typ 2005",
      "přenosný analyzátor spalin AFRISO Multilyzer STX",
      "izokinetická odběrová aparatura APEX MC-170-DIGITAL",
      "souprava pro měření TZL AMS Analytica AIR CUBE HE ISO",
      "odběrové a izokinetické sondy AMS Analytica",
      "integrované izokinetické sondy s Pitotovou trubicí a teplotním čidlem",
      "Pitotovy trubice a převodníky tlakové diference Delta Ohm / Senseca",
      "laboratorní a membránové plynoměry",
      "kalibrátory průtoku SXF2024-6000",
      "Peltierovy chladiče a úpravny vzorku",
      "vyhřívané odběrové hadice",
      "kalibrační plyny pro emisní analyzátory"
    ]
  },
  {
    id: "pracovni-prostredi",
    title: "Pracovní prostředí a mikroklima",
    serviceHref: "/sluzby/pracovni-prostredi",
    serviceLabel: "Měření pracovního prostředí",
    items: [
      "multifunkční měřicí systémy Delta Ohm / Senseca DO9847",
      "teplotní, vlhkostní a tlaková čidla Delta Ohm / Senseca",
      "kulové teploměry pro tepelnou zátěž",
      "anemometry a snímače proudění vzduchu",
      "osobní odběrová čerpadla SKC AirChek",
      "odběrová čerpadla FCG-5H",
      "AIR CUBE COM2-TH",
      "vybavení pro odběry prachu, kovů a chemických látek v pracovním ovzduší"
    ]
  },
  {
    id: "hluk",
    title: "Hluk, vibrace a akustika",
    serviceHref: "/sluzby/mereni-hluku-hlukove-studie",
    serviceLabel: "Měření hluku a akustika",
    items: [
      "zvukoměr SVAN 979",
      "akustický kalibrátor Delta Ohm HD 2020",
      "analyzátor vibrací Delta Ohm HD2030",
      "kalibrátor vibrací Delta Ohm HD2060",
      "zdroj bílého a růžového šumu Ntek OMNI 4 HP",
      "zesilovač AMG mini Ion+"
    ]
  },
  {
    id: "osvetleni",
    title: "Osvětlení a fyzikální faktory",
    serviceHref: "/sluzby/mereni-osvetleni",
    serviceLabel: "Měření osvětlení",
    items: [
      "luxmetr GOSSEN Mavolux 5032 C USB",
      "světelná čidla Delta Ohm LP 471 PHOT / RAD / LUM",
      "laserový čítač částic Trotec PC 200",
      "termokamera FLIR TG267",
      "laserový dálkoměr",
      "provozní anemometry Trotec"
    ]
  },
  {
    id: "laborator",
    title: "Laboratorní a podpůrné zázemí",
    serviceHref: "/sluzby",
    serviceLabel: "Přehled služeb",
    items: [
      "analytické váhy RADWAG AS 62.R2",
      "kalibrační závaží KERN & Sohn",
      "sušárna Memmert UM200",
      "exsikátory pro sušení filtrů",
      "ultrazvuková lázeň",
      "odměrné laboratorní sklo",
      "laboratorní vymražovací zařízení",
      "vybavení pro transport, přípravu a ochranu vzorků"
    ]
  }
];
