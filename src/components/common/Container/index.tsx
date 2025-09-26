import React, { PropsWithChildren } from 'react';

import { ArrayStringTypes, ElementTagsTypes } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

export type ContainerTypes = {
    as?: Extract<ElementTagsTypes, 'section' | 'div'>;
    fluid?: boolean;
} & (PropsWithChildren & React.HTMLAttributes<HTMLElement>);

const Container = ({
    as: Wrapper = 'div',
    className,
    children,
    fluid,
    ...props
}: ContainerTypes): React.ReactElement => {
    let containerClass: ArrayStringTypes = [];
    containerClass.push(fluid ? 'container-fluid' : 'container');
    if (className) containerClass.push(className);
    containerClass = joinArrayString(containerClass);

    return (
        <Wrapper
            className={containerClass}
            {...props}>
            {children}
        </Wrapper>
    );
};

export default Container;
