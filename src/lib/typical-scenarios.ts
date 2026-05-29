import { contactUrl } from "@/lib/contact-url";

export type TypicalScenario = {
  title: string;
  narrative: string;
  learnMoreHref: string;
  ctaLabel: string;
  ctaHref: string;
};

/**
 * Příklady zakázek z praxe — každá karta odkazuje na detail služby a na poptávku s rozumnou předvolbou.
 */
export const typicalScenarios: TypicalScenario[] = [
  {
    title: "Potřebuji změřit emise z lakovny",
    narrative:
      "Měříme VOC/TOC, TZL a související parametry z výduchů a filtrace, ověřujeme reprezentativní provozní režim a předáváme protokol pro provoz i orgány ochrany ovzduší.",
    learnMoreHref: "/sluzby/mereni-emisi",
    ctaLabel: "Poptat měření",
    ctaHref: contactUrl("Měření emisí")
  },
  {
    title: "Potřebuji měření kotelny nebo spalovacího zdroje",
    narrative:
      "Periodická i provozní měření kotelen, hořáků, kogenerací a dalších zdrojů s protokolem pro povolení provozu, úřad nebo ISPOP.",
    learnMoreHref: "/sluzby/mereni-emisi",
    ctaLabel: "Poptat měření",
    ctaHref: contactUrl("Měření emisí")
  },
  {
    title: "Potřebuji rozptylovou studii pro nový nebo měněný zdroj",
    narrative:
      "Modelování imisních příspěvků pro povolování, změnu kapacity, EIA nebo jednání s krajským úřadem.",
    learnMoreHref: "/sluzby/rozptylove-studie",
    ctaLabel: "Poptat studii / posudek",
    ctaHref: contactUrl("Rozptylové studie")
  },
  {
    title: "Potřebuji hlukovou studii pro provoz, stavbu nebo technologii",
    narrative:
      "Výpočet a vyhodnocení hluku pro areály, VZT, tepelná čerpadla, průmyslové zdroje nebo stavební řízení.",
    learnMoreHref: "/sluzby/hlukove-studie",
    ctaLabel: "Poptat studii / posudek",
    ctaHref: contactUrl("Hlukové studie")
  },
  {
    title: "Potřebuji podklady pro KHS",
    narrative:
      "Měření pracovního prostředí — prašnost, chemické látky, hluk, mikroklima — pro kategorizaci prací, dokumentaci BOZP nebo výzvu hygieny.",
    learnMoreHref: "/sluzby/pracovni-prostredi",
    ctaLabel: "Poptat měření",
    ctaHref: contactUrl("Měření pracovního prostředí")
  },
  {
    title: "Potřebuji podklady pro krajský úřad nebo ČIŽP",
    narrative:
      "Protokoly z měření emisí, studie, odborné posudky a provozní dokumentace sladíme s výzvou nebo integrovaným povolením.",
    learnMoreHref: "/sluzby/mereni-emisi",
    ctaLabel: "Poslat podklady k posouzení",
    ctaHref: contactUrl("Nejsem si jistý")
  },
  {
    title: "Potřebuji oznámení EIA",
    narrative:
      "Oznámení záměru, odborné přílohy a vstupy pro zjišťovací řízení držíme pohromadě s měřením, studiemi a projektovou dokumentací.",
    learnMoreHref: "/sluzby/eia-oznameni-zameru",
    ctaLabel: "Poptat studii / posudek",
    ctaHref: contactUrl("EIA a oznámení záměru")
  },
  {
    title: "Potřebuji provozní řád nebo odborný posudek",
    narrative:
      "Zpracování podle zákona o ochraně ovzduší, návaznost na měření a provoz, výstupy pro správní řízení a změny technologie.",
    learnMoreHref: "/sluzby/provozni-rady",
    ctaLabel: "Poptat studii / posudek",
    ctaHref: contactUrl("Provozní řády")
  },
  {
    title: "Potřebuji vyřešit ISPOP",
    narrative:
      "Souhrnná provozní evidence, kontrola údajů vůči měření a povolení, příprava podkladů pro hlášení.",
    learnMoreHref: "/sluzby/ispop",
    ctaLabel: "Poptat službu",
    ctaHref: contactUrl("ISPOP")
  },
  {
    title: "Potřebuji proškolit zaměstnance k chemickým látkám",
    narrative:
      "Praktické školení chemické legislativy pro provoz, sklad, výrobu nebo laboratoř se zaměřením na bezpečnostní listy, označování, skladování a provozní pravidla.",
    learnMoreHref: "/sluzby/skoleni-chemicke-legislativy",
    ctaLabel: "Poptat školení",
    ctaHref: contactUrl("Školení chemického zákona / chemické legislativy")
  },
  {
    title: "Potřebuji posoudit, co po nás vlastně úřad chce",
    narrative:
      "Pošlete výzvu nebo rozhodnutí. Rozlišíme, co je nutné doložit hned, co lze doplnit později a jaké termíny je potřeba hlídat.",
    learnMoreHref: "/faq",
    ctaLabel: "Nechat posoudit rozsah zakázky",
    ctaHref: contactUrl("Nejsem si jistý")
  }
];
