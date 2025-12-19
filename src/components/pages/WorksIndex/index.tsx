import React from 'react';

import { CARDS_BLOCK, TEXT_BANNER } from '@/libs/mock';

import Banner from '@/components/common/Banner';
import Cards from '@/components/common/Cards';
import Container from '@/components/common/Container';

export type WorksIndexProps = {};

const WorksIndex = ({}: WorksIndexProps): React.ReactElement => {
    return (
        <>
            <Banner.Text
                animation={{
                    id: 'banner-text',
                }}
                {...TEXT_BANNER}
            />

            <section className="mt-10 mb-18">
                <Container>
                    <Cards.Block
                        items={CARDS_BLOCK}
                        animation={{
                            target: 'banner-text',
                            opacityDelayOffset: 1000,
                        }}
                    />
                </Container>
            </section>
        </>
    );
};

export default WorksIndex;
