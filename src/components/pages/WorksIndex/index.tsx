import React from 'react';

import { TEXT_BANNER } from '@/libs/mock';

import Banner from '@/components/common/Banner';

export type WorksIndexTypes = {};

const WorksIndex = ({}: WorksIndexTypes): React.ReactElement => {
    return (
        <>
            <Banner.Text {...TEXT_BANNER} />
        </>
    );
};

export default WorksIndex;
