import { CVData } from "../types/struct";

export const mock_cv_hamid: CVData = {
  name: "Hamid Bassam",
  position: "Ingénieur Produit | Développeur Front-End avec une expertise React/Next.js",
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
      description: ["Startup événementielle proposant une suite modulaire pour les professionnels du sport, de la culture et du B2B (CRM, billetterie, fan experience...)."],
      tasks: [
        "Définition et implémentation de l’architecture front cloud-native en Next.js avec pages SSG/SSR selon les besoins métier",
        "Encadrement technique des développeurs front ",
        "Spécification et intégration des échanges entre front React et REST APIs, coordination avec l’équipe back",
        "Structuration d’un design system modulaire et scalable avec TailwindCSS, en respectant les standards UX",
        "Mise en place et maintien de la chaîne CI/CD avec Vercel et Docker, incluant des previews automatisées par PR",
        "Rédaction des plans de test et amorce de la couverture Jest/Cypress, validation fonctionnelle continue avec l’équipe produit",

      ],
      result: ["80% des modules critiques livrés dès la première itération", "amélioration significative de l’onboarding partenaire", "Adoption par Adidas Arena et VivaTech"],
      technologies: ["Next.js", "React.js", "Typescript", "TailwindCSS", "Prisma", "PostgreSQL", "TailwindCSS"],

      reference: [{ name: "Nidhal Sabbah", role: "CTO" }],
      layout: { marginBottom: 150 }

    },
    {
      position: "Ingénieur Produit / Freelance",
      company: "Ecohesens (Station F)",
      dates: "Janvier 2024 à Juin 2024",
      description: ["Startup bien-être en entreprise, pivotant vers un modèle de vente de coffrets personnalisés via une plateforme e-commerce.", "Rôle hybride : Développeur produit, Tech Lead, BA, PO et architecte MVP auprès de la CEO."],
      tasks: [
        "Rédaction des spécifications technico-fonctionnelles, cadrage fonctionnel et structuration de la vision produit",
        "Mise en place du dashboard Jira et des rituels Agiles (daily, grooming, sprint review)",
        "Développement du parcours client (questionnaire + commande) et de l’interface admin (produits, commandes, suggestions)",
        "Animation des échanges techniques : choix de stack, refactoring, revue de code",
        "Automatisation des emails transactionnels",
      ],
      result: ["MVP e-commerce livré rapidement, premières commandes validées, gains clairs sur l’efficacité opérationnelle"],
      technologies: ["Next.js", "React.js", "Typescript", "TailwindCSS", "Prisma", "PostgreSQL", "TailwindCSS", "Vercel"],
      reference: [{ name: "Marina Benomar", role: "CEO" }]

    },
    {
      position: "Développeur full-stack et Tech Lead",
      company: "Inetum Strasbourg",
      dates: "Mars 2023 - Décembre 2023",
      description: ["Développement d’une plateforme de gestion d’événements sportifs solidaires (inscriptions, dons, parrainage, suivi) sans le cadre d’un appel d’offres pour une collectivité"],
      tasks: [
        "Lead technique front & full stack : arbitrage technique, mentoring devs, lien constant avec PO et client",
        "Développement en React (frontend) et ASP.NET (backend), structuration du code et intégration d’APIs REST",
        "Sécurisation des flux, gestion des états, prototypage, vérification RGAA, refacto du design system",
        "Animation des ateliers fonctionnels, rédaction des user stories, estimation des charges techniques",
      ],
      result: ["Livraison stable dans un contexte de turnover, adoption fluide par les utilisateurs finaux, validation des livrables par la collectivité"],
      technologies: ["Typescript", "React.js", "Redux", "TailwindCSS", "C#", "ASP.Net", "SQL Server"],
      reference: [{ name: "Paul Claude", role: "Business Manager" }],
      layout: { marginBottom: 70 }
    },
    {
      position: "Développeur Full-Stack",
      company: "Timelapps Paris 13 (Station F)",
      dates: "Novembre 2019 - Janvier 2023",
      description: ["Développement from scratch d’un SaaS juridique à destination des avocats, avec un éditeur PDF avancé pour la gestion de dossiers sensibles (RGPD)."],
      tasks: [
        "Création d’un éditeur PDF modulaire : découpe, fusion, drag & drop, historique, undo/redo",
        "Architecture découpée en composants React + Redux Toolkit, montée en performance fluide",
        "Intégration UI pixel-perfect depuis Figma (HTML/SCSS/Tailwind), logique UX-first (modale, lazy load)",
        "Stockage sécurisé sur AWS S3 avec hiérarchisation des documents, droits d’accès, conformité RGPD",
        "Préparation DevOps : dockerisation, packaging, montée en environnement",

      ],
      result: ["Expérience fluide validée par les avocats testeurs, plateforme conforme RGPD, excellent taux de rétention en beta"],
      technologies: ["React.js", "Node.js", "NestJS", "Redux Toolkit", "Supabase", "AWS"],
      reference: [{ name: "Sofiane Henock", role: "CEO" }]
    },
    {
      position: "Développeur Java (Stage PFE)",
      company: "MDPI (Bâle, Suisse)",
      dates: "Février 2019 - Juillet 2019",
      description: ["Projet de recherche appliquée (JnDiff-JATS) pour la comparaison sémantique d’articles scientifiques XML, à destination de workflows LLM pour rédacteurs en chef."],
      tasks: [
        "Développement d’un moteur de comparaison XML en Java, tri DOM et factorisation sémantique",
        "Réduction de la complexité algorithmique : heuristiques, filtrage des nœuds décoratifs, regroupements pertinents",
        "Mise en place d’une CI/CD complète : GitLab CI, Jenkins, Sonar, Docker, déclenchement auto à chaque push",
        "Packaging via Maven, déploiement sur environnement de recette, documentation scientifique du projet",
        "Packaging des livrables via Docker avec gestion des artefacts en logique Maven",
      ],
      result: ["Amélioration des perfs, réduction des coûts de calcul, contribution à une thèse doctorale et validation académique avec mention excellent"],
      technologies: ["Java", "XML", "Spring Boot", "Maven", "JUnit", "Mockito", "Jenkins"],
      reference: [{ name: "Dr. Milos Cuculovic", role: "Head of AI R&D" }],
      layout: { marginBottom: 150 }
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
