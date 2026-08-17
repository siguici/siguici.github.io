/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

import type { SupportedLocale, Translator } from './i18n';

interface ImportMetaEnv {
  readonly APP_NAME: string;
  readonly SERVER_PORT: number | string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare global {
  namespace App {
    interface Locals extends Record<string, any> {
      /** Pre-hydrated Translator instance for the current request */
      translator: Translator;
      /** Active locale for the current request */
      locale: SupportedLocale;
    }
  }
}
