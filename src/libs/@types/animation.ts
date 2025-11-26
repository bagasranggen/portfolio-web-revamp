import { ANIMATION_HANDLES } from '@/components/common/Animation/handles';

import { TextSplitProps } from '@/components/common/Animation/elements/TextSplit';

export type AnimationElementProps = {
    target: HTMLElement;
};

export type AnimationOptionsProps<Type, Options> = {
    type?: Type;
    options?: Options;
};

export type AnimationBaseProps =
    | {
          type?: Exclude<
              (typeof ANIMATION_HANDLES)[keyof typeof ANIMATION_HANDLES],
              typeof ANIMATION_HANDLES.TEXT_SPLIT
          >;
      }
    | AnimationOptionsProps<typeof ANIMATION_HANDLES.TEXT_SPLIT, Omit<TextSplitProps, 'target'>>;
