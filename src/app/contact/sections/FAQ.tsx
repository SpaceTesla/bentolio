'use client';

import { useState } from 'react';

type QA = { q: string; a: string };

const qas: QA[] = [
  {
    q: 'How long does a typical project take?',
    a: 'It depends on scope and complexity; most engagements land between 2–6 weeks.',
  },
  {
    q: "What's your preferred tech stack?",
    a: 'TypeScript, Next.js (App Router), TailwindCSS, and a sprinkle of well-chosen libs.',
  },
  {
    q: 'What’s your availability like?',
    a: 'I usually onboard 1–2 projects per month to ensure focus and quality.',
  },
  {
    q: 'Why should I work with you?',
    a: 'Clear communication, thoughtful UX, and maintainable code that scales with your needs.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="bg-primary hide-scrollbar h-full overflow-y-auto rounded-[20px] p-6">
      <h3 className="mb-4 text-xl font-semibold">FAQs</h3>
      <div className="divide-secondary/30 divide-y">
        {qas.map((item, idx) => (
          <div key={item.q} className="py-3">
            <button
              className="flex w-full items-center justify-between text-left"
              onClick={() => setOpen(open === idx ? null : idx)}
            >
              <span className="font-medium">
                {idx + 1}. {item.q}
              </span>
              <span className="opacity-70">{open === idx ? '–' : '+'}</span>
            </button>
            {open === idx && (
              <p className="mt-2 text-sm opacity-80">{item.a}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
