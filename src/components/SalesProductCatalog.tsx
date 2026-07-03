import { SalesCountBadge } from "@/components/SalesCountBadge";

import { SalesProductList } from "@/components/SalesProductList";

import { ServiceIcon } from "@/components/ServiceIcon";

import type { SalesBrand, SalesProduct } from "@/lib/sales-types";

import { getPcfCategoryLabel } from "@/lib/pcf-category-labels";

import { getPcfSubcategoryLabel } from "@/lib/pcf-subcategory-labels";

import { getSensecaCategoryLabel } from "@/lib/senseca-category-labels";

import { getPcfCategoryIconKey, getSensecaCategoryIconKey } from "@/lib/sales-category-icons";

import type { Locale } from "@/lib/i18n/locales";



type Props = {

  brand: SalesBrand;

  locale: Locale;

  ctaLabel: string;

  productCountLabel: (count: number) => string;

  /** Show only products from this category (dedicated category page). */
  categoryId?: string;

  /** Hide per-category section headers (category page has its own hero). */
  hideCategoryHeader?: boolean;

};



function groupProducts(products: readonly SalesProduct[]) {

  const groups = new Map<string, { categoryId?: string; category: string; items: SalesProduct[] }>();



  for (const product of products) {

    const key = product.categoryId ?? product.category;

    const existing = groups.get(key);

    if (existing) {

      existing.items.push(product);

      continue;

    }

    groups.set(key, {

      categoryId: product.categoryId,

      category: product.category,

      items: [product]

    });

  }



  return [...groups.values()];

}



function groupBySubcategory(products: SalesProduct[]) {

  const withSub = products.filter((p) => p.subcategory);

  if (withSub.length === 0) return [{ title: null as string | null, items: products }];



  const map = new Map<string, SalesProduct[]>();

  for (const product of products) {

    const key = product.subcategory ?? "";

    const list = map.get(key) ?? [];

    list.push(product);

    map.set(key, list);

  }



  return [...map.entries()].map(([title, items]) => ({ title: title || null, items }));

}



export function SalesProductCatalog({
  brand,
  locale,
  ctaLabel,
  productCountLabel,
  categoryId,
  hideCategoryHeader = false
}: Props) {

  const products = categoryId
    ? brand.products.filter((product) => product.categoryId === categoryId)
    : brand.products;

  const groups = groupProducts(products);

  const isSenseca = brand.slug === "senseca";



  return (

    <div className="sales-product-catalog">

      {groups.map((group) => {

        const categoryTitle = isSenseca
          ? getSensecaCategoryLabel(group.categoryId, locale, group.category)
          : getPcfCategoryLabel(group.categoryId, locale, group.category);

        const subgroups = groupBySubcategory(group.items);

        const iconKey = isSenseca
          ? getSensecaCategoryIconKey(group.categoryId)
          : getPcfCategoryIconKey(group.categoryId);



        return (

          <section

            key={group.categoryId ?? group.category}

            id={hideCategoryHeader ? undefined : `sales-cat-${group.categoryId}`}

            className="sales-category-block"

          >

            {!hideCategoryHeader ? (
            <header className="sales-category-band">

              <div className="sales-category-band-main">

                <ServiceIcon icon={iconKey} variant="inline" size={24} className="sales-category-band-icon" />

                <h3 className="sales-category-title">{categoryTitle}</h3>

              </div>

              <SalesCountBadge>{productCountLabel(group.items.length)}</SalesCountBadge>

            </header>
            ) : null}

            {subgroups.map((subgroup) => {

              const subgroupTitle = subgroup.title

                ? getPcfSubcategoryLabel(subgroup.title, locale) ?? subgroup.title

                : null;



              return (

                <div key={subgroup.title ?? "default"} className="sales-subcategory-block">

                  {subgroupTitle ? <h4 className="sales-subcategory-title">{subgroupTitle}</h4> : null}

                  <SalesProductList
                    brandSlug={brand.slug}
                    locale={locale}
                    products={subgroup.items}
                    ctaLabel={ctaLabel}
                    subcategoryLabel={
                      subgroup.title
                        ? undefined
                        : (subcategory) =>
                            getPcfSubcategoryLabel(subcategory, locale) ?? subcategory
                    }
                  />

                </div>

              );

            })}

          </section>

        );

      })}

    </div>

  );

}

