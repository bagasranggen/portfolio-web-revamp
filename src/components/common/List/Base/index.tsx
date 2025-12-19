import React, { ExoticComponent, Fragment, FragmentProps, PropsWithChildren } from 'react';

import { ArrayStringProps, Component, ElementTagsProps } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

import Animation, { AnimationProps } from '@/components/common/Animation';

export type BaseItemProps = React.HTMLAttributes<HTMLLIElement> & PropsWithChildren;

export type BaseProps = {
    as?: Extract<ElementTagsProps, 'ol' | 'ul'>;
    items?: BaseItemProps[];
    hasAnimation?: boolean;
} & React.HTMLAttributes<HTMLUListElement>;

const Base = ({
    as: List = 'ul',
    items = [],
    className,
    hasAnimation,
    ...props
}: BaseProps): React.ReactElement | null => {
    let listClass: ArrayStringProps = ['list'];
    if (className) listClass.push(className);
    listClass = joinArrayString(listClass);

    if (!items || items.length === 0) return null;

    return (
        <List
            className={listClass}
            {...props}>
            {items.map(({ children, className, ...props }: BaseItemProps, i: number) => {
                let liClass: ArrayStringProps = ['list__item'];
                if (className) liClass.push(className);
                liClass = joinArrayString(liClass);

                let Wrapper: ExoticComponent<FragmentProps> | Component<AnimationProps> = Fragment;
                if (hasAnimation) Wrapper = Animation;

                let wrapperProps = {};
                if (hasAnimation) wrapperProps = Object.assign(wrapperProps, { type: 'fade-in' });

                return (
                    <Wrapper
                        key={i}
                        {...wrapperProps}>
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
