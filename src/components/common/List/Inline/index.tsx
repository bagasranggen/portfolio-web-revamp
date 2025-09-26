import React from 'react';

import { ArrayStringTypes } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

import Base, { BaseTypes } from '@/components/common/List';

export type InlineTypes = BaseTypes;

const Inline = ({ className, items, ...props }: InlineTypes): React.ReactElement => {
    let listCLass: ArrayStringTypes = ['list--inline'];
    if (className) listCLass.push(className);
    listCLass = joinArrayString(listCLass);

    return (
        <Base
            {...props}
            className={listCLass}
            items={items?.map((item) => {
                return {
                    ...item,
                    className: 'list__item',
                };
            })}
        />
    );
};

export default Inline;
