import { defineMiddleware } from 'astro:middleware';
import type { MiddlewareHandler } from 'astro';
import {
  SUPPORTED_LOCALES,
  type SupportedLocale,
  useTranslations,
} from './i18n';

const DEFAULT_LOCALE: SupportedLocale = 'en';

/**
 * Extract locale from the URL pathname (e.g., "/fr/about" -> "fr")
 */
function getLocaleFromUrl(pathname: string): SupportedLocale | undefined {
  const segments = pathname.split('/').filter(Boolean);
  const candidate = segments[0] as SupportedLocale;
  return SUPPORTED_LOCALES.includes(candidate) ? candidate : undefined;
}

/**
 * Fallback detection: Extract preferred locale from Accept-Language header
 */
function getLocaleFromHeader(request: Request): SupportedLocale {
  const acceptLanguage = request.headers.get('accept-language');
  if (!acceptLanguage) return DEFAULT_LOCALE;

  const preferredLocale = acceptLanguage
    .split(',')
    .map((lang) => lang.split(';')[0].trim().substring(0, 2))
    .find((lang): lang is SupportedLocale =>
      SUPPORTED_LOCALES.includes(lang as SupportedLocale),
    );

  return preferredLocale || DEFAULT_LOCALE;
}

export const onRequest: MiddlewareHandler = defineMiddleware(
  (context, next) => {
    // 1. Detect locale from Astro.currentLocale, URL path, or request header
    const locale =
      (context.currentLocale as SupportedLocale) ||
      getLocaleFromUrl(context.url.pathname) ||
      getLocaleFromHeader(context.request);

    // 2. Hydrate the Translator instance (uses internal in-memory cache)
    const t = useTranslations(locale);

    // 3. Attach to Astro.locals
    context.locals.locale = locale;
    context.locals.translator = t;
    context.locals.__ = t.__.bind(t);
    context.locals.date = t.formatDate.bind(t);
    context.locals.number = t.formatNumber.bind(t);
    context.locals.currency = t.formatCurrency.bind(t);

    return next();
  },
);
