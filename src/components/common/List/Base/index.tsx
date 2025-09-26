import React, { PropsWithChildren } from 'react';

import { ArrayStringTypes, ElementTagsTypes } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

export type BaseItemTypes = React.HTMLAttributes<HTMLLIElement> & PropsWithChildren;

export type BaseTypes = {
    as?: Extract<ElementTagsTypes, 'ol' | 'ul'>;
    items?: BaseItemTypes[];
} & React.HTMLAttributes<HTMLUListElement>;

const Base = ({ as: List = 'ul', items = [], className, ...props }: BaseTypes): React.ReactElement | null => {
    let listClass: ArrayStringTypes = ['list'];
    if (className) listClass.push(className);
    listClass = joinArrayString(listClass);

    if (!items || items.length === 0) return null;

    return (
        <List
            className={listClass}
            {...props}>
            {items.map(({ children, ...props }: BaseItemTypes, i: number) => {
                return (
                    <li
                        key={i}
                        {...props}>
                        {children}
                    </li>
                );
            })}
        </List>
    );
};

export default Base;
