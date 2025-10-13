'use client';

import React, { createContext, useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export type HistoryState = {
    routeLength: number;
    routeCurrent: string | null;
    routePrevious: string | null;
};

export const HistoryStateContext = createContext<HistoryState>({
    routeLength: 0,
    routeCurrent: null,
    routePrevious: null,
});

export const HistoryStateContextProvider = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const [routeLength, setRouteLength] = useState<HistoryState['routeLength']>(0);
    const [routeCurrent, setRouteCurrent] = useState<HistoryState['routeCurrent']>(null);
    const [routePrevious, setRoutePrevious] = useState<HistoryState['routePrevious']>(null);

    useEffect(() => {
        let url = pathname;
        if (searchParams.size > 0) url += `?${searchParams}`;

        setRoutePrevious(routeCurrent);
        setRouteCurrent(url);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname, searchParams]);

    useEffect(() => {
        setRouteLength((prevState) => prevState + 1);
    }, [pathname]);

    const defaultContext = {
        routeLength,
        routeCurrent,
        routePrevious,
    };

    return <HistoryStateContext.Provider value={defaultContext}>{children}</HistoryStateContext.Provider>;
};
