'use client';

import React, { createContext, PropsWithChildren, Suspense, useState } from 'react';

import { AnimationSyncItemProps } from '@/libs/@types';
import { NavigationEvents } from '@/libs/hook';

export type AnimationState = {
    animations: Exclude<AnimationSyncItemProps, string>[];
    setAnimations: React.Dispatch<React.SetStateAction<AnimationState['animations']>>;
};

export const AnimationStateContext = createContext<AnimationState>({
    animations: [],
    setAnimations: () => {},
});

export const AnimationStateContextProvider = ({ children }: PropsWithChildren) => {
    const [animations, setAnimations] = useState<AnimationState['animations']>([]);

    const defaultContext = { animations, setAnimations };

    return (
        <>
            <Suspense fallback={null}>
                <NavigationEvents
                    startHandler={() => {
                        setAnimations([]);
                    }}
                />
            </Suspense>
            <AnimationStateContext.Provider value={defaultContext}>{children}</AnimationStateContext.Provider>
        </>
    );
};
