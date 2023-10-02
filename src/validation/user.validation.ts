import { z } from 'zod';
import { Types } from 'mongoose';

class Validation {
  update = {
    params: z.object({
      id: z.string().refine((value) => Types.ObjectId.isValid(value), {
        message: 'Invalid ObjectId format',
      }),
    }),
    body: z.object({
      firstname: z.string().min(1).max(255).optional(),
      lastname: z.string().min(1).max(255).optional(),
      language: z
        .enum([
          'chinese',
          'english',
          'french',
          'hausa',
          'hindi',
          'igbo',
          'italian',
          'japanese',
          'korean',
          'russian',
          'spanish',
          'yoruba',
        ])
        .optional(), // Check for a valid email address
    }),
  };
}

export const userValidation = new Validation();
