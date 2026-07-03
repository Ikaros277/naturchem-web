/** Representative product photo per PCF Elettronica category (brand overview cards). */
const pcfCategoryImages: Record<string, string> = {
  "air-quality-analyzers": "/graphics/pcf-elettronica/mod-529-nr-t-total-voc-analyzer.jpg",
  "emission-monitors": "/graphics/pcf-elettronica/mod-110-h-fast-response-time-voc-monitor.jpg",
  "gc-process-analyzers":
    "/graphics/pcf-elettronica/mod-529-nr-tcd-mini-industrial-gc-with-tcd-detector.jpg",
  "portable-monitors": "/graphics/pcf-elettronica/mod-2005-for-total-voc.jpg",
  "detectors-fid-pid-tcd": "/graphics/pcf-elettronica/fid-detector.jpg",
  accessories: "/graphics/pcf-elettronica/sampling-probe-ss-1m.jpg"
};

export function getPcfCategoryImageSrc(categoryId: string | undefined): string | undefined {
  if (!categoryId) return undefined;
  return pcfCategoryImages[categoryId];
}
