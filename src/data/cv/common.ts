export type SkillCategoryId =
  | 'architecture'
  | 'product_delivery'
  | 'backend'
  | 'frontend'
  | 'databases'
  | 'testing_qa'
  | 'data'
  | 'ai'
  | 'devops_infra'
  | 'tools_dx';

export interface SkillCategory {
  category: SkillCategoryId;
  skills: readonly string[];
}

export interface CVCommonData {
  identity: {
    name: string;
    firstname: string;
    lastname: string;
  };
  contact: {
    email: string;
    web: string;
    webUrl: string;
    github: string;
    githubUrl: string;
    linkedin: string;
    linkedinUrl: string;
  };
  ecosystem: readonly SkillCategory[];
}

const commonData = {
  identity: {
    name: 'Kessé Emmanuel SIGUI',
    firstname: 'Kessé Emmanuel',
    lastname: 'SIGUI',
  },

  contact: {
    email: 'siguici@proton.me',
    web: 'siguici.sikessem.com',
    webUrl: 'https://siguici.sikessem.com',
    github: 'github.com/siguici',
    githubUrl: 'https://github.com/siguici',
    linkedin: 'linkedin.com/in/siguici',
    linkedinUrl: 'https://linkedin.com/in/siguici',
  },

  ecosystem: [
    {
      category: 'architecture',
      skills: [
        'Domain-Driven Design (DDD)',
        'Clean Architecture',
        'Hexagonal Architecture',
        'SOLID Principles',
        'Modular Monoliths',
        'Domain Modeling',
        'API Design',
        'Multi-tenancy',
        'Distributed Systems',
      ],
    },
    {
      category: 'product_delivery',
      skills: [
        'Requirements Analysis',
        'Functional Specifications',
        'Technical Specifications',
        'Agile / Scrum',
        'Jira',
        'Trello',
        'Product Delivery',
        'Technical Leadership',
      ],
    },
    {
      category: 'backend',
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
        'REST',
        'GraphQL',
        'gRPC',
      ],
    },
    {
      category: 'frontend',
      skills: [
        'TypeScript / JavaScript',
        'Vue.js',
        'Inertia.js',
        'Livewire',
        'Alpine.js',
        'React Ecosystem',
        'Astro',
        'Qwik',
        'Tailwind CSS',
        'Design Systems',
        'PWA',
      ],
    },
    {
      category: 'databases',
      skills: [
        'PostgreSQL',
        'MySQL',
        'SQLite',
        'Redis',
        'Neo4j',
        'Eloquent',
        'Prisma',
        'Kysely',
        'Database Modeling',
      ],
    },
    {
      category: 'testing_qa',
      skills: [
        'Unit Testing',
        'Integration Testing',
        'End-to-End Testing',
        'TDD',
        'Pest',
        'PHPUnit',
        'PHPStan',
        'Psalm',
        'Rector',
        'Static Analysis',
        'Regression Testing',
      ],
    },
    {
      category: 'data',
      skills: [
        'Business Intelligence',
        'Data Analytics',
        'Data Engineering',
        'Data Warehousing',
        'ETL / ELT',
        'Data Pipelines',
        'Data Modeling',
        'SQL',
        'BI Dashboards',
      ],
    },
    {
      category: 'ai',
      skills: [
        'LLM Integration',
        'RAG Architectures',
        'AI Agents',
        'NLP',
        'Data-driven Applications',
      ],
    },
    {
      category: 'devops_infra',
      skills: [
        'Docker',
        'Linux',
        'Ubuntu',
        'Debian',
        'Caddy',
        'Nginx',
        'Apache',
        'GitHub Actions',
        'CI/CD',
        'VPS Infrastructure',
        'Cloud Deployment',
      ],
    },
    {
      category: 'tools_dx',
      skills: [
        'Git',
        'GitHub',
        'Developer Experience',
        'CLI Tooling',
        'GitHub Actions',
        'SigUI',
        'colorwind',
        'plugwind.js',
        'Setup JS',
        'Cup',
        'Loom',
        'Phi',
      ],
    },
  ],
} as const satisfies CVCommonData;

export default commonData;
