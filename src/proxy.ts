import { NextRequest, NextResponse } from 'next/server';

import { LOCALES, LOCALES_DEFAULT, LOCALES_PROXY_KEY, THEMES_COOKIE_KEY, THEMES_PROXY_KEY } from '@/libs/mock';
import { cleanArrayString, getEnvFeature } from '@/libs/utils';

export function proxy(request: NextRequest) {
    const { isMultiLanguage } = getEnvFeature();

    const { pathname } = request.nextUrl;
    const response = NextResponse.next();
    const nextUrl = request.nextUrl;

    const pathnameHasLocale = LOCALES.some((item) => pathname.startsWith(`/${item}/`) || pathname === `/${item}`);

    if (isMultiLanguage && !pathnameHasLocale) {
        nextUrl.pathname = `/${LOCALES_DEFAULT}${pathname}`;
        return NextResponse.redirect(nextUrl);
    }

    const pathnameArr = cleanArrayString(pathname.split('/'));
    const pathnameLocale = isMultiLanguage && pathnameHasLocale ? pathnameArr?.[0] : LOCALES_DEFAULT;

    const theme = request.cookies.get(THEMES_COOKIE_KEY)?.value || 'light';

    response.headers.set(THEMES_PROXY_KEY, theme);
    response.headers.set(LOCALES_PROXY_KEY, pathnameLocale);

    return response;
}

export const config = {
    matcher: [
        // Skip all internal paths (_next)
        // '/((?!_next).*)',
        '/((?!_next|\.well-known).*)',
        // Optional: only run on root (/) URL
        // '/'
    ],
};
