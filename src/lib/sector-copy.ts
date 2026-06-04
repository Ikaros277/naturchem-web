import { workProcessSteps, type WorkProcessStep } from "@/lib/work-process";

export const sectorOverviewHeading = "Stručně o provozu";
export const sectorProcessHeading = "Průběh zakázky";
export const sectorProcessIntro =
  "Čtyři kroky od posouzení provozu po protokol a doporučení pro úřad nebo Váš provoz.";

export function sectorProcessSteps(lines: readonly string[]): WorkProcessStep[] {
  return lines.map((line, index) => ({
    title: workProcessSteps[index]?.title ?? `Krok ${index + 1}`,
    text: line.length > 0 ? line.charAt(0).toUpperCase() + line.slice(1) : line
  }));
}
