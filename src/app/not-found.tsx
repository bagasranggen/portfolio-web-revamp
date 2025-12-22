import { headers } from 'next/headers';
import localFont from 'next/font/local';

import ContextProvider from '@/store/context';

import {
    LIST_MEDIA,
    LIST_NAVIGATION,
    LIST_SOCIAL,
    LOCALES,
    LOCALES_PROXY_KEY,
    THEMES,
    THEMES_PROXY_KEY,
} from '@/libs/mock';
import { LocaleProps, ThemesProps } from '@/libs/@types';
import { getDictionary } from '@/libs/utils';

import Layout from '@/components/layout/Layout';
import NotFoundIndex from '@/components/pages/NotFoundIndex';

const murecho = localFont({
    src: [
        {
            path: '../assets/fonts/Murecho/Murecho-Black.woff2',
            weight: '900',
        },
        {
            path: '../assets/fonts/Murecho/Murecho-ExtraBold.woff2',
            weight: '800',
        },
        {
            path: '../assets/fonts/Murecho/Murecho-Bold.woff2',
            weight: '700',
        },
        {
            path: '../assets/fonts/Murecho/Murecho-SemiBold.woff2',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../assets/fonts/Murecho/Murecho-Medium.woff2',
            weight: '500',
        },
        {
            path: '../assets/fonts/Murecho/Murecho-Regular.woff2',
            weight: '400',
        },
        {
            path: '../assets/fonts/Murecho/Murecho-Light.woff2',
            weight: '300',
        },
        {
            path: '../assets/fonts/Murecho/Murecho-ExtraLight.woff2',
            weight: '200',
        },
        {
            path: '../assets/fonts/Murecho/Murecho-Thin.woff2',
            weight: '100',
        },
    ],
    variable: '--font-murecho',
});

export default async function NotFound() {
    const headersList = await headers();

    const theme = headersList.get(THEMES_PROXY_KEY) as ThemesProps;
    const lang = headersList.get(LOCALES_PROXY_KEY) as LocaleProps;
    const dic = await getDictionary(lang);

    return (
        <ContextProvider>
            <Layout
                lang={lang}
                theme={theme}
                className={murecho.variable}
                navigation={{
                    media: LIST_MEDIA,
                    items: LIST_NAVIGATION[lang],
                    button: {
                        open: dic.navigation.button.open,
                        close: dic.navigation.button.close,
                    },
                    activeLocale: lang,
                    locales: LOCALES,
                    themes: THEMES,
                }}
                footer={{
                    social: LIST_SOCIAL,
                }}>
                <NotFoundIndex />
            </Layout>
        </ContextProvider>
    );
}
