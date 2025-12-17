import { AnimationElementProps } from '@/libs/@types';

import { animate, onScroll, ScrollObserverParams } from 'animejs';

import { fadeAnimation, FadeAnimationProps } from '@/components/common/Animation/elements/Fade';

export type FadeInProps = AnimationElementProps &
    Pick<FadeAnimationProps, 'opacityDelay' | 'opacityDuration' | 'x' | 'y'> &
    Pick<ScrollObserverParams, 'debug'>;

export const FadeIn = ({ target, x, y, opacityDelay, opacityDuration, debug }: FadeInProps) => {
    animate(
        target,
        fadeAnimation({
            clearTarget: target,
            clearStyle: true,
            opacityDelay,
            opacityDuration,
            y: y ?? 30,
            x,
            autoplay: onScroll({
                target,
                debug,
            }),
        })
    );
};
