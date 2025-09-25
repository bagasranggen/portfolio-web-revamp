'use client';

import React, { useEffect, useRef } from 'react';

import { createScope, Scope } from 'animejs';

import { ANIMATION_ATTRIBUTE } from '@/components/common/Animation/handles';
import { ANIMATION_DATA_HANDLES } from '@/components/common/Animation/handlesData';

export type AnimationTypes = {
    type?: (typeof ANIMATIONS_TYPE)[keyof typeof ANIMATIONS_TYPE];
    children: React.ReactElement;
};

const Animation = ({ type, children }: AnimationTypes): React.ReactElement => {
    const root = useRef(null);
    const scope = useRef<Scope | null>(null);

    let props = { ref: root };
    if (type) {
        props = Object.assign(props, { [ANIMATION_ATTRIBUTE.TYPE]: type });
    }

    useEffect(() => {
        const target = root.current;

        if (!target) return;
        if (!type) return;

        const animationType: string | null = (target as HTMLElement)?.getAttribute(ANIMATION_ATTRIBUTE.TYPE);

        scope.current = createScope({ root }).add((self) => {
            let animation = ANIMATION_DATA_HANDLES?.[animationType as keyof typeof ANIMATION_DATA_HANDLES] ?? undefined;

            if (animation) animation({ target });
        });

        return () => {
            if (scope.current) scope.current.revert();
        };
    }, [type]);

    return React.cloneElement(children, props);
};

export default Animation;
