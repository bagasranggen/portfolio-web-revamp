import { AnimationElementProps } from '@/libs/@types';

import { animate } from 'animejs';

import { fadeAnimation, FadeAnimationProps } from '@/components/common/Animation/elements/Fade/fadeAnimation';

export type FadeProps = AnimationElementProps & Pick<FadeAnimationProps, 'y'>;

export const Fade = ({ target, y = 30 }: FadeProps) => {
    animate(
        target,
        fadeAnimation({
            clearTarget: target,
            clearStyle: true,
            y,
        })
    );
};

export { fadeAnimation, type FadeAnimationProps };
