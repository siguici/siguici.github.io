import dictionaries from '../locales';

export type Dictionary = typeof dictionaries.fr;
export type SupportedLocale = keyof typeof dictionaries;

export const SUPPORTED_LOCALES = Object.keys(dictionaries);

// ============================================================================
// 1. TYPE-LEVEL PROGRAMMING: AUTO-COMPLETION FOR KEYS & VARIABLES
// ============================================================================

/** Dot-nested string keys: "auth.login", "welcome", etc. */
type NestedKeys<T> = T extends object
  ? {
      [K in keyof T & (string | number)]: T[K] extends object
        ? `${K}` | `${K}.${NestedKeys<T[K]>}`
        : `${K}`;
    }[keyof T & (string | number)]
  : '';

export type TranslationKey = NestedKeys<Dictionary>;

/** Automatic compile-time extraction of `:variable` placeholders */
type ExtractVars<T extends string> = T extends `${string}:${infer Var}`
  ? Var extends
      | `${infer Name} ${string}`
      | `${infer Name}.${string}`
      | `${infer Name},${string}`
      | `${infer Name}`
    ? Name | ExtractVars<T extends `${string}:${Name}${infer Rest}` ? Rest : ''>
    : never
  : never;

type SearchKey<T, K extends string> = K extends `${infer Head}.${infer Tail}`
  ? Head extends T
    ? SearchKey<T[Head & keyof T], Tail>
    : undefined
  : K extends T
    ? T[K & keyof T]
    : undefined;

type KeyTranslation<K extends string> = SearchKey<Dictionary, K>;

type ReplacementsFor<K extends string> =
  KeyTranslation<K> extends string
    ? [ExtractVars<KeyTranslation<K>>] extends [never]
      ? Record<string, string | number> | void
      : { [P in ExtractVars<KeyTranslation<K>>]: string | number }
    : Record<string, string | number> | void;

// ============================================================================
// 2. COMPILED REGEXES & RESOLVER (WITH TRAVERSAL CACHE)
// ============================================================================

const VARIABLE_REGEX = /:([A-Za-z0-9_]+)/g;
const PLURAL_RANGE_REGEX = /^([{[])([^}\]]+)[}\]]\s*(.*)$/;

const resolutionCache = new Map<string, string | object | undefined>();

export function resolve(
  dict: object,
  key: string,
): string | object | undefined {
  const cacheKey = `${(dict as Record<string, unknown>)._id || 'dict'}.${key}`;
  if (resolutionCache.has(cacheKey)) return resolutionCache.get(cacheKey);

  const value = key.split('.').reduce<unknown>((obj, token) => {
    if (obj && typeof obj === 'object' && token in obj) {
      return (obj as Record<string, unknown>)[token];
    }
    return undefined;
  }, dict);

  resolutionCache.set(cacheKey, value as string | object | undefined);
  return value as string | object | undefined;
}

// Internal cache for Intl.PluralRules instances
const pluralRulesCache = new Map<string, Intl.PluralRules>();
function getPluralRules(locale: string): Intl.PluralRules {
  if (!pluralRulesCache.has(locale)) {
    pluralRulesCache.set(locale, new Intl.PluralRules(locale));
  }
  return pluralRulesCache.get(locale)!;
}

// ============================================================================
// 3. TRANSLATOR CLASS & ENGINE API
// ============================================================================

export class Translator {
  public readonly locale: SupportedLocale;
  public readonly dictionary: Dictionary;
  private pluralRules: Intl.PluralRules;

  constructor(locale: SupportedLocale) {
    this.locale = dictionaries[locale] ? locale : 'en';
    this.dictionary = dictionaries[this.locale] as Dictionary;
    this.pluralRules = getPluralRules(this.locale);
  }

  /**
   * Checks if a translation key exists in the current dictionary.
   */
  public exists(key: string): boolean {
    return resolve(this.dictionary, key) !== undefined;
  }

  /**
   * Expressive alias for exists().
   */
  public has(key: string): boolean {
    return this.exists(key);
  }

  /**
   * Main translation method with resolution, Intl/ pluralization & single-pass interpolation.
   */
  public translate<K extends TranslationKey | (string & {})>(
    key: K,
    ...args: ReplacementsFor<K> extends void
      ? [Record<string, string | number>?]
      : [ReplacementsFor<K>]
  ): string {
    const replacements = (args[0] || {}) as Record<string, string | number>;
    const targetValue = resolve(this.dictionary, key as string);

    // Dev mode: Warning on missing translation key
    if (targetValue === undefined) {
      if (import.meta.env?.DEV || import.meta.env?.CI) {
        console.warn(
          `[i18n] ⚠️ Missing translation key: "${String(key)}" for locale "${this.locale}"`,
        );
      }
      return String(key);
    }

    let translation = '';

    // Native Intl Pluralization Object ({ "one": "...", "other": "..." })
    if (
      typeof targetValue === 'object' &&
      targetValue !== null &&
      'count' in replacements
    ) {
      const count = Number(replacements.count);
      const rule = this.pluralRules.select(count);
      const pluralObj = targetValue as Record<string, string>;

      translation = pluralObj[rule] || pluralObj.other || String(key);
    } else if (typeof targetValue === 'string') {
      translation = targetValue;

      // Backward Compatibility: Inline  Pluralization ("{0} None|[1,*] :count")
      if ('count' in replacements && translation.includes('|')) {
        translation = this.resolvePlural(
          translation,
          Number(replacements.count),
        );
      }
    } else {
      return String(key);
    }

    // Single-pass regex interpolation
    return translation.replace(VARIABLE_REGEX, (fullMatch, varName) => {
      const val = replacements[varName];
      return val !== undefined ? String(val) : fullMatch;
    });
  }

  /**
   * Expressive shorthand alias for translate().
   */
  public __(
    key: TranslationKey | (string & {}),
    replacements: Record<string, string | number> = {},
  ): string {
    return this.translate(key, replacements);
  }

  // --- INTL FORMATTING HELPERS ---

  public formatDate(
    date: Date | number | string,
    options?: Intl.DateTimeFormatOptions,
  ): string {
    const d =
      typeof date === 'string' || typeof date === 'number'
        ? new Date(date)
        : date;
    return new Intl.DateTimeFormat(this.locale, options).format(d);
  }

  public formatNumber(
    number: number,
    options?: Intl.NumberFormatOptions,
  ): string {
    return new Intl.NumberFormat(this.locale, options).format(number);
  }

  public formatCurrency(amount: number, currency: string = 'USD'): string {
    return new Intl.NumberFormat(this.locale, {
      style: 'currency',
      currency,
    }).format(amount);
  }

  private resolvePlural(translation: string, count: number): string {
    const segments = translation.split('|');
    for (const segment of segments) {
      const trimmed = segment.trim();
      const match = trimmed.match(PLURAL_RANGE_REGEX);
      if (match) {
        const [, type, range, text] = match;
        if (type === '{' && Number(range) === count) return text;
        if (type === '[') {
          const [minStr, maxStr] = range.split(',');
          const min = minStr.trim() === '*' ? -Infinity : Number(minStr);
          const max = maxStr.trim() === '*' ? Infinity : Number(maxStr);
          if (count >= min && count <= max) return text;
        }
      }
    }
    // Standard Fallback: "Singular | Plural"
    if (segments.length === 2 && !segments[0].match(/^[{[]/)) {
      return count <= 1 ? segments[0].trim() : segments[1].trim();
    }
    return translation;
  }
}
