import React from 'react';

import { createPicsumImage } from '@/libs/factory';

import Container from '@/components/common/Container';
import Heading from '@/components/common/Heading';
import Columns from '@/components/common/Columns';
import Picture from '@/components/common/Picture';

export type HomepageBannerTypes = {};

const HomepageBanner = ({}: HomepageBannerTypes): React.ReactElement => {
    return (
        <section className="h-screen bg-porto-primary">
            <Container className="pt-8 pb-10">
                <Columns className="items-end">
                    <Columns.Column
                        lg={6}
                        offset={{
                            sm: 1,
                        }}>
                        {/*<picture className="block pb-16">*/}
                        {/*    <img*/}
                        {/*        src="https://picsum.photos/id/237/800/605"*/}
                        {/*        width="800"*/}
                        {/*        height="605"*/}
                        {/*        alt=""*/}
                        {/*        className=""*/}
                        {/*    />*/}
                        {/*</picture>*/}
                        <Picture
                            className="block pb-16"
                            items={[createPicsumImage({ width: 800, height: 605, hasRetina: true })]}
                        />
                    </Columns.Column>

                    <Columns.Column
                        lg={4}
                        offset={1}>
                        <div className="pb-8">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium eleifend eros
                                hendrerit commodo. Sed diam magna, egestas a rhoncus non.
                            </p>
                            <br />
                            <p>Quisque consectetur non dolor et egestas. Donec et sagittis risus, sed hendrerit nibh</p>
                        </div>
                    </Columns.Column>
                </Columns>

                <div>
                    <Heading
                        as="h2"
                        className="uppercase text-md tracking-[1.5rem] font-medium">
                        Frontend Developer
                    </Heading>

                    <Heading
                        as="h1"
                        className="-mx-1 text-[15.5rem] font-[200] tracking-[1.4rem] leading-[14.5rem]">
                        Bagas Ranggen
                    </Heading>
                </div>
            </Container>
        </section>
    );
};

export default HomepageBanner;
