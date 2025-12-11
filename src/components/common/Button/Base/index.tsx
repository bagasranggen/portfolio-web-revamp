import React, { forwardRef } from 'react';

import { ArrayStringProps, ElementTagsProps } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

import Link, { LinkProps } from '@/components/common/Link';

export type BaseCommonProps = {
    color?: 'dark' | 'light';
};

export type BaseAnchorProps = { as?: 'anchor' } & LinkProps & BaseCommonProps;

export type BaseButtonProps = { as?: 'button' } & React.ButtonHTMLAttributes<HTMLButtonElement> & BaseCommonProps;

export type BaseDivProps = { as?: Extract<ElementTagsProps, 'div' | 'span'> } & React.HTMLAttributes<HTMLDivElement> &
    BaseCommonProps;

export type BaseProps = BaseAnchorProps | BaseButtonProps | BaseDivProps;

const Base = forwardRef<HTMLAnchorElement | HTMLButtonElement | HTMLDivElement, BaseProps>(
    ({ as, children, className, color, ...props }, ref) => {
        let btnClass: ArrayStringProps = ['btn'];
        if (color === 'dark') btnClass.push('btn--dark');
        if (color === 'light') btnClass.push('btn--light');
        if (className) btnClass.push(className);
        btnClass = joinArrayString(btnClass);

        if (as === 'anchor') {
            return (
                <Link
                    ref={ref as React.ForwardedRef<HTMLAnchorElement>}
                    className={btnClass}
                    {...(props as LinkProps)}>
                    {children}
                </Link>
            );
        }

        if (as === 'button') {
            return (
                <button
                    ref={ref as React.ForwardedRef<HTMLButtonElement>}
                    className={btnClass}
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
                className={btnClass}
                {...props}>
                {children}
            </Wrapper>
        );
    }
);

export default Base;
