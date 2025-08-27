import { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact - Full Stack Developer & Software Engineer',
  description:
    'Get in touch with Shivansh Karan, a Bangalore-based Full Stack Developer and Software Engineer. Available for freelance work, project collaborations, and technical consulting.',
  keywords: [
    'Contact Full Stack Developer',
    'Hire Software Engineer Bangalore',
    'Web Developer Contact',
    'Freelance Developer India',
    'Project Collaboration',
    'Technical Consulting',
    'Software Development Services',
    'Next.js Developer Hire',
    'React Developer Contact',
    'Python Developer Bangalore',
  ],
  openGraph: {
    title: 'Contact - Full Stack Developer & Software Engineer',
    description:
      'Get in touch with Shivansh Karan, a Bangalore-based Full Stack Developer and Software Engineer.',
    url: 'https://shivanshkaran.tech/contact',
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
