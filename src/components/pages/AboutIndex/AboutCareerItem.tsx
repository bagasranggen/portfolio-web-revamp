import React, { ExoticComponent, Fragment, FragmentProps } from 'react';

import Heading, { BaseProps } from '@/components/common/Heading';
import Link, { LinkProps } from '@/components/common/Link';

export type AboutCareerItemProps = {
    link?: LinkProps;
    number: BaseProps['children'];
    title: BaseProps['children'];
    year: string;
    description?: React.ReactNode;
};

const AboutCareerItem = ({ link, number, title, year, description }: AboutCareerItemProps): React.ReactElement => {
    let Wrapper: ExoticComponent<FragmentProps> | any = Fragment;
    let wrapperProps = {};

    if (link) {
        Wrapper = Link;
        wrapperProps = link;
    }

    return (
        <Wrapper {...wrapperProps}>
            <div className="list__heading">
                <Heading
                    as="h3"
                    className="list__title-count">
                    {number} <span className="list__title">{title}</span>
                </Heading>

                <div className="list__line" />

                <div className="list__year">({year})</div>
            </div>

            {description && <div className="list__description">{description}</div>}
        </Wrapper>
    );
};

export default AboutCareerItem;
