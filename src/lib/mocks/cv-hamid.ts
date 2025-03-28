import { CVData } from "../types/struct";

export const mock_cv_hamid: CVData = {
  name: "Hamid Bassam",
  position: "Ingénieur Produit / CTO / Freelance",
  location: "Paris, France",
  email: "hamid.bassam.147@gmail.com",
  phone: "+33 7 49 88 73 49",
  linkedin: "https://www.linkedin.com/in/hamid-bassam",
  summary: "Ingénieur produit avec une expertise éprouvée en développement full-stack, architecture scalable et leadership technique. Mon approche pragmatique et data-driven me permet d'optimiser l'impact business des produits tout en assurant performance et scalabilité.",
  experiences: [
    {
      position: "CTO",
      company: "Académie en ligne",
      dates: "Depuis 2025",
      tasks: [
        "Définition et exécution de la vision technologique",
        "Évaluation des risques et maximisation du ROI des projets",
        "Mise en place d'une infrastructure cloud-native optimisée",
      ],
      technologies: ["Next.js", "Prisma", "PostgreSQL", "AWS"]
    },
    {
      position: "Ingénieur Produit / Freelance",
      company: "Tickie (Station F)",
      dates: "Depuis 2024",
      tasks: [
        "Conception d'une architecture cloud-native robuste et évolutive",
        "Optimisation des performances et réduction de 20% des délais d'intégration",
        "Amélioration du processus d'onboarding et satisfaction des partenaires",
      ],
      technologies: ["Next.js", "Prisma", "PostgreSQL", "TailwindCSS"]
    },
    {
      position: "Ingénieur Produit / Freelance",
      company: "Ecohesens (Station F)",
      dates: "2024",
      tasks: [
        "Création d’un MVP e-commerce intégrant gestion des coffrets, automatisation des emails et dashboard intuitif",
        "Mise en œuvre d'une approche business innovante pour valider les fonctionnalités clés",
        "Optimisation du processus de gestion des commandes et augmentation de l’efficacité opérationnelle",
      ],
      technologies: ["Next.js", "Prisma", "PostgreSQL", "TailwindCSS", "Vercel"]
    },
    {
      position: "Développeur full-stack et Tech Lead",
      company: "Inetum Strasbourg",
      dates: "2023",
      tasks: [
        "Développement d'une application web pour organiser des courses solidaires (Sport Solid'R)",
        "Conception de l'architecture et implémentation technique",
        "Encadrement et mentorat de développeurs pour assurer la montée en compétences et la continuité des projets",
      ],
      technologies: ["C#", "ASP.Net", "SQL Server", "React.js", "Redux"]
    },
    {
      position: "Développeur Full-Stack",
      company: "Timelapps Paris 13 (Station F)",
      dates: "2019 - 2023",
      tasks: [
        "Développement d'un SaaS innovant pour avocats, boostant la productivité de 30%",
        "Mise en place d'une architecture modulaire et évolutive, garantissant scalabilité et pérennité",
        "Conception et implémentation d'une interface avancée de gestion de PDF (drag-and-drop, undo/redo, fusion de documents)",
      ],
      technologies: ["React.js", "Node.js", "NestJS", "Redux Toolkit", "Supabase", "AWS"]
    },
    {
      position: "Développeur Java (Stage PFE)",
      company: "MDPI (Bâle, Suisse)",
      dates: "2019",
      tasks: [
        "Optimisation des comparaisons d'articles XML par une analyse sémantique avancée du DOM",
        "Développement d'algorithmes optimisés pour réduire la complexité computationnelle",
      ],
      technologies: ["Java", "XML", "Spring Boot"]
    }
  ],
  skills: [
    {
      category: "Développement Full-Stack",
      skills: [
        { name: "Next.js", emphasis: "bold" },
        { name: "React.js", emphasis: "bold" },
        { name: "Node.js", emphasis: "bold" },
        { name: "TypeScript", emphasis: "normal" },
        { name: "NestJS", emphasis: "normal" },
        { name: "Prisma", emphasis: "normal" }
      ]
    },
    {
      category: "Architecture & Performance",
      skills: [
        { name: "Cloud-native (AWS, Vercel)", emphasis: "bold" },
        { name: "Scalabilité & Optimisation", emphasis: "bold" },
        { name: "CI/CD (GitHub Actions, Docker)", emphasis: "normal" }
      ]
    },
    {
      category: "Gestion de Projet & Leadership",
      skills: [
        { name: "Scrum & Agilité", emphasis: "italic" },
        { name: "Vision produit & stratégie", emphasis: "bold" },
        { name: "Mentorat & coaching technique", emphasis: "bold" }
      ]
    },
    {
      category: "Sécurité & Conformité",
      skills: [
        { name: "RGPD & Sécurité Cloud", emphasis: "bold" },
        { name: "Auth & Permissions", emphasis: "normal" }
      ]
    }
  ]
  ,
  certifications: [
    {
      title: "AWS Certified Solutions Architect",
      year: "2024",
      issuer: "Amazon AWS"
    }
  ],
  education: [
    {
      degree: "Diplôme d'Ingénieur en Informatique et Réseaux",
      school: "ENSISA, Mulhouse",
      year: "2019"
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
    }
  ],
  awards: [
    {
      title: "Champion Régional de Scrabble",
      year: "2018",
      issuer: "Fédération Nationale de Scrabble"
    }
  ],
  contact: {
    email: "hamid.bassam.147@gmail.com",
    phone: "+33 7 49 88 73 49",
    location: "Paris, France"
  }
};
