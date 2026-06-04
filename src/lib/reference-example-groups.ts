/** Skupiny příkladů zakázek na /reference — accordion jako u služeb a provozů. */

export type ReferenceExampleGroup = {
  id: string;
  title: string;
  intro: string;
  exampleIds: readonly string[];
};

export const referenceExampleGroups: ReferenceExampleGroup[] = [
  {
    id: "mereni-emisi",
    title: "Měření emisí",
    intro:
      "Kotelny, lakovny, bioplyn i kogenerace — protokoly pro plnění podmínek provozu a komunikaci s úřadem.",
    exampleIds: ["lak-automotive-emise", "bps-emise", "bps-serie-emise", "plyn-kotelna-emise"]
  },
  {
    id: "pracovni-prostredi",
    title: "Měření pracovního prostředí",
    intro: "Výrobní haly, svařovny a expozice na pracovištích — podklady pro KHS a kategorizaci prací.",
    exampleIds: ["hala-pp", "svarovna-pp"]
  },
  {
    id: "hluk-akustika",
    title: "Hluk a akustika",
    intro: "Venkovní jednotky, VZT a technologie v okolí zástavby — měření i hlukové studie.",
    exampleIds: ["tcp-hluk", "vzt-hluk-studie"]
  },
  {
    id: "studie-posudky",
    title: "Studie a odborné posudky",
    intro: "Rozptyl, hluk a kombinované posouzení záměrů před povolovacím řízením.",
    exampleIds: ["rozptyl-kotelna", "kompost-studie"]
  },
  {
    id: "eia-povolovani",
    title: "EIA a povolovací řízení",
    intro: "Záměry v průmyslu, zemědělství i změny technologií — oznámení a přílohy pro úřad.",
    exampleIds: ["eia-lak", "slevarna-eia", "zjistovaci-zemedelstvi"]
  },
  {
    id: "evidence-dokumentace",
    title: "Evidence a provozní dokumentace",
    intro: "ISPOP, GHG a provozní řády při změně kapacity nebo provozních povinnostech.",
    exampleIds: ["provozni-rad-odpady", "ispop-vice", "ghg-overovani"]
  }
];
