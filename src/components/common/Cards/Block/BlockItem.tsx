import React from 'react';

import { createPicsumImage } from '@/libs/factory';

import Picture from '@/components/common/Picture';
import Button, { BaseAnchorTypes } from '@/components/common/Button';
import Heading, { BaseTypes } from '@/components/common/Heading';
import Icon from '@/components/common/Icon';

export type BlockItemTypes = {
    link?: Omit<BaseAnchorTypes, 'as'>;
    title: BaseTypes['children'];
    description?: React.ReactNode;
};

const BlockItem = ({ link, title, description }: BlockItemTypes): React.ReactElement => {
    return (
        <Button
            as={link ? 'anchor' : undefined}
            className="card__item"
            {...(link as Omit<BaseAnchorTypes, 'as'>)}>
            <div className="card__media">
                <Picture items={[createPicsumImage({ id: 88, width: 650, height: 488 })]} />
            </div>

            <div className="mt-3 flex justify-between items-center">
                <Heading
                    as="h3"
                    className="card__title">
                    Sooka Bakedgoods
                </Heading>

                <div>
                    <Icon.Arrow />
                </div>
            </div>

            {description && (
                <div className="mt-3">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae commodi consectetur cumque
                        dignissimos doloremque earum eligendi est eveniet fuga fugiat fugit labore nulla odio placeat,
                        sapiente sit tenetur, voluptates voluptatum.
                    </p>
                </div>
            )}
        </Button>
    );
};

export default BlockItem;
