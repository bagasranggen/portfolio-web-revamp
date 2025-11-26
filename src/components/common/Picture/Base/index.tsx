import React, { forwardRef } from 'react';
import { ImageProps } from 'next/image';

import BaseItemImg from '@/components/common/Picture/Base/BaseItemImg';
import BaseItemSource from '@/components/common/Picture/Base/BaseItemSource';
import { ArrayStringProps } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

export type BaseItemProps = {
    media?: number;
    srcRetina?: string;
    type?: string;
} & ImageProps;

export type BaseProps = {
    items?: BaseItemProps[];
} & React.HTMLAttributes<HTMLPictureElement>;

const Base = forwardRef<HTMLPictureElement, BaseProps>(
    ({ items = [], className, ...props }, ref): React.ReactElement | null => {
        let pictureClass: ArrayStringProps = [];
        if (className) pictureClass.push(className);
        pictureClass = joinArrayString(pictureClass);

        let pictureProps = props;
        if (pictureClass) pictureProps = Object.assign(pictureProps, { className: pictureClass });

        if (!items || items.length === 0) return null;

        return (
            <picture
                ref={ref}
                {...pictureProps}>
                {items.map((item, i) => {
                    const Image = items.length - 1 === i ? BaseItemImg : BaseItemSource;
                    const { alt, title, ...restItem } = item as any;

                    let props = { ...restItem, alt };
                    if (!alt && title) props = { ...props, alt: title };

                    return (
                        // eslint-disable-next-line jsx-a11y/alt-text
                        <Image
                            key={i}
                            {...props}
                        />
                    );
                })}
            </picture>
        );
    }
);

Base.displayName = 'Base';
export default Base;
