import { createSectorDetailPageExports } from "@/lib/render-sector-page";

const { generateMetadata, Page } = createSectorDetailPageExports("svarovny");

export { generateMetadata };
export default Page;
