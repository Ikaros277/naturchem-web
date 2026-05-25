import type { NextConfig } from "next";
import { permanentRedirects } from "./src/lib/redirects";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return permanentRedirects;
  }
};

export default nextConfig;
