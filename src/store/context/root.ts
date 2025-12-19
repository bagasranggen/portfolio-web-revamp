import { useContext } from 'react';

import { AnimationStateContext } from '@/store/context/AnimationContext';
import { GlobalStateContext } from '@/store/context/GlobalContext';
import { HistoryStateContext } from '@/store/context/HistoryContext';
import { LayoutStateContext } from '@/store/context/LayoutContext';
import { ThemeStateContext } from '@/store/context/ThemeContext';

export const useAnimationStateContext = () => useContext(AnimationStateContext);
export const useGlobalStateContext = () => useContext(GlobalStateContext);
export const useHistoryStateContext = () => useContext(HistoryStateContext);
export const useLayoutStateContext = () => useContext(LayoutStateContext);
export const useThemeStateContext = () => useContext(ThemeStateContext);
