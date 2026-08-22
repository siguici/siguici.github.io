import type { CVData } from '../index';

export const dataAnalystFR: CVData = {
  title: 'Sigui Kessé Emmanuel — Data Analyst & Business Intelligence Engineer',
  identity: {
    name: 'SIGUI KESSÉ EMMANUEL',
    role: 'Data Analyst & Business Intelligence Engineer',
  },
  location: "05°20'11\"N 04°01'36\"W (Côte d'Ivoire)",
  subtitle:
    'Architecture décisionnelle, modélisation de données et création de tableaux de bord stratégiques.',
  tagline:
    "Diplômé en Business Intelligence avec 10+ ans d'expérience en ingénierie de données.",
  summary:
    "Data Analyst / BI Specialist détenteur d'une **Licence en Business Intelligence** et d'un **Master 1 Big Data**[cite: 1]. Expert dans la transformation des données brutes en indicateurs clés de performance (KPIs), la modélisation en étoile/flocon (Data Warehousing) et l'automatisation des flux reporting d'entreprise[cite: 1].",
  capabilities: [
    {
      title: 'BI & DATA WAREHOUSING',
      description:
        'Modélisation dimensionnelle (Schéma en étoile, flocon), création de Data Marts et entrepôts de données.',
    },
    {
      title: 'SQL & ETL AUTOMATION',
      description:
        "Écriture de requêtes SQL complexes, procédures stockées, optimisation d'index et flux ETL automatisés[cite: 1].",
    },
    {
      title: 'DASHBOARDING & REPORTING',
      description:
        'Conception de tableaux de bord interactifs et suivi des KPIs business pour la prise de décision stratégique.',
    },
    {
      title: 'BUSINESS & DATA QUALITY',
      description:
        'Audit de qualité des données, nettoyage, réconciliation de données hétérogènes et analyse de rentabilité[cite: 1].',
    },
  ],
  experiences: [
    {
      role: 'Lead Developer & Architecte BI',
      company: 'Glaxuss Tech',
      period: '2024 — PRÉSENT',
      subtitle: 'Systèmes de reporting & Data Warehousing client',
      impacts: [
        'Conception de schémas analytiques et entrepôts de données pour piloter les KPIs de nos clients[cite: 1].',
        "Automatisation de l'extraction et du nettoyage des métriques d'exploitation[cite: 1].",
      ],
    },
    {
      role: 'Lead Dev E-Commerce & Analyste Métriques',
      company: 'Ahlabik',
      period: '2021 — 2024',
      subtitle: 'Analyse des ventes & Performance transactionnelle',
      impacts: [
        'Mise en place des indicateurs de conversion, suivi du panier moyen et analyse du comportement utilisateur[cite: 1].',
        "Création de requêtes d'extraction SQL haute performance sur PostgreSQL[cite: 1].",
      ],
    },
    {
      role: 'Consultant ERP & Ingénieur Systèmes',
      company: 'Projets Indépendants / Enterprise ERP',
      period: '2015 — 2021',
      subtitle: 'Business Intelligence & Flux de gestion',
      impacts: [
        "Modélisation et intégration des flux de données de gestion financière et de stock au sein d'ERPs[cite: 1].",
        'Automatisation des rapports décisionnels mensuels pour la direction[cite: 1].',
      ],
    },
  ],
  categories: {
    bi: 'BUSINESS INTELLIGENCE & SQL',
    analytics: 'ANALYTICS & TOOLING',
    dev: 'DEVELOPMENT FOUNDATIONS',
  },
  ecosystem: [
    {
      categoryId: 'bi',
      skills: [
        'SQL Avancé',
        'PostgreSQL',
        'Data Warehousing',
        'Star/Snowflake Schema',
        'Flux ETL',
      ],
    },
    {
      categoryId: 'analytics',
      skills: [
        'PowerBI / Tableau',
        'Excel Avancé',
        'Python (Pandas)',
        'Analyse de KPIs',
      ],
    },
    {
      categoryId: 'dev',
      skills: ['PHP / Laravel', 'TypeScript', 'Deno', 'Git', 'Docker'],
    },
  ],
  education: [
    {
      degree: 'Licence — Business Intelligence (BI)',
      institution: 'Spécialisation Entrepôts de Données & Reporting',
      period: '2020 — 2021',
    },
    {
      degree: 'Master 1 — Big Data & Data Science',
      institution: 'Spécialisation Analytics & Data Pipelines',
      period: '2023 — 2024',
    },
  ],
  languages: 'Français (Natif) / Anglais (Professionnel / Technique)',
  contact: {
    email: 'kessy.emmanuel@gmail.com',
    web: 'sikessem.com',
    webUrl: 'https://sikessem.com',
    github: 'github.com/sikessem',
    githubUrl: 'https://github.com/sikessem',
    linkedin: 'linkedin.com/in/sigui-kesse-emmanuel',
    linkedinUrl: 'https://linkedin.com/in/sigui-kesse-emmanuel',
  },
};

