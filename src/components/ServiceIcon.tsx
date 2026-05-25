import type { ReactNode } from "react";
import { getServiceIconKey, type ServiceIconKey } from "@/lib/service-icons";

type Props = {
  href?: string;
  icon?: ServiceIconKey;
  size?: number;
  className?: string;
};

function SvgIcon({ size, children }: { size: number; children: ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

/** Ikony odvozené z Lucide (MIT) — jednotný stroke styl, bez externí knihovny. */
const iconGlyphs: Record<ServiceIconKey, (size: number) => ReactNode> = {
  emise: (size) => (
    <SvgIcon size={size}>
      <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
      <path d="M17 18h1" />
      <path d="M12 18h1" />
      <path d="M7 18h1" />
    </SvgIcon>
  ),
  "pracovni-prostredi": (size) => (
    <SvgIcon size={size}>
      <path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z" />
      <path d="M10 10V5a2 2 0 0 1 4 0v5" />
      <path d="M4 15v-3a6 6 0 0 1 6-6" />
      <path d="M14 6a6 6 0 0 1 6 6v3" />
    </SvgIcon>
  ),
  hluk: (size) => (
    <SvgIcon size={size}>
      <path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" />
      <path d="M16 9a5 5 0 0 1 0 6" />
      <path d="M19.364 5.636a9 9 0 0 1 0 12.728" />
    </SvgIcon>
  ),
  vibrace: (size) => (
    <SvgIcon size={size}>
      <path d="M2 8v8" />
      <path d="M6 4v16" />
      <path d="M10 8v8" />
      <path d="M14 4v16" />
      <path d="M18 8v8" />
      <path d="M22 6v12" />
    </SvgIcon>
  ),
  osvetleni: (size) => (
    <SvgIcon size={size}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </SvgIcon>
  ),
  mikroklima: (size) => (
    <SvgIcon size={size}>
      <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />
    </SvgIcon>
  ),
  rozptyl: (size) => (
    <SvgIcon size={size}>
      <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
      <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
      <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
    </SvgIcon>
  ),
  "hlukova-studie": (size) => (
    <SvgIcon size={size}>
      <path d="M2 10v3" />
      <path d="M6 6v11" />
      <path d="M10 8v8" />
      <path d="M14 4v16" />
      <path d="M18 8v8" />
      <path d="M22 10v3" />
    </SvgIcon>
  ),
  akustika: (size) => (
    <SvgIcon size={size}>
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
    </SvgIcon>
  ),
  model: (size) => (
    <SvgIcon size={size}>
      <rect width="16" height="20" x="4" y="2" rx="2" />
      <line x1="8" x2="16" y1="6" y2="6" />
      <line x1="8" x2="16" y1="10" y2="10" />
      <line x1="8" x2="16" y1="14" y2="14" />
      <line x1="8" x2="16" y1="18" y2="18" />
    </SvgIcon>
  ),
  "imis-hluk": (size) => (
    <SvgIcon size={size}>
      <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
      <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
      <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
    </SvgIcon>
  ),
  posudek: (size) => (
    <SvgIcon size={size}>
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10 13H8" />
      <path d="M16 13h-2" />
      <path d="M10 17H8" />
      <path d="M16 17h-2" />
    </SvgIcon>
  ),
  "provozni-rad": (size) => (
    <SvgIcon size={size}>
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="M12 11h4" />
      <path d="M12 16h4" />
      <path d="M8 11h.01" />
      <path d="M8 16h.01" />
    </SvgIcon>
  ),
  povoleni: (size) => (
    <SvgIcon size={size}>
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
      <path d="m9 12 2 2 4-4" />
    </SvgIcon>
  ),
  ippc: (size) => (
    <SvgIcon size={size}>
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </SvgIcon>
  ),
  eia: (size) => (
    <SvgIcon size={size}>
      <path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.555.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .555-.894l4.553-2.277a2 2 0 0 1 1.788 0z" />
      <path d="M15 5.764v15" />
      <path d="M9 3.236v15" />
    </SvgIcon>
  ),
  "zjistovaci-eia": (size) => (
    <SvgIcon size={size}>
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </SvgIcon>
  ),
  investor: (size) => (
    <SvgIcon size={size}>
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </SvgIcon>
  ),
  ispop: (size) => (
    <SvgIcon size={size}>
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14a9 3 0 0 0 18 0V5" />
      <path d="M3 12a9 3 0 0 0 18 0" />
    </SvgIcon>
  ),
  ghg: (size) => (
    <SvgIcon size={size}>
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-7.36 5.08-9.96" />
    </SvgIcon>
  ),
  chemie: (size) => (
    <SvgIcon size={size}>
      <path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2" />
      <path d="M8.5 2h7" />
      <path d="M7 16h10" />
    </SvgIcon>
  ),
  skoleni: (size) => (
    <SvgIcon size={size}>
      <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
      <path d="M22 10v6" />
      <path d="M6 12v5a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-5" />
    </SvgIcon>
  ),
  "bezpecnostni-listy": (size) => (
    <SvgIcon size={size}>
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="m9 15 2 2 4-4" />
    </SvgIcon>
  ),
  "pillar-mereni": (size) => (
    <SvgIcon size={size}>
      <path d="m12 14 4-4" />
      <path d="M3.34 19a10 10 0 1 1 17.32 0" />
    </SvgIcon>
  ),
  "pillar-studie": (size) => (
    <SvgIcon size={size}>
      <path d="M3 3v18h18" />
      <path d="m19 9-5 5-4-4-3 3" />
    </SvgIcon>
  ),
  "pillar-dokumentace": (size) => (
    <SvgIcon size={size}>
      <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="M7 21h10" />
      <path d="M12 3v18" />
      <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2" />
      <path d="M19 7h2c0 2-1 5-2 7-2-1-5-2-7-2" />
    </SvgIcon>
  ),
  "audience-prumysl": (size) => iconGlyphs.emise(size),
  "audience-energetika": (size) => (
    <SvgIcon size={size}>
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </SvgIcon>
  ),
  "audience-investor": (size) => iconGlyphs.investor(size),
  "audience-odpady": (size) => (
    <SvgIcon size={size}>
      <path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5" />
      <path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12" />
      <path d="m14 16-3 3 3 3" />
      <path d="M8.293 13.596 7.196 9.5 3.1 10.598" />
      <path d="m9.344 5.811 1.092-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843" />
      <path d="m13.378 9.633 4.096 1.098 1.097-4.096" />
    </SvgIcon>
  ),
  "audience-verejny": (size) => (
    <SvgIcon size={size}>
      <line x1="3" x2="21" y1="22" y2="22" />
      <line x1="6" x2="6" y1="18" y2="11" />
      <line x1="10" x2="10" y1="18" y2="11" />
      <line x1="14" x2="14" y1="18" y2="11" />
      <line x1="18" x2="18" y1="18" y2="11" />
      <polygon points="12 2 20 7 4 7" />
    </SvgIcon>
  ),
  "audience-budovy": (size) => iconGlyphs.akustika(size),
  "process-posouzeni": (size) => (
    <SvgIcon size={size}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <circle cx="11" cy="14" r="2" />
      <path d="M11 12v-1" />
      <path d="M11 16v1" />
    </SvgIcon>
  ),
  "process-rozsah": (size) => (
    <SvgIcon size={size}>
      <path d="M11 18H3" />
      <path d="M15 6H3" />
      <path d="M15 12H3" />
      <path d="m19 10-4 4 4-4" />
    </SvgIcon>
  ),
  "process-zpracovani": (size) => (
    <SvgIcon size={size}>
      <path d="M6 18h8" />
      <path d="M3 22h18" />
      <path d="M14 22a7 7 0 1 0 0-14h-1" />
      <path d="M9 14h2" />
      <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" />
      <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
    </SvgIcon>
  ),
  "process-vystup": (size) => (
    <SvgIcon size={size}>
      <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
      <path d="m21.854 2.147-10.94 10.939" />
    </SvgIcon>
  ),
  default: (size) => iconGlyphs.posudek(size)
};

function resolveKey(props: Props): ServiceIconKey {
  if (props.icon) return props.icon;
  if (props.href) return getServiceIconKey(props.href);
  return "default";
}

export function ServiceIcon({ href, icon, size = 22, className }: Props) {
  const key = resolveKey({ href, icon });
  const classes = ["card-symbol", className].filter(Boolean).join(" ");

  return <span className={classes}>{iconGlyphs[key](size)}</span>;
}
