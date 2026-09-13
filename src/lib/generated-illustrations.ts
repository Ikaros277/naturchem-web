/** Pre-encoded local illustrations; do not send these through Vercel Image Optimization. */
export function getGeneratedIllustrationSources(src: string) {
  if (!/^\/hero\/generated-2026-09\/[a-z0-9-]+\.webp$/.test(src) || src.endsWith("-640.webp")) return null;
  const smallSrc = src.replace(/\.webp$/, "-640.webp");
  return { src, smallSrc, srcSet: `${smallSrc} 640w, ${src} 1600w`, width: 1600, height: 900 };
}
