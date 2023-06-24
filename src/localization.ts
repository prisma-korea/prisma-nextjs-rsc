import type {Locale} from './i18n';

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const translates = {
  en: () =>
    import('../assets/locales/en.json').then((module) => module.default),
  ko: () =>
    import('../assets/locales/ko.json').then((module) => module.default),
  /* add more locales here */
};

export type Translates = Awaited<ReturnType<(typeof translates)['en']>>;

export type Translation = {
  [K in keyof Translates]: Translates[K];
};

type LocalizationVariables = (
  text: string,
  params?: Record<string, string | number>,
) => string;

const variableFormatter = (): LocalizationVariables => {
  return (text, params) => {
    if (!params) {
      return text;
    }

    const result = Object.entries(params).reduce((acc, [variable, value]) => {
      const pattern = new RegExp(`{{\\s*${variable}\\s*}}`, 'g');

      return acc.replace(pattern, String(value));
    }, text);

    return result;
  };
};

export const getTranslates = async (locale: Locale): Promise<Translates> => {
  if (typeof translates[locale] !== 'function') {
    return translates['en']();
  }

  const translation = await translates[locale]();
  const formattedTranslation = {
    ...translation,
    t: variableFormatter(),
  };

  return formattedTranslation;
};
