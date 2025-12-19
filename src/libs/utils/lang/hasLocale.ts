import { Locale } from '@/libs/@types';
import { dictionaries } from '@/libs/dictionaries';

export const hasLocale = (locale: string): locale is Locale => locale in dictionaries;
