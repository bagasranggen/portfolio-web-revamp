import React from 'react';

import Columns from '@/components/common/Columns';
import Heading, { BaseProps } from '@/components/common/Heading';
import Container from '@/components/common/Container';
import Animation from '@/components/common/Animation';

export type TextProps = {
    title: BaseProps['children'];
    description?: React.ReactNode;
} & Pick<BaseProps, 'children'>;

const Text = ({ title, description, children }: TextProps): React.ReactElement => {
    const animationClassInit = 'animation--init';

    return (
        <Animation type="banner-text">
            <Container
                as="section"
                className="banner--text">
                <Columns className="justify-between">
                    <Columns.Column lg={2}>
                        <Animation
                            order={1}
                            className={animationClassInit}>
                            <Heading
                                as="h1"
                                className="banner__title">
                                {children}
                            </Heading>
                        </Animation>
                    </Columns.Column>

                    <Columns.Column lg={7}>
                        <Animation
                            order={2}
                            className={animationClassInit}>
                            <Heading
                                as="h2"
                                className="heading heading--title banner__heading">
                                {title}
                            </Heading>
                        </Animation>

                        {description && (
                            <Animation
                                order={3}
                                className={animationClassInit}>
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
