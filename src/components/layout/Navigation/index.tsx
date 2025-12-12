'use client';

import React, { Suspense, useEffect, useState } from 'react';

import { useGlobalStateContext, useLayoutStateContext } from '@/store/context';

import { NavigationEvents } from '@/libs/hook';

import { useMeasure } from 'react-use';

import Button from '@/components/common/Button';
import Container from '@/components/common/Container';
import Animation from '@/components/common/Animation';
import NavigationDialog, {
    NavigationDialogProps,
    NavigationDialogItemProps,
} from '@/components/layout/Navigation/NavigationDialog';

export type NavigationProps = Pick<NavigationDialogProps, 'media' | 'items'>;

const Navigation = ({ items = [], media }: NavigationProps): React.ReactElement => {
    const { isDev } = useGlobalStateContext();
    const { setHeaderHeight } = useLayoutStateContext();
    const [headerRef, { height }] = useMeasure();

    const [open, setOpen] = useState<boolean>(false);
    const [trigger, setTrigger] = useState<number>(0);

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
                <Animation
                    type="fade"
                    options={{ y: 0 }}>
                    <Container className="text-end py-3">
                        <Animation
                            type="text-split"
                            trigger={trigger}
                            options={{
                                text: !open ? 'Menu' : 'Close',
                                targetFadeAnimation: isDev ? trigger === 1 : trigger === 0,
                                staggerSpeed: 50,
                            }}>
                            <Button.Block
                                as="button"
                                type="button"
                                size="sm"
                                className="backdrop-blur-xs pointer-events-auto min-w-[11rem]"
                                onClick={() => setOpen(true)}>
                                {!open ? 'Menu' : 'Close'}
                            </Button.Block>
                        </Animation>
                    </Container>
                </Animation>
            </div>

            <NavigationDialog
                media={media}
                items={items}
                open={open}
                onOpenChange={() => {
                    setTimeout(() => setOpen(false), 30);
                }}
            />
        </>
    );
};

export default Navigation;
export { type NavigationDialogProps, type NavigationDialogItemProps };
