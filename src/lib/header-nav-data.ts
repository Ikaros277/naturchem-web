import type { Messages } from "@/lib/i18n/get-messages";
import type { ONasMegaMenuGroup, ServiceMegaMenuGroup } from "@/lib/megamenu-types";

export type HeaderLabels = Messages["header"];

export type HeaderNavLink = {
  readonly href: string;
  readonly label: string;
  readonly description?: string;
};

export type ServiceHeaderMegaGroup = ServiceMegaMenuGroup;

export type ONasHeaderMegaGroup = ONasMegaMenuGroup;

/** @deprecated Use ServiceHeaderMegaGroup or ONasHeaderMegaGroup */
export type HeaderMegaGroup = ServiceHeaderMegaGroup;

export type HeaderClientProps = {
  labels: HeaderLabels;
  headerMainNav: readonly HeaderNavLink[];
  serviceMegaGroups: readonly ServiceHeaderMegaGroup[];
  oNasMegaGroups: readonly ONasHeaderMegaGroup[];
};
