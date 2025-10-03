import React, { PropsWithChildren } from 'react';

import { ArrayStringTypes, BreakpointsTypes, CreateArrayWithLengthX, NumericRange } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';
import { createBreakpointClass } from '@/libs/factory';

export const GUTTER_HANDLE: Partial<Record<GutterTypes, string>> = {
    gutterX: 'gutter-x',
    gutterY: 'gutter-y',
} as const;

export type GutterTypes = 'gutter' | 'gutterX' | 'gutterY';

export type BaseGutterTypes = NumericRange<CreateArrayWithLengthX<0>, 10>;

export type BaseTypes = PropsWithChildren<
    Partial<Record<GutterTypes, Partial<Record<BreakpointsTypes, BaseGutterTypes> | BaseGutterTypes>>> &
        React.HTMLAttributes<HTMLElement>
>;

const Base = ({ className, gutter, gutterX, gutterY, children, ...props }: BaseTypes): React.ReactElement => {
    const guttersArr = Object.entries({ gutter, gutterX, gutterY });

    let rowClass: ArrayStringTypes = ['row'];

    if (guttersArr.length > 0) {
        guttersArr.forEach(([type, typeValue]) => {
            let handleClassName: string = type;
            if (type && GUTTER_HANDLE?.[type as keyof typeof GUTTER_HANDLE]) {
                handleClassName = GUTTER_HANDLE[type as keyof typeof GUTTER_HANDLE] as string;
            }

            if (typeValue && typeof typeValue !== 'object') {
                if (typeof rowClass !== 'string') {
                    rowClass.push(
                        createBreakpointClass({
                            className: handleClassName,
                            value: typeValue as number,
                        })
                    );
                }
            }

            if (typeValue && typeof typeValue === 'object') {
                const gutterArr = Object.entries(typeValue);

                if (gutterArr.length > 0) {
                    gutterArr.forEach(([key, value]) => {
                        if (typeof rowClass !== 'string') {
                            rowClass.push(
                                createBreakpointClass({
                                    breakpoint: key as BreakpointsTypes,
                                    className: handleClassName,
                                    value,
                                })
                            );
                        }
                    });
                }
            }
        });
    }

    if (className) rowClass.push(className);
    rowClass = joinArrayString(rowClass);

    return (
        <div
            className={rowClass}
            {...props}>
            {children}
        </div>
    );
};

export default Base;
