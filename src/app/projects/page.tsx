import { Metadata } from 'next';
import ProjectsClient from './ProjectsClient';

export const metadata: Metadata = {
  title: 'Projects - Full Stack Developer Portfolio',
  description:
    "Explore Shivansh Karan's portfolio of web applications, Chrome extensions, and scalable systems. View projects like Mivro, JuRIDEX, PayZee, and more built with Next.js, React, Python, and cloud technologies.",
  keywords: [
    'Web Development Projects',
    'Next.js Projects',
    'React Projects',
    'Python Projects',
    'Chrome Extension Projects',
    'Full Stack Projects',
    'Mivro Project',
    'JuRIDEX Project',
    'PayZee Project',
    'Orbis Project',
    'Web App Development',
    'Software Projects Portfolio',
    'Developer Projects Bangalore',
    'Full Stack Developer Projects India',
  ],
  openGraph: {
    title: 'Projects - Full Stack Developer Portfolio',
    description:
      "Explore Shivansh Karan's portfolio of web applications, Chrome extensions, and scalable systems.",
    url: 'https://shivanshkaran.tech/projects',
  },
};

export default function Projects() {
  return <ProjectsClient />;
}
