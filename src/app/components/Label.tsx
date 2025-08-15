import React from 'react';

interface LabelProps {
  text: string;
  icon: React.ComponentType<{ className?: string }>;
}

export default function Label({ text, icon: Icon }: LabelProps) {
  return (
    <div className="bg-secondary text-light flex items-center justify-center gap-1.5 rounded-full px-3 py-2">
      <Icon className="text-accent h-3 w-3" />
      <p className="text-xs font-light">{text}</p>
    </div>
  );
}
