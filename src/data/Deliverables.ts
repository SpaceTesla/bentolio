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
      'Buttr Paper is a sustainable paper brand that creates ultra-smooth, tree-free paper by recycling waste like cigarette butts, helping save water, prevent deforestation, and cut carbon emissions. The website highlights the brand’s mission, product benefits, and impact in a minimal, modern, and eco-friendly way.',
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
      'Founded during the Bengali New Year in April 2021 in Horamavu, Bengaluru, Gimni’s Kitchen brings the warmth of authentic home-style Bengali cuisine to food lovers, with early success like serving 400 patrons during Durga Puja and fueling a 130% growth in just 45 days Their website showcases tasty traditional dishes, takeaway and catering options, and invites foodies to “experience the taste of Bengal” simple, soulful, and inviting .',
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
      'Code Efforts is a social enterprise on a mission to turn one of India’s biggest eco-nuisances cigarette butt waste into livelihood-supporting handcrafted products, empowering rural women artisans and promoting a circular economy. Their website highlights this eco-conscious brand story, displays a range of recycled lifestyle goods, and offers partnerships and services that invite individuals globally to contribute to sustainable waste solutions',
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
