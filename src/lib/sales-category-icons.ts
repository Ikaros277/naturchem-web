import type { ServiceIconKey } from "@/lib/service-icons";

const pcfCategoryIcons: Record<string, ServiceIconKey> = {
  "air-quality-analyzers": "mikroklima",
  "emission-monitors": "emise",
  "gc-process-analyzers": "pillar-mereni",
  "portable-monitors": "pillar-mereni",
  "detectors-fid-pid-tcd": "chemie",
  accessories: "pillar-dokumentace"
};

export function getPcfCategoryIconKey(categoryId: string | undefined): ServiceIconKey {
  if (categoryId && pcfCategoryIcons[categoryId]) return pcfCategoryIcons[categoryId];
  return "default";
}
