import { ANIMATION_HANDLES } from '@/components/common/Animation/handles';

import { TextSplitTypes } from '@/components/common/Animation/elements/TextSplit';

export type AnimationElementTypes = {
    target: HTMLElement;
};

export type AnimationOptionsType<Type, Options> = {
    type?: Type;
    options?: Options;
};

export type AnimationBaseTypes =
    | {
          type?: Exclude<
              (typeof ANIMATION_HANDLES)[keyof typeof ANIMATION_HANDLES],
              typeof ANIMATION_HANDLES.TEXT_SPLIT
          >;
      }
    | AnimationOptionsType<typeof ANIMATION_HANDLES.TEXT_SPLIT, Omit<TextSplitTypes, 'target'>>;
