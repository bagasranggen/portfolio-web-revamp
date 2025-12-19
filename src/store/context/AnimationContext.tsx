'use client';

import React, { createContext, PropsWithChildren, useCallback, useState } from 'react';

import { AnimationSyncItemProps } from '@/libs/@types';

export type AnimationState = {
    animations: Exclude<AnimationSyncItemProps, string>[];
    setAnimations: React.Dispatch<React.SetStateAction<AnimationState['animations']>>;
    getAnimations: (id: string) => Exclude<AnimationSyncItemProps, string> | undefined;
};

export const AnimationStateContext = createContext<AnimationState>({
    animations: [],
    setAnimations: () => {},
    getAnimations: () => undefined,
});

export const AnimationStateContextProvider = ({ children }: PropsWithChildren) => {
    const [animations, setAnimations] = useState<AnimationState['animations']>([]);

    const getAnimations = useCallback(
        (id: string) => {
            return animations.find((item) => item?.id === id);
        },
        [animations]
    );

    const defaultContext = { animations, setAnimations, getAnimations };

    return <AnimationStateContext.Provider value={defaultContext}>{children}</AnimationStateContext.Provider>;
};
