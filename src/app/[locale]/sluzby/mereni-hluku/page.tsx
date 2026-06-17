import { createInlineServicePageExports } from "@/lib/render-inline-service-page";

const czech = {
  slug: "sluzby/mereni-hluku",
  faqCategoryId: "hluk",
  title: "Měření hluku a akustika",
  intro:
    "Stížnost na hluk, kolaudace nebo požadavek úřadu? Provedeme terénní měření i akustické výpočty podle zdrojů hluku a chráněných prostor v okolí.",
  scope: [
    "Změříme LAeq a LAFmax u běžícího provozu v terénu",
    "Posoudíme hluk z dopravy a technologií v areálu",
    "Ověříme účinnost protihlukového opatření po realizaci",
    "Změříme hluk u VZT, tepelných čerpadel a strojoven"
  ],
  whenNeeded: [
    "Probíhá stavební řízení nebo kolaudace",
    "Řešíte stížnost na hluk z provozu",
    "Potřebujete hlukovou studii pro EIA nebo změnu záměru",
    "Posuzujete hluk tepelného čerpadla, VZT, chlazení nebo průmyslového areálu"
  ],
  practicalSituations: [
    "měření hluku pro kolaudaci nebo změnu užívání",
    "hluková studie pro tepelné čerpadlo, VZT nebo chlazení",
    "hluková studie průmyslového areálu s denním i nočním provozem",
    "ověření stížnosti na hluk z technologie nebo dopravy v areálu",
    "akustické posouzení jako příloha EIA nebo stavebního řízení"
  ],
  docs: [
    "umístění zdrojů hluku a provozní režim",
    "požadavek stavebního úřadu nebo KHS",
    "situace nejbližší chráněné zástavby, doprava a denní/noční režim provozu"
  ],
  outputs: [
    "protokol z měření hluku",
    "akustické vyjádření k technologiím v objektu",
    "hluková studie s doporučením opatření"
  ],
  commonMistakes: [
    "Měření v nevhodném čase nebo bez zohlednění provozního režimu",
    "Záměna měření a výpočtové studie u nového záměru",
    "Neúplný popis zdrojů hluku a provozního režimu"
  ],
  relatedLinks: [
    {
      title: "VZT, chlazení a tepelná čerpadla",
      href: "/provozy-a-technologie/tepelna-cerpadla-vzt",
      description: "Hluk venkovních jednotek, technologie, kolaudace a stížnosti okolí."
    },
    {
      title: "Rozptylové studie",
      href: "/sluzby/rozptylove-studie",
      description: "Navazující posouzení ovzduší u průmyslových a dopravních záměrů."
    },
    {
      title: "EIA a oznámení záměru",
      href: "/sluzby/eia-oznameni-zameru",
      description: "Koordinace hlukové studie s dalšími podklady pro povolovací proces."
    }
  ]
};

const { generateMetadata, Page } = createInlineServicePageExports("mereni-hluku", czech);
export { generateMetadata };
export default Page;
