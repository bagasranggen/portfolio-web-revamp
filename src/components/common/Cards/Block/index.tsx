import React from 'react';

import Base from '@/components/common/Cards/Base';
import Columns, { ColumnProps } from '@/components/common/Columns';
import BlockItem, { BlockItemProps } from '@/components/common/Cards/Block/BlockItem';

export type BlockProps = {
    items: Omit<BlockItemProps, 'animation'>[];
} & Pick<BlockItemProps, 'animation'>;

const Block = ({ items: itemsProps, animation }: BlockProps): React.ReactElement => {
    const items: any[] = [];
    if (itemsProps && itemsProps.length > 0) {
        itemsProps.forEach((item: BlockItemProps, i: number) => {
            const isOdd = i % 2 === 0;
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
                        <BlockItem
                            {...item}
                            animation={{
                                // ...(!isOdd ? { opacityDelay: 300 } : {}),
                                ...animation,
                            }}
                        />
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
