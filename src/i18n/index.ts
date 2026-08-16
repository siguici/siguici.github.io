import { type SupportedLocale, Translator } from './translator';

export function useTranslations(locale: SupportedLocale = 'fr'): Translator {
  return new Translator(locale);
}
