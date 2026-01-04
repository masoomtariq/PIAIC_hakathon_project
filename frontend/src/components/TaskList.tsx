import React from 'react';

interface Task {
  _id: string;
  title: string;
  description?: string;
  dueDate: string;
  priority: 'High' | 'Medium' | 'Low';
  completed: boolean;
  createdAt: string;
  updatedAt: string;
}

interface TaskListProps {
  tasks: Task[];
  onEdit: (task: Task) => void;
  onDelete: (taskId: string) => void;
  onToggle: (taskId: string) => void;
}

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'High':
      return 'bg-red-100 text-red-800';
    case 'Medium':
      return 'bg-yellow-100 text-yellow-800';
    case 'Low':
      return 'bg-green-100 text-green-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

export const TaskList: React.FC<TaskListProps> = ({ tasks, onEdit, onDelete, onToggle }) => {
  if (tasks.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No tasks yet. Create one to get started! 🚀</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {tasks.map((task) => (
        <div
          key={task._id}
          className={`p-4 rounded-lg border-2 transition ${
            task.completed
              ? 'bg-gray-50 border-gray-200 opacity-60'
              : 'bg-white border-gray-200 hover:border-blue-300'
          }`}
        >
          <div className="flex items-start gap-4">
            {/* Checkbox */}
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggle(task._id)}
              className="mt-1 w-5 h-5 rounded cursor-pointer accent-blue-600"
            />

            {/* Task Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1">
                  <h4
                    className={`font-semibold text-lg ${
                      task.completed ? 'line-through text-gray-500' : 'text-gray-800'
                    }`}
                  >
                    {task.title}
                  </h4>
                  {task.description && (
                    <p className="text-gray-600 text-sm mt-1">{task.description}</p>
                  )}
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${getPriorityColor(task.priority)}`}>
                  {task.priority}
                </span>
              </div>

              {/* Task Meta */}
              <div className="flex items-center gap-4 mt-3 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  📅 <span>{formatDate(task.dueDate)}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              <button
                onClick={() => onEdit(task)}
                className="px-3 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 font-semibold text-sm transition"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(task._id)}
                className="px-3 py-1 bg-red-100 text-red-700 rounded hover:bg-red-200 font-semibold text-sm transition"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
