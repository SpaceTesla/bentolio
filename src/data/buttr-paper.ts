import { Deliverable } from '../types/deliverable';
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiReact,
  SiPostgresql,
  SiVercel,
  SiHostinger,
} from 'react-icons/si';
import { LuGlobe, LuGithub } from 'react-icons/lu';

const buttrPaper: Deliverable = {
  projectName: 'Buttr Paper',
  links: [
    { logo: LuGlobe, link: 'https://www.buttrpaper.com' },
    { logo: LuGithub, link: 'https://github.com/SpaceTesla/buttr' },
  ],
  description:
    'A brand website for a sustainable paper manufacturing and retail company',
  images: ['/images/buttr-paper-1.png'],
  techStack: [
    { name: 'Next.js', logo: SiNextdotjs },
    { name: 'Tailwind CSS', logo: SiTailwindcss },
    { name: 'TypeScript', logo: SiTypescript },
    { name: 'React', logo: SiReact },
    { name: 'PostgreSQL', logo: SiPostgresql },
    { name: 'Vercel', logo: SiVercel },
    { name: 'Hostinger', logo: SiHostinger },
  ],
  client: {
    name: 'Naman Gupta',
    designation: 'CEO @ Code Effort Private Limited',
    testimonial: 'Great attention to detail in every aspect of the build.',
    rating: 5,
  },
};

export default buttrPaper;
