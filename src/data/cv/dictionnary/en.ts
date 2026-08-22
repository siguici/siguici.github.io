// src/data/cv/dictionary/en.ts
import type { Dictionary } from './fr';

export const en: Dictionary = {
  ui: {
    print: 'PRINT / PDF (2 PAGES)',
    profile_label: 'PROFILE:',
    lang_label: 'LANGUAGE:',
    languages: 'French (Native) / English (Professional / Technical)',
  },

  profiles: {
    master: {
      title: 'Sigui Kessé Emmanuel — Platform & Software Architect',
      role: 'Senior Software Architect & Product Engineer',
      subtitle:
        'Designing software systems, language abstractions, and digital ecosystems.',
      tagline:
        'Specialist in DDD, Clean Architecture, compilation pipelines, and high-concurrency runtimes.',
      summary:
        'Software Architect and Senior Product Engineer with 10+ years of industry experience. Founder of the <strong>Sikessem</strong> open-source digital ecosystem, creator of the <strong>Phi</strong> language, and <strong>Cup Engine</strong>.',
    },
    'data-scientist': {
      title: 'Sigui Kessé Emmanuel — Data Scientist & ML Engineer',
      role: 'Data Scientist & Machine Learning Engineer',
      subtitle:
        'Extracting insights, predictive modeling, and algorithm engineering.',
      tagline:
        'Combining formal Big Data academic background with 10+ years of software engineering excellence.',
      summary:
        "Data Scientist with a rare dual strength: a <strong>Master's 1 in Big Data & Data Science</strong> backed by over 10 years of production software engineering.",
    },
    'data-analyst': {
      title: 'Sigui Kessé Emmanuel — Data Analyst & BI Engineer',
      role: 'Data Analyst & Business Intelligence Engineer',
      subtitle:
        'Decision support architectures, data modeling, and strategic dashboarding.',
      tagline:
        'Degree in Business Intelligence combined with 10+ years of enterprise data engineering.',
      summary:
        "Data Analyst / BI Specialist holding a <strong>Bachelor's Degree in Business Intelligence</strong> and a <strong>Master's 1 in Big Data</strong>.",
    },
  },

  experiences: {
    sikessem: {
      role: 'Founder & Lead System Architect',
      subtitle: 'Digital Operating Ecosystem & Developer Tooling',
      impact_1:
        'Architected and implemented the strongly-typed <strong>Phi</strong> language and <strong>Phix</strong> engine in Vlang.',
      impact_2:
        'Engineered <strong>Cup Engine</strong>, a zero-allocation high-performance template compiler.',
      impact_3:
        'Established design system foundations and technical governance for the entire ecosystem.',
    },
    glaxuss: {
      role: 'Co-founder & Lead Architect',
      subtitle: 'Platform Engineering & Enterprise Solutions',
      impact_1:
        'Directed overall technical strategy and introduced DDD architecture for enterprise clients.',
      impact_2:
        'Deployed resilient, secure, and highly scalable cloud infrastructure.',
    },
    freelance: {
      role: 'Architectural Consultant & Senior Dev',
      subtitle: 'E-Commerce Platforms, ERP Systems & Open Source',
      impact_1:
        'Co-founded and served as Lead Developer for the <strong>Ahlabik</strong> e-commerce platform.',
      impact_2:
        'Developed enterprise ERP modules and integrated complex data pipelines.',
    },
  },
};
