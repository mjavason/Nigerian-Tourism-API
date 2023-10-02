import { Types } from 'mongoose';
import z from 'zod';

class Validation {
  // Validation schema for creating a new tourism entry
  create = {
    body: z.object({
      name: z.string().min(1).max(255),
      state: z.string().min(1).max(255),
      description: z.string().min(1).max(255),
      image_url: z.string().min(1).max(255),
      google_map_url: z.string().min(1).max(255),
    }),
  };

  // Validation schema for updating a tourism entry
  update = {
    params: z.object({
      id: z.string().refine((value) => Types.ObjectId.isValid(value), {
        message: 'Invalid ObjectId format in id',
      }),
    }),
    body: z.object({
      name: z.string().min(1).max(255).optional(),
      state: z.string().min(1).max(255).optional(),
      description: z.string().min(1).max(255).optional(),
      image_url: z.string().min(1).max(255).optional(),
      google_map_url: z.string().min(1).max(255).optional(),
      deleted: z.boolean().optional(),
    }),
  };

  // Validation schema for finding tourism entries
  find = {
    query: z.object({
      _id: z
        .string()
        .refine((value) => Types.ObjectId.isValid(value), {
          message: 'Invalid ObjectId format in _id',
        })
        .optional(),
      name: z.string().min(1).max(255).optional(),
      state: z.string().min(1).max(255).optional(),
      description: z.string().min(1).max(255).optional(),
      image_url: z.string().min(1).max(255).optional(),
      google_map_url: z.string().min(1).max(255).optional(),
      deleted: z.string().optional(),
    }),
  };

  // Validation schema for reading a tourism entry by ID
  getById = {
    params: z.object({
      id: z.string().refine((value) => Types.ObjectId.isValid(value), {
        message: 'Invalid ObjectId format',
      }),
    }),
  };
}

export const tourismValidation = new Validation();
