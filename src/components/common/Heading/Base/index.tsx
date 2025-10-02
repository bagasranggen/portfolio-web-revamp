import React, { PropsWithChildren } from 'react';

import { ArrayStringTypes, ElementTagsTypes } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

export type BaseTypes = {
    as?: Extract<ElementTagsTypes, 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>;
    variant?: 'title';
} & (React.HTMLAttributes<HTMLHeadingElement> & PropsWithChildren);

const Base = ({ as: Heading = 'h2', className, variant, children, ...props }: BaseTypes): React.ReactElement => {
    let headingClass: ArrayStringTypes = [];
    if (variant) headingClass.push('heading');
    if (variant === 'title') headingClass.push('heading--title');
    if (className) headingClass.push(className);
    headingClass = joinArrayString(headingClass);

    let headingProps = props;
    if (headingClass) headingProps = Object.assign(headingProps, { className: headingClass });

    return <Heading {...headingProps}>{children}</Heading>;
};

export default Base;
