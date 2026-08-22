import type { CVData } from '../index';

export const dataScientistFR: CVData = {
  title: 'Sigui Kessé Emmanuel — Data Scientist & Machine Learning Engineer',
  identity: {
    name: 'SIGUI KESSÉ EMMANUEL',
    role: 'Data Scientist & Machine Learning Engineer',
  },
  location: "05°20'11\"N 04°01'36\"W (Côte d'Ivoire)",
  subtitle:
    "Valorisation de la donnée, modélisation prédictive et ingénierie d'algorithmes.",
  tagline:
    "Combinaison d'une solide formation académique en Big Data et de 10+ ans d'ingénierie logicielle.",
  summary:
    "Data Scientist fort d'une double compétence rare : un **Master 1 en Big Data & Data Science** combiné à plus de 10 ans de Software Engineering[cite: 1]. Capable non seulement de concevoir des modèles statistiques et prédictifs, mais aussi d'assurer leur mise en production industrielle (MLOps), leur intégration dans des architectures distribuées et le traitement NLP/AST de langages[cite: 1].",
  capabilities: [
    {
      title: 'PREDICTIVE MODELING & STATS',
      description:
        'Analyse prédictive, algorithmes de classification/régression, clustering et validation statistique avancée.',
    },
    {
      title: 'NLP & LANGUAGE DATA',
      description:
        'Traitement du langage naturel, analyse lexicale et syntaxique (EBNF, AST) appliquée au code et au texte[cite: 1].',
    },
    {
      title: 'DATA ENGINEERING & PIPELINES',
      description:
        'Extraction, nettoyage, structuration de jeux de données massifs et pipelines ETL haute performance[cite: 1].',
    },
    {
      title: 'MLOPS & PRODUCTION ML',
      description:
        "Conteneurisation, exposition d'APIs de modèles et intégration continue des pipelines de Machine Learning.",
    },
  ],
  experiences: [
    {
      role: 'Architecte Logiciel & Ingénieur Données',
      company: 'Sikessem',
      period: '2024 — PRÉSENT',
      subtitle: 'Traitement de structures complexes & Analyse de syntaxe',
      impacts: [
        "Conçu l'analyseur syntaxique et le parser d'arbres (AST) du langage <strong>Phi</strong>[cite: 1].",
        "Optimisé la compilation et l'exécution d'algorithmes de manipulation de chaînes et de tokens[cite: 1].",
      ],
    },
    {
      role: 'Lead Developer & Data Pipelines',
      company: 'Glaxuss Tech',
      period: '2024 — PRÉSENT',
      subtitle: 'Pipelines décisionnels & Intégrations Data',
      impacts: [
        "Mise en place de pipelines de traitement de données structurées pour des clients d'entreprise[cite: 1].",
        'Modélisation de schémas de données optimisés pour la scalabilité et le reporting analytique[cite: 1].',
      ],
    },
    {
      role: 'Consultant Ingénieur Logiciel & Données',
      company: 'Freelance / E-Commerce / ERP',
      period: '2015 — 2024',
      subtitle: 'Traitement analytique & Systèmes transactionnels',
      impacts: [
        'Gestion et analyse de données transactionnelles volumineuses sur la plateforme e-commerce <strong>Ahlabik</strong>[cite: 1].',
        "Développement de flux ETL et d'interconnexions de données pour des systèmes ERP[cite: 1].",
      ],
    },
  ],
  categories: {
    ds: 'DATA SCIENCE & ML',
    data_eng: 'DATA ENGINEERING',
    languages: 'LANGAGES & RUNTIMES',
  },
  ecosystem: [
    {
      categoryId: 'ds',
      skills: [
        'Python',
        'Pandas',
        'NumPy',
        'Scikit-Learn',
        'Modélisation Statistique',
        'NLP',
      ],
    },
    {
      categoryId: 'data_eng',
      skills: [
        'SQL (PostgreSQL)',
        'Pipelines ETL',
        'Nettoyage de Données',
        'Big Data Architecture',
      ],
    },
    {
      categoryId: 'languages',
      skills: ['Vlang', 'PHP', 'TypeScript', 'Deno', 'Docker', 'Git'],
    },
  ],
  education: [
    {
      degree: 'Master 1 — Big Data & Data Science',
      institution: 'Spécialisation Modélisation & Analytics',
      period: '2023 — 2024',
    },
    {
      degree: 'Licence — Business Intelligence (BI)',
      institution: 'Spécialisation Entrepôts de données & Reporting',
      period: '2020 — 2021',
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

export const dataScientistEN: CVData = {
  title: 'Sigui Kessé Emmanuel — Data Scientist & Machine Learning Engineer',
  identity: {
    name: 'SIGUI KESSÉ EMMANUEL',
    role: 'Data Scientist & Machine Learning Engineer',
  },
  location: '05°20\'11"N 04°01\'36"W (Ivory Coast)',
  subtitle:
    'Extracting insights, predictive modeling, and algorithm engineering.',
  tagline:
    'Combining formal Big Data academic background with 10+ years of software engineering excellence.',
  summary:
    "Data Scientist with a rare dual strength: a **Master's 1 in Big Data & Data Science** backed by over 10 years of production software engineering[cite: 1]. Skilled in developing statistical models, engineering MLOps deployment pipelines, and building NLP/AST syntax processing engines[cite: 1].",
  capabilities: [
    {
      title: 'PREDICTIVE MODELING & STATS',
      description:
        'Predictive analytics, classification/regression algorithms, clustering, and statistical model validation.',
    },
    {
      title: 'NLP & LANGUAGE DATA',
      description:
        'Natural Language Processing concepts, lexical parsing, and AST tree analysis applied to code and text[cite: 1].',
    },
    {
      title: 'DATA ENGINEERING & PIPELINES',
      description:
        'Extraction, cleaning, and structuring of massive datasets into high-throughput ETL pipelines[cite: 1].',
    },
    {
      title: 'MLOPS & PRODUCTION ML',
      description:
        'Containerization, model API exposure, and continuous integration for Machine Learning systems.',
    },
  ],
  experiences: [
    {
      role: 'System Architect & Data Engineer',
      company: 'Sikessem',
      period: '2024 — PRESENT',
      subtitle: 'Complex Data Structuring & Syntax Analytics',
      impacts: [
        'Engineered lexical parsers and Abstract Syntax Trees (AST) for the <strong>Phi</strong> language[cite: 1].',
        'Optimized zero-allocation string manipulation and token analytics algorithms[cite: 1].',
      ],
    },
    {
      role: 'Lead Developer & Data Pipelines',
      company: 'Glaxuss Tech',
      period: '2024 — PRESENT',
      subtitle: 'Enterprise Data Pipelines & Analytics',
      impacts: [
        'Architected enterprise data pipelines and structured data ingestion systems[cite: 1].',
        'Designed relational database schemas optimized for scalability and reporting analytics[cite: 1].',
      ],
    },
    {
      role: 'Software & Data Engineer Consultant',
      company: 'Freelance / E-Commerce / ERP',
      period: '2015 — 2024',
      subtitle: 'Transactional Systems & Data Analytics',
      impacts: [
        'Processed and analyzed large-scale transactional data for the <strong>Ahlabik</strong> e-commerce platform[cite: 1].',
        'Built automated ETL workflows and cross-system data synchronization for ERPs[cite: 1].',
      ],
    },
  ],
  categories: {
    ds: 'DATA SCIENCE & ML',
    data_eng: 'DATA ENGINEERING',
    languages: 'LANGUAGES & RUNTIMES',
  },
  ecosystem: [
    {
      categoryId: 'ds',
      skills: [
        'Python',
        'Pandas',
        'NumPy',
        'Scikit-Learn',
        'Statistical Modeling',
        'NLP',
      ],
    },
    {
      categoryId: 'data_eng',
      skills: [
        'SQL (PostgreSQL)',
        'ETL Pipelines',
        'Data Cleaning',
        'Big Data Systems',
      ],
    },
    {
      categoryId: 'languages',
      skills: ['Vlang', 'PHP', 'TypeScript', 'Deno', 'Docker', 'Git'],
    },
  ],
  education: [
    {
      degree: 'Master 1 — Big Data & Data Science',
      institution: 'Focus on Statistical Modeling & Analytics',
      period: '2023 — 2024',
    },
    {
      degree: "Bachelor's Degree — Business Intelligence (BI)",
      institution: 'Focus on Data Warehousing & Reporting',
      period: '2020 — 2021',
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
