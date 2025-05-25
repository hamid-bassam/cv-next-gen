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
export const mock_cv_tech_product_english: CVData = {
  name: "Hamid Bassam",
  position: "Product-Focused Fullstack Developer — SaaS · 5+ Years of Experience",
  location: "Strasbourg",
  email: "hamid.bassam.147@gmail.com",
  phone: "+33 7 49 88 73 49",
  linkedin: "https://www.linkedin.com/in/hamid-bassam-802334207/",
  showSide: true,
  summary: "Product-minded fullstack developer with a strong startup culture. I help founders structure, scale, and align their web platforms with business goals.",
  endQuote: "De l’esprit de jeu à l’esprit d’équipe, des terrains de volley aux lignes de code : ce qui m’anime, c’est l’envie de structurer, d’élever, de transmettre. Le reste, c’est une question d’outils.",
  experiences: [


    {
      position: "Product Developer / Freelance",
      company: "Tickie (Station F)",
      dates: "June 2024 – February 2025",
      description: [
        "Event-tech startup building a modular suite for sports, cultural, and B2B professionals"
      ],
      tasks: [
        "Took over a legacy codebase with significant technical debt: strategic refactor and quality uplift.",
        "Redesigned the architecture to be modular, scalable, and maintainable long-term.",
        "Streamlined partner onboarding by reducing friction points and aligning tech with product workflows.",
        "Worked closely with the founders to prioritize technical efforts in line with business roadmaps."
      ],
      result: [
        "Stabilized platform, smoother partner experience, accelerated product launch."
      ],
      technologies: [
        "Next.js",
        "React.js",
        "TypeScript",
        "Prisma",
        "PostgreSQL",
        "TailwindCSS",
        "AWS"
      ],
      reference: [
        {
          name: "Nidhal Sabbah",
          role: "CTO"
        }
      ],
      layout: {
        marginTop: 20
      }
    }

    ,

    {
      position: "Tech Product Lead / Freelance",
      company: "Ecohesens (Station F)",
      dates: "January 2024 – June 2024",
      description: [
        "Corporate wellness startup transitioning into a personalized gift box e-commerce platform."
      ],
      tasks: [
        "Designed and developed a full-featured e-commerce MVP: box configuration system, email automation, and admin dashboard.",
        "Led functional scoping, tech stack decisions, and rapid validation cycles.",
        "Integrated the Shopify Storefront API (GraphQL) to sync products, manage carts, and track orders.",
        "Collaborated closely with the CEO and marketing team to refine purchase flows and optimize the UX.",
        "Built a modular, high-performance, and scalable tech foundation tailored for fast growth.",
        "Provided strategic support on the business model and long-term technical roadmap."
      ],
      result: [
        "Delivered the MVP on time, validated first orders, achieved a smooth and personalized UX, and improved operational efficiency."
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
      reference: [
        {
          name: "Marina Benomar",
          role: "CEO"
        }
      ],
      layout: {
        marginBottom: 40,
        marginTop: 40
      }
    }

    ,
    {
      position: "Tech Lead / Fullstack",
      company: "Inetum Strasbourg",
      dates: "March 2023 – December 2023",
      description: [
        "Technical lead on a web application for managing charity events (Sport Solid’R), in direct collaboration with business stakeholders.",
        "> Architecture, mentoring, and project continuity."
      ],
      tasks: [
        "Analyzed client needs, designed the database schema, and implemented both frontend and backend logic.",
        "Established a robust, state-centric architecture to support functional evolution and simplify maintenance.",
        "Mentored and upskilled a diverse team of developers (2 to 10 years of experience): best practices, turnover management, and project continuity ensured.",
        "Led functional workshops, wrote user stories, and estimated technical workload.",
        "Acted as a bridge between the project team, end-users, and Inetum management."
      ],
      result: [
        "Stable delivery despite high turnover, strong technical foundation, and fluid communication between tech and business stakeholders."
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
      reference: [
        {
          name: "Paul Claude",
          role: "Business Manager"
        }
      ],
      layout: {
        marginBottom: 30,
        marginTop: 20
      }
    }

    ,
    {
      position: "Product Tech Lead",
      company: "Timelapps — Paris 13 (Station F)",
      dates: "November 2019 – January 2023",
      description: [
        "> Legal SaaS | Modular Architecture & GDPR Compliance",
        "End-to-end development of a legal SaaS platform for lawyers, including an advanced PDF editor for managing sensitive case files (GDPR)."
      ],
      tasks: [
        "Led the full design and development of a legal SaaS from scoping to production deployment.",
        "Implemented a modular and secure architecture built for scalability and GDPR compliance.",
        "Delivered pixel-perfect UI based on Figma designs using HTML/SCSS/Tailwind, following a UX-first approach (modals, lazy loading).",
        "Built a powerful document management interface (PDF) with drag-and-drop, merging/splitting pages, and undo/redo functionality, boosting user productivity.",
        "Made strategic technical decisions on stack, deployment, and security, while coordinating with the founders on product priorities.",
        "Maintained full autonomy over deliverables, timelines, product vision, and technical quality."
      ],
      result: [
        "Validated by lawyer test users, GDPR-compliant platform, increased productivity, and a strong foundation for scale-up."
      ],
      technologies: [
        "React.js",
        "Node.js",
        "NestJS",
        "Redux Toolkit",
        "Supabase",
        "AWS"
      ],
      reference: [
        {
          name: "Sofiane Henock",
          role: "CEO"
        }
      ],
      layout: {
        marginTop: 10,
      }
    },

    {
      position: "Java Developer (Master's Thesis Internship)",
      company: "MDPI (Basel, Switzerland)",
      dates: "February 2019 – July 2019",
      description: [
        "Designed an intelligent comparison engine for scientific XML articles.",
        "> Project supervised by the Head of AI — interdisciplinary collaboration with editorial teams."
      ],
      tasks: [
        "Performed advanced semantic analysis of the DOM structure in XML scientific documents.",
        "Optimized algorithms by leveraging structural invariants and domain-specific heuristics to significantly reduce complexity.",
        "Contributed to an automated feedback loop between editors-in-chief and authors, preparing the system for full integration into the publishing workflow.",
        "Worked in a demanding, multicultural environment in direct contact with the strategic AI division."
      ],
      result: [
        "Improved performance, reduced computation costs, and minimized manual review time; groundwork for full-stack integration into the editorial pipeline.",
        "Contributed to a PhD thesis and received academic validation with highest honors."
      ],
      technologies: [
        "Java",
        "XML",
        "DOM",
        "Advanced Algorithmic Structures"
      ],
      reference: [
        {
          name: "Dr. Milos Cuculovic",
          role: "Head of AI R&D"
        }
      ],
      layout: {
        marginBottom: 20,
      }
    }

  ],
  skills: [
    {
      category: "Web Platform Development",
      skills: [
        { name: "Next.js | React.js | TypeScript | TailwindCSS", emphasis: "normal" },
        { name: "Node.js, NestJS, Express.js", emphasis: "normal" },
        { name: "PostgreSQL, Prisma, Supabase", emphasis: "normal" }
      ]
    },
    {
      category: "Scalable Architecture & DevOps",
      skills: [
        { name: "AWS, Vercel (cloud-native)", emphasis: "normal" },
        { name: "GitHub Actions, Docker", emphasis: "normal" },
        { name: "Scalability, modularity, performance optimization", emphasis: "normal" }
      ]
    },
    {
      category: "API Design & Tooling",
      skills: [
        { name: "GraphQL (Shopify Storefront API)", emphasis: "normal" },
        { name: "OpenAPI, Swagger (API documentation)", emphasis: "normal" },
        { name: "REST API structuring & versioning", emphasis: "normal" }
      ]
    },
    {
      category: "Infrastructure as Code & Automation",
      skills: [
        { name: "Custom DSL for Kubernetes (Xtext)", emphasis: "normal" },
        { name: "YAML schema generation & validation", emphasis: "normal" },
        { name: "Kubernetes (intermediate, in active progress)", emphasis: "italic" }
      ]
    },
    {
      category: "Security & Compliance",
      skills: [
        { name: "GDPR & access control", emphasis: "normal" },
        { name: "Authentication, permissions", emphasis: "normal" },
        { name: "AWS S3 Buckets", emphasis: "normal" }
      ]
    },
    {
      category: "Product Thinking & Leadership",
      skills: [
        { name: "MVP-to-Scale strategy", emphasis: "italic" },
        { name: "Technical mentoring & coaching", emphasis: "italic" },
        { name: "Agile team structuring (Scrum)", emphasis: "italic" },
        { name: "Product/tech/business alignment", emphasis: "italic" }
      ]
    },
    {
      category: "Languages",
      skills: [
        { name: "French: Bilingual", emphasis: "italic" },
        { name: "English: Professional proficiency", emphasis: "italic" }
      ]
    }
  ],


  certifications: [],
  education: [
    {
      degree: "Master's Degree in Computer Science and Networks (Engineering Diploma)",
      school: "ENSISA, Mulhouse, France",
      year: "2019"
    }
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
      title: "K8s DSL with Xtext",
      description: "Development of a custom domain-specific language (DSL) to simplify Kubernetes infrastructure declarations. The DSL was built using Xtext and is designed to help product teams abstract and manage deployment complexity.",
      features: [
        "Custom grammar defined in Xtext",
        "Automatic generation of valid Kubernetes YAML manifests",
        "Contextual validation and autocompletion features"
      ],
      technologies: ["Xtext", "Kubernetes", "YAML", "Java"],
      images: [
      ]
    },




    {
      title: "Time Tracking SaaS",
      description: "Development of a productivity-focused time tracking platform, designed to help users monitor performance and optimize daily flow.",
      images: [
        { src: tfl.src, alt: "Time Tracking", display: "desktop" },
        { src: tfm.src, alt: "Time Tracking Mobile", display: "mobile" },
        { src: tfc.src, alt: "Time Tracking Calendar", display: "desktop" },
        { src: tfi.src, alt: "Time Tracking Insight", display: "desktop" }
      ],
      impact: [
        "Productivity gain of +20%",
        "Reduction of passive time by +50%",
        "Optimized task organization",
        "Improved time management",
        "Increased self-awareness and clarity"
      ],
      // layout: { marginBottom: 30 },
      right: { height: 152 }
    },
    {
      title: "Apply Flow",
      description: "SaaS for tech profiles, designed to streamline and optimize the application process.",
      features: [
        "Application management",
        "Live interview toolkit",
        "CV generator"
      ],
      technologies: ["Next.js", "Prisma", "vercel", "PostgreSQL"],
      images: [
        { src: af.src, alt: "Apply Flow", display: "desktop" }
      ]
    },

    {
      title: "Personal Portfolio",
      description: "Personal portfolio to showcase my skills and side projects. QR code for easy access.",
      technologies: ["Next.js", "PostgreSQL", "Prisma", "i18n"],
      images: [
        { src: portfolio.src, alt: "portfolio", display: "desktop" }
      ],
      splitAll: true,
      // layout: { marginBottom: 40 }
    },
    {
      title: "Hbal Trbah",
      description: "Hbal Trbah is more than a platform — it's a mindset. Designed to push the limits of creativity and ambition, it blends art, technology, and storytelling. It embodies the journey of those who dare to challenge norms, turn failure into opportunity, and continuously seek inspiration to grow.",
      images: [
        { src: hbaltrbah.src, alt: "hbaltrbah", display: "desktop" }
      ],
      splitAll: true,
      invert: true,
      // right: { height: 130 },
      // layout: { marginBottom: 20 }
    }


  ],
  showHobbies: true,
  hobbies: [
    {
      name: "Sports Leadership",
      description: "President & coach of the ENSISA volleyball club (2019–2022). Climbed from Division 4 to Division 2 in the Alsace corporate league. Team management, growth mindset, and strategic structuring.",
      iconUrl: volley.src
    },
    {
      name: "Coaching & Mentoring",
      description: "Tennis coach for children (ages 11–14). Mental and technical training. Multiple tournament wins. Pedagogy, discipline, and kindness.",
      iconUrl: tennis.src
    },
    {
      name: "Music & Live Performance",
      description: "Self-taught guitarist. Open mics, galas, bars, and jam sessions. Freeform emotional exploration, improvisation, and live presence.",
      iconUrl: music.src
    },
    {
      name: "Early Adventures",
      description: "Ran a half-marathon at age 14. Reached the summit of Mount Toubkal (4,167 m) at age 11. Endurance and self-challenge.",
      iconUrl: aventure.src
    }
  ],



  contact: {
    email: "hamid.bassam.147@gmail.com",
    phone: "+33 7 49 88 73 49",
    location: "Paris, France",
  },
};


