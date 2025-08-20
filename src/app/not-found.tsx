'use client';

import Navbar from './components/Navbar';
import BlobIcon from './components/BlobIcon';
import StarIcon from './components/StarIcon';
import Link from 'next/link';
import { LuArrowLeft, LuConstruction } from 'react-icons/lu';

export default function NotFound() {
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
          {/* Main Message Section */}
          <div className="col-span-6 row-span-5 max-lg:col-span-8 max-md:col-span-full">
            <div className="bg-primary relative min-h-full overflow-hidden rounded-[20px] p-6 max-lg:min-h-[20rem]">
              <div className="flex h-full flex-col items-center justify-center text-center">
                <div className="text-accent mb-6 text-8xl font-bold max-lg:text-6xl max-md:text-5xl">
                  404
                </div>
                <h1 className="mb-4 text-3xl font-bold max-lg:text-2xl max-md:text-xl">
                  Page Not Found
                </h1>
                <p className="mb-8 text-lg opacity-80 max-lg:text-base max-md:text-sm">
                  This page is currently in progress or being built.
                </p>
                <Link
                  href="/"
                  className="bg-secondary hover:bg-secondary/80 flex items-center gap-2 rounded-full px-6 py-3 transition-colors duration-300"
                >
                  <LuArrowLeft className="h-5 w-5" />
                  <span>Back to Home</span>
                </Link>
              </div>
              <div className="absolute top-8 right-8 max-md:top-6 max-md:right-6">
                <StarIcon
                  className="text-accent hover:text-accent/80 h-[96px] transition-colors duration-300 max-lg:h-[80px] max-md:h-[64px]"
                  strokeWidth={2}
                />
              </div>
            </div>
          </div>

          {/* Construction Icon Section */}
          <div className="col-span-2 row-span-5 max-lg:col-span-4 max-md:col-span-full">
            <div className="bg-primary relative h-full overflow-hidden rounded-[20px] max-lg:min-h-[20rem]">
              <div className="flex h-full items-center justify-center">
                <LuConstruction className="text-accent h-24 w-24 max-lg:h-20 max-lg:w-20 max-md:h-16 max-md:w-16" />
              </div>
            </div>
          </div>

          {/* Status Section */}
          <div className="col-span-8 row-span-4 max-lg:col-span-full max-lg:min-h-[5rem]">
            <div className="bg-primary flex h-full items-center justify-center rounded-[20px] px-6">
              <div className="flex items-center gap-3">
                <div className="bg-accent h-3 w-3 animate-pulse rounded-full"></div>
                <span className="text-lg font-semibold max-lg:text-base">
                  Under Construction
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Content */}
        <div className="col-span-4 row-span-9 grid grid-cols-subgrid grid-rows-subgrid max-lg:col-span-full max-lg:grid-rows-none max-lg:gap-4">
          {/* Info Section */}
          <div className="col-span-4 row-span-4 max-lg:col-span-6 max-lg:min-h-[18rem] max-md:col-span-full">
            <div className="bg-primary relative min-h-full overflow-hidden rounded-[20px] p-6">
              <h2 className="mb-4 text-xl font-semibold">What's Happening?</h2>
              <p className="text-sm leading-relaxed opacity-80">
                This page is currently being developed and will be available
                soon. In the meantime, feel free to explore the other sections
                of the portfolio.
              </p>
              <BlobIcon className="text-accent absolute -right-16 -bottom-16 max-md:-right-12 max-md:-bottom-12" />
            </div>
          </div>

          {/* Quick Actions */}
          <div className="col-span-4 row-span-2 max-lg:col-span-6 max-lg:min-h-[10rem] max-md:col-span-full">
            <div className="bg-accent relative h-full rounded-[20px] max-lg:min-h-[10rem]">
              <Link
                href="/"
                className="flex h-full items-center justify-center px-6"
              >
                <span className="text-2xl font-semibold max-lg:text-xl">
                  Go Home
                </span>
              </Link>
            </div>
          </div>

          {/* Contact Link */}
          <div className="col-span-4 row-span-2 max-lg:col-span-6 max-lg:min-h-[10rem] max-md:col-span-full">
            <div className="bg-accent relative h-full rounded-[20px] max-lg:min-h-[10rem]">
              <Link
                href="/about"
                className="flex h-full items-center justify-center px-6"
              >
                <span className="text-2xl font-semibold max-lg:text-xl">
                  About Me
                </span>
              </Link>
            </div>
          </div>

          {/* Social Links Placeholder */}
          <div className="col-span-4 row-span-1 max-lg:col-span-full max-lg:min-h-[5rem]">
            <div className="bg-primary flex min-h-full items-center justify-center rounded-[20px]">
              <span className="text-sm opacity-60">Coming Soon</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
