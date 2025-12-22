'use client';

import Heading from '@/components/common/Heading';
import React from 'react';
import { useMeasure } from 'react-use';

export type NotFoundIndexProps = {};

const NotFoundIndex = ({}: NotFoundIndexProps): React.ReactElement => {
    const [wrapperRef, { width: wrapperWidth }] = useMeasure();
    const [headingRef, { width: headingWidth, height: headingHeight }] = useMeasure();

    const scale = wrapperWidth / headingWidth;

    console.log({
        wrapperWidth,
        headingWidth,
        scale,
        heightDiff: headingHeight * (scale - 1),
    });

    const headingStyle: React.CSSProperties = {
        '--scale': scale,
        '--scale-height-diff': `${headingHeight * (scale - 1)}px`,
    } as React.CSSProperties;

    let headingClass: string = '';

    return (
        <>
            <div className="mt-[var(--spacing-header)]">
                <Heading.Fluid
                    as="h1"
                    wrapperClassName="mx-5 -mt-15"
                    className="leading-none">
                    404
                </Heading.Fluid>
            </div>
        </>
    );
};

export default NotFoundIndex;
