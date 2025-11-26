import { AnimationElementProps } from '@/libs/@types';

import { ANIMATION_ATTRIBUTE } from '@/components/common/Animation/handles';

export type GetAnimationElementOrderProps = {
    order: number;
} & Pick<AnimationElementProps, 'target'>;

export const getAnimationElementOrder = ({ target, order }: GetAnimationElementOrderProps) => {
    let element = undefined;

    if (target && order) {
        const tmp = target?.querySelector(`[${ANIMATION_ATTRIBUTE.ORDER}="${order}"]`);

        if (tmp) element = tmp as HTMLElement;
    }

    return element;
};
