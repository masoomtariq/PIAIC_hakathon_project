import Joi from 'joi';

// Auth Validation Schemas
export const signupSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
}).unknown(false);

export const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
}).unknown(false);

// Task Validation Schemas
export const createTaskSchema = Joi.object({
  title: Joi.string().min(1).max(255).required(),
  description: Joi.string().max(2000).optional(),
  dueDate: Joi.date().required(),
  priority: Joi.string().valid('High', 'Medium', 'Low').required(),
  categoryId: Joi.string().optional().allow(null),
}).unknown(false);

export const updateTaskSchema = Joi.object({
  title: Joi.string().min(1).max(255).optional(),
  description: Joi.string().max(2000).optional(),
  dueDate: Joi.date().optional(),
  priority: Joi.string().valid('High', 'Medium', 'Low').optional(),
  categoryId: Joi.string().optional().allow(null),
  completed: Joi.boolean().optional(),
}).unknown(false);

// Category Validation Schemas
export const createCategorySchema = Joi.object({
  name: Joi.string().min(1).max(50).required(),
  color: Joi.string()
    .regex(/^#[0-9A-Fa-f]{6}$/)
    .optional(),
}).unknown(false);

export const updateCategorySchema = Joi.object({
  name: Joi.string().min(1).max(50).optional(),
  color: Joi.string()
    .regex(/^#[0-9A-Fa-f]{6}$/)
    .optional(),
}).unknown(false);
