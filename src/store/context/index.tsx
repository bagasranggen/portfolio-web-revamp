import React from 'react';

import { GlobalStateContextProvider } from '@/store/context/GlobalContext';
import { HistoryStateContextProvider } from '@/store/context/HistoryContext';
import { LayoutStateContextProvider } from '@/store/context/LayoutContext';

const ContextProvider = ({ children }: { children: React.ReactNode }): React.ReactElement => (
    <GlobalStateContextProvider>
        <HistoryStateContextProvider>
            <LayoutStateContextProvider>{children}</LayoutStateContextProvider>
        </HistoryStateContextProvider>
    </GlobalStateContextProvider>
);

export default ContextProvider;
export * from './root';
