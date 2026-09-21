export type CategoryType = 'All' | 'Full-Stack' | 'AI/ML' | 'Web Development' | 'DevOps';

export interface Project {
  id: string;
  title: string;
  category: 'Full-Stack' | 'AI/ML' | 'Web Development' | 'DevOps';
  categories?: ('Full-Stack' | 'AI/ML' | 'Web Development' | 'DevOps')[];
  shortDescription: string;
  detailedDescription: string;
  technologies: string[];
  metrics: string;
  featured?: boolean;
  githubUrl: string;
  liveDemoUrl: string;
  caseStudyId?: string;
  architectureDiagram?: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  summary: string;
  role: string;
  timeline: string;
  status: string;
  technologies: {
    frontend: string[];
    backend: string[];
    database: string[];
    devops: string[];
  };
  problemStatement: string;
  objectives: string[];
  architectureNodes: {
    name: string;
    description: string;
    type: 'client' | 'gateway' | 'app' | 'cache' | 'database' | 'queue';
  }[];
  developmentWorkflow: string[];
  codeSnippet: {
    filename: string;
    language: string;
    code: string;
    explanation: string;
  };
  challenges: {
    challenge: string;
    solution: string;
  }[];
  tradeOffs: {
    decision: string;
    chosen: string;
    tradeOff: string;
  }[];
  outcomes: {
    metric: string;
    label: string;
    detail: string;
  }[];
  githubUrl: string;
  liveDemoUrl: string;
}

export interface SkillCategory {
  name: string;
  icon: string;
  skills: {
    name: string;
    proficiency: 'Advanced' | 'Proficient' | 'Familiar';
    tag?: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  title: string;
  organization: string;
  period: string;
  type: 'Internship' | 'Open Source' | 'Leadership';
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
}

export interface EducationInfo {
  degree: string;
  institution: string;
  period: string;
  status: string;
  gpa: string;
  honors: string[];
  coursework: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
  verificationUrl: string;
  credentialId?: string;
}

export interface Article {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  synopsis: string;
  excerpt: string;
  tags: string[];
  featured?: boolean;
  codeSnippet?: {
    language: string;
    code: string;
  };
}
