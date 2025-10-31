import { useContext } from 'react';

import { GlobalStateContext } from '@/store/context/GlobalContext';
import { HistoryStateContext } from '@/store/context/HistoryContext';
import { LayoutStateContext } from '@/store/context/LayoutContext';

export const useGlobalStateContext = () => useContext(GlobalStateContext);
export const useHistoryStateContext = () => useContext(HistoryStateContext);
export const useLayoutStateContext = () => useContext(LayoutStateContext);
