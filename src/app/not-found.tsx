'use client';

import Navbar from './components/Navbar';
import BlobIcon from './components/BlobIcon';
import StarIcon from './components/StarIcon';
import Link from 'next/link';
import { LuArrowLeft, LuMapPinHouse, LuUser, LuMail } from 'react-icons/lu';

export default function NotFound() {
  return (
    <main className="min-h-screen w-full">
      <div className="bg-primary fixed top-0 left-0 h-[2px] w-full origin-left scale-x-0"></div>
      <div className="flex min-h-screen flex-col gap-4 p-4">
        {/* Navbar Section */}
        <div>
          <Navbar />
        </div>

        {/* Main Content */}
        <div className="bg-primary relative flex flex-1 items-center justify-center rounded-[20px]">
          <div className="bg-primary relative min-h-full overflow-hidden rounded-[20px] p-6">
            <div className="flex min-h-full flex-col items-center justify-center text-center">
              <div className="text-accent mb-6 text-8xl font-bold max-lg:text-6xl max-md:text-5xl">
                404
              </div>
              <h1 className="mb-4 text-3xl font-bold max-lg:text-2xl max-md:text-xl">
                Page Not Found
              </h1>
              <p className="mb-8 text-lg opacity-80 max-lg:text-base max-md:text-sm">
                The page you're looking for doesn't exist or has been moved.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/"
                  className="bg-secondary hover:bg-secondary/80 flex items-center gap-2 rounded-full px-6 py-3 transition-colors duration-300"
                >
                  <LuArrowLeft className="h-5 w-5" />
                  <span>Back to Home</span>
                </Link>
                <Link
                  href="/contact"
                  className="bg-accent hover:bg-accent/80 flex items-center gap-2 rounded-full px-6 py-3 transition-colors duration-300"
                >
                  <LuMail className="h-5 w-5" />
                  <span>Contact Me</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute top-8 right-8 max-md:top-6 max-md:right-6">
            <StarIcon
              className="text-accent hover:text-accent/80 h-[96px] transition-colors duration-300 max-lg:h-[80px] max-md:h-[64px]"
              strokeWidth={2}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
