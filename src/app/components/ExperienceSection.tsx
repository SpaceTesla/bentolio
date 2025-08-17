import { Experience } from '@/types/experience';

interface ExperienceSectionProps {
  experience: Experience[];
}

export default function ExperienceSection({
  experience,
}: ExperienceSectionProps) {
  return (
    <div className="space-y-6">
      {experience.map((job, index) => (
        <div key={index}>
          <div className="border-accent mb-4 border-l-2 pl-4">
            <h3 className="text-md mb-2 font-bold text-gray-800">
              {job.title}
            </h3>
            <div className="mb-3 flex items-center justify-between">
              <span className="text-accent font-bold italic">
                {job.company}
              </span>
              <span className="text-accent font-bold">
                {job.startDate} - {job.endDate}
              </span>
            </div>
            <p className="mb-3 text-sm leading-relaxed text-gray-700">
              {job.description}
            </p>
            {job.projects && (
              <div className="flex flex-wrap gap-2">
                {job.projects.map((project, projectIndex) => (
                  <div
                    key={projectIndex}
                    className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1.5 text-sm font-medium text-amber-700"
                  >
                    <span className="text-base">{project.icon}</span>
                    <span>{project.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
          {/* {index < experience.length - 1 && (
            <div className="border-accent border-t pt-6"></div>
          )} */}
        </div>
      ))}
    </div>
  );
}
