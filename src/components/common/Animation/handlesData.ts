import { ANIMATION_HANDLES } from '@/components/common/Animation/handles';

import { Fade } from '@/components/common/Animation/elements/Fade';
import { Marquee } from '@/components/common/Animation/elements/Marquee';
import { BannerHomepage } from '@/components/common/Animation/elements/BannerHomepage';
import { BannerText } from '@/components/common/Animation/elements/BannerText';

export const ANIMATION_DATA_HANDLES = {
    [ANIMATION_HANDLES.FADE]: Fade,
    [ANIMATION_HANDLES.MARQUEE]: Marquee,
    [ANIMATION_HANDLES.BANNER_HOMEPAGE]: BannerHomepage,
    [ANIMATION_HANDLES.BANNER_TEXT]: BannerText,
} as const;
