'use client';

import React from 'react';

import { useHistoryStateContext } from '@/store/context';

import Container from '@/components/common/Container';
import Marquee from '@/components/common/Marquee';
import List, { SocialTypes } from '@/components/common/List';
import Animation from '@/components/common/Animation';

export type FooterTypes = {
    social?: SocialTypes['items'];
};

const Footer = ({ social = [] }: FooterTypes): React.ReactElement => {
    const year = new Date().getFullYear();
    const { routeLength } = useHistoryStateContext();

    return (
        <Animation
            type="fade-in"
            trigger={routeLength}>
            <footer className="footer">
                <Container className="footer__container">
                    <List.Social
                        as="ul"
                        className="list-inline-spacing-2 footer__list"
                        items={social}
                    />
                </Container>

                <Container className="mt-2 text-center">
                    <p className="footer__copyright">&copy; {year} | Bagas Ranggen</p>
                </Container>

                <Marquee className="mt-4">Get In Contact</Marquee>
            </footer>
        </Animation>
    );
};

export default Footer;
