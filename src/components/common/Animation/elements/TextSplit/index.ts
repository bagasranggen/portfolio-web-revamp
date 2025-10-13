import { AnimationElementTypes } from '@/libs/@types';
import { animate, stagger, text } from 'animejs';

import { fadeAnimation } from '@/components/common/Animation/elements/Fade';

export const TextSplit = ({ target }: AnimationElementTypes) => {
    let isNew = undefined;
    if (target.innerText.toLowerCase() !== target.title.toLowerCase()) {
        isNew = target.title.toUpperCase();
    }

    const split = text.split(target, { chars: true });

    if (isNew) split.html = isNew;

    split.refresh();

    animate(
        split.chars,
        fadeAnimation({
            opacityDelay: stagger(60, { from: 'random' }),
        })
    );
};
