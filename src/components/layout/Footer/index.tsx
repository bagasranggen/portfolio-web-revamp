import React from 'react';

import Container from '@/components/common/Container';
import Marquee from '@/components/common/Marquee';
import List from '@/components/common/List';

export type FooterTypes = {};

const Footer = ({}: FooterTypes): React.ReactElement => {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-porto-primary pb-6">
            <Container className="min-h-40 flex items-center justify-center border-b border-b-porto-dark/30">
                <List.Inline
                    as="ul"
                    items={[
                        {
                            children: 'Email',
                        },
                        {
                            children: 'Linkedin',
                        },
                        {
                            children: 'Instagram',
                        },
                    ]}
                />
            </Container>

            <Container className="mt-2 text-center">
                <p className="text-sm uppercase font-medium tracking-[.5rem]">&copy; {year} | Bagas Ranggen</p>
            </Container>

            <Marquee className="mt-4">Get In Contact</Marquee>
        </footer>
    );
};

export default Footer;
