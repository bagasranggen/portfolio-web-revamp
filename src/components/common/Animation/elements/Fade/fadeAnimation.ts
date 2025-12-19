import { AnimationElementProps } from '@/libs/@types';
import { clearStyle } from '@/libs/utils';

import { AnimationParams, TweenParamValue } from 'animejs';

export type FadeAnimationProps = {
    x?: number;
    y?: number;
    opacityDelay?: TweenParamValue | undefined;
    opacityDuration?: TweenParamValue | undefined;
    clearTarget?: AnimationElementProps['target'];
    clearStyle?: boolean;
} & Pick<AnimationParams, 'autoplay' | 'id'>;

export const fadeAnimation = ({
    id,
    x,
    y,
    opacityDelay,
    opacityDuration,
    clearTarget,
    clearStyle: clearStyleProps,
    autoplay,
}: FadeAnimationProps): AnimationParams => {
    const clearCssStyle: string[] = ['opacity'];
    if (x || y) clearCssStyle.push('transform');

    let duration = {};
    if (opacityDuration) duration = Object.assign(duration, { duration: opacityDuration });

    let delay = {};
    if (opacityDelay) delay = Object.assign(delay, { delay: opacityDelay });

    let settings = {};

    if (id) {
        settings = Object.assign(settings, { id });
    }

    if (y) {
        settings = Object.assign(settings, {
            y: { from: y, to: 0, ...duration, ...delay },
        });
    }

    if (x) {
        settings = Object.assign(settings, {
            x: { from: x, to: 0, ...duration, ...delay },
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
            ...duration,
            ...delay,
        },
        ...settings,
        onComplete: () => {
            if (clearStyleProps && clearTarget) clearStyle({ target: clearTarget, style: clearCssStyle });
        },
    };
};
