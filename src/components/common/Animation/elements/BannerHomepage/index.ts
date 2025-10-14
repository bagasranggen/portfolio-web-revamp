import { AnimationElementTypes } from '@/libs/@types';
import { getAnimationElementOrder } from '@/libs/utils';

import { text, stagger, createTimeline, animate, onScroll } from 'animejs';

import { fadeAnimation } from '@/components/common/Animation/elements/Fade';

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

    const tl = createTimeline({
        defaults: { ease: 'inOut(3)', duration: 450 },
    });

    tl.add(media, {
        keyframes: [{ clipPath: 'inset(0% 75% 0% 25%)' }, { clipPath: 'inset(0% 0% 0% 0%)' }],
        duration: 1200,
    });

    tl.add([chars, charsLabel], fadeAnimation({ opacityDelay: stagger(20, { from: 'random' }) }), '<<+=200');

    if (description) tl.add(description, fadeAnimation({ clearTarget: description, clearStyle: true }), '-=700');

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
