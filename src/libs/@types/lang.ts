import { dictionaries } from '@/libs/dictionaries';
import { LOCALES_HANDLES } from '@/libs/mock';

export type LocaleProps = (typeof LOCALES_HANDLES)[keyof typeof LOCALES_HANDLES];

export type Locale = keyof typeof dictionaries;
