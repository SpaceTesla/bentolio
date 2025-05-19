import { Deliverable } from '@/types/deliverable';
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiReact,
  SiPostgresql,
  SiVercel,
  SiHostinger,
  SiCockroachlabs,
  SiCloudflare,
} from 'react-icons/si';
import { LuGlobe, LuGithub } from 'react-icons/lu';

const deliverables: Deliverable[] = [
  {
    projectName: 'Buttr Paper',
    links: [
      { logo: LuGlobe, link: 'https://www.buttrpaper.com' },
      { logo: LuGithub, link: 'https://github.com/SpaceTesla/buttr' },
    ],
    description:
      'A brand website for a sustainable paper manufacturing and retail company',
    images: ['/deliverables/buttr/home.png'],
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
  },
  {
    projectName: 'Gimnis Kitchen',
    links: [
      { logo: LuGlobe, link: 'https://www.gimnis.com/' },
      { logo: LuGithub, link: 'https://github.com/SpaceTesla/gimni' },
    ],
    description:
      'A brand website for a sustainable paper manufacturing and retail company',
    images: ['/deliverables/gimni/home.png'],
    techStack: [
      { name: 'Next.js', logo: SiNextdotjs },
      { name: 'Tailwind CSS', logo: SiTailwindcss },
      { name: 'TypeScript', logo: SiTypescript },
      { name: 'React', logo: SiReact },
      { name: 'PostgreSQL', logo: SiPostgresql },
      { name: 'Vercel', logo: SiVercel },
      { name: 'CockroachDB', logo: SiCockroachlabs },
    ],
    client: {
      name: 'Arko Banerjee',
      designation: "Co-Founder @ Gimni's Kitchen",
      testimonial:
        'The website is a great representation of our brand and the quality of our food.',
      rating: 5,
    },
  },
  {
    projectName: 'Code Efforts',
    links: [
      { logo: LuGlobe, link: 'https://www.codeefforts.com/' },
      { logo: LuGithub, link: 'https://github.com/SpaceTesla/code-efforts' },
    ],
    description:
      'A brand website for a sustainable paper manufacturing and retail company',
    images: ['/deliverables/codeefforts/home.jpg'],
    techStack: [
      { name: 'Next.js', logo: SiNextdotjs },
      { name: 'Tailwind CSS', logo: SiTailwindcss },
      { name: 'TypeScript', logo: SiTypescript },
      { name: 'React', logo: SiReact },
      { name: 'PostgreSQL', logo: SiPostgresql },
      { name: 'Cloudflare', logo: SiCloudflare },
    ],
    client: {
      name: 'Naman Gupta',
      designation: 'CEO @ Code Effort Private Limited',
      testimonial:
        "The team delivered an exceptional website that perfectly captures our company's vision and professionalism.",
      rating: 5,
    },
  },
];

export default deliverables;
