import React from 'react';

import Base from '@/components/common/Cards/Base';
import Columns, { ColumnProps } from '@/components/common/Columns';
import BlockItem, { BlockItemProps } from '@/components/common/Cards/Block/BlockItem';

export type BlockProps = {
    items: BlockItemProps[];
};

const Block = ({ items: itemsProps }: BlockProps): React.ReactElement => {
    const items: any[] = [];
    if (itemsProps && itemsProps.length > 0) {
        itemsProps.forEach((item: BlockItemProps, i: number) => {
            const hasOffset = i % 4 !== 0;

            let offset: ColumnProps['offset'] = undefined;
            if (hasOffset) {
                offset = Object.assign(offset ?? {}, { lg: 1 }) as ColumnProps['offset'];
            }

            items.push({
                children: (
                    <Columns.Column
                        offset={offset}
                        md={6}
                        lg={5}>
                        <BlockItem {...item} />
                    </Columns.Column>
                ),
            });
        });
    }

    return (
        <Columns
            className="card card--block"
            gutterY={{ xs: 5, lg: 8 }}>
            <Base items={items} />
        </Columns>
    );
};

export default Block;
