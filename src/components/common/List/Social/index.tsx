import React, { PropsWithChildren } from 'react';

import Inline, { InlineTypes } from '@/components/common/List/Inline';
import Link, { LinkTypes } from '@/components/common/Link';
import { ArrayStringTypes } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

export type SocialItemTypes = PropsWithChildren<{
    link?: LinkTypes;
}>;

export type SocialTypes = {
    items: SocialItemTypes[];
} & InlineTypes;

const Social = ({ items: itemsProps, className, ...props }: SocialTypes): React.ReactElement => {
    const items: InlineTypes['items'] = [];

    if (itemsProps && itemsProps.length > 0) {
        itemsProps.forEach(({ children, link }) => {
            let element = <>{children}</>;
            if (link) element = <Link {...link}>{children}</Link>;

            items.push({
                children: element,
            });
        });
    }

    let listClass: ArrayStringTypes = ['list--social'];
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
