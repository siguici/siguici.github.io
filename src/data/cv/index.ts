import common from './common.ts';
import en from './en.ts';
import fr from './fr.ts';

export const locales = {
  en,
  fr,
} as const;

export type Locale = keyof typeof locales;

export default function getCV(locale: Locale) {
  const selectedLocale = locales[locale] ?? locales.en;

  return {
    ...common,
    ...selectedLocale,
  };
}

export type CVData = ReturnType<typeof getCV>;
