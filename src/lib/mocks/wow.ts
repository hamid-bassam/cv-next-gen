import af from "@/app/_components/assets/img/af.png";
import hbaltrbah from "@/app/_components/assets/img/capture hbal trbah.png";
import portfolio from "@/app/_components/assets/img/capture portfolio desktop.png";
import tfc from "@/app/_components/assets/img/capture tfa calendar.png";
import tfi from "@/app/_components/assets/img/capture tfa insight.png";
import tfm from "@/app/_components/assets/img/capture time forge tel.png";
import tfl from "@/app/_components/assets/img/capture time forge.png";
import aventure from "@/app/_components/icons/aventurier.png";
import music from "@/app/_components/icons/guitare-electrique.png";
import tennis from "@/app/_components/icons/tennis.png";
import volley from "@/app/_components/icons/volley-ball.png";
import { CVData } from "../types/struct";
export const mock_cv_baback: CVData = {
  name: "Hamid Bassam",
  position: "Tech Lead Produit — Next.js / Node.js — MVP to Scale",
  location: "Paris",
  email: "hamid.bassam.147@gmail.com",
  phone: "+33 7 49 88 73 49",
  linkedin: "https://www.linkedin.com/in/hamid-bassam-802334207/",
  showSide: true,
  // portfolio: "https://bassams.fr/",
  // summary: "Ingénieur produit avec une expertise éprouvée en développement full-stack, architecture scalable et leadership technique. Mon approche pragmatique et data-driven me permet d'optimiser l'impact business des produits tout en assurant performance et scalabilité.",
  // summary: "Tech Lead produit avec une forte culture startup, j’accompagne les fondateurs dans la structuration de leur plateforme web : audit technique, refonte d’architecture, sécurisation, MVP, puis montée en charge. Je combine expertise Next.js / Node.js avec une capacité à piloter le produit comme un co-fondateur tech, en garantissant une base solide et évolutive pour l’équipe.",
  // summary: "Tech Lead produit avec une forte culture startup, j’accompagne les fondateurs dans l’audit, la refonte et la montée en charge de leur plateforme web. Vision produit, rigueur technique et posture de cofondateur au service d’une base solide et scalable.",
  summary: "Tech lead produit avec culture startup et vision produit. J'accompagne les fondateurs dans l'audit, la refonte et la montée en charge de leur plateforme web.",
  endQuote: "De l’esprit de jeu à l’esprit d’équipe, des terrains de volley aux lignes de code : ce qui m’anime, c’est l’envie de structurer, d’élever, de transmettre. Le reste, c’est une question d’outils.",
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
      dates: "Juin 2024 - Fevrier 2025",
      description: [
        "Startup événementielle proposant une suite modulaire pour les professionnels du sport, de la culture et du B2B (CRM, billetterie, fan experience...).",
      ],
      // "> Architecture cloud-native & onboarding fluide"],
      tasks: [
        "Reprise d’un code existant avec dette technique élevée : audit complet, refacto stratégique et montée en qualité.",
        "Refonte de l’architecture pour la rendre modulaire, scalable et facilement maintenable.",
        "Optimisation des parcours d’intégration partenaires : réduction des frictions et alignement produit/tech.",
        "Collaboration avec les fondateurs pour cadrer les priorités tech en lien avec la roadmap business.",
      ],
      // result: ["Plateforme stabilisée", "expérience partenaire fluidifiée", "lancement produit accéléré sans blocage technique."],
      result: [
        "Plateforme stabilisée, expérience partenaire fluidifiée, lancement produit accéléré sans blocage technique.",
      ],
      technologies: [
        "Next.js",
        "React.js",
        "Typescript",
        "Prisma",
        "PostgreSQL",
        "TailwindCSS",
        "Sentry",
        "AWS",
      ],

      reference: [{ name: "Nidhal Sabbah", role: "CTO" }],
      layout: { marginBottom: 60 },
    },
    {
      position: "Responsable Produit Tech / Freelance",
      company: "Ecohesens (Station F)",
      dates: "Janvier 2024 à Juin 2024",
      description: [
        "Startup bien-être en entreprise, pivotant vers un modèle de vente de coffrets personnalisés via une plateforme e-commerce.",
        "Création d’un MVP e-commerce sur mesure, en lien direct avec la CEO et les équipes marketing : cadrage fonctionnel, choix technos, cycles courts de validation.",
      ],
      tasks: [
        "Développement des 3 piliers du produit :",
        "Gestion des coffrets personnalisés,",
        "Automatisation des emails transactionnels,",
        "Dashboard admin intuitif pour piloter les commandes.",
        "Mise en place d’une base technique stable et évolutive (Next.js, Prisma, PostgreSQL) pour permettre l’itération rapide du produit.",
        "Accompagnement stratégique sur le business model et la roadmap technique.",
      ],
      result: [
        "MVP e-commerce livré dans les temps, produit validé auprès des premiers utilisateurs, gains clairs sur l’efficacité opérationnelle.",
      ],
      technologies: [
        "Next.js",
        "React.js",
        "Typescript",
        "TailwindCSS",
        "Prisma",
        "Graphql",
        "PostgreSQL",
        "TailwindCSS",
        "Vercel",
      ],
      reference: [{ name: "Marina Benomar", role: "CEO" }],
    },
    {
      position: "Tech Lead / Fullstack",
      company: "Inetum Strasbourg",
      dates: "Mars 2023 - Décembre 2023",
      description: [
        "Pilotage technique d’une application web pour la gestion d’événements solidaires (Sport Solid’R), en lien avec les parties prenantes métier.",
        "> Architecture, mentoring et continuité technique",
      ],
      tasks: [
        "Analyse des besoins clients, conception de la base de données et mise en œuvre front/back.",
        "Mise en place d’une architecture state centic robuste pour absorber les évolutions fonctionnelles et faciliter la maintenance.",
        "Encadrement et montée en compétences d’une équipe de développeurs hétérogènes (2 à 10 ans d’expérience) : transmission de bonnes pratiques, gestion du turnover, sécurisation de la continuité projet.",
        "Animation des ateliers fonctionnels, rédaction des user stories, estimation des charges techniques",
        "Interface entre l’équipe projet, les utilisateurs finaux, et le management Inetum.",
      ],
      result: [
        "Livraison stable dans un contexte de turnover, solidité du socle technique, fluidité des échanges entre tech et métier.",
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
      reference: [{ name: "Paul Claude", role: "Business Manager" }],
      layout: { marginBottom: 60 },
    },
    {
      position: "Tech Lead Produit",
      company: "Timelapps Paris 13 (Station F)",
      dates: "Novembre 2019 - Janvier 2023",
      description: [
        "> SaaS juridique | Architecture modulaire & RGPD",
        "Développement from scratch d’un SaaS juridique à destination des avocats, avec un éditeur PDF avancé pour la gestion de dossiers sensibles (RGPD).",
      ],
      tasks: [
        "Conception et pilotage complet d’un SaaS destiné aux avocats, depuis la phase de cadrage jusqu’au déploiement en production.",
        "Mise en place d’une architecture modulaire et sécurisée, pensée pour la scalabilité et la conformité RGPD dans un contexte sensible.",
        "Intégration UI pixel-perfect depuis Figma (HTML/SCSS/Tailwind), logique UX-first (modale, lazy load)",
        "Développement d’une interface avancée de gestion documentaire (PDF) avec drag-and-drop, fusion, séparation de pages et système undo/redo, augmentant la productivité utilisateur.",
        "Réalisation des choix stratégiques techniques (stack, déploiement, sécurité), tout en coordonnant avec les fondateurs sur les priorités fonctionnelles.",
        "Autonomie totale sur les livrables, le planning, la vision produit et la qualité.",
      ],
      result: [
        "Expérience fluide validée par les avocats testeurs, plateforme conforme RGPD, Productivité augmentée,base solide pour le scale-up.",
      ],
      technologies: [
        "React.js",
        "Node.js",
        "NestJS",
        "Redux Toolkit",
        "Supabase",
        "AWS",
      ],
      reference: [{ name: "Sofiane Henock", role: "CEO" }],
    },
    {
      position: "Développeur Java (Stage PFE)",
      company: "MDPI (Bâle, Suisse)",
      dates: "Février 2019 - Juillet 2019",
      description: [
        "Conception d’un moteur de comparaison intelligent pour articles scientifiques XML",
        "> Projet encadré par le Head of AI – collaboration interdisciplinaire avec les équipes éditoriales",
      ],
      tasks: [
        "Analyse sémantique avancée du DOM",
        "Optimisation algorithmique : réduction notable de la complexité en capitalisant sur des invariants structuraux et des heuristiques adaptées aux formats scientifiques.",
        "Contribution à la boucle de feedback automatisée entre rédacteur en chef et auteurs (préparation à une intégration plus large dans le workflow d’édition scientifique).",
        "Évolution dans un environnement international, exigeant et multiculturel, en lien direct avec le pôle d’IA stratégique de l’entreprise.",
      ],
      result: [
        "Amélioration des perfs, réduction des coûts de calcul, réduction du temps de revue manuelle, préparation à l’intégration full-stack dans la chaîne éditoriale",
        "contribution à une thèse doctorale et validation académique avec mention excellent",
      ],
      technologies: [
        "Java",
        "XML",
        "DOM",
        "Structures algorithmiques avancées",
      ],
      reference: [{ name: "Dr. Milos Cuculovic", role: "Head of AI R&D" }],
      layout: { marginBottom: 60 },
    },
  ],
  skills: [
    {
      category: "Construction de plateformes web",
      skills: [
        {
          name: "Next.js | React.js | TypeScript | TailwindCSS",
          emphasis: "normal",
        },
        // { name: "React.js", emphasis: "normal" },
        // { name: "TypeScript", emphasis: "normal" },
        // { name: "TailwindCSS, HTML5", emphasis: "normal" },
        { name: "Node.js, NestJS, Express.js", emphasis: "normal" },
        { name: "PostgreSQL, Prisma, Supabase", emphasis: "normal" },
      ],
    },
    {
      category: "Architecture scalable & DevOps",
      skills: [
        { name: "AWS, Vercel (cloud-native)", emphasis: "normal" },
        { name: "GitHub Actions, Docker", emphasis: "normal" },
        // { name: "Docker", emphasis: "normal" },
        {
          name: "Scalabilité, modularité, optimisation de performance",
          emphasis: "normal",
        },
      ],
    },
    {
      category: "Sécurité & Conformité",
      skills: [
        { name: "RGPD & sécurisation des accès", emphasis: "normal" },
        { name: "Authentification, Permissions", emphasis: "normal" },
        { name: "AWS S3 Buckets", emphasis: "normal" },
      ],
    },
    {
      category: "Vision produit & Leadership",
      skills: [
        { name: "Stratégie MVP to Scale", emphasis: "italic" },
        { name: "Mentorat & coaching technique", emphasis: "italic" },
        {
          name: "Structuration d'équipes techniques agiles (Scrum)",
          emphasis: "italic",
        },
        { name: "Alignement tech & produit avec business", emphasis: "italic" },
      ],
    },
    {
      category: "Langues",
      skills: [
        { name: "Francais : Bilingue", emphasis: "italic" },
        { name: "Anglais : Professionnel", emphasis: "italic" },
        // { name: "Arabe : Maternel", emphasis: "italic" },
      ],
    },
  ],
  certifications: [],
  education: [
    {
      degree: "Diplôme d'Ingénieur en Informatique et Réseaux",
      school: "ENSISA, Mulhouse",
      year: "2019",
    },
    {
      degree: "AZ-900: Microsoft Azure Fundamentals",
      school: "Microsoft",
      year: "2023",
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
      layout: { marginBottom: 40, marginTop: 40 },
    },
    {
      title: "Time Tracking SaaS",
      description:
        "Développement d’un SaaS de gestion du temps et productivité permettant un suivi optimisé des performances.",
      images: [
        { src: tfl.src, alt: "Time Tracking", display: "desktop" },
        { src: tfm.src, alt: "Time Tracking Mobile", display: "mobile" },
        { src: tfc.src, alt: "Time Tracking Calendar", display: "desktop" },
        { src: tfi.src, alt: "Time Tracking Insight", display: "desktop" },
      ],
      layout: { marginBottom: 80 },
      right: { height: 152, },
    },

    {
      title: "Portfolio personnel",
      description:
        "Portfolio personnel pour présenter mes compétences et mes projets",
      technologies: ["Next.js", "PostgreSQL", "Prisma", "i18n"],
      images: [{ src: portfolio.src, alt: "portfolio", display: "desktop" }],
      // right: { height: 100 },
      splitAll: true,
      layout: { marginBottom: 40 }

    },
    {
      title: "Hbal Trbah",
      description: "Hbal Trbah est bien plus qu’une plateforme : c’est un état d’esprit. Conçue pour repousser les limites de la créativité et de l’ambition, elle mélange l’art, la technologie et le storytelling. Elle incarne le voyage de ceux qui osent défier les normes, transformer les échecs en opportunités et constamment chercher l’inspiration pour évoluer.",
      images: [{ src: hbaltrbah.src, alt: "hbaltrbah", display: "desktop" }],
      splitAll: true,
      invert: true,
      right: { height: 130 },
      layout: { marginBottom: 20 }


    },



    // {
    //   title: "Tailwind-Gen-AI",
    //   description:
    //     "Application Next.js intégrant le SDK Vercel et les librairies OpenAI pour convertir les prompts utilisateurs en pages web responsives. Utilise Tailwind CSS pour un design élégant et adaptatif.",
    //   technologies: ["Next.js", "PostgreSQL", "Prisma"],
    // },
    // {
    //   title: "DoFlex",
    //   description:
    //     "Gestion d'objectif sous forme de mindmap. En cours de contruction, DoFlex permettra de visualiser et de gérer ses objectifs personnels et professionnels de manière intuitive et efficace.",
    //   technologies: ["Next.js", "PostgreSQL", "Prisma"],
    // },
  ],
  showHobbies: true,
  hobbies: [
    {
      name: "Leadership sportif",
      description: "Président & coach du club volley ENSISA (2019–2022). Ascension de D4 à D2 en championnat corporate Alsace. Management d’équipe, esprit de progression, structuration stratégique.",
      iconUrl: volley.src
    },
    {
      name: "Coaching & transmission",
      description: "Entraîneur de tennis pour enfants (11–14 ans). Formation mentale & technique. Plusieurs trophées remportés en tournoi. Pédagogie, rigueur et bienveillance.",
      iconUrl: tennis.src
    },
    {
      name: "Musique & scène",
      description: "Guitariste autodidacte. Scènes ouvertes, galas, bars et jam-sessions. Exploration libre de l’émotion musicale, improvisation et présence live.",
      iconUrl: music.src
    },
    {
      name: "Quelques traits d'enfance",
      description: "Semi marathon à 14 ans. Ascension du Toubkal à 11 ans. Endurance et dépassement de soi.",
      iconUrl: aventure.src
    },
  ],

  awards: [
    {
      title: "Champion Régional de Scrabble",
      year: "2008-2009-2010(Score Max)",
      issuer: "Fédération Nationale de Scrabble",
    },
    {
      title: "Champion du maroc de Volleyball cathégorie cadet",
      year: "2011",
      issuer: "Fédération Royale Marocaine de Volleyball",
    },
  ],
  contact: {
    email: "hamid.bassam.147@gmail.com",
    phone: "+33 7 49 88 73 49",
    location: "Paris, France",
  },
};




