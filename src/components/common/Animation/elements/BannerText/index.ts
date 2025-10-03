import { AnimationElementTypes } from '@/libs/@types';
import { getAnimationElementOrder } from '@/libs/utils';

import { createTimeline, stagger, text } from 'animejs';

import { fadeAnimation } from '@/components/common/Animation/elements/Fade';

export const BannerText = ({ target }: AnimationElementTypes) => {
    const heading = getAnimationElementOrder({ target, order: 1 });
    const title = getAnimationElementOrder({ target, order: 2 });
    const description = getAnimationElementOrder({ target, order: 3 });

    if (!heading || !title) return;

    const { chars: charsHeading } = text.split(heading, { chars: true });
    const { chars: charsTitle } = text.split(title, { chars: true });

    const tl = createTimeline({
        defaults: { ease: 'inOut(3)', duration: 650 },
    });

    tl.add([charsHeading, charsTitle], fadeAnimation({ opacityDelay: stagger(20, { from: 'random' }) }));

    if (description) tl.add(description, fadeAnimation({ clearTarget: description, clearStyle: true }), '-=800');
};
