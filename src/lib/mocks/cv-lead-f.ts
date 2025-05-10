import { CVData } from "../types/struct";

export const mock_cv_lead_f: CVData = {
  name: "Hamid Bassam",
  position: "Lead Developer SaaS · TypeScript / React / Node.js · Tech Builder & Mentor",
  location: "Paris",
  email: "hamid.bassam.147@gmail.com",
  phone: "+33 7 49 88 73 49",
  linkedin: "https://www.linkedin.com/in/hamid-bassam-802334207/",
  // portfolio: "https://bassams.fr/",
  // summary: "Ingénieur produit avec une expertise éprouvée en développement full-stack, architecture scalable et leadership technique. Mon approche pragmatique et data-driven me permet d'optimiser l'impact business des produits tout en assurant performance et scalabilité.",
  // summary: "Tech Lead produit avec une forte culture startup, j’accompagne les fondateurs dans la structuration de leur plateforme web : audit technique, refonte d’architecture, sécurisation, MVP, puis montée en charge. Je combine expertise Next.js / Node.js avec une capacité à piloter le produit comme un co-fondateur tech, en garantissant une base solide et évolutive pour l’équipe.",
  // summary: "Tech Lead produit avec une forte culture startup, j’accompagne les fondateurs dans l’audit, la refonte et la montée en charge de leur plateforme web. Vision produit, rigueur technique et posture de cofondateur au service d’une base solide et scalable.",
  // summary: ["Lead developer fullstack avec 5+ ans d’expérience dans l’écosystème startup, j'accompagne les fondateurs et les équipes produit dans la construction, la refonte et la montée en charge de leurs plateformes SaaS.Je combine vision produit, expertise en architecture scalable, et capacité à faire grandir une équipe tech autour d’un socle robuste.", "Mes forces : délivrer rapidement des MVP bien conçus, structurer une roadmap technique claire, et faciliter l’onboarding des développeurs pour sécuriser la continuité projet."],
  // summary: "Lead developer fullstack avec 5+ ans d’expérience dans l’écosystème startup, j'accompagne les fondateurs et les équipes produit dans la construction, la refonte et la montée en charge de leurs plateformes SaaS.Je combine vision produit, expertise en architecture scalable, et capacité à faire grandir une équipe tech autour d’un socle robuste. Mes forces : délivrer rapidement des MVP bien conçus, structurer une roadmap technique claire, et faciliter l’onboarding des développeurs pour sécuriser la continuité projet.",
  // **** 
  summary: "Lead Developer fullstack avec 5+ ans d’expérience dans l’écosystème startup, j’aide les fondateurs à construire ou refondre leur plateforme SaaS, avec une vision produit claire alignée avec les enjeux business, une architecture scalable et une équipe bien embarquée.",
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
      position: "Responsable Technique / Freelance",
      company: "Tickie (Station F)",
      dates: "Juin 2024 - Avril 2025",
      description: ["Startup événementielle proposant une suite modulaire pour les professionnels du sport, de la culture et du B2B (CRM, billetterie, fan experience...)."],
      // "> Architecture cloud-native & onboarding fluide"],
      tasks: [
        "Reprise complète d’un code legacy avec dette technique élevée : audit, plan de refonte et montée en qualité.",
        "Refonte de l’architecture pour la rendre modulaire, scalable et facilement maintenable.",
        "Optimisation des parcours d’intégration partenaires : réduction des frictions et alignement produit/tech.",
        "Collaboration avec les fondateurs sur la roadmap technique, priorisation des sprints et stabilisation des livraisons.",

      ],
      // result: ["Plateforme stabilisée", "expérience partenaire fluidifiée", "lancement produit accéléré sans blocage technique."],
      result: ["Plateforme stabilisée, expérience partenaire fluidifiée, lancement produit accéléré sans blocage technique."],
      technologies: ["Next.js", "React.js", "Typescript", "Prisma", "PostgreSQL", "TailwindCSS", "Sentry", "AWS"],

      reference: [{ name: "Nidhal Sabbah", role: "CTO" }],
      layout: { marginBottom: 30 }

    },
    {
      position: "Responsable Produit Tech / Freelance",
      company: "Ecohesens (Station F)",
      dates: "Janvier 2024 à Juin 2024",
      description: ["Startup bien-être pivotant vers un modèle e-commerce de coffrets personnalisés pour entreprises, avec besoin urgent d’un MVP fonctionnel."],
      tasks: [
        "Co-construction du MVP en lien direct avec la CEO et l’équipe marketing : cadrage, priorisation, cycles courts.",
        "Développement des 3 piliers de la plateforme : gestion des coffrets, emails transactionnels, dashboard admin intuitif.",
        "Mise en place d’une base technique propre et évolutive (Next.js + PostgreSQL) pour faciliter les itérations et l’évolutivité.",
        "Accompagnement stratégique sur le business model et les choix techniques long terme.",

      ],
      result: ["MVP e-commerce livré dans les temps, produit validé auprès des premiers utilisateurs.", "Efficacité opérationnelle augmentée sur les commandes.", "Roadmap clarifiée et socle prêt pour scale-up."],
      technologies: ["Next.js", "React.js", "Typescript", "TailwindCSS", "Prisma", "PostgreSQL", "TailwindCSS", "Vercel"],
      reference: [{ name: "Marina Benomar", role: "CEO" }]

    },
    {
      position: "Tech Lead / Fullstack",
      company: "Inetum Strasbourg",
      dates: "Mars 2023 - Décembre 2023",
      description: ["Application web pour l’organisation et la gestion d’événements solidaires (Sport Solid’R), dans un contexte à fort turnover technique."],
      tasks: [
        "Analyse des besoins métiers et conception d’une architecture robuste orientée état pour absorber les évolutions fonctionnelles.",
        "Développement fullstack (React / C# .NET) et pilotage du backlog technique.",
        "Encadrement de plusieurs développeurs aux profils variés (2 à 10 ans d’expérience). Win-Win sur l’onboarding et la montée en compétences.",
        "Participation active au recrutement (entretiens techniques), onboarding de nouveaux profils, transmission des bonnes pratiques.",
        "Animation des ateliers fonctionnels avec les métiers, rédaction des user stories, estimation des charges.",
      ],
      result: ["Livraison de la plateforme dans les délais malgré un contexte instable.", "Montée en compétence rapide des nouveaux devs, assurant la continuité projet.", "Qualité du code et documentation améliorées, facilitant les futures évolutions."],
      technologies: ["Typescript", "React.js", "Redux", "TailwindCSS", "C#", "ASP.Net", "SQL Server"],
      reference: [{ name: "Paul Claude", role: "Business Manager" }],
      layout: { marginBottom: 50 }
    },
    {
      position: "Tech Lead Produit",
      company: "Timelapps Paris 13 (Station F)",
      dates: "Novembre 2019 - Janvier 2023",
      description: ["Développement from scratch d’un SaaS juridique pour les avocats, avec des contraintes de sécurité, d’UX avancée et de conformité RGPD."],
      tasks: [
        "Cadrage technique et fonctionnel du produit avec les fondateurs.",
        "Conception et mise en œuvre d’une architecture modulaire et sécurisée, scalable par design.",
        "Développement d’un éditeur de PDF avancé : drag & drop, fusion/séparation de pages, undo/redo.",
        "Intégration pixel-perfect depuis Figma (HTML/SCSS/Tailwind) avec approche UX-first.",
        "Réalisation des choix stratégiques techniques (stack, déploiement, sécurité), tout en coordonnant avec les fondateurs sur les priorités fonctionnelles.",
        "Autonomie complète sur le delivery, le déploiement, les choix d’outillage et la qualité technique.",

      ],
      result: ["Plateforme fluide, validée par les avocats testeurs. Base solide pour le scale-up."],
      technologies: ["React.js", "Node.js", "NestJS", "Redux Toolkit", "Supabase", "AWS"],
      reference: [{ name: "Sofiane Henock", role: "CEO" }]
    },
    {
      position: "Développeur Java (Stage PFE)",
      company: "MDPI (Bâle, Suisse)",
      dates: "Février 2019 - Juillet 2019",
      description: ["Maison d’édition scientifique internationale. Projet mené en lien direct avec le Head of AI, pour optimiser la gestion des articles XML via un moteur de comparaison intelligent."],
      tasks: [
        "Analyse sémantique du DOM d’articles scientifiques au format XML",
        "Conception d’algorithmes sur mesure pour détecter les variations significatives entre versions.",
        "Réduction de la complexité algorithmique en capitalisant sur les invariants structurels.",
        "Contribution à une boucle de feedback automatisée entre auteurs et rédacteurs.",
      ],
      result: ["Amélioration des perfs, préparation à l’intégration full-stack dans la chaîne éditoriale", "contribution à une thèse doctorale et validation académique avec mention excellent"],
      technologies: ["Java", "XML", "DOM", "Structures algorithmiques avancées"],
      reference: [{ name: "Dr. Milos Cuculovic", role: "Head of AI R&D" }],
      // layout: { marginBottom: 60 }
    }
  ],
  skills: [
    {
      category: "Stack technique & architecture SaaS",
      skills: [
        { name: "React.js / Next.js · TypeScript · Node.js / NestJS · PostgreSQL / Prisma · TailwindCSS · Supabase · Express.js · GitHub Actions · Docker · Vercel / AWS", emphasis: "normal" },
        // { name: "React.js", emphasis: "normal" },
        // { name: "TypeScript", emphasis: "normal" },
        // { name: "TailwindCSS, HTML5", emphasis: "normal" },
        // { name: "Node.js, NestJS, Express.js", emphasis: "normal" },
        // { name: "PostgreSQL, Prisma, Supabase", emphasis: "normal" },
      ]
    },
    {
      category: "Pratiques Dev & Delivery",
      skills: [
        { name: "CI/CD (GitHub Actions, staging, tests unitaires de base)", emphasis: "normal" },
        { name: "Refonte de code legacy, modularisation, dette technique", emphasis: "normal" },
        // { name: "Docker", emphasis: "normal" },
        { name: "Scalabilité, modularité, optimisation de performance", emphasis: "normal" },
      ]
    },
    {
      category: "Leadership & Management",
      skills: [
        { name: "Onboarding & mentoring de devs junior/senior", emphasis: "normal" },
        { name: "Participation au recrutement et cadrage technique des besoins", emphasis: "normal" },
        { name: "Encadrement fonctionnel et transmission des bonnes pratiques", emphasis: "normal" },
      ]
    },
    {
      category: "Vision produit & Leadership",
      skills: [
        { name: "Stratégie MVP to Scale · Collaboration CEO/CTO", emphasis: "italic" },
        { name: "Alignement tech/produit/business · Backlog et priorisation", emphasis: "italic" },
        // { name: "Structuration d'équipes techniques agiles (Scrum)", emphasis: "italic" },
        // { name: "Alignement tech & produit avec business", emphasis: "italic" },
      ]
    },
    {
      category: "Langues",
      skills: [
        { name: "Francais : Bilingue", emphasis: "italic" },
        { name: "Anglais : Professionnel", emphasis: "italic" },
        // { name: "Arabe : Maternel", emphasis: "italic" },
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
