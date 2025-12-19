import { AnimationElementProps, AnimationSyncProps } from '@/libs/@types';

import { animate, onScroll, ScrollObserverParams } from 'animejs';

import { fadeAnimation, FadeAnimationProps } from '@/components/common/Animation/elements/Fade';

export type FadeInProps = {
    sync?: AnimationSyncProps;
} & AnimationElementProps &
    Pick<FadeAnimationProps, 'opacityDelay' | 'opacityDuration' | 'x' | 'y' | 'id'> &
    Pick<ScrollObserverParams, 'debug'>;

export const FadeIn = ({
    target,
    id,
    x,
    y,
    opacityDelay: opacityDelayProps,
    opacityDuration,
    debug,
    sync,
}: FadeInProps) => {
    let opacityDelay = opacityDelayProps ?? undefined;
    if (sync?.opacityDelay && typeof sync.opacityDelay === 'number') {
        opacityDelay = sync.opacityDelay;

        if (sync?.opacityDelayOffset && typeof sync.opacityDelayOffset === 'number') {
            opacityDelay -= sync.opacityDelayOffset;
        }
    }

    return animate(
        target,
        fadeAnimation({
            id,
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
