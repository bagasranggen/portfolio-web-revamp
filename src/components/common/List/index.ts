import { Component } from '@/libs/@types';

import Base, { BaseTypes } from '@/components/common/List/Base';
import Inline, { InlineTypes } from '@/components/common/List/Inline';

export type * from '@/components/common/List/Base';
export type * from '@/components/common/List/Inline';

export type ListComposition = {
    Inline: Component<InlineTypes>;
};

export default Object.assign<Component<BaseTypes>, ListComposition>(Base, { Inline });
