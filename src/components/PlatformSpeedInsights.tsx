"use client";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { shouldLoadSpeedInsights } from "@/lib/platform-insights";

/** Mounted client-only after the existing delay; production telemetry remains enabled. */
export function PlatformSpeedInsights() {
  if (typeof window === "undefined" || !shouldLoadSpeedInsights(window.location.hostname)) return null;
  return <SpeedInsights />;
}
