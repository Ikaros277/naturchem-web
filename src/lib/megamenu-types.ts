export type MegaMenuLink = {
  href: string;
  label: string;
};

export type MegaMenuGroup = {
  title: string;
  links: readonly MegaMenuLink[];
};
