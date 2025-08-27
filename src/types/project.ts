// src/types/project.ts
import { ComponentType, SVGProps } from 'react';

export interface TechStackItem {
  logo: ComponentType<SVGProps<SVGSVGElement>>; // React component for the icon
  name: string;
}

export interface Link {
  logo: ComponentType<SVGProps<SVGSVGElement>>; // React component for the icon
  link: string;
  name: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface Project {
  projectName: string;
  startDate: string;
  endDate: string;
  description: string;
  links: Link[];
  images: string[];
  techStack: TechStackItem[];
  team: TeamMember[];
  additional?: string;
}
