import BlobIcon from '../components/BlobIcon';
import Navbar from '../components/Navbar';
import StarIcon from '../components/StarIcon';
import Image from 'next/image';
import SocialLinks from '../components/SocialLinks';
import Deliverables from '../components/Deliverables';
import ContactSection from '../components/ContactSection';
import Script from 'next/script';

export default function Home() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Shivansh Karan',
    jobTitle: 'Full Stack Developer',
    description:
      'Bangalore-based full stack developer and designer, known for crafting clean, functional, and visually engaging web experiences',
    url: 'https://shivanshkaran.tech',
    image: 'https://shivanshkaran.tech/myself.jpg',
    sameAs: [
      'https://github.com/shivanshkaran',
      'https://linkedin.com/in/shivanshkaran',
      'https://twitter.com/shivanshkaran',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bangalore',
      addressCountry: 'IN',
    },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Dayananda Sagar College of Engineering',
    },
    knowsAbout: [
      'Next.js',
      'React.js',
      'TypeScript',
      'Python',
      'Node.js',
      'AWS',
      'Docker',
      'Kubernetes',
      'PostgreSQL',
      'Microservices',
    ],
    hasOccupation: {
      '@type': 'Occupation',
      name: 'Software Engineer',
      description:
        'Full Stack Developer specializing in modern web technologies and cloud infrastructure',
    },
  };

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="w-full">
        <div className="bg-primary fixed top-0 left-0 h-[2px] w-full origin-left scale-x-0"></div>
        <div className="grid h-screen grid-cols-1 grid-rows-10 gap-4 overflow-hidden p-4 max-lg:h-auto max-lg:grid-rows-none max-lg:overflow-visible lg:grid-cols-12">
          {/* Navbar Section */}
          <div className="col-span-full row-span-1">
            <Navbar />
          </div>

          {/* Main Content Grid */}
          <div className="col-span-8 row-span-9 grid grid-cols-subgrid grid-rows-subgrid max-lg:col-span-full max-lg:grid-rows-none max-lg:gap-4 lg:grid-cols-subgrid">
            {/* Intro Section */}
            <div className="col-span-5 row-span-5 max-lg:col-span-8 max-md:col-span-full">
              <div className="bg-primary relative min-h-full overflow-hidden rounded-[20px] p-6 max-lg:min-h-[20rem]">
                <div className="absolute bottom-0 left-0 w-[80%] pb-10 pl-6 text-4xl leading-snug tracking-wide max-lg:text-3xl max-md:w-[90%] max-md:pb-8 max-md:text-2xl">
                  Crafting{' '}
                  <span className="font-extrabold">Modern Web Experiences</span>{' '}
                  with <span className="font-extrabold">Code, Design</span> & a
                  Bit of <span className="italic">Magic</span>
                </div>
                <div className="absolute top-8 right-8 max-md:top-6 max-md:right-6">
                  <StarIcon
                    className="text-accent hover:text-accent/80 h-[96px] transition-colors duration-300 max-lg:h-[80px] max-md:h-[64px]"
                    strokeWidth={2}
                  />
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className="col-span-3 row-span-5 max-lg:col-span-4 max-md:col-span-full">
              <div className="bg-primary relative h-full overflow-hidden rounded-[20px] max-lg:min-h-[20rem]">
                <Image
                  src={'/myself.jpg'}
                  alt="Shivansh Karan's professional headshot"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>

            {/* About Section */}
            <div className="col-span-4 row-span-4 max-lg:col-span-6 max-lg:min-h-[18rem] max-md:col-span-full">
              <div className="bg-primary relative min-h-full overflow-hidden rounded-[20px] p-6">
                <div className="absolute right-0 bottom-0 left-0 w-[80%] pb-8 pl-6 leading-snug font-light tracking-wide max-md:w-full max-md:pr-6 max-md:text-sm">
                  Shivansh Karan is a Bangalore-based full stack developer and
                  designer, known for crafting clean, functional, and visually
                  engaging web experiences. He helps startups, brands, and
                  businesses bring their ideas to life through modern design and
                  scalable code.
                </div>
                <BlobIcon className="text-accent absolute -top-16 -right-16 max-md:-top-12 max-md:-right-12" />
              </div>
            </div>

            {/* Contact Section - Desktop */}
            <div className="col-span-4 row-span-4 max-lg:col-span-6 max-lg:min-h-[18rem] max-md:hidden">
              <ContactSection />
            </div>
          </div>

          {/* Right Side Content */}
          <div className="col-span-4 row-span-9 grid grid-cols-subgrid grid-rows-subgrid max-lg:col-span-full max-lg:grid-rows-none max-lg:gap-4 lg:grid-cols-subgrid">
            {/* Deliverables Section */}
            <div className="col-span-4 row-span-8 max-lg:col-span-full max-lg:min-h-[25rem]">
              <div className="bg-primary hide-scrollbar relative flex h-full flex-col overflow-y-auto rounded-[20px] p-6">
                <Deliverables />
              </div>
            </div>

            {/* Social Links */}
            <div className="col-span-4 row-span-1 max-lg:col-span-full max-lg:min-h-[5rem]">
              <div className="bg-primary flex min-h-full items-center justify-center rounded-[20px]">
                <SocialLinks />
              </div>
            </div>
          </div>

          {/* Contact Section - Mobile */}
          <div className="col-span-full hidden max-lg:min-h-[18rem] max-md:block">
            <ContactSection />
          </div>
        </div>
      </main>
    </>
  );
}
