'use client';

import React, { Suspense, useEffect, useState } from 'react';

import { ArrayStringTypes } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';
import { NavigationEvents } from '@/libs/hook';

import Button from '@/components/common/Button';
import Container from '@/components/common/Container';
import Columns from '@/components/common/Columns';

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/shadcn/Dialog';
import Picture, { BaseTypes } from '@/components/common/Picture';
import List from '@/components/common/List';
import Link, { LinkTypes } from '@/components/common/Link';
import Animation from '@/components/common/Animation';

export type NavigationItemTypes = Pick<LinkTypes, 'href' | 'target' | 'children'>;

export type NavigationTypes = {
    media?: BaseTypes['items'];
    items?: NavigationItemTypes[];
};

const Navigation = ({ items = [], media }: NavigationTypes): React.ReactElement => {
    const [open, setOpen] = useState<boolean>(false);
    const [trigger, setTrigger] = useState<number>(0);

    useEffect(() => {
        setTrigger((prevState) => prevState + 1);
    }, [open]);

    return (
        <>
            <Suspense fallback={null}>
                <NavigationEvents
                    endHandler={() => {
                        if (open) setOpen(false);
                    }}
                />
            </Suspense>

            <div className="fixed w-full top-0 left-0 z-99 pointer-events-none">
                <Container className="text-end py-3">
                    <Animation
                        type="text-split"
                        trigger={trigger}>
                        <Button.Block
                            as="button"
                            type="button"
                            size="sm"
                            className="backdrop-blur-xs pointer-events-auto min-w-[11rem]"
                            title={!open ? 'Menu' : 'Close'}
                            onClick={() => {
                                setOpen(true);
                            }}>
                            {!open ? 'Menu' : 'Close'}
                        </Button.Block>
                    </Animation>
                </Container>
            </div>

            <Dialog
                open={open}
                onOpenChange={() => {
                    setTimeout(() => {
                        setOpen(false);
                    }, 30);
                }}>
                <DialogContent
                    className="modal modal--navigation"
                    showCloseButton={false}>
                    <DialogHeader className="sr-only">
                        <DialogTitle>Navigation Menu</DialogTitle>
                        <DialogDescription>Navigation Menu</DialogDescription>
                    </DialogHeader>

                    <div className="flex items-center">
                        <Columns
                            className="w-full items-center"
                            gutterX={0}>
                            <Columns.Column md={4}>
                                <Picture items={media} />
                            </Columns.Column>

                            <Columns.Column
                                md={6}
                                offset={{
                                    md: 2,
                                }}>
                                {items && items.length > 0 && (
                                    <div className="py-5">
                                        <List
                                            items={items.map((item: NavigationItemTypes, i: number) => {
                                                let liClass: ArrayStringTypes = ['text-[3rem] tracking-[.45rem]'];
                                                if (i !== 0) liClass.push('mt-3');
                                                liClass = joinArrayString(liClass);

                                                return {
                                                    className: liClass,
                                                    children: <Link href={item.href}>{item.children}</Link>,
                                                };
                                            })}
                                        />
                                    </div>
                                )}
                            </Columns.Column>
                        </Columns>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default Navigation;
