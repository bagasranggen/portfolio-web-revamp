import { ANIMATION_HANDLES } from '@/components/common/Animation/handles';

import { JSAnimation, Timeline, TweenParamValue } from 'animejs';

import { BannerHomepageProps } from '@/components/common/Animation/elements/BannerHomepage';
import { BannerTextProps } from '@/components/common/Animation/elements/BannerText';
import { FadeProps } from '@/components/common/Animation/elements/Fade';
import { FadeInProps } from '@/components/common/Animation/elements/FadeIn';
import { TextSplitProps } from '@/components/common/Animation/elements/TextSplit';

export type AnimationElementProps = {
    target: HTMLElement;
};

export type AnimationSyncItemProps = Timeline | JSAnimation | string;

export type AnimationSyncProps = {
    target?: AnimationSyncItemProps;
    opacityDelay?: TweenParamValue | undefined;
    opacityDelayOffset?: TweenParamValue | undefined;
};

export type AnimationOptionsProps<Type, Options> = {
    type?: Type;
    options?: Options;
};

export type AnimationBaseProps =
    | {
          type?: Exclude<
              (typeof ANIMATION_HANDLES)[keyof typeof ANIMATION_HANDLES],
              | typeof ANIMATION_HANDLES.BANNER_HOMEPAGE
              | typeof ANIMATION_HANDLES.BANNER_TEXT
              | typeof ANIMATION_HANDLES.FADE
              | typeof ANIMATION_HANDLES.FADE_IN
              | typeof ANIMATION_HANDLES.TEXT_SPLIT
          >;
      }
    | AnimationOptionsProps<typeof ANIMATION_HANDLES.BANNER_HOMEPAGE, Omit<BannerHomepageProps, 'target'>>
    | AnimationOptionsProps<typeof ANIMATION_HANDLES.BANNER_TEXT, Omit<BannerTextProps, 'target'>>
    | AnimationOptionsProps<typeof ANIMATION_HANDLES.FADE, Omit<FadeProps, 'target'>>
    | AnimationOptionsProps<typeof ANIMATION_HANDLES.FADE_IN, Omit<FadeInProps, 'target'>>
    | AnimationOptionsProps<typeof ANIMATION_HANDLES.TEXT_SPLIT, Omit<TextSplitProps, 'target'>>;
