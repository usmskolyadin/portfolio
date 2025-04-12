import { PrismaClient } from '@prisma/client';
import { RegisterInput, LoginInput, UserResponse, JWTPayload, JWTResponse } from '@/src/features/auth/types';
import { hash, compare } from 'bcryptjs';
import jwt, { Secret } from 'jsonwebtoken';

const prisma = new PrismaClient();

const generateToken = (user: UserResponse): string => {
  const payload: JWTPayload = {
    id: user.id,
    email: user.email,
  };

  const secret: Secret = process.env.JWT_SECRET || 'your_secret_key';
  const options: jwt.SignOptions = { expiresIn: '15m' };

  return jwt.sign(payload, secret, options);
};

const generateRefreshToken = (user: UserResponse): string => {
  const refreshSecret: Secret = process.env.JWT_REFRESH_SECRET || 'your_refresh_secret_key';
  const payload: JWTPayload = {
    id: user.id,
    email: user.email,
  };

  const options: jwt.SignOptions = { expiresIn: '15d' }; // Refresh token expires in 15 days

  return jwt.sign(payload, refreshSecret, options);
};

const verifyToken = (token: string): JWTPayload | null => {
  const secret: Secret = process.env.JWT_SECRET || 'your_secret_key';

  try {
    return jwt.verify(token, secret) as JWTPayload;
  } catch (error) {
    console.error("Invalid token", error);
    return null;
  }
};

const verifyRefreshToken = (token: string): JWTPayload | null => {
  const refreshSecret: Secret = process.env.JWT_REFRESH_SECRET || 'your_refresh_secret_key';

  try {
    return jwt.verify(token, refreshSecret) as JWTPayload;
  } catch (error) {
    console.error("Invalid refresh token", error);
    return null;
  }
};

export const registerUser = async (input: RegisterInput): Promise<JWTResponse> => {
  const hashedPassword = await hash(input.password, 10);
  const user = await prisma.user.create({
    data: {
      name: input.name,
      email: input.email,
      password: hashedPassword,
      is_admin: false,
    },
  });

  const accessToken = generateToken(user);
  const refreshToken = generateRefreshToken(user);

  await prisma.refreshToken.create({
    data: {
      userId: user.id,
      token: refreshToken,
    },
  });

  return { user: user, access_token: accessToken, refresh_token: refreshToken };
};

export const loginUser = async (input: LoginInput): Promise<{ user: UserResponse; accessToken: string; refreshToken: string } | null> => {
  const user = await prisma.user.findUnique({
    where: { email: input.email },
  });

  if (!user) {
    return null;
  }

  const isPasswordValid = await compare(input.password, user.password);

  if (!isPasswordValid) {
    return null;
  }

  const accessToken = generateToken(user);
  const refreshToken = generateRefreshToken(user);

  await prisma.refreshToken.upsert({
    where: { userId: user.id },
    update: { token: refreshToken },
    create: { userId: user.id, token: refreshToken },
  });

  return { user, accessToken, refreshToken };
};

export const refreshTokens = async (refreshToken: string): Promise<{ accessToken: string; refreshToken: string } | null> => {
  const payload = verifyRefreshToken(refreshToken);

  if (!payload) {
    return null;
  }

  const tokenRecord = await prisma.refreshToken.findUnique({
    where: { userId: payload.id },
  });

  if (!tokenRecord || tokenRecord.token !== refreshToken) {
    return null;
  }

  // Fetch the user from the database using the id from the JWTPayload
  const user = await prisma.user.findUnique({
    where: { id: Number(payload.id) },
  });

  if (!user) {
    return null;
  }

  const newAccessToken = generateToken(user);
  const newRefreshToken = generateRefreshToken(user);

  await prisma.refreshToken.update({
    where: { userId: payload.id },
    data: { token: newRefreshToken },
  });

  return { accessToken: newAccessToken, refreshToken: newRefreshToken };
};
