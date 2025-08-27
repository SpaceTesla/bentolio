import { Project } from '@/types/project';
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiPython,
  SiFastapi,
  SiFlask,
  SiExpress,
  SiNodedotjs,
  SiMysql,
  SiFirebase,
  SiGooglechrome,
  SiGithub,
  SiGit,
  SiSelenium,
  SiGo,
  SiShadcnui,
  SiStripe,
  SiAmazon,
  SiEjs,
  SiWebpack,
  SiTensorflow,
  SiOpencv,
  SiDocker,
  SiVercel,
  SiMapbox,
  SiSecurityscorecard,
  SiFlutter,
} from 'react-icons/si';
import { LuGlobe, LuGithub, LuMousePointerClick } from 'react-icons/lu';

const projects: Project[] = [
  {
    projectName: 'Payzee',
    startDate: 'Apr 2025',
    endDate: 'May 2025',
    description:
      'Cross-platform, multilingual payment processor powered by Central Bank Digital Currency (CBDC), also known as the Digital Rupee or e₹, targeted towards bringing people above the poverty line.',
    links: [
      {
        logo: LuGithub,
        link: 'https://github.com/alfiyafatima09/payzee_website',
        name: '/alfiyafatima09/payzee_website',
      },
      {
        logo: LuGithub,
        link: 'https://github.com/areebahmeddd/Payzee',
        name: '/areebahmeddd/Payzee',
      },
    ],
    images: ['/projects/payzee.png'], // Placeholder image path
    techStack: [
      { name: 'Python', logo: SiPython },
      { name: 'FastAPI', logo: SiFastapi },
      { name: 'Flutter', logo: SiFlutter },
      { name: 'Firebase', logo: SiFirebase },
      { name: 'Next.js', logo: SiNextdotjs },
      { name: 'Tailwind CSS', logo: SiTailwindcss },
      { name: 'TypeScript', logo: SiTypescript },
      { name: 'JavaScript', logo: SiJavascript },
      { name: 'HTML', logo: SiHtml5 },
      { name: 'CSS', logo: SiCss3 },
    ], // Skills array was empty in original data
    team: [
      {
        name: 'Areeb Ahmed',
        role: 'Backend Development',
        image: '/team/areeb.jpg',
      },
      {
        name: 'Yuktha P S',
        role: 'Backend Development',
        image: '/team/yuktha.jpg',
      },
      {
        name: 'Alfiya Fatima',
        role: 'Frontend Development',
        image: '/team/alfiya.jpg',
      },
    ],
  },
  {
    projectName: 'Mivro: Scan It. Know It.',
    startDate: 'May 2024',
    endDate: 'Dec 2024',
    description:
      'Cross-platform app and web extension for personalized product profiling in food, drink, cosmetic, medicine, and pet food categories.',
    links: [
      {
        logo: LuGlobe,
        link: 'https://mivro.netlify.app/',
        name: 'mivro.netlify.app',
      },
      {
        logo: LuGithub,
        link: 'https://github.com/1MindLabs/mivro-extension',
        name: '/1MindLabs/mivro-extension',
      },
    ],
    images: ['/projects/mivro.png'], // Placeholder image path
    techStack: [
      { name: 'Chrome Extensions', logo: SiGooglechrome },
      { name: 'React.js', logo: SiReact },
      { name: 'HTML', logo: SiHtml5 },
      { name: 'CSS', logo: SiCss3 },
      { name: 'JavaScript', logo: SiJavascript },
      { name: 'Python', logo: SiPython },
      { name: 'Flask', logo: SiFlask },
    ],
    team: [
      {
        name: 'Areeb Ahmed',
        role: 'Backend Development',
        image: '/team/areeb.jpg',
      },
      {
        name: 'Rishi Chirchi',
        role: 'Backend Development',
        image: '/team/rishi.jpg',
      },
    ],
  },
  {
    projectName: 'Hookit!',
    startDate: 'Nov 2024',
    endDate: 'Nov 2024',
    description:
      'ETL-based workflow management system to extract, transform, and load data between sources and the cloud, supporting bidirectional data flow.',
    links: [
      {
        logo: LuGlobe,
        link: 'https://tryhookit.vercel.app/',
        name: 'tryhookit.vercel.app',
      },
      {
        logo: LuGithub,
        link: 'https://github.com/SpaceTesla/hookit-fe',
        name: '/SpaceTesla/hookit-fe',
      },
    ],
    images: ['/projects/hookit.png'], // Placeholder image path
    techStack: [
      { name: 'Next.js', logo: SiNextdotjs },
      { name: 'TypeScript', logo: SiTypescript },
      { name: 'Tailwind CSS', logo: SiTailwindcss },
      { name: 'React.js', logo: SiReact },
      { name: 'Go', logo: SiGo }, // Using Go icon
      { name: 'Shadcn', logo: SiShadcnui }, // Using Shadcn UI icon
      { name: 'Stripe', logo: SiStripe }, // Using Stripe icon for payment
    ],
    team: [
      {
        name: 'Areeb Ahmed',
        role: 'Backend Development',
        image: '/team/areeb.jpg',
      },
      {
        name: 'Somnath Umapathi',
        role: 'Backend Development',
        image: '/team/somnath.jpg',
      },
      {
        name: 'Avantika Kesarwani',
        role: 'Backend Development',
        image: '/team/avantika.jpg',
      },
    ],
  },

  {
    projectName: 'Crypta',
    startDate: 'Aug 2024',
    endDate: 'Sep 2024',
    description:
      'Automated digital forensics and incident response (DFIR) system designed for anomaly detection and pattern recognition across system data and network activity. (Smart India Hackathon 2024)',
    links: [
      {
        logo: LuGlobe,
        link: 'https://crypta.vercel.app/',
        name: 'crypta.vercel.app',
      },
      {
        logo: LuGithub,
        link: 'https://github.com/1MindLabs/crypta-backend',
        name: '/1MindLabs/crypta-backend',
      },
    ],
    images: ['/projects/crypta.png'], // Placeholder image path
    techStack: [
      { name: 'Python', logo: SiPython },
      { name: 'FastAPI', logo: SiFastapi },
      { name: 'Digital Forensics', logo: SiDocker }, // Using Docker icon for security tools
      { name: 'Vulnerability Assessment', logo: SiAmazon },
      { name: 'Yara Rules', logo: SiSecurityscorecard },
      { name: 'Flutter', logo: SiFlutter },
    ],
    team: [
      {
        name: 'Areeb Ahmed',
        role: 'Backend Development',
        image: '/team/areeb.jpg',
      },
      {
        name: 'Avantika Kesarwani',
        role: 'Backend Development',
        image: '/team/avantika.jpg',
      },
      {
        name: 'Shashwat Kumar',
        role: 'Frontend Development',
        image: '/team/shashwat.jpg',
      },
      {
        name: 'Rishi Chirchi',
        role: 'Frontend Development',
        image: '/team/rishi.jpg',
      },
      {
        name: 'Yuktha P S',
        role: 'Machine Learning',
        image: '/team/yuktha.jpg',
      },
    ],
  },
  {
    projectName: 'JuRIDEX - Judicial Records Information and Data Exchange',
    startDate: 'Jun 2024',
    endDate: 'Jul 2024',
    description:
      'A Criminal Database Management System designed to manage and visualize data related to criminal activities. It allows users to track records of crimes, individuals, police officers, court cases, and witnesses. The system includes secure authentication, an interactive dashboard, and map integration to visualize crime locations for better analysis and decision-making.',
    links: [
      {
        logo: LuGithub,
        link: 'https://github.com/SpaceTesla/juridex',
        name: '/SpaceTesla/juridex',
      },
    ],
    images: ['/projects/juridex.png'], // Placeholder image path
    techStack: [
      { name: 'Express.js', logo: SiExpress },
      { name: 'MySQL', logo: SiMysql },
      { name: 'React.js', logo: SiReact },
      { name: 'Maps API', logo: SiMapbox },
      { name: 'Node.js', logo: SiNodedotjs },
    ],
    team: [
      {
        name: 'Shreyas THM',
        role: 'Frontend Development',
        image: '/team/shreyas.jpg',
      },
      {
        name: 'Samyak Sharma',
        role: 'Backend Development',
        image: '/team/samyak.jpg',
      },
      {
        name: 'Shashwat Kumar',
        role: 'Frontend Development',
        image: '/team/shashwat.jpg',
      },
    ],
  },
];

export default projects;
