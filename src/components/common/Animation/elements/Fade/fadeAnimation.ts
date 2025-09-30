import { AnimationElementTypes } from '@/libs/@types';
import { clearStyle } from '@/libs/utils';

import { AnimationParams, TweenParamValue } from 'animejs';

export type FadeAnimationTypes = {
    y?: number;
    opacityDelay?: TweenParamValue | undefined;
    clearTarget?: AnimationElementTypes['target'];
    clearStyle?: boolean;
};

export const fadeAnimation = ({
    y,
    opacityDelay,
    clearTarget,
    clearStyle: clearStyleProps,
}: FadeAnimationTypes): AnimationParams => {
    const clearCssStyle: string[] = ['opacity'];
    if (y) clearCssStyle.push('transform');

    let yAxis = {};
    if (y) {
        yAxis = Object.assign(y, {
            y: {
                from: y,
                to: 0,
            },
        });
    }

    return {
        ease: 'inOutQuad',
        opacity: {
            from: 0,
            to: 1,
            ...(opacityDelay ? { delay: opacityDelay } : {}),
        },
        ...yAxis,
        onComplete: () => {
            if (clearStyleProps && clearTarget) clearStyle({ target: clearTarget, style: clearCssStyle });
        },
    };
};
