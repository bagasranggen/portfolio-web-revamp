import localFont from 'next/font/local';

import NotFoundIndex from '@/components/pages/NotFoundIndex';
import { NotFoundData } from '@/components/pages/NotFoundIndex/data';

const murecho = localFont({
    src: [
        {
            path: '../assets/fonts/Murecho/Murecho-Black.woff2',
            weight: '900',
        },
        {
            path: '../assets/fonts/Murecho/Murecho-ExtraBold.woff2',
            weight: '800',
        },
        {
            path: '../assets/fonts/Murecho/Murecho-Bold.woff2',
            weight: '700',
        },
        {
            path: '../assets/fonts/Murecho/Murecho-SemiBold.woff2',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../assets/fonts/Murecho/Murecho-Medium.woff2',
            weight: '500',
        },
        {
            path: '../assets/fonts/Murecho/Murecho-Regular.woff2',
            weight: '400',
        },
        {
            path: '../assets/fonts/Murecho/Murecho-Light.woff2',
            weight: '300',
        },
        {
            path: '../assets/fonts/Murecho/Murecho-ExtraLight.woff2',
            weight: '200',
        },
        {
            path: '../assets/fonts/Murecho/Murecho-Thin.woff2',
            weight: '100',
        },
    ],
    variable: '--font-murecho',
});

export default async function NotFound() {
    const { entries } = await NotFoundData({ className: murecho.variable });

    return <NotFoundIndex entries={entries} />;
}
