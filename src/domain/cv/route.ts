import type { CVTemplate } from '../../../templates/cv';
import type { ProfileType } from '../data/cv';
import type { Locale } from './types';

export interface CVRoute {
  locale: Locale;
  profile: ProfileType;
  template: CVTemplate;
}

export const DEFAULT_CV_ROUTE: CVRoute = {
  locale: 'fr',
  profile: 'master',
  template: 'default',
};

const locales = new Set<Locale>(['fr', 'en']);

const profiles = new Set<ProfileType>([
  'master',
  'software-architect',
  'data-scientist',
  'data-analyst',
]);

const templates = new Set<CVTemplate>(['default', 'modern', 'compact']);

function isLocale(value: string): value is Locale {
  return locales.has(value as Locale);
}

function isProfile(value: string): value is ProfileType {
  return profiles.has(value as ProfileType);
}

function isTemplate(value: string): value is CVTemplate {
  return templates.has(value as CVTemplate);
}

export function parseCVRoute(variant: string[] | undefined): CVRoute {
  if (!variant || variant.length === 0) {
    return DEFAULT_CV_ROUTE;
  }

  const [first, second, third] = variant;

  let locale = DEFAULT_CV_ROUTE.locale;
  let profile = DEFAULT_CV_ROUTE.profile;
  let template = DEFAULT_CV_ROUTE.template;

  if (first && isLocale(first)) {
    locale = first;
  }

  if (second && isProfile(second)) {
    profile = second;
  }

  if (third && isTemplate(third)) {
    template = third;
  }

  return {
    locale,
    profile,
    template,
  };
}
