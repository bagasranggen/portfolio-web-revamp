import { RefComponent } from '@/libs/@types';

import Base, { BaseTypes } from '@/components/common/Button/Base';

export type * from '@/components/common/Button/Base';

export type ButtonComposition = {};

export default Object.assign<RefComponent<BaseTypes, HTMLAnchorElement | HTMLDivElement>, ButtonComposition>(Base, {});
