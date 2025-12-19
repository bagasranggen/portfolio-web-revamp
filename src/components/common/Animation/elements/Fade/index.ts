import { AnimationElementProps } from '@/libs/@types';

import { animate } from 'animejs';

import { fadeAnimation, FadeAnimationProps } from '@/components/common/Animation/elements/Fade/fadeAnimation';

export type FadeProps = AnimationElementProps &
    Pick<FadeAnimationProps, 'y' | 'x' | 'opacityDuration' | 'opacityDelay'>;

export const Fade = ({ target, y = 30, x, opacityDuration, opacityDelay }: FadeProps) => {
    animate(
        target,
        fadeAnimation({
            clearTarget: target,
            clearStyle: true,
            y,
            x,
            opacityDuration,
            opacityDelay,
        })
    );
};

export { fadeAnimation, type FadeAnimationProps };
