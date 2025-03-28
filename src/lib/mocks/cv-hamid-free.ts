import { CVData } from "../types/struct";

export const mock_cv_hamid: CVData = {
  name: "Hamid Bassam",
  position: "Ingénieur Produit Senior | Développeur Front-End avec une expertise React ",
  location: " Lille | Bruxelles, Belgique - 5ans XP",
  email: "hamid.bassam.147@gmail.com",
  phone: "+33 7 49 88 73 49",
  linkedin: "https://www.linkedin.com/in/hamid-bassam",
  // summary: "Ingénieur produit avec une expertise éprouvée en développement full-stack, architecture scalable et leadership technique. Mon approche pragmatique et data-driven me permet d'optimiser l'impact business des produits tout en assurant performance et scalabilité.",


  experiences: [
    // {
    //   position: "CTO",
    //   company: "Académie en ligne - Glory Horizon",
    //   dates: "Depuis 2025",
    //   tasks: [
    //     "Définition et exécution de la vision technologique",
    //     "Évaluation des risques et maximisation du ROI des projets",
    //     "Mise en place d'une infrastructure cloud-native optimisée",
    //   ],
    //   technologies: ["Next.js", "Prisma", "PostgreSQL", "AWS", "Payload CMS", "Vercel"],
    //   reference: [{ name: "Lesgsai Karim", role: "CEO" }]
    // },
    {
      position: "Ingénieur Produit / Freelance",
      company: "Tickie (Station F)",
      dates: "Juin 2024 - Fevrier 2025",
      tasks: [
        "Conception d'une architecture cloud-native robuste et évolutive",
        "Optimisation des performances et réduction de 20% des délais d'intégration",
        "Amélioration du processus d'onboarding et satisfaction des partenaires",
        "Développement d'une API REST pour gérer les utilisateurs et leurs rôles",
        "Intégration de composants React connectés à des APIs REST Java",
        // "Intégration fluide avec CMS via JSON:API, gestion des mappings et typage TS",
        "Rédaction de tests E2E Cypress couvrant les scénarios critiques utilisateur",
        "Mise en place d'un pipeline CI/CD pour automatiser les déploiements",
        "Dockerisation des applications pour environnement de staging/production reproductible",

      ],
      technologies: ["Next.js", "Prisma", "PostgreSQL", "TailwindCSS"],
      reference: [{ name: "Nidhal Sabbah", role: "CTO" }]

    },
    {
      position: "Ingénieur Produit / Freelance",
      company: "Ecohesens (Station F)",
      dates: "Janvier 2024 à Juin 2024",
      tasks: [
        "Création d’un MVP e-commerce intégrant gestion des coffrets, automatisation des emails et dashboard intuitif",
        "Mise en œuvre d'une approche business innovante pour valider les fonctionnalités clés",
        "Optimisation du processus de gestion des commandes et augmentation de l’efficacité opérationnelle",
        "Conception et implémentation d'une interface admin pour gérer les commandes et les produits",
        "Organisateur des cérémonies Agile : daily, grooming, sprint review, rétrospective",
        "Mise en place du dashboard JIRA",
        "Animation d’échanges tech (refactoring, choix de stack, revue de code)"
      ],
      technologies: ["Next.js", "Prisma", "PostgreSQL", "TailwindCSS", "Vercel"],
      reference: [{ name: "Marina Benomar", role: "CEO" }]

    },
    {
      position: "Développeur full-stack et Tech Lead",
      company: "Inetum Strasbourg",
      dates: "Mars 2023 - Décembre 2023",
      tasks: [
        "Développement d'une application web pour organiser des courses solidaires (Sport Solid'R)",
        "Conception de l'architecture et implémentation technique",
        "Compréhension des architectures découplées entre front React et back .NET",
        "Capacité à décortiquer un back métier (routes, data models, endpoints)",
        "Encadrement et mentorat de développeurs pour assurer la montée en compétences et la continuité des projets",
        "Coordination fonctionnelle avec PO et client, remontée des risques et arbitrage",
        "Estimation des charges techniques en binôme avec le PO",
        "Respect des critères RGAA v4 : navigation clavier, structure sémantique, aria-labels, contrastes, focus visibles",
        "Validation des composants via Axe DevTools, Lighthouse, et simulateurs d’accessibilité",
        "Prototypage rapide et adaptation du design system aux contraintes techniques",
        "Consommation et sécurisation d’APIs RESTful avec gestion des erreurs et des états",
        "Approche centrée utilisateur : découpage du parcours, feedback visuel, accessibilité",
      ],
      technologies: ["C#", "ASP.Net", "SQL Server", "React.js", "Redux"],
      reference: [{ name: "Paul Claude", role: "Business Manager" }]
    },
    {
      position: "Développeur Full-Stack",
      company: "Timelapps Paris 13 (Station F)",
      dates: "Novembre 2019 - Janvier 2023",
      tasks: [
        "Développement d'un SaaS innovant pour avocats, boostant la productivité de 30%",
        "Mise en place d'une architecture modulaire et évolutive, garantissant scalabilité et pérennité",
        "Conception et implémentation d'une interface avancée de gestion de PDF (drag-and-drop, undo/redo, fusion de documents)",
        "Intégration pixel-perfect à partir de maquettes Figma (HTML/SCSS/Tailwind)",
        "Application des bonnes pratiques d’accessibilité dès la conception des interfaces",
        "Tests visuels sur navigateurs desktop (Chrome, Firefox, Safari, IE11) et mobiles",
        "Conception de composants dynamiques, réutilisables, optimisés performance",
        "Implémentation de composants réactifs avec logique UX first (modale, drag, lazy load…)",
        "Rédaction de tests E2E Cypress couvrant les scénarios critiques utilisateur",
        "Mise en place de tests Jest/TDD dès la création des composants critiques",
        "Intégration des tests dans le pipeline CI pour validation automatique avant merge",
        "Dockerisation des applications pour environnement de staging/production reproductible",
        "Livraison maîtrisée sur environnements hors-prod et prod, en binôme avec les Ops",
        "Mise en place d'un pipeline CI/CD pour automatiser les déploiements",
        "Support post-livraison (logs, débogage, performance) en lien avec l’équipe exploitation",

      ],
      technologies: ["React.js", "Node.js", "NestJS", "Redux Toolkit", "Supabase", "AWS"],
      reference: [{ name: "Sofiane Henock", role: "CEO" }]
    },
    {
      position: "Développeur Java (Stage PFE)",
      company: "MDPI (Bâle, Suisse)",
      dates: "Février 2019 - Juillet 2019",
      tasks: [
        "Optimisation des comparaisons d'articles XML par une analyse sémantique avancée du DOM",
        "Développement d'algorithmes optimisés pour réduire la complexité computationnelle",
        "Déclenchement automatique à chaque push sur branche dédiée via GitLab CI",
        "Analyse des rapports Jenkins (build, test, Sonar) pour correction continue",
        "Packaging des livrables via Docker avec gestion des artefacts en logique Maven",
        "Déploiement sur serveur de recette pour validation par le PO et les utilisateurs",
      ],
      technologies: ["Java", "XML", "Spring Boot", "Maven", "JUnit", "Mockito", "Jenkins"],
      reference: [{ name: "Dr. Milos Cuculovic", role: "Head of AI R&D" }]
    }
  ],
  skills: [
    {
      category: "Frameworks & UI",
      skills: [
        { name: "Next.js", emphasis: "normal" },
        { name: "React.js", emphasis: "normal" },
        { name: "TypeScript", emphasis: "normal" },
        { name: "TailwindCSS, HTML5, SCSS", emphasis: "normal" },
      ]
    },
    {
      category: "Tests & QA",
      skills: [
        { name: "Cypress (tests E2E intégrés dans pipeline)", emphasis: "normal" },
        { name: "Jest", emphasis: "normal" },
        { name: "TDD", emphasis: "normal" }
      ]
    },
    {
      category: "CI/CD & DevOps",
      skills: [
        { name: "Jenkins (pipeline complet en production)", emphasis: "normal" },
        { name: "Docker", emphasis: "normal" },
        { name: "GitHub Actions", emphasis: "normal" },
        { name: "Maven", emphasis: "normal" }

      ]
    },
    {
      category: "Back-End & Données",
      skills: [
        { name: "Node.js", emphasis: "normal" },
        { name: "NestJS", emphasis: "normal" },
        { name: "Express", emphasis: "normal" },
        { name: "JAVA", emphasis: "normal" },
        { name: "Prisma", emphasis: "normal" },
        { name: "PostgreSQL", emphasis: "normal" },
        { name: "Supabase", emphasis: "normal" }


      ]
    },
    {
      category: "Architecture & Performance",
      skills: [
        { name: "Cloud-native (AWS, Vercel)", emphasis: "normal" },
        { name: "Scalabilité & Optimisation", emphasis: "normal" },

        // { name: "CI/CD (GitHub Actions, Docker)", emphasis: "normal" }
      ]
    },
    {
      category: "Gestion de Projet & Leadership",
      skills: [
        { name: "Scrum & Agilité", emphasis: "italic" },
        { name: "Vision produit & stratégie", emphasis: "normal" },
        { name: "Mentorat & coaching technique", emphasis: "normal" }
      ]
    },
    {
      category: "Sécurité & Conformité",
      skills: [
        { name: "RGPD & Sécurité Cloud", emphasis: "normal" },
        { name: "Auth & Permissions", emphasis: "normal" },
        { name: "AWS Bucket S3", emphasis: "normal" },

      ]
    },
    {
      category: "Soft Skills",
      skills: [
        { name: "Leadership technique, mentoring, transmission", emphasis: "italic" },
        { name: "Esprit d'quipe, communication technico-fonctionnelle", emphasis: "italic" },
        { name: "Rigueur, autonomie, capacité à délivrer en pression", emphasis: "italic" },
        { name: "Sens produit, culture de l'impact, fiabilité en production", emphasis: "italic" },
      ]
    },
    {
      category: "Langues",
      skills: [
        { name: "Francais : Bilingue", emphasis: "italic" },
        { name: "Anglais : Professionnel", emphasis: "italic" },
        { name: "Arabe : Maternel", emphasis: "italic" },
      ]
    },
  ]
  ,
  certifications: [
    // {
    //   title: "AWS Certified Solutions Architect",
    //   year: "2024",
    //   issuer: "Amazon AWS"
    // }
  ],
  education: [
    {
      degree: "Diplôme d'Ingénieur en Informatique et Réseaux",
      school: "ENSISA, Mulhouse",
      year: "2019"
    },
    {
      degree: "AZ-900: Microsoft Azure Fundamentals",
      school: "Microsoft",
      year: "2023"
    }
  ],
  tools: ["Docker", "Kubernetes", "Git", "Vercel"],
  softSkills: ["Leadership", "Collaboration", "Résolution de problèmes"],
  regulations: ["RGPD", "Normes de sécurité Cloud"],
  languages: [
    { name: "Français", level: "Natif" },
    { name: "Anglais", level: "Courant (TOEIC B2)" },
    { name: "Arabe", level: "Maternelle" }
  ],
  projects: [
    {
      title: "Time Tracking SaaS",
      description: "Développement d’un SaaS de gestion du temps et productivité permettant un suivi optimisé des performances.",
      technologies: ["Next.js", "PostgreSQL", "Prisma"]
    },
    {
      title: "Tailwind-Gen-AI",
      description: "Application Next.js intégrant le SDK Vercel et les librairies OpenAI pour convertir les prompts utilisateurs en pages web responsives. Utilise Tailwind CSS pour un design élégant et adaptatif.",
      technologies: ["Next.js", "PostgreSQL", "Prisma"]

    },
    {
      title: "DoFlex",
      description: "Gestion d'objectif sous forme de mindmap. En cours de contruction, DoFlex permettra de visualiser et de gérer ses objectifs personnels et professionnels de manière intuitive et efficace.",
      technologies: ["Next.js", "PostgreSQL", "Prisma"]

    },
    {
      title: "Portfolio personnel",
      description: "Portfolio personnel pour présenter mes compétences et mes projets",
      technologies: ["Next.js", "PostgreSQL", "Prisma"]
    }

  ],
  awards: [
    {
      title: "Champion Régional de Scrabble",
      year: "2008-2009-2010(Score Max)",
      issuer: "Fédération Nationale de Scrabble"
    },
    {
      title: "Champion du maroc de Volleyball cathégorie cadet",
      year: "2011",
      issuer: "Fédération Royale Marocaine de Volleyball"
    }
  ],
  contact: {
    email: "hamid.bassam.147@gmail.com",
    phone: "+33 7 49 88 73 49",
    location: "Paris, France"
  }
};
