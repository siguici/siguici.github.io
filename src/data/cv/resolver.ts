import type { ResolvedCV } from './domain/types';
import { getCVData, type Locale, type ProfileType } from './index';

export function resolveCV(profile: ProfileType, locale: Locale): ResolvedCV {
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
