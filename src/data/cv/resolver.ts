import {
  CV_LOCALES,
  CV_PROFILES,
  CV_TEMPLATES,
  DEFAULT_CV_LOCALE,
  DEFAULT_CV_PROFILE,
  DEFAULT_CV_TEMPLATE,
} from '../../config/cv';

import type { Locale, ProfileId, ResolvedCV } from '../../domain/cv/types';

import type { CVTemplate } from '../../templates/cv';

import { getCVData } from './index';

export interface CVVariant {
  locale: Locale;
  profile: ProfileId;
  template: CVTemplate;
}

const localeSet = new Set<string>(CV_LOCALES);
const profileSet = new Set<string>(CV_PROFILES);
const templateSet = new Set<string>(CV_TEMPLATES);

function isLocale(value: string): value is Locale {
  return localeSet.has(value);
}

function isProfile(value: string): value is ProfileId {
  return profileSet.has(value);
}

function isTemplate(value: string): value is CVTemplate {
  return templateSet.has(value);
}

export function resolveCVVariant(segments: readonly string[] = []): CVVariant {
  let locale: Locale | undefined;
  let profile: ProfileId | undefined;
  let template: CVTemplate | undefined;

  for (const segment of segments) {
    if (isLocale(segment)) {
      if (locale) {
        throw new Error(`Duplicate CV locale in variant: "${segment}"`);
      }

      locale = segment;
      continue;
    }

    if (isProfile(segment)) {
      if (profile) {
        throw new Error(`Duplicate CV profile in variant: "${segment}"`);
      }

      profile = segment;
      continue;
    }

    if (isTemplate(segment)) {
      if (template) {
        throw new Error(`Duplicate CV template in variant: "${segment}"`);
      }

      template = segment;
      continue;
    }

    throw new Error(`Unknown CV variant segment: "${segment}"`);
  }

  return {
    locale: locale ?? DEFAULT_CV_LOCALE,
    profile: profile ?? DEFAULT_CV_PROFILE,
    template: template ?? DEFAULT_CV_TEMPLATE,
  };
}

export function resolveCV(profile: ProfileId, locale: Locale): ResolvedCV {
  const { data } = getCVData(profile, locale);

  return {
    meta: {
      profileId: profile,
      locale,
      title: data.title,
      location: data.location,
    },

    identity: {
      name: data.identity.name,
      role: data.identity.role,
      subtitle: data.subtitle,
      tagline: data.tagline,
      summary: data.summary,
    },

    metrics: {
      experienceYears: '10+',
      primaryDegree: data.education[0]?.degree ?? '',
    },

    capabilities: data.capabilities.map(({ title, description }) => ({
      title,
      description,
    })),

    experiences: data.experiences.map((experience) => ({
      id: `${experience.company}-${experience.period}`,
      company: experience.company,
      period: experience.period,
      role: experience.role,
      subtitle: experience.subtitle ?? '',
      impacts: experience.impacts,
    })),

    ecosystem: data.ecosystem.map((group) => ({
      categoryLabel: data.categories[group.categoryId] ?? group.categoryId,
      skills: group.skills,
    })),

    education: data.education.map(({ degree, institution, period }) => ({
      degree,
      institution: institution ?? '',
      period,
    })),

    languages: data.languages,

    contact: data.contact,
  };
}

type CVDimension = 'locale' | 'profile' | 'template';

const CV_DIMENSIONS: readonly CVDimension[] = ['locale', 'profile', 'template'];

function getDimensionValues(dimension: CVDimension): readonly string[] {
  switch (dimension) {
    case 'locale':
      return CV_LOCALES;

    case 'profile':
      return CV_PROFILES;

    case 'template':
      return CV_TEMPLATES;
  }
}

function getDimensionValue(variant: CVVariant, dimension: CVDimension): string {
  switch (dimension) {
    case 'locale':
      return variant.locale;

    case 'profile':
      return variant.profile;

    case 'template':
      return variant.template;
  }
}

export function generateCVVariants(): CVVariant[] {
  const variants: CVVariant[] = [];

  for (const locale of CV_LOCALES) {
    for (const profile of CV_PROFILES) {
      for (const template of CV_TEMPLATES) {
        variants.push({
          locale,
          profile,
          template,
        });
      }
    }
  }

  return variants;
}

export function generateCVVariantSegments(variant: CVVariant): string[][] {
  const segments: string[][] = [];

  const fullValues = CV_DIMENSIONS.map((dimension) =>
    getDimensionValue(variant, dimension),
  );

  const combinations = 1 << CV_DIMENSIONS.length;

  for (let mask = 0; mask < combinations; mask++) {
    const combination: string[] = [];

    for (let index = 0; index < CV_DIMENSIONS.length; index++) {
      if (mask & (1 << index)) {
        combination.push(fullValues[index]);
      }
    }

    segments.push(combination);
  }

  return segments;
}

export function generateCVStaticVariants(): CVVariant[] {
  const variants = generateCVVariants();

  const unique = new Map<string, CVVariant>();

  for (const variant of variants) {
    for (const segments of generateCVVariantSegments(variant)) {
      const key = segments.join('/');

      if (!unique.has(key)) {
        unique.set(key, resolveCVVariant(segments));
      }
    }
  }

  return [...unique.values()];
}

export function getCVVariantSegments(variant: CVVariant): string[] {
  const segments: string[] = [];

  if (variant.locale !== DEFAULT_CV_LOCALE) {
    segments.push(variant.locale);
  }

  if (variant.profile !== DEFAULT_CV_PROFILE) {
    segments.push(variant.profile);
  }

  if (variant.template !== DEFAULT_CV_TEMPLATE) {
    segments.push(variant.template);
  }

  return segments;
}
