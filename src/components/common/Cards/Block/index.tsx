import React from 'react';

import Base from '@/components/common/Cards/Base';
import Columns, { ColumnTypes } from '@/components/common/Columns';
import BlockItem, { BlockItemTypes } from '@/components/common/Cards/Block/BlockItem';

export type BlockTypes = {
    items: BlockItemTypes[];
};

const Block = ({ items: itemsProps }: BlockTypes): React.ReactElement => {
    const items: any[] = [];
    if (itemsProps && itemsProps.length > 0) {
        itemsProps.forEach((item: BlockItemTypes, i: number) => {
            const hasOffset = i % 4 !== 0;

            let offset: ColumnTypes['offset'] = undefined;
            if (hasOffset) {
                offset = Object.assign(offset ?? {}, { lg: 1 }) as ColumnTypes['offset'];
            }

            items.push({
                children: (
                    <Columns.Column
                        offset={offset}
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
            gutterY={8}>
            <Base items={items} />
        </Columns>
    );
};

export default Block;
