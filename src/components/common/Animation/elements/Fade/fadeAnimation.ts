import { AnimationElementTypes } from '@/libs/@types';
import { clearStyle } from '@/libs/utils';

import { AnimationParams, TweenParamValue } from 'animejs';

export type FadeAnimationTypes = {
    y?: number;
    opacityDelay?: TweenParamValue | undefined;
    clearTarget?: AnimationElementTypes['target'];
    clearStyle?: boolean;
} & Pick<AnimationParams, 'autoplay'>;

export const fadeAnimation = ({
    y,
    opacityDelay,
    clearTarget,
    clearStyle: clearStyleProps,
    autoplay,
}: FadeAnimationTypes): AnimationParams => {
    const clearCssStyle: string[] = ['opacity'];
    if (y) clearCssStyle.push('transform');

    let settings = {};

    if (y) {
        settings = Object.assign(y, {
            y: {
                from: y,
                to: 0,
            },
        });
    }

    if (autoplay) {
        settings = Object.assign(settings, { autoplay });
    }

    return {
        ease: 'inOutQuad',
        opacity: {
            from: 0,
            to: 1,
            ...(opacityDelay ? { delay: opacityDelay } : {}),
        },
        ...settings,
        onComplete: () => {
            if (clearStyleProps && clearTarget) clearStyle({ target: clearTarget, style: clearCssStyle });
        },
    };
};
