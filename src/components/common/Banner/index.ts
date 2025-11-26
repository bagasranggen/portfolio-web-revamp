import { Component } from '@/libs/@types';

import Homepage, { HomepageProps } from '@/components/common/Banner/Homepage';
import Text, { TextProps } from '@/components/common/Banner/Text';

export type * from '@/components/common/Banner/Homepage';
export type * from '@/components/common/Banner/Text';

export type BannerComposition = {
    Homepage: Component<HomepageProps>;
    Text: Component<TextProps>;
};

export default Object.assign<{}, BannerComposition>({}, { Homepage, Text });
