import { AnimationElementProps } from '@/libs/@types';

import { animate, onScroll } from 'animejs';

import { fadeAnimation } from '@/components/common/Animation/elements/Fade';

export const FadeIn = ({ target }: AnimationElementProps) => {
    animate(
        target,
        fadeAnimation({
            clearTarget: target,
            clearStyle: true,
            y: 30,
            autoplay: onScroll({
                target,
                // debug: true,
            }),
        })
    );
};
