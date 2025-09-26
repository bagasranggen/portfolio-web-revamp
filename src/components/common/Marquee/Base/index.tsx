import React, { PropsWithChildren } from 'react';

import { ArrayStringTypes, ClassnameTypes } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

export type BaseTypes = PropsWithChildren & ClassnameTypes;

const Base = ({ className, children }: BaseTypes): React.ReactElement => {
    let marqueeClass: ArrayStringTypes = ['marquee'];
    if (className) marqueeClass.push(className);
    marqueeClass = joinArrayString(marqueeClass);

    return (
        <div className={marqueeClass}>
            <div className="marquee__item">{children}</div>
            <div className="marquee__item">{children}</div>
        </div>
    );
};

export default Base;
