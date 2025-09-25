import { ArrayStringTypes, BreakpointsTypes, ClassnameTypes } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

export const BREAKPOINT_HANDLE: Partial<Record<BreakpointsTypes, string>> = {
    xxl: '2xl',
} as const;

export type CreateBreakpointClassTypes = {
    breakpoint?: BreakpointsTypes;
    value: string | number;
} & Required<ClassnameTypes>;

export const createBreakpointClass = ({ breakpoint, className, value }: CreateBreakpointClassTypes) => {
    let breakpointHandle: string | undefined = undefined;
    if (breakpoint && breakpoint !== 'xs') {
        breakpointHandle = breakpoint;

        if (BREAKPOINT_HANDLE?.[breakpoint]) breakpointHandle = BREAKPOINT_HANDLE[breakpoint];
    }

    let breakpointClass: ArrayStringTypes = [];
    if (breakpointHandle) breakpointClass.push(`${breakpointHandle}:`);
    breakpointClass.push(className);
    breakpointClass.push(`-${value}`);

    return joinArrayString(breakpointClass, '');
};
