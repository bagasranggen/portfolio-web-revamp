'use client';

import React, { RefObject, useEffect, useRef, useState } from 'react';

import { useWindowSize } from 'react-use';

import Base, { BaseItemProps, BaseProps } from '@/components/common/Cards/Base';
import OffsetItem, { OffsetItemProps } from '@/components/common/Cards/Offset/OffsetItem';

export type OffsetProps = {
    items: OffsetItemProps[];
} & Pick<BaseProps, 'wrapper'>;

const Offset = ({ wrapper, items: itemsProps }: OffsetProps): React.ReactElement => {
    const { width } = useWindowSize();

    const containerRef = useRef<HTMLDivElement | null>(null);
    const [tallestCard, setTallestCard] = useState<number>(0);

    const items: BaseItemProps[] = [];

    if (itemsProps && itemsProps.length > 0) {
        itemsProps.forEach((item, i, arr) => {
            items.push({
                className: i !== arr.length - 1 ? 'pb-8' : undefined,
                children: (
                    <OffsetItem
                        cardTallestHeight={tallestCard > 0 ? tallestCard : undefined}
                        description={item.description}
                        count={item.count}
                        media={item.media}
                        link={item.link}
                    />
                ),
            });
        });
    }

    useEffect(() => {
        const container = containerRef?.current;

        if (!container) return;

        setTimeout(() => {
            const cardHeight: number[] = [];
            const cardItems = container.querySelectorAll('.card__item');

            cardItems.forEach((item) => {
                cardHeight.push(item.clientHeight);
            });

            setTallestCard(Math.max(...cardHeight));
        }, 80);
    }, [width]);

    return (
        <Base
            wrapper={wrapper}
            container={{
                ref: containerRef as RefObject<HTMLDivElement>,
                withContainer: false,
                className: 'card card--offset',
            }}
            items={items}
        />
    );
};

export default Offset;
