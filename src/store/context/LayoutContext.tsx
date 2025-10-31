'use client';

import React, { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';

export type LayoutState = {
    headerHeight: number;
    setHeaderHeight: React.Dispatch<React.SetStateAction<LayoutState['headerHeight']>>;
};

export const LayoutStateContext = createContext<LayoutState>({
    headerHeight: 0,
    setHeaderHeight: () => {},
});

export const LayoutStateContextProvider = ({ children }: PropsWithChildren) => {
    const [headerHeight, setHeaderHeight] = useState<number>(0);

    const defaultContext = {
        headerHeight,
        setHeaderHeight,
    };

    useEffect(() => {
        const body = document.body;

        if (!body) return;

        // console.log({ body });

        // body.style.setProperty('--header-height', `${headerHeight}px`);
        body.style.setProperty('--spacing-header', `${headerHeight}px`);

        // console.log();
    }, [headerHeight]);

    return <LayoutStateContext.Provider value={defaultContext}>{children}</LayoutStateContext.Provider>;
};