export const dataAnalystEN: CVData = {
  title: 'Sigui Kessé Emmanuel — Data Analyst & Business Intelligence Engineer',
  identity: {
    name: 'SIGUI KESSÉ EMMANUEL',
    role: 'Data Analyst & Business Intelligence Engineer',
  },
  location: '05°20\'11"N 04°01\'36"W (Ivory Coast)',
  subtitle:
    'Decision support architectures, data modeling, and strategic dashboarding.',
  tagline:
    'Degree in Business Intelligence combined with 10+ years of enterprise data engineering.',
  summary:
    "Data Analyst / BI Specialist holding a **Bachelor's Degree in Business Intelligence** and a **Master's 1 in Big Data**[cite: 1]. Expert at transforming raw operational data into actionable KPIs, designing dimensional Data Warehouses (Star/Snowflake schemas), and automating corporate reporting pipelines[cite: 1].",
  capabilities: [
    {
      title: 'BI & DATA WAREHOUSING',
      description:
        'Dimensional modeling (Star & Snowflake schemas), Data Mart design, and enterprise Data Warehousing.',
    },
    {
      title: 'SQL & ETL AUTOMATION',
      description:
        'Advanced SQL query writing, stored procedures, index tuning, and automated ETL workflows[cite: 1].',
    },
    {
      title: 'DASHBOARDING & REPORTING',
      description:
        'Interactive dashboard creation, KPI tracking, and decision-support analytics for leadership teams.',
    },
    {
      title: 'BUSINESS & DATA QUALITY',
      description:
        'Data quality auditing, data cleansing, cross-system reconciliation, and operational metrics analysis[cite: 1].',
    },
  ],
  experiences: [
    {
      role: 'Lead Developer & BI Architect',
      company: 'Glaxuss Tech',
      period: '2024 — PRESENT',
      subtitle: 'Reporting Systems & Client Data Warehousing',
      impacts: [
        'Designed analytical database schemas and Data Marts for client business performance tracking[cite: 1].',
        'Automated data extraction and cleansing workflows for operational reporting[cite: 1].',
      ],
    },
    {
      role: 'Lead E-Commerce Dev & Metrics Analyst',
      company: 'Ahlabik',
      period: '2021 — 2024',
      subtitle: 'Sales Analytics & Transactional Metrics',
      impacts: [
        'Implemented conversion rate tracking, cart size analytics, and user journey metrics[cite: 1].',
        'Wrote high-performance PostgreSQL queries for business reporting[cite: 1].',
      ],
    },
    {
      role: 'ERP Consultant & Systems Engineer',
      company: 'Independent Projects / Enterprise ERP',
      period: '2015 — 2021',
      subtitle: 'Business Intelligence & Management Workflows',
      impacts: [
        'Modeled and integrated financial and inventory data flows inside enterprise ERP systems[cite: 1].',
        'Automated monthly executive reporting dashboards[cite: 1].',
      ],
    },
  ],
  categories: {
    bi: 'BUSINESS INTELLIGENCE & SQL',
    analytics: 'ANALYTICS & TOOLING',
    dev: 'DEVELOPMENT FOUNDATIONS',
  },
  ecosystem: [
    {
      categoryId: 'bi',
      skills: [
        'Advanced SQL',
        'PostgreSQL',
        'Data Warehousing',
        'Star/Snowflake Schema',
        'ETL Pipelines',
      ],
    },
    {
      categoryId: 'analytics',
      skills: [
        'PowerBI / Tableau',
        'Advanced Excel',
        'Python (Pandas)',
        'KPI Tracking',
      ],
    },
    {
      categoryId: 'dev',
      skills: ['PHP / Laravel', 'TypeScript', 'Deno', 'Git', 'Docker'],
    },
  ],
  education: [
    {
      degree: "Bachelor's Degree — Business Intelligence (BI)",
      institution: 'Focus on Data Warehousing & Reporting',
      period: '2020 — 2021',
    },
    {
      degree: 'Master 1 — Big Data & Data Science',
      institution: 'Focus on Analytics & Data Pipelines',
      period: '2023 — 2024',
    },
  ],
  languages: 'French (Native) / English (Professional / Technical)',
  contact: {
    email: 'kessy.emmanuel@gmail.com',
    web: 'sikessem.com',
    webUrl: 'https://sikessem.com',
    github: 'github.com/sikessem',
    githubUrl: 'https://github.com/sikessem',
    linkedin: 'linkedin.com/in/sigui-kesse-emmanuel',
    linkedinUrl: 'https://linkedin.com/in/sigui-kesse-emmanuel',
  },
};
