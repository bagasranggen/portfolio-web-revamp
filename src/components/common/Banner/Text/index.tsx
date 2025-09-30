import React from 'react';

import Columns from '@/components/common/Columns';
import Heading, { BaseTypes } from '@/components/common/Heading';
import Container from '@/components/common/Container';

export type TextTypes = {
    title: BaseTypes['children'];
    description?: React.ReactNode;
} & Pick<BaseTypes, 'children'>;

const Text = ({ title, description, children }: TextTypes): React.ReactElement => {
    return (
        <Container
            as="section"
            className="banner--text">
            <Columns className="justify-between">
                <Columns.Column lg={2}>
                    <Heading
                        as="h1"
                        className="banner__title">
                        {children}
                    </Heading>
                </Columns.Column>

                <Columns.Column lg={7}>
                    <Heading
                        as="h2"
                        className="mt-18 heading heading--title">
                        {title}
                    </Heading>

                    {description && <div className="banner__description">{description}</div>}
                </Columns.Column>
            </Columns>
        </Container>
    );
};

export default Text;
