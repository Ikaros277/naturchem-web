import { createDedicatedServicePageExports } from "@/lib/render-dedicated-service-page";

const { generateMetadata, Page } = createDedicatedServicePageExports("bezpecnostni-listy");
export { generateMetadata };
export default Page;
