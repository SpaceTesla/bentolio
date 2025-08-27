import { Metadata } from 'next';
import DeliverablesClient from './DeliverablesClient';

export const metadata: Metadata = {
  title: 'Deliverables - Client Work & Freelance Projects',
  description:
    "View Shivansh Karan's client deliverables and freelance work. Professional web development projects, client testimonials, and successful project outcomes for businesses and startups.",
  keywords: [
    'Client Deliverables',
    'Freelance Projects',
    'Client Work Portfolio',
    'Web Development Services',
    'Client Testimonials',
    'Project Outcomes',
    'Business Web Solutions',
    'Startup Development',
    'Professional Web Developer',
    'Client Project Portfolio',
  ],
  openGraph: {
    title: 'Deliverables - Client Work & Freelance Projects',
    description:
      "View Shivansh Karan's client deliverables and freelance work. Professional web development projects and client testimonials.",
    url: 'https://shivanshkaran.tech/deliverables',
  },
};

export default function DeliverablesPage() {
  return <DeliverablesClient />;
}
