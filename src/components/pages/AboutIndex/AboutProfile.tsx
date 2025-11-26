import React from 'react';

import { LIST_SOCIAL } from '@/libs/mock';
import { createPicsumImage } from '@/libs/factory';

import Heading from '@/components/common/Heading';
import Columns from '@/components/common/Columns';
import Picture from '@/components/common/Picture';
import List from '@/components/common/List';

export type AboutProfileProps = {};

const AboutProfile = ({}: AboutProfileProps): React.ReactElement => {
    return (
        <>
            <Heading
                variant="title"
                className="mb-3">
                Profile
            </Heading>

            <Columns
                className="justify-between items-center"
                gutterY={3}>
                <Columns.Column
                    md={5}
                    lg="auto">
                    <Picture
                        className="block lg:max-w-[30rem] xl:max-w-[38rem]"
                        items={[
                            createPicsumImage({ id: 88, width: 500, height: 667, media: 576 }),
                            createPicsumImage({ id: 88, width: 600, height: 450 }),
                        ]}
                    />
                </Columns.Column>

                <Columns.Column md={6}>
                    <Heading variant="title">Bagas Ranggen</Heading>

                    <p className="mt-3">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur delectus eius enim facilis
                        fugiat ipsam iure laudantium maiores minima nesciunt obcaecati optio praesentium, provident quae
                        qui quod ullam veniam vitae.
                    </p>

                    <List.Social
                        className="mt-3 text-sm font-medium tracking-[.5rem]"
                        items={LIST_SOCIAL}
                    />
                </Columns.Column>
            </Columns>
        </>
    );
};

export default AboutProfile;
