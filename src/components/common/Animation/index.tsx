'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';

import { useAnimationStateContext } from '@/store/context';

import { AnimationBaseProps, AnimationSyncProps, ArrayStringProps, ClassnameProps } from '@/libs/@types';
import { checkIsInViewport, joinArrayString } from '@/libs/utils';

import { createScope, Scope } from 'animejs';

import { ANIMATION_ATTRIBUTE } from '@/components/common/Animation/handles';
import { ANIMATION_DATA_HANDLES } from '@/components/common/Animation/handlesData';

export type AnimationProps = {
    order?: number;
    trigger?: number;
    children: React.ReactElement;
} & (AnimationBaseProps & ClassnameProps);

const Animation = ({ type, order, trigger, children, className, ...props }: AnimationProps): React.ReactElement => {
    const animationSync: AnimationSyncProps = (props as any)?.options?.sync;
    const animationOptions: any = 'options' in props ? props?.options : undefined;

    const { animations, setAnimations } = useAnimationStateContext();

    const [sync, setSync] = useState<string | undefined | AnimationSyncProps>(animationSync?.target as any);

    const relatedAnimation = useMemo(() => {
        let data = undefined;

        if (animations.length > 0 && typeof sync === 'string') {
            data = animations.find((item) => item?.id === sync);
        }

        return data;
    }, [animations, sync]);

    const root = useRef(null);
    const scope = useRef<Scope | null>(null);

    const childrenClassName = (children?.props as any)?.className;

    let animationClass: ArrayStringProps = [];
    if (childrenClassName) animationClass.push(childrenClassName);
    if (className) animationClass.push(className);
    animationClass = joinArrayString(animationClass);

    let elementProps = { ref: root };

    if (type) {
        elementProps = Object.assign(elementProps, { [ANIMATION_ATTRIBUTE.TYPE]: type });
    }

    if (!type && order) {
        elementProps = Object.assign(elementProps, { [ANIMATION_ATTRIBUTE.ORDER]: order });
    }

    if (animationOptions?.id) {
        elementProps = Object.assign(elementProps, { id: animationOptions?.id });
    }

    if (animationClass) {
        elementProps = Object.assign(elementProps, { className: animationClass });
    }

    let options = {};

    if (animationOptions) options = Object.assign(options ?? {}, animationOptions);

    useEffect(() => {
        const target = root.current;

        if (!target) return;
        if (!animationSync) return;
        if (typeof sync !== 'string') return;

        const { partialInViewport: depPartialInViewport } = checkIsInViewport({
            target: document.querySelector(`#${sync}`),
        });
        const { partialInViewport: targetPartialInViewport } = checkIsInViewport({
            target,
        });

        const isSynced = targetPartialInViewport && depPartialInViewport;

        if (relatedAnimation) {
            setSync({
                target: relatedAnimation,
                opacityDelay: isSynced ? relatedAnimation?.duration : undefined,
                opacityDelayOffset: isSynced ? animationSync?.opacityDelayOffset : undefined,
            });
        }
    }, [sync, relatedAnimation]);

    useEffect(() => {
        const target = root.current;

        if (!target) return;
        if (!type) return;
        if (order) return;
        if (typeof sync === 'string') return;

        const animationType: string | null = (target as HTMLElement)?.getAttribute(ANIMATION_ATTRIBUTE.TYPE);

        scope.current = createScope({ root }).add((self) => {
            let animation = ANIMATION_DATA_HANDLES?.[animationType as keyof typeof ANIMATION_DATA_HANDLES] ?? undefined;

            if (animation) {
                if (sync) {
                    options = Object.assign(options, { sync });
                }

                const animationFunc = animation({ target, ...options });

                if (animationFunc) {
                    setAnimations((prevState) => [...prevState, animationFunc]);
                }
            }
        });

        return () => {
            if (scope.current) scope.current.revert();
        };
    }, [type, trigger, order, sync]);

    return React.cloneElement(children, elementProps);
};

export default Animation;

export type * from './types';
