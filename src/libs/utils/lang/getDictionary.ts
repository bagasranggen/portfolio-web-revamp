import { Locale } from '@/libs/@types';
import { dictionaries } from '@/libs/dictionaries';
import { LOCALES_HANDLES } from '@/libs/mock';

export const getDictionary = async (locale: Locale | string) => {
    let data = dictionaries[LOCALES_HANDLES.EN]();

    if (locale && dictionaries?.[locale as Locale]) {
        data = dictionaries[locale as Locale]();
    }

    return data;
};
