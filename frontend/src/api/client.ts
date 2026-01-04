import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authAPI = {
  signup: (email: string, password: string) =>
    apiClient.post('/users/signup', { email, password }),
  login: (email: string, password: string) =>
    apiClient.post('/users/login', { email, password }),
  getMe: () => apiClient.get('/users/me'),
};

export const tasksAPI = {
  create: (data: any) => apiClient.post('/tasks', data),
  getAll: (params?: any) => apiClient.get('/tasks', { params }),
  getById: (id: string) => apiClient.get(`/tasks/${id}`),
  update: (id: string, data: any) => apiClient.put(`/tasks/${id}`, data),
  delete: (id: string) => apiClient.delete(`/tasks/${id}`),
  toggle: (id: string) => apiClient.patch(`/tasks/${id}/toggle`),
};

export default apiClient;
