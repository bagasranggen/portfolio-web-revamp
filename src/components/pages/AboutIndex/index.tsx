'use client';

import React from 'react';

import { LIST_CAREER, LIST_SOCIAL, TEXT_BANNER } from '@/libs/mock';

import Banner from '@/components/common/Banner';
import Container from '@/components/common/Container';
import Columns from '@/components/common/Columns';
import Animation from '@/components/common/Animation';
import AboutProfile from '@/components/pages/AboutIndex/AboutProfile';
import AboutCareer from '@/components/pages/AboutIndex/AboutCareer';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/shadcn/Dialog';
import Button from '@/components/common/Button';

export type AboutIndexTypes = {};

const AboutIndex = ({}: AboutIndexTypes): React.ReactElement => {
    const [open, setOpen] = React.useState(false);

    return (
        <>
            <Banner.Text {...TEXT_BANNER}>About</Banner.Text>

            <button
                type="button"
                onClick={() => setOpen(true)}>
                OPEN
            </button>

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
