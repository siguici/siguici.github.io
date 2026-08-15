import en from '../locales/en.ts';
import fr from '../locales/fr.ts';

const dictionaries = { fr, en };

type NestedKeys<T> = T extends object
  ? {
      [K in keyof T & (string | number)]: T[K] extends object
        ? `${K}` | `${K}.${NestedKeys<T[K]>}`
        : `${K}`;
    }[keyof T & (string | number)]
  : '';

export type TranslationKey = NestedKeys<typeof fr>;

export function useTranslations(lang: keyof typeof dictionaries) {
  const dictionary = dictionaries[lang] || dictionaries.fr;

  return function __(
    key: TranslationKey | (string & {}),
    replacements: Record<string, string | number> = {},
  ): string {
    let translation =
      key.split('.').reduce((obj: any, i) => obj?.[i], dictionary) || key;

    if (typeof translation !== 'string') return key;

    if ('count' in replacements) {
      const count = Number(replacements.count);
      const segments = translation.split('|');
      let matched = false;

      for (const segment of segments) {
        const trimmed = segment.trim();
        const match = trimmed.match(/^([{[])([^}\]]+)[}\]]\s*(.*)$/);

        if (match) {
          const [_, type, range, text] = match;

          if (type === '{' && Number(range) === count) {
            translation = text;
            matched = true;
            break;
          } else if (type === '[') {
            const [minStr, maxStr] = range.split(',');
            const min = minStr.trim() === '*' ? -Infinity : Number(minStr);
            const max = maxStr.trim() === '*' ? Infinity : Number(maxStr);

            if (count >= min && count <= max) {
              translation = text;
              matched = true;
              break;
            }
          }
        }
      }

      if (!matched && segments.length === 2 && !segments[0].match(/^[{[]/)) {
        translation = count <= 1 ? segments[0].trim() : segments[1].trim();
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
