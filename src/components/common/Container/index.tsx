import React, { forwardRef, PropsWithChildren } from 'react';

import { ArrayStringProps, ElementTagsProps } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

export type ContainerProps = {
    as?: Extract<ElementTagsProps, 'section' | 'div'>;
    fluid?: boolean;
} & (PropsWithChildren & React.HTMLAttributes<HTMLElement>);

const Container = forwardRef<HTMLDivElement, ContainerProps>(
    ({ as: Wrapper = 'div', className, children, fluid, ...props }, ref): React.ReactElement => {
        let containerClass: ArrayStringProps = [];
        containerClass.push(fluid ? 'container-fluid' : 'container');
        if (className) containerClass.push(className);
        containerClass = joinArrayString(containerClass);

        return (
            <Wrapper
                ref={ref}
                className={containerClass}
                {...props}>
                {children}
            </Wrapper>
        );
    }
);

Container.displayName = 'Container';
export default Container;
