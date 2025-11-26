import React from 'react';

import { CARDS_OFFSET, HOMEPAGE_BANNER } from '@/libs/mock';

import Cards from '@/components/common/Cards';
import Container from '@/components/common/Container';
import Banner from '@/components/common/Banner';
import Button from '@/components/common/Button';

export type HomepageIndexProps = {};

const HomepageIndex = ({}: HomepageIndexProps): React.ReactElement => {
    return (
        <>
            <Banner.Homepage {...HOMEPAGE_BANNER} />

            <section className="relative z-10 bg-porto-light py-15">
                <Cards.Offset
                    // wrapper={{
                    //     as: 'section',
                    //     className: 'relative z-10 bg-porto-light py-15',
                    // }}
                    items={CARDS_OFFSET}
                />

                <Container className="mt-18 text-center">
                    <Button.Block
                        as="anchor"
                        href="/works">
                        View All Works
                    </Button.Block>
                </Container>
            </section>
        </>
    );
};

export default HomepageIndex;
