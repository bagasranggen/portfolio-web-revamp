import React, { JSX } from 'react';
import { LocaleProps } from '@/libs/@types/lang';

export type Component<Props> = {
    (props: Props): React.ReactElement | null;
};

export type RefComponent<Props, Element> = React.ForwardRefExoticComponent<Props & React.RefAttributes<Element>>;

export type ClassnameProps = Pick<React.HTMLAttributes<HTMLElement>, 'className'>;

export type ArrayStringProps = string | string[];

export type ElementTagsProps = keyof JSX.IntrinsicElements;

export type BreakpointsProps = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
