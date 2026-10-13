/** Local previews have no Vercel insight endpoint. Do not suppress monitoring for public visitors. */
export function shouldLoadSpeedInsights(hostname: string): boolean {
  const host = hostname.toLowerCase().replace(/^\[|\]$/g, "");
  return host !== "localhost" && !host.endsWith(".localhost") && host !== "::1" && host !== "127.0.0.1";
}
