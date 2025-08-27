'use client';

import { Project } from '@/types/project';
import { LuCalendar, LuUsers } from 'react-icons/lu';

interface ProjectsListProps {
  projects: Project[];
  onSelect: (name: string) => void;
  selectedProjectName?: string;
  showFooterHeading?: boolean;
}

export default function ProjectsList({
  projects,
  onSelect,
  selectedProjectName,
  showFooterHeading = true,
}: ProjectsListProps) {
  const handleKeyDown = (event: React.KeyboardEvent, projectName: string) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onSelect(projectName);
    }
  };

  return (
    <div
      className="flex h-full flex-col"
      role="region"
      aria-label="Projects List"
    >
      {showFooterHeading && (
        <h3 className="mb-4 text-lg font-semibold">Projects</h3>
      )}

      <div
        className="scrollbar-hide flex-1 space-y-3 overflow-y-auto"
        role="listbox"
        aria-label="Available Projects"
      >
        {projects.map((project) => (
          <div
            key={project.projectName}
            onClick={() => onSelect(project.projectName)}
            onKeyDown={(e) => handleKeyDown(e, project.projectName)}
            className={`hover:bg-secondary/50 cursor-pointer overflow-auto rounded-[12px] p-4 transition-all ${
              selectedProjectName === project.projectName
                ? 'bg-secondary'
                : 'bg-secondary/20'
            }`}
            role="option"
            aria-selected={selectedProjectName === project.projectName}
            tabIndex={0}
            aria-label={`Project: ${project.projectName}. Click to view details.`}
          >
            <div className="mb-2">
              <h4 className="text-lg font-medium">{project.projectName}</h4>
            </div>

            <div className="text-muted-foreground flex items-center gap-4 text-xs">
              <div className="flex items-center gap-1">
                <LuCalendar className="h-3 w-3" aria-hidden="true" />
                <span>
                  {project.startDate} - {project.endDate}
                </span>
              </div>

              {project.team.length > 0 && (
                <div className="flex items-center gap-1">
                  <LuUsers className="h-3 w-3" aria-hidden="true" />
                  <span>
                    {project.team.length + 1} member
                    {project.team.length !== 1 ? 's' : ''}
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
