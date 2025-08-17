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
  LuSparkles,
} from 'react-icons/lu';
import Link from 'next/link';
import { TechnologyLabels } from '../components/TechnologyLabels';
import ExperienceSection from '../components/ExperienceSection';
import hackathons from '@/data/hackathons';
import { experienceData } from '@/data/experience';
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
            <div className="bg-primary hide-scrollbar relative h-full w-full overflow-y-auto rounded-[20px] p-8">
              <div className="absolute top-6 right-2 max-md:top-4 max-md:right-4">
                <StarIcon className="text-accent hover:text-accent/80 h-20 transition-colors duration-300 max-lg:h-12 max-md:h-10" />
              </div>
              <div className="flex h-full w-[80%] flex-col max-lg:w-[90%] max-md:w-full">
                <div className="flex-1"></div>
                <div className="flex flex-col gap-1">
                  <p className="text-sm leading-relaxed font-light tracking-wide">
                    I'm a{' '}
                    <span className="font-semibold">builder at heart</span>,
                    passionate about turning ideas into real, usable digital
                    experiences.
                  </p>
                  <p className="text-sm leading-relaxed font-light tracking-wide">
                    I love working at the intersection of{' '}
                    <span className="font-semibold">clean code</span> and{' '}
                    <span className="font-semibold">thoughtful design</span>,
                    where performance meets polish (and occasionally, a bug
                    meets its doom). Whether I'm crafting a product from scratch
                    or jumping into an existing codebase, I enjoy{' '}
                    <span className="font-semibold">solving problems </span>
                    that actually matter.
                  </p>
                  <p className="text-sm leading-relaxed font-light tracking-wide">
                    When I'm not shipping pixels or pushing commits, you'll
                    probably find me binging{' '}
                    <span className="font-semibold">anime</span>, diving into{' '}
                    <span className="font-semibold">podcasts</span>, or trying
                    to convince my friends that{' '}
                    <span className="font-semibold">badminton</span> totally
                    counts as cardio.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* About Me Heading */}
          <div className="col-span-3 h-full max-lg:hidden">
            <div className="bg-primary relative flex h-full items-center overflow-hidden rounded-[20px] px-6 max-lg:min-h-[18rem] max-md:justify-center">
              <h2 className="text-4xl font-bold max-lg:text-lg">About Me</h2>
              <LuSparkles
                className="text-accent absolute -top-4 -right-4 text-6xl"
                strokeWidth={1}
              />
            </div>
          </div>

          {/* About Section */}
          <div className="col-span-3 row-span-4 max-lg:col-span-4 max-lg:row-span-5 max-md:col-span-full">
            <div className="bg-primary hide-scrollbar relative h-full overflow-y-auto rounded-[20px] p-6 max-lg:min-h-[18rem]">
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
          {/* Experience Section */}
          <div className="col-span-4 row-span-7 max-lg:col-span-full max-lg:min-h-[18rem]">
            <div className="bg-primary hide-scrollbar relative h-full overflow-y-auto rounded-[20px] p-6">
              <h2 className="mb-4 text-2xl font-semibold max-lg:text-lg">
                Experience
              </h2>
              <ExperienceSection experience={experienceData} />
            </div>
          </div>

          {/* Resume Button */}
          <div className="bg-accent relative col-span-4 row-span-1 rounded-[20px] max-lg:col-span-full max-lg:min-h-[5rem]">
            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-full items-center px-6"
            >
              <span className="text-3xl font-semibold">View Resume</span>
              <LuArrowUpRight
                className={
                  'hover:text-accent absolute right-2 text-4xl transition-all duration-300 max-lg:text-4xl max-md:text-3xl'
                }
                strokeWidth={1}
              />
            </Link>
          </div>

          {/* Social Links */}
          <div className="col-span-4 row-span-1 max-lg:col-span-full max-lg:min-h-[5rem]">
            <div className="bg-primary flex min-h-full items-center justify-center rounded-[20px]">
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
