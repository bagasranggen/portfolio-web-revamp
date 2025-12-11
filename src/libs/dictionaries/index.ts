import 'server-only';

import { LOCALES_HANDLES } from '@/libs/mock';

export const dictionaries = {
    [LOCALES_HANDLES.EN]: () => import('./dic/en.json').then((module) => module.default),
    [LOCALES_HANDLES.JP]: () => import('./dic/jp.json').then((module) => module.default),
};
