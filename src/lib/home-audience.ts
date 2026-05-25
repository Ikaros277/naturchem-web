/** Blok „Pro koho pracujeme“ na homepage — typické zákazníci a obvyklé zakázky. */

export type HomeAudienceItem = {
  title: string;
  text: string;
};

export const homeAudienceItems: HomeAudienceItem[] = [
  {
    title: "Průmyslové podniky",
    text:
      "Měření emisí, pracovního prostředí a hluku, rozptylové a hlukové studie, provozní řády a podklady pro změny provozu."
  },
  {
    title: "Provozovatelé zdrojů znečišťování ovzduší",
    text:
      "Periodická a provozní měření, ISPOP, souhrnná provozní evidence, odborné posudky a komunikace s ČIŽP a krajskými úřady."
  },
  {
    title: "Investoři a developeři",
    text:
      "EIA a oznámení záměru, rozptylové a hlukové studie, technické podklady pro povolení a stavební řízení."
  },
  {
    title: "Projektanti",
    text:
      "Výstupy měření a studií jako přílohy dokumentace, odborná vyjádření a návrh rozsahu podkladů pro úřad."
  },
  {
    title: "Energetika",
    text:
      "Měření emisí z kotelen, spaloven a kogenerací, rozptylové studie, GHG a podklady pro změny zdrojů."
  },
  {
    title: "Stavební firmy",
    text:
      "Hluk na stavbě, studie pro technologie na staveništi, podklady pro kolaudaci a jednání se stavebním úřadem."
  },
  {
    title: "Odpadové a recyklační provozy",
    text:
      "Emise ze spaloven a technologií, rozptylové studie, EIA a podklady pro integrovaná povolení."
  },
  {
    title: "Automotive",
    text:
      "Měření emisí a pracovního prostředí, hlukové podklady a řešení technologií ve výrobních halách."
  },
  {
    title: "Veřejný sektor",
    text:
      "Podklady pro záměry obcí a organizací, EIA, měření a studie pro veřejné zakázky a investiční akce."
  },
  {
    title: "Města a obce",
    text:
      "Hlukové a rozptylové podklady, EIA u dopravních a stavebních záměrů, koordinace s krajským úřadem."
  },
  {
    title: "Správci budov a provozovatelé technologií",
    text:
      "Měření hluku VZT a tepelných čerpadel, protokoly pro státní správu, mikroklima a pracovní prostředí v provozech."
  }
];
