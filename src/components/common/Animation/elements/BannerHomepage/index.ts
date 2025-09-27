import { AnimationElementTypes } from '@/libs/@types';
import { clearStyle, getAnimationElementOrder } from '@/libs/utils';

import { text, stagger, createTimeline, animate, onScroll, AnimationParams } from 'animejs';

export const BannerHomepage = ({ target }: AnimationElementTypes) => {
    const media = getAnimationElementOrder({ target, order: 1 });
    const heading = getAnimationElementOrder({ target, order: 2 });
    const label = getAnimationElementOrder({ target, order: 3 });
    const description = getAnimationElementOrder({ target, order: 4 });

    if (!heading || !media) return;

    const { chars } = text.split(heading, { chars: true });

    let charsLabel = undefined;

    if (label) {
        const { chars } = text.split(label, { chars: true });

        charsLabel = chars;
    }

    const staggerAnimation: AnimationParams = {
        opacity: {
            from: 0,
            to: 1,
            delay: stagger(20, { from: 'random' }),
        },
    };

    const tl = createTimeline({
        defaults: { ease: 'inOut(3)', duration: 650 },
    });

    tl.add(media, {
        opacity: { from: 0, to: 1 },
        onComplete: () => clearStyle({ target: media, style: ['opacity'] }),
    });

    tl.add([chars, charsLabel], staggerAnimation, '<<+=200');

    if (description) tl.add(description, { opacity: { from: 0, to: 1 } }, '-=700');

    // Scroll Animation
    animate(target, {
        y: {
            from: 0,
            to: 400,
        },
        autoplay: onScroll({
            target,
            enter: 'bottom bottom',
            leave: 'bottom bottom+=100vh',
            sync: true,
            // debug: true,
        }),
    });
};
