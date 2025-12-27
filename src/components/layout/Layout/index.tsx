import React, { PropsWithChildren } from 'react';

import '@/assets/styles/globals.css';

import { ClassnameProps, LocaleProps, ThemesProps } from '@/libs/@types';

import Navigation, { NavigationProps } from '@/components/layout/Navigation';
import Footer, { FooterProps } from '@/components/layout/Footer';

export type LayoutProps = {
    lang?: LocaleProps;
    theme?: ThemesProps;
    navigation?: NavigationProps;
    footer?: FooterProps;
} & (PropsWithChildren & ClassnameProps);

const Layout = ({ lang, theme, className, navigation, footer, children }: LayoutProps): React.ReactElement => {
    return (
        <html
            lang={lang}
            data-theme={theme}>
            <body {...(className ? { className } : {})}>
                {navigation && <Navigation {...navigation} />}

                {children}

                {footer && <Footer {...footer} />}
            </body>
        </html>
    );
};

export default Layout;
