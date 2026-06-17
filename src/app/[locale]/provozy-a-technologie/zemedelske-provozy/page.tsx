import { createSectorDetailPageExports } from "@/lib/render-sector-page";

const { generateMetadata, Page } = createSectorDetailPageExports("zemedelske-provozy");

export { generateMetadata };
export default Page;
