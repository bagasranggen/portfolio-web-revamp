import React, { PropsWithChildren } from 'react';

import Inline, { InlineProps } from '@/components/common/List/Inline';
import Link, { LinkProps } from '@/components/common/Link';
import { ArrayStringProps } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

export type SocialItemProps = PropsWithChildren<{
    link?: LinkProps;
}>;

export type SocialProps = {
    items: SocialItemProps[];
} & InlineProps;

const Social = ({ items: itemsProps, className, ...props }: SocialProps): React.ReactElement => {
    const items: InlineProps['items'] = [];

    if (itemsProps && itemsProps.length > 0) {
        itemsProps.forEach(({ children, link }) => {
            let element = <>{children}</>;
            if (link) element = <Link {...link}>{children}</Link>;

            items.push({
                children: element,
            });
        });
    }

    let listClass: ArrayStringProps = ['list--social'];
    if (className) listClass.push(className);
    listClass = joinArrayString(listClass);

    return (
        <Inline
            {...props}
            className={listClass}
            items={items}
        />
    );
};

export default Social;
