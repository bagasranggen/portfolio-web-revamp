import { AnimationElementProps } from '@/libs/@types';

import { animate, onScroll, ScrollObserverParams } from 'animejs';

import { fadeAnimation, FadeAnimationProps } from '@/components/common/Animation/elements/Fade';

export type FadeInProps = AnimationElementProps &
    Pick<FadeAnimationProps, 'opacityDelay' | 'x' | 'y'> &
    Pick<ScrollObserverParams, 'debug'>;

export const FadeIn = ({ target, x, y, opacityDelay, debug }: FadeInProps) => {
    animate(
        target,
        fadeAnimation({
            clearTarget: target,
            clearStyle: true,
            opacityDelay: opacityDelay,
            y: y ?? 30,
            x,
            autoplay: onScroll({
                target,
                debug,
            }),
        })
    );
};
