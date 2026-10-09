import { Source_Sans_3 } from "next/font/google";

// Share one font instance with the standalone 404. Different declarations
// produce duplicate WOFF2 URLs that Next also includes on regular pages.
export const fontSans = Source_Sans_3({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  weight: "variable",
  display: "swap",
  // Let the mobile hero load before the font on a slow connection.
  preload: false,
  adjustFontFallback: true
});
