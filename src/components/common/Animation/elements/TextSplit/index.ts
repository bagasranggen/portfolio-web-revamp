import { AnimationElementTypes } from '@/libs/@types';

import { createTimeline, stagger, text } from 'animejs';

import { fadeAnimation } from '@/components/common/Animation/elements/Fade';

export type TextSplitTypes = {
    text?: string;
    targetFadeAnimation?: boolean;
} & AnimationElementTypes;

export const TextSplit = ({ target, text: textProps, targetFadeAnimation }: TextSplitTypes) => {
    let isNew = undefined;
    if (textProps && target.innerText.toLowerCase() !== textProps.toLowerCase()) {
        isNew = textProps;
    }

    const split = text.split(target, { chars: true });

    if (isNew) split.html = isNew;

    split.refresh();

    const tl = createTimeline({});

    if (targetFadeAnimation) {
        tl.add(target, fadeAnimation({ clearTarget: target, clearStyle: true }));
    }

    tl.add(
        split.chars,
        fadeAnimation({
            opacityDelay: stagger(60, { from: 'random' }),
        }),
        targetFadeAnimation ? '<<+=200' : undefined
    );
};
