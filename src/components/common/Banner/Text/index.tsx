import React from 'react';

import Columns from '@/components/common/Columns';
import Heading, { BaseTypes } from '@/components/common/Heading';
import Container from '@/components/common/Container';
import Animation from '@/components/common/Animation';

export type TextTypes = {
    title: BaseTypes['children'];
    description?: React.ReactNode;
} & Pick<BaseTypes, 'children'>;

const Text = ({ title, description, children }: TextTypes): React.ReactElement => {
    return (
        <Animation type="banner-text">
            <Container
                as="section"
                className="banner--text">
                <Columns className="justify-between">
                    <Columns.Column lg={2}>
                        <Animation order={1}>
                            <Heading
                                as="h1"
                                className="banner__title">
                                {children}
                            </Heading>
                        </Animation>
                    </Columns.Column>

                    <Columns.Column lg={7}>
                        <Animation order={2}>
                            <Heading
                                as="h2"
                                className="mt-18 heading heading--title">
                                {title}
                            </Heading>
                        </Animation>

                        {description && (
                            <Animation order={3}>
                                <div className="banner__description">{description}</div>
                            </Animation>
                        )}
                    </Columns.Column>
                </Columns>
            </Container>
        </Animation>
    );
};

export default Text;
