import React from 'react';

import { ArrayStringTypes } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

import { BaseItemTypes } from '@/components/common/Picture/Base';

const BaseItemImg = (item: BaseItemTypes): React.ReactElement => {
    const { className, srcRetina, ...rest } = item;

    let imageClass: ArrayStringTypes = [];
    if (className) imageClass.push(className);
    imageClass = joinArrayString(imageClass);

    const props: any = {
        ...rest,
        ...(srcRetina ? { srcSet: `${srcRetina} 2x` } : {}),
        className: imageClass,
    };

    return (
        /* eslint-disable @next/next/no-img-element */
        /* eslint-disable jsx-a11y/alt-text */
        <img {...(props as any)} />
        /* eslint-disable @next/next/no-img-element */
        /* eslint-disable jsx-a11y/alt-text */
    );
};

export default BaseItemImg;
