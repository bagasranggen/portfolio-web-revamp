'use client';

import React, { Ref, useEffect, useRef, useState } from 'react';

import { useMeasure } from 'react-use';

import Columns from '@/components/common/Columns';
import Icon from '@/components/common/Icon';
import Heading from '@/components/common/Heading';
import OffsetItemMedia, { OffsetItemMediaTypes } from '@/components/common/Cards/Offset/OffsetItemMedia';
import OffsetItemDescription, {
    OffsetItemDescriptionTypes,
} from '@/components/common/Cards/Offset/OffsetItemDescription';
import Container from '@/components/common/Container';

export type OffsetItemTypes = {
    cardTallestHeight?: number;
    count?: string;
    description?: OffsetItemDescriptionTypes[];
} & Pick<OffsetItemMediaTypes, 'media'>;

const OffsetItem = ({ description, count, cardTallestHeight, media }: OffsetItemTypes): React.ReactElement => {
    const cardItemRef = useRef(null);
    const [containerRef, { width: containerWidth, height: containerHeight }] = useMeasure();

    const [cardDifference, setCardDifference] = useState<number>(0);

    let style: React.CSSProperties | undefined = {};

    if (cardDifference < 2) {
        style = Object.assign(style, {
            minHeight: cardTallestHeight,
        });
    }

    useEffect(() => {
        if (!cardTallestHeight) return;
        if (containerHeight === 0) return;

        const heightDifference = containerHeight - cardTallestHeight;

        setCardDifference(heightDifference);
    }, [cardTallestHeight, containerHeight]);

    useEffect(() => {
        const card: Element | null = cardItemRef?.current;

        if (!card) return;
        if (cardDifference === 0) return;

        const sibling: HTMLElement = (card as Element).nextSibling as HTMLElement;

        if (!sibling) return;

        sibling.style.setProperty('--card-offset-height-difference', `${cardDifference}px`);
    }, [cardDifference]);

    return (
        <div
            ref={cardItemRef}
            className="card__item"
            {...(style ? { style } : {})}>
            <Container
                ref={containerRef as Ref<HTMLDivElement>}
                className="relative">
                <Columns>
                    <Columns.Column
                        className="bg-porto-light"
                        lg={4}
                        offset={1}>
                        <div className="card__count">
                            <h3>{count}</h3>

                            <div>
                                <Icon.Arrow />
                            </div>
                        </div>

                        <Heading className="heading heading--title">Sooka Bakedgoods</Heading>

                        {description && description.length > 0 && (
                            <div className="mt-5">
                                {description.map((item: OffsetItemDescriptionTypes, i: number) => {
                                    return (
                                        <OffsetItemDescription
                                            key={i}
                                            title={item.title}>
                                            {item.children}
                                        </OffsetItemDescription>
                                    );
                                })}
                            </div>
                        )}
                    </Columns.Column>

                    <Columns.Column
                        lg={6}
                        offset={1}>
                        <OffsetItemMedia
                            containerWidth={containerWidth}
                            media={media}
                        />
                    </Columns.Column>
                </Columns>
            </Container>
        </div>
    );
};

export default OffsetItem;
