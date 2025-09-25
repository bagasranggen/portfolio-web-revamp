import React, { PropsWithChildren } from 'react';

import { ArrayStringTypes } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

export type ContainerTypes = PropsWithChildren<{ fluid?: boolean }> & React.HTMLAttributes<HTMLElement>;

const Container = ({ className, children, fluid, ...props }: ContainerTypes): React.ReactElement => {
    let containerClass: ArrayStringTypes = [];
    containerClass.push(fluid ? 'container-fluid' : 'container');
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
