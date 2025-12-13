'use client';

import React, { Suspense, useEffect, useMemo, useState } from 'react';
import { usePathname } from 'next/navigation';

import { useGlobalStateContext, useLayoutStateContext } from '@/store/context';

import { ArrayStringProps, LocaleProps } from '@/libs/@types';
import { NavigationEvents } from '@/libs/hook';
import { joinArrayString } from '@/libs/utils';

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
} & Pick<NavigationDialogProps, 'media' | 'items'>;

const Navigation = ({ items = [], media, button, activeLocale, locales }: NavigationProps): React.ReactElement => {
    const { isDev } = useGlobalStateContext();
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

                let btnClass: ArrayStringProps = ['text-[1.5rem] tracking-[.45rem]'];
                if (active) btnClass.push('font-bold');
                btnClass = joinArrayString(btnClass);

                data.push({
                    className: 'mb-[0.25rem]',
                    children: (
                        <Button
                            as="anchor"
                            color="dark"
                            className={btnClass}
                            href={href}>
                            {item.toUpperCase()}
                        </Button>
                    ),
                });
            });
        }

        return data;
    }, [activeLocale, locales, pathname]);

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
                                    onClick={() => setOpen(true)}>
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
                onOpenChange={() => {
                    setTimeout(() => setOpen(false), 30);
                }}
                langItems={langItems}
            />
        </>
    );
};

export default Navigation;
export { type NavigationDialogProps, type NavigationDialogItemProps };
