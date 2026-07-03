import type { Locale } from "@/lib/i18n/locales";
import type { SalesProduct, SalesProductSpec } from "@/lib/sales-types";
import { getPcfSpecLabel } from "@/lib/pcf-spec-labels";
import { getPcfSpecValue } from "@/lib/pcf-spec-values";

export type PcfProductTranslation = {
  title: string;
  tagline: string;
  intro: string;
  features: string[];
  applications: string[];
};

function localizeSpecs(specs: readonly SalesProductSpec[], locale: Locale): SalesProductSpec[] {
  return specs.map((row) => ({
    label: getPcfSpecLabel(row.label, locale),
    value: getPcfSpecValue(row.value, locale)
  }));
}

function mergeProductTranslation(
  product: SalesProduct,
  locale: Locale,
  translation: PcfProductTranslation | undefined
): SalesProduct {
  if (locale === "en" || !translation) {
    return {
      ...product,
      specifications: localizeSpecs(product.specifications, locale)
    };
  }

  return {
    ...product,
    title: translation.title,
    tagline: translation.tagline,
    intro: translation.intro,
    features: translation.features,
    applications: translation.applications,
    specifications: localizeSpecs(product.specifications, locale)
  };
}

export function localizePcfProducts(
  products: readonly SalesProduct[],
  locale: Locale,
  translations: Record<string, PcfProductTranslation>
): SalesProduct[] {
  return products.map((product) => mergeProductTranslation(product, locale, translations[product.slug]));
}
