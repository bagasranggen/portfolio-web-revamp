import { Component } from '@/libs/@types';

import Base, { BaseTypes } from '@/components/common/List/Base';
import Inline, { InlineTypes } from '@/components/common/List/Inline';
import Social, { SocialTypes } from '@/components/common/List/Social';

export type * from '@/components/common/List/Base';
export type * from '@/components/common/List/Inline';
export type * from '@/components/common/List/Social';

export type ListComposition = {
    Inline: Component<InlineTypes>;
    Social: Component<SocialTypes>;
};

export default Object.assign<Component<BaseTypes>, ListComposition>(Base, { Inline, Social });
