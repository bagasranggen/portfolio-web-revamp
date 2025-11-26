import { Component } from '@/libs/@types';

import Base, { BaseProps } from '@/components/common/List/Base';
import Inline, { InlineProps } from '@/components/common/List/Inline';
import Social, { SocialProps } from '@/components/common/List/Social';

export type * from '@/components/common/List/Base';
export type * from '@/components/common/List/Inline';
export type * from '@/components/common/List/Social';

export type ListComposition = {
    Inline: Component<InlineProps>;
    Social: Component<SocialProps>;
};

export default Object.assign<Component<BaseProps>, ListComposition>(Base, { Inline, Social });
