import { Component } from '@/libs/@types';

import Base, { BaseTypes } from '@/components/common/Columns/Base';
import Column, { ColumnTypes } from '@/components/common/Columns/Column';

export type * from '@/components/common/Columns/Base';
export type * from '@/components/common/Columns/Column';

export type ColumnsComposition = {
    Column: Component<ColumnTypes>;
};

export default Object.assign<Component<BaseTypes>, ColumnsComposition>(Base, { Column });
