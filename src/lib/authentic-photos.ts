import type { Locale } from "@/lib/i18n/locales";

type Photo = {
  asset: string;
  width: number;
  height: number;
  position: string;
  cardPosition?: string;
  caption: Record<Locale, string>;
};

/** User-approved photographs. Captions describe only visible equipment/context,
 * not an unverified customer, accreditation scope or outcome of a particular job.
 * Originals and private Google Photos URLs must never enter the public project.
 */
const photos: Record<string, Photo> = {
  "homepage-mereni": {
    asset: "prumyslove-mereni", width: 960, height: 675, position: "80% center",
    caption: { cs: "Měřicí technika v průmyslovém provozu", en: "Measuring equipment in an industrial facility", de: "Messtechnik im Industriebetrieb" }
  },
  "mereni-emisi": {
    asset: "emise-provoz", width: 1200, height: 675, position: "65% center", cardPosition: "center bottom",
    caption: { cs: "Měřicí sestava u průmyslové technologie", en: "Measuring equipment at an industrial installation", de: "Messaufbau an einer Industrieanlage" }
  },
  "mereni-hluku": {
    asset: "hluk-provoz", width: 660, height: 372, position: "80% center",
    caption: { cs: "Hlukoměr v pracovním prostředí", en: "Sound level meter in a workplace", de: "Schallpegelmesser am Arbeitsplatz" }
  },
  "pracovni-prostredi": {
    asset: "pracovni-prostredi", width: 1200, height: 675, position: "55% center",
    caption: { cs: "Měřicí přístroje v prašném prostředí", en: "Measuring instruments in a dusty environment", de: "Messgeräte in staubiger Umgebung" }
  },
  "mereni-pro-kolaudaci": {
    asset: "mereni-interier", width: 1200, height: 675, position: "60% center",
    caption: { cs: "Hlukoměr v interiéru", en: "Sound level meter indoors", de: "Schallpegelmesser im Innenraum" }
  },
  "mereni-nove-haly": {
    asset: "prumyslova-hala", width: 1200, height: 675, position: "center center",
    caption: { cs: "Průmyslový objekt a jeho technologie", en: "Industrial building and its installations", de: "Industriegebäude und seine Anlagen" }
  },
  "mereni-mikroklimatu": {
    asset: "mikroklima-sestava", width: 900, height: 580, position: "center center",
    caption: { cs: "Přístroje pro měření mikroklimatu", en: "Instruments for microclimate measurements", de: "Geräte zur Mikroklimamessung" }
  },
  "pristrojove-vybaveni": {
    asset: "prenosna-technika", width: 1200, height: 675, position: "45% center",
    caption: { cs: "Přenosná měřicí sestava", en: "Portable measuring equipment", de: "Mobiler Messaufbau" }
  }
};

const directory = "/hero/authentic-2026-10";

export function getAuthenticPhoto(theme: string) {
  const photo = photos[theme];
  if (!photo) return null;
  const base = `${directory}/${photo.asset}`;
  return {
    ...photo, base,
    src: `${base}.webp`, avifSrc: `${base}.avif`,
    mobileSrc: `${base}-640.webp`, mobileAvifSrc: `${base}-640.avif`
  };
}

export function getAuthenticPhotoBySrc(src: string) {
  const theme = Object.keys(photos).find(key => `${directory}/${photos[key].asset}.webp` === src);
  return theme ? getAuthenticPhoto(theme) : null;
}
