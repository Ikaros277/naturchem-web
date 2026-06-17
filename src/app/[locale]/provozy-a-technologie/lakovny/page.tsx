import { createSectorDetailPageExports } from "@/lib/render-sector-page";

const { generateMetadata, Page } = createSectorDetailPageExports("lakovny");

export { generateMetadata };
export default Page;
