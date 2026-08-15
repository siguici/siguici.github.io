import en from '../locales/en.ts';
import fr from '../locales/fr.ts';

const dictionaries = { fr, en };

export function useTranslations(lang: keyof typeof dictionaries) {
  const dictionary = dictionaries[lang] || dictionaries.fr;

  return function __(key: string): string {
    return key.split('.').reduce((obj: any, i) => obj?.[i], dictionary) || key;
  };
}
