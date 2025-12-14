import { THEMES_HANDLES } from '@/libs/mock';

export type ThemesProps = (typeof THEMES_HANDLES)[keyof typeof THEMES_HANDLES];
