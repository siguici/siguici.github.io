import type { CVData } from '../index';

export const softwareArchitectFR: CVData = {
  title:
    'Kessé Emmanuel SIGUI — Architecte Logiciel Senior & Ingénieur Plateforme',

  identity: {
    name: 'KESSÉ EMMANUEL SIGUI',
    role: 'Senior Software Architect & Platform Engineer',
  },

  location: "Abidjan, Côte d'Ivoire · Remote",

  subtitle:
    'Architecture logicielle, ingénierie produit, plateformes et systèmes distribués.',

  tagline:
    'Concevoir des systèmes robustes et livrer des produits de bout en bout, de la spécification à la production.',

  summary:
    "Architecte logiciel senior avec plus de 10 ans d'expérience en ingénierie logicielle. Je conçois et développe des applications et plateformes en prenant en charge l'ensemble du cycle produit : besoin métier, cahier des charges, spécifications, architecture, développement, tests unitaires/intégration/E2E, CI/CD, déploiement et maintenance. Mon approche combine DDD, Clean Architecture, Modular Monoliths, Platform Engineering, full-stack engineering et Developer Experience.",

  capabilities: [
    {
      title: 'SOFTWARE ARCHITECTURE',
      description:
        'DDD, Clean Architecture, Hexagonal Architecture, SOLID, Modular Monoliths, domain modeling et conception de systèmes évolutifs.',
    },
    {
      title: 'PRODUCT ENGINEERING',
      description:
        'Cadrage, cahier des charges, spécifications, conception, développement, livraison, déploiement et maintenance.',
    },
    {
      title: 'QUALITY ENGINEERING',
      description:
        'Tests unitaires, tests d’intégration, tests end-to-end, TDD lorsque pertinent, analyse statique et automatisation CI.',
    },
    {
      title: 'PLATFORM & DEVELOPER EXPERIENCE',
      description:
        'CI/CD, Docker, Linux, infrastructures VPS, cross-runtime engineering et création d’outils pour améliorer les workflows développeurs.',
    },
  ],

  experiences: [
    {
      role: 'Fondateur & Architecte Logiciel',
      company: 'Sikessem',
      period: 'Depuis les débuts du parcours — Présent',
      subtitle: 'Digital Ecosystem & Open Source Infrastructure',
      impacts: [
        'Évolution progressive de Sikessem depuis une initiative personnelle vers un écosystème logiciel et une infrastructure numérique modulaire.',
        'Conception de plateformes, bibliothèques, frameworks et outils réutilisables.',
        'Architecture de systèmes modulaires, multi-tenant et orientés domaine.',
        'Conception et maintenance de projets Open Source autour du web, des runtimes et du Developer Tooling.',
        'Automatisation des workflows CI/CD et des déploiements Linux/Docker.',
      ],
    },
    {
      role: 'Co-fondateur & CTO',
      company: 'Glaxuss Tech',
      period: '2024 — Présent',
      subtitle: 'Technical Leadership & Enterprise Engineering',
      impacts: [
        'Définition des architectures techniques et arbitrages structurants.',
        'Transformation des besoins métier en cahiers des charges, spécifications et architectures.',
        'Développement full-stack et accompagnement des projets jusqu’à la production.',
        'Mise en œuvre de stratégies de tests et de pipelines CI/CD.',
        'Organisation du développement dans des environnements Agile/Scrum avec Jira et Trello.',
      ],
    },
    {
      role: 'Senior Software Engineer & Architecture Consultant',
      company: 'Consulting indépendant & Projets clients',
      period: '2015 — Présent',
      subtitle: 'SaaS, E-Commerce, ERP, Fintech & Legacy',
      impacts: [
        'Conception et développement de produits web et logiciels métier.',
        'Prise en charge de projets de bout en bout, de la spécification à la maintenance.',
        'Modernisation et refactoring de systèmes existants.',
        'Développement backend, frontend, APIs et applications transactionnelles.',
      ],
    },
  ],

  categories: {
    architecture: 'ARCHITECTURE',
    product: 'PRODUCT ENGINEERING',
    backend: 'BACKEND & RUNTIMES',
    frontend: 'FRONTEND',
    quality: 'QUALITY ENGINEERING',
    platform: 'PLATFORM & DEVOPS',
    tooling: 'DEVELOPER EXPERIENCE',
  },

  ecosystem: [
    {
      categoryId: 'architecture',
      skills: [
        'DDD',
        'Clean Architecture',
        'Hexagonal Architecture',
        'SOLID',
        'Modular Monoliths',
        'Multi-tenancy',
      ],
    },
    {
      categoryId: 'product',
      skills: [
        'Requirements Analysis',
        'Specifications',
        'Agile / Scrum',
        'Jira',
        'Trello',
      ],
    },
    {
      categoryId: 'backend',
      skills: [
        'PHP',
        'Laravel',
        'Symfony',
        'TypeScript',
        'Node.js',
        'Deno',
        'Bun',
        'Go',
        'Vlang',
      ],
    },
    {
      categoryId: 'frontend',
      skills: [
        'Vue.js',
        'Inertia.js',
        'Livewire',
        'Alpine.js',
        'Astro',
        'Qwik',
        'Tailwind CSS',
      ],
    },
    {
      categoryId: 'quality',
      skills: [
        'Pest',
        'PHPUnit',
        'Unit Testing',
        'Integration Testing',
        'E2E Testing',
        'TDD',
        'PHPStan',
        'Psalm',
        'Rector',
      ],
    },
    {
      categoryId: 'platform',
      skills: ['Docker', 'Linux', 'Caddy', 'Nginx', 'GitHub Actions', 'CI/CD'],
    },
    {
      categoryId: 'tooling',
      skills: [
        'Git',
        'GitHub',
        'Setup JS',
        'SigUI',
        'colorwind',
        'plugwind.js',
        'Cup',
        'Loom',
        'Phi',
      ],
    },
  ],

  education: [
    {
      degree: 'Master 1 — Big Data & Data Science',
      institution: 'Leaders University — Nabeul, Tunisie',
      period: '2022 — 2023',
    },
    {
      degree: 'Licence — Business Intelligence',
      institution: 'Mediterranean Institute of Tunisia — Nabeul, Tunisie',
      period: '2019 — 2022',
    },
    {
      degree: 'Baccalauréat Série D',
      institution: "Lycée Classique d'Abidjan — Côte d'Ivoire",
      period: '2011 — 2014',
    },
  ],

  languages:
    'Français (Natif / bilingue) · Anglais (Technique & professionnel)',

  contact: {
    email: 'siguici@proton.me',
    web: 'siguici.sikessem.com',
    webUrl: 'https://siguici.sikessem.com',
    github: 'github.com/siguici',
    githubUrl: 'https://github.com/siguici',
    linkedin: 'linkedin.com/in/siguici',
    linkedinUrl: 'https://linkedin.com/in/siguici',
  },
};

