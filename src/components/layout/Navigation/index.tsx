'use client';

import React, { useState } from 'react';
import Button from '@/components/common/Button';
import Animation from '@/components/common/Animation';
import Container from '@/components/common/Container';
import Columns from '@/components/common/Columns';
import AboutProfile from '@/components/pages/AboutIndex/AboutProfile';
import AboutCareer from '@/components/pages/AboutIndex/AboutCareer';
import { LIST_CAREER } from '@/libs/mock';

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/shadcn/Dialog';

export type NavigationTypes = {};

const Navigation = ({}: NavigationTypes): React.ReactElement => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <>
            <Button
                as="button"
                onClick={() => {
                    console.log('click');
                    setOpen(true);
                }}>
                Menu
            </Button>

            <Dialog
                open={open}
                onOpenChange={setOpen}>
                <form>
                    {/*<DialogTrigger asChild>*/}

                    {/*    /!*<Button variant="outline">Open Dialog</Button>*!/*/}
                    {/*</DialogTrigger>*/}
                    <DialogContent className="modal modal--navigation">
                        <DialogHeader>
                            <DialogTitle>Edit profile</DialogTitle>
                            <DialogDescription>
                                Make changes to your profile here. Click save when you&apos;re done.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consequuntur ea laboriosam
                            minima, molestias necessitatibus neque odit perspiciatis quas reiciendis saepe, tenetur
                            voluptatem voluptatibus! Ab error necessitatibus obcaecati perspiciatis velit?
                            {/*<div className="grid gap-3">*/}
                            {/*    <Label htmlFor="name-1">Name</Label>*/}
                            {/*    <Input id="name-1" name="name" defaultValue="Pedro Duarte" />*/}
                            {/*</div>*/}
                            {/*<div className="grid gap-3">*/}
                            {/*    <Label htmlFor="username-1">Username</Label>*/}
                            {/*    <Input id="username-1" name="username" defaultValue="@peduarte" />*/}
                            {/*</div>*/}
                        </div>
                        <DialogFooter>
                            <DialogClose asChild>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias asperiores deleniti
                                dignissimos earum, ex in inventore natus quisquam quod quos rerum soluta voluptate!
                                Consequatur distinctio fuga in magni minima modi?
                                {/*<Button variant="outline">Cancel</Button>*/}
                            </DialogClose>
                            {/*<Button type="submit">Save changes</Button>*/}
                        </DialogFooter>
                    </DialogContent>
                </form>
            </Dialog>
        </>
    );
};

export default Navigation;
