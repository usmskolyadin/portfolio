import { NextApiRequest, NextApiResponse } from 'next';
import { validateRegister, validateLogin } from '@/src/features/auth/validation';
import { registerUser, loginUser } from '@/src/features/auth/service';

export const handleRegister = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const userData = validateRegister(req.body);
    const newUser = await registerUser(userData);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const handleLogin = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const loginData = validateLogin(req.body);
    const user = await loginUser(loginData);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(401).json({ error: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};