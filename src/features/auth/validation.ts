import { z } from 'zod';
import { RegisterInput, LoginInput } from './types';

const registerSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  password: z.string().min(6),
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const validateRegister = (data: RegisterInput) => registerSchema.parse(data);
export const validateLogin = (data: LoginInput) => loginSchema.parse(data);