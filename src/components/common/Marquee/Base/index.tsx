'use client';

import React, { PropsWithChildren, Ref } from 'react';

import { ArrayStringProps, ClassnameProps } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';
import { createArrayFromNumber } from '@/libs/factory';

import { useWindowSize, useMeasure } from 'react-use';

import Animation from '@/components/common/Animation';
import BaseItem from '@/components/common/Marquee/Base/BaseItem';

export type BaseProps = PropsWithChildren & ClassnameProps;

const Base = ({ className, children }: BaseProps): React.ReactElement => {
    const { width: windowWidth } = useWindowSize();
    const [textRef, { width: textWidth }] = useMeasure();

    let repeat = 0;
    if (windowWidth > 0 && textWidth > 0) repeat = Math.ceil((windowWidth * 2) / textWidth);

    let marqueeClass: ArrayStringProps = ['marquee'];
    if (className) marqueeClass.push(className);
    marqueeClass = joinArrayString(marqueeClass);

    return (
        <Animation
            type="marquee"
            trigger={repeat}>
            <div className={marqueeClass}>
                <div className="marquee__wrapper">
                    <BaseItem ref={textRef as Ref<HTMLDivElement>}>{children}</BaseItem>

                    {createArrayFromNumber(repeat).map((_, i: number) => {
                        return <BaseItem key={i}>{children}</BaseItem>;
                    })}
                </div>
            </div>
        </Animation>
    );
};

export default Base;
