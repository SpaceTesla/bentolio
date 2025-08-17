// src/types/hackathon.ts

export interface Hackathon {
  achievement: string; // Winner, Runner Up, etc.
  hackathonName: string;
  type: string; // hackathon, ideathon, etc.
  duration: string; // e.g., "48 hours", "24 hours"
  institution: string; // college/organization that conducted it
  image: string; // path to hackathon image
  link: string; // URL to hackathon or project
}
