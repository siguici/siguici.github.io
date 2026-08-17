import { type SupportedLocale, Translator } from './translator';

export { SUPPORTED_LOCALES } from './translator';
export { type SupportedLocale, Translator };

/**
 * Factory Hook to instantiate the Translator API.
 */
export function useTranslations(locale: SupportedLocale = 'fr'): Translator {
  return new Translator(locale);
}
