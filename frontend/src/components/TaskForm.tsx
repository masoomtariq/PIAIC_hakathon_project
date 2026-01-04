import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

interface Task {
  _id?: string;
  title: string;
  description?: string;
  dueDate: string;
  priority: 'High' | 'Medium' | 'Low';
  completed?: boolean;
}

interface TaskFormProps {
  task?: Task | null;
  onSubmit: (data: Omit<Task, '_id' | 'completed'>) => void;
  onCancel: () => void;
}

export const TaskForm: React.FC<TaskFormProps> = ({ task, onSubmit, onCancel }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<Task>({
    defaultValues: task || {
      title: '',
      description: '',
      dueDate: new Date().toISOString().split('T')[0],
      priority: 'Medium',
    },
  });

  useEffect(() => {
    if (task) {
      reset({
        title: task.title,
        description: task.description,
        dueDate: task.dueDate.split('T')[0],
        priority: task.priority,
      });
    }
  }, [task, reset]);

  const onFormSubmit = (data: Task) => {
    onSubmit({
      title: data.title,
      description: data.description,
      dueDate: data.dueDate,
      priority: data.priority,
    });
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className="bg-gray-50 p-6 rounded-lg border-2 border-gray-200 mb-6">
      <h3 className="text-lg font-bold text-gray-800 mb-4">
        {task ? 'Edit Task' : 'Create New Task'}
      </h3>

      <div className="space-y-4">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Task Title *</label>
          <input
            type="text"
            {...register('title', { required: 'Title is required' })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            placeholder="Enter task title"
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea
            {...register('description')}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
            placeholder="Enter task description (optional)"
            rows={3}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* Due Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Due Date *</label>
            <input
              type="date"
              {...register('dueDate', { required: 'Due date is required' })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
            {errors.dueDate && <p className="text-red-500 text-sm mt-1">{errors.dueDate.message}</p>}
          </div>

          {/* Priority */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Priority *</label>
            <select
              {...register('priority', { required: 'Priority is required' })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
            {errors.priority && <p className="text-red-500 text-sm mt-1">{errors.priority.message}</p>}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 pt-2">
          <button
            type="submit"
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition"
          >
            {task ? 'Update Task' : 'Create Task'}
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 rounded-lg transition"
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
};
