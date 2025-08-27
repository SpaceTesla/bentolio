'use client';

import Select from '@/app/components/Select';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  contactFormSchema,
  type ContactFormValues,
} from '@/lib/validation/contact';
import { LuSend } from 'react-icons/lu';

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
  });

  const subject = watch('subject');

  async function onSubmit(values: ContactFormValues) {
    // TODO: hook up to API/email service
    await new Promise((r) => setTimeout(r, 600));
    reset();
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-primary hide-scrollbar h-full w-full overflow-y-auto rounded-[20px] p-4"
    >
      <div className="grid h-full grid-cols-8 grid-rows-6 gap-4 max-md:grid-cols-1">
        <div className="col-span-full row-span-1 max-md:col-span-full">
          <label className="block pl-1 text-sm" htmlFor="fullName">
            Full Name
          </label>
          <input
            id="fullName"
            className="bg-secondary/30 mt-2 w-full rounded-[12px] p-4 outline-none"
            placeholder="John Doe"
            aria-invalid={errors.fullName ? 'true' : 'false'}
            aria-describedby={errors.fullName ? 'fullName-error' : undefined}
            {...register('fullName')}
          />
          {errors.fullName ? (
            <p id="fullName-error" className="mt-2 text-xs text-red-500">
              {errors.fullName.message}
            </p>
          ) : null}
        </div>

        <div className="col-span-4 max-md:col-span-full">
          <label className="block pl-1 text-sm" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            className="bg-secondary/30 mt-2 w-full rounded-[12px] p-4 outline-none"
            placeholder="john.doe@example.com"
            aria-invalid={errors.email ? 'true' : 'false'}
            aria-describedby={errors.email ? 'email-error' : undefined}
            {...register('email')}
          />
          {errors.email ? (
            <p id="email-error" className="mt-2 text-xs text-red-500">
              {errors.email.message}
            </p>
          ) : null}
        </div>
        <div className="col-span-4 max-md:col-span-full">
          <label className="block pl-1 text-sm" htmlFor="phone">
            Phone Number <span className="opacity-60">(optional)</span>
          </label>
          <input
            id="phone"
            className="bg-secondary/30 mt-2 w-full rounded-[12px] p-4 outline-none"
            placeholder="+91 98765 43210"
            aria-invalid={errors.phone ? 'true' : 'false'}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
            {...register('phone')}
          />
          {errors.phone ? (
            <p id="phone-error" className="mt-2 text-xs text-red-500">
              {errors.phone.message}
            </p>
          ) : null}
        </div>

        <div className="col-span-full">
          <Select
            label="Subject"
            placeholder="Select an inquiry type"
            value={subject}
            onChange={(value) =>
              setValue('subject', value, { shouldValidate: true })
            }
            options={[
              { value: 'collaboration', label: 'Collaboration' },
              { value: 'job-offer', label: 'Job Offer' },
              { value: 'project-inquiry', label: 'Project Inquiry' },
              { value: 'general-question', label: 'General Question' },
              { value: 'other', label: 'Other' },
            ]}
            error={errors.subject?.message}
          />
        </div>

        <div className="col-span-5 row-span-3 flex min-h-0 flex-col max-md:col-span-full">
          <label className="block pl-1 text-sm" htmlFor="message">
            Message{' '}
            <span className="text-xs opacity-60">
              (describe the project, goals, timeline, etc)
            </span>
          </label>
          <textarea
            id="message"
            className="bg-secondary/30 mt-2 min-h-0 w-full flex-1 resize-none rounded-[12px] p-4 outline-none"
            placeholder="Tell me about your project"
            aria-invalid={errors.message ? 'true' : 'false'}
            aria-describedby={errors.message ? 'message-error' : undefined}
            {...register('message')}
          />
          {errors.message ? (
            <p id="message-error" className="mt-2 text-xs text-red-500">
              {errors.message.message}
            </p>
          ) : null}
        </div>

        <div className="col-span-3 row-span-3 flex flex-col max-md:col-span-full">
          <div className="mb-3 h-[1rem] text-sm opacity-0"></div>
          <button
            type="submit"
            disabled={isSubmitting}
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
    </form>
  );
}
