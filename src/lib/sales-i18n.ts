type ProductCountMessages = {
  productCountOne: string;
  productCountFew: string;
  productCountMany: string;
};

export function formatSalesProductCount(count: number, messages: ProductCountMessages): string {
  const template =
    count === 1 ? messages.productCountOne : count >= 2 && count <= 4 ? messages.productCountFew : messages.productCountMany;
  return template.replace("{count}", String(count));
}
