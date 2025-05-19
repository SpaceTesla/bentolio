import BlobIcon from './components/BlobIcon';
import Navbar from './components/Navbar';
import StarIcon from './components/StarIcon';
import Image from 'next/image';
import SocialLinks from './components/SocialLinks';
import Deliverables from './components/Deliverables';
import ContactSection from './components/ContactSection';

export default function Home() {
  return (
    <main className="bg-background text-foreground grid min-h-screen w-full grid-cols-12 grid-rows-10 gap-4 p-4">
      <div className="col-span-full">
        <Navbar />
      </div>

      {/* Intro Section */}
      <div
        id="intro"
        className="bg-primary relative col-span-5 row-span-5 overflow-hidden rounded-[20px] p-6"
      >
        <div className="absolute bottom-0 left-0 w-[80%] pb-10 pl-6 text-4xl leading-snug tracking-wide">
          Crafting{' '}
          <span className="font-extrabold">Modern Web Experiences</span> with{' '}
          <span className="font-extrabold">Code, Design</span> & a Bit of{' '}
          <span className="italic">Magic</span>
        </div>

        <div className="absolute top-8 right-8">
          <StarIcon
            className="text-accent hover:text-accent/80 h-[96px] transition-colors duration-300"
            strokeWidth={2}
          />
        </div>
      </div>
      <div
        id="Image"
        className="bg-primary relative col-span-3 row-span-5 overflow-hidden rounded-[20px]"
      >
        <Image
          src={'/myself.jpg'}
          alt="shivansh image"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Deliverables Section */}
      <Deliverables />

      {/* About Section */}
      <div
        id="about"
        className="bg-primary relative col-span-4 row-span-4 overflow-hidden rounded-[20px]"
      >
        <div className="absolute right-0 bottom-0 left-0 w-[80%] pb-8 pl-6 leading-snug font-light tracking-wide">
          Shivansh Karan is a Bangalore-based full stack developer and designer,
          known for crafting clean, functional, and visually engaging web
          experiences. He helps startups, brands, and businesses bring their
          ideas to life through modern design and scalable code.
        </div>
        <BlobIcon className="text-accent absolute -top-16 -right-16" />
      </div>

      {/* Contact Section */}
      <ContactSection />

      {/* Social Links */}
      <div className="bg-primary col-span-4 row-span-1 rounded-[20px]">
        <SocialLinks />
      </div>
    </main>
  );
}
