import React, { PropsWithChildren } from 'react';

import { GlobalStateContextProvider } from '@/store/context/GlobalContext';
import { HistoryStateContextProvider } from '@/store/context/HistoryContext';
import { LayoutStateContextProvider } from '@/store/context/LayoutContext';
import { ThemeStateContextProvider, ThemeStateContextProviderProps } from '@/store/context/ThemeContext';

export type ContextProviderProps = PropsWithChildren & Pick<ThemeStateContextProviderProps, 'theme'>;

const ContextProvider = ({ children, theme }: ContextProviderProps): React.ReactElement => (
    <GlobalStateContextProvider>
        <HistoryStateContextProvider>
            <LayoutStateContextProvider>
                <ThemeStateContextProvider theme={theme}>{children}</ThemeStateContextProvider>
            </LayoutStateContextProvider>
        </HistoryStateContextProvider>
    </GlobalStateContextProvider>
);

export default ContextProvider;
export * from './root';
