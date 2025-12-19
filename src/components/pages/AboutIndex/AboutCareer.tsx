import React from 'react';

import Heading from '@/components/common/Heading';
import List, { BaseProps } from '@/components/common/List';
import AboutCareerItem, { AboutCareerItemProps } from '@/components/pages/AboutIndex/AboutCareerItem';
import Animation from '@/components/common/Animation';

export type AboutCareerProps = {
    items?: AboutCareerItemProps[];
};

const AboutCareer = ({ items: itemsProps }: AboutCareerProps): React.ReactElement => {
    const items: BaseProps['items'] = [];

    if (itemsProps && itemsProps.length > 0) {
        itemsProps.forEach((item) => {
            items.push({
                children: <AboutCareerItem {...item} />,
            });
        });
    }

    return (
        <>
            <Animation type="fade-in">
                <Heading
                    variant="title"
                    className="mb-3">
                    Career
                </Heading>
            </Animation>

            <List
                hasAnimation
                className="list--career"
                items={items}
            />
        </>
    );
};

export default AboutCareer;
