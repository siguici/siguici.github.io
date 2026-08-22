import common from './common.ts';
import en from './en.ts';
import fr from './fr.ts';
import { dataAnalystEN, dataAnalystFR } from './profiles/data-analyst';
import { dataScientistEN, dataScientistFR } from './profiles/data-scientist';
import { masterEN, masterFR } from './profiles/master';

export type ProfileType = 'master' | 'data-scientist' | 'data-analyst';

export interface Capability {
  title: string;
  description: string;
}

export interface Experience {
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

export interface CV {
  title: string;
  identity: {
    name: string;
    role: string;
  };
  location: string;
  subtitle: string;
  tagline: string;
  summary: string;
  capabilities: Capability[];
  experiences: Experience[];
  categories: Record<string, string>;
  ecosystem: EcosystemGroup[];
  education: Education[];
  languages: string;
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

export const SPECIFIC_PROFILES: ProfileType[] = [
  'data-scientist',
  'data-analyst',
];
export const LOCALES: Locale[] = ['fr', 'en'];
export const DEFAULT_PROFILE: ProfileType = 'master';
export const DEFAULT_LOCALE: Locale = 'fr';

const cvRegistry: Record<ProfileType, Record<Locale, CVData>> = {
  master: { fr: masterFR, en: masterEN },
  'data-scientist': { fr: dataScientistFR, en: dataScientistEN },
  'data-analyst': { fr: dataAnalystFR, en: dataAnalystEN },
};

export const locales = {
  en,
  fr,
} as const;

export type Locale = keyof typeof locales;

export default function getCV(locale: Locale) {
  const selectedLocale = locales[locale] ?? locales.en;

  return {
    ...common,
    ...selectedLocale,
  };
}

export function getCVData(profile?: ProfileType, lang?: Locale) {
  const activeProfile =
    profile && cvRegistry[profile] ? profile : DEFAULT_PROFILE;
  const activeLang =
    lang && cvRegistry[activeProfile][lang] ? lang : DEFAULT_LOCALE;

  return {
    data: cvRegistry[activeProfile][activeLang],
    activeProfile,
    activeLang,
    isMaster: activeProfile === 'master',
  };
}

export type CVData = ReturnType<typeof getCV>;
