import React, { forwardRef, PropsWithChildren, useState } from 'react';

import { ArrayStringProps } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

import List, { InlineProps } from '@/components/common/List';
import Button from '@/components/common/Button';

export type NavigationSlideListProps = PropsWithChildren & Pick<InlineProps, 'items'>;

const NavigationSlideList = ({ children, items, ...props }: NavigationSlideListProps): React.ReactElement | null => {
    if (!items || items.length === 0) return null;
    if (!children) return null;

    const [open, setOpen] = useState<boolean>(false);

    let listClass: ArrayStringProps = ['transition-transform'];
    if (!open) listClass.push('translate-x-full');
    listClass = joinArrayString(listClass);

    return (
        <div
            className="relative flex justify-end items-center"
            {...props}>
            <div className="overflow-hidden">
                <List.Inline
                    className={listClass}
                    onClick={() => setOpen(false)}
                    items={items}
                />
            </div>

            <Button
                cleanClassName
                as="button"
                className="ms-1"
                onClick={() => {
                    setOpen((prevState) => !prevState);
                }}>
                {children}
            </Button>
        </div>
    );
};

export default NavigationSlideList;
