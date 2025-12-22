import { Component, RefComponent } from '@/libs/@types';

import Base, { BaseProps } from '@/components/common/Heading/Base';
import Fluid, { FluidProps } from '@/components/common/Heading/Fluid';

export type * from '@/components/common/Heading/Base';

export type HeadingComposition = {
    Fluid: Component<FluidProps>;
};

export default Object.assign<RefComponent<BaseProps, HTMLHeadingElement>, HeadingComposition>(Base, { Fluid });
