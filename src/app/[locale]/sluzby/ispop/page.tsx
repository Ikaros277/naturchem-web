import "@/app/globals.css";
import { createDedicatedServicePageExports } from "@/lib/render-dedicated-service-page";

const { generateMetadata, Page } = createDedicatedServicePageExports("ispop");
export { generateMetadata };
export default Page;
