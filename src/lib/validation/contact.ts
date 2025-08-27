import { z } from 'zod';

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be at most 50 characters'),
  email: z.string().trim().email('Please enter a valid email address'),
  phone: z
    .string()
    .trim()
    .refine(
      (value: string) => value === '' || /^\+?[0-9]{10,15}$/.test(value),
      'Phone must be 10–15 digits (optionally prefixed with +)',
    ),
  subject: z.string().min(1, 'Please select a subject'),
  message: z
    .string()
    .trim()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be at most 1000 characters'),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
