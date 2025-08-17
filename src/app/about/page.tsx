import BlobIcon from '../components/BlobIcon';
import Navbar from '../components/Navbar';
import StarIcon from '../components/StarIcon';
import SocialLinks from '../components/SocialLinks';
import {
  LuArrowUpRight,
  LuMapPin,
  LuBuilding,
  LuCodeXml,
  LuPenTool,
  LuTrophy,
  LuFileText,
  LuMapPinHouse,
  LuSchool,
  LuFigma,
} from 'react-icons/lu';
import Link from 'next/link';
import { TechnologyLabels } from '../components/TechnologyLabels';
import hackathons from '@/data/hackathons';
import AnimatedHackathons from '../components/AnimatedHackathons';

export default function About() {
  return (
    <main className="w-full">
      <div className="bg-primary fixed top-0 left-0 h-[2px] w-full origin-left scale-x-0"></div>
      <div className="grid h-screen grid-cols-12 grid-rows-10 gap-4 overflow-hidden p-4 max-lg:h-auto max-lg:grid-rows-none max-lg:overflow-visible">
        {/* Navbar Section */}
        <div className="col-span-full row-span-1">
          <Navbar />
        </div>

        {/* Main Content Grid */}
        <div className="col-span-8 row-span-9 grid grid-cols-subgrid grid-rows-subgrid max-lg:col-span-full max-lg:grid-rows-none max-lg:gap-4">
          {/* Personal Info Section */}
          <div className="max-xs:h-[28rem] col-span-5 row-span-5 max-lg:col-span-8 max-md:col-span-full max-md:flex max-md:h-[12rem] max-sm:h-[26rem]">
            <div className="bg-primary relative h-full w-full overflow-hidden rounded-[20px] p-6">
              <div className="absolute bottom-0 left-0 flex w-[80%] flex-col gap-1 pb-8 pl-6 max-lg:w-[90%] max-md:w-full max-md:pr-6">
                <p className="text-sm leading-relaxed font-light tracking-wide">
                  I'm a <span className="font-semibold">builder at heart</span>,
                  passionate about turning ideas into real, usable digital
                  experiences.
                </p>
                <p className="text-sm leading-relaxed font-light tracking-wide">
                  I love working at the intersection of{' '}
                  <span className="font-semibold">clean code</span> and{' '}
                  <span className="font-semibold">thoughtful design</span>,
                  where performance meets polish (and occasionally, a bug meets
                  its doom). Whether I'm crafting a product from scratch or
                  jumping into an existing codebase, I enjoy{' '}
                  <span className="font-semibold">solving problems </span>
                  that actually matter.
                </p>
                <p className="text-sm leading-relaxed font-light tracking-wide">
                  When I'm not shipping pixels or pushing commits, you'll
                  probably find me binging{' '}
                  <span className="font-semibold">anime</span>, diving into{' '}
                  <span className="font-semibold">podcasts</span>, or trying to
                  convince my friends that{' '}
                  <span className="font-semibold">badminton</span> totally
                  counts as cardio.
                </p>
              </div>
              <div className="absolute top-6 right-2 max-md:top-4 max-md:right-4">
                <StarIcon className="text-accent hover:text-accent/80 h-20 transition-colors duration-300 max-lg:h-12 max-md:h-10" />
              </div>
            </div>
          </div>

          <div className="col-span-3 h-full max-lg:hidden">
            <div className="bg-primary relative flex h-full items-center overflow-hidden rounded-[20px] px-6 max-lg:min-h-[18rem] max-md:justify-center">
              <h2 className="text-4xl font-bold max-lg:text-lg">About Me</h2>
            </div>
          </div>

          {/* About Section */}
          <div className="col-span-3 row-span-4 max-lg:col-span-4 max-lg:row-span-5 max-md:col-span-full">
            <div className="bg-primary relative min-h-full overflow-hidden rounded-[20px] p-6 max-lg:min-h-[18rem]">
              <div className="flex flex-col gap-4">
                <p className="border-accent flex items-center gap-4 border-l-2 pl-4">
                  <span>
                    <LuCodeXml className="text-accent h-4 w-4" />
                  </span>
                  <span>5+ years of coding</span>
                </p>
                <p className="border-accent flex items-center gap-4 border-l-2 pl-4">
                  <span>
                    <LuFigma className="text-accent h-4 w-4" />
                  </span>
                  <span>2+ years of design</span>
                </p>
                <p className="border-accent flex items-center gap-4 border-l-2 pl-4">
                  <span>
                    <LuTrophy className="text-accent h-4 w-4" />
                  </span>
                  <span>4x Hackathon Winner</span>
                </p>
                <p className="border-accent flex items-center gap-4 border-l-2 pl-4">
                  <LuMapPinHouse className="text-accent h-4 w-4" />
                  <span>Bengaluru, India</span>
                </p>
                <p className="border-accent flex items-center gap-4 border-l-2 pl-4">
                  <span>
                    <LuSchool className="text-accent h-4 w-4" />
                  </span>
                  <span>BE CSE, Dayananda Sagar College of Engineering</span>
                </p>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="col-span-4 row-span-5 max-lg:col-span-6 max-lg:min-h-[20rem] max-md:col-span-full">
            <div className="bg-primary hide-scrollbar relative h-full overflow-y-auto rounded-[20px] px-6 py-4">
              <h2 className="mb-2 text-2xl font-semibold max-lg:text-lg">
                Skills
              </h2>
              <TechnologyLabels />
            </div>
          </div>

          {/* Hackathons Section */}
          <div className="relative col-span-4 row-span-5 max-lg:col-span-6 max-lg:h-[20rem] max-md:col-span-full max-md:max-h-[18rem]">
            <div className="bg-primary relative flex h-full overflow-hidden rounded-[20px] p-4">
              <h2 className="absolute top-1/2 -right-[1.5em] -translate-y-1/2 -rotate-90 text-2xl font-semibold max-lg:text-lg">
                Hackathons
              </h2>

              <AnimatedHackathons hackathons={hackathons} />
            </div>
          </div>
        </div>

        {/* Right Side Content */}
        <div className="col-span-4 row-span-9 grid grid-cols-subgrid grid-rows-subgrid max-lg:col-span-full max-lg:grid-rows-none max-lg:gap-4">
          {/* Achievements Section */}
          <div className="col-span-4 row-span-4 max-lg:col-span-full max-lg:min-h-[18rem]">
            <div className="bg-primary relative min-h-full overflow-hidden rounded-[20px] p-6">
              <h2 className="mb-4 text-xl font-semibold max-lg:text-lg">
                Achievements
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <LuTrophy className="text-accent h-5 w-5" />
                  <div>
                    <p className="text-sm font-medium">
                      50+ Projects Completed
                    </p>
                    <p className="text-muted-foreground text-xs">
                      Successfully delivered across various domains
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <LuTrophy className="text-accent h-5 w-5" />
                  <div>
                    <p className="text-sm font-medium">5+ Years Experience</p>
                    <p className="text-muted-foreground text-xs">
                      In web development and design
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <LuTrophy className="text-accent h-5 w-5" />
                  <div>
                    <p className="text-sm font-medium">20+ Happy Clients</p>
                    <p className="text-muted-foreground text-xs">
                      Satisfied with delivered solutions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="col-span-4 row-span-3 max-lg:col-span-full max-lg:min-h-[15rem]">
            <div className="bg-primary relative min-h-full overflow-hidden rounded-[20px] p-6">
              <h2 className="mb-4 text-xl font-semibold max-lg:text-lg">
                Education
              </h2>
              <div className="space-y-3">
                <div>
                  <h3 className="text-sm font-medium">
                    Bachelor's in Computer Science
                  </h3>
                  <p className="text-muted-foreground text-xs">
                    University of Technology
                  </p>
                  <p className="text-muted-foreground text-xs">2016 - 2020</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium">
                    UI/UX Design Certification
                  </h3>
                  <p className="text-muted-foreground text-xs">
                    Design Institute
                  </p>
                  <p className="text-muted-foreground text-xs">2019</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="col-span-4 row-span-2 max-lg:col-span-full max-lg:min-h-[5rem]">
            <div className="bg-primary flex min-h-full items-center justify-center rounded-[20px]">
              <SocialLinks />
            </div>
          </div>
        </div>

        {/* Contact Section - Mobile */}
        <div className="col-span-full hidden max-lg:min-h-[18rem] max-md:mt-4 max-md:block">
          <div className="bg-primary relative min-h-full overflow-hidden rounded-[20px] p-6">
            <h2 className="mb-4 text-xl font-semibold max-lg:text-lg">
              Get In Touch
            </h2>
            <p className="mb-6 text-sm leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions.
            </p>
            <div className="space-y-3">
              <Link
                href="/contact"
                className="hover:text-accent flex items-center gap-2 text-sm transition-colors duration-300"
              >
                <span>Let's work together</span>
                <LuArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                href="/resume.pdf"
                className="hover:text-accent flex items-center gap-2 text-sm transition-colors duration-300"
              >
                <LuFileText className="h-4 w-4" />
                <span>Download Resume</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
