import { AnimationElementTypes } from '@/libs/@types';

import { animate } from 'animejs';

import { fadeAnimation } from '@/components/common/Animation/elements/Fade/fadeAnimation';

export const Fade = ({ target }: AnimationElementTypes) => {
    animate(target, fadeAnimation({ clearTarget: target, clearStyle: true, y: 30 }));
};

export { fadeAnimation };
