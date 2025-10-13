import { useContext } from 'react';

import { HistoryStateContext } from '@/store/context/HistoryContext';

export const useHistoryStateContext = () => useContext(HistoryStateContext);
