import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      // Existing client components intentionally synchronize URL/storage state on mount.
      // Keep this visible during the React 19 migration without blocking all verification.
      "react-hooks/set-state-in-effect": "warn"
    }
  },
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "public/search/**",
    "src/lib/article-locale-map.json"
  ])
]);
