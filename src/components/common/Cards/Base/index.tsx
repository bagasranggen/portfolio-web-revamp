import React, { ExoticComponent, Fragment, FragmentProps } from 'react';

import { Component, ElementTagsTypes, RefComponent } from '@/libs/@types';

import Container, { ContainerTypes } from '@/components/common/Container';

export type BaseItemTypes = {
    children: React.ReactElement;
} & React.HTMLAttributes<HTMLElement>;

export type BaseContainerTypes = {
    ref?: React.RefObject<HTMLDivElement>;
    withContainer?: boolean;
} & ContainerTypes;

export type BaseTypes = {
    wrapper?: ContainerTypes;
    container?: BaseContainerTypes | boolean;
    items?: BaseItemTypes[];
};

const Base = ({ wrapper, container, items = [] }: BaseTypes): React.ReactElement | null => {
    let ContainerElement:
        | ExoticComponent<FragmentProps>
        | RefComponent<ContainerTypes, HTMLDivElement>
        | ContainerTypes['as'] = Fragment;
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

    let WrapperElement: ExoticComponent<FragmentProps> | ElementTagsTypes = Fragment;
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
