import { AnimationElementProps } from '@/libs/@types';
import { clearStyle } from '@/libs/utils';

import { AnimationParams, TweenParamValue } from 'animejs';

export type FadeAnimationProps = {
    x?: number;
    y?: number;
    opacityDelay?: TweenParamValue | undefined;
    clearTarget?: AnimationElementProps['target'];
    clearStyle?: boolean;
} & Pick<AnimationParams, 'autoplay'>;

export const fadeAnimation = ({
    x,
    y,
    opacityDelay,
    clearTarget,
    clearStyle: clearStyleProps,
    autoplay,
}: FadeAnimationProps): AnimationParams => {
    const clearCssStyle: string[] = ['opacity'];
    if (x || y) clearCssStyle.push('transform');

    let settings = {};

    if (y) {
        settings = Object.assign(settings, {
            y: { from: y, to: 0 },
        });
    }

    if (x) {
        settings = Object.assign(settings, {
            x: { from: x, to: 0 },
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
