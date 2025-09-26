import React, { PropsWithChildren } from 'react';

import { ElementTagsTypes } from '@/libs/@types';

export type BaseTypes = {
    as?: Extract<ElementTagsTypes, 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>;
} & (React.HTMLAttributes<HTMLHeadingElement> & PropsWithChildren);

const Base = ({ as: Heading = 'h2', children, ...props }: BaseTypes): React.ReactElement => {
    return <Heading {...props}>{children}</Heading>;
};

export default Base;
