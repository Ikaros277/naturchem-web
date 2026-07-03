export type SalesProductSpec = {
  label: string;
  value: string;
};

export type SalesProduct = {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  categoryId?: string;
  subcategory?: string;
  sourceUrl?: string;
  imageSrc?: string;
  intro: string;
  specifications: SalesProductSpec[];
  features: string[];
  applications: string[];
  datasheetHref?: string;
  datasheets?: { label: string; url: string }[];
};

export type SalesBrand = {
  slug: string;
  name: string;
  legalName?: string;
  website: string;
  logoSrc?: string;
  heroTheme: string;
  tagline: string;
  introParagraphs: string[];
  offerItems: string[];
  partnershipRole?: string;
  categoriesHeading?: string;
  categoriesLead?: string;
  products: SalesProduct[];
};

export type SalesCooperationStep = {
  title: string;
  text: string;
};

export type SalesHubContent = {
  pageTitle: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  lead: string;
  introHeading: string;
  introParagraphs: string[];
  highlights: string[];
  categoriesHeading: string;
  categoriesLead: string;
  cooperationHeading: string;
  cooperationLead: string;
  cooperationSteps: SalesCooperationStep[];
  brandsHeading: string;
  distributorNote: string;
  schemaName: string;
};

export type SalesContent = {
  hub: SalesHubContent;
  brands: SalesBrand[];
};
