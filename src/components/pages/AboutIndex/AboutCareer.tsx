import React from 'react';

import Heading from '@/components/common/Heading';
import List, { BaseTypes } from '@/components/common/List';
import AboutCareerItem, { AboutCareerItemTypes } from '@/components/pages/AboutIndex/AboutCareerItem';
import Animation from '@/components/common/Animation';

export type AboutCareerTypes = {
    items?: AboutCareerItemTypes[];
};

const AboutCareer = ({ items: itemsProps }: AboutCareerTypes): React.ReactElement => {
    const items: BaseTypes['items'] = [];

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
