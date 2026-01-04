import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../hooks/redux';
import { clearAuth } from '../store/authSlice';
import toast from 'react-hot-toast';

interface User {
  _id: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

interface UserProfileProps {
  user: User | null;
  showMenu: boolean;
  onMenuToggle: () => void;
}

export const UserProfile: React.FC<UserProfileProps> = ({ user, showMenu, onMenuToggle }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(clearAuth());
    localStorage.removeItem('token');
    toast.success('Logged out successfully!');
    navigate('/login');
  };

  const getInitials = (email: string) => {
    return email
      .split('@')[0]
      .split('.')
      .map((part) => part[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="relative">
      {/* Profile Icon Button */}
      <button
        onClick={onMenuToggle}
        className="w-10 h-10 rounded-full border-2 border-blue-600 bg-blue-600 text-white font-semibold flex items-center justify-center hover:bg-blue-700 transition cursor-pointer"
        title={user?.email}
      >
        {user ? getInitials(user.email) : '?'}
      </button>

      {/* Dropdown Menu */}
      {showMenu && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
          {user && (
            <>
              <div className="px-4 py-3 border-b border-gray-200">
                <p className="text-sm text-gray-600">Logged in as</p>
                <p className="text-sm font-semibold text-gray-800 truncate">{user.email}</p>
              </div>
              <div className="px-4 py-2 text-xs text-gray-500">
                <p>Member since {new Date(user.createdAt).toLocaleDateString()}</p>
              </div>
            </>
          )}
          <button
            onClick={handleLogout}
            className="w-full text-left px-4 py-3 text-red-600 hover:bg-red-50 font-semibold transition text-sm"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};
