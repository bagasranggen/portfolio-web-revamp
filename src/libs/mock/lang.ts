export const LOCALES_HANDLES = {
    EN: 'en',
    JP: 'jp',
} as const;

export const LOCALES = Object.values(LOCALES_HANDLES);

export const LOCALES_DEFAULT = LOCALES_HANDLES.EN;
