import { ANIMATION_HANDLES } from '@/components/common/Animation/handles';

import { TextSplitProps } from '@/components/common/Animation/elements/TextSplit';
import { FadeProps } from '@/components/common/Animation/elements/Fade';
import { FadeInProps } from '@/components/common/Animation/elements/FadeIn';

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
              typeof ANIMATION_HANDLES.TEXT_SPLIT | typeof ANIMATION_HANDLES.FADE | typeof ANIMATION_HANDLES.FADE_IN
          >;
      }
    | AnimationOptionsProps<typeof ANIMATION_HANDLES.TEXT_SPLIT, Omit<TextSplitProps, 'target'>>
    | AnimationOptionsProps<typeof ANIMATION_HANDLES.FADE, Omit<FadeProps, 'target'>>
    | AnimationOptionsProps<typeof ANIMATION_HANDLES.FADE_IN, Omit<FadeInProps, 'target'>>;
