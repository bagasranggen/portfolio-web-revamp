import { Component } from '@/libs/@types';

import Homepage, { HomepageTypes } from '@/components/common/Banner/Homepage';
import Text, { TextTypes } from '@/components/common/Banner/Text';

export type * from '@/components/common/Banner/Homepage';
export type * from '@/components/common/Banner/Text';

export type BannerComposition = {
    Homepage: Component<HomepageTypes>;
    Text: Component<TextTypes>;
};

export default Object.assign<{}, BannerComposition>({}, { Homepage, Text });
