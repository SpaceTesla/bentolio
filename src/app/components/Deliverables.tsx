'use client';

import Image from 'next/image';
import Link from 'next/link';
import { LuArrowUpRight } from 'react-icons/lu';
import { useState } from 'react';
import deliverables from '@/data/Deliverables';

export default function Deliverables() {
  const [expandedProject, setExpandedProject] = useState<string | null>(
    deliverables[0]?.projectName || null,
  );

  const toggleProject = (projectName: string) => {
    setExpandedProject(expandedProject === projectName ? null : projectName);
  };

  return (
    <div
      id="deliverables"
      className="bg-primary relative col-span-4 row-span-8 flex flex-col gap-4 rounded-[20px] p-6"
    >
      {deliverables.map((d, idx) => (
        <div
          key={d.projectName}
          className="bg-primary border-accent mb-2 flex cursor-pointer flex-col gap-4 rounded-xl border-b-2 pb-4"
          onClick={() => toggleProject(d.projectName)}
        >
          <div className="flex items-center justify-between">
            <div className="text-2xl font-semibold">{d.projectName}</div>
            {d.links[0] && (
              <Link
                href={d.links[0].link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <LuArrowUpRight className="text-foreground hover:text-accent h-7 w-7 transition-colors" />
              </Link>
            )}
          </div>
          {d.images[0] && (
            <div
              className={`border-secondary/30 relative mx-auto w-full max-w-[360px] overflow-hidden rounded-[16px] border transition-all duration-300 ${
                expandedProject === d.projectName
                  ? 'h-48 opacity-100'
                  : 'h-0 opacity-0'
              }`}
            >
              <Image
                src={d.images[0]}
                alt={d.projectName}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          )}
        </div>
      ))}
      <div className="heading absolute bottom-0 flex w-[calc(100%-3rem)] items-center justify-between pb-4">
        <div className="text-4xl font-bold">Deliverables</div>
        <Link
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
        >
          <LuArrowUpRight className="text-foreground hover:text-accent h-10 w-10 transition-colors" />
        </Link>
      </div>
    </div>
  );
}
