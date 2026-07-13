import {
  isValidContactService,
  resolveContactServices,
  sectorContactMessage,
  type ContactServiceOption
} from "@/lib/contact-services";
import { resolveInquiryCategory, type InquiryCategoryId, isInquiryCategoryId } from "@/lib/contact-inquiry";

export type ContactUrlPrefill = {
  initialServices: string[];
  initialCategory?: InquiryCategoryId;
  initialMessage: string;
};

function queryParam(value: string | null): string {
  if (!value) return "";
  try {
    return decodeURIComponent(value.replace(/\+/g, " "));
  } catch {
    return value;
  }
}

/** Reads ?service= / ?sector= / ?services= from a query string (client-side prefill). */
export function readContactUrlPrefill(search = ""): ContactUrlPrefill {
  const raw = search.startsWith("?") ? search.slice(1) : search;
  const params = new URLSearchParams(raw);
  const serviceParam = queryParam(params.get("service"));
  const sectorParam = queryParam(params.get("sector"));
  const extraParam = queryParam(params.get("services"));
  const extraServices = extraParam
    ? extraParam.split(",").map((s) => s.trim()).filter(Boolean)
    : [];
  const initialServices = resolveContactServices(serviceParam, sectorParam, extraServices);
  const categoryParam = queryParam(params.get("category"));
  const initialCategory = isInquiryCategoryId(categoryParam)
    ? categoryParam
    : resolveInquiryCategory(initialServices as ContactServiceOption[]);
  const initialMessage = sectorParam
    ? sectorContactMessage(sectorParam)
    : !isValidContactService(serviceParam) && serviceParam
      ? sectorContactMessage(serviceParam)
      : "";

  return {
    initialServices: [...initialServices],
    initialCategory,
    initialMessage
  };
}
