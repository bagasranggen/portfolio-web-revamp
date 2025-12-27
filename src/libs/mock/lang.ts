export const LOCALES_HANDLES = {
    EN: 'en',
    JP: 'ja',
} as const;

export const LOCALES = Object.values(LOCALES_HANDLES);

export const LOCALES_DEFAULT = LOCALES_HANDLES.EN;

export const LOCALES_PROXY_KEY = 'x-locales';
