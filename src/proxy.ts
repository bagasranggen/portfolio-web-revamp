import { NextRequest, NextResponse } from 'next/server';
import { LOCALES, LOCALES_DEFAULT } from '@/libs/mock';

export function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl;

    const pathnameHasLocale = LOCALES.some((item) => pathname.startsWith(`/${item}/`) || pathname === `/${item}`);

    if (pathnameHasLocale) return;

    request.nextUrl.pathname = `/${LOCALES_DEFAULT}${pathname}`;

    console.log({ from: 'proxy', pathname });

    return NextResponse.redirect(request.nextUrl);
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
