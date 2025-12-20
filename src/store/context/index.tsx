import React, { PropsWithChildren } from 'react';

import { GlobalStateContextProvider } from '@/store/context/GlobalContext';
import { HistoryStateContextProvider } from '@/store/context/HistoryContext';
import { LayoutStateContextProvider } from '@/store/context/LayoutContext';
import { ThemeStateContextProvider } from '@/store/context/ThemeContext';
import { AnimationStateContextProvider } from '@/store/context/AnimationContext';

export type ContextProviderProps = PropsWithChildren;

const ContextProvider = ({ children }: ContextProviderProps): React.ReactElement => (
    <GlobalStateContextProvider>
        <AnimationStateContextProvider>
            <HistoryStateContextProvider>
                <LayoutStateContextProvider>
                    <ThemeStateContextProvider>{children}</ThemeStateContextProvider>
                </LayoutStateContextProvider>
            </HistoryStateContextProvider>
        </AnimationStateContextProvider>
    </GlobalStateContextProvider>
);

export default ContextProvider;
export * from './root';
