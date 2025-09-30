import { Component } from '@/libs/@types';

import Text, { TextTypes } from '@/components/common/Banner/Text';

export type * from '@/components/common/Banner/Text';

export type BannerComposition = {
    Text: Component<TextTypes>;
};

export default Object.assign<{}, BannerComposition>({}, { Text });
