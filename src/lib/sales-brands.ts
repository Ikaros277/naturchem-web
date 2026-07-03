import { pcfElettronicaProducts } from "@/lib/pcf-elettronica-catalog";
import { localizePcfProducts } from "@/lib/pcf-elettronica-product-localize";
import { pcfProductTranslationsCs } from "@/lib/pcf-elettronica-products-cs";
import type { SalesBrand, SalesContent, SalesHubContent } from "@/lib/sales-types";

export const pcfElettronicaBrand: SalesBrand = {
  slug: "pcf-elettronica",
  name: "PCF Elettronica",
  legalName: "PCF Elettronica S.r.l.",
  website: "https://www.pcfelettronica.it/",
  logoSrc: "/graphics/brands/pcf-elettronica.png",
  heroTheme: "prodej-pcf-elettronica",
  tagline: "Analytické přístroje pro VOC, THC a měření emisí",
  introParagraphs: [
    "Italský výrobce PCF Elettronica S.r.l. vyvíjí a vyrábí analyzátory a monitory organických látek ve vzduchu již od roku 1985. Přístroje využívají detektory FID, PID a TCD a jsou určeny pro laboratoře, emisní měření i průmyslové provozy.",
    "V nabídce najdete stacionární analyzátory kvality ovzduší, emisní monitory, přenosné FID přístroje s ohřátým odběrem, procesní GC analyzátory a kompletní příslušenství — sondy, ohřáté linky, generátory nulového vzduchu a kalibrátory.",
    "V České republice pomůžeme s výběrem konfigurace, dodáním a návazností na akreditovaná měření NATURCHEM."
  ],
  offerItems: [
    "Konzultace výběru přístroje podle měřeného parametru, normy a provozních podmínek",
    "Cenová nabídka včetně příslušenství a kalibračních směsí",
    "Koordinace dodání, uvedení do provozu a servisních kontaktů výrobce",
    "Propojení s našimi službami akreditovaného měření emisí a kvality ovzduší"
  ],
  products: localizePcfProducts(pcfElettronicaProducts, "cs", pcfProductTranslationsCs)
};

export const salesHubContent: SalesHubContent = {
  pageTitle: "Prodej přístrojů a příslušenství",
  metaTitle: "Prodej laboratorních přístrojů | NATURCHEM",
  metaDescription:
    "Analytické přístroje PCF Elettronica pro VOC, THC, emisní měření a laboratorní příslušenství. Konzultace, nabídka a podpora v ČR.",
  eyebrow: "Nabídka měřicí techniky",
  lead: "Analytické přístroje a laboratorní příslušenství pro měření VOC, THC a souvisejících parametrů — s odborným zázemím akreditovaného měřicího střediska.",
  introHeading: "",
  introParagraphs: [],
  highlights: [],
  categoriesHeading: "Kategorie přístrojů PCF Elettronica",
  categoriesLead:
    "Kompletní portfolio výrobce rozdělené podle účelu měření. U každého modelu najdete technické parametry, datové listy a odkaz na stránku výrobce.",
  cooperationHeading: "Jak probíhá poptávka",
  cooperationLead: "Tři kroky od popisu požadavku po dodání přístroje.",
  cooperationSteps: [
    {
      title: "Popište požadavek",
      text: "Uveďte měřený parametr, normu, typ zdroje nebo přiložte výzvu úřadu. Pomůže i stručný popis provozu."
    },
    {
      title: "Navrhneme řešení",
      text: "Doporučíme vhodný přístroj, příslušenství a orientační dodací lhůtu. Připravíme cenovou nabídku."
    },
    {
      title: "Dodání a podpora",
      text: "Zkoordinujeme dodání, uvedení do provozu a servisní kontakty. V případě potřeby zajistíme i akreditované měření."
    }
  ],
  brandsHeading: "Výrobce v nabídce",
  distributorNote: "",
  schemaName: "Prodej laboratorních přístrojů NATURCHEM"
};

export const salesContentCs: SalesContent = {
  hub: salesHubContent,
  brands: [pcfElettronicaBrand]
};

export function getSalesBrand(slug: string, brands: readonly SalesBrand[]): SalesBrand | undefined {
  return brands.find((brand) => brand.slug === slug);
}

export function getSalesProduct(
  brandSlug: string,
  productSlug: string,
  brands: readonly SalesBrand[]
): { brand: SalesBrand; product: SalesBrand["products"][number] } | undefined {
  const brand = getSalesBrand(brandSlug, brands);
  if (!brand) return undefined;
  const product = brand.products.find((item) => item.slug === productSlug);
  if (!product) return undefined;
  return { brand, product };
}

export function getAllSalesProductParams(brands: readonly SalesBrand[]) {
  return brands.flatMap((brand) =>
    brand.products.map((product) => ({ brand: brand.slug, product: product.slug }))
  );
}
