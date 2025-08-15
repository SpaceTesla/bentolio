import React from 'react';
import { technologies } from '../../data/technologies';
import Label from './Label';

// Technology Labels Component
export const TechnologyLabels: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-3 overflow-y-auto">
      {technologies.map((tech, index) => (
        <Label key={index} text={tech.text} icon={tech.icon} />
      ))}
    </div>
  );
};

// Individual label exports for flexible usage
export const NextJsLabel = () => {
  const tech = technologies.find((t) => t.text === 'Next.js');
  return tech ? <Label text={tech.text} icon={tech.icon} /> : null;
};

export const ReactLabel = () => {
  const tech = technologies.find((t) => t.text === 'React');
  return tech ? <Label text={tech.text} icon={tech.icon} /> : null;
};

export const TypeScriptLabel = () => {
  const tech = technologies.find((t) => t.text === 'TypeScript');
  return tech ? <Label text={tech.text} icon={tech.icon} /> : null;
};

export const FigmaLabel = () => {
  const tech = technologies.find((t) => t.text === 'Figma');
  return tech ? <Label text={tech.text} icon={tech.icon} /> : null;
};

export const JavaScriptLabel = () => {
  const tech = technologies.find((t) => t.text === 'JavaScript');
  return tech ? <Label text={tech.text} icon={tech.icon} /> : null;
};

export const TailwindLabel = () => {
  const tech = technologies.find((t) => t.text === 'Tailwind CSS');
  return tech ? <Label text={tech.text} icon={tech.icon} /> : null;
};

export const ExpressLabel = () => {
  const tech = technologies.find((t) => t.text === 'Express.js');
  return tech ? <Label text={tech.text} icon={tech.icon} /> : null;
};

export const NodeJsLabel = () => {
  const tech = technologies.find((t) => t.text === 'Node.js');
  return tech ? <Label text={tech.text} icon={tech.icon} /> : null;
};

export const PythonLabel = () => {
  const tech = technologies.find((t) => t.text === 'Python');
  return tech ? <Label text={tech.text} icon={tech.icon} /> : null;
};

export const GoLabel = () => {
  const tech = technologies.find((t) => t.text === 'Go');
  return tech ? <Label text={tech.text} icon={tech.icon} /> : null;
};

export const PostgreSQLLabel = () => {
  const tech = technologies.find((t) => t.text === 'PostgreSQL');
  return tech ? <Label text={tech.text} icon={tech.icon} /> : null;
};

export const MySQLLabel = () => {
  const tech = technologies.find((t) => t.text === 'MySQL');
  return tech ? <Label text={tech.text} icon={tech.icon} /> : null;
};

export const SupabaseLabel = () => {
  const tech = technologies.find((t) => t.text === 'Supabase');
  return tech ? <Label text={tech.text} icon={tech.icon} /> : null;
};

export const MongoLabel = () => {
  const tech = technologies.find((t) => t.text === 'MongoDB');
  return tech ? <Label text={tech.text} icon={tech.icon} /> : null;
};

export const FirebaseLabel = () => {
  const tech = technologies.find((t) => t.text === 'Firebase');
  return tech ? <Label text={tech.text} icon={tech.icon} /> : null;
};

export const AWSLabel = () => {
  const tech = technologies.find((t) => t.text === 'AWS');
  return tech ? <Label text={tech.text} icon={tech.icon} /> : null;
};

export const CloudflareLabel = () => {
  const tech = technologies.find((t) => t.text === 'Cloudflare');
  return tech ? <Label text={tech.text} icon={tech.icon} /> : null;
};

export const DockerLabel = () => {
  const tech = technologies.find((t) => t.text === 'Docker');
  return tech ? <Label text={tech.text} icon={tech.icon} /> : null;
};
