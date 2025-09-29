import React, { PropsWithChildren } from 'react';

import Heading, { BaseTypes } from '@/components/common/Heading';

export type OffsetItemDescriptionTypes = PropsWithChildren<{
    title: BaseTypes['children'];
}>;

const OffsetItemDescription = ({ title, children }: OffsetItemDescriptionTypes): React.ReactElement => {
    return (
        <div className="card__description">
            <Heading as="h3">{title}</Heading>

            <div className="mt-1">{children}</div>
        </div>
    );
};

export default OffsetItemDescription;
