import { CVData } from "../types/struct";

export const mockBA: CVData = {
  name: "Hamid BASSAM",
  position: "Business Analyst IT - Assurance & Banque",
  location: "Paris, France",
  email: "hamid.bassam.147@gmail.com",
  phone: "07 XX XX XX XX",
  // linkedin: "linkedin.com/in/hamid-bassam",
  summary: "5 ans d’expérience en gestion de projet technico-fonctionnel & digitalisation bancaire.",
  experiences: [
    {
      position: "Senior Business Analyst - Banque & Assurance",
      company: "Client confidentiel - Banque de Financement",
      project: "Implémentation de la réglementation Solvabilité II et IFRS 17",
      dates: "Jan 2023 - Aujourd'hui",
      location: "Mission Freelance",
      tasks: [
        "Pilotage de l'implémentation des exigences réglementaires pour évaluer la solvabilité des actifs financiers.",
        "Réalisation de l'analyse fonctionnelle et élaboration des spécifications techniques.",
        "Coordination avec les équipes IT pour la mise en place de nouveaux modules de reporting financier.",
        "Animation d'ateliers métier et recueil des besoins des départements risques et conformité.",
        "Accompagnement au changement et formation des utilisateurs finaux."
      ],
      technologies: ["SQL", "Power BI", "Tableau", "Jira", "Confluence", "BPMN", "UML"]
    },
    {
      position: "Business Analyst IT - Digitalisation et CRM bancaire",
      company: "Inetum - Client : Banque de détail",
      project: "Refonte du parcours client & CRM dans le cadre de la directive DSP2",
      dates: "Mar 2021 - Déc 2022",
      location: "Paris, France",
      tasks: [
        "Analyse des besoins et définition du backlog produit pour l’amélioration de l’expérience client.",
        "Spécification des exigences fonctionnelles et suivi des développements Agile.",
        "Implémentation d'un nouveau CRM basé sur Salesforce, assurant une meilleure gestion des interactions clients.",
        "Mise en conformité avec la directive DSP2 sur les paiements digitaux.",
        "Conduite du changement et formation des équipes internes sur l’utilisation du nouvel outil."
      ],
      technologies: ["Salesforce", "Power BI", "Jira", "Confluence", "Agile/Scrum"]
    },
    {
      position: "Consultant Business Analyst - Risk Management & Reporting",
      company: "Timelapps - Client : Banque Privée",
      project: "Automatisation des reportings risques et conformité bancaire",
      dates: "Nov 2019 - Fév 2021",
      location: "Paris, France",
      tasks: [
        "Mise en place d'un tableau de bord de suivi des risques financiers conformes aux exigences Bâle III.",
        "Définition des indicateurs clés (KPI) pour le suivi des performances et de la rentabilité des investissements.",
        "Coordination avec les architectes IT et équipes Data pour automatiser les processus de reporting.",
        "Intégration de nouveaux flux de données pour améliorer la qualité des informations collectées.",
        "Déploiement d’un modèle prédictif pour optimiser les stratégies d’investissement."
      ],
      technologies: ["Power BI", "SQL", "Python", "Tableau", "SAS"]
    }
  ],
  skills: [
    {
      category: "Fonctionnelles", skills: [
        { name: "Gestion de projet IT en Banque & Assurance", emphasis: "bold" },
        { name: "Business Analysis", emphasis: "bold" },
        { name: "CRM bancaire", emphasis: "bold" },
        { name: "Gestion des risques financiers", emphasis: "bold" },
        { name: "Reporting réglementaire", emphasis: "bold" },

        { name: "Conduite du changement", emphasis: "italic" },
        { name: "Formation des utilisateurs", emphasis: "italic" },
        { name: "Gestion de la relation client", emphasis: "italic" },
        { name: "Gestion des exigences métier", emphasis: "italic" },
        { name: "Analyse des processus métier", emphasis: "italic" },
        { name: "Modélisation des données", emphasis: "italic" },
        { name: "Documentation fonctionnelle", emphasis: "italic" },
        { name: "Rédaction de spécifications techniques", emphasis: "italic" },
        // "Conception de solutions digitales",
        // "Analyse des besoins", 
        // "UML, 
        // BPMN",
        //  "Transformation digitale bancaire", 
        //  "Réglementations financières (Solvabilité II, Bâle III, IFRS 17, DSP2)"
      ]
    },
    {
      category: "Techniques", skills: [
        { name: "SQL", emphasis: "bold" },
        { name: "Python", emphasis: "bold" },
        { name: "Power BI", emphasis: "bold" },
        { name: "Tableau", emphasis: "bold" },
        { name: "Salesforce CRM", emphasis: "italic" },
        { name: "Jira", emphasis: "italic" },
        { name: "Automatisation des workflows", emphasis: "italic" },


      ]
    }
  ],
  certifications: [
    { title: "Certification Scrum Master", year: "2023", issuer: "Scrum.org" },
    { title: "Formation IFRS 17 & Reporting Réglementaire", year: "2022", issuer: "Banque de France" },
    { title: "Google Data Analytics Certification", year: "2021", issuer: "Google" }
  ],
  education: [
    {
      degree: "Diplôme d'Ingénieur Informatique & Réseaux",
      school: "ENSISA Mulhouse",
      year: "2016 - 2019"
    }
  ],
  tools: ["SQL", "Power BI", "Tableau", "Excel avancé", "Jira", "Salesforce"],
  softSkills: ["Leadership", "Communication interfonctionnelle", "Autonomie", "Esprit analytique"],
  regulations: ["Solvabilité II", "Bâle III", "IFRS 17", "DSP2"],
  languages: [
    { name: "Français", level: "Bilingue" },
    { name: "Anglais", level: "Professionnel" },
    { name: "Arabe", level: "Maternel" }
  ],
  contact: {
    email: "hamid.bassam.147@gmail.com",
    phone: "07 XX XX XX XX",
    location: "Paris, France"
  }
};
