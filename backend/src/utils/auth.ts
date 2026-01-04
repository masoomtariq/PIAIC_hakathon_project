import jwt from 'jsonwebtoken';
import bcryptjs from 'bcryptjs';

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key_change_in_production';
const JWT_EXPIRY = '24h';

export interface TokenPayload {
  userId: string;
  email: string;
}

export const generateToken = (userId: string, email: string): string => {
  return jwt.sign({ userId, email } as TokenPayload, JWT_SECRET, {
    expiresIn: JWT_EXPIRY,
  });
};

export const verifyToken = (token: string): TokenPayload | null => {
  try {
    return jwt.verify(token, JWT_SECRET) as TokenPayload;
  } catch (_error) {
    return null;
  }
};

export const hashPassword = async (password: string): Promise<string> => {
  const salt = await bcryptjs.genSalt(10);
  return bcryptjs.hash(password, salt);
};

export const comparePassword = async (
  plainPassword: string,
  hashedPassword: string
): Promise<boolean> => {
  return bcryptjs.compare(plainPassword, hashedPassword);
};
