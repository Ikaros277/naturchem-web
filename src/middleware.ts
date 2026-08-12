import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, isLocale, type Locale } from "@/lib/i18n/locales";

const DEFAULT_LOCALE_REWRITE_HEADER = "x-naturchem-default-locale-rewrite";

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

/**
 * Locale routing only — keep this cheap. Avoid request headers()/cookies()
 * and skip setting response headers that nothing reads anymore.
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const localeFromPath = getLocaleFromPathname(pathname);

  if (localeFromPath === defaultLocale && pathname.startsWith(`/${defaultLocale}`)) {
    if (request.headers.get(DEFAULT_LOCALE_REWRITE_HEADER) === "1") {
      return NextResponse.next();
    }

    const url = request.nextUrl.clone();
    url.pathname = stripLocalePrefix(pathname);
    return NextResponse.redirect(url, 308);
  }

  if (localeFromPath) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set(DEFAULT_LOCALE_REWRITE_HEADER, "1");
  return NextResponse.rewrite(url, {
    request: {
      headers: requestHeaders
    }
  });
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|admin|.*\\..*).*)"]
};
