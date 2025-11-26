import { AnimationElementProps } from '@/libs/@types';

import { animate } from 'animejs';

import { fadeAnimation, FadeAnimationProps } from '@/components/common/Animation/elements/Fade/fadeAnimation';

export const Fade = ({ target }: AnimationElementProps) => {
    animate(
        target,
        fadeAnimation({
            clearTarget: target,
            clearStyle: true,
            y: 30,
        })
    );
};

export { fadeAnimation, type FadeAnimationProps };
