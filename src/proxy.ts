import { NextRequest, NextResponse } from 'next/server';
import { LOCALES, LOCALES_DEFAULT, THEMES_COOKIE_KEY } from '@/libs/mock';

const IS_MULTI_LANGUAGE = process.env.NEXT_PUBLIC_FF_MULTI_LANGUAGE === '1';

export function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const response = NextResponse.next();
    const nextUrl = request.nextUrl;

    const pathnameHasLocale = LOCALES.some((item) => pathname.startsWith(`/${item}/`) || pathname === `/${item}`);

    if (IS_MULTI_LANGUAGE && !pathnameHasLocale) {
        nextUrl.pathname = `/${LOCALES_DEFAULT}${pathname}`;
        return NextResponse.redirect(nextUrl);
    }

    const theme = request.cookies.get(THEMES_COOKIE_KEY)?.value || 'light';

    response.headers.set(THEMES_COOKIE_KEY, theme);

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
