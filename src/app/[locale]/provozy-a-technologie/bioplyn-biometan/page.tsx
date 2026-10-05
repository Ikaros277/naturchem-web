import "@/app/globals.css";
﻿import { createSectorDetailPageExports } from "@/lib/render-sector-page";

const { generateMetadata, Page } = createSectorDetailPageExports("bioplyn-biometan");

export { generateMetadata };
export default Page;
