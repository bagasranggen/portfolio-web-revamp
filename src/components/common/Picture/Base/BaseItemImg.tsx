import React from 'react';

import { ArrayStringProps } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

import { BaseItemProps } from '@/components/common/Picture/Base';

const BaseItemImg = (item: BaseItemProps): React.ReactElement => {
    const { className, srcRetina, ...rest } = item;

    let imageClass: ArrayStringProps = [];
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
