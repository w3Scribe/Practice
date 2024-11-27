import { z } from 'zod';

const userDetailsSchema = z.object({
  name: z.string().trim().min(3, 'Name must be at least 3 characters long'),
  age: z.number().positive().int(),
  username: z.string().trim().min(3, 'Username must be at least 3 characters long'),
  email: z.string().trim().email(),
  address: z.object({
    city: z.string().trim().min(3, 'City must be at least 3 characters long'),
    country: z.string().trim().min(3, 'Country must be at least 3 characters long'),
  }),
});

type IUserDetails = z.infer<typeof userDetailsSchema>;
