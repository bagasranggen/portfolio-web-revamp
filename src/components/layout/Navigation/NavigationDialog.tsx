import React from 'react';

import { useGlobalStateContext } from '@/store/context';
import { ArrayStringProps } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

import { Globe } from 'lucide-react';

import {
    Dialog,
    type DialogProps,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/shadcn/Dialog';
import Animation from '@/components/common/Animation';
import Columns from '@/components/common/Columns';
import Picture, { BaseProps } from '@/components/common/Picture';
import List from '@/components/common/List';
import Button, { BaseAnchorProps } from '@/components/common/Button';
import Container from '@/components/common/Container';
import NavigationSlideList, { NavigationSlideListProps } from '@/components/layout/Navigation/NavigationSlideList';

export type NavigationDialogItemProps = Pick<BaseAnchorProps, 'href' | 'target' | 'children'>;

export type NavigationDialogProps = {
    media?: BaseProps['items'];
    items?: NavigationDialogItemProps[];
    langItems?: NavigationSlideListProps['items'];
} & Pick<DialogProps, 'open' | 'onOpenChange'>;

const NavigationDialog = ({
    media,
    items,
    langItems,
    open,
    onOpenChange,
}: NavigationDialogProps): React.ReactElement => {
    const { isMultiLanguage } = useGlobalStateContext();

    return (
        <Dialog
            open={open}
            onOpenChange={onOpenChange}>
            <DialogContent
                className="modal modal--navigation"
                showCloseButton={false}>
                <DialogHeader className="sr-only">
                    <DialogTitle>Navigation Menu</DialogTitle>
                    <DialogDescription>Navigation Menu</DialogDescription>
                </DialogHeader>

                <div className="absolute top-[8rem] w-full">
                    <Container className="text-end">
                        {isMultiLanguage && (
                            <Animation
                                type="fade"
                                options={{
                                    y: 10,
                                    opacityDuration: 650,
                                }}>
                                <NavigationSlideList items={langItems}>
                                    <Globe />
                                </NavigationSlideList>
                            </Animation>
                        )}

                        {/*<NavigationSlideList>Theme</NavigationSlideList>*/}
                    </Container>
                </div>

                <div className="flex items-center">
                    <Columns
                        className="w-full items-center"
                        gutterX={0}>
                        <Columns.Column
                            md={4}
                            offset={{
                                md: 1,
                            }}>
                            <Animation type="fade-in">
                                <Picture items={media} />
                            </Animation>
                        </Columns.Column>

                        <Columns.Column
                            md={5}
                            offset={{
                                md: 2,
                            }}>
                            {items && items.length > 0 && (
                                <div className="py-5">
                                    <List
                                        items={items.map((item: NavigationDialogItemProps, i: number) => {
                                            let liClass: ArrayStringProps = ['text-[3rem] tracking-[.45rem]'];
                                            if (i !== 0) liClass.push('mt-3');
                                            liClass = joinArrayString(liClass);

                                            return {
                                                className: liClass,
                                                children: (
                                                    <Animation
                                                        type="fade-in"
                                                        options={{
                                                            opacityDelay: (i + 1) * 200,
                                                            x: 60,
                                                            y: 0,
                                                        }}>
                                                        <Button
                                                            as="anchor"
                                                            color="dark"
                                                            href={item.href}>
                                                            {item.children}
                                                        </Button>
                                                    </Animation>
                                                ),
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
    );
};

export default NavigationDialog;
