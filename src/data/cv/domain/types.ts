export type ProfileId =
  | 'software-architect'
  | 'data-engineer'
  | 'data-scientist'
  | 'data-analyst';

export type Locale = 'fr' | 'en';

export interface ContactInfo {
  email: string;
  web: string;
  webUrl: string;
  github: string;
  githubUrl: string;
  linkedin: string;
  linkedinUrl: string;
}

export interface Capability {
  titleKey: string;
  descKey: string;
}

export interface StructuralExperience {
  id: string;
  company: string;
  period: string;
  impactKeys: string[];
}

export interface EcosystemGroup {
  categoryId: string;
  skills: string[];
}

export interface StructuralEducation {
  id: string;
  period: string;
}

export interface ResolvedCV {
  meta: {
    profileId: ProfileId;
    locale: Locale;
    title: string;
    location: string;
  };
  identity: {
    name: string;
    role: string;
    subtitle: string;
    tagline: string;
    summary: string;
  };
  metrics: {
    experienceYears: string;
    primaryDegree: string;
  };
  capabilities: Array<{
    title: string;
    description: string;
  }>;
  experiences: Array<{
    id: string;
    company: string;
    period: string;
    role: string;
    subtitle: string;
    impacts: string[];
  }>;
  ecosystem: Array<{
    categoryLabel: string;
    skills: string[];
  }>;
  education: Array<{
    degree: string;
    institution: string;
    period: string;
  }>;
  languages: string;
  contact: ContactInfo;
}
