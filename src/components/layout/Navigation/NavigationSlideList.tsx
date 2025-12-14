import React, { PropsWithChildren, useState } from 'react';

import { ArrayStringProps, ClassnameProps } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

import List, { InlineProps } from '@/components/common/List';
import Button from '@/components/common/Button';

export type NavigationSlideListProps = PropsWithChildren & Pick<InlineProps, 'items'> & ClassnameProps;

const NavigationSlideList = ({
    children,
    items,
    className,
    ...props
}: NavigationSlideListProps): React.ReactElement | null => {
    if (!items || items.length === 0) return null;
    if (!children) return null;

    const [open, setOpen] = useState<boolean>(false);

    let wrapperClass: ArrayStringProps = ['relative flex justify-end items-center'];
    if (className) wrapperClass.push(className);
    wrapperClass = joinArrayString(wrapperClass);

    let listClass: ArrayStringProps = ['transition-transform'];
    listClass.push('mb-[0.25rem]');
    listClass.push('text-[1.5rem] tracking-[.45rem]');
    listClass.push('text-[1.5rem] tracking-[.45rem]');
    listClass.push('[&>.active]:font-bold');
    if (!open) listClass.push('translate-x-full');
    listClass = joinArrayString(listClass);

    return (
        <div
            className={wrapperClass}
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
