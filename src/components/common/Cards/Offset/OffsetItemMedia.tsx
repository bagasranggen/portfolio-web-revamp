'use client';

import React, { Ref } from 'react';

import { useMeasure, useWindowSize } from 'react-use';

import Picture, { BaseTypes } from '@/components/common/Picture';

export type OffsetItemMediaTypes = {
    containerWidth?: number;
    media?: BaseTypes['items'];
};

const OffsetItemMedia = ({ containerWidth, media }: OffsetItemMediaTypes): React.ReactElement => {
    const { width: windowWidth } = useWindowSize();
    const [mediaRef, { width, height }] = useMeasure();

    let mediaStyle: React.CSSProperties = {};
    if (windowWidth && windowWidth > 0 && containerWidth && containerWidth > 0 && width > 0) {
        mediaStyle = Object.assign(mediaStyle, { width: width + (windowWidth - containerWidth) / 2 });
    }
    if (height > 0) {
        mediaStyle = Object.assign(mediaStyle, { height: height });
    }

    return (
        <div
            ref={mediaRef as Ref<HTMLDivElement>}
            className="card__media">
            <Picture
                style={mediaStyle}
                items={media}
            />
        </div>
    );
};

export default OffsetItemMedia;
