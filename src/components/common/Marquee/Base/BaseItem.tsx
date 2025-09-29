import React, { forwardRef, PropsWithChildren } from 'react';

export type BaseItemTypes = PropsWithChildren;

const BaseItem = forwardRef<HTMLDivElement, BaseItemTypes>(({ children }, ref) => {
    return (
        <div
            ref={ref}
            className="marquee__item">
            {children}
        </div>
    );
});

export default BaseItem;
