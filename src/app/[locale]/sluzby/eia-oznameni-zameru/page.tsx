import { createDedicatedServicePageExports } from "@/lib/render-dedicated-service-page";

const { generateMetadata, Page } = createDedicatedServicePageExports("eia-oznameni-zameru");
export { generateMetadata };
export default Page;
