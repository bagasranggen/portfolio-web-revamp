import React, { forwardRef } from 'react';

import { ElementTagsTypes } from '@/libs/@types';

import Link, { LinkTypes } from '@/components/common/Link';

export type BaseAnchorTypes = { as?: 'anchor' } & LinkTypes;

export type BaseButtonTypes = { as?: 'button' } & React.HTMLAttributes<HTMLButtonElement>;

export type BaseDivTypes = { as?: Extract<ElementTagsTypes, 'div' | 'span'> } & React.HTMLAttributes<HTMLDivElement>;

export type BaseTypes = BaseAnchorTypes | BaseButtonTypes | BaseDivTypes;

const Base = forwardRef<HTMLAnchorElement | HTMLButtonElement | HTMLDivElement, BaseTypes>(
    ({ as, children, ...props }, ref) => {
        if (as === 'anchor') {
            return (
                <Link
                    ref={ref as React.ForwardedRef<HTMLAnchorElement>}
                    {...(props as LinkTypes)}>
                    {children}
                </Link>
            );
        }

        if (as === 'button') {
            return (
                <button
                    ref={ref as React.ForwardedRef<HTMLButtonElement>}
                    {...(props as Omit<BaseButtonTypes, 'as'>)}>
                    {children}
                </button>
            );
        }

        let Wrapper: any = 'div';
        if (as) Wrapper = as;

        return (
            <Wrapper
                ref={ref as React.ForwardedRef<HTMLDivElement>}
                {...props}>
                {children}
            </Wrapper>
        );
    }
);

export default Base;
