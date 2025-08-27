'use client';

import Navbar from '../components/Navbar';
import Image from 'next/image';
import projects from '@/data/projects';
import ProjectsList from '../components/ProjectsList';
import { useMemo, useState } from 'react';
import { LuArrowUpRight, LuCalendar, LuUsers } from 'react-icons/lu';
import Link from 'next/link';

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = useMemo(
    () => projects[currentIndex] ?? projects[0],
    [currentIndex],
  );

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
          {/* Image Section */}
          <div className="relative col-span-6 row-span-5 overflow-hidden max-lg:col-span-8 max-md:col-span-full max-md:flex max-md:h-[12rem]">
            <div className="bg-primary hide-scrollbar relative flex h-full w-full flex-col items-center justify-center overflow-y-auto rounded-[20px] p-4">
              <Image
                src={current?.images?.[0] || '/projects/hookit.png'}
                alt={current?.projectName || 'Background blur'}
                width={800}
                height={600}
                className="absolute inset-0 z-0 h-full w-full rounded-[20px] object-cover object-center blur-2xl"
                quality={10}
                loading="lazy"
              />
              <div className="relative z-10 max-h-full w-fit overflow-hidden rounded-[12px]">
                <Image
                  src={current?.images?.[0] || '/projects/hookit.png'}
                  alt={current?.projectName || 'Project'}
                  width={800}
                  height={600}
                  className="h-full w-full object-contain object-left-top"
                />
              </div>
            </div>
          </div>

          {/* Description Section */}
          <div className="col-span-2 row-span-5 overflow-hidden max-lg:col-span-4 max-md:col-span-full max-md:flex max-md:h-[12rem]">
            <div className="bg-primary hide-scrollbar relative h-full w-full overflow-y-auto rounded-[20px] p-4">
              <p className="hide-scrollbar h-full overflow-auto text-sm leading-relaxed">
                {current?.description}
              </p>
            </div>
          </div>

          {/* Title Section */}
          <div className="max-md:min-h-none col-span-8 row-span-1 h-16 overflow-hidden max-lg:col-span-full max-md:flex max-md:h-auto">
            <div className="bg-primary hide-scrollbar relative flex h-full w-full flex-row items-center justify-between overflow-y-auto rounded-[20px] px-6">
              <div className="flex flex-col">
                <h1 className="text-xl font-bold max-lg:text-lg">
                  {current?.projectName}
                </h1>
                <div className="flex items-center gap-1 text-xs opacity-80">
                  <LuCalendar className="h-2.5 w-2.5" />
                  <span>
                    {current?.startDate} - {current?.endDate}
                  </span>
                </div>
              </div>
              <div className="flex flex-row flex-wrap justify-end gap-2 max-md:p-4">
                {current?.links.map((link) => (
                  <Link
                    key={link.link}
                    href={link.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-secondary flex flex-row items-center gap-2 rounded-full px-4 py-1.5"
                  >
                    <link.logo className="h-4 w-4" />
                    <span className="text-sm">{link.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="relative col-span-4 row-span-3 max-lg:col-span-6 max-lg:h-[20rem] max-md:col-span-full max-md:max-h-[12rem]">
            <div className="bg-primary relative flex h-full overflow-hidden rounded-[20px] p-4 pr-12 pl-6">
              <h2 className="absolute top-1/2 -right-[0.25em] -translate-y-1/2 -rotate-90 text-2xl font-semibold max-lg:text-lg">
                Team
              </h2>
              <div className="hide-scrollbar flex h-full w-full flex-col space-y-3 overflow-y-auto pr-4">
                {current?.team?.map((member, index) => (
                  <div key={index} className="border-secondary/20 flex gap-2">
                    <div className="flex items-center gap-2">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={48}
                        height={48}
                        className="h-10 w-10 rounded-[8px] object-cover"
                      />
                    </div>
                    <div className="flex flex-col">
                      <div className="text-lg font-semibold">{member.name}</div>
                      <div className="text-xs opacity-80">{member.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tech Stack Section */}
          <div className="col-span-4 row-span-3 max-lg:col-span-6 max-lg:min-h-[12rem] max-md:col-span-full">
            <div className="bg-primary hide-scrollbar relative h-full overflow-y-auto rounded-[20px] px-6 py-4">
              <h2 className="absolute top-1/2 -right-[1.25em] -translate-y-1/2 -rotate-90 text-2xl font-semibold max-lg:text-lg">
                Tech Stack
              </h2>
              <div className="flex w-[80%] flex-wrap gap-3">
                {current?.techStack?.map((t) => {
                  const Logo = t.logo;
                  return (
                    <span
                      key={t.name}
                      className="bg-secondary inline-flex items-center gap-2 rounded-full px-3 py-2 text-xs font-light"
                    >
                      {Logo ? <Logo className="fill-accent h-3 w-3" /> : null}
                      {t.name}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Content */}
        <div className="col-span-4 row-span-9 grid grid-cols-subgrid grid-rows-subgrid max-lg:col-span-full max-lg:grid-rows-none max-lg:gap-4">
          {/* Projects List */}
          <div className="col-span-4 row-span-7 max-lg:col-span-full max-lg:min-h-[18rem]">
            <div className="bg-primary hide-scrollbar relative flex h-full w-full flex-col overflow-y-auto rounded-[20px] p-6">
              <ProjectsList
                projects={projects}
                onSelect={(name) => {
                  const idx = projects.findIndex((p) => p.projectName === name);
                  if (idx >= 0) setCurrentIndex(idx);
                }}
                showFooterHeading={false}
                selectedProjectName={projects[currentIndex]?.projectName}
              />
            </div>
          </div>

          {/* View Services Button */}
          <div className="bg-accent relative col-span-4 row-span-1 rounded-[20px] max-lg:col-span-full max-lg:min-h-[5rem]">
            <Link
              href="https://anthrapi.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-full items-center px-6"
            >
              <span className="text-3xl font-semibold">Request Services</span>
              <LuArrowUpRight
                className={
                  'hover:text-accent absolute right-2 text-4xl transition-all duration-300 max-lg:text-4xl max-md:text-3xl'
                }
                strokeWidth={1}
              />
            </Link>
          </div>

          {/* Social Links */}
          <div className="bg-accent relative col-span-4 row-span-1 rounded-[20px] max-lg:col-span-full max-lg:min-h-[5rem]">
            <Link
              href="/deliverables"
              className="flex min-h-full items-center px-6"
            >
              <span className="text-3xl font-semibold">View Deliverables</span>
              <LuArrowUpRight
                className={
                  'hover:text-accent absolute right-2 text-4xl transition-all duration-300 max-lg:text-4xl max-md:text-3xl'
                }
                strokeWidth={1}
              />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
