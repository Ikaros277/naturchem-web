import "@/app/globals.css";
﻿import { createSectorDetailPageExports } from "@/lib/render-sector-page";

const { generateMetadata, Page } = createSectorDetailPageExports("tepelna-cerpadla-vzt");

export { generateMetadata };
export default Page;
