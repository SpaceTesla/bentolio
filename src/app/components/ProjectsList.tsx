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
  return (
    <div className="flex h-full flex-col">
      {showFooterHeading && (
        <h3 className="mb-4 text-lg font-semibold">Projects</h3>
      )}

      <div className="scrollbar-hide flex-1 space-y-3 overflow-y-auto">
        {projects.map((project) => (
          <div
            key={project.projectName}
            onClick={() => onSelect(project.projectName)}
            className={`hover:bg-secondary/50 cursor-pointer overflow-auto rounded-[12px] p-4 transition-all ${
              selectedProjectName === project.projectName
                ? 'bg-secondary'
                : 'bg-secondary/20'
            }`}
          >
            <div className="mb-2">
              <h4 className="text-lg font-medium">{project.projectName}</h4>
            </div>

            <div className="text-muted-foreground flex items-center gap-4 text-xs">
              <div className="flex items-center gap-1">
                <LuCalendar className="h-3 w-3" />
                <span>
                  {project.startDate} - {project.endDate}
                </span>
              </div>

              {project.team.length > 0 && (
                <div className="flex items-center gap-1">
                  <LuUsers className="h-3 w-3" />
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
