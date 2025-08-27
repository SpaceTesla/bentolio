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

  const handleKeyDown = (event: React.KeyboardEvent, projectName: string) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleProject(projectName);
    }
  };

  return (
    <div
      className="bg-primary hide-scrollbar relative flex h-full flex-col gap-6 overflow-y-auto"
      role="region"
      aria-label="Client Deliverables"
    >
      {showFooterHeading && (
        <header className="heading bg-primary flex items-center justify-between pb-4">
          <Link
            href="/deliverables"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="group flex w-full items-center justify-between"
            aria-label="View all deliverables"
          >
            <h2 className="group-hover:text-accent text-4xl font-bold transition-colors">
              Deliverables
            </h2>
            <LuArrowUpRight
              className="text-foreground group-hover:text-accent h-10 w-10 transition-colors"
              aria-hidden="true"
            />
          </Link>
        </header>
      )}
      <div role="list" aria-label="Client Project Deliverables">
        {deliverables.map((d) => (
          <article
            key={d.projectName}
            className="bg-primary border-accent mb-2 flex cursor-pointer flex-col gap-4 rounded-xl border-b-2 pb-4"
            onClick={() => toggleProject(d.projectName)}
            onKeyDown={(e) => handleKeyDown(e, d.projectName)}
            role="listitem"
            tabIndex={0}
            aria-label={`Project: ${d.projectName}. Click to expand details.`}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-semibold">{d.projectName}</h3>
              {d.links[0] && (
                <Link
                  href={d.links[0].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  aria-label={`View ${d.projectName} project`}
                >
                  <LuArrowUpRight
                    className="text-foreground hover:text-accent h-7 w-7 transition-colors"
                    aria-hidden="true"
                  />
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
                aria-hidden={selectedProjectName !== d.projectName}
              >
                <Image
                  src={d.images[0]}
                  alt={`${d.projectName} project screenshot`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
