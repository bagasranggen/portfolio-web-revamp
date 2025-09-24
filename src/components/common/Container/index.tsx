import React, { PropsWithChildren } from 'react';

import { ArrayStringTypes, ClassnameTypes } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

export type ContainerTypes = PropsWithChildren & ClassnameTypes;

const Container = ({ className, children }: ContainerTypes): React.ReactElement => {
    let containerClass: ArrayStringTypes = ['container'];
    if (className) containerClass.push(className);
    containerClass = joinArrayString(containerClass);

    return <div className={containerClass}>{children}</div>;
};

export default Container;
