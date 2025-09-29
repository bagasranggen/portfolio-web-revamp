import React, { PropsWithChildren } from 'react';

import Container from '@/components/common/Container';
import Heading, { BaseTypes as HeadingBaseTypes } from '@/components/common/Heading';
import Columns from '@/components/common/Columns';
import Picture, { BaseTypes } from '@/components/common/Picture';
import Animation from '@/components/common/Animation';

export type HomepageBannerTypes = PropsWithChildren<{
    media?: BaseTypes['items'];
    description?: React.ReactNode;
    label?: HeadingBaseTypes['children'];
}>;

const HomepageBanner = ({ media, description, label, children }: HomepageBannerTypes): React.ReactElement => {
    return (
        <Animation type="banner-homepage">
            <section className="banner-homepage">
                <Container className="pt-8 pb-10">
                    <Columns className="items-end">
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
                            offset={1}>
                            {description && (
                                <Animation order={4}>
                                    <div className="banner-homepage__description mb-8">{description}</div>
                                </Animation>
                            )}
                        </Columns.Column>
                    </Columns>

                    {label && (
                        <Animation order={3}>
                            <Heading
                                as="h2"
                                className="banner-homepage__label">
                                {label}
                            </Heading>
                        </Animation>
                    )}

                    <Animation order={2}>
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

export default HomepageBanner;
