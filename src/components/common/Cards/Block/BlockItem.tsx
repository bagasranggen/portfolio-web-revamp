import React from 'react';

import Picture, { BaseProps as BasePictureProps } from '@/components/common/Picture';
import Button, { BaseAnchorProps } from '@/components/common/Button';
import Heading, { BaseProps } from '@/components/common/Heading';
import Icon from '@/components/common/Icon';
import Animation, { FadeInProps } from '@/components/common/Animation';

export type BlockItemProps = {
    link?: Omit<BaseAnchorProps, 'as'>;
    title: BaseProps['children'];
    description?: React.ReactNode;
    media?: BasePictureProps['items'];
    animation?: Pick<FadeInProps, 'sync' | 'opacityDelay'>;
};

const BlockItem = ({ link, title, description, media, animation }: BlockItemProps): React.ReactElement => {
    return (
        <Animation
            type="fade-in"
            options={animation}>
            <Button
                cleanClassName
                as={link ? 'anchor' : undefined}
                className="card__item"
                {...(link as Omit<BaseAnchorProps, 'as'>)}>
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
