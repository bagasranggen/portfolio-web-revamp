import { ANIMATION_HANDLES } from '@/components/common/Animation/handles';

import { Fade } from '@/components/common/Animation/elements/Fade';
import { Marquee } from '@/components/common/Animation/elements/Marquee';

export const ANIMATION_DATA_HANDLES = {
    [ANIMATION_HANDLES.FADE]: Fade,
    [ANIMATION_HANDLES.MARQUEE]: Marquee,
} as const;
