import { type SupportedLocale, Translator } from './translator';

/**
 * Factory Hook to instantiate the Translator API.
 */
export function useTranslations(locale: SupportedLocale = 'fr'): Translator {
  return new Translator(locale);
}