export const softwareArchitectEN: CVData = {
  title: 'Kessé Emmanuel SIGUI — Senior Software Architect & Platform Engineer',

  identity: {
    name: 'KESSÉ EMMANUEL SIGUI',
    role: 'Senior Software Architect & Platform Engineer',
  },

  location: 'Abidjan, Ivory Coast · Remote',

  subtitle:
    'Software architecture, product engineering, platforms and distributed systems.',

  tagline:
    'Designing robust systems and delivering products end to end, from specifications to production.',

  summary:
    'Senior Software Architect with 10+ years of software engineering experience. I design and build applications and platforms while covering the full product lifecycle: business requirements, specifications, architecture, development, unit/integration/E2E testing, CI/CD, deployment and maintenance. My approach combines DDD, Clean Architecture, Modular Monoliths, Platform Engineering, full-stack engineering and Developer Experience.',

  capabilities: [
    {
      title: 'SOFTWARE ARCHITECTURE',
      description:
        'DDD, Clean Architecture, Hexagonal Architecture, SOLID, Modular Monoliths, domain modeling and evolvable system design.',
    },
    {
      title: 'PRODUCT ENGINEERING',
      description:
        'Requirements, functional and technical specifications, architecture, implementation, delivery, deployment and maintenance.',
    },
    {
      title: 'QUALITY ENGINEERING',
      description:
        'Unit testing, integration testing, end-to-end testing, TDD when appropriate, static analysis and CI automation.',
    },
    {
      title: 'PLATFORM & DEVELOPER EXPERIENCE',
      description:
        'CI/CD, Docker, Linux, VPS infrastructure, cross-runtime engineering and developer tooling.',
    },
  ],

  experiences: [
    {
      role: 'Founder & Software Architect',
      company: 'Sikessem',
      period: 'Since the early stages of my career — Present',
      subtitle: 'Digital Ecosystem & Open Source Infrastructure',
      impacts: [
        'Progressively evolved Sikessem from a personal initiative into a broader software ecosystem and modular digital infrastructure vision.',
        'Designed platforms, libraries, frameworks and reusable software foundations.',
        'Architected modular, multi-tenant and domain-oriented systems.',
        'Created and maintained Open Source projects across web technologies, runtimes and developer tooling.',
        'Automated CI/CD workflows and Linux/Docker deployments.',
      ],
    },
    {
      role: 'Co-Founder & CTO',
      company: 'Glaxuss Tech',
      period: '2024 — Present',
      subtitle: 'Technical Leadership & Enterprise Engineering',
      impacts: [
        'Defined technical architectures and made key engineering trade-offs.',
        'Translated business requirements into specifications and application architectures.',
        'Delivered full-stack projects through production.',
        'Implemented testing strategies and CI/CD pipelines.',
        'Worked in Agile/Scrum environments using Jira and Trello.',
      ],
    },
    {
      role: 'Senior Software Engineer & Architecture Consultant',
      company: 'Independent Consulting & Client Projects',
      period: '2015 — Present',
      subtitle: 'SaaS, E-Commerce, ERP, Fintech & Legacy',
      impacts: [
        'Designed and built web products and enterprise software.',
        'Owned projects end to end from requirements and specifications to maintenance.',
        'Modernized and progressively refactored existing systems.',
        'Built backend, frontend, API and transactional applications.',
      ],
    },
  ],

  categories: {
    architecture: 'ARCHITECTURE',
    product: 'PRODUCT ENGINEERING',
    backend: 'BACKEND & RUNTIMES',
    frontend: 'FRONTEND',
    quality: 'QUALITY ENGINEERING',
    platform: 'PLATFORM & DEVOPS',
    tooling: 'DEVELOPER EXPERIENCE',
  },

  ecosystem: [
    {
      categoryId: 'architecture',
      skills: [
        'DDD',
        'Clean Architecture',
        'Hexagonal Architecture',
        'SOLID',
        'Modular Monoliths',
        'Multi-tenancy',
      ],
    },
    {
      categoryId: 'product',
      skills: [
        'Requirements Analysis',
        'Specifications',
        'Agile / Scrum',
        'Jira',
        'Trello',
      ],
    },
    {
      categoryId: 'backend',
      skills: [
        'PHP',
        'Laravel',
        'Symfony',
        'TypeScript',
        'Node.js',
        'Deno',
        'Bun',
        'Go',
        'Vlang',
      ],
    },
    {
      categoryId: 'frontend',
      skills: [
        'Vue.js',
        'Inertia.js',
        'Livewire',
        'Alpine.js',
        'Astro',
        'Qwik',
        'Tailwind CSS',
      ],
    },
    {
      categoryId: 'quality',
      skills: [
        'Pest',
        'PHPUnit',
        'Unit Testing',
        'Integration Testing',
        'E2E Testing',
        'TDD',
        'PHPStan',
        'Psalm',
        'Rector',
      ],
    },
    {
      categoryId: 'platform',
      skills: ['Docker', 'Linux', 'Caddy', 'Nginx', 'GitHub Actions', 'CI/CD'],
    },
    {
      categoryId: 'tooling',
      skills: [
        'Git',
        'GitHub',
        'Setup JS',
        'SigUI',
        'colorwind',
        'plugwind.js',
        'Cup',
        'Loom',
        'Phi',
      ],
    },
  ],

  education: [
    {
      degree: 'Master 1 — Big Data & Data Science',
      institution: 'Leaders University — Nabeul, Tunisia',
      period: '2022 — 2023',
    },
    {
      degree: "Bachelor's Degree — Business Intelligence",
      institution: 'Mediterranean Institute of Tunisia — Nabeul, Tunisia',
      period: '2019 — 2022',
    },
    {
      degree: 'High School Diploma — Baccalauréat Series D',
      institution: "Lycée Classique d'Abidjan — Ivory Coast",
      period: '2011 — 2014',
    },
  ],

  languages: 'French (Native / bilingual) · English (Technical & professional)',

  contact: {
    email: 'siguici@proton.me',
    web: 'siguici.sikessem.com',
    webUrl: 'https://siguici.sikessem.com',
    github: 'github.com/siguici',
    githubUrl: 'https://github.com/siguici',
    linkedin: 'linkedin.com/in/siguici',
    linkedinUrl: 'https://linkedin.com/in/siguici',
  },
};