// {data.showSide && data.projects && data.projects.length > 0 && (
//   <View style={styles.section}>
//     <View style={styles.titleContainer}>
//       <Image src={xp.src} style={styles.titleIcon} />
//       <Text style={styles.title}>Side Project – Baback</Text>
//     </View>

//     <View style={styles.sideCard}>
//       {/* Bloc gauche : texte */}
//       <View style={styles.sideText}>
//         <Text style={styles.jobTitle}>Baback Return Flow (Exploration perso)</Text>
//         <Text style={styles.date}>Mars 2025 – Présent</Text>
//         <Text style={styles.text}>
//           Simulation d’un système de gestion automatisée des échanges et retours e-commerce, basé sur l’architecture de Baback.
//         </Text>
//         <Text style={styles.listItem}>• Retour ↔ Ré-achat ↔ Carte cadeau</Text>
//         <Text style={styles.listItem}>• Flux métier warehouse & marchands</Text>
//         <Text style={styles.listItem}>• Simulation multi-plateformes (pas seulement Shopify)</Text>
//         <Text style={[styles.text, styles.italic]}>
//           Stack : Nest.js, React, GraphQL, MongoDB, Tailwind, Prisma
//         </Text>
//       </View>

//       {/* Bloc droit : image */}
//       <View style={styles.sideImage}>
//         <Image src={af.src} style={styles.projectScreenshot} />
//       </View>
//     </View>
//   </View>
// )}
