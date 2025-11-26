import React, { forwardRef } from 'react';

import { ElementTagsProps } from '@/libs/@types';

import Link, { LinkProps } from '@/components/common/Link';

export type BaseAnchorProps = { as?: 'anchor' } & LinkProps;

export type BaseButtonProps = { as?: 'button' } & React.ButtonHTMLAttributes<HTMLButtonElement>;

export type BaseDivProps = { as?: Extract<ElementTagsProps, 'div' | 'span'> } & React.HTMLAttributes<HTMLDivElement>;

export type BaseProps = BaseAnchorProps | BaseButtonProps | BaseDivProps;

const Base = forwardRef<HTMLAnchorElement | HTMLButtonElement | HTMLDivElement, BaseProps>(
    ({ as, children, ...props }, ref) => {
        if (as === 'anchor') {
            return (
                <Link
                    ref={ref as React.ForwardedRef<HTMLAnchorElement>}
                    {...(props as LinkProps)}>
                    {children}
                </Link>
            );
        }

        if (as === 'button') {
            return (
                <button
                    ref={ref as React.ForwardedRef<HTMLButtonElement>}
                    {...(props as Omit<BaseButtonProps, 'as'>)}>
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
