import { ANIMATION_HANDLES } from '@/components/common/Animation/handles';

import { Fade } from '@/components/common/Animation/elements/Fade';

export const ANIMATION_DATA_HANDLES = {
    [ANIMATION_HANDLES.FADE]: Fade,
} as const;
