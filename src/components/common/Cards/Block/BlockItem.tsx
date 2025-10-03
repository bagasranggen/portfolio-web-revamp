import React from 'react';

import { createPicsumImage } from '@/libs/factory';

import Picture, { BaseTypes as BasePictureTypes } from '@/components/common/Picture';
import Button, { BaseAnchorTypes } from '@/components/common/Button';
import Heading, { BaseTypes } from '@/components/common/Heading';
import Icon from '@/components/common/Icon';
import Animation from '@/components/common/Animation';

export type BlockItemTypes = {
    link?: Omit<BaseAnchorTypes, 'as'>;
    title: BaseTypes['children'];
    description?: React.ReactNode;
    media?: BasePictureTypes['items'];
};

const BlockItem = ({ link, title, description, media }: BlockItemTypes): React.ReactElement => {
    return (
        <Animation type="fade-in">
            <Button
                as={link ? 'anchor' : undefined}
                className="card__item"
                {...(link as Omit<BaseAnchorTypes, 'as'>)}>
                {media && media.length > 0 && (
                    <div className="card__media">
                        <Picture items={media} />
                    </div>
                )}

                <div className="mt-1.5 lg:mt-3 flex justify-between items-center">
                    <Heading
                        as="h3"
                        className="card__title">
                        {title}
                    </Heading>

                    <div>
                        <Icon.Arrow />
                    </div>
                </div>

                {description && <div className="mt-1.5 lg:mt-3">{description}</div>}
            </Button>
        </Animation>
    );
};

export default BlockItem;
