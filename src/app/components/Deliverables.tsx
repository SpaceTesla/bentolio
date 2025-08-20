'use client';

import Image from 'next/image';
import Link from 'next/link';
import { LuArrowUpRight } from 'react-icons/lu';
import { useEffect, useState } from 'react';
import deliverables from '@/data/deliverables';

interface DeliverablesProps {
  onSelect?: (projectName: string) => void;
  showFooterHeading?: boolean;
  selectedProjectName?: string | null;
}

export default function Deliverables({
  onSelect,
  showFooterHeading = true,
  selectedProjectName = null,
}: DeliverablesProps) {
  const [expandedProject, setExpandedProject] = useState<string | null>(
    selectedProjectName ?? deliverables[0]?.projectName ?? null,
  );

  useEffect(() => {
    if (selectedProjectName !== null && selectedProjectName !== undefined) {
      setExpandedProject(selectedProjectName);
    }
  }, [selectedProjectName]);

  const toggleProject = (projectName: string) => {
    const next = expandedProject === projectName ? null : projectName;
    setExpandedProject(next);
    if (next) onSelect?.(projectName);
  };

  return (
    <div className="bg-primary relative flex h-full flex-col gap-6 rounded-[20px]">
      {deliverables.map((d) => (
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
                selectedProjectName !== d.projectName
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
      {showFooterHeading && (
        <div className="heading bg-primary absolute bottom-0 flex w-[calc(100%-3rem)] items-center justify-between pb-4">
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
      )}
    </div>
  );
}
