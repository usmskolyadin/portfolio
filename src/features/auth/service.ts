import { PrismaClient } from '@prisma/client';
import { RegisterInput, LoginInput, UserResponse } from '@/src/features/auth/types';
import { hash, compare } from 'bcryptjs';

const prisma = new PrismaClient();

export const registerUser = async (input: RegisterInput): Promise<UserResponse> => {
  const hashedPassword = await hash(input.password, 10);
  const user = await prisma.user.create({
    data: {
      name: input.name,
      email: input.email,
      password: hashedPassword,
    },
  });
  return user;
};

export const loginUser = async (input: LoginInput): Promise<UserResponse | null> => {
  const user = await prisma.user.findUnique({
    where: { email: input.email },
  });

  if (!user) {
    return null;
  }

  const isPasswordValid = await compare(input.password, user.password);
  
  return isPasswordValid ? user : null;
};