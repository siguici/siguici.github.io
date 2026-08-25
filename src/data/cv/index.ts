import common from './common.ts';
import en from './en.ts';
import fr from './fr.ts';
import { dataAnalystEN, dataAnalystFR } from './profiles/data-analyst.ts';

import { dataEngineerEN, dataEngineerFR } from './profiles/data-engineer.ts';

import { dataScientistEN, dataScientistFR } from './profiles/data-scientist.ts';
import {
  softwareArchitectEN,
  softwareArchitectFR,
} from './profiles/software-architect.ts';

export type ProfileType =
  | 'software-architect'
  | 'data-engineer'
  | 'data-scientist'
  | 'data-analyst';

export type Locale = 'fr' | 'en';

export interface Capability {
  title: string;
  description: string;
}

export interface Experience {
  id?: string;
  role: string;
  company: string;
  period: string;
  subtitle?: string;
  impacts: string[];
}

export interface EcosystemGroup {
  categoryId: string;
  skills: string[];
}

export interface Education {
  degree: string;
  institution?: string;
  period: string;
}

export interface Project {
  name: string;
  type: string;
  tagline: string;
  description: string;
}

export interface CV {
  lang?: Locale;
  title: string;
  identity: {
    name: string;
    role: string;
  };
  location: string;
  availability?: string;
  subtitle: string;
  tagline: string;
  headline?: string;
  summary: string;
  strengths?: readonly string[];
  capabilities: Capability[];
  experiences: Experience[];
  projects?: Project[];
  opensource?: readonly string[];
  sections?: Record<string, string>;
  categories: Record<string, string>;
  ecosystem: EcosystemGroup[];
  education: Education[];
  languages: unknown;
  contact: {
    email: string;
    web: string;
    webUrl: string;
    github: string;
    githubUrl: string;
    linkedin: string;
    linkedinUrl: string;
  };
}

export type CVData = CV;

export const PROFILE_IDS: ProfileType[] = [
  'software-architect',
  'data-engineer',
  'data-scientist',
  'data-analyst',
];

export const SPECIFIC_PROFILES: ProfileType[] = [
  'data-engineer',
  'data-scientist',
  'data-analyst',
];

export const LOCALES: Locale[] = ['fr', 'en'];

export const DEFAULT_PROFILE: ProfileType = 'software-architect';

export const DEFAULT_LOCALE: Locale = 'fr';

const cvRegistry: Record<ProfileType, Record<Locale, CV>> = {
  'software-architect': {
    fr: softwareArchitectFR,
    en: softwareArchitectEN,
  },
  'data-engineer': {
    fr: dataEngineerFR,
    en: dataEngineerEN,
  },
  'data-scientist': {
    fr: dataScientistFR,
    en: dataScientistEN,
  },
  'data-analyst': {
    fr: dataAnalystFR,
    en: dataAnalystEN,
  },
};

export const locales = {
  en,
  fr,
} as const;

export function getCV(locale: Locale = DEFAULT_LOCALE) {
  const selectedLocale = locales[locale] ?? locales.en;

  return {
    ...common,
    ...selectedLocale,
  };
}

export function getCVData(
  profile: ProfileType = DEFAULT_PROFILE,
  lang: Locale = DEFAULT_LOCALE,
) {
  const activeProfile = cvRegistry[profile] ? profile : DEFAULT_PROFILE;

  const activeLang = cvRegistry[activeProfile][lang] ? lang : DEFAULT_LOCALE;

  return {
    data: cvRegistry[activeProfile][activeLang],
    activeProfile,
    activeLang,
    isMaster: activeProfile === DEFAULT_PROFILE,
  };
}

export default getCV;
