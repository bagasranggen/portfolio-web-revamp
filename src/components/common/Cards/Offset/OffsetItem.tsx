'use client';

import React, { Ref, useEffect, useRef, useState } from 'react';

import { useMeasure } from 'react-use';

import Columns from '@/components/common/Columns';
import Icon from '@/components/common/Icon';
import Heading from '@/components/common/Heading';
import Container from '@/components/common/Container';
import Button, { BaseAnchorProps } from '@/components/common/Button';
import OffsetItemMedia, { OffsetItemMediaProps } from '@/components/common/Cards/Offset/OffsetItemMedia';
import OffsetItemDescription, {
    OffsetItemDescriptionProps,
} from '@/components/common/Cards/Offset/OffsetItemDescription';

export type OffsetItemProps = {
    cardTallestHeight?: number;
    count?: string;
    description?: OffsetItemDescriptionProps[];
    link?: BaseAnchorProps;
} & Pick<OffsetItemMediaProps, 'media'>;

const OffsetItem = ({ link, description, count, cardTallestHeight, media }: OffsetItemProps): React.ReactElement => {
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
        <Button
            ref={cardItemRef}
            as={link ? 'anchor' : undefined}
            className="card__item"
            {...(link as BaseAnchorProps)}
            {...(style ? { style } : {})}>
            <Container
                ref={containerRef as Ref<HTMLDivElement>}
                className="relative">
                <Columns
                    gutterY={{
                        xs: 3,
                        md: 0,
                    }}>
                    <Columns.Column
                        className="bg-porto-light max-md:order-last"
                        md={6}
                        lg={4}
                        offset={{ lg: 1 }}>
                        <div className="card__count">
                            <h3>{count}</h3>

                            <div>
                                <Icon.Arrow />
                            </div>
                        </div>

                        <Heading className="heading heading--title card__heading">Sooka Bakedgoods</Heading>

                        {description && description.length > 0 && (
                            <div className="mt-3 md:mt-5">
                                {description.map((item: OffsetItemDescriptionProps, i: number) => {
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
                        md={6}
                        offset={{ lg: 1 }}
                        className="max-md:order-first">
                        <OffsetItemMedia
                            containerWidth={containerWidth}
                            media={media}
                        />
                    </Columns.Column>
                </Columns>
            </Container>
        </Button>
    );
};

export default OffsetItem;
