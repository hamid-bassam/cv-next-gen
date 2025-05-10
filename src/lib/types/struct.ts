

// Nouvelle structure des types TypeScript pour une flexibilité maximale
export type CVData = {
  name: string;
  position: string;
  location: string;
  email: string;
  phone: string;
  linkedin?: string;
  // portfolio?: string;
  summary?: string | string[];
  endQuote?: string;
  experiences: Experience[];
  skills: SkillSection[];
  certifications: Certification[];
  education: Education[];
  tools: string[];
  softSkills: string[];
  regulations: string[];
  languages?: Language[];
  projects?: Project[];
  awards?: Award[];
  contact?: Contact;
  // hobbies?: { theme: string; hobby: Hobby }[];
  hobbies?: Hobby[];
  showSide?: boolean;
  showHobbies?: boolean;

};

export type Experience = {
  position: string;
  company: string;
  project?: string;
  dates: string;
  location?: string;
  description?: string[];
  mission?: string;
  result?: string[];
  tasks: string[];
  technologies?: string[];
  reference?: { name: string, role: string }[];
  layout?: { [key: string]: any }; // ReactPDF.Style
};

export type SkillSection = {
  category: string;
  skills: { name: string; emphasis?: "bold" | "italic" | "normal" }[];
};

export type Education = {
  degree: string;
  school: string;
  year: string;
  details?: string;
};

export type Certification = {
  title: string;
  year: string;
  issuer: string;
};

export type Language = {
  name: string;
  level: string;
};

export type Project = {
  title: string;
  description: string;
  features?: string[];
  technologies?: string[];
  images?: { src: string; alt: string; display: 'desktop' | 'mobile' }[];
  impact?: string[];
  status?: 'completed' | 'in-progress' | 'abandoned';
  link?: string;
  repository?: string;
  layout?: { [key: string]: any }; // ReactPDF.Style
  right?: { [key: string]: any };
  splitAll?: boolean; // define the layout ( title desc + split or split first )
  splitRatio?: number;
  invert?: boolean;
};

export type Award = {
  title: string;
  year: string;
  issuer: string;
};

export type Contact = {
  email: string;
  phone: string;
  location: string;
};

export type Hobby = {
  name: string;
  description: string;
  iconUrl?: string;
};