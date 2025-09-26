import React, { PropsWithChildren } from 'react';

import Container from '@/components/common/Container';
import Heading, { BaseTypes as HeadingBaseTypes } from '@/components/common/Heading';
import Columns from '@/components/common/Columns';
import Picture, { BaseTypes } from '@/components/common/Picture';

export type HomepageBannerTypes = PropsWithChildren<{
    media?: BaseTypes['items'];
    description?: React.ReactNode;
    label?: HeadingBaseTypes['children'];
}>;

const HomepageBanner = ({ media, description, label, children }: HomepageBannerTypes): React.ReactElement => {
    return (
        <section className="h-screen bg-porto-primary">
            <Container className="pt-8 pb-10">
                <Columns className="items-end">
                    <Columns.Column
                        lg={6}
                        offset={{ lg: 1 }}>
                        <Picture
                            className="block mb-16"
                            items={media}
                        />
                    </Columns.Column>

                    <Columns.Column
                        lg={4}
                        offset={1}>
                        {description && <div className="mb-8">{description}</div>}
                    </Columns.Column>
                </Columns>

                <div>
                    {label && (
                        <Heading
                            as="h2"
                            className="uppercase text-md tracking-[1.5rem] font-medium">
                            {label}
                        </Heading>
                    )}

                    <Heading
                        as="h1"
                        className="-mx-1 text-[15.5rem] font-[200] tracking-[1.4rem] leading-[14.5rem]">
                        {children}
                    </Heading>
                </div>
            </Container>
        </section>
    );
};

export default HomepageBanner;
