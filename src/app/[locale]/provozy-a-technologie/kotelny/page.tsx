import "@/app/globals.css";
﻿import { createSectorDetailPageExports } from "@/lib/render-sector-page";

const { generateMetadata, Page } = createSectorDetailPageExports("kotelny");

export { generateMetadata };
export default Page;
