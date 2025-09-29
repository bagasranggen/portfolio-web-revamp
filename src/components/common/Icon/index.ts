import { Component } from '@/libs/@types';

import Arrow, { ArrowTypes } from '@/components/common/Icon/Arrow';

export type * from '@/components/common/Icon/Arrow';

export type IconComposition = {
    Arrow: Component<ArrowTypes>;
};

export default Object.assign<{}, IconComposition>({}, { Arrow });
