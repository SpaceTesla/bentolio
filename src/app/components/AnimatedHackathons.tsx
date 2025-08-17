'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Hackathon } from '@/types/hackathon';
import { LuArrowUpRight } from 'react-icons/lu';

interface AnimatedHackathonsProps {
  hackathons: Hackathon[];
}

export default function AnimatedHackathons({
  hackathons,
}: AnimatedHackathonsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isHovering) {
      intervalRef.current = setInterval(() => {
        setIsAnimating(true);

        // Wait for animation to complete before changing index
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % hackathons.length);
          setIsAnimating(false);
        }, 500); // Half of the total animation duration
      }, 5000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [hackathons.length, isHovering]);

  const currentHackathon = hackathons[currentIndex];

  return (
    <div
      className="flex h-full w-full flex-col gap-4 pr-8"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div
        className={`relative flex h-full cursor-pointer flex-col items-center gap-2 transition-all duration-600 ease-in-out ${
          isAnimating
            ? 'translate-y-4 transform opacity-0'
            : 'translate-y-0 transform opacity-100'
        }`}
        onClick={() => {
          window.open(currentHackathon.link, '_blank');
        }}
      >
        <div className="flex max-h-[240px] min-h-0 flex-1 overflow-hidden rounded-[10px] max-md:max-h-[320px]">
          <Image
            src={currentHackathon.image}
            alt={currentHackathon.hackathonName}
            width={800}
            height={0}
            className="h-full rounded-[10px] object-cover"
          />
        </div>
        <div className="flex flex-shrink-0 flex-col items-center">
          <span className="text-primary-foreground w-fit text-lg">
            <span className="font-bold">{currentHackathon.achievement}</span> -{' '}
            {currentHackathon.hackathonName}
          </span>
          <span className="text-accent w-fit text-sm">
            {currentHackathon.duration} - {currentHackathon.institution}
          </span>
        </div>
        <LuArrowUpRight
          className={`absolute -top-2 -right-10 text-4xl transition-all duration-300 max-lg:text-4xl max-md:text-3xl ${
            isHovering ? 'text-accent scale-110' : ''
          }`}
          strokeWidth={isHovering ? 1.5 : 1}
        />
      </div>
    </div>
  );
}
