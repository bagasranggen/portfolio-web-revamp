import { Component, RefComponent } from '@/libs/@types';

import Base, { BaseProps } from '@/components/common/Button/Base';
import Block, { BlockProps } from '@/components/common/Button/Block';

export type * from '@/components/common/Button/Base';
export type * from '@/components/common/Button/Block';

export type ButtonComposition = {
    Block: Component<BlockProps>;
};

export default Object.assign<RefComponent<BaseProps, HTMLAnchorElement | HTMLDivElement>, ButtonComposition>(Base, {
    Block,
});
