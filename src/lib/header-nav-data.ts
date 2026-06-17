import type { Messages } from "@/lib/i18n/get-messages";

export type HeaderLabels = Messages["header"];

export type HeaderNavLink = {
  readonly href: string;
  readonly label: string;
};

export type HeaderMegaGroup = {
  readonly title: string;
  readonly links: readonly HeaderNavLink[];
};

export type HeaderClientProps = {
  labels: HeaderLabels;
  headerMainNav: readonly HeaderNavLink[];
  serviceMegaGroups: readonly HeaderMegaGroup[];
  oNasMegaGroups: readonly HeaderMegaGroup[];
};
