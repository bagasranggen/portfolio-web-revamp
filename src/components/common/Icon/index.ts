import { Component } from '@/libs/@types';

import Arrow, { ArrowProps } from '@/components/common/Icon/Arrow';

export type * from '@/components/common/Icon/Arrow';

export type IconComposition = {
    Arrow: Component<ArrowProps>;
};

export default Object.assign<{}, IconComposition>({}, { Arrow });
