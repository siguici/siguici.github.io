import dictionary from './dictionary/en.ts';

export default {
  lang: 'en',
  title: 'Kessé Emmanuel SIGUI — Senior Software Architect & Platform Engineer',
  subtitle:
    'Senior Software Architect · Senior Full-Stack Engineer · Platform Engineer · Open Source Maintainer',
  location: 'Abidjan, Ivory Coast · Remote / International',
  availability:
    'Available for remote, international and technically challenging opportunities',

  tagline:
    'I turn business requirements into reliable software products across the entire lifecycle: scoping, specifications, architecture, development, automated testing, deployment and production maintenance.',

  headline:
    'Senior Software Architect · Senior Full-Stack Engineer · Platform Engineer · Product Engineer',

  sections: dictionary.sections,

  strengths: [
    'Pragmatic software architecture — DDD, Clean Architecture, Hexagonal Architecture and Modular Monoliths',
    'End-to-end product engineering — from business requirements to production and maintenance',
    'Platform Engineering, distributed systems, multi-tenancy and API design',
    'Modern full-stack engineering with Laravel, Vue.js, Inertia.js, Livewire, Astro and TypeScript',
    'Cross-runtime engineering across Node.js, Deno and Bun',
    'Testing and software quality — Unit, Integration, E2E, TDD, static analysis and CI',
    'Developer Experience, open-source tooling and development workflow automation',
    'Data Engineering, Business Intelligence and practical AI integration',
  ],

  categories: dictionary.categories,

  summary:
    'Senior Software Architect and full-stack engineer with <strong>10+ years of experience</strong> designing and delivering digital products. I cover the entire software lifecycle: requirements discovery, functional and technical specifications, domain modeling, system architecture, implementation, automated testing, continuous integration, deployment and production maintenance. I work comfortably within Agile/Scrum environments and with tools such as Jira and Trello, while also taking ownership of the transformation of business problems into maintainable software systems. My background combines software architecture, full-stack engineering, infrastructure, Developer Experience, Open Source and formal training in Business Intelligence and Big Data.',

  capabilities: [
    {
      title: 'End-to-End Product Engineering',
      description:
        'Requirements analysis, functional scoping, specifications, domain modeling, architecture, development, testing, delivery, deployment and production maintenance.',
    },
    {
      title: 'Software Architecture & Domain Modeling',
      description:
        'Pragmatic systems design using DDD, Clean Architecture, Hexagonal Architecture, SOLID and Modular Monoliths, with a strong focus on domain boundaries and long-term evolvability.',
    },
    {
      title: 'Quality Engineering & Testing',
      description:
        'Design and maintenance of testing strategies covering unit behavior, integrations and end-to-end user flows. TDD is used when appropriate, complemented by static analysis and automated CI validation.',
    },
    {
      title: 'Platform Engineering & Developer Experience',
      description:
        'Reproducible development and production environments, CI/CD automation, Linux infrastructure, containerization and custom tooling designed to improve developer productivity.',
    },
    {
      title: 'Data, BI & AI-Enhanced Applications',
      description:
        'Data pipelines, analytical models, dashboards and practical integration of LLM, RAG or agent capabilities into business applications when they provide measurable value.',
    },
  ],

  experiences: [
    {
      id: 'sikessem',
      role: 'Founder & Software Architect',
      company: 'Sikessem',
      period: 'Since the early stages of my career — Present',
      subtitle: 'Modular Digital Ecosystem, Software Platform & Open Source',
      impacts: [
        'Built Sikessem progressively throughout my career, evolving from a personal identity and professional initiative into a broader digital ecosystem and modular software infrastructure vision.',
        'Designed and developed reusable software components, libraries, frameworks and platforms intended to serve multiple products and contexts.',
        'Designed modular, domain-oriented and multi-tenant systems with a strong focus on boundaries between business and technical responsibilities.',
        'Developed and maintained Open Source projects spanning the web, runtimes, developer tooling, design systems and programming abstractions.',
        'Established CI/CD workflows, Linux environments, Docker deployments and VPS infrastructure for ecosystem products.',
      ],
    },
    {
      id: 'glaxuss',
      role: 'Co-Founder & CTO',
      company: 'Glaxuss Tech',
      period: '2024 — Present',
      subtitle:
        'Technical Leadership, Software Architecture & Enterprise Solutions',
      impacts: [
        'Defined and reviewed technical architectures for products and client projects.',
        'Translated business requirements into specifications, data models and application architectures.',
        'Designed and developed full-stack systems with explicit attention to performance, maintainability, security and long-term evolution.',
        'Worked within Agile/Scrum environments using Jira or Trello depending on the project.',
        'Implemented unit, integration and end-to-end testing strategies together with CI pipelines designed to catch regressions before delivery.',
        'Handled application delivery, deployment and production maintenance while progressively automating operational workflows.',
      ],
    },
    {
      id: 'consulting',
      role: 'Senior Software Engineer & Architecture Consultant',
      company: 'Independent Consulting & Client Projects',
      period: '2015 — Present',
      subtitle:
        'SaaS, E-Commerce, ERP, Fintech, BI, Business Platforms & Modernization',
      impacts: [
        'Designed and developed web platforms and business applications across multiple enterprise contexts.',
        'Owned projects end to end: requirements, specifications, architecture, implementation, quality assurance, delivery, deployment and maintenance.',
        'Built backend systems and APIs with PHP/Laravel, Symfony, TypeScript and other runtimes according to project constraints.',
        'Developed modern interfaces using Vue.js, Inertia.js, Livewire, Alpine.js, Astro and Tailwind CSS.',
        'Worked on transactional systems, e-commerce platforms, ERP software, LMS products, administration tools and data-driven applications.',
        'Modernized and progressively refactored existing systems while reducing technical debt and increasing automated test coverage.',
      ],
    },
    {
      id: 'opensource',
      role: 'Maintainer & Open Source Contributor',
      company: 'Open Source Ecosystem',
      period: 'Since 2020',
      subtitle:
        'Developer Tooling, Web Frameworks, Runtimes, Design Systems & Automation',
      impacts: [
        'Created and maintained multiple independent Open Source projects used as architecture, tooling and systems research environments.',
        'Made public contributions to modern web ecosystems, including Astro and Qwik.',
        'Created Setup JS, a GitHub Action for automating JavaScript/TypeScript environment provisioning.',
        'Created colorwind and plugwind.js to extend Tailwind CSS workflows.',
        'Designed SigUI as a reusable component and design system foundation.',
        'Conducted research and development around Phi, Cup and Loom, respectively exploring programming languages, template infrastructure and application frameworks.',
      ],
    },
  ],

  projects: [
    {
      name: 'Sikessem',
      type: 'Digital Ecosystem',
      tagline: 'Modular Digital Infrastructure & Application Platform',
      description:
        'A software vision developed progressively throughout my career, now focused on an open and modular digital infrastructure capable of supporting multiple products and experiences.',
    },
    {
      name: 'Loom',
      type: 'Management & Operations Platform',
      tagline: 'Universal Management System',
      description:
        'A universal management system designed to model, organize, execute and automate projects, organizations, activities and operations for actors and workspaces.',
    },
    {
      name: 'TransMo',
      type: 'Financial Operations Platform',
      tagline: 'Financial Operating System for Telecom Service Points',
      description:
        'A SaaS platform designed to structure financial operations for telecom and Mobile Money service points, including cash, wallets, inventory, movements, reconciliation, permissions, audit and closing operations.',
    },
    {
      name: 'Phi',
      type: 'Programming Language',
      tagline: 'Language & Programming Systems R&D',
      description:
        'Research and development around programming language design and compilation tooling, including grammar, lexing, parsing, ASTs, REPL interaction and explicit error handling.',
    },
    {
      name: 'Cup',
      type: 'Developer Tooling',
      tagline: 'Template & Rendering Infrastructure',
      description:
        'A template engine designed around compiled and performance-oriented rendering for TypeScript and Deno environments.',
    },
    {
      name: 'SigUI',
      type: 'Design System',
      tagline: 'Reusable UI Components & Design Infrastructure',
      description:
        'A reusable design system and component library intended to provide consistent UI foundations across ecosystem products.',
    },
    {
      name: 'Setup JS',
      type: 'CI/CD Tooling',
      tagline: 'JavaScript / TypeScript Environment Automation',
      description:
        'A GitHub Action designed to automate JavaScript/TypeScript environment provisioning in CI workflows.',
    },
    {
      name: 'colorwind / plugwind.js',
      type: 'Developer Tools',
      tagline: 'Tailwind CSS Extensions',
      description:
        'Developer tools and extensions designed to enhance Tailwind CSS workflows and dynamic color system generation.',
    },
  ],

  opensource: [
    'Creation and maintenance of Open Source projects spanning web development, tooling, runtimes, design systems and automation.',
    'Public contributions to the Astro and Qwik ecosystems.',
    'Creation of Setup JS, colorwind, plugwind.js and SigUI.',
    'Research and development around Phi, Cup and Loom.',
    'Using Open Source as a public engineering laboratory for architecture, tooling and software design ideas.',
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

  languages: [
    { name: 'French', level: 'Native / bilingual' },
    { name: 'English', level: 'Technical & professional' },
  ],
} as const;
