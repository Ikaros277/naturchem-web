import type { Messages } from "@/lib/i18n/get-messages";
import type { ServiceMegaGroupId } from "@/lib/megamenu-types";

export type HeaderLabels = Messages["header"];

export type HeaderNavLink = {
  readonly href: string;
  readonly label: string;
  readonly description?: string;
};

export type HeaderMegaGroup = {
  readonly id?: ServiceMegaGroupId;
  readonly title: string;
  readonly subtitle?: string;
  readonly links: readonly HeaderNavLink[];
};

export type HeaderClientProps = {
  labels: HeaderLabels;
  headerMainNav: readonly HeaderNavLink[];
  serviceMegaGroups: readonly HeaderMegaGroup[];
  oNasMegaGroups: readonly HeaderMegaGroup[];
};
