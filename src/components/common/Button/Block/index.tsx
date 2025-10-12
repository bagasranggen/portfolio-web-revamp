import React from 'react';

import { ArrayStringTypes } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

import Base, { BaseTypes } from '@/components/common/Button';

export type BlockTypes = {
    variant?: 'block';
    color?: 'dark' | 'light';
    size?: 'sm' | 'md';
} & BaseTypes;

const Block = ({
    variant = 'block',
    color = 'light',
    size = 'md',
    className,
    ...props
}: BlockTypes): React.ReactElement => {
    let buttonClass: ArrayStringTypes = ['btn'];
    if (variant === 'block') buttonClass.push('btn--block');
    if (color === 'dark') buttonClass.push('btn--dark');
    if (color === 'light') buttonClass.push('btn--light');
    if (size === 'sm') buttonClass.push('btn--sm');
    if (size === 'md') buttonClass.push('btn--md');
    if (className) buttonClass.push(className);
    buttonClass = joinArrayString(buttonClass);

    return (
        <Base
            className={buttonClass}
            {...props}
        />
    );
};

export default Block;
