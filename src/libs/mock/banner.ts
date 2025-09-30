import { createPicsumImage } from '@/libs/factory';

import parse from 'html-react-parser';

import { HomepageBannerTypes } from '@/components/pages/HomepageIndex/HomepageBanner';
import { TextTypes } from '@/components/common/Banner';

export const HOMEPAGE_BANNER: HomepageBannerTypes = {
    media: [createPicsumImage({ id: 432, width: 800, height: 605, hasRetina: true })],
    description: parse(
        `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium eleifend eros hendrerit commodo. Sed diam magna, egestas a rhoncus non.</p><p>Quisque consectetur non dolor et egestas. Donec et sagittis risus, sed hendrerit nibh</p>`
    ),
    label: 'Frontend Developer',
    children: 'Bagas Ranggen',
};

export const TEXT_BANNER: TextTypes = {
    title: 'Lorem ipsum dolor sit amet, consectetur.',
    description: parse(
        `<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita illum labore odio officiis reprehenderit. Ad amet animi aut consequuntur delectus dicta iste laboriosam molestias nesciunt quaerat reiciendis sequi, similique sunt.</p>`
    ),
    children: 'Works',
};
