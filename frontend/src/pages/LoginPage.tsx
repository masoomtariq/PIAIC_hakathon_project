import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { authAPI } from '../api/client';
import { useAppDispatch } from '../hooks/redux';
import { setAuth, setError, setLoading } from '../store/authSlice';
import toast from 'react-hot-toast';

interface LoginFormData {
  email: string;
  password: string;
}

interface LoginPageProps {
  isSignup?: boolean;
}

export const LoginPage: React.FC<LoginPageProps> = ({ isSignup = false }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    try {
      const response = isSignup
        ? await authAPI.signup(data.email, data.password)
        : await authAPI.login(data.email, data.password);

      const { token, user } = response.data;
      dispatch(setAuth({ user, token }));
      toast.success(isSignup ? 'Account created!' : 'Logged in successfully!');
      navigate('/dashboard');
    } catch (error: any) {
      const errorMsg = error.response?.data?.error || 'An error occurred';
      dispatch(setError(errorMsg));
      toast.error(errorMsg);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">StudyFlow</h1>
        <p className="text-center text-gray-600 mb-8">
          {isSignup ? 'Create your account' : 'Welcome back'}
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              {...register('email', { required: 'Email is required' })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              placeholder="your@email.com"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input
              type="password"
              {...register('password', { required: 'Password is required' })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              placeholder="••••••••"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold py-2 rounded-lg transition duration-200"
          >
            {isLoading ? 'Processing...' : isSignup ? 'Sign Up' : 'Log In'}
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6">
          {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
          <button
            onClick={() => navigate(isSignup ? '/login' : '/signup')}
            className="text-blue-600 hover:underline font-semibold"
          >
            {isSignup ? 'Log in' : 'Sign up'}
          </button>
        </p>
      </div>
    </div>
  );
};
