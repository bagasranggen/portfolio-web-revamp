import { Component } from '@/libs/@types';

import Base, { BaseTypes } from '@/components/common/Cards/Base';
import Block, { BlockTypes } from '@/components/common/Cards/Block';
import Offset, { OffsetTypes } from '@/components/common/Cards/Offset';

export type * from '@/components/common/Cards/Base';
export type * from '@/components/common/Cards/Block';
export type * from '@/components/common/Cards/Offset';

export type CardsComposition = {
    Block: Component<BlockTypes>;
    Offset: Component<OffsetTypes>;
};

export default Object.assign<Component<BaseTypes>, CardsComposition>(Base, { Block, Offset });
