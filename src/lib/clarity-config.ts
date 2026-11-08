/** Public build-time switch only. Never put the Data Export credential here. */
export function getClarityPilotId(raw = process.env.NEXT_PUBLIC_CLARITY_PILOT_ID) {
  return typeof raw === "string" && /^[a-z0-9]{6,20}$/.test(raw) ? raw : undefined;
}

export const clarityDisclosureDate = "8. 11. 2026";
