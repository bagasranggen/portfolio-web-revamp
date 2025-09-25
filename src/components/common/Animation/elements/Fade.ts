import { animate } from 'animejs';
import { clearStyle } from '@/libs/utils';

export const Fade = ({ target }) => {
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
