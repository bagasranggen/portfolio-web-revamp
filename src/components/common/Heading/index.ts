import { Component } from '@/libs/@types';

import Base, { BaseTypes } from '@/components/common/Heading/Base';

export type * from '@/components/common/Heading/Base';

export type HeadingComposition = {};

export default Object.assign<Component<BaseTypes>, HeadingComposition>(Base, {});
