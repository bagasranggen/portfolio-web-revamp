'use client';

import React, { createContext, PropsWithChildren, useEffect, useState } from 'react';

import { THEMES_ATTRIBUTE_KEY, THEMES_COOKIE_KEY, THEMES_HANDLES } from '@/libs/mock';
import { ThemesProps } from '@/libs/@types';

import Cookies from 'js-cookie';

export type ThemeState = {
    theme: ThemesProps;
    setTheme: React.Dispatch<React.SetStateAction<ThemeState['theme']>>;
};

export const ThemeStateContext = createContext<ThemeState>({
    theme: THEMES_HANDLES.LIGHT,
    setTheme: () => {},
});

export type ThemeStateContextProviderProps = PropsWithChildren & Pick<ThemeState, 'theme'>;

export const ThemeStateContextProvider = ({ children, theme: themeProps }: ThemeStateContextProviderProps) => {
    const [theme, setTheme] = useState<ThemeState['theme']>(themeProps ?? THEMES_HANDLES.LIGHT);

    useEffect(() => {
        const html = document.documentElement;
        const currentTheme = html.getAttribute(THEMES_ATTRIBUTE_KEY);

        if (typeof window === 'undefined') return;
        if (currentTheme === theme) return;

        Cookies.set(THEMES_COOKIE_KEY, theme);
        html.setAttribute(THEMES_ATTRIBUTE_KEY, theme);
    }, [theme]);

    const defaultContext = { theme, setTheme };

    return <ThemeStateContext.Provider value={defaultContext}>{children}</ThemeStateContext.Provider>;
};
