export interface User {
  _id: string;
  email: string;
  createdAt: string;
}

export interface Task {
  _id: string;
  userId: string;
  title: string;
  description?: string;
  dueDate: string;
  priority: 'High' | 'Medium' | 'Low';
  categoryId?: string | null;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  _id: string;
  userId: string;
  name: string;
  color: string;
  createdAt: string;
  updatedAt: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}
