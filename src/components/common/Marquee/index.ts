import { Component } from '@/libs/@types';

import Base, { BaseTypes } from '@/components/common/Marquee/Base';

export type * from '@/components/common/Marquee/Base';

export type MarqueeComposition = {};

export default Object.assign<Component<BaseTypes>, MarqueeComposition>(Base, {});
