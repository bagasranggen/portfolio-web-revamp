import { AnimationElementTypes } from '@/libs/@types';
import { clearStyle } from '@/libs/utils';

import { animate } from 'animejs';

export const Fade = ({ target }: AnimationElementTypes) => {
    animate(target, {
        opacity: {
            from: 0,
            to: 1,
            ease: 'inOutQuad',
        },
        y: {
            from: 30,
            to: 0,
            // ease: 'inOutQuad',
        },
        onComplete: () => clearStyle({ target, style: ['opacity', 'transform'] }),
    });
};
