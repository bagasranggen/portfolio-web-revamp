import { createPicsumImage } from '@/libs/factory';

import parse from 'html-react-parser';

import { HomepageBannerTypes } from '@/components/pages/HomepageIndex/HomepageBanner';

export const HOMEPAGE_BANNER: HomepageBannerTypes = {
    media: [createPicsumImage({ id: 432, width: 800, height: 605, hasRetina: true })],
    description: parse(
        `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium eleifend eros hendrerit commodo. Sed diam magna, egestas a rhoncus non.</p><p>Quisque consectetur non dolor et egestas. Donec et sagittis risus, sed hendrerit nibh</p>`
    ),
    label: 'Frontend Developer',
    children: 'Bagas Ranggen',
};
