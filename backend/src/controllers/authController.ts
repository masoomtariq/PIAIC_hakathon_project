import { Response } from 'express';
import { AuthRequest } from '../middleware/auth.js';
import { User } from '../models/User.js';
import { hashPassword, comparePassword, generateToken } from '../utils/auth.js';
import { signupSchema, loginSchema } from '../utils/validation.js';
import logger from '../utils/logger.js';

export const signup = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { error, value } = signupSchema.validate(req.body);
    if (error) {
      res.status(400).json({ error: error.details[0].message });
      return;
    }

    const { email, password } = value as { email: string; password: string };

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(409).json({ error: 'Email already registered' });
      return;
    }

    const passwordHash = await hashPassword(password);
    const user = new User({ email, passwordHash });
    await user.save();

    const token = generateToken(user._id.toString(), user.email);
    const userObject = user.toObject();
    delete userObject.passwordHash;
    delete userObject.__v;
    res.status(201).json({ token, user: userObject });
  } catch (error) {
    logger.error('Signup error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const login = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { error, value } = loginSchema.validate(req.body);
    if (error) {
      res.status(400).json({ error: error.details[0].message });
      return;
    }

    const { email, password } = value as { email: string; password: string };

    const user = await User.findOne({ email });
    if (!user) {
      res.status(401).json({ error: 'Invalid email or password' });
      return;
    }

    const isPasswordValid = await comparePassword(password, user.passwordHash);
    if (!isPasswordValid) {
      res.status(401).json({ error: 'Invalid email or password' });
      return;
    }

    const token = generateToken(user._id.toString(), user.email);
    const userObject = user.toObject();
    delete userObject.passwordHash;
    delete userObject.__v;
    res.json({ token, user: userObject });
  } catch (error) {
    logger.error('Login error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getCurrentUser = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    if (!req.user) {
      res.status(401).json({ error: 'Not authenticated' });
      return;
    }

    const user = await User.findById(req.user.userId);
    if (!user) {
      res.status(404).json({ error: 'User not found' });
      return;
    }

    const userObject = user.toObject();
    delete userObject.passwordHash;
    delete userObject.__v;
    res.json({ user: userObject });
  } catch (error) {
    logger.error('Get current user error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
