import { AnimationElementProps } from '@/libs/@types';
import { getElementDimension } from '@/libs/utils';

import { animate, onScroll } from 'animejs';

export const Marquee = ({ target }: AnimationElementProps) => {
    const wrapper = target.querySelector('.marquee__wrapper');
    const items = target.querySelectorAll('.marquee__item');
    const itemsHalf = items ? Math.ceil(items.length / 2) : 0;

    if (items.length <= 1 || !wrapper) return;

    const { outerWidth: textOuterWidth } = getElementDimension(items[0]);

    let speed = (textOuterWidth / 2) * 2 * (10 * itemsHalf);

    animate(wrapper, {
        x: {
            from: 0,
            to: textOuterWidth * itemsHalf * -1,
            ease: 'linear',
        },
        autoplay: onScroll({
            target,
        }),
        duration: speed,
        loop: true,
    });
};
