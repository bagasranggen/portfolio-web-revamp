import { useEffect, useState } from 'react';
import { Locale, LocaleProps } from '@/libs/@types';
import { getDictionary } from '@/libs/utils';

export const useDictionary = (lang?: LocaleProps) => {
    const [dic, useDic] = useState<any>();

    useEffect(() => {
        if (!lang) return;

        const get = async (lang: LocaleProps) => {
            return await getDictionary(lang);
        };

        get(lang).then((res) => useDic(res));
    }, [lang]);

    return dic;
};
