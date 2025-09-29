import { AnimationElementTypes } from '@/libs/@types';

import { ANIMATION_ATTRIBUTE } from '@/components/common/Animation/handles';

export type GetAnimationElementOrderTypes = {
    order: number;
} & Pick<AnimationElementTypes, 'target'>;

export const getAnimationElementOrder = ({ target, order }: GetAnimationElementOrderTypes) => {
    let element = undefined;

    if (target && order) {
        const tmp = target?.querySelector(`[${ANIMATION_ATTRIBUTE.ORDER}="${order}"]`);

        if (tmp) element = tmp as HTMLElement;
    }

    return element;
};
