import { z } from 'zod';

export const ContactFormSchema = z.object({
  user_name: z.string().min(2, { message: 'name message' }),
  user_email: z.string().email({ message: 'email message' }),
  message: z
    .string()
    .min(5, { message: 'min message' })
    .max(500, { message: 'max message' }),
});

export type ContactFormSchemaT = z.infer<typeof ContactFormSchema>;
