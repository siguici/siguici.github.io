import en from '../locales/en.ts';
import fr from '../locales/fr.ts';

const dictionaries = { fr, en };

export function useTranslations(lang: keyof typeof dictionaries) {
  const dictionary = dictionaries[lang] || dictionaries.fr;

  return function __(
    key: string,
    replacements: Record<string, string | number> = {},
  ): string {
    let translation =
      key.split('.').reduce((obj: any, i) => obj?.[i], dictionary) || key;

    if (typeof translation !== 'string') return key;

    if ('count' in replacements) {
      const count = Number(replacements.count);
      const segments = translation.split('|');

      for (const segment of segments) {
        const match = segment.match(/^([{[])([^}\]]+)(?:}[\]])?\s*(.*)$/);
        if (!match) continue;

        const [_, type, range, text] = match;

        if (type === '{' && Number(range) === count) {
          translation = text;
          break;
        } else if (type === '[') {
          const [minStr, maxStr] = range.split(',');
          const min = minStr === '*' ? -Infinity : Number(minStr);
          const max = maxStr === '*' ? Infinity : Number(maxStr);

          if (count >= min && count <= max) {
            translation = text;
            break;
          }
        }
      }
    }

    Object.entries(replacements).forEach(([variable, value]) => {
      translation = translation.replace(
        new RegExp(`:${variable}`, 'g'),
        String(value),
      );
    });

    return translation;
  };
}
