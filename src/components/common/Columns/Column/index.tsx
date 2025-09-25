import React, { PropsWithChildren } from 'react';

import { ArrayStringTypes, BreakpointsTypes, CreateArrayWithLengthX, NumericRange } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';
import { createBreakpointClass } from '@/libs/factory';

export type ColumnTypes = PropsWithChildren<
    Partial<Record<BreakpointsTypes, NumericRange<CreateArrayWithLengthX<1>, 12>>> & React.HTMLAttributes<HTMLElement>
>;

const Column = ({ className, children, xs, sm, md, lg, xl, xxl, ...props }: ColumnTypes): React.ReactElement => {
    const sizesArr = Object.entries({ xs, sm, md, lg, xl, xxl });
    const utilityClassName = 'column';

    let columnClass: ArrayStringTypes = [];
    if (sizesArr.length === 0) columnClass.push(utilityClassName);
    if (sizesArr.length > 0) {
        sizesArr.forEach(([key, value]) => {
            if (value && typeof columnClass !== 'string') {
                columnClass.push(
                    createBreakpointClass({ breakpoint: key as BreakpointsTypes, className: utilityClassName, value })
                );
            }
        });
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
