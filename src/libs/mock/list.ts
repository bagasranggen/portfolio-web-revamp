import { SocialProps } from '@/components/common/List';
import { AboutCareerItemProps } from '@/components/pages/AboutIndex/AboutCareerItem';

import parse from 'html-react-parser';
import { NavigationDialogItemProps, NavigationProps } from '@/components/layout/Navigation';
import { createPicsumImage } from '@/libs/factory';
import { LocaleProps } from '@/libs/@types';
import { LOCALES_HANDLES } from '@/libs/mock/lang';

const IS_MULTI_LANGUAGE = process.env.NEXT_PUBLIC_FF_MULTI_LANGUAGE === '1';

export const LIST_SOCIAL: SocialProps['items'] = [
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

export const LIST_CAREER: AboutCareerItemProps[] = [
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

export const LIST_NAVIGATION: Partial<Record<LocaleProps, NavigationDialogItemProps[]>> = {
    [LOCALES_HANDLES.EN]: [
        {
            href: IS_MULTI_LANGUAGE ? `/${LOCALES_HANDLES.EN}` : '/',
            children: 'Home',
        },
        {
            href: IS_MULTI_LANGUAGE ? `/${LOCALES_HANDLES.EN}/works` : '/works',
            children: 'Works',
        },
        {
            href: IS_MULTI_LANGUAGE ? `/${LOCALES_HANDLES.EN}/about` : '/about',
            children: 'About',
        },
    ],
    [LOCALES_HANDLES.JP]: [
        {
            href: `/${LOCALES_HANDLES.JP}`,
            children: '自宅',
        },
        {
            href: `/${LOCALES_HANDLES.JP}/works`,
            children: '作品',
        },
        {
            href: `/${LOCALES_HANDLES.JP}/about`,
            children: '約',
        },
    ],
};

export const LIST_MEDIA: NavigationProps['media'] = [
    createPicsumImage({ id: 88, width: 500, height: 667, media: 576 }),
];
