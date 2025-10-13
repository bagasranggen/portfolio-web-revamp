import React from 'react';

import { HistoryStateContextProvider } from '@/store/context/HistoryContext';

const ContextProvider = ({ children }: { children: React.ReactNode }): React.ReactElement => (
    <HistoryStateContextProvider>{children}</HistoryStateContextProvider>
);

export default ContextProvider;
export * from './root';
