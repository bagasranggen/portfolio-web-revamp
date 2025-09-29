import React from 'react';

import { CARDS_OFFSET, HOMEPAGE_BANNER } from '@/libs/mock';

import HomepageBanner from '@/components/pages/HomepageIndex/HomepageBanner';
import Cards from '@/components/common/Cards';

export type HomepageIndexTypes = {};

const HomepageIndex = ({}: HomepageIndexTypes): React.ReactElement => {
    return (
        <>
            <HomepageBanner {...HOMEPAGE_BANNER} />

            <Cards.Offset
                wrapper={{
                    as: 'section',
                    className: 'relative z-10 bg-porto-light py-15',
                }}
                items={CARDS_OFFSET}
            />
        </>
    );
};

export default HomepageIndex;
