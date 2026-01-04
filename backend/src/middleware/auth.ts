import { Request, Response, NextFunction } from 'express';
import { verifyToken, TokenPayload } from '../utils/auth.js';
import logger from '../utils/logger.js';

export interface AuthRequest extends Request {
  user?: TokenPayload;
}

export const authMiddleware = (req: AuthRequest, res: Response, next: NextFunction): void => {
  try {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      res.status(401).json({ error: 'No token provided' });
      return;
    }

    const payload = verifyToken(token);
    if (!payload) {
      res.status(401).json({ error: 'Invalid or expired token' });
      return;
    }

    req.user = payload;
    next();
  } catch (error) {
    logger.error('Auth middleware error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const errorHandler = (
  error: Error | { statusCode?: number; message?: string },
  _req: Request,
  res: Response,
  _next: NextFunction
): void => {
  logger.error('Unhandled error:', error);

  const statusCode = (error as { statusCode?: number }).statusCode || 500;
  const message = error.message || 'Internal server error';

  res.status(statusCode).json({ error: message });
};
