import type { NextConfig } from "next";
import { permanentRedirects } from "./src/lib/redirects";

const LONG_CACHE = "public, max-age=31536000, immutable";

const securityHeaders = [
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload"
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()"
  },
  {
    key: "Content-Security-Policy-Report-Only",
    value:
      "default-src 'self'; base-uri 'self'; object-src 'none'; frame-ancestors 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://maps.googleapis.com https://unpkg.com https://embed.tawk.to https://va.vercel-scripts.com; style-src 'self' 'unsafe-inline' https://unpkg.com; img-src 'self' data: blob: https:; font-src 'self' data:; connect-src 'self' https:; frame-src https://embed.tawk.to; worker-src 'self' blob:"
  }
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: true,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [384, 640, 750, 828, 1080, 1200],
    minimumCacheTTL: 31536000
  },
  experimental: {
    optimizePackageImports: ["react-markdown"]
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
      },
      {
        source: "/team/:path*",
        headers: [{ key: "Cache-Control", value: LONG_CACHE }]
      },
      {
        source: "/datasheets/:path*",
        headers: [{ key: "Cache-Control", value: LONG_CACHE }]
      }
    ];
  },
  async redirects() {
    return permanentRedirects;
  }
};

export default nextConfig;
