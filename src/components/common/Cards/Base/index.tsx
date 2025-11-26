import React, { ExoticComponent, Fragment, FragmentProps } from 'react';

import { Component, ElementTagsProps, RefComponent } from '@/libs/@types';

import Container, { ContainerProps } from '@/components/common/Container';

export type BaseItemProps = {
    children: React.ReactElement;
} & React.HTMLAttributes<HTMLElement>;

export type BaseContainerProps = {
    ref?: React.RefObject<HTMLDivElement>;
    withContainer?: boolean;
} & ContainerProps;

export type BaseProps = {
    wrapper?: ContainerProps;
    container?: BaseContainerProps | boolean;
    items?: BaseItemProps[];
};

const Base = ({ wrapper, container, items = [] }: BaseProps): React.ReactElement | null => {
    let ContainerElement:
        | ExoticComponent<FragmentProps>
        | RefComponent<ContainerProps, HTMLDivElement>
        | ContainerProps['as'] = Fragment;
    let containerProps: any = {};

    if (container) {
        if (typeof container === 'boolean') {
            ContainerElement = Container;
        }

        if (typeof container !== 'boolean') {
            const { withContainer, ...props } = container;

            containerProps = props;

            ContainerElement = 'div';

            if (container?.withContainer) {
                ContainerElement = Container;
            }
        }
    }

    let WrapperElement: ExoticComponent<FragmentProps> | ElementTagsProps = Fragment;
    let wrapperProps: any = {};

    if (wrapper) {
        wrapperProps = Object.assign(wrapperProps, wrapper);
        WrapperElement = wrapper?.as ?? 'div';

        if (wrapper?.as) delete wrapperProps.as;
    }

    if (!items || items.length === 0) return null;

    return (
        <WrapperElement {...wrapperProps}>
            <ContainerElement {...containerProps}>
                {items.map(({ children, ...props }, i: number) =>
                    React.cloneElement(children, Object.assign(props, { key: i }))
                )}
            </ContainerElement>
        </WrapperElement>
    );
};

export default Base;
