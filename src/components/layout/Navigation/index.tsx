'use client';

import React, { Suspense, useEffect, useMemo, useState } from 'react';
import { usePathname } from 'next/navigation';

import { useGlobalStateContext, useLayoutStateContext, useThemeStateContext } from '@/store/context';

import { LocaleProps, ThemesProps } from '@/libs/@types';
import { KeyboardEvents, NavigationEvents } from '@/libs/hook';

import { useMeasure } from 'react-use';

import Button, { BaseProps } from '@/components/common/Button';
import Container from '@/components/common/Container';
import Animation, { TextSplitProps } from '@/components/common/Animation';
import NavigationDialog, {
    NavigationDialogProps,
    NavigationDialogItemProps,
} from '@/components/layout/Navigation/NavigationDialog';

export type NavigationProps = {
    button: Record<'open' | 'close', BaseProps['children'] | TextSplitProps['text']>;
    activeLocale?: LocaleProps;
    locales?: LocaleProps[];
    themes?: ThemesProps[];
} & Pick<NavigationDialogProps, 'media' | 'items'>;

const Navigation = ({
    items = [],
    media,
    button,
    activeLocale,
    locales,
    themes,
}: NavigationProps): React.ReactElement => {
    const { isDev } = useGlobalStateContext();
    const { theme, setTheme } = useThemeStateContext();
    const { setHeaderHeight } = useLayoutStateContext();
    const [headerRef, { height }] = useMeasure();
    const pathname = usePathname();

    const [open, setOpen] = useState<boolean>(false);
    const [trigger, setTrigger] = useState<number>(0);

    const langItems: NavigationDialogProps['langItems'] = useMemo(() => {
        const data: NavigationDialogProps['langItems'] = [];

        if (locales && locales.length > 0) {
            locales.forEach((item) => {
                const active = item === activeLocale;

                let href = '#';
                if (!active) href = pathname.replace(`/${activeLocale}`, `/${item}`);

                data.push({
                    ...(active ? { className: 'active' } : {}),
                    children: (
                        <Button
                            as="anchor"
                            color="dark"
                            href={href}>
                            {item.toUpperCase()}
                        </Button>
                    ),
                });
            });
        }

        return data;
    }, [activeLocale, locales, pathname]);

    const themeItems: NavigationDialogProps['themeItems'] = useMemo(() => {
        const data: NavigationDialogProps['themeItems'] = [];

        if (themes && themes.length > 0) {
            themes.forEach((item) => {
                const active = item === theme;

                data.push({
                    ...(active ? { className: 'active' } : {}),
                    children: (
                        <Button
                            as="button"
                            color="dark"
                            onClick={() => {
                                setOpen(false);
                                setTheme(item);
                            }}>
                            {item.toUpperCase()}
                        </Button>
                    ),
                });
            });
        }

        return data;
    }, [themes, theme]);

    useEffect(() => {
        setTrigger((prevState) => prevState + 1);
    }, [open]);

    useEffect(() => {
        if (!height || height === 0) return;

        setHeaderHeight(height);
    }, [height]);

    return (
        <>
            <Suspense fallback={null}>
                <NavigationEvents
                    endHandler={() => {
                        if (open) setOpen(false);
                    }}
                />

                <KeyboardEvents
                    onKeyUp={({ key }) => {
                        if (key === 'Escape' && open) setOpen(false);
                    }}
                />
            </Suspense>

            <div
                ref={headerRef as any}
                className="fixed w-full top-0 left-0 z-99 pointer-events-none">
                {button?.open && button?.close && (
                    <Animation
                        type="fade"
                        options={{ y: 0 }}>
                        <Container className="text-end py-3">
                            <Animation
                                type="text-split"
                                trigger={trigger}
                                options={{
                                    text: !open
                                        ? (button.open as TextSplitProps['text'])
                                        : (button.close as TextSplitProps['text']),
                                    targetFadeAnimation: isDev ? trigger === 1 : trigger === 0,
                                    staggerSpeed: 50,
                                }}>
                                <Button.Block
                                    as="button"
                                    type="button"
                                    size="sm"
                                    className="backdrop-blur-xs pointer-events-auto min-w-[11rem]"
                                    onClick={() => setOpen((prevState) => !prevState)}>
                                    {!open ? button.open : button.close}
                                </Button.Block>
                            </Animation>
                        </Container>
                    </Animation>
                )}
            </div>

            <NavigationDialog
                media={media}
                items={items}
                open={open}
                onOpenChange={setOpen}
                langItems={langItems}
                themeItems={themeItems}
            />
        </>
    );
};

export default Navigation;
export { type NavigationDialogProps, type NavigationDialogItemProps };
