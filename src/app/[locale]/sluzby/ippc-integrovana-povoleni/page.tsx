import { createDedicatedServicePageExports } from "@/lib/render-dedicated-service-page";

const { generateMetadata, Page } = createDedicatedServicePageExports("ippc-integrovana-povoleni");
export { generateMetadata };
export default Page;
