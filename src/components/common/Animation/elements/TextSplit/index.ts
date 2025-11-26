import { AnimationElementProps } from '@/libs/@types';

import { createTimeline, stagger, splitText } from 'animejs';

import { fadeAnimation } from '@/components/common/Animation/elements/Fade';

export type TextSplitProps = {
    text?: string;
    targetFadeAnimation?: boolean;
} & AnimationElementProps;

export const TextSplit = ({ target, text: textProps, targetFadeAnimation }: TextSplitProps) => {
    let isNew = undefined;
    if (textProps && target.innerText.toLowerCase() !== textProps.toLowerCase()) {
        isNew = textProps;
    }

    const split = splitText(target, { chars: true });

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
