import React, { PropsWithChildren } from 'react';

import { ArrayStringTypes } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

export type ContainerTypes = PropsWithChildren & React.HTMLAttributes<HTMLElement>;

const Container = ({ className, children, ...props }: ContainerTypes): React.ReactElement => {
    let containerClass: ArrayStringTypes = ['container'];
    if (className) containerClass.push(className);
    containerClass = joinArrayString(containerClass);

    return (
        <div
            className={containerClass}
            {...props}>
            {children}
        </div>
    );
};

export default Container;
