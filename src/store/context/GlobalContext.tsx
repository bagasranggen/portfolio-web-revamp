'use client';

import React, { createContext, PropsWithChildren } from 'react';

export type GlobalState = {
    isDev: boolean;
    isMultiLanguage: boolean;
    isThemeToggle: boolean;
};

export const GlobalStateContext = createContext<GlobalState>({
    isDev: false,
    isMultiLanguage: false,
    isThemeToggle: false,
});

export const GlobalStateContextProvider = ({ children }: PropsWithChildren) => {
    const isDev = process.env.NODE_ENV === 'development';
    const isMultiLanguage = process.env.NEXT_PUBLIC_FF_MULTI_LANGUAGE === '1';
    const isThemeToggle = false;

    const defaultContext = { isDev, isMultiLanguage, isThemeToggle };

    return <GlobalStateContext.Provider value={defaultContext}>{children}</GlobalStateContext.Provider>;
};
