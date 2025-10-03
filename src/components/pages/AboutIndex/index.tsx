import React from 'react';

import { LIST_CAREER, LIST_SOCIAL, TEXT_BANNER } from '@/libs/mock';

import Banner from '@/components/common/Banner';
import Container from '@/components/common/Container';
import Columns from '@/components/common/Columns';
import Animation from '@/components/common/Animation';
import AboutProfile from '@/components/pages/AboutIndex/AboutProfile';
import AboutCareer from '@/components/pages/AboutIndex/AboutCareer';

export type AboutIndexTypes = {};

const AboutIndex = ({}: AboutIndexTypes): React.ReactElement => {
    return (
        <>
            <Banner.Text {...TEXT_BANNER}>About</Banner.Text>

            <Animation type="fade-in">
                <Container
                    as="section"
                    className="mt-10">
                    <Columns className="justify-center">
                        <Columns.Column lg={10}>
                            <AboutProfile />
                        </Columns.Column>
                    </Columns>
                </Container>
            </Animation>

            <Container
                as="section"
                className="mt-10 mb-10">
                <Columns className="justify-center">
                    <Columns.Column lg={10}>
                        <AboutCareer items={LIST_CAREER} />
                    </Columns.Column>
                </Columns>
            </Container>
        </>
    );
};

export default AboutIndex;
