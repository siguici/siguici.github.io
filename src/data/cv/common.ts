export interface SkillCategory {
  category:
    | 'architecture'
    | 'backend'
    | 'frontend'
    | 'databases'
    | 'testing_qa'
    | 'ai_data'
    | 'devops_infra'
    | 'tools_dx';
  skills: readonly string[];
}

export interface CVCommonData {
  identity: {
    name: string;
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
        'Clean & Hexagonal Architecture',
        'SOLID Principles',
        'Modular Monoliths',
        'Multi-tenancy',
        'Cloud Native Practices',
        'API Design (REST, GraphQL, gRPC)',
      ],
    },
    {
      category: 'backend',
      skills: [
        'PHP (Laravel / Symfony)',
        'TypeScript (Node.js / Deno / Bun)',
        'Vlang',
        'Go',
      ],
    },
    {
      category: 'frontend',
      skills: [
        'TypeScript / JavaScript',
        'Astro',
        'Qwik',
        'React Ecosystem',
        'Vue.js / Inertia.js',
        'Livewire / Alpine.js',
        'htmx',
        'Tailwind CSS & Design Systems',
      ],
    },
    {
      category: 'databases',
      skills: [
        'PostgreSQL',
        'MySQL',
        'Redis',
        'SQLite',
        'Neo4j',
        'ORM & Query Builders (Prisma, Eloquent, Kysely)',
      ],
    },
    {
      category: 'testing_qa',
      skills: [
        'Pest',
        'PHPStan',
        'Psalm',
        'Rector',
        'Static Analysis & Linters',
      ],
    },
    {
      category: 'ai_data',
      skills: [
        'BI & Analytics Dashboards',
        'AI Agents & LLMs',
        'RAG Architectures',
        'Data Pipelines',
      ],
    },
    {
      category: 'devops_infra',
      skills: [
        'Docker',
        'Linux VPS (Ubuntu / Debian)',
        'Caddy / Nginx / Apache',
        'GitHub Actions CI/CD',
      ],
    },
    {
      category: 'tools_dx',
      skills: [
        'Just (Command Runner)',
        'Typst',
        'Git & GitHub Workflows',
      ],
    },
  ],
} as const satisfies CVCommonData;

export default commonData;
