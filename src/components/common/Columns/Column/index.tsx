import React, { PropsWithChildren } from 'react';

import { ArrayStringTypes, BreakpointsTypes, CreateArrayWithLengthX, NumericRange } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';
import { createBreakpointClass } from '@/libs/factory';

export type ColumnTypes = {
    offset?:
        | Partial<Record<BreakpointsTypes, NumericRange<CreateArrayWithLengthX<1>, 12>>>
        | NumericRange<CreateArrayWithLengthX<1>, 12>;
} & (Partial<Record<BreakpointsTypes, NumericRange<CreateArrayWithLengthX<1>, 12>>> &
    React.HTMLAttributes<HTMLElement> &
    PropsWithChildren);

const Column = ({
    className,
    children,
    offset,
    xs,
    sm,
    md,
    lg,
    xl,
    xxl,
    ...props
}: ColumnTypes): React.ReactElement => {
    const sizesArr = Object.entries({ xs, sm, md, lg, xl, xxl });
    const utilityColumnClassName = 'column';
    const utilityColumnOffsetClassName = 'column-offset';

    let columnClass: ArrayStringTypes = [];

    if (sizesArr.length === 0) columnClass.push(utilityColumnClassName);
    if (sizesArr.length > 0) {
        sizesArr.forEach(([key, value]) => {
            if (value && typeof columnClass !== 'string') {
                columnClass.push(
                    createBreakpointClass({
                        breakpoint: key as BreakpointsTypes,
                        className: utilityColumnClassName,
                        value,
                    })
                );
            }
        });
    }

    if (offset) {
        if (typeof offset === 'number') {
            columnClass.push(createBreakpointClass({ className: utilityColumnOffsetClassName, value: offset }));
        }

        if (typeof offset === 'object') {
            const offsetArr = Object.entries(offset);

            if (offsetArr && offsetArr.length > 0) {
                offsetArr.forEach(([key, value]) => {
                    if (value && typeof columnClass !== 'string') {
                        columnClass.push(
                            createBreakpointClass({
                                breakpoint: key as BreakpointsTypes,
                                className: utilityColumnOffsetClassName,
                                value,
                            })
                        );
                    }
                });
            }
        }
    }

    if (className) columnClass.push(className);
    columnClass = joinArrayString(columnClass);

    return (
        <div
            {...(columnClass ? { className: columnClass } : {})}
            {...props}>
            {children}
        </div>
    );
};

export default Column;
