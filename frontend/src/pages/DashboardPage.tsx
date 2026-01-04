import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../hooks/redux';
import { tasksAPI, authAPI } from '../api/client';
import toast from 'react-hot-toast';
import { TaskList } from '../components/TaskList';
import { TaskForm } from '../components/TaskForm';
import { UserProfile } from '../components/UserProfile';

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

interface User {
  _id: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

export const DashboardPage: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const userEmail = useAppSelector((state) => state.auth.user?.email);

  // Fetch user profile and tasks
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        
        // Get user profile
        const userResponse = await authAPI.getMe();
        setUser(userResponse.data.user);

        // Get all tasks
        const tasksResponse = await tasksAPI.getAll();
        setTasks(tasksResponse.data.tasks || []);
      } catch (error: any) {
        const errorMsg = error.response?.data?.error || 'Failed to load data';
        toast.error(errorMsg);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleCreateTask = async (taskData: Omit<Task, '_id' | 'createdAt' | 'updatedAt' | 'completed'>) => {
    try {
      const response = await tasksAPI.create({
        title: taskData.title,
        description: taskData.description,
        dueDate: taskData.dueDate,
        priority: taskData.priority,
      });
      setTasks([...tasks, response.data]);
      toast.success('Task created successfully!');
      setShowForm(false);
    } catch (error: any) {
      const errorMsg = error.response?.data?.error || 'Failed to create task';
      toast.error(errorMsg);
    }
  };

  const handleUpdateTask = async (taskId: string, taskData: Partial<Task>) => {
    try {
      const response = await tasksAPI.update(taskId, taskData);
      setTasks(tasks.map((t) => (t._id === taskId ? response.data : t)));
      toast.success('Task updated successfully!');
      setEditingTask(null);
      setShowForm(false);
    } catch (error: any) {
      const errorMsg = error.response?.data?.error || 'Failed to update task';
      toast.error(errorMsg);
    }
  };

  const handleDeleteTask = async (taskId: string) => {
    try {
      await tasksAPI.delete(taskId);
      setTasks(tasks.filter((t) => t._id !== taskId));
      toast.success('Task deleted successfully!');
    } catch (error: any) {
      const errorMsg = error.response?.data?.error || 'Failed to delete task';
      toast.error(errorMsg);
    }
  };

  const handleToggleTask = async (taskId: string) => {
    try {
      const response = await tasksAPI.toggle(taskId);
      setTasks(tasks.map((t) => (t._id === taskId ? response.data : t)));
      toast.success('Task toggled successfully!');
    } catch (error: any) {
      const errorMsg = error.response?.data?.error || 'Failed to toggle task';
      toast.error(errorMsg);
    }
  };

  const handleEditTask = (task: Task) => {
    setEditingTask(task);
    setShowForm(true);
  };

  const handleCancelEdit = () => {
    setEditingTask(null);
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800">StudyFlow Dashboard</h1>
          <UserProfile
            user={user}
            showMenu={showProfileMenu}
            onMenuToggle={() => setShowProfileMenu(!showProfileMenu)}
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <p className="text-gray-600 text-lg">Loading...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Tasks Section */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">My Tasks</h2>
                  <button
                    onClick={() => setShowForm(!showForm)}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition"
                  >
                    {showForm ? 'Cancel' : 'Add Task'}
                  </button>
                </div>

                {/* Task Form */}
                {showForm && (
                  <TaskForm
                    task={editingTask}
                    onSubmit={(data) =>
                      editingTask
                        ? handleUpdateTask(editingTask._id, data)
                        : handleCreateTask(data)
                    }
                    onCancel={handleCancelEdit}
                  />
                )}

                {/* Task List */}
                <TaskList
                  tasks={tasks}
                  onEdit={handleEditTask}
                  onDelete={handleDeleteTask}
                  onToggle={handleToggleTask}
                />
              </div>
            </div>

            {/* Stats Section */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Statistics</h3>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-gray-600">Total Tasks</p>
                    <p className="text-3xl font-bold text-blue-600">{tasks.length}</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-gray-600">Completed</p>
                    <p className="text-3xl font-bold text-green-600">
                      {tasks.filter((t) => t.completed).length}
                    </p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <p className="text-gray-600">Pending</p>
                    <p className="text-3xl font-bold text-orange-600">
                      {tasks.filter((t) => !t.completed).length}
                    </p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <p className="text-gray-600">High Priority</p>
                    <p className="text-3xl font-bold text-red-600">
                      {tasks.filter((t) => t.priority === 'High' && !t.completed).length}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};
