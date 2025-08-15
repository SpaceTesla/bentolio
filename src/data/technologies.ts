import {
  LuSparkles,
  LuMonitor,
  LuFigma,
  LuServer,
  LuDatabase,
  LuCloud,
  LuHammer,
} from 'react-icons/lu';

export interface Technology {
  label: string;
  text: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const technologies: Technology[] = [
  { label: 'Sparkles', text: 'Next.js', icon: LuSparkles },
  { label: 'Monitor', text: 'React', icon: LuMonitor },
  { label: 'Sparkles', text: 'TypeScript', icon: LuSparkles },
  { label: 'Figma', text: 'Figma', icon: LuFigma },
  { label: 'Monitor', text: 'JavaScript', icon: LuMonitor },
  { label: 'Sparkles', text: 'Tailwind CSS', icon: LuSparkles },
  { label: 'Server', text: 'Express.js', icon: LuServer },
  { label: 'Server', text: 'Node.js', icon: LuServer },
  { label: 'Server', text: 'Python', icon: LuServer },
  { label: 'Server', text: 'Go', icon: LuServer },
  { label: 'Sparkles', text: 'PostgreSQL', icon: LuSparkles },
  { label: 'Database', text: 'MySQL', icon: LuDatabase },
  { label: 'Database', text: 'Supabase', icon: LuDatabase },
  { label: 'Database', text: 'MongoDB', icon: LuDatabase },
  { label: 'Database', text: 'Firebase', icon: LuDatabase },
  { label: 'Cloud', text: 'AWS', icon: LuCloud },
  { label: 'Cloud', text: 'Cloudflare', icon: LuCloud },
  { label: 'Hammer', text: 'Docker', icon: LuHammer },
];

// Individual technology exports for flexible usage
export const getTechnologyByText = (text: string): Technology | undefined => {
  return technologies.find((tech) => tech.text === text);
};

export const getTechnologiesByLabel = (label: string): Technology[] => {
  return technologies.filter((tech) => tech.label === label);
};
