export type ProjectLinkSet = {
  github?: string;
  blog?: string;
  publication?: string;
};

export type ProjectSection = {
  heading: string;
  content: string;
};

export type Project = {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  role: string;
  timeline: string;
  status: string;
  featured: boolean;
  technologies: string[];
  heroImage?: string;
  problem: string;
  impact: string;
  sections: ProjectSection[];
  links: ProjectLinkSet;
  tags: string[];
  category: string;
};