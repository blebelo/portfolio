export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location?: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  qualification: string;
  specialty?: string;
  period?: string;
  highlights: string[];
}

export interface ProjectItem {
  id: string;
  name: string;
  summary: string;
  problem: string;
  solution: string;
  stack: string[];
  features: string[];
  challenges?: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface ChatPromptSuggestion {
  id: string;
  label: string;
  prompt: string;
}
