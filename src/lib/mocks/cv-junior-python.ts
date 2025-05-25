import af from "@/app/_components/assets/img/af.png";
import hbaltrbah from "@/app/_components/assets/img/capture hbal trbah.png";
import portfolio from "@/app/_components/assets/img/capture portfolio desktop.png";
import aventure from "@/app/_components/icons/aventurier.png";
import music from "@/app/_components/icons/guitare-electrique.png";
import tennis from "@/app/_components/icons/tennis.png";
import volley from "@/app/_components/icons/volley-ball.png";
import { CVData } from "../types/struct";
export const mock_cv_junior_python: CVData = {
  name: "Hamid Bassam",
  position: " Développeur Fullstack · curieux & structuré · 2,5 ans d’expérience",

  location: "Paris",
  email: "hamid.bassam.147@gmail.com",
  phone: "+33 7 49 88 73 49",
  linkedin: "https://www.linkedin.com/in/hamid-bassam-802334207/",
  showSide: true,
  summary: "Dev fullstack, esprit produit. Je pense impact, j’avance en équipe, et je construis simple & solide — toujours au service du besoin réel.",
  endQuote: "Je construis des produits. Le premier, c’est moi. Modulable, évolutif, déjà utile —           et bien versionné.",
  experiences: [


    {
      position: "Ingénieur produit | MVP / Freelance",
      company: "Ecohesens (Station F)",
      dates: "Juin 2024 à Février 2025",
      description: [
        "Startup bien-être en entreprise, pivotant vers un modèle de vente de coffrets personnalisés via une plateforme e-commerce.",
      ],
      tasks: [
        "Cadrage rapide & priorisation lean lors du pivot stratégique de la startup.",
        "Structuration & delivery d’un MVP e-commerce complet, avec automatisations clés.",
        "Intégration fluide de Shopify Storefront (GraphQL) : autonomie API + logique composable.",
        "Itérations rapides, base technique pensée pour l’évolutivité (Next.js + Prisma).",
        "Formation d’une cheffe de projet : vulgarisation, structuration agile, recul sur outils.",
        "Contribution à la roadmap business : tech comme levier produit.",
        "Posture proactive : décision, communication claire, responsabilité sans statut formel."
      ],
      result: [
        "MVP livré dans les temps, commandes validées, parcours client fluide.",
        "Gain de temps sur la partie operationnelle.",
        "Confiance forte de la CEO, montée rapide de l’équipe projet.",
        "Orientation leadership technique, vision produit et livrable à impact",
      ],
      technologies: [
        "Next.js",
        "React.js",
        "Typescript",
        "TailwindCSS",
        "Prisma",
        "Graphql",
        "PostgreSQL",
        "Vercel",
      ],
      reference: [{ name: "Marina Benomar", role: "CEO" }],
    },
    {
      position: "Tech Lead Junior / Fullstack",
      company: "Inetum Strasbourg / Sport Solid’R",
      dates: "Octobre 2023 - Mai 2024",
      description: [
        "Développement d’une application web pour la gestion d’événements sportifs solidaires",
        "> Architecture, mentoring et continuité technique",
      ],
      tasks: [
        "Participation à la refonte fonctionnelle & visuelle d’un module d’organisation de courses : gestion des inscriptions, profils utilisateurs, vues statistiques.",
        "Analyse du besoin client, communication directe avec PO & Client  pour clarifier les cas d’usage et structurer les priorités.",
        "Encadrement et montée en compétences d’une équipe de développeurs hétérogènes (2 à 10 ans d’expérience) : POCs, gestion du turnover, sécurisation de la continuité projet.",
        "Animation des ateliers fonctionnels, rédaction des user stories, estimation des charges techniques",
        "Coordination entre les parties prenantes (fonctionnel, dev, client) et contribution à une documentation claire pour la passation.",
      ],
      result: [
        "Meilleure stabilité de la plateforme, simplification des parcours, adoption fluide côté utilisateur",
        "Renforcement de l’équipe via transmission des compétences & stabilisation du projet.",
      ],
      technologies: [
        "Typescript",
        "React.js",
        "Redux",
        "TailwindCSS",
        "C#",
        "ASP.Net",
        "SQL Server",
      ],
      reference: [{ name: "Paul Claude", role: "Customer Success Manager" }],
      // layout: { marginBottom: 50, marginTop: 20 },
    },
    {
      position: "Développeur Fullstack",
      company: "Timelapps Paris 13 (Station F)",
      dates: "Juillet 2022 - Octobre 2023",
      description: [
        "> SaaS juridique | Architecture modulaire & RGPD",
        "Développement from scratch d’un SaaS juridique à destination des avocats, avec un éditeur PDF avancé pour la gestion de dossiers sensibles (RGPD).",
      ],
      tasks: [
        "Conception & implémentation d’un système d’édition de PDF avancé : manipulation visuelle des pages, drag-and-drop, séparation/fusion, navigation fluide.",
        "Mise en place d’un système de undo/redo contextuel pour sécuriser l’expérience utilisateur, même sur opérations sensibles.",
        "Intégration UI pixel-perfect depuis Figma (HTML/SCSS/Tailwind), logique UX-first (modale, lazy load)",
        "Développement avec un focus UX fort : optimisation de l’expérience côté avocat (fluidité, lisibilité, actions intuitives).",
        "Collaboration étroite avec le CEO & avocats référents pour assurer la conformité métier et répondre aux vrais besoins du terrain.",
        "Bras droit technique du CTO : prise de décision sur l’architecture, choix technologiques, et gestion des priorités.",
      ],
      result: [
        "Une interface robuste, utilisée en conditions réelles, avec des feedbacks positifs sur la simplicité d’usage malgré la complexité métier.",
        "Mise en production sécurisée, montée progressive du niveau fonctionnel.",
      ],
      technologies: [
        "React.js",
        "Node.js",
        "NestJS",
        "Redux Toolkit",
        "Supabase",
        "AWS (S3)",
      ],
      reference: [{ name: "Nidhal SABBAH", role: "CTO" }],
      layout: { marginBottom: 0, marginTop: 0 },
    },
    {
      position: "Développeur Java (Stage PFE)",
      company: "MDPI (Bâle, Suisse)",
      dates: "Février 2022 - Juillet 2022",
      description: [
        "Optimisation d’un outil interne de comparaison d’articles scientifiques au format XML.",
        "> Projet encadré par le Head of AI – collaboration interdisciplinaire avec les équipes éditoriales",
      ],
      tasks: [
        "Étude d’algorithmes de parsing avancé pour améliorer la précision des comparaisons sémantiques d’articles XML (recherche scientifique, peer review).",
        "Mise en place d’une logique de matching basée sur la structure DOM et le contenu hiérarchisé des documents.",
        "Optimisation de la complexité algorithmique pour réduire le temps de traitement sur corpus massif.",
        "Rigueur attendue dans la conservation de l’intégrité sémantique des documents analysés.",

      ],
      result: [
        "Amélioration significative des performances de l’outil interne, meilleure lisibilité des résultats pour les éditeurs scientifiques.",
        "Première immersion dans un environnement tech/data exigeant, avec un niveau d’autonomie élevé dès les premières semaines.",
        "contribution à une thèse doctorale et validation académique avec mention excellent",
      ],
      technologies: [
        "Java",
        "XML",
        "DOM",
        "Git",
        "Algorithmes sur structures arborescentes"
      ],
      reference: [{ name: "Dr. Milos Cuculovic", role: "Head of AI R&D" }],
    },
  ],
  skills: [
    {
      category: "Construction de plateformes web",
      skills: [
        {
          name: "React.js | Next.js | TypeScript | TailwindCSS",
          emphasis: "normal", // stack front en prod
        },
        {
          name: "NestJS | Express (notions)",
          emphasis: "normal", // backend structuré, APIs REST
        },
        {
          name: "Prisma | PostgreSQL | Supabase",
          emphasis: "normal", // ORM solide, usage back data structuré
        },
        {
          name: "Python (usage personnel : time tracking & data parsing)",
          emphasis: "normal",
        },
        {
          name: "Manipulation de données structurées (JSON, CSV)",
          emphasis: "normal",
        },
        {
          name: "Vercel | AWS (S3) | GitHub Actions",
          emphasis: "normal",
        },
      ]
    },
    {
      category: "Architecture & Produit",
      skills: [
        {
          name: "MVP lean, structuration modulaire",
          emphasis: "normal",
        },
        {
          name: "UX fluide, DX soignée",
          emphasis: "normal",
        },
        {
          name: "Résolution simple de problèmes complexes",
          emphasis: "normal",
        },
        {
          name: "Approche data-aware, sens du rythme produit",
          emphasis: "normal",
        }
      ]
    },
    {
      category: "Soft Skills & Posture",
      skills: [
        {
          name: "Team-first & leadership horizontal",
          emphasis: "normal",
        },
        {
          name: "Communication claire & écoute active",
          emphasis: "normal",
        },
        {
          name: "Avidité d’apprentissage & amélioration continue",
          emphasis: "normal",
        },
        {
          name: "Exécution propre, fiabilité dans la durée",
          emphasis: "normal",
        }
      ]
    },
    {
      category: "Langues",
      skills: [
        {
          name: "Arabe: Maternelle | Français: Bilingue | Anglais: Pro",
          emphasis: "normal",
        },
      ]
    }
  ],
  certifications: [],
  education: [
    {
      degree: "Diplôme d'Ingénieur en Informatique et Réseaux",
      school: "ENSISA, Mulhouse",
      year: "2022",
    },
  ],
  tools: ["Docker", "Kubernetes", "Git", "Vercel"],
  softSkills: ["Leadership", "Collaboration", "Résolution de problèmes"],
  regulations: ["RGPD", "Normes de sécurité Cloud"],
  languages: [
    { name: "Français", level: "Natif" },
    { name: "Anglais", level: "Courant (TOEIC B2)" },
    { name: "Arabe", level: "Maternelle" },
  ],
  projects: [
    {
      title: "Hbal Trbah",
      description: "Plateforme personnelle en construction \nObjectif : créer une marque vivante, où mes projets tech s’inscrivent dans une trajectoire personnelle profonde.",
      tasks: [
        "Challenge mental, dépassement de soi, art de la progression continue.",
        "Connexion entre disciplines (tech, sport, musique, langage, introspection)",
        "Ambition de créer un espace hybride : tech + contenu + inspiration",
        "(Reels, articles, idées structurantes, projets à suivre…)",

      ],
      images: [{ src: hbaltrbah.src, alt: "hbaltrbah", display: "desktop" }],
      invert: true,
      right: { height: 130 },


    },
    {
      title: "Apply Flow",
      description: " Développement d’un SaaS de gestion de candidatures pour les profils tech, permettant de fluidifier et d’optimiser le processus de recrutement.",
      features: [
        "Gestion des candidatures",
        "Toolkit pour entretiens",
        "Générateur de CV",
      ],
      technologies: ["Next.js", "Prisma", "vercel", "PostgreSQL"],


      images: [
        { src: af.src, alt: "Apply Flow", display: "desktop" },
      ],
    },

    {
      title: "Portfolio personnel",
      description:
        "Portfolio personnel pour présenter mes compétences et mes projets",
      technologies: ["Next.js", "Shadcn-ui", "TailwindCSS", "i18n", "Vercel"],
      images: [{ src: portfolio.src, alt: "portfolio", display: "desktop" }],
      splitAll: true,
      layout: { marginBottom: 40 }

    },

  ],
  showHobbies: true,
  hobbies: [
    {
      name: "Leadership sportif",
      description: "Président & coach du club volley ENSISA (2019–2022). Ascension de D4 à D2 en championnat corporate Alsace. Management d’équipe, esprit de progression, structuration stratégique.",
      iconUrl: volley.src,
      bullet: [
        "Président & coach du club volley ENSISA (2019–2022) : montée de D4 à D2 en championnat corporate Alsace.",
        "Construction d’une dynamique collective, mise en place d’une stratégie de progression à moyen terme.",
        "Culture du feedback, accompagnement des profils, gestion des égos & valorisation du potentiel."
      ]
    },
    {
      name: "Coaching & transmission",
      description: "Entraîneur de tennis pour enfants (11–14 ans). Formation mentale & technique. Plusieurs trophées remportés en tournoi. Pédagogie, rigueur et bienveillance.",
      iconUrl: tennis.src,
      bullet: [
        "Entraîneur de tennis pour enfants (11–14 ans). Formation mentale & technique. Plusieurs trophées remportés en tournoi.",
        "Pédagogie, rigueur et bienveillance : apprendre à progresser en s'amusant, tout en gagnant."
      ]
    },
    {
      name: "Musique & scène",
      description: "Guitariste autodidacte. Scènes ouvertes, galas, bars et jam-sessions. Exploration libre de l’émotion musicale, improvisation et présence live.",
      iconUrl: music.src,
      bullet: [
        "Guitariste autodidacte. Scènes ouvertes, galas, bars et jam-sessions.",
        "Goût de l’improvisation maîtrisée, de la présence live, de la connexion avec l’auditoire.",
      ]
    },
    {
      name: "Quelques traits d'enfance",
      description: "Semi marathon à 14 ans. Ascension du Toubkal à 11 ans. Endurance et dépassement de soi.",
      iconUrl: aventure.src,
      bullet: [
        "Semi marathon à 14 ans. Ascension du Toubkal à 11 ans.",
        "Recherche d’effort utile, de dépassement personnel & de clarté intérieure.",
      ]
    },
  ],


  contact: {
    email: "hamid.bassam.147@gmail.com",
    phone: "+33 7 49 88 73 49",
    location: "Paris, France",
  },
};


