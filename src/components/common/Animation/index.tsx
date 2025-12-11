'use client';

import React, { useEffect, useRef } from 'react';

import { AnimationBaseProps } from '@/libs/@types';

import { createScope, Scope } from 'animejs';

import { ANIMATION_ATTRIBUTE } from '@/components/common/Animation/handles';
import { ANIMATION_DATA_HANDLES } from '@/components/common/Animation/handlesData';

export type AnimationProps = {
    order?: number;
    trigger?: number;
    children: React.ReactElement;
} & AnimationBaseProps;

const Animation = ({ type, order, trigger, children, ...props }: AnimationProps): React.ReactElement => {
    const root = useRef(null);
    const scope = useRef<Scope | null>(null);

    let elementProps = { ref: root };

    if (type) {
        elementProps = Object.assign(elementProps, { [ANIMATION_ATTRIBUTE.TYPE]: type });
    }

    if (!type && order) {
        elementProps = Object.assign(elementProps, { [ANIMATION_ATTRIBUTE.ORDER]: order });
    }

    let options = undefined;

    if ('options' in props && props?.options) options = Object.assign(options ?? {}, props.options);

    useEffect(() => {
        const target = root.current;

        if (!target) return;
        if (!type) return;
        if (order) return;

        const animationType: string | null = (target as HTMLElement)?.getAttribute(ANIMATION_ATTRIBUTE.TYPE);

        scope.current = createScope({ root }).add((self) => {
            let animation = ANIMATION_DATA_HANDLES?.[animationType as keyof typeof ANIMATION_DATA_HANDLES] ?? undefined;

            if (animation) animation({ target, ...(options ? options : {}) });
        });

        return () => {
            if (scope.current) scope.current.revert();
        };
    }, [type, trigger, order]);

    return React.cloneElement(children, elementProps);
};

export default Animation;

export type * from './types';
