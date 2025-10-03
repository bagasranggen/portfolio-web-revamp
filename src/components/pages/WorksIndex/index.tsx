import React from 'react';

import { CARDS_BLOCK, TEXT_BANNER } from '@/libs/mock';

import Banner from '@/components/common/Banner';
import Cards from '@/components/common/Cards';
import Container from '@/components/common/Container';

export type WorksIndexTypes = {};

const WorksIndex = ({}: WorksIndexTypes): React.ReactElement => {
    return (
        <>
            <Banner.Text {...TEXT_BANNER} />

            <section className="mt-10 mb-18">
                <Container>
                    <Cards.Block items={CARDS_BLOCK} />
                </Container>
            </section>
        </>
    );
};

export default WorksIndex;
