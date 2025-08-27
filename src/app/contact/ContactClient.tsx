'use client';

import Navbar from '../components/Navbar';
import ContactForm from './sections/ContactForm';
import ContactHeader from './sections/ContactHeader';
import ReachMe from './sections/ReachMe';
import FAQ from './sections/FAQ';
import Script from 'next/script';

export default function ContactClient() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Shivansh Karan',
    description:
      'Contact page for Shivansh Karan, Full Stack Developer and Software Engineer',
    url: 'https://shivanshkaran.tech/contact',
    mainEntity: {
      '@type': 'Person',
      name: 'Shivansh Karan',
      jobTitle: 'Full Stack Developer',
      description: 'Bangalore-based Full Stack Developer and Software Engineer',
      url: 'https://shivanshkaran.tech',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Bangalore',
        addressCountry: 'IN',
      },
      availableService: [
        {
          '@type': 'Service',
          name: 'Web Development',
          description: 'Full stack web application development',
        },
        {
          '@type': 'Service',
          name: 'Software Engineering',
          description: 'Software development and system design',
        },
        {
          '@type': 'Service',
          name: 'Technical Consulting',
          description: 'Technical consulting and project collaboration',
        },
      ],
    },
  };

  return (
    <>
      <Script
        id="contact-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="w-full">
        <div className="bg-primary fixed top-0 left-0 h-[2px] w-full origin-left scale-x-0"></div>
        <div className="grid h-screen grid-cols-1 grid-rows-10 gap-4 overflow-hidden p-4 max-lg:h-auto max-lg:grid-rows-none max-lg:overflow-visible lg:grid-cols-12">
          <div className="col-span-full row-span-1">
            <Navbar />
          </div>

          {/* Mobile Header */}
          <div className="col-span-full h-16 lg:hidden">
            <ContactHeader />
          </div>

          {/* Left Grid (Form) */}
          <div className="col-span-8 row-span-9 grid grid-cols-subgrid grid-rows-subgrid max-lg:col-span-full max-lg:grid-rows-none max-lg:gap-4 lg:grid-cols-subgrid">
            <div className="col-span-8 row-span-9 max-lg:col-span-full max-lg:min-h-[24rem]">
              <ContactForm />
            </div>
          </div>

          {/* Right Grid (Header + Info + FAQ) */}
          <div className="col-span-4 row-span-9 grid grid-cols-subgrid grid-rows-subgrid max-lg:col-span-full max-lg:grid-rows-none max-lg:gap-4 lg:grid-cols-subgrid">
            <div className="col-span-4 row-span-1 max-lg:hidden">
              <ContactHeader />
            </div>
            <div className="col-span-4 row-span-4 max-lg:col-span-full">
              <ReachMe />
            </div>
            <div className="col-span-4 row-span-4 max-lg:col-span-full">
              <FAQ />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
