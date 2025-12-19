import React, { PropsWithChildren } from 'react';

import Heading, { BaseProps } from '@/components/common/Heading';

export type OffsetItemDescriptionProps = PropsWithChildren<{
    title: BaseProps['children'];
}>;

const OffsetItemDescription = ({ title, children }: OffsetItemDescriptionProps): React.ReactElement => {
    return (
        <div className="card__description">
            <Heading as="h3">{title}</Heading>

            <div className="mt-1">{children}</div>
        </div>
    );
};

export default OffsetItemDescription;
