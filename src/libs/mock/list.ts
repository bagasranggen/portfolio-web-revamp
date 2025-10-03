import { SocialTypes } from '@/components/common/List';
import { AboutCareerItemTypes } from '@/components/pages/AboutIndex/AboutCareerItem';

import parse from 'html-react-parser';

export const LIST_SOCIAL: SocialTypes['items'] = [
    {
        link: {
            href: 'mailto:bagas.ranggen@gmail.com',
        },
        children: 'Email',
    },
    {
        link: {
            href: '#',
        },
        children: 'Linkedin',
    },
    {
        link: {
            href: '#',
        },
        children: 'Instagram',
    },
];

export const LIST_CAREER: AboutCareerItemTypes[] = [
    {
        link: {
            href: 'https://www.thepixelage.com',
            target: '_blank',
        },
        number: '01',
        title: 'ThePixelAge',
        year: '2021 - Present',
        description: parse(
            `<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque commodi debitis deleniti error hic inventore ipsam, libero nisi nobis nulla quas quibusdam, similique soluta tempore, ut voluptatem voluptates? Dolores, nam.</p>`
        ),
    },
    {
        link: {
            href: 'https://www.logique.co.id',
            target: '_blank',
        },
        number: '02',
        title: 'Logique',
        year: '2019 - 2021',
        description: parse(
            `<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque commodi debitis deleniti error hic inventore ipsam, libero nisi nobis nulla quas quibusdam, similique soluta tempore, ut voluptatem voluptates? Dolores, nam.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto dolorum ex illo laboriosam minima perspiciatis praesentium, quis. Ab ad aliquid amet aspernatur assumenda autem dicta dignissimos dolores dolorum ex facere facilis hic magni modi quam quia quibusdam, repellat repudiandae sed.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>`
        ),
    },
    {
        number: '03',
        title: 'ThePixelAge',
        year: '2021 - Present',
        description: parse(
            `<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque commodi debitis deleniti error hic inventore ipsam, libero nisi nobis nulla quas quibusdam, similique soluta tempore, ut voluptatem voluptates? Dolores, nam.</p>`
        ),
    },
];
