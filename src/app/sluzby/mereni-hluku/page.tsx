import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Měření hluku a akustika",
  description:
    "Měření hluku v terénu, hlukové studie, hluk z dopravy a technologií. Kolaudace, EIA, stavební řízení.",
  alternates: { canonical: `${siteUrl}/sluzby/mereni-hluku/` }
};

export default function Page() {
  return (
    <ServicePage
      slug="sluzby/mereni-hluku"
      faqCategoryId="hluk"
      title="Měření hluku a akustika"
      intro="Terénní měření hluku a akustické výpočty pro kolaudaci, EIA, požadavky KHS a řešení stížností. Rozsah stanovujeme podle zdrojů, provozního režimu a chráněných prostor v okolí."
      scope={[
        "terénní měření LAeq a LAFmax u běžícího provozu",
        "hluk z dopravy a technologií v areálu",
        "ověření účinnosti protihlukového opatření po realizaci",
        "měření u VZT, tepelných čerpadel a strojoven"
      ]}
      forWhom={[
        "investoři a stavební projektanti (kolaudace, změny užívání)",
        "provozovatelé areálů řešících stížnosti okolí nebo limity HLUK",
        "záměry s podkladem pro KHS, stavební úřad nebo EIA"
      ]}
      whenNeeded={[
        "stavební řízení nebo kolaudace",
        "stížnost na hluk z provozu",
        "hluková studie pro EIA nebo změnu záměru",
        "hluková studie pro tepelné čerpadlo, VZT, chlazení nebo průmyslový areál"
      ]}
      authorities={[
        "KHS při posouzení hlukové zátěže a požadavcích na kolaudaci",
        "stavební úřad u novostaveb, změn užívání a technologických instalací",
        "EIA a zjišťovací řízení, kde je hluk jedním z klíčových vlivů záměru"
      ]}
      practicalSituations={[
        "měření hluku pro kolaudaci nebo změnu užívání",
        "hluková studie pro tepelné čerpadlo, VZT nebo chlazení",
        "hluková studie průmyslového areálu s denním i nočním provozem",
        "ověření stížnosti na hluk z technologie nebo dopravy v areálu",
        "akustické posouzení jako příloha EIA nebo stavebního řízení"
      ]}
      docs={[
        "umístění zdrojů hluku a provozní režim",
        "požadavek stavebního úřadu nebo KHS",
        "situace nejbližší chráněné zástavby, doprava a denní/noční režim provozu"
      ]}
      outputs={[
        "protokol z měření hluku",
        "akustické vyjádření k technologiím v objektu",
        "hluková studie s doporučením opatření"
      ]}
      commonMistakes={[
        "měření v nevhodném čase nebo bez zohlednění provozního režimu",
        "záměna měření a výpočtové studie u nového záměru",
        "neúplný popis zdrojů hluku a provozního režimu"
      ]}
      relatedLinks={[
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
      ]}
    />
  );
}
