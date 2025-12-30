const IS_DEV = process.env.NODE_ENV === 'development';
const IS_MULTI_LANGUAGE = process.env.NEXT_PUBLIC_FF_MULTI_LANGUAGE === '1';
const IS_THEME_TOGGLE = process.env.NEXT_PUBLIC_FF_THEME_TOGGLE === '1';

export const getEnvFeature = () => {
    return {
        isDev: IS_DEV,
        isMultiLanguage: IS_MULTI_LANGUAGE,
        isThemeToggle: IS_THEME_TOGGLE,
    };
};
