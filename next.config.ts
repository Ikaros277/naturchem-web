import type { NextConfig } from "next";
import { permanentRedirects } from "./src/lib/redirects";

const LONG_CACHE = "public, max-age=31536000, immutable";

const securityHeaders = [
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()"
  }
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [384, 640, 750, 828, 1080, 1200],
    minimumCacheTTL: 31536000
  },
  experimental: {
    optimizePackageImports: ["react-markdown"],
    optimizeCss: true
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders
      },
      {
        source: "/search/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800"
          }
        ]
      },
      {
        source: "/hero/:path*",
        headers: [{ key: "Cache-Control", value: LONG_CACHE }]
      },
      {
        source: "/graphics/:path*",
        headers: [{ key: "Cache-Control", value: LONG_CACHE }]
      },
      {
        source: "/fonts/:path*",
        headers: [{ key: "Cache-Control", value: LONG_CACHE }]
      }
    ];
  },
  async redirects() {
    return permanentRedirects;
  }
};

export default nextConfig;
