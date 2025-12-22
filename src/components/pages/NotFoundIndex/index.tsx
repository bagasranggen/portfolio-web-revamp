'use client';

import React from 'react';

import Heading from '@/components/common/Heading';
import Animation from '@/components/common/Animation';

export type NotFoundIndexProps = {};

const NotFoundIndex = ({}: NotFoundIndexProps): React.ReactElement => {
    return (
        <>
            <Animation type="fade-in">
                <div className="mt-[var(--spacing-header)]">
                    <Heading.Fluid
                        as="h1"
                        wrapperClassName="mx-5 -mt-15"
                        className="leading-none">
                        404
                    </Heading.Fluid>
                </div>
            </Animation>
        </>
    );
};

export default NotFoundIndex;
