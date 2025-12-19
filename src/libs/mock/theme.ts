export const THEMES_HANDLES = {
    DARK: 'dark',
    LIGHT: 'light',
} as const;

export const THEMES = Object.values(THEMES_HANDLES);

export const THEMES_COOKIE_KEY = 'theme';

export const THEMES_ATTRIBUTE_KEY = 'data-theme';
