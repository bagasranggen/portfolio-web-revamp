'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

import ContextProvider, { useThemeStateContext } from '@/store/context';

import { LIST_MEDIA, LIST_NAVIGATION, LIST_SOCIAL, LOCALES, THEMES } from '@/libs/mock';
import { PageIndexProps } from '@/libs/@types';
import { getEnvFeature, getLocales } from '@/libs/utils';
import { useDictionary } from '@/libs/hook';

import Heading from '@/components/common/Heading';
import Container from '@/components/common/Container';
import Columns from '@/components/common/Columns';
import Button from '@/components/common/Button';
import Animation from '@/components/common/Animation';
import Layout, { LayoutProps } from '@/components/layout/Layout';

export type NotFoundIndexProps = PageIndexProps<{
    layout?: Pick<LayoutProps, 'className'>;
}>;

const NotFoundIndex = ({ entries }: NotFoundIndexProps): React.ReactElement => {
    const { theme } = useThemeStateContext();
    const pathname = usePathname();
    const { pathnameLocale } = getLocales(pathname);
    const { isMultiLanguage } = getEnvFeature();

    const dic = useDictionary(pathnameLocale);

    const btnHref = isMultiLanguage ? `/${pathnameLocale}` : '/';

    if (dic === undefined) return <></>;

    return (
        <ContextProvider>
            <Layout
                lang={pathnameLocale}
                theme={theme}
                className={entries?.layout?.className}
                navigation={{
                    media: LIST_MEDIA,
                    items: LIST_NAVIGATION[pathnameLocale],
                    button: {
                        open: dic.navigation.button.open,
                        close: dic.navigation.button.close,
                    },
                    activeLocale: pathnameLocale,
                    locales: LOCALES,
                    themes: THEMES,
                }}
                footer={{
                    social: LIST_SOCIAL,
                }}>
                <Container className="mt-[var(--spacing-header)]">
                    <Columns
                        className="py-20 items-end justify-center 2xl:justify-between"
                        gutterY={10}>
                        <Animation type="fade-in">
                            <Columns.Column xxl={7}>
                                <Heading.Fluid
                                    as="h1"
                                    wrapperClassName="-mt-13"
                                    className="leading-none font-extralight pointer-events-none">
                                    404
                                </Heading.Fluid>
                            </Columns.Column>
                        </Animation>

                        {(dic?.notFound?.button || dic?.notFound?.title) && (
                            <Animation
                                type="fade-in"
                                options={{
                                    opacityDelay: 150,
                                }}>
                                <Columns.Column
                                    xxl={4}
                                    className="text-center 2xl:text-left">
                                    {dic?.notFound?.title && <Heading variant="title">{dic.notFound.title}</Heading>}

                                    {dic?.notFound?.button && (
                                        <Button.Block
                                            as="anchor"
                                            className="mt-4"
                                            href={btnHref}>
                                            {dic?.notFound?.button}
                                        </Button.Block>
                                    )}
                                </Columns.Column>
                            </Animation>
                        )}
                    </Columns>
                </Container>
            </Layout>
        </ContextProvider>
    );
};

export default NotFoundIndex;
