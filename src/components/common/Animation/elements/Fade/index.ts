import { AnimationElementProps } from '@/libs/@types';

import { animate } from 'animejs';

import { fadeAnimation, FadeAnimationProps } from '@/components/common/Animation/elements/Fade/fadeAnimation';

export type FadeProps = AnimationElementProps & Pick<FadeAnimationProps, 'y' | 'opacityDuration'>;

export const Fade = ({ target, y = 30, opacityDuration }: FadeProps) => {
    animate(
        target,
        fadeAnimation({
            clearTarget: target,
            clearStyle: true,
            y,
            opacityDuration,
        })
    );
};

export { fadeAnimation, type FadeAnimationProps };
