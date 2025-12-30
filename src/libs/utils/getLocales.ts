import { LOCALES, LOCALES_DEFAULT } from '@/libs/mock';

import { cleanArrayString } from './cleanArrayString';
import { getEnvFeature } from './getEnvFeature';
import { LocaleProps } from '@/libs/@types';

export const getLocales = (pathname: string) => {
    const { isMultiLanguage } = getEnvFeature();

    const pathnameHasLocale = LOCALES.some((item) => pathname.startsWith(`/${item}/`) || pathname === `/${item}`);

    const pathnameArr = cleanArrayString(pathname.split('/'));
    const pathnameLocale = isMultiLanguage && pathnameHasLocale ? (pathnameArr?.[0] as LocaleProps) : LOCALES_DEFAULT;

    return {
        pathnameHasLocale,
        pathnameLocale,
    };
};
