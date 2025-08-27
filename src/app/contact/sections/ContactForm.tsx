'use client';

import { useState } from 'react';
import Select from '@/app/components/Select';
import { LuSend } from 'react-icons/lu';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subject, setSubject] = useState<string | undefined>(undefined);

  return (
    <div className="bg-primary hide-scrollbar h-full w-full overflow-y-auto rounded-[20px] p-4">
      <div className="grid h-full grid-cols-8 grid-rows-6 gap-4 max-md:grid-cols-1">
        <div className="col-span-full row-span-1 max-md:col-span-full">
          <label className="block pl-1 text-sm">Full Name</label>
          <input
            className="bg-secondary/30 mt-2 w-full rounded-[12px] p-4 outline-none"
            placeholder="John Doe"
          />
        </div>

        <div className="col-span-4 max-md:col-span-full">
          <label className="block pl-1 text-sm">Email</label>
          <input
            className="bg-secondary/30 mt-2 w-full rounded-[12px] p-4 outline-none"
            placeholder="john.doe@example.com"
          />
        </div>
        <div className="col-span-4 max-md:col-span-full">
          <label className="block pl-1 text-sm">
            Phone Number <span className="opacity-60">(optional)</span>
          </label>
          <input
            className="bg-secondary/30 mt-2 w-full rounded-[12px] p-4 outline-none"
            placeholder="+91 98765 43210"
          />
        </div>

        <div className="col-span-full">
          <Select
            label="Subject"
            placeholder="Select an inquiry type"
            value={subject}
            onChange={setSubject}
            options={[
              { value: 'collaboration', label: 'Collaboration' },
              { value: 'job-offer', label: 'Job Offer' },
              { value: 'project-inquiry', label: 'Project Inquiry' },
              { value: 'general-question', label: 'General Question' },
              { value: 'other', label: 'Other' },
            ]}
          />
        </div>

        <div className="col-span-5 row-span-3 flex min-h-0 flex-col max-md:col-span-full">
          <label className="block pl-1 text-sm">
            Message{' '}
            <span className="text-xs opacity-60">
              (describe the project, goals, timeline, etc)
            </span>
          </label>
          <textarea
            className="bg-secondary/30 mt-2 min-h-0 w-full flex-1 resize-none rounded-[12px] p-4 outline-none"
            placeholder="Tell me about your project"
          />
        </div>

        <div className="col-span-3 row-span-3 flex flex-col max-md:col-span-full">
          <div className="mb-3 h-[1rem] text-sm opacity-0"></div>
          <button
            disabled={isSubmitting}
            onClick={() => setIsSubmitting(true)}
            className="bg-accent relative flex w-full flex-1 flex-col justify-between rounded-[12px] p-6 text-left transition-opacity hover:cursor-pointer disabled:opacity-60"
          >
            <div className="text-sm opacity-80">
              Your info stays private.
              <br />I will never spam you.
            </div>
            <div className="text-[44px] leading-tight font-semibold">
              Let’s Talk
            </div>
            <LuSend className="absolute right-6 h-10 w-10" strokeWidth={1} />
          </button>
        </div>
      </div>
    </div>
  );
}
