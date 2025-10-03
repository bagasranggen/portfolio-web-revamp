import React, { ExoticComponent, Fragment, FragmentProps, PropsWithChildren } from 'react';

import { ArrayStringTypes, Component, ElementTagsTypes } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

import Animation, { AnimationTypes } from '@/components/common/Animation';

export type BaseItemTypes = React.HTMLAttributes<HTMLLIElement> & PropsWithChildren;

export type BaseTypes = {
    as?: Extract<ElementTagsTypes, 'ol' | 'ul'>;
    items?: BaseItemTypes[];
    hasAnimation?: boolean;
} & React.HTMLAttributes<HTMLUListElement>;

const Base = ({
    as: List = 'ul',
    items = [],
    className,
    hasAnimation,
    ...props
}: BaseTypes): React.ReactElement | null => {
    let listClass: ArrayStringTypes = ['list'];
    if (className) listClass.push(className);
    listClass = joinArrayString(listClass);

    if (!items || items.length === 0) return null;

    return (
        <List
            className={listClass}
            {...props}>
            {items.map(({ children, className, ...props }: BaseItemTypes, i: number) => {
                let liClass: ArrayStringTypes = ['list__item'];
                if (className) liClass.push(className);
                liClass = joinArrayString(liClass);

                let Wrapper: ExoticComponent<FragmentProps> | Component<AnimationTypes> = Fragment;
                if (hasAnimation) Wrapper = Animation;

                let wrapperProps = { key: i };
                if (hasAnimation) wrapperProps = Object.assign(wrapperProps, { type: 'fade-in' });

                return (
                    <Wrapper {...wrapperProps}>
                        <li
                            {...props}
                            className={liClass}>
                            {children}
                        </li>
                    </Wrapper>
                );
            })}
        </List>
    );
};

export default Base;
