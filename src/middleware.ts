import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, isLocale, type Locale } from "@/lib/i18n/locales";

function getLocaleFromPathname(pathname: string): Locale | null {
  const segment = pathname.split("/")[1];
  if (segment && isLocale(segment)) return segment;
  return null;
}

function stripLocalePrefix(pathname: string): string {
  const locale = getLocaleFromPathname(pathname);
  if (!locale) return pathname;
  const stripped = pathname.slice(locale.length + 1);
  return stripped || "/";
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/admin") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const localeFromPath = getLocaleFromPathname(pathname);

  if (localeFromPath === defaultLocale && pathname.startsWith(`/${defaultLocale}`)) {
    const stripped = stripLocalePrefix(pathname);
    const url = request.nextUrl.clone();
    url.pathname = stripped;
    return NextResponse.redirect(url, 308);
  }

  if (localeFromPath) {
    const response = NextResponse.next();
    response.headers.set("x-locale", localeFromPath);
    response.headers.set("x-pathname", stripLocalePrefix(pathname));
    return response;
  }

  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
  const response = NextResponse.rewrite(url);
  response.headers.set("x-locale", defaultLocale);
  response.headers.set("x-pathname", pathname);
  return response;
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|admin|.*\\..*).*)"]
};
