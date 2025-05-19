// src/types/deliverable.ts
import { ComponentType, SVGProps } from 'react';

export interface TechStackItem {
  logo: ComponentType<SVGProps<SVGSVGElement>>; // React component for the icon
  name: string;
}

export interface Link {
  logo: ComponentType<SVGProps<SVGSVGElement>>; // React component for the icon
  link: string;
}

export interface Client {
  name: string;
  designation: string;
  testimonial: string;
  rating: number;
  link?: string;
}

export interface Deliverable {
  projectName: string;
  links: Link[];
  description: string;
  images: string[];
  techStack: TechStackItem[];
  client: Client;
}
