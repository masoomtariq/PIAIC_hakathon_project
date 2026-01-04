import { Response } from 'express';
import { AuthRequest } from '../middleware/auth.js';
import { Task } from '../models/Task.js';
import { createTaskSchema, updateTaskSchema } from '../utils/validation.js';
import logger from '../utils/logger.js';
import mongoose from 'mongoose';

export const createTask = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    if (!req.user) {
      res.status(401).json({ error: 'Not authenticated' });
      return;
    }

    const { error, value } = createTaskSchema.validate(req.body);
    if (error) {
      res.status(400).json({ error: error.details[0].message });
      return;
    }

    const task = new Task({
      ...value,
      userId: req.user.userId,
    });

    await task.save();
    res.status(201).json(task);
  } catch (error) {
    logger.error('Create task error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getTasks = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    if (!req.user) {
      res.status(401).json({ error: 'Not authenticated' });
      return;
    }

    const {
      categoryId,
      priority,
      completed,
      startDate,
      endDate,
      sort = 'dueDate',
    } = req.query;

    const filter: any = { userId: req.user.userId };

    if (categoryId) {
      filter.categoryId = categoryId;
    }
    if (priority) {
      filter.priority = priority;
    }
    if (completed !== undefined) {
      filter.completed = completed === 'true';
    }

    if (startDate || endDate) {
      filter.dueDate = {};
      if (startDate) {
        filter.dueDate.$gte = new Date(startDate as string);
      }
      if (endDate) {
        filter.dueDate.$lte = new Date(endDate as string);
      }
    }

    const sortObj: any = {};
    if (sort === 'dueDate') {
      sortObj.dueDate = 1;
    } else if (sort === 'priority') {
      const priorityOrder = { High: 0, Medium: 1, Low: 2 };
      // MongoDB doesn't support sorting by custom order easily, so we'll sort by creation date as fallback
      sortObj.createdAt = -1;
    } else {
      sortObj[sort as string] = -1;
    }

    const tasks = await Task.find(filter).sort(sortObj).lean();

    res.json({ tasks, count: tasks.length });
  } catch (error) {
    logger.error('Get tasks error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getTaskById = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    if (!req.user) {
      res.status(401).json({ error: 'Not authenticated' });
      return;
    }

    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({ error: 'Invalid task ID' });
      return;
    }

    const task = await Task.findOne({ _id: id, userId: req.user.userId });

    if (!task) {
      res.status(404).json({ error: 'Task not found' });
      return;
    }

    res.json(task);
  } catch (error) {
    logger.error('Get task error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const updateTask = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    if (!req.user) {
      res.status(401).json({ error: 'Not authenticated' });
      return;
    }

    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({ error: 'Invalid task ID' });
      return;
    }

    const { error, value } = updateTaskSchema.validate(req.body);
    if (error) {
      res.status(400).json({ error: error.details[0].message });
      return;
    }

    const task = await Task.findOneAndUpdate(
      { _id: id, userId: req.user.userId },
      { ...value, updatedAt: new Date() },
      { new: true }
    );

    if (!task) {
      res.status(404).json({ error: 'Task not found' });
      return;
    }

    res.json(task);
  } catch (error) {
    logger.error('Update task error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const deleteTask = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    if (!req.user) {
      res.status(401).json({ error: 'Not authenticated' });
      return;
    }

    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({ error: 'Invalid task ID' });
      return;
    }

    const task = await Task.findOneAndDelete({ _id: id, userId: req.user.userId });

    if (!task) {
      res.status(404).json({ error: 'Task not found' });
      return;
    }

    res.status(204).send();
  } catch (error) {
    logger.error('Delete task error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const toggleTaskComplete = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    if (!req.user) {
      res.status(401).json({ error: 'Not authenticated' });
      return;
    }

    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({ error: 'Invalid task ID' });
      return;
    }

    const task = await Task.findOne({ _id: id, userId: req.user.userId });

    if (!task) {
      res.status(404).json({ error: 'Task not found' });
      return;
    }

    task.completed = !task.completed;
    task.updatedAt = new Date();
    await task.save();

    res.json({ _id: task._id, completed: task.completed, updatedAt: task.updatedAt });
  } catch (error) {
    logger.error('Toggle task error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
