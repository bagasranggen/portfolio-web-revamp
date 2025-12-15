'use client';

import React from 'react';

import { useGlobalStateContext } from '@/store/context';

import { Globe, SwatchBookIcon } from 'lucide-react';

import Container from '@/components/common/Container';
import Animation from '@/components/common/Animation';
import NavigationSlideList, { NavigationSlideListProps } from '@/components/layout/Navigation/NavigationSlideList';

export type NavigationToggleProps = {
    langItems?: NavigationSlideListProps['items'];
    themeItems?: NavigationSlideListProps['items'];
};

const NavigationToggle = ({ langItems, themeItems }: NavigationToggleProps): React.ReactElement | null => {
    const { isMultiLanguage, isThemeToggle } = useGlobalStateContext();

    if (!isMultiLanguage && !isThemeToggle) return null;
    if (isMultiLanguage && (!langItems || langItems.length === 0)) return null;
    if (isThemeToggle && (!themeItems || themeItems.length === 0)) return null;

    return (
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

                {isThemeToggle && (
                    <Animation
                        type="fade"
                        options={{
                            y: 10,
                            opacityDuration: 650,
                            ...(isMultiLanguage ? { opacityDelay: 250 } : {}),
                        }}>
                        <NavigationSlideList
                            className="mt-1"
                            items={themeItems}>
                            <SwatchBookIcon />
                        </NavigationSlideList>
                    </Animation>
                )}
            </Container>
        </div>
    );
};

export default NavigationToggle;
