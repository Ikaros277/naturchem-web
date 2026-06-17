import { createSectorDetailPageExports } from "@/lib/render-sector-page";

const { generateMetadata, Page } = createSectorDetailPageExports("odpady-recyklace");

export { generateMetadata };
export default Page;
