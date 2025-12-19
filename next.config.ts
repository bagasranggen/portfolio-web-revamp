import type { NextConfig } from 'next';

const REMOTE_HOSTNAMES = process?.env?.NEXT_PUBLIC_IMAGE_REMOTE_HOSTNAME
    ? process.env.NEXT_PUBLIC_IMAGE_REMOTE_HOSTNAME.split(',')
    : [];

const IS_MULTI_LANGUAGE = process.env.NEXT_PUBLIC_FF_MULTI_LANGUAGE === '1';

const nextConfig: NextConfig = {
    /* config options here */
    reactCompiler: true,
    images: {
        remotePatterns: REMOTE_HOSTNAMES.map((item: string) => ({ hostname: item })),
    },
    async rewrites() {
        const paths = [];

        if (!IS_MULTI_LANGUAGE) {
            paths.push({
                source: '/:path*',
                destination: '/en/:path*',
            });
        }

        return [...paths];
    },
};

export default nextConfig;
