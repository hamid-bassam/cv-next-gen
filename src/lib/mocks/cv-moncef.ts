import { CVData } from "../types/struct";

export const mockData: CVData = {
  name: "Moncef",
  position: "Business Analyst / Product Owner",
  location: "Paris, France",
  email: "moncef.exemple@gmail.com",
  phone: "+33 6 XX XX XX XX",
  experiences: [
    {
      position: "Strategic Project Manager",
      company: "BforBank & CACEIS",
      dates: "Jan 2024 - Aujourd'hui",
      tasks: [
        "Analyse et recommandations de business case pour des projets stratégiques",
        "POC IA générative sur reporting financiers (Llama2, GPT, LangChain)",
        "Analyse et refonte des parcours assurances MRH",
        "Suivi du plan stratégique de deux entités bancaires",
      ],
    },
    {
      position: "Senior IT Business Analyst",
      company: "Banque des territoires - Taxonomie Verte",
      dates: "Mai 2022 - Décembre 2023",
      tasks: [
        "Déploiement de la réglementation européenne taxonomie verte",
        "Collecte et transformation des données ESG",
        "Mise en place des cas d'usages Data pour la durabilité des actifs financiers",
        "Coordination avec les parties prenantes : Architectes, Chefs de projet, Product Owner",
      ],
    },
    {
      position: "Project Manager / Business Analyst",
      company: "Banque de détail",
      dates: "Mai 2019 - Mai 2022",
      tasks: [
        "Déploiement d'un parcours d'accueil numérique avec reconnaissance faciale",
        "Mise en place d'un CRM Salesforce",
        "Conduite des stand-up meetings et mise à jour Kanban",
      ],
    },
  ],
  skills: [
    "Rédaction de spécifications fonctionnelles",
    "Animation d'ateliers métiers & recueil des besoins",
    "Gestion du backlog Agile & SAFe",
    "Analyse de Business Case et cadrage stratégique",
    "Coordination de la recette fonctionnelle et validation des tests",
    "Pilotage du déploiement produit et suivi KPI",
  ],
  tools: ["JIRA", "Figma", "Tableau (BI)", "Python", "Deep Learning / Keras", "LangChain", "LLM AI"],
  certifications: [
    "Google UX Design Professional Certificate - 2023",
    "Generative AI with Large Language Models - 2023",
    "Scrum Master Certification - 2023",
    "Deep Learning Specialization - 2020",
  ],
  education: [
    {
      degree: "MSc in Artificial Intelligence",
      school: "École Centrale Paris",
      year: "2018",
    },
    {
      degree: "Engineering Degree",
      school: "École Centrale Paris",
      year: "2015 - 2018",
    },
  ],
  softSkills: ["Esprit critique", "Forte autonomie", "Esprit d'équipe", "Esprit d’initiative"],
  regulations: ["GDPR", "5ème directive européenne LCB-FT", "MIFID II", "Directive MICA (crypto-actifs)"],
};
