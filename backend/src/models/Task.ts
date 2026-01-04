import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'User ID is required'],
    },
    title: {
      type: String,
      required: [true, 'Task title is required'],
      minlength: [1, 'Title must be at least 1 character'],
      maxlength: [255, 'Title cannot exceed 255 characters'],
    },
    description: {
      type: String,
      maxlength: [2000, 'Description cannot exceed 2000 characters'],
      default: '',
    },
    dueDate: {
      type: Date,
      required: [true, 'Due date is required'],
    },
    priority: {
      type: String,
      enum: {
        values: ['High', 'Medium', 'Low'],
        message: 'Priority must be High, Medium, or Low',
      },
      required: [true, 'Priority is required'],
    },
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      default: null,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// Indexes for performance
taskSchema.index({ userId: 1, dueDate: 1 });
taskSchema.index({ userId: 1, completed: 1 });
taskSchema.index({ userId: 1, categoryId: 1 });

export const Task = mongoose.model('Task', taskSchema);
