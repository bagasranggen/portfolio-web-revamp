import React, { PropsWithChildren } from 'react';

import Container from '@/components/common/Container';
import Heading, { BaseProps as HeadingBaseProps } from '@/components/common/Heading';
import Columns from '@/components/common/Columns';
import Picture, { BaseProps } from '@/components/common/Picture';
import Animation from '@/components/common/Animation';

export type HomepageProps = PropsWithChildren<{
    media?: BaseProps['items'];
    description?: React.ReactNode;
    label?: HeadingBaseProps['children'];
}>;

const Homepage = ({ media, description, label, children }: HomepageProps): React.ReactElement => {
    const animationClassInit = 'animation--init';

    return (
        <Animation type="banner-homepage">
            <section className="banner-homepage">
                <Container className="pt-5 pb-10">
                    <Columns
                        className="items-end"
                        gutterY={3}>
                        <Columns.Column
                            lg={6}
                            offset={{ lg: 1 }}>
                            <Animation order={1}>
                                <Picture
                                    className="banner-homepage__media"
                                    items={media}
                                />
                            </Animation>
                        </Columns.Column>

                        <Columns.Column
                            lg={4}
                            offset={{ lg: 1 }}
                            className="max-lg:hidden">
                            {description && (
                                <Animation
                                    order={4}
                                    className={animationClassInit}>
                                    <div className="banner-homepage__description mb-8">{description}</div>
                                </Animation>
                            )}
                        </Columns.Column>
                    </Columns>

                    {label && (
                        <Animation
                            order={3}
                            className={animationClassInit}>
                            <Heading
                                as="h2"
                                className="banner-homepage__label">
                                {label}
                            </Heading>
                        </Animation>
                    )}

                    <Animation
                        order={2}
                        className={animationClassInit}>
                        <Heading
                            as="h1"
                            className="banner-homepage__heading">
                            {children}
                        </Heading>
                    </Animation>
                </Container>
            </section>
        </Animation>
    );
};

export default Homepage;
