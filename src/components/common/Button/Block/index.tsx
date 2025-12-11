import React from 'react';

import { ArrayStringProps } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

import Base, { BaseProps } from '@/components/common/Button';

export type BlockProps = {
    variant?: 'block';
    size?: 'sm' | 'md';
} & BaseProps;

const Block = ({
    variant = 'block',
    color = 'light',
    size = 'md',
    className,
    ...props
}: BlockProps): React.ReactElement => {
    let buttonClass: ArrayStringProps = [];
    if (variant === 'block') buttonClass.push('btn--block');
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
