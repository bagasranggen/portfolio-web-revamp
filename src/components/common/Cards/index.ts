import { Component } from '@/libs/@types';

import Base, { BaseTypes } from '@/components/common/Cards/Base';
import Offset, { OffsetTypes } from '@/components/common/Cards/Offset';

export type * from '@/components/common/Cards/Base';
export type * from '@/components/common/Cards/Offset';

export type CardsComposition = {
    Offset: Component<OffsetTypes>;
};

export default Object.assign<Component<BaseTypes>, CardsComposition>(Base, { Offset });
