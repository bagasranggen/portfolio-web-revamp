'use client';

import React, { Ref } from 'react';

import { ArrayStringProps, ClassnameProps } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

import { useMeasure } from 'react-use';

import Base, { BaseProps } from '@/components/common/Heading';

export type FluidProps = {
    wrapperClassName?: ClassnameProps['className'];
} & BaseProps;

const Fluid = ({ children, className, wrapperClassName, ...props }: FluidProps): React.ReactElement => {
    const [wrapperRef, { width: wrapperWidth }] = useMeasure();
    const [headingRef, { width: headingWidth, height: headingHeight }] = useMeasure();

    const scale = wrapperWidth / headingWidth;
    const scaleHeightDiff = headingHeight * (scale - 1);

    const headingStyle: React.CSSProperties = {
        ...(scale ? { '--scale': scale } : {}),
        ...(scaleHeightDiff ? { '--scale-height-diff': `${scaleHeightDiff}px` } : {}),
    } as React.CSSProperties;

    let headingClass: ArrayStringProps = ['heading heading--fluid'];
    if (className) headingClass.push(className);
    headingClass = joinArrayString(headingClass);

    let wrapperClass: ArrayStringProps = ['opacity-100 transition-opacity'];
    if (!scale) wrapperClass.push('opacity-0!');
    if (wrapperClassName) wrapperClass.push(wrapperClassName);
    wrapperClass = joinArrayString(wrapperClass);

    return (
        <div
            ref={wrapperRef as Ref<HTMLDivElement>}
            className={wrapperClass}>
            <Base
                {...props}
                ref={headingRef as Ref<HTMLHeadingElement>}
                className={headingClass}
                style={headingStyle}>
                {children}
            </Base>
        </div>
    );
};

export default Fluid;
