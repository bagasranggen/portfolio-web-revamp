import { AnimationElementProps } from '@/libs/@types';
import { getAnimationElementOrder } from '@/libs/utils';

import { createTimeline, stagger, splitText } from 'animejs';

import { fadeAnimation } from '@/components/common/Animation/elements/Fade';

export const BannerText = ({ target }: AnimationElementProps) => {
    const animationInitClassName = 'animation--init';
    const heading = getAnimationElementOrder({ target, order: 1 });
    const title = getAnimationElementOrder({ target, order: 2 });
    const description = getAnimationElementOrder({ target, order: 3 });

    if (!heading || !title) return;

    const { chars: charsHeading } = splitText(heading, { chars: true });
    const { chars: charsTitle } = splitText(title, { chars: true });

    heading.classList.remove(animationInitClassName);
    title.classList.remove(animationInitClassName);

    const tl = createTimeline({
        defaults: { ease: 'inOut(3)', duration: 650 },
    });

    tl.add([charsHeading, charsTitle], fadeAnimation({ opacityDelay: stagger(20, { from: 'random' }) }));

    if (description) {
        description.classList.remove(animationInitClassName);
        tl.add(description, fadeAnimation({ clearTarget: description, clearStyle: true }), '-=800');
    }
};
