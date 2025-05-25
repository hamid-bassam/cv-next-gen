import af from "@/app/_components/assets/img/af.png";
import hbaltrbah from "@/app/_components/assets/img/capture hbal trbah.png";
import portfolio from "@/app/_components/assets/img/capture portfolio desktop.png";
import aventure from "@/app/_components/icons/aventurier.png";
import music from "@/app/_components/icons/guitare-electrique.png";
import tennis from "@/app/_components/icons/tennis.png";
import volley from "@/app/_components/icons/volley-ball.png";
import { CVData } from "../types/struct";

export const mock_cv_junior_python_en: CVData = {
  name: "Hamid Bassam",
  position: "Fullstack Developer · curious & structured · 2.5 years of experience",

  location: "Paris",
  email: "hamid.bassam.147@gmail.com",
  phone: "+33 7 49 88 73 49",
  linkedin: "https://www.linkedin.com/in/hamid-bassam-802334207/",
  showSide: true,
  summary: "Fullstack developer with a product mindset. I focus on impact, move with teams, and build simple & solid — always aligned with real needs.",
  endQuote: "I build products. The first one is me — modular, evolving, already useful… and well versioned.",
  experiences: [
    {
      position: "Product Engineer | MVP / Freelance",
      company: "Ecohesens (Station F)",
      dates: "June 2024 – February 2025",
      description: [
        "Corporate wellness startup pivoting to a personalized gift box e-commerce platform."
      ],
      tasks: [
        "Fast scoping & lean prioritization during the strategic pivot.",
        "Structured and delivered a complete e-commerce MVP with key automations.",
        "Seamless integration with Shopify Storefront API (GraphQL): API autonomy & composable logic.",
        "Rapid iterations, technical foundation designed for scalability (Next.js + Prisma).",
        "Trained a junior PM: simplifying tools, agile structure, and critical thinking.",
        "Contributed to the business roadmap: tech as a product enabler.",
        "Proactive mindset: clear communication, ownership without formal authority."
      ],
      result: [
        "MVP delivered on time, orders validated, smooth customer journey.",
        "Operational efficiency improved.",
        "High trust from CEO, quick team ramp-up.",
        "Emerging technical leadership, product vision, and impact-oriented delivery."
      ],
      technologies: [
        "Next.js",
        "React.js",
        "TypeScript",
        "TailwindCSS",
        "Prisma",
        "GraphQL",
        "PostgreSQL",
        "Vercel"
      ],
      layout: { marginBottom: 0, marginTop: 20 },
      reference: [{ name: "Marina Benomar", role: "CEO" }]
    },
    {
      position: "Junior Tech Lead / Fullstack Developer",
      company: "Inetum Strasbourg / Sport Solid’R",
      dates: "October 2023 – May 2024",
      description: [
        "Web app for managing solidarity sports events.",
        "> Architecture, mentoring, and technical continuity."
      ],
      tasks: [
        "Contributed to the functional & visual redesign of a race management module: registrations, user profiles, and stat views.",
        "Client needs analysis and direct communication with PO & client to clarify use cases and set priorities.",
        "Mentored a heterogeneous team (2–10 years XP): POCs, turnover management, and project continuity support.",
        "Facilitated functional workshops, wrote user stories, and estimated tech loads.",
        "Coordinated stakeholders (product, dev, client) and contributed to clear handover documentation."
      ],
      result: [
        "Improved platform stability, simplified flows, and smooth user adoption.",
        "Team strengthened through skill transfer and project stabilization."
      ],
      technologies: [
        "TypeScript",
        "React.js",
        "Redux",
        "TailwindCSS",
        "C#",
        "ASP.Net",
        "SQL Server"
      ],
      layout: { marginBottom: 0, marginTop: 20 },
      reference: [{ name: "Paul Claude", role: "Customer Success Manager" }]
    },

    {
      position: "Fullstack Developer",
      company: "Timelapps Paris 13 (Station F)",
      dates: "July 2022 – October 2023",
      description: [
        "> Legal SaaS | Modular architecture & GDPR compliance",
        "Built a legal SaaS from scratch for lawyers, featuring an advanced PDF editor for managing sensitive case files (GDPR)."
      ],
      tasks: [
        "Designed and implemented an advanced PDF editing system: visual page handling, drag-and-drop, merge/split, smooth navigation.",
        "Built a contextual undo/redo system to protect user actions during critical operations.",
        "Pixel-perfect UI integration from Figma (HTML/SCSS/Tailwind), with UX-first logic (modals, lazy load).",
        "Developed with a strong UX focus: streamlined experience for legal users (clarity, responsiveness, intuitiveness).",
        "Worked closely with the CEO & legal advisors to ensure business alignment and domain accuracy.",
        "Served as the CTO’s technical right-hand: architectural decisions, tech stack choices, priority management."
      ],
      result: [
        "Robust UI used in production, praised for its simplicity despite legal complexity.",
        "Secure production deployment, with progressive rollout of advanced features."
      ],
      technologies: [
        "React.js",
        "Node.js",
        "NestJS",
        "Redux Toolkit",
        "Supabase",
        "AWS (S3)"
      ],
      reference: [{ name: "Nidhal SABBAH", role: "CTO" }],
      layout: { marginBottom: 0, marginTop: 20 }
    },

    {
      position: "Java Developer (Graduation Internship)",
      company: "MDPI (Basel, Switzerland)",
      dates: "February 2022 – July 2022",
      description: [
        "Optimization of an internal tool for comparing scientific articles in XML format.",
        "> Supervised by the Head of AI – interdisciplinary collaboration with editorial teams."
      ],
      tasks: [
        "Studied advanced parsing algorithms to improve semantic matching of scientific XML articles (peer review context).",
        "Implemented matching logic based on DOM structure and hierarchical document content.",
        "Optimized algorithmic complexity to reduce processing time on large corpora.",
        "Maintained high semantic integrity of the analyzed documents throughout the process."
      ],
      result: [
        "Significant performance improvement of the internal tool, better clarity for editorial teams.",
        "First exposure to a demanding tech/data environment, with strong autonomy from the first weeks.",
        "Contributed to a PhD thesis, academically validated with honors."
      ],
      technologies: [
        "Java",
        "XML",
        "DOM",
        "Git",
        "Tree-structured algorithms"
      ],
      layout: { marginBottom: 0, marginTop: 30 },
      reference: [{ name: "Dr. Milos Cuculovic", role: "Head of AI R&D" }]
    }
  ],
  skills: [
    {
      category: "Web Platform Development",
      skills: [
        {
          name: "React.js | Next.js | TypeScript | TailwindCSS",
          emphasis: "normal", // production-ready front-end stack
        },
        {
          name: "NestJS | Express (basic)",
          emphasis: "normal", // structured backend, REST APIs
        },
        {
          name: "Prisma | PostgreSQL | Supabase",
          emphasis: "normal", // solid ORM, structured backend data use
        },
        {
          name: "Python (personal use: time tracking & data parsing)",
          emphasis: "normal",
        },
        {
          name: "Structured data handling (JSON, CSV)",
          emphasis: "normal",
        },
        {
          name: "Vercel | AWS (S3) | GitHub Actions",
          emphasis: "normal",
        }
      ]
    },
    {
      category: "Architecture & Product",
      skills: [
        {
          name: "Lean MVPs, modular structuring",
          emphasis: "normal",
        },
        {
          name: "Smooth UX, polished DX",
          emphasis: "normal",
        },
        {
          name: "Simple solutions to complex problems",
          emphasis: "normal",
        },
        {
          name: "Data-aware mindset, strong product cadence",
          emphasis: "normal",
        }
      ]
    },
    {
      category: "Soft Skills & Mindset",
      skills: [
        {
          name: "Team-first & horizontal leadership",
          emphasis: "normal",
        },
        {
          name: "Clear communication & active listening",
          emphasis: "normal",
        },
        {
          name: "Continuous learning & growth mindset",
          emphasis: "normal",
        },
        {
          name: "Clean execution, long-term reliability",
          emphasis: "normal",
        }
      ]
    },
    {
      category: "Languages",
      skills: [
        {
          name: "Arabic: Native | French: Bilingual | English: Professional",
          emphasis: "normal",
        }
      ]
    }
  ],
  education: [
    {
      degree: "Master’s Degree in Computer Science and Networks (Engineering Diploma)",
      school: "ENSISA, Mulhouse – France",
      year: "2022"
    }
  ],
  certifications: [],
  tools: [],
  softSkills: [],
  regulations: [],
  projects: [
    {
      title: "Hbal Trbah",
      description: "Personal platform in progress. Goal: to build a living brand where my tech projects align with a deeper personal journey.",
      tasks: [
        "Mental challenge, self-improvement, and the craft of continuous progression.",
        "Connecting disciplines (tech, sports, music, language, introspection).",
        "Ambition to create a hybrid space: tech + content + inspiration.",
        "(Reels, articles, key concepts, long-term projects...)"
      ],
      images: [{ src: hbaltrbah.src, alt: "hbaltrbah", display: "desktop" }],
      invert: true,
      right: { height: 130 },
      layout: { marginBottom: 40 },
    }
    ,
    {
      title: "Apply Flow",
      description: "Development of a SaaS platform for tech candidate management, designed to streamline and optimize the job application process.",
      features: [
        "Application tracking system",
        "Interview preparation toolkit",
        "CV generator"
      ],
      technologies: ["Next.js", "Prisma", "Vercel", "PostgreSQL"],
      images: [
        { src: af.src, alt: "Apply Flow", display: "desktop" }
      ],
      layout: { marginBottom: 20 },
    },
    {
      title: "Personal Portfolio",
      description: "A portfolio website to showcase my skills and projects.",
      technologies: ["Next.js", "Shadcn UI", "TailwindCSS", "i18n", "Vercel"],
      images: [{ src: portfolio.src, alt: "portfolio", display: "desktop" }],
      splitAll: true,
      layout: { marginBottom: 40 }
    },
  ],
  showHobbies: true,
  hobbies: [
    {
      name: "Sports Leadership",
      description: "President & coach of the ENSISA volleyball club (2019–2022). Led the team from Division 4 to Division 2 in the Alsace corporate championship. Team management, growth mindset, and strategic structuring.",
      iconUrl: volley.src,
      bullet: [
        "President & coach of ENSISA volleyball club (2019–2022): promotion from D4 to D2 in the Alsace corporate league.",
        "Built a collective dynamic with a mid-term progression strategy.",
        "Cultivated feedback culture, supported individual growth, managed egos and enhanced potential."
      ]
    },
    {
      name: "Coaching & Mentoring",
      description: "Tennis coach for children (ages 11–14). Mental & technical training. Several tournament wins. Emphasis on pedagogy, discipline, and kindness.",
      iconUrl: tennis.src,
      bullet: [
        "Tennis coach for children (11–14). Mental and technical preparation. Multiple tournament victories.",
        "Teaching through fun and structure — blending discipline with encouragement."
      ]
    },
    {
      name: "Music & Live Performance",
      description: "Self-taught guitarist. Performed in open mics, galas, bars, and jam sessions. Free exploration of musical emotion, improvisation, and stage presence.",
      iconUrl: music.src,
      bullet: [
        "Self-taught guitarist. Performed in open stages, galas, bars, and jam sessions.",
        "Passion for structured improvisation, live presence, and emotional connection through music."
      ]
    },
    {
      name: "Early Personal Challenges",
      description: "Completed a half marathon at 14. Climbed Mount Toubkal (4,167m) at 11. Endurance, clarity, and personal growth through effort.",
      iconUrl: aventure.src,
      bullet: [
        "Half-marathon at age 14. Mount Toubkal summit (4,167m) at age 11.",
        "Driven by meaningful effort, personal challenge, and a search for clarity through action."
      ]
    }
  ],

  contact: {
    email: "hamid.bassam.147@gmail.com",
    phone: "+33 7 49 88 73 49",
    location: "Paris, France",
  },




};