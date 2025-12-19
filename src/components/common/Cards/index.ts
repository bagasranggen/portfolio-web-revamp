import { Component } from '@/libs/@types';

import Base, { BaseProps } from '@/components/common/Cards/Base';
import Block, { BlockProps } from '@/components/common/Cards/Block';
import Offset, { OffsetProps } from '@/components/common/Cards/Offset';

export type * from '@/components/common/Cards/Base';
export type * from '@/components/common/Cards/Block';
export type * from '@/components/common/Cards/Offset';

export type CardsComposition = {
    Block: Component<BlockProps>;
    Offset: Component<OffsetProps>;
};

export default Object.assign<Component<BaseProps>, CardsComposition>(Base, { Block, Offset });
