import dictionary from './dictionary/fr.ts';

export default {
  lang: 'fr',
  title:
    'Kessé Emmanuel SIGUI — Architecte Logiciel Senior & Ingénieur Plateforme',
  subtitle:
    'Architecte Logiciel Senior · Senior Full-Stack Engineer · Platform Engineer · Maintainer Open Source',
  location: "Abidjan, Côte d'Ivoire · Remote / International",
  availability:
    'Disponible pour des opportunités remote, internationales et des missions à forte responsabilité technique',

  tagline:
    'Je transforme des besoins métier en produits logiciels robustes : cadrage, spécifications, architecture, développement, tests automatisés, déploiement et maintenance.',

  headline:
    'Senior Software Architect · Senior Full-Stack Engineer · Platform Engineer · Product Engineer',

  sections: dictionary.sections,

  strengths: [
    'Architecture logicielle pragmatique — DDD, Clean Architecture, Hexagonal Architecture et Modular Monoliths',
    'Ingénierie produit de bout en bout — du besoin métier à la production et à la maintenance',
    'Platform Engineering, systèmes distribués, multi-tenancy et conception d’APIs',
    'Développement full-stack moderne avec Laravel, Vue.js, Inertia.js, Livewire, Astro et TypeScript',
    'Engineering cross-runtime autour de Node.js, Deno et Bun',
    'Testing et qualité logicielle — Unit, Integration, E2E, TDD, analyse statique et CI',
    'Developer Experience, outillage open source et automatisation des workflows de développement',
    'Data Engineering, Business Intelligence et intégration progressive de capacités IA',
  ],

  categories: dictionary.categories,

  summary:
    "Architecte logiciel senior et ingénieur full-stack avec plus de <strong>10 ans d'expérience</strong> dans la conception et la réalisation de produits numériques. J'interviens sur l'ensemble du cycle de vie d'un produit : compréhension du besoin, rédaction du cahier des charges et des spécifications, modélisation métier, conception de l'architecture, développement, automatisation des tests, intégration continue, déploiement et maintenance en production. Habitué aux environnements Agile/Scrum et aux outils tels que Jira et Trello, je peux intervenir aussi bien comme ingénieur que comme référent technique responsable de transformer une problématique métier en solution logicielle durable. Mon parcours combine architecture logicielle, full-stack engineering, infrastructure, Developer Experience, Open Source et une formation en Business Intelligence et Big Data.",

  capabilities: [
    {
      title: 'Ingénierie Produit de Bout en Bout',
      description:
        "Analyse du besoin, cadrage fonctionnel, cahier des charges, spécifications techniques, modélisation, architecture, développement, tests, livraison, déploiement et maintenance d'applications en production.",
    },
    {
      title: 'Architecture Logicielle & Modélisation Métier',
      description:
        'Conception de systèmes maintenables à partir de DDD, Clean Architecture, Hexagonal Architecture, SOLID et Modular Monoliths, avec une attention particulière portée aux frontières de domaine et à la capacité d’évolution.',
    },
    {
      title: 'Quality Engineering & Testing',
      description:
        "Mise en place et maintien d'une stratégie de tests couvrant les comportements unitaires, les intégrations et les parcours end-to-end. Utilisation de la TDD lorsque le contexte s'y prête, complétée par l'analyse statique et l'automatisation CI.",
    },
    {
      title: 'Platform Engineering & Developer Experience',
      description:
        "Conception d'environnements de développement et de production reproductibles, automatisation CI/CD, infrastructure Linux, conteneurisation et création d'outils améliorant la productivité des développeurs.",
    },
    {
      title: 'Data, BI & Applications Augmentées par l’IA',
      description:
        'Conception de pipelines de données, modèles analytiques, tableaux de bord et intégration de capacités LLM, RAG ou agents dans des applications métier lorsque cela apporte une valeur concrète.',
    },
  ],

  experiences: [
    {
      id: 'sikessem',
      role: 'Fondateur & Architecte Logiciel',
      company: 'Sikessem',
      period: 'Depuis les débuts du parcours — Présent',
      subtitle:
        'Écosystème numérique modulaire, plateforme logicielle & Open Source',
      impacts: [
        "Construction progressive de Sikessem depuis les débuts de mon parcours : d'une identité et d'une initiative personnelle vers une vision d'écosystème numérique et d'infrastructure logicielle modulaire.",
        'Conception de composants, bibliothèques, frameworks et plateformes destinés à être réutilisés à travers plusieurs produits et contextes.',
        'Conception de systèmes modulaires, multi-tenant et orientés domaine, avec une attention portée aux frontières entre les responsabilités métier et techniques.',
        'Développement et maintenance de projets Open Source couvrant le web, les runtimes, les outils développeur, les design systems et les abstractions de programmation.',
        'Mise en place de workflows CI/CD, environnements Linux, déploiements Docker et infrastructure VPS pour les produits de l’écosystème.',
      ],
    },
    {
      id: 'glaxuss',
      role: 'Co-fondateur & CTO',
      company: 'Glaxuss Tech',
      period: '2024 — Présent',
      subtitle:
        'Direction technique, architecture logicielle & solutions d’entreprise',
      impacts: [
        'Définition et arbitrage des architectures techniques pour les produits et projets clients.',
        'Transformation des besoins métier en cahiers des charges, spécifications fonctionnelles et techniques, modèles de données et architectures applicatives.',
        'Conception et développement de solutions full-stack en tenant compte des contraintes de performance, de maintenabilité, de sécurité et d’évolution.',
        'Organisation du développement dans des environnements Agile/Scrum avec suivi du travail sur Jira ou Trello selon les projets.',
        'Mise en place de stratégies de tests unitaires, d’intégration et end-to-end ainsi que de pipelines CI permettant de détecter les régressions avant livraison.',
        'Déploiement, livraison et maintenance des applications en production, avec automatisation progressive des opérations.',
      ],
    },
    {
      id: 'consulting',
      role: 'Senior Software Engineer & Consultant en Architecture',
      company: 'Consulting indépendant & Projets clients',
      period: '2015 — Présent',
      subtitle:
        'SaaS, E-Commerce, ERP, Fintech, BI, plateformes métier & modernisation',
      impacts: [
        'Conception et développement de plateformes web et applications métier pour différents contextes d’entreprise.',
        'Prise en charge de projets de bout en bout : compréhension du besoin, spécifications, architecture, développement, assurance qualité, livraison, déploiement et maintenance.',
        'Développement de backends et APIs avec PHP/Laravel, Symfony, TypeScript et d’autres runtimes selon les contraintes du projet.',
        'Conception d’interfaces modernes avec Vue.js, Inertia.js, Livewire, Alpine.js, Astro et Tailwind CSS.',
        'Intervention sur des systèmes transactionnels, e-commerce, ERP, plateformes LMS, outils d’administration et applications orientées données.',
        'Modernisation et refactoring progressifs de systèmes existants avec réduction de dette technique et amélioration de la couverture de tests.',
      ],
    },
    {
      id: 'opensource',
      role: 'Maintainer & Open Source Contributor',
      company: 'Écosystème Open Source',
      period: 'Depuis 2020',
      subtitle:
        'Developer Tooling, frameworks web, runtimes, design systems & automation',
      impacts: [
        'Création et maintenance de plusieurs projets Open Source personnels utilisés comme laboratoires d’architecture, de tooling et d’expérimentation.',
        'Contributions publiques à des projets et écosystèmes web modernes, notamment autour d’Astro et Qwik.',
        'Création de Setup JS, une GitHub Action destinée à automatiser la préparation d’environnements JavaScript/TypeScript.',
        'Création de colorwind et plugwind.js pour étendre les possibilités de Tailwind CSS.',
        'Conception de SigUI comme système de composants et de design réutilisable.',
        'Recherche et développement autour de Phi, Cup et Loom, portant respectivement sur le langage, les templates et les infrastructures/frameworks applicatifs.',
      ],
    },
  ],

  projects: [
    {
      name: 'Sikessem',
      type: 'Digital Ecosystem',
      tagline: 'Infrastructure numérique modulaire & plateforme applicative',
      description:
        'Vision logicielle développée progressivement depuis les débuts du parcours, aujourd’hui orientée vers une infrastructure numérique ouverte et modulaire pouvant servir de socle à plusieurs produits et expériences.',
    },
    {
      name: 'Loom',
      type: 'Management & Operations Platform',
      tagline: 'Universal Management System',
      description:
        'Système de gestion universel destiné à modéliser, organiser, exécuter et automatiser les projets, organisations, activités et opérations d’un acteur ou d’un workspace.',
    },
    {
      name: 'TransMo',
      type: 'Financial Operations Platform',
      tagline: 'Financial Operating System for Telecom Service Points',
      description:
        'Plateforme SaaS conçue pour structurer les opérations financières des points de services télécoms et Mobile Money : caisse, wallets, stock, mouvements, rapprochements, permissions, audit et clôtures.',
    },
    {
      name: 'Phi',
      type: 'Programming Language',
      tagline: 'Language & Programming Systems R&D',
      description:
        'Projet de recherche et développement autour de la conception d’un langage et de ses outils de compilation, avec grammaire, lexing, parsing, AST, REPL et gestion explicite des erreurs.',
    },
    {
      name: 'Cup',
      type: 'Developer Tooling',
      tagline: 'Template & Rendering Infrastructure',
      description:
        'Moteur de templates conçu autour d’une approche compilée et orientée performance pour les environnements TypeScript et Deno.',
    },
    {
      name: 'SigUI',
      type: 'Design System',
      tagline: 'Reusable UI Components & Design Infrastructure',
      description:
        'Système de design et bibliothèque de composants destinés à fournir une base cohérente et réutilisable pour les interfaces des projets de l’écosystème.',
    },
    {
      name: 'Setup JS',
      type: 'CI/CD Tooling',
      tagline: 'JavaScript / TypeScript Environment Automation',
      description:
        'GitHub Action destinée à automatiser la préparation et la configuration d’environnements JavaScript/TypeScript dans les workflows CI.',
    },
    {
      name: 'colorwind / plugwind.js',
      type: 'Developer Tools',
      tagline: 'Tailwind CSS Extensions',
      description:
        'Outils et extensions destinés à enrichir les workflows Tailwind CSS et la génération de systèmes de couleurs.',
    },
  ],

  opensource: [
    'Création et maintenance de projets Open Source dans les domaines du web, du tooling, des runtimes, des design systems et de l’automatisation.',
    'Contributions publiques aux écosystèmes Astro et Qwik.',
    'Création de Setup JS, colorwind, plugwind.js et SigUI.',
    'Recherche et développement autour de Phi, Cup et Loom.',
    'Utilisation de l’Open Source comme espace de recherche, de conception et de validation publique des idées architecturales.',
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

  languages: [
    { name: 'Français', level: 'Langue maternelle / bilingue' },
    { name: 'Anglais', level: 'Technique & professionnel' },
  ],
} as const;
