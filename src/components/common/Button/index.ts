import { Component, RefComponent } from '@/libs/@types';

import Base, { BaseTypes } from '@/components/common/Button/Base';
import Block, { BlockTypes } from '@/components/common/Button/Block';

export type * from '@/components/common/Button/Base';
export type * from '@/components/common/Button/Block';

export type ButtonComposition = {
    Block: Component<BlockTypes>;
};

export default Object.assign<RefComponent<BaseTypes, HTMLAnchorElement | HTMLDivElement>, ButtonComposition>(Base, {
    Block,
});
